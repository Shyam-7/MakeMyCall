import { Button } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import IconBox from '../ui/IconBox'
import { HERO_CARDS } from '../../constants/data'

function HeroCard({ icon, bgClass, title, description }) {
  return (
    <div className="bg-white border border-border rounded-xl px-5 py-4.5 flex items-center gap-3.5 transition-colors duration-200 hover:border-blue-300 cursor-default">
      <IconBox icon={icon} bgClass={bgClass} />
      <div>
        <div className="text-sm font-bold text-navy mb-0.5">{title}</div>
        <div className="text-xs text-muted">{description}</div>
      </div>
    </div>
  )
}

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToServices = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="max-w-[1100px] mx-auto">
      <div className="px-6 md:px-12 py-16 md:py-[72px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div>
          <p className="text-xs font-bold tracking-[2px] uppercase text-blue mb-3.5">
            BPO &amp; Call Center Outsourcing
          </p>
          <h1 className="text-3xl md:text-[40px] font-extrabold leading-[1.12] text-navy tracking-tight mb-4">
            Connecting People.
            <br />
            <span className="text-blue">Delivering Solutions.</span>
          </h1>
          <p className="text-base text-muted leading-relaxed max-w-[420px] mb-7">
            MakeMyCall handles your customer support, back-office tasks, and
            call operations — so you can focus on what you do best.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
              className="!rounded-lg !font-semibold !text-[15px] !h-auto !px-6 !py-3"
              onClick={scrollToContact}
            >
              Book a Discovery Call
            </Button>
            <Button
              size="large"
              className="!rounded-lg !font-semibold !text-[15px] !h-auto !px-5.5 !py-[11px] !border-border !text-navy hover:!border-slate-400"
              onClick={scrollToServices}
            >
              Explore Services
            </Button>
          </div>
          <p className="text-[13px] text-muted">
            Built by a team with{' '}
            <strong className="text-navy">hands-on BPO experience</strong> — now
            taking our first clients.
          </p>
        </div>

        {/* Right cards */}
        <div className="flex flex-col gap-3">
          {HERO_CARDS.map((card) => (
            <HeroCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
