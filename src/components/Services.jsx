import { motion } from 'framer-motion'
import { services } from '../utils/data'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-scroll'

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function Services() {
  return (
    <section id="services" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(59,130,246,0.06), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <span className="section-badge">What I Offer</span>
          <h2 className="section-title">
            Services that <span className="gradient-text">drive results</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-lg">
            Every service is delivered with enterprise-quality code, clear communication, and a focus on your business goals.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass rounded-2xl p-6 border border-white/8 group cursor-pointer
                         transition-all duration-500 hover:border-blue-500/30 relative overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: 'radial-gradient(circle at top left, rgba(59,130,246,0.06), transparent 60%)' }} />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5
                               transition-transform duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}>
                  {service.icon}
                </div>

                <h3 className="font-display font-bold text-white text-base mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-6">
                  {service.highlights.map(h => (
                    <li key={h} className="flex items-center gap-2 text-xs text-white/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link to="contact" smooth duration={600} offset={-80}>
                  <div className="flex items-center gap-1.5 text-blue-400 text-xs font-semibold
                                  group/cta hover:gap-3 transition-all duration-300">
                    Get Started
                    <ArrowRight size={12} className="transition-transform group-hover/cta:translate-x-1" />
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
