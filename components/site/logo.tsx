import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logo.webp"
      alt="REMITER S.A.S."
      width={160}
      height={40}
      className={cn('h-auto w-auto max-h-8 object-contain', className)}
      priority
    />
  )
}
