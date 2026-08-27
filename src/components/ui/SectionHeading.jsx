function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'items-center text-center',
  className = '',
}) {
  return (
    <div className={`flex flex-col gap-4 ${align} ${className}`}>
      {eyebrow ? (
        <span className="text-sm font-semibold uppercase tracking-wide text-primary">
          {eyebrow}
        </span>
      ) : null}
      {title ? (
        <h2 className="max-w-2xl text-3xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      ) : null}
      {subtitle ? (
        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading
