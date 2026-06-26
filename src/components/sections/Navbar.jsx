import { useState } from 'react'
import { Button, Drawer } from 'antd'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
import Logo from '../ui/Logo'
import { NAV_LINKS } from '../../constants/data'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="border-b border-white/10 px-4 sm:px-6 lg:px-12 h-16 flex items-center justify-between sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-blue-950/80 via-gray-900/60 to-blue-950/80">
      {/* Logo — shrinks on smaller screens to avoid overlap */}
      <div className="shrink-0">
        <Logo />
      </div>

      {/* Desktop nav links — hidden below lg to prevent cramped links */}
      <ul className="hidden lg:flex gap-5 xl:gap-8 list-none">
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(link.href)
              }}
              className="text-sm font-semibold text-white/80 no-underline transition-colors duration-150 hover:text-white whitespace-nowrap"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop CTA — hidden below lg */}
      <Button
        type="primary"
        className="hidden lg:inline-flex !rounded-lg !font-semibold !text-sm !h-auto !px-5 !py-2 shrink-0"
        onClick={() => handleNavClick('#contact')}
      >
        Book a Call
      </Button>

      {/* Mobile menu button — visible below lg */}
      <Button
        type="text"
        icon={<MenuOutlined className="!text-white" />}
        className="lg:hidden !text-white"
        onClick={() => setMobileOpen(true)}
      />

      {/* Mobile drawer */}
      <Drawer
        title={<Logo size="small" />}
        placement="right"
        onClose={() => setMobileOpen(false)}
        open={mobileOpen}
        closeIcon={<CloseOutlined className="!text-white mr-5" />}
        width={280}
        classNames={{
          header: 'bg-navy !h-[65px] flex items-center justify-center gap-4',
        }}
      >
        <div className="flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(link.href)
              }}
              className="text-base font-medium text-slate-700 no-underline py-2 border-b border-border hover:text-navy transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button
            type="primary"
            block
            className="!mt-4 !rounded-lg !font-semibold !h-auto !py-2.5"
            onClick={() => handleNavClick('#contact')}
          >
            Book a Call
          </Button>
        </div>
      </Drawer>
    </nav>
  )
}
