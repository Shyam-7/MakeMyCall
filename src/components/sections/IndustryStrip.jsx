import { INDUSTRIES } from '../../constants/data'

export default function IndustryStrip() {
  return (
    <div className="bg-navy border-y border-navy/50 px-6 md:px-12 py-6 text-center">
      <p className="text-[11px] font-bold tracking-[2px] uppercase text-blue-300/70 mb-3.5">
        Industries we serve
      </p>
      <div className="flex justify-center items-center gap-5 md:gap-8 flex-wrap">
        {INDUSTRIES.map((industry) => (
          <span
            key={industry}
            className="text-sm font-semibold text-white/50 hover:text-white/80 transition-colors duration-200"
          >
            {industry}
          </span>
        ))}
      </div>
    </div>
  )
}
