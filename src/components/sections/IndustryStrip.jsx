import { INDUSTRIES } from '../../constants/data'

export default function IndustryStrip() {
  return (
    <div className="bg-surface border-y border-border px-6 md:px-12 py-5 text-center">
      <p className="text-[11px] font-bold tracking-[2px] uppercase text-muted mb-3.5">
        Industries we serve
      </p>
      <div className="flex justify-center items-center gap-5 md:gap-8 flex-wrap">
        {INDUSTRIES.map((industry) => (
          <span
            key={industry}
            className="text-sm font-semibold text-slate-400"
          >
            {industry}
          </span>
        ))}
      </div>
    </div>
  )
}
