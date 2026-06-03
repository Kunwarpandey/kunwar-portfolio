import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { Github, Linkedin, Mail, Heart, Code2, ArrowUp } from 'lucide-react'
import { navLinks } from '../utils/data'

const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-16 pb-8">
      <div className="absolute inset-0 opacity-20"
        style={{ background: 'radial-gradient(ellipse 50% 80% at 50% 100%, rgba(59,130,246,0.06), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg,#3b82f6,#7c3aed)' }}>
                <Code2 size={18} className="text-white" />
              </div>
              <span className="font-display font-bold text-xl gradient-text">Kunwar Pandey</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              Software Engineer & Full Stack Developer. Building scalable web solutions from Bengaluru, India — for clients worldwide.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Github size={16} />,   href: '[github.com](https://github.com/kunwarpandey)',       label: 'GitHub' },
                { icon: <Linkedin size={16} />, href: '[linkedin.com](https://linkedin.com/in/kunwarpandey)', label: 'LinkedIn' },
                { icon: <Mail size={16} />,     href: 'mailto:kunwar@example.com',             label: 'Email' },
              ].map(({ icon, href, label }) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label} whileHover={{ y: -3 }}
                  className="w-9 h-9 glass rounded-lg flex items-center justify-center
                             text-white/40 hover:text-white border border-white/8
                             hover:border-blue-500/30 transition-all duration-300">
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-2.5">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link to={href} smooth duration={600} offset={-80}
                    className="text-white/40 text-sm hover:text-white transition-colors cursor-pointer
                               hover:text-blue-400">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-widest">Services</h4>
            <ul className="space-y-2.5">
              {['Web Development', 'Full Stack Apps', 'Django Backend', 'React Frontend', 'API Development', 'AI Solutions'].map(s => (
                <li key={s}>
                  <span className="text-white/40 text-sm hover:text-blue-400 transition-colors cursor-default">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm flex items-center gap-1.5">
            © {new Date().getFullYear()} Kunwar Pandey · Made with{' '}
            <Heart size={12} className="text-red-400 fill-red-400" /> in India
          </p>
          <motion.button
            onClick={scrollTop}
            whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}
            className="w-9 h-9 glass rounded-lg flex items-center justify-center
                       text-white/40 hover:text-white border border-white/8
                       hover:border-blue-500/30 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
