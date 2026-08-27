function MetricsRow({ metrics = [], className = '' }) {
  if (!metrics.length) return null

  return (
    <dl className={`flex flex-wrap items-center justify-center gap-x-12 gap-y-6 ${className}`}>
      {metrics.map((metric) => (
        <div key={metric.label} className="flex flex-col items-center gap-1 text-center">
          <dt className="order-2 text-sm text-muted-foreground">{metric.label}</dt>
          <dd className="order-1 text-3xl font-extrabold text-foreground sm:text-4xl">
            {metric.value}
          </dd>
        </div>
      ))}
    </dl>
  )
}

export default MetricsRow
