type Props = { className?: string }

export function IconPhone({ className = 'h-6 w-6' }: Props) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M22 16.9v2.25a2.25 2.25 0 0 1-2.45 2.25c-8.63-.95-15.01-7.33-15.96-15.96A2.25 2.25 0 0 1 5.84 3H8.1c.83 0 1.55.57 1.74 1.38l.72 3.11c.16.7-.2 1.41-.83 1.71l-1.84.86a13.5 13.5 0 0 0 6.05 6.05l.86-1.84c.3-.64 1.01-.99 1.71-.83l3.11.72c.81.19 1.38.91 1.38 1.74Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
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
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.08"
      />
      <path
        d="M3 7l9 6 9-6"
        stroke="currentColor"
        strokeWidth="1.8"
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
        strokeWidth="1.7"
        strokeLinejoin="round"
        strokeLinecap="round"
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
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="currentColor"
        fillOpacity="0.1"
      />
      <circle cx="12" cy="11" r="2.2" fill="currentColor" fillOpacity="0.75" />
    </svg>
  )
}
