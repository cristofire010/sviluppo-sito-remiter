import Link from 'next/link'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('mx-auto w-full max-w-[1200px] px-[clamp(1rem,4vw,2rem)]', className)}>{children}</div>
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn('inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-primary', className)}>
      <span aria-hidden className="h-px w-8 bg-primary" />
      {children}
    </p>
  )
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  centered,
  as: Heading = 'h2',
}: {
  eyebrow: string
  title: React.ReactNode
  lead?: React.ReactNode
  centered?: boolean
  as?: 'h1' | 'h2'
}) {
  return (
    <div className={cn('reveal mb-12 max-w-2xl', centered && 'mx-auto text-center')}>
      <Eyebrow className={centered ? 'justify-center' : undefined}>{eyebrow}</Eyebrow>
      <Heading className="mt-4">{title}</Heading>
      {lead && <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{lead}</p>}
    </div>
  )
}

const buttonBase =
  'group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-bold transition-[transform,box-shadow,background-color,border-color] duration-[250ms] ease-premium hover:-translate-y-0.5 active:translate-y-0 active:duration-150'

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  className,
  external,
}: {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'ghost'
  className?: string
  external?: boolean
}) {
  const classes = cn(
    buttonBase,
    variant === 'primary'
      ? 'bg-primary text-primary-foreground hover:shadow-[0_14px_40px_-12px_rgba(255,183,3,0.6)]'
      : 'border border-primary/50 text-foreground hover:bg-primary/[0.08]',
    className,
  )
  const shimmer = variant === 'primary' && (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-y-0 left-0 w-1/2 -translate-x-[150%] skew-x-[-20deg] bg-white/40 transition-transform duration-[400ms] ease-premium group-hover:translate-x-[250%]"
    />
  )
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {shimmer}
        <span className="relative inline-flex items-center gap-2">{children}</span>
      </a>
    )
  }
  return (
    <Link href={href} className={classes}>
      {shimmer}
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </Link>
  )
}

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-[transform,box-shadow] duration-300 ease-premium hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,183,3,0.25)] md:p-7',
        className,
      )}
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-[0.35] bg-gradient-to-r from-primary to-primary-light transition-transform duration-300 ease-premium group-hover:scale-x-100"
      />
      {children}
    </div>
  )
}

export function DataGroup({ title, items }: { title: string; items: { label: string; value: string }[] }) {
  return (
    <Card>
      <h3 className="text-primary">{title}</h3>
      <dl className="mt-5 divide-y divide-border">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col gap-1 py-3 sm:flex-row sm:justify-between sm:gap-6">
            <dt className="text-sm text-muted-foreground">{item.label}</dt>
            <dd className="text-sm font-semibold sm:text-right">{item.value}</dd>
          </div>
        ))}
      </dl>
    </Card>
  )
}

export function FeatureList({ items, centerLast }: { items: string[]; centerLast?: boolean }) {
  const isLastOdd = centerLast && items.length % 2 === 1
  return (
    <ul className="grid gap-3 md:grid-cols-2">
      {items.map((item, i) => {
        const isLast = i === items.length - 1
        const lastCentered = isLastOdd && isLast
        return (
          <li
            key={item}
            className={cn(
              'reveal flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3.5',
              lastCentered && 'md:col-span-2 md:flex md:items-center md:justify-center md:max-w-xl md:mx-auto'
            )}
            style={{ transitionDelay: `${(i % 2) * 60}ms` }}
          >
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
              <Check aria-hidden className="size-3" strokeWidth={3} />
            </span>
            <span className="text-sm leading-relaxed text-secondary-foreground">{item}</span>
          </li>
        )
      })}
    </ul>
  )
}

export function ServiceCard({
  index,
  title,
  description,
  items,
  delay = 0,
}: {
  index: number
  title: string
  description: string
  items?: string[]
  delay?: number
}) {
  return (
    <div className="reveal h-full" style={{ transitionDelay: `${delay}ms` }}>
    <Card>
      <span className="font-mono text-sm font-bold text-primary">{String(index + 1).padStart(2, '0')}</span>
      <h3 className="mt-3">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
      {items && (
        <ul className="mt-5 flex flex-col gap-2 border-t border-border pt-5">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-secondary-foreground">
              <span aria-hidden className="size-1.5 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </Card>
    </div>
  )
}

export function PageHero({ eyebrow, title, lead }: { eyebrow: string; title: React.ReactNode; lead: string }) {
  return (
    <section className="relative overflow-hidden border-b border-border pb-14 pt-16 md:pb-20 md:pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,183,3,0.12),transparent_70%)]"
      />
      <Container className="relative">
        <SectionHead as="h1" eyebrow={eyebrow} title={title} lead={lead} />
      </Container>
    </section>
  )
}
