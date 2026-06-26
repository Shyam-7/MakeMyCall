import { Card } from 'antd'
import SectionHeader from '../ui/SectionHeader'
import { WHY_US_ITEMS } from '../../constants/data'

function WhyCard({ icon, title, description }) {
  return (
    <Card
      hoverable
      className="!rounded-xl !border-border hover:!border-blue-300 transition-colors duration-200"
      styles={{ body: { padding: 22 } }}
    >
      <div className="text-2xl mb-3">{icon}</div>
      <h3 className="text-sm font-bold text-navy mb-1.5">{title}</h3>
      <p className="text-[13px] text-muted leading-relaxed">{description}</p>
    </Card>
  )
}

export default function WhyUs() {
  return (
    <section id="why-us" className="max-w-[1100px] mx-auto px-6 md:px-12 py-16">
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
    </section>
  )
}
