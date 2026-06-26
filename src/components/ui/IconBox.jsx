export default function IconBox({ icon, bgClass = 'bg-blue-light', size = 'md' }) {
  const sizeClasses = {
    sm: 'w-8 h-8 text-base rounded-lg',
    md: 'w-10 h-10 text-lg rounded-[10px]',
    lg: 'w-11 h-11 text-xl rounded-[10px]',
  }

  return (
    <div
      className={`${bgClass} ${sizeClasses[size]} flex items-center justify-center shrink-0`}
    >
      {icon}
    </div>
  )
}
