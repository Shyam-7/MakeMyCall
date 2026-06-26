export default function SectionHeader({ eyebrow, title, subtitle, className = '', dark = false }) {
  return (
    <div className={`mb-9 ${className}`}>
      {eyebrow && (
        <p className={`text-xs font-bold tracking-[2px] uppercase mb-3.5 ${dark ? 'text-blue-300' : 'text-blue'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-[30px] font-extrabold tracking-tight mb-2 ${dark ? 'text-white' : 'text-navy'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base max-w-[500px] leading-relaxed ${dark ? 'text-blue-100/60' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
