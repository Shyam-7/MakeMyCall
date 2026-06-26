import { Card } from 'antd'
import IconBox from '../ui/IconBox'
import SectionHeader from '../ui/SectionHeader'
import { SERVICES } from '../../constants/data'

function ServiceCard({ icon, bgClass, title, description }) {
  return (
    <Card
      hoverable
      className="!rounded-xl !border-white/20 !bg-white/90 !backdrop-blur-sm hover:!border-blue-300 hover:!bg-white transition-all duration-200 hover:-translate-y-0.5"
      styles={{ body: { padding: 24 } }}
    >
      <IconBox icon={icon} bgClass={bgClass} size="lg" />
      <div className="mt-3.5">
        <h3 className="text-[15px] font-bold text-navy mb-1.5">{title}</h3>
        <p className="text-[13px] text-slate-600 leading-relaxed">{description}</p>
      </div>
    </Card>
  )
}

export default function Services() {
  const bgUrl = `${import.meta.env.BASE_URL}services-bg.png`

  return (
    <section id="services" className="relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgUrl})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/92 via-white/88 to-slate-50/92" />

      <div className="relative max-w-[1100px] mx-auto px-6 md:px-12 py-16 md:py-20">
        <SectionHeader
          eyebrow="What We Do"
          title="End-to-End Outsourcing"
          subtitle="Flexible BPO services for businesses of any size. Start with what you need and scale as you grow."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
