import { Button } from 'antd'

export default function SectionHeader({ eyebrow, title, subtitle, className = '' }) {
  return (
    <div className={`mb-9 ${className}`}>
      {eyebrow && (
        <p className="text-xs font-bold tracking-[2px] uppercase text-blue mb-3.5">
          {eyebrow}
        </p>
      )}
      <h2 className="text-[30px] font-extrabold text-navy tracking-tight mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-muted max-w-[500px] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
