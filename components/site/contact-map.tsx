'use client'

import { useEffect, useRef } from 'react'
import { MapPin } from 'lucide-react'
import 'leaflet/dist/leaflet.css'
import { company, fullAddress } from '@/lib/site-data'
import { saveConsent, useConsent } from '@/lib/consent'

const MAP_LABEL_TITLE = 'Sede REMITER s.a.s.'

export function ContactMap() {
  const consent = useConsent()

  if (!consent?.maps) {
    return (
      <div className="flex h-full min-h-[360px] w-full flex-col items-center justify-center gap-4 bg-card p-8 text-center lg:min-h-[440px]">
        <span className="flex size-12 items-center justify-center rounded-full bg-primary/15 text-primary">
          <MapPin aria-hidden className="size-6" />
        </span>
        <div>
          <p className="font-bold">{MAP_LABEL_TITLE}</p>
          <p className="mt-1 text-sm text-muted-foreground">{fullAddress}</p>
        </div>
        <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
          La mappa è fornita da OpenStreetMap e viene caricata solo con il tuo consenso ai contenuti esterni.
        </p>
        <button
          type="button"
          disabled={consent === undefined}
          onClick={() => saveConsent({ analytics: consent?.analytics ?? false, maps: true })}
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-foreground/30 px-5 text-sm font-bold transition-colors duration-200 hover:border-primary hover:text-primary disabled:opacity-50"
        >
          Mostra la mappa
        </button>
      </div>
    )
  }

  return <LeafletMap />
}

function LeafletMap() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let map: import('leaflet').Map | undefined
    let cancelled = false
    const el = ref.current
    if (!el) return

    const init = () =>
      import('leaflet').then((L) => {
        if (cancelled || !ref.current) return
        map = L.map(ref.current, {
          center: company.coordinates,
          zoom: 16,
          minZoom: 16,
          maxZoom: 16,
          zoomControl: false,
          dragging: false,
          touchZoom: false,
          doubleClickZoom: false,
          scrollWheelZoom: false,
          boxZoom: false,
          keyboard: false,
          inertia: false,
          maxBounds: L.latLngBounds([company.coordinates, company.coordinates]).pad(0.02),
          maxBoundsViscosity: 1,
        })
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          maxZoom: 19,
          className: 'map-tiles-dark',
        }).addTo(map)
        const icon = L.divIcon({
          className: '',
          html: '<span style="display:block;width:22px;height:22px;border-radius:9999px;background:#ffb703;border:4px solid #090909;box-shadow:0 0 0 6px rgba(255,183,3,0.3)"></span>',
          iconSize: [22, 22],
          iconAnchor: [11, 11],
        })
        L.marker(company.coordinates, { icon, interactive: false, keyboard: false }).addTo(map)

        const label = document.createElement('div')
        const title = document.createElement('strong')
        title.textContent = MAP_LABEL_TITLE
        const address = document.createElement('span')
        address.textContent = fullAddress
        label.append(title, address)

        L.tooltip({
          permanent: true,
          direction: 'top',
          offset: [0, -18],
          className: 'map-label',
          interactive: false,
        })
          .setLatLng(company.coordinates)
          .setContent(label)
          .addTo(map)

        map.invalidateSize()
      })

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          observer.disconnect()
          init()
        }
      },
      { rootMargin: '300px 0px' },
    )
    observer.observe(el)

    return () => {
      cancelled = true
      observer.disconnect()
      map?.remove()
    }
  }, [])

  return (
    <div
      ref={ref}
      role="img"
      aria-label={`Mappa statica: ${MAP_LABEL_TITLE}, ${fullAddress}`}
      className="map-static z-0 h-full min-h-[360px] w-full bg-card lg:min-h-[440px]"
    />
  )
}
