import Logo from '../ui/Logo'
import { FOOTER_LINKS } from '../../constants/data'

function FooterColumn({ title, links }) {
  return (
    <div>
      <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-blue-300/60 mb-3">
        {title}
      </div>
      <ul className="list-none flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-slate-400 no-underline transition-colors duration-150 hover:text-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-[#0d1730] border-t border-white/5 px-6 md:px-12 pt-10 pb-7">
      <div className="max-w-[1100px] mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-8 mb-7">
          <div>
            <div className="mb-2.5">
              <Logo size="small" />
            </div>
            <p className="text-[13px] text-slate-500 max-w-[220px] leading-normal">
              Connecting people. Delivering solutions. A BPO startup built with
              care.
            </p>
          </div>
          <FooterColumn title="Services" links={FOOTER_LINKS.services} />
          <FooterColumn title="Company" links={FOOTER_LINKS.company} />
          <FooterColumn title="Contact" links={FOOTER_LINKS.contact} />
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 pt-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="text-[13px] text-slate-500">
            © 2026 MakeMyCall BPO Solutions. All rights reserved.
          </span>
          <span className="text-[13px] text-slate-500">
            Avadi, Tamil Nadu, India
          </span>
        </div>
      </div>
    </footer>
  )
}
