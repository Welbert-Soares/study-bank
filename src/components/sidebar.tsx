'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { UserButton } from '@clerk/nextjs'
import { Home, FolderKanban, ListChecks, Menu, X, Calendar } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { Sheet, SheetContent } from './ui/sheet'

interface NavItem {
  title: string
  href: string
  icon: React.ElementType
  badge?: string
}

const navItems: NavItem[] = [
  { title: 'Home', href: '/', icon: Home },
  { title: 'Planos', href: '/planos', icon: FolderKanban },
  { title: 'Planejamento', href: '/planejamento', icon: Calendar },
  { title: 'Simulados', href: '/simulados', icon: ListChecks, badge: 'BREVE' },
]

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
      if (window.innerWidth < 1024) {
        setIsOpen(false)
      }
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <>
      {/* Mobile Menu Button */}
      {isMobile && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMobileOpen(true)}
          className="fixed top-4 left-4 z-50 bg-teal-500 text-white hover:bg-teal-600 lg:hidden"
        >
          <Menu className="w-5 h-5" />
        </Button>
      )}

      {/* Mobile Sidebar */}
      {isMobile && (
        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
          <SheetContent
            side="left"
            className="w-60 p-0 bg-gradient-to-b from-teal-500 to-teal-600 text-white border-none"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <Link
                href="/"
                className="flex items-center gap-2"
                onClick={() => setIsMobileOpen(false)}
              >
                <span className="text-2xl font-bold">Estudei</span>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-1 p-3">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={cn(
                      'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors',
                      isActive
                        ? 'bg-white/20 text-white font-medium'
                        : 'text-white/90 hover:bg-white/10 hover:text-white',
                    )}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <div className="flex items-center justify-between flex-1">
                      <span className="text-sm">{item.title}</span>
                      {item.badge && (
                        <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-medium">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </Link>
                )
              })}
            </nav>

            {/* User at Bottom */}
            <div className="absolute bottom-4 left-0 right-0 px-4">
              <div className="flex items-center gap-3 p-2 rounded-lg bg-white/10">
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: 'w-8 h-8',
                    },
                  }}
                />
                <p className="text-sm font-medium text-white truncate">
                  Meu Perfil
                </p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      )}

      {/* Desktop Sidebar */}
      {!isMobile && (
        <>
          {/* Floating Menu Button when sidebar is closed */}
          {!isOpen && (
            <Button
              onClick={() => setIsOpen(true)}
              className="fixed top-4 left-4 z-50 w-12 h-12 rounded-lg bg-teal-500 hover:bg-teal-600 text-white shadow-lg"
            >
              <Menu className="w-5 h-5" />
            </Button>
          )}

          {/* Sidebar */}
          <aside
            className={cn(
              'fixed left-0 top-0 z-40 h-screen bg-gradient-to-b from-teal-500 to-teal-600 text-white transition-all duration-300 ease-in-out shadow-xl',
              isOpen ? 'translate-x-0 w-60' : '-translate-x-full w-60',
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-2xl font-bold">Estudei</span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/10 flex-shrink-0"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-1 p-3">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors',
                      isActive
                        ? 'bg-white/20 text-white font-medium'
                        : 'text-white/90 hover:bg-white/10 hover:text-white',
                    )}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <div className="flex items-center justify-between flex-1">
                      <span className="text-sm">{item.title}</span>
                      {item.badge && (
                        <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-medium">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </Link>
                )
              })}
            </nav>

            {/* User Button at Bottom */}
            <div className="absolute bottom-4 left-0 right-0 px-4">
              <div className="flex items-center gap-3 p-2 rounded-lg bg-white/10 w-full">
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: 'w-8 h-8',
                    },
                  }}
                />
                <div className="flex-1 overflow-hidden">
                  <p className="text-sm font-medium text-white truncate">
                    Meu Perfil
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* Spacer for content - only when sidebar is open */}
          {isOpen && <div className="w-60" />}
        </>
      )}
    </>
  )
}
