import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Award, Briefcase, Code, Zap } from 'lucide-react'

const stats = [
  { icon: <Briefcase size={20} />, value: '2+',  label: 'Years Experience',   color: '#3b82f6' },
  { icon: <Code size={20} />,      value: '15+',  label: 'Technologies',       color: '#8b5cf6' },
  { icon: <Award size={20} />,     value: '10+',  label: 'Projects Shipped',   color: '#06b6d4' },
  { icon: <Zap size={20} />,       value: '100%', label: 'Client Satisfaction',color: '#10b981' },
]

export default function About() {
  const { ref, controls, variants } = useScrollAnimation()

  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left — visual card */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{ ...variants, visible: { ...variants.visible, transition: { duration: 0.8 } } }}
            className="flex-shrink-0 w-full lg:w-auto"
          >
            <div className="relative max-w-sm mx-auto">
              {/* Main card */}
              <div className="glass rounded-3xl p-8 border border-white/8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-30"
                  style={{ background: 'radial-gradient(circle at top right, rgba(59,130,246,0.2), transparent 60%)' }} />

                <div className="relative z-10">
                  {/* Company badge */}
                  <div className="flex items-center gap-3 mb-8 p-4 rounded-2xl"
                    style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.15)' }}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                      style={{ background: 'linear-gradient(135deg,#1a3a6e,#0f2040)' }}>
                      🏎️
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">Mercedes-Benz R&D India</div>
                      <div className="text-white/50 text-xs">Software Engineer</div>
                    </div>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {stats.map(({ icon, value, label, color }) => (
                      <div key={label}
                        className="p-4 rounded-2xl text-center"
                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <div className="flex items-center justify-center mb-2" style={{ color }}>
                          {icon}
                        </div>
                        <div className="font-display font-bold text-2xl text-white mb-0.5">{value}</div>
                        <div className="text-white/40 text-xs leading-tight">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative blob */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full opacity-20"
                style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)' }} />
            </div>
          </motion.div>

          {/* Right — text */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span className="section-badge">About Me</span>
              <h2 className="section-title">
                Engineering software that{' '}
                <span className="gradient-text">scales and converts</span>
              </h2>
              <div className="space-y-5 text-white/60 text-lg leading-relaxed">
                <p>
                  I'm a <strong className="text-white/80">Software Engineer at Mercedes-Benz R&D India</strong>,
                  where I build and maintain high-reliability systems that power one of the world's most
                  recognised automotive brands. My work spans backend APIs, data engineering pipelines,
                  automation frameworks, and cloud infrastructure.
                </p>
                <p>
                  Outside of my full-time role, I partner with startups and businesses globally to
                  build <strong className="text-white/80">premium web applications</strong> — from
                  sleek marketing sites to complex full-stack SaaS products. I care deeply about
                  clean architecture, performance, and user experience.
                </p>
                <p>
                  I bring an enterprise engineering mindset to every freelance project, which means
                  you get <strong className="text-white/80">production-ready code</strong>, proper
                  documentation, and software that genuinely works long after the project ends.
                </p>
              </div>

              {/* Highlights */}
              <div className="mt-8 flex flex-wrap gap-3">
                {['Clean Architecture', 'API Design', 'Cloud-Native', 'AI Integration',
                  'Agile / Scrum', 'Code Reviews', 'Performance Optimisation'].map(tag => (
                  <span key={tag}
                    className="px-4 py-1.5 rounded-full text-sm font-medium text-blue-300"
                    style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
