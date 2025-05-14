'use client'

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
  { name: 'Métricas', path: '/metricas' },
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
            <NavigationMenuLink
              className={`${
                isActive(routes.path)
                  ? 'bg-cyan-700 text-white hover:bg-cyan-600 hover:text-white transition-colors'
                  : navigationMenuTriggerStyle()
              } `}
              href={routes.path}
            >
              {routes.name}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
