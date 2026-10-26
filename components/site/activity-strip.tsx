import { Building2, ClipboardList, Hammer, Shovel, Tractor, Truck, type LucideIcon } from 'lucide-react'
import { activities, type ActivityKey } from '@/lib/site-data'
import { Container } from './ui'

const icons: Record<ActivityKey, LucideIcon> = {
  'movimento-terra': Shovel,
  demolizione: Hammer,
  costruzioni: Building2,
  appalti: ClipboardList,
  noleggio: Truck,
  agricoltura: Tractor,
}

export function ActivityStrip() {
  return (
    <section aria-labelledby="attivita-title" className="border-y border-border bg-muted py-10">
      <Container>
        <h2 id="attivita-title" className="sr-only">
          Le nostre attività
        </h2>
        <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {activities.map((a, i) => {
            const Icon = icons[a.key]
            return (
              <li
                key={a.key}
                className="reveal flex flex-col items-center gap-3 text-center"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <span className="flex size-12 items-center justify-center rounded-xl border border-border bg-card text-primary">
                  <Icon aria-hidden className="size-6" />
                </span>
                <span className="text-sm font-semibold text-secondary-foreground">{a.label}</span>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
