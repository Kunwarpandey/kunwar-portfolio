import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import { Menu, X, Code2 } from 'lucide-react'
import { navLinks } from '../utils/data'

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [active,   setActive]     = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 glass border-b border-white/5 shadow-2xl shadow-black/50'
          : 'py-5 bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="hero" smooth duration={600} className="cursor-pointer">
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg,#3b82f6,#7c3aed)' }}>
              <Code2 size={18} className="text-white" />
            </div>
            <span className="font-display font-bold text-lg">
              <span className="gradient-text">KP</span>
              <span className="text-white/60 font-normal text-sm ml-1">dev</span>
            </span>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link
                to={href}
                smooth
                duration={600}
                offset={-80}
                spy
                onSetActive={() => setActive(href)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 block ${
                  active === href
                    ? 'text-white'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                {active === href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.3)' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link to="contact" smooth duration={600} offset={-80}
          className="hidden md:block cursor-pointer">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary text-sm px-6 py-2.5"
          >
            <span>Hire Me</span>
          </motion.button>
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          className="md:hidden p-2 rounded-lg glass text-white/70 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  to={href}
                  smooth
                  duration={600}
                  offset={-80}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all cursor-pointer text-sm font-medium"
                >
                  {label}
                </Link>
              ))}
              <Link to="contact" smooth duration={600} offset={-80}
                onClick={() => setMenuOpen(false)}>
                <button className="btn-primary w-full justify-center mt-2">
                  <span>Hire Me</span>
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
