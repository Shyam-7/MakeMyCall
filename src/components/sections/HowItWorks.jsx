import { Card } from 'antd'
import { AimOutlined } from '@ant-design/icons'
import SectionHeader from '../ui/SectionHeader'
import { STEPS, OPERATING_MODEL } from '../../constants/data'

function StepItem({ number, title, description, isLast }) {
  return (
    <div className={`flex gap-4 py-5 ${!isLast ? 'border-b border-white/10' : ''}`}>
      <div className="w-8 h-8 rounded-lg bg-blue/20 border border-blue/30 flex items-center justify-center text-xs font-bold text-blue-300 shrink-0">
        {number}
      </div>
      <div>
        <div className="text-sm font-bold text-white mb-0.5">{title}</div>
        <div className="text-[13px] text-blue-100/60">{description}</div>
      </div>
    </div>
  )
}

function OperatingModelPanel() {
  return (
    <Card className="!rounded-2xl !border-white/15 !bg-white/10 !backdrop-blur-sm" styles={{ body: { padding: 28 } }}>
      <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/10">
        <div className="w-[42px] h-[42px] bg-blue/20 rounded-[10px] flex items-center justify-center text-xl text-blue-300">
          <AimOutlined />
        </div>
        <div>
          <div className="text-base font-bold text-white">Our Operating Model</div>
          <div className="text-xs text-blue-100/50">Built for quality from day one</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2.5 mb-4">
        {OPERATING_MODEL.map((item) => (
          <div
            key={item.label}
            className="bg-white/5 border border-white/10 rounded-[10px] p-3.5"
          >
            <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-blue-300/60 mb-1">
              {item.label}
            </div>
            <div className="text-lg font-extrabold text-white">
              {item.value}{' '}
              <small className="text-xs font-medium text-blue-100/50">{item.unit}</small>
            </div>
            <div className="text-[11px] text-blue-100/40 mt-0.5">{item.note}</div>
          </div>
        ))}
      </div>

      <div className="bg-blue/15 border border-blue/25 rounded-[10px] px-3.5 py-3 text-[13px] text-blue-200 leading-relaxed">
        🤝 Early clients work directly with our founding team — not a generic
        account manager. Your success is our first priority.
      </div>
    </Card>
  )
}

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-gradient-to-br from-navy via-[#162252] to-[#0f1a3e] border-y border-navy/50"
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeader
              eyebrow="How It Works"
              title="Simple, Structured Onboarding"
              subtitle="We keep things clear so you feel the impact from day one."
              dark
            />
            <div className="flex flex-col">
              {STEPS.map((step, i) => (
                <StepItem
                  key={step.number}
                  {...step}
                  isLast={i === STEPS.length - 1}
                />
              ))}
            </div>
          </div>
          <OperatingModelPanel />
        </div>
      </div>
    </section>
  )
}
