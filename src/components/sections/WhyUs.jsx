import { Card } from 'antd'
import SectionHeader from '../ui/SectionHeader'
import { WHY_US_ITEMS } from '../../constants/data'

function WhyCard({ icon, title, description }) {
  return (
    <Card
      hoverable
      className="!rounded-xl !border-white/15 !bg-white/90 !backdrop-blur-sm hover:!border-blue-300 hover:!bg-white transition-all duration-200"
      styles={{ body: { padding: 22 } }}
    >
      <div className="text-2xl mb-3 text-blue">{icon}</div>
      <h3 className="text-sm font-bold text-navy mb-1.5">{title}</h3>
      <p className="text-[13px] text-slate-600 leading-relaxed">{description}</p>
    </Card>
  )
}

export default function WhyUs() {
  const bgUrl = `${import.meta.env.BASE_URL}why-us-bg.png`

  return (
    <section id="why-us" className="relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgUrl})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-slate-50/88 to-white/92" />

      <div className="relative max-w-[1100px] mx-auto px-6 md:px-12 py-16 md:py-20">
        <SectionHeader
          eyebrow="Why MakeMyCall"
          title="A Partner That Grows With You"
          subtitle="We're a startup — and that means no bureaucracy, no cookie-cutter packages, just a focused team fully invested in your success."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {WHY_US_ITEMS.map((item) => (
            <WhyCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
