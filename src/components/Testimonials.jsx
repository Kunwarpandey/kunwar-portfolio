import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '../utils/data'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(c => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent(c => (c === testimonials.length - 1 ? 0 : c + 1))

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(139,92,246,0.08), transparent)' }} />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Client Love</span>
          <h2 className="section-title">
            What clients <span className="gradient-text">say</span>
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="glass rounded-3xl p-8 md:p-12 border border-white/8 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 rounded-t-3xl"
                style={{ background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)' }} />

              {/* Quote icon */}
              <div className="text-6xl text-blue-500/20 font-serif leading-none mb-6">"</div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-8 italic">
                "{testimonials[current].text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm text-white"
                  style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}>
                  {testimonials[current].avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonials[current].name}</div>
                  <div className="text-white/45 text-sm">{testimonials[current].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button onClick={prev}
              className="w-11 h-11 glass rounded-xl flex items-center justify-center
                         text-white/60 hover:text-white border border-white/10
                         hover:border-blue-500/30 transition-all duration-300">
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-500'
                      : 'w-1.5 bg-white/20'
                  }`}
                />
              ))}
            </div>

            <button onClick={next}
              className="w-11 h-11 glass rounded-xl flex items-center justify-center
                         text-white/60 hover:text-white border border-white/10
                         hover:border-blue-500/30 transition-all duration-300">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
