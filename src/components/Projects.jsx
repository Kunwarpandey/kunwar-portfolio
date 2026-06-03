import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../utils/data'
import { Github, ExternalLink } from 'lucide-react'

const categories = ['All', 'Full Stack', 'AI / ML', 'Developer Tool', 'QA / DevOps']

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Portfolio</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-lg">
            A selection of projects spanning full-stack development, AI engineering, and DevOps automation.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === cat
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'glass text-white/50 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="glass rounded-2xl overflow-hidden border border-white/8
                           hover:border-white/15 transition-all duration-500 group"
              >
                {/* Image placeholder */}
                <div className={`relative h-52 bg-gradient-to-br ${project.color} overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-3">
                        {project.category === 'Full Stack' ? '🏗️'
                          : project.category === 'AI / ML' ? '🤖'
                          : project.category === 'Developer Tool' ? '⌨️'
                          : '🧪'}
                      </div>
                      <div className="glass px-4 py-1.5 rounded-full border border-white/15">
                        <span className="text-white/80 text-xs font-medium">{project.category}</span>
                      </div>
                    </div>
                  </div>
                  {/* Shimmer on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent
                                  translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display font-bold text-white text-lg mb-2">{project.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed mb-5">{project.description}</p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(tech => (
                      <span key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          background: `${project.accent}15`,
                          border: `1px solid ${project.accent}30`,
                          color: project.accent,
                        }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <a href="#" target="_blank" rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl
                                 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90"
                      style={{ background: `linear-gradient(135deg, ${project.accent}cc, ${project.accent}88)` }}>
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl
                                 text-sm font-semibold text-white/70 hover:text-white glass
                                 border border-white/10 hover:border-white/25 transition-all duration-300">
                      <Github size={14} />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View all CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.4 }}
        >
          <a href="[github.com](https://github.com/kunwarpandey)" target="_blank" rel="noopener noreferrer">
            <button className="btn-outline">
              <Github size={16} /> View All on GitHub
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
