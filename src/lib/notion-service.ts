import { notion, databaseId } from './notion'

export type NotionTask = {
  id: string
  title: string
  status: string
  dueDate?: string
  assignee?: string
}

export async function getKanbanTasks(): Promise<NotionTask[]> {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: 'Status',
          direction: 'ascending',
        },
      ],
    })

    return response.results.map((page: any) => ({
      id: page.id,
      title: page.properties.Name.title[0]?.plain_text || 'Untitled',
      status: page.properties.Status.select?.name || 'No Status',
      dueDate: page.properties['Due Date']?.date?.start,
      assignee: page.properties.Assignee?.people[0]?.name,
    }))
  } catch (error) {
    console.error('Error fetching Notion tasks:', error)
    throw error
  }
}

export async function updateTaskStatus(taskId: string, status: string) {
  try {
    await notion.pages.update({
      page_id: taskId,
      properties: {
        Status: {
          select: {
            name: status,
          },
        },
      },
    })
  } catch (error) {
    console.error('Error updating task status:', error)
    throw error
  }
}

export async function createTask(title: string, status: string) {
  try {
    await notion.pages.create({
      parent: {
        database_id: databaseId,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: title,
              },
            },
          ],
        },
        Status: {
          select: {
            name: status,
          },
        },
      },
    })
  } catch (error) {
    console.error('Error creating task:', error)
    throw error
  }
}
