import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="min-h-screen bg-background">
        <nav className="border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-6">
              <Link to="/" className="text-xl font-bold">
                Mi App
              </Link>
              <div className="flex gap-4">
                <Link
                  to="/"
                  className="text-sm font-medium hover:underline"
                  activeProps={{ className: 'font-bold' }}
                >
                  Inicio
                </Link>
                <Link
                  to="/about"
                  className="text-sm font-medium hover:underline"
                  activeProps={{ className: 'font-bold' }}
                >
                  Acerca de
                </Link>
                <Link
                  to="/contact"
                  className="text-sm font-medium hover:underline"
                  activeProps={{ className: 'font-bold' }}
                >
                  Contacto
                </Link>
                <Link
                  to="/demo"
                  className="text-sm font-medium hover:underline"
                  activeProps={{ className: 'font-bold' }}
                >
                  Demo
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="container mx-auto px-4 py-8">
          <Outlet />
        </main>
      </div>
      <TanStackRouterDevtools />
    </>
  ),
})

