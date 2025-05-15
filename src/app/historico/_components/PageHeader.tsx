'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface PageHeaderProps {
  title: string
  subtitle: string
  backLink: string
  backLinkText: string
}

export function PageHeader({
  title,
  subtitle,
  backLink,
  backLinkText,
}: PageHeaderProps) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
        <p className="text-gray-600">{subtitle}</p>
      </div>
      <Button variant="outline" size="lg" className="gap-2" asChild>
        <Link href={backLink}>{backLinkText}</Link>
      </Button>
    </div>
  )
}
