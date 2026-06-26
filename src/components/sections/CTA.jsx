import { Button } from 'antd'
import { MailOutlined, PhoneOutlined } from '@ant-design/icons'

export default function CTA() {
  return (
    <section id="contact" className="px-6 md:px-12 mb-16">
      <div className="relative max-w-[1100px] mx-auto overflow-hidden rounded-2xl md:rounded-[20px]">
        {/* Gradient background with subtle pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-[#162252] to-blue-dark" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(37, 99, 235, 0.2) 0%, transparent 40%)'
        }} />

        <div className="relative px-6 md:px-14 py-14 md:py-16 text-center">
          <p className="text-xs font-bold tracking-[2px] uppercase text-blue-300 mb-3.5">
            Get in Touch
          </p>
          <h2 className="text-[30px] md:text-[36px] font-extrabold text-white tracking-tight mb-3">
            Let&apos;s See If We&apos;re a Fit
          </h2>
          <p className="text-base text-blue-100/60 max-w-[500px] mx-auto mb-8 leading-relaxed">
            Book a free 30-minute discovery call. No pressure, no commitment —
            just a conversation about your operations.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Button
              size="large"
              icon={<MailOutlined />}
              className="!bg-white !text-navy !border-none !rounded-lg !font-semibold !text-[15px] !h-auto !px-6 !py-3 hover:!bg-blue-50"
              onClick={() => window.location.href = 'mailto:hello@makemycall.in'}
            >
              Email Us
            </Button>
            <Button
              size="large"
              icon={<PhoneOutlined />}
              className="!bg-transparent !text-white !border-white/30 !rounded-lg !font-semibold !text-[15px] !h-auto !px-5.5 !py-[11px] hover:!border-white/60 hover:!bg-white/10"
            >
              Schedule a Call
            </Button>
          </div>
          <p className="text-xs text-blue-100/40 mt-4">
            We&apos;re actively onboarding our first clients — reach out and let&apos;s
            get started.
          </p>
        </div>
      </div>
    </section>
  )
}
