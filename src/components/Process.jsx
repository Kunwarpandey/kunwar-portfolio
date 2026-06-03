import { motion } from 'framer-motion'
import { process } from '../utils/data'

export default function Process() {
  return (
    <section id="process" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <span className="section-badge">How I Work</span>
          <h2 className="section-title">
            My <span className="gradient-text">Freelance Process</span>
          </h2>
          <p className="text-white/50 max-w-lg mx-auto text-lg">
            A transparent, structured approach so you always know what's happening — and when.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px mx-32"
            style={{ background: 'linear-gradient(90deg, transparent, #3b82f6, #8b5cf6, #06b6d4, transparent)' }} />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="relative text-center group"
              >
                {/* Icon circle */}
                <div className="relative mx-auto mb-6 w-20 h-20 rounded-full glass border border-white/10
                               flex items-center justify-center text-3xl transition-all duration-300
                               group-hover:border-blue-500/30 group-hover:shadow-lg group-hover:shadow-blue-500/10"
                >
                  {step.icon}
                  {/* Step number */}
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold
                                   text-white flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}>
                    {i + 1}
                  </span>
                </div>

                <h3 className="font-display font-bold text-white text-sm mb-2">{step.title}</h3>
                <p className="text-white/45 text-xs leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <motion.div
          className="mt-20 glass rounded-3xl p-8 md:p-12 border border-white/8 text-center
                     relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.3 }}
        >
          <div className="absolute inset-0 opacity-40"
            style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 0%, rgba(59,130,246,0.08), transparent)' }} />
          <div className="relative z-10">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="font-display font-bold text-3xl text-white mb-3">
              Ready to start your project?
            </h3>
            <p className="text-white/50 mb-8 max-w-lg mx-auto">
              Let's have a no-obligation 30-minute call to discuss your idea. I'll give you a realistic assessment and timeline — no hard sell.
            </p>
            <a href="mailto:kunwar@example.com" className="btn-primary text-base inline-flex">
              <span>📅 Schedule a Call</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
