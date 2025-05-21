import Link from 'next/link'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'

interface NavbarItem {
  href: string
  children: React.ReactNode
}

interface INavbarSidebar {
  items: NavbarItem[]
  open: boolean
  onOpenChange: (open: boolean) => void
}

const NavbarSidebar = ({ items, open, onOpenChange }: INavbarSidebar) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="p-0 transition-none">
        <SheetHeader className="p-4 border-b">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <span className="flex items-center px-4 text-lg font-bold text-primary">
          Bem vindo(a) de volta!
        </span>
        <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="w-full text-left p-4 hover:bg-primary/50 hover:text-white flex items-center text-base font-medium rounded-2xl"
              onClick={() => onOpenChange(false)}
            >
              {item.children}
            </Link>
          ))}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

export { NavbarSidebar }
