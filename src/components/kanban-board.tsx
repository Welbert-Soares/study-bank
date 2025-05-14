'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  NotionTask,
  getKanbanTasks,
  updateTaskStatus,
  createTask,
} from '@/lib/notion-service'

const STATUSES = ['To Do', 'In Progress', 'Done']

export default function KanbanBoard() {
  const [tasks, setTasks] = useState<NotionTask[]>([])
  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadTasks()
  }, [])

  async function loadTasks() {
    try {
      const tasks = await getKanbanTasks()
      setTasks(tasks)
    } catch (error) {
      console.error('Error loading tasks:', error)
    } finally {
      setLoading(false)
    }
  }

  async function handleCreateTask() {
    if (!newTaskTitle.trim()) return

    try {
      await createTask(newTaskTitle, 'To Do')
      setNewTaskTitle('')
      await loadTasks()
    } catch (error) {
      console.error('Error creating task:', error)
    }
  }

  async function handleDragStart(e: React.DragEvent, taskId: string) {
    e.dataTransfer.setData('taskId', taskId)
  }

  async function handleDrop(e: React.DragEvent, status: string) {
    e.preventDefault()
    const taskId = e.dataTransfer.getData('taskId')

    try {
      await updateTaskStatus(taskId, status)
      await loadTasks()
    } catch (error) {
      console.error('Error updating task:', error)
    }
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault()
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Kanban Board</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Add New Task</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Task</DialogTitle>
            </DialogHeader>
            <div className="flex gap-2">
              <Input
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                placeholder="Enter task title"
              />
              <Button onClick={handleCreateTask}>Create</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {STATUSES.map((status) => (
          <div
            key={status}
            onDrop={(e) => handleDrop(e, status)}
            onDragOver={handleDragOver}
            className="bg-gray-100 p-4 rounded-lg"
          >
            <h2 className="font-semibold mb-4">{status}</h2>
            <div className="space-y-2">
              {tasks
                .filter((task) => task.status === status)
                .map((task) => (
                  <Card
                    key={task.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, task.id)}
                    className="p-3 cursor-move"
                  >
                    <h3>{task.title}</h3>
                    {task.dueDate && (
                      <p className="text-sm text-gray-500">
                        Due: {new Date(task.dueDate).toLocaleDateString()}
                      </p>
                    )}
                    {task.assignee && (
                      <p className="text-sm text-gray-500">
                        Assignee: {task.assignee}
                      </p>
                    )}
                  </Card>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
