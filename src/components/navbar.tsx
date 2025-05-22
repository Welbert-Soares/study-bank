'use client'

import { useState } from 'react'
import Link from 'next/link'

import { MenuIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs'

import { cn } from '@/lib/utils'

import { NavbarSidebar } from './navbar-sidebar'
import { Button } from './ui/button'

interface NavbarItemProps {
  href: string
  children: React.ReactNode
  isActive?: boolean
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Button
      asChild
      variant="outline"
      className={cn(
        'bg-transparent hover:bg-transparent rounded-md hover:border-primary border-primary/10 px-3.5 text-lg',
        isActive &&
          'bg-primary text-white hover:bg-primary/90 hover:text-white',
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  )
}

const navbarItems = [
  { href: '/', children: 'Início' },
  { href: '/dashboard', children: 'Meta Diária' },
  // { name: 'Histórico', path: '/historico' },
  { href: '/metricas', children: 'Progresso' },
  { href: '/config', children: 'Matérias' },
]

export function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const pathname = usePathname()

  return (
    <nav className="h-20 flex items-center border-b border-primary/10 justify-between font-medium p-3">
      <div className="flex justify-center items-center cursor-pointer">
        <Link href="/">
          <img
            src="/logo.svg"
            alt="logo"
            width={80}
            height={40}
            className="rounded-lg"
          />
        </Link>
      </div>
      <NavbarSidebar
        items={navbarItems}
        open={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
      />{' '}
      <SignedIn>
        <div className="items-center gap-4 hidden lg:flex">
          {navbarItems.map((item) => (
            <NavbarItem
              key={item.href}
              href={item.href}
              isActive={pathname === item.href}
            >
              {item.children}
            </NavbarItem>
          ))}
        </div>
      </SignedIn>{' '}
      <SignedOut>
        {' '}
        <div className="text-4xl tracking-tighter font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/70 hover:from-primary hover:to-primary/80 transition-all select-none">
          STUDY PLAN
        </div>
      </SignedOut>
      <div className="hidden lg:flex gap-2">
        <>
          <SignedOut>
            <div className="flex gap-2">
              {' '}
              <Button
                asChild
                variant="default"
                className="bg-primary text-white hover:bg-primary/90 hover:text-white"
              >
                <SignInButton>Entrar</SignInButton>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-primary/10 hover:bg-primary/10"
              >
                <SignUpButton>Criar conta</SignUpButton>
              </Button>
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </>
      </div>
      <div className="flex lg:hidden items-center justify-center p-2">
        <Button
          variant="ghost"
          className="size-12 border-transparent bg-primary/50"
          onClick={() => setIsSidebarOpen(true)}
        >
          <MenuIcon />
        </Button>
      </div>
    </nav>
  )
}
