export default function Logo({ size = 'default' }) {
  const imgSize = size === 'small' ? 'w-10 h-10' : 'w-12 h-12'
  const nameSize = size === 'small' ? 'text-base' : 'text-lg'

  return (
    <div className="flex items-center gap-2.5">
      <img
        src={`${import.meta.env.BASE_URL}mmc.png`}
        alt="MakeMyCall Logo"
        className={`${imgSize} object-contain`}
      />
      <div>
        <div className={`${nameSize} font-bold text-white`}>
          Make<span className="text-blue-300">My</span>Call
        </div>
        {size !== 'small' && (
          <span className="block text-[10px] font-semibold tracking-[2px] uppercase text-white/50 -mt-0.5">
            BPO Solutions
          </span>
        )}
      </div>
    </div>
  )
}
