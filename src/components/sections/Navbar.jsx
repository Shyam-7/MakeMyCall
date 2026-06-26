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
    <nav className="bg-white border-b border-border px-6 md:px-12 h-16 flex items-center justify-between sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <Logo />

      {/* Desktop nav links */}
      <ul className="hidden md:flex gap-8 list-none">
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(link.href)
              }}
              className="text-sm font-medium text-muted no-underline transition-colors duration-150 hover:text-navy"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop CTA */}
      <Button
        type="primary"
        className="hidden md:inline-flex !rounded-lg !font-semibold !text-sm !h-auto !px-5 !py-2"
        onClick={() => handleNavClick('#contact')}
      >
        Book a Call
      </Button>

      {/* Mobile menu button */}
      <Button
        type="text"
        icon={<MenuOutlined />}
        className="md:hidden"
        onClick={() => setMobileOpen(true)}
      />

      {/* Mobile drawer */}
      <Drawer
        title={<Logo size="small" />}
        placement="right"
        onClose={() => setMobileOpen(false)}
        open={mobileOpen}
        closeIcon={<CloseOutlined />}
        width={280}
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
              className="text-base font-medium text-muted no-underline py-2 border-b border-border hover:text-navy transition-colors"
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
