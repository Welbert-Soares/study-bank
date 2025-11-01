'use client'

import { Bell, Moon } from 'lucide-react'
import { Button } from './ui/button'
import { UserButton as ClerkUserButton } from '@clerk/nextjs'

export function TopHeader() {
  return (
    <header className="sticky top-0 z-30 h-16 bg-white flex items-center justify-end px-6 gap-3">
      {/* Notifications */}
      <Button
        variant="ghost"
        size="icon"
        className="text-teal-500 hover:bg-teal-50"
      >
        <Bell className="w-5 h-5" />
      </Button>

      {/* Dark Mode */}
      <Button
        variant="ghost"
        size="icon"
        className="text-gray-600 hover:bg-gray-100"
      >
        <Moon className="w-5 h-5" />
      </Button>

      {/* User Button */}
      <ClerkUserButton
        appearance={{
          elements: {
            avatarBox: 'w-9 h-9',
          },
        }}
      />
    </header>
  )
}
