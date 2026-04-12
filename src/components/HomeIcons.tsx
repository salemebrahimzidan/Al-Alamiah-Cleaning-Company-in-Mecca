import { useId } from 'react'

type IconProps = { className?: string }

/** Steam cleaning — spray bottle + steam */
export function IconSteam({ className = 'h-10 w-10' }: IconProps) {
  const id = useId().replace(/:/g, '')
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden>
      <defs>
        <linearGradient id={`sb-${id}`} x1="24" y1="12" x2="40" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="currentColor" stopOpacity="0.9" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.45" />
        </linearGradient>
      </defs>
      <path
        d="M24 10h16a3 3 0 013 3v1a2 2 0 01-2 2H23a2 2 0 01-2-2v-1a3 3 0 013-3z"
        fill={`url(#sb-${id})`}
        opacity="0.35"
      />
      <path
        d="M27 18h10v26a5 5 0 01-5 5h0a5 5 0 01-5-5V18z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.08"
      />
      <path
        d="M30 18V14h4v4M40 26h8l2.5 7H37"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M21 6c-1.5 2-2.5 4-2.5 6M27 4c0 2-.5 4-2 5.5M35 4c1 2 1.5 4 .5 6M41 6c2 1.5 3 3.5 3.5 5.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="19" cy="5" r="1.3" fill="currentColor" opacity="0.45" />
      <circle cx="32" cy="2.5" r="1.5" fill="currentColor" opacity="0.55" />
      <circle cx="45" cy="5" r="1.3" fill="currentColor" opacity="0.45" />
    </svg>
  )
}

/** Pest control — shield protecting against pest */
export function IconPest({ className = 'h-10 w-10' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden>
      <path
        d="M32 8L16 15v18c0 11 7 20 16 24 9-4 16-13 16-24V15L32 8z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.1"
      />
      <path
        d="M32 16v6M26 19h12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.45"
      />
      <g stroke="currentColor" strokeLinecap="round">
        <ellipse cx="32" cy="38" rx="8" ry="6.5" strokeWidth="1.9" fill="none" />
        <path d="M24 34l-3.5-4M40 34l3.5-4M26 42l-3 3M38 42l3 3" strokeWidth="1.7" />
        <circle cx="28.5" cy="37" r="1.6" fill="currentColor" />
        <circle cx="35.5" cy="37" r="1.6" fill="currentColor" />
        <path d="M29 41c1 1.2 2.5 1.2 3.5 0" strokeWidth="1.5" fill="none" />
      </g>
    </svg>
  )
}

/** Fast & reliable — clock + check */
export function IconZap({ className = 'h-10 w-10' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden>
      <circle
        cx="32"
        cy="34"
        r="19"
        stroke="currentColor"
        strokeWidth="2.2"
        fill="currentColor"
        fillOpacity="0.08"
      />
      <path d="M32 17v-3M24 13h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="32" cy="13" r="2.2" fill="currentColor" />
      <path
        d="M32 25v11l7 4.5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 44l5 5 14-13"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.92"
      />
    </svg>
  )
}

export function IconTeam({ className = 'h-7 w-7' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="18" cy="16" r="5" stroke="currentColor" strokeWidth="2.2" />
      <path
        d="M8 38c0-6 4.5-10 10-10s10 4 10 10"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="18" r="4" stroke="currentColor" strokeWidth="2.2" />
      <path
        d="M26 38c0-4 3-7 7-7"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconLeaf({ className = 'h-7 w-7' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <path
        d="M8 36c12-2 22-12 24-24 8 2 12 10 10 18-6 4-14 6-22 6-4 0-8-.5-12-1.5z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M14 30c6-4 12-10 16-16"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconSparkle({ className = 'h-7 w-7' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <path
        d="M24 6l2 8 8 2-8 2-2 8-2-8-8-2 8-2 2-8zM38 28l1 4 4 1-4 1-1 4-1-4-4-1 4-1 1-4z"
        fill="currentColor"
        opacity="0.85"
      />
    </svg>
  )
}

export function IconClock({ className = 'h-7 w-7' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2.2" />
      <path
        d="M24 16v10l6 4"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
