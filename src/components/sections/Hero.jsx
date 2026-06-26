import { Button } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import IconBox from '../ui/IconBox'
import { HERO_CARDS } from '../../constants/data'

function HeroCard({ icon, bgClass, title, description }) {
  return (
    <div className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-4.5 flex items-center gap-3.5 transition-all duration-200 hover:border-blue-300 hover:bg-white cursor-default shadow-sm">
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

  const bgUrl = `${import.meta.env.BASE_URL}hero-bg.png`

  return (
    <section className="relative overflow-hidden">
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgUrl})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-navy/85 via-navy/75 to-blue/60" />

      <div className="relative max-w-[1100px] mx-auto">
        <div className="px-6 md:px-12 py-20 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <p className="text-xs font-bold tracking-[2px] uppercase text-blue-300 mb-3.5">
              BPO &amp; Call Center Outsourcing
            </p>
            <h1 className="text-3xl md:text-[44px] font-extrabold leading-[1.12] text-white tracking-tight mb-5">
              Connecting People.
              <br />
              <span className="text-blue-300">Delivering Solutions.</span>
            </h1>
            <p className="text-base md:text-lg text-blue-100/80 leading-relaxed max-w-[440px] mb-8">
              MakeMyCall handles your customer support, back-office tasks, and
              call operations — so you can focus on what you do best.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
                className="!rounded-lg !font-semibold !text-[15px] !h-auto !px-6 !py-3 !bg-blue !border-blue hover:!bg-blue-dark"
                onClick={scrollToContact}
              >
                Book a Discovery Call
              </Button>
              <Button
                size="large"
                className="!rounded-lg !font-semibold !text-[15px] !h-auto !px-5.5 !py-[11px] !border-white/30 !text-white !bg-transparent hover:!border-white/60 hover:!bg-white/10"
                onClick={scrollToServices}
              >
                Explore Services
              </Button>
            </div>
            <p className="text-[13px] text-blue-100/60">
              Built by a team with{' '}
              <strong className="text-white">hands-on BPO experience</strong> — now
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
      </div>
    </section>
  )
}
