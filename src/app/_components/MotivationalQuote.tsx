import { Card, CardContent } from '@/components/ui/card'

export function MotivationalQuote() {
  const quote = {
    text: '"Mude seus pensamentos e você muda seu mundo"',
    author: '— Norman Vicent Peale',
  }

  return (
    <Card className="bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
      <CardContent className="py-3 px-4 text-center">
        <p className="text-xs text-gray-700 italic mb-0.5">{quote.text}</p>
        <p className="text-[10px] text-gray-500">{quote.author}</p>
      </CardContent>
    </Card>
  )
}
