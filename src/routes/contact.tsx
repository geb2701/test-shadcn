import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <Mail className="h-16 w-16 text-primary" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Contacto</h1>
        <p className="text-xl text-muted-foreground">
          Ponte en contacto con nosotros
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <CardTitle>Email</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">contacto@ejemplo.com</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <CardTitle>Teléfono</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">+1 (555) 123-4567</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <CardTitle>Ubicación</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Ciudad, País</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Envíanos un mensaje</CardTitle>
          <CardDescription>
            Completa el formulario y te responderemos pronto
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Nombre
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-3 py-2 border rounded-md bg-background"
              placeholder="Tu nombre"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 border rounded-md bg-background"
              placeholder="tu@email.com"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Mensaje
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-3 py-2 border rounded-md bg-background"
              placeholder="Tu mensaje..."
            />
          </div>
          <Button className="w-full">Enviar mensaje</Button>
        </CardContent>
      </Card>
    </div>
  )
}

