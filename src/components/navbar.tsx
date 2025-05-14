'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu'

const routes = [
  { name: 'Home', path: '/' },
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Configurações', path: '/config' },
]

export function Navbar() {
  const pathname = usePathname()
  const isActive = (path: string) => pathname === path

  return (
    <NavigationMenu className="flex justify-center max-w-full w-full px-4 py-2 border-b">
      <NavigationMenuList>
        {routes.map((routes, i) => (
          <NavigationMenuItem key={i}>
            <Link href={routes.path} className="text-sm">
              <NavigationMenuLink
                className={`${
                  isActive(routes.path)
                    ? 'bg-cyan-700 text-white hover:bg-cyan-600 hover:text-white transition-colors'
                    : navigationMenuTriggerStyle()
                } `}
              >
                {routes.name}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
