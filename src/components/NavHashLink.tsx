import { type MouseEvent, type ReactNode } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

type Props = {
  to: string
  className?: string
  children: ReactNode
  onClick?: () => void
}

/** Split "/#about" or "/foo#bar" into path + id (no #). */
function parseTo(to: string): { pathname: string; fragment: string | null } {
  const i = to.indexOf('#')
  if (i === -1) return { pathname: to || '/', fragment: null }
  const pathname = (i === 0 ? '/' : to.slice(0, i)) || '/'
  const raw = to.slice(i + 1)
  const fragment = raw.length > 0 ? raw : null
  return { pathname, fragment }
}

function scrollToFragment(fragment: string) {
  const el = document.getElementById(fragment)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

/**
 * Hash links that work with React Router: same-route clicks scroll;
 * from other routes we navigate to `/#id` and the home layout scrolls.
 */
export default function NavHashLink({ to, className, children, onClick }: Props) {
  const location = useLocation()
  const navigate = useNavigate()
  const { pathname: destPath, fragment } = parseTo(to)

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.()

    if (!fragment) {
      return
    }

    const goingHome = destPath === '/' || destPath === ''
    const onHomePage = location.pathname === '/' || location.pathname === ''

    if (goingHome && onHomePage) {
      e.preventDefault()
      scrollToFragment(fragment)
      window.history.replaceState(null, '', `#${fragment}`)
      return
    }

    if (goingHome && !onHomePage) {
      e.preventDefault()
      navigate({ pathname: '/', hash: `#${fragment}` })
      return
    }

    e.preventDefault()
    navigate({ pathname: destPath, hash: `#${fragment}` })
  }

  return (
    <Link to={to} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}
