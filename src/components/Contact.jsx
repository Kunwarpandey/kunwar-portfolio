import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MessageSquare, Send, CheckCircle } from 'lucide-react'

const contactLinks = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    href: 'mailto:kunwar.1pandey@gmail.com',
    color: '#3b82f6',
  },
  {
    icon: <Linkedin size={20} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/kunwarpandey',
    href: '[linkedin.com](https://linkedin.com/in/kunwarpandey)',
    color: '#0077b5',
  },
  {
    icon: <Github size={20} />,
    label: 'GitHub',
    value: 'github.com/kunwarpandey',
    href: '[github.com](https://github.com/kunwarpandey)',
    color: '#8b5cf6',
  },
  {
    icon: <MessageSquare size={20} />,
    label: 'WhatsApp',
    value: 'Chat on WhatsApp',
    href: '[wa.me](https://wa.me/7710939069)',
    color: '#25d366',
  },
]

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', budget: '', message: '' })
  const [status, setStatus]   = useState('idle') // idle | sending | sent | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    // Replace with EmailJS or your preferred email service
    await new Promise(r => setTimeout(r, 1500)) // simulate API call
    setStatus('sent')
  }

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(59,130,246,0.06), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Let's Talk</span>
          <h2 className="section-title">
            Start a <span className="gradient-text">conversation</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-lg">
            Have a project in mind? Drop me a message and I'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left — Contact links */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            <h3 className="font-display font-bold text-xl text-white mb-8">Get in touch</h3>

            <div className="space-y-4 mb-10">
              {contactLinks.map(({ icon, label, value, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 p-4 glass rounded-2xl border border-white/8
                             hover:border-white/20 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0
                                  transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${color}15`, border: `1px solid ${color}30`, color }}>
                    {icon}
                  </div>
                  <div>
                    <div className="text-white/40 text-xs">{label}</div>
                    <div className="text-white text-sm font-medium">{value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability block */}
            <div className="glass rounded-2xl p-5 border border-green-500/20">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 font-semibold text-sm">Currently Available</span>
              </div>
              <p className="text-white/50 text-sm">
                Open to new freelance projects. Response time: within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            {status === 'sent' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-3xl p-12 border border-green-500/20 text-center h-full
                           flex flex-col items-center justify-center"
              >
                <CheckCircle size={56} className="text-green-400 mb-5" />
                <h3 className="font-display font-bold text-2xl text-white mb-3">Message Sent!</h3>
                <p className="text-white/50 text-sm max-w-xs">
                  Thanks for reaching out. I'll review your project and reply within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}
                className="glass rounded-3xl p-8 border border-white/8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { name: 'name',  placeholder: 'Your Name',  type: 'text' },
                    { name: 'email', placeholder: 'Email Address', type: 'email' },
                  ].map(field => (
                    <div key={field.name}>
                      <input
                        {...field}
                        value={form[field.name]}
                        onChange={handleChange}
                        required
                        aria-label={field.placeholder}
                        className="w-full px-5 py-3.5 rounded-xl text-sm text-white placeholder-white/30
                                   outline-none transition-all duration-300 focus:ring-1 focus:ring-blue-500/50"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}
                        onFocus={e => e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)'}
                        onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
                      />
                    </div>
                  ))}
                </div>

                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  required
                  aria-label="Budget range"
                  className="w-full px-5 py-3.5 rounded-xl text-sm text-white/70 outline-none
                             transition-all duration-300 appearance-none"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <option value="" disabled>Project Budget (USD)</option>
                  <option value="<1000">Under $1,000</option>
                  <option value="1000-3000">$1,000 – $3,000</option>
                  <option value="3000-7000">$3,000 – $7,000</option>
                  <option value="7000+">$7,000+</option>
                </select>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project — what are you building and what's the timeline?"
                  aria-label="Project description"
                  className="w-full px-5 py-3.5 rounded-xl text-sm text-white placeholder-white/30
                             outline-none resize-none transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
                />

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span className="flex items-center gap-2">
                    {status === 'sending' ? (
                      <>
                        <motion.span animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}>⏳</motion.span>
                        Sending...
                      </>
                    ) : (
                      <><Send size={16} /> Send Message</>
                    )}
                  </span>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
