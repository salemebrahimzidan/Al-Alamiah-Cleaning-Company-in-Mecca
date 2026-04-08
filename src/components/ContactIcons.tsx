type Props = { className?: string }

export function IconPhone({ className = 'h-6 w-6' }: Props) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.6 3.2c.35 0 .68.18.87.48l1.35 2.16a1 1 0 01-.2 1.18l-1.1 1.1a12 12 0 006.04 6.04l1.1-1.1a1 1 0 011.18-.2l2.16 1.35c.3.19.48.52.48.87v2.52c0 .65-.52 1.22-1.17 1.28C15.9 21 8 13.1 8 3.47c0-.65.57-1.17 1.22-1.17h2.52z"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.12"
      />
    </svg>
  )
}

export function IconMail({ className = 'h-6 w-6' }: Props) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.65"
        fill="currentColor"
        fillOpacity="0.08"
      />
      <path
        d="M3 7l9 6 9-6"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconWhatsApp({ className = 'h-6 w-6' }: Props) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2a9.5 9.5 0 00-8.1 14.4L2 22l5.9-1.6A9.5 9.5 0 1012 2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.14"
      />
      <path
        d="M9.2 8.8c.15-.45.4-.55.65-.55h.45c.2 0 .35.1.45.25l.55 1.35c.08.18.08.4-.08.55l-.32.32c-.1.1-.08.25 0 .35.28.5.75 1 1.25 1.28.12.08.25.08.35 0l.32-.32c.15-.15.38-.18.55-.08l1.35.55c.15.08.25.22.25.4v.45c0 .25-.1.5-.55.65-.45.15-1.75.4-3.55-1.4-1.8-1.8-1.55-3.1-1.4-3.55z"
        fill="currentColor"
      />
    </svg>
  )
}

export function IconLocation({ className = 'h-6 w-6' }: Props) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s7-4.35 7-10a7 7 0 10-14 0c0 5.65 7 10 7 10z"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.1"
      />
      <circle cx="12" cy="11" r="2.2" fill="currentColor" fillOpacity="0.75" />
    </svg>
  )
}
