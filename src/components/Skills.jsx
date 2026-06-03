import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skills } from '../utils/data'

const categoryColors = {
  'Backend':          { from: '#3b82f6', to: '#7c3aed' },
  'Frontend':         { from: '#06b6d4', to: '#3b82f6' },
  'Cloud & DevOps':   { from: '#8b5cf6', to: '#ec4899' },
  'Database':         { from: '#10b981', to: '#06b6d4' },
  'Data Engineering': { from: '#f59e0b', to: '#ef4444' },
}

function SkillBar({ name, level, color, delay }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="text-white/80 text-sm font-medium">{name}</span>
        <span className="text-white/40 text-sm font-mono">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.06)' }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color.from}, ${color.to})` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const categories = Object.keys(skills)
  const [active, setActive] = useState(categories[0])

  return (
    <section id="skills" className="py-28 relative">
      {/* Subtle bg accent */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Technical Expertise</span>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-lg">
            A curated stack built from real-world production experience across startups, enterprises, and R&D.
          </p>
        </motion.div>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <motion.button
              key={cat}
              onClick={() => setActive(cat)}
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === cat
                  ? 'text-white shadow-lg'
                  : 'glass text-white/50 hover:text-white border border-white/10'
              }`}
              style={active === cat ? {
                background: `linear-gradient(135deg, ${categoryColors[cat]?.from}, ${categoryColors[cat]?.to})`,
                boxShadow: `0 8px 24px ${categoryColors[cat]?.from}40`,
              } : {}}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Skill bars */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="glass rounded-3xl p-8 md:p-12 border border-white/8 max-w-3xl mx-auto"
          >
            <h3 className="font-display font-bold text-xl text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                style={{ background: `linear-gradient(135deg, ${categoryColors[active]?.from}, ${categoryColors[active]?.to})` }}>
                ●
              </span>
              {active}
            </h3>
            {skills[active].map((skill, i) => (
              <SkillBar
                key={skill.name}
                {...skill}
                color={categoryColors[active]}
                delay={i}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Tech pill cloud */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.3 }}
        >
          <p className="text-white/30 text-sm mb-6 tracking-widest uppercase">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Pytest', 'Selenium', 'Redis', 'Nginx', 'FastAPI', 'LangChain',
              'OpenAI API', 'GitHub Actions', 'Terraform', 'Bash', 'Linux'].map(tech => (
              <span key={tech}
                className="px-4 py-2 rounded-full text-xs font-medium text-white/50 glass
                           border border-white/8 hover:text-white/80 hover:border-white/20
                           transition-all duration-300 cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
