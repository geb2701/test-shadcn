import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/custom/badge"
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  BarChart3, 
  FileText,
  Menu,
  Bell,
  Search,
  type LucideIcon
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface NavItem {
  icon: LucideIcon
  label: string
  href?: string
  badge?: string | number
  active?: boolean
}

interface DashboardLayoutProps {
  sidebarItems?: NavItem[]
  headerTitle?: string
  headerActions?: React.ReactNode
  children: React.ReactNode
  className?: string
}

export function DashboardLayout({
  sidebarItems = [],
  headerTitle = "Dashboard",
  headerActions,
  children,
  className,
}: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const defaultSidebarItems: NavItem[] = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: BarChart3, label: "Analytics", badge: "New" },
    { icon: Users, label: "Users" },
    { icon: FileText, label: "Documents" },
    { icon: Settings, label: "Settings" },
  ]

  const items = sidebarItems.length > 0 ? sidebarItems : defaultSidebarItems

  return (
    <div className={cn("flex h-screen overflow-hidden bg-background", className)}>
      {/* Sidebar */}
      <aside
        className={cn(
          "border-r bg-card transition-all duration-300",
          sidebarOpen ? "w-64" : "w-20"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Sidebar Header */}
          <div className="flex h-16 items-center justify-between border-b px-4">
            {sidebarOpen && (
              <h2 className="text-lg font-semibold">Dashboard</h2>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="ml-auto"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>

          {/* Sidebar Navigation */}
          <nav className="flex-1 space-y-1 p-4">
            {items.map((item, index) => {
              const Icon = item.icon
              return (
                <a
                  key={index}
                  href={item.href || "#"}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    item.active
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  {sidebarOpen && (
                    <>
                      <span className="flex-1">{item.label}</span>
                      {item.badge && (
                        <Badge variant="info" size="sm">
                          {item.badge}
                        </Badge>
                      )}
                    </>
                  )}
                </a>
              )
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="flex h-16 items-center justify-between border-b bg-card px-6">
          <h1 className="text-xl font-semibold">{headerTitle}</h1>
          <div className="flex items-center gap-4">
            {headerActions || (
              <>
                <Button variant="ghost" size="icon">
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <Badge
                    variant="error"
                    size="sm"
                    className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center"
                  >
                    3
                  </Badge>
                </Button>
              </>
            )}
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

