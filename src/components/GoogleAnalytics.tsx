import { Helmet } from 'react-helmet-async'

function readMeasurementId(): string {
  const raw = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined
  if (!raw || typeof raw !== 'string') return ''
  return raw.trim()
}

export default function GoogleAnalytics() {
  const measurementId = readMeasurementId()
  const enabled = Boolean(measurementId) && import.meta.env.PROD

  if (!enabled) return null

  return (
    <Helmet>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`}
      />
      <script>
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${measurementId}', { anonymize_ip: true });`}
      </script>
    </Helmet>
  )
}

