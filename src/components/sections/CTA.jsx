import { Button } from 'antd'
import { MailOutlined, PhoneOutlined } from '@ant-design/icons'

export default function CTA() {
  return (
    <section id="contact" className="px-6 md:px-12 mb-16">
      <div className="max-w-[1100px] mx-auto bg-navy rounded-2xl md:rounded-[20px] px-6 md:px-14 py-12 md:py-14 text-center">
        <p className="text-xs font-bold tracking-[2px] uppercase text-blue-300 mb-3.5">
          Get in Touch
        </p>
        <h2 className="text-[30px] font-extrabold text-white tracking-tight mb-2">
          Let&apos;s See If We&apos;re a Fit
        </h2>
        <p className="text-base text-slate-400 max-w-[500px] mx-auto mb-7 leading-relaxed">
          Book a free 30-minute discovery call. No pressure, no commitment —
          just a conversation about your operations.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Button
            size="large"
            icon={<MailOutlined />}
            className="!bg-white !text-navy !border-none !rounded-lg !font-semibold !text-[15px] !h-auto !px-6 !py-3"
            onClick={() => window.location.href = 'mailto:hello@makemycall.in'}
          >
            Email Us
          </Button>
          <Button
            size="large"
            icon={<PhoneOutlined />}
            className="!bg-transparent !text-white !border-white/30 !rounded-lg !font-semibold !text-[15px] !h-auto !px-5.5 !py-[11px] hover:!border-white/60"
          >
            Schedule a Call
          </Button>
        </div>
        <p className="text-xs text-slate-500 mt-3.5">
          We&apos;re actively onboarding our first clients — reach out and let&apos;s
          get started.
        </p>
      </div>
    </section>
  )
}
