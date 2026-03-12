import { Menu, BookOpen, Github } from 'lucide-react'

interface HeaderProps {
  onMenuClick: () => void
  totalProgress: number
}

export function Header({ onMenuClick, totalProgress }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-corporate-200 h-16">
      <div className="flex items-center justify-between h-full px-4 lg:px-6">
        {/* Left section: Menu button + Logo */}
        <div className="flex items-center gap-4">
          {/* Mobile menu button */}
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 -ml-2 text-corporate-600 hover:text-corporate-900 hover:bg-corporate-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo and title */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-primary-500 rounded-lg">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-semibold text-corporate-900 leading-tight">
                Microsoft Copilot
              </h1>
              <p className="text-xs text-corporate-500 leading-tight">
                for Product Managers
              </p>
            </div>
          </div>
        </div>

        {/* Center section: Progress (desktop only) */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-sm text-corporate-600">Course Progress</span>
            <div className="w-32 h-2 bg-corporate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary-500 rounded-full transition-all duration-500"
                style={{ width: `${totalProgress}%` }}
              />
            </div>
            <span className="text-sm font-medium text-corporate-700">
              {totalProgress}%
            </span>
          </div>
        </div>

        {/* Right section: External links */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/sanjaygupta-professional/copilot-pm-course"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-corporate-500 hover:text-corporate-700 hover:bg-corporate-100 rounded-lg transition-colors"
            aria-label="View on GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  )
}
