function PhoneMockup({ className = '', children }) {
  return (
    <div
      className={`relative mx-auto aspect-[9/19] w-full max-w-[260px] rounded-[2.75rem] border-[10px] border-foreground bg-foreground shadow-[0_30px_60px_-20px_rgba(18,33,31,0.35)] ${className}`}
    >
      <span className="absolute inset-x-0 top-0 z-10 mx-auto mt-2 h-5 w-24 rounded-full bg-foreground" />
      <div className="h-full w-full overflow-hidden rounded-[2rem] bg-card">
        {children}
      </div>
    </div>
  )
}

export default PhoneMockup
