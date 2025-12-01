import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Info } from 'lucide-react'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <Info className="h-16 w-16 text-primary" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Acerca de</h1>
        <p className="text-xl text-muted-foreground">
          Información sobre esta aplicación
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Nuestra Historia</CardTitle>
          <CardDescription>
            Conoce más sobre nosotros
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Esta es una aplicación construida con React, TypeScript, Vite, 
            TanStack Router y shadcn/ui. Proporciona una base sólida para 
            construir aplicaciones web modernas y escalables.
          </p>
          <p className="text-muted-foreground">
            Utilizamos las mejores prácticas y tecnologías actuales para 
            ofrecer una experiencia de desarrollo y usuario excepcional.
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Tecnologías</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>React 19</li>
              <li>TypeScript</li>
              <li>Vite</li>
              <li>TanStack Router</li>
              <li>shadcn/ui</li>
              <li>Tailwind CSS</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Características</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Routing moderno</li>
              <li>Componentes UI reutilizables</li>
              <li>Diseño responsive</li>
              <li>Type-safe</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

