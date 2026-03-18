import { Link } from 'react-router-dom'
import {
  BookOpen,
  Clock,
  Layers,
  Dumbbell,
  ArrowRight,
  Monitor,
  HardDrive,
  Globe,
  AppWindow,
  Building2,
  User,
  GraduationCap,
  Play,
  MessageSquare,
  FlaskConical,
  Briefcase,
} from 'lucide-react'
import { courseStructure } from '../../data/courseStructure'
import { useProgress } from '../../hooks/useProgress'

const levelMeta: Record<string, { icon: typeof BookOpen; color: string; bgColor: string; borderColor: string }> = {
  '1': { icon: BookOpen, color: 'text-accent-blue', bgColor: 'bg-accent-blueLight', borderColor: 'border-accent-blue' },
  '2': { icon: Layers, color: 'text-accent-orange', bgColor: 'bg-accent-orangeLight', borderColor: 'border-accent-orange' },
  '3': { icon: Dumbbell, color: 'text-accent-green', bgColor: 'bg-accent-greenLight', borderColor: 'border-accent-green' },
}

const howItWorks = [
  { icon: Play, title: 'Read the module', description: 'Work through each lesson at your own pace' },
  { icon: MessageSquare, title: 'Open Copilot', description: 'Follow along with Microsoft Copilot side-by-side' },
  { icon: FlaskConical, title: 'Try the exercise', description: 'Practice with hands-on exercises using sample files' },
  { icon: Briefcase, title: 'Apply to your work', description: 'Transfer skills directly to your real PM projects' },
]

function getTotalDuration() {
  let totalMinutes = 0
  for (const level of courseStructure.levels) {
    for (const mod of level.modules) {
      const match = mod.duration.match(/(\d+)/)
      if (match) totalMinutes += parseInt(match[1], 10)
    }
  }
  const hours = Math.round(totalMinutes / 60)
  return `${hours}+ hours`
}

function getTotalModules() {
  return courseStructure.levels.reduce((sum, level) => sum + level.modules.length, 0)
}

export function HomePage() {
  const { progress } = useProgress()

  const ctaLink = progress.lastVisited
    ? `/module/${progress.lastVisited}`
    : `/module/${courseStructure.levels[0].modules[0].id}`
  const ctaText = progress.lastVisited ? 'Continue Where You Left Off' : 'Start Learning'

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Hero */}
      <section className="text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-4">
          <GraduationCap className="w-4 h-4" />
          Self-paced course
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-corporate-900 mb-4 leading-tight">
          Microsoft Copilot<br className="hidden sm:block" /> for Product Managers
        </h1>
        <p className="text-lg sm:text-xl text-corporate-600 mb-8 max-w-2xl mx-auto">
          Master Microsoft Copilot to 10x your PM impact — from meeting notes to PRDs, data analysis to product strategy.
        </p>
        <Link
          to={ctaLink}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors shadow-lg shadow-primary-500/25"
        >
          {ctaText}
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      {/* Course Stats */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 sm:mb-16">
        {[
          { label: 'Modules', value: String(getTotalModules()), icon: BookOpen },
          { label: 'Duration', value: getTotalDuration(), icon: Clock },
          { label: 'Levels', value: String(courseStructure.levels.length), icon: Layers },
          { label: 'Hands-on exercises', value: 'Every module', icon: Dumbbell },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-corporate-200 p-4 text-center">
            <stat.icon className="w-5 h-5 text-primary-500 mx-auto mb-2" />
            <div className="text-lg sm:text-xl font-bold text-corporate-900">{stat.value}</div>
            <div className="text-sm text-corporate-500">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* What You'll Learn */}
      <section className="mb-12 sm:mb-16">
        <h2 className="text-2xl font-bold text-corporate-900 mb-6">What You'll Learn</h2>
        <div className="space-y-4">
          {courseStructure.levels.map((level) => {
            const meta = levelMeta[level.id] ?? levelMeta['1']
            const LevelIcon = meta.icon
            const totalDuration = level.modules.reduce((sum, m) => {
              const match = m.duration.match(/(\d+)/)
              return sum + (match ? parseInt(match[1], 10) : 0)
            }, 0)

            return (
              <Link
                key={level.id}
                to={`/module/${level.modules[0].id}`}
                className={`block bg-white rounded-xl border border-corporate-200 p-5 sm:p-6 hover:border-corporate-300 hover:shadow-sm transition-all group`}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${meta.bgColor} flex items-center justify-center`}>
                    <LevelIcon className={`w-5 h-5 ${meta.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-corporate-900 group-hover:text-primary-600 transition-colors">
                        Level {level.id}: {level.title}
                      </h3>
                      <ArrowRight className="w-4 h-4 text-corporate-400 group-hover:text-primary-500 transition-colors flex-shrink-0" />
                    </div>
                    <p className="text-sm text-corporate-600 mb-2">{level.description}</p>
                    <div className="flex items-center gap-4 text-xs text-corporate-500">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5" />
                        {level.modules.length} modules
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {totalDuration} min
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* How This Course Works */}
      <section className="mb-12 sm:mb-16">
        <h2 className="text-2xl font-bold text-corporate-900 mb-6">How This Course Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {howItWorks.map((step, i) => (
            <div key={step.title} className="bg-white rounded-xl border border-corporate-200 p-5 flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center text-sm font-bold">
                {i + 1}
              </div>
              <div>
                <h3 className="font-semibold text-corporate-900 mb-1">{step.title}</h3>
                <p className="text-sm text-corporate-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What You'll Need */}
      <section className="mb-12 sm:mb-16">
        <h2 className="text-2xl font-bold text-corporate-900 mb-6">What You'll Need</h2>
        <div className="bg-white rounded-xl border border-corporate-200 p-5 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: AppWindow, label: 'Microsoft 365 Copilot license' },
              { icon: HardDrive, label: 'OneDrive access' },
              { icon: Globe, label: 'Modern web browser' },
              { icon: Monitor, label: 'Familiarity with M365 apps' },
            ].map((req) => (
              <div key={req.label} className="flex items-center gap-3">
                <req.icon className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="text-sm text-corporate-800">{req.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Accenture Simulation */}
      <section className="mb-12 sm:mb-16">
        <h2 className="text-2xl font-bold text-corporate-900 mb-6">The Accenture Simulation</h2>
        <div className="bg-white rounded-xl border border-corporate-200 p-5 sm:p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-primary-500" />
            </div>
            <div>
              <h3 className="font-semibold text-corporate-900 mb-1">Accenture Internal Digital Products</h3>
              <p className="text-sm text-corporate-600">
                Throughout this course, you'll work within a simulated company context.
                Accenture Internal Digital Products builds enterprise tools used by thousands of employees.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 pl-0 sm:pl-14">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-blueLight flex items-center justify-center">
              <User className="w-5 h-5 text-accent-blue" />
            </div>
            <div>
              <h3 className="font-semibold text-corporate-900 mb-1">Your Role: Senior Product Manager</h3>
              <p className="text-sm text-corporate-600">
                You're a Senior PM responsible for two key platforms — AKX (knowledge management)
                and ADH (analytics data hub). Every exercise uses realistic scenarios from this context.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="text-center py-8 border-t border-corporate-200">
        <h2 className="text-xl font-bold text-corporate-900 mb-3">Ready to get started?</h2>
        <p className="text-corporate-600 mb-6">Jump into your first module and start building Copilot skills.</p>
        <Link
          to={ctaLink}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors shadow-lg shadow-primary-500/25"
        >
          {ctaText}
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </div>
  )
}
