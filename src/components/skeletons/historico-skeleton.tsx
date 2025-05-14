import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function HistoricoSkeleton() {
  return (
    <div className="w-full space-y-8">
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <div className="h-8 w-64 bg-gray-200 rounded-md animate-pulse" />
          <div className="h-4 w-48 bg-gray-200 rounded-md animate-pulse" />
        </div>
        <div className="h-10 w-40 bg-gray-200 rounded-md animate-pulse" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="shadow-md">
            <CardHeader className="border-b bg-gray-50">
              <CardTitle>
                <div className="h-6 w-32 bg-gray-200 rounded-md animate-pulse" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
              {[1, 2].map((j) => (
                <div key={j} className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-24 bg-gray-200 rounded-full animate-pulse" />
                    <div className="h-4 w-16 bg-gray-200 rounded-md animate-pulse" />
                  </div>

                  <div className="space-y-3 p-4 rounded-lg border bg-gray-50">
                    <div className="flex justify-between items-start gap-4">
                      <div className="space-y-2 flex-1">
                        <div className="h-5 w-3/4 bg-gray-200 rounded-md animate-pulse" />
                        <div className="h-20 w-full bg-gray-200 rounded-md animate-pulse" />
                      </div>
                      <div className="h-6 w-24 bg-gray-200 rounded-full animate-pulse" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="h-4 w-16 bg-gray-200 rounded-md animate-pulse" />
                        <div className="h-4 w-8 bg-gray-200 rounded-md animate-pulse" />
                      </div>
                      <div className="h-2 w-full bg-gray-200 rounded-full animate-pulse" />
                    </div>

                    <div className="space-y-2 pt-2">
                      <div className="h-4 w-40 bg-gray-200 rounded-md animate-pulse" />
                      <div className="h-16 w-full bg-gray-200 rounded-md animate-pulse" />
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
