import { getWeeklyPlanAction } from '@/app/actions/home.actions'
import { StudyPlanTable } from './_components/StudyPlanTable'
import { ManagementSystem } from './_components/ManagementSystem'
import { RevisionCycle } from './_components/RevisionCycle'
import { QuickLinks } from './_components/QuickLinks'

export const revalidate = 0 // Disable cache

export default async function Home() {
  const studyPlan = await getWeeklyPlanAction()

  return (
    <>
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <StudyPlanTable studyPlan={studyPlan} />
            <ManagementSystem />
          </div>

          <div className="space-y-8">
            <RevisionCycle />
            <QuickLinks />
          </div>
        </div>
      </div>
    </>
  )
}
