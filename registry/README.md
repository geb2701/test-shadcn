# Registry de Componentes Personalizados

Este es un registry personalizado de componentes construido con shadcn/ui.

## Estructura

```
registry/
├── registry.json              # Configuración principal del registry
├── components/
│   └── custom/
│       ├── hero-section.json
│       ├── feature-card.json
│       ├── stats-card.json
│       ├── testimonial-card.json
│       ├── pricing-card.json
│       └── badge.json
└── README.md
```

## Componentes Disponibles

### 1. HeroSection
Componente de banner hero con título, descripción y botones de acción.

**Dependencias:** `button`

### 2. FeatureCard
Tarjeta de características con iconos y variantes.

**Dependencias:** `card`, `button`

### 3. StatsCard
Tarjeta para mostrar estadísticas con iconos y tendencias.

**Dependencias:** `card`

### 4. TestimonialCard
Tarjeta de testimonios con sistema de estrellas.

**Dependencias:** `card`

### 5. PricingCard
Tarjeta de precios con lista de características.

**Dependencias:** `card`, `button`

### 6. Badge
Componente badge con múltiples variantes y tamaños.

**Dependencias:** Ninguna

## Uso

Para usar este registry en un proyecto, configura `components.json`:

```json
{
  "registry": "file:./registry"
}
```

O si está publicado en un repositorio:

```json
{
  "registry": "https://github.com/tu-usuario/tu-registry"
}
```

Luego puedes instalar componentes con:

```bash
npx shadcn@latest add hero-section --registry ./registry
```

## Referencias

- [Documentación oficial de shadcn/ui Registry](https://ui.shadcn.com/docs/registry)
- [Schema de registry.json](https://ui.shadcn.com/docs/registry/registry-json)
- [Schema de registry-item.json](https://ui.shadcn.com/docs/registry/registry-item-json)

