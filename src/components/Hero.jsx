import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-scroll'
import { Github, Linkedin, Mail, ArrowDown, Sparkles, Download } from 'lucide-react'

const floatVariants = {
  initial: { opacity: 0, y: 30 },
  animate: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background orbs */}
      <div className="orb w-[600px] h-[600px] -top-32 -left-32"
        style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }} />
      <div className="orb w-[500px] h-[500px] top-1/4 -right-32"
        style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)' }} />
      <div className="orb w-[400px] h-[400px] bottom-0 left-1/3"
        style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)' }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left — Text */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              custom={0} variants={floatVariants} initial="initial" animate="animate"
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="section-badge">
                <Sparkles size={12} />
                Available for freelance projects
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1} variants={floatVariants} initial="initial" animate="animate"
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6"
            >
              Hi, I'm{' '}
              <span className="gradient-text block">Kunwar Pandey</span>
            </motion.h1>

            {/* Type animation */}
            <motion.div
              custom={2} variants={floatVariants} initial="initial" animate="animate"
              className="text-xl sm:text-2xl text-white/60 mb-6 font-medium h-8"
            >
              <TypeAnimation
                sequence={[
                  'Full Stack Developer', 2000,
                  'Python & Django Expert', 2000,
                  'React Developer',       2000,
                  'AI Solutions Builder',  2000,
                  'Software Engineer @ Mercedes-Benz', 2500,
                ]}
                repeat={Infinity}
                wrapper="span"
                speed={50}
                className="gradient-text"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              custom={3} variants={floatVariants} initial="initial" animate="animate"
              className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10"
            >
              I build scalable, production-grade web applications that drive real business results.
              2+ years at Mercedes-Benz R&D — now helping startups and businesses worldwide
              ship <strong className="text-white/75">faster, smarter software</strong>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={4} variants={floatVariants} initial="initial" animate="animate"
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              <Link to="contact" smooth duration={600} offset={-80}>
                <motion.button
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                  className="btn-primary text-base px-8 py-4 shadow-lg shadow-blue-500/25"
                >
                  <span>💼 Hire Me</span>
                </motion.button>
              </Link>
              <Link to="projects" smooth duration={600} offset={-80}>
                <motion.button
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                  className="btn-outline text-base px-8 py-4"
                >
                  View Projects →
                </motion.button>
              </Link>
            </motion.div>

            {/* Socials */}
            <motion.div
              custom={5} variants={floatVariants} initial="initial" animate="animate"
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: <Github size={18} />,   href: 'https://github.com/kunwarpandey',        label: 'GitHub' },
                { icon: <Linkedin size={18} />, href: 'https://linkedin.com/in/kunwarpandey',   label: 'LinkedIn' },
                { icon: <Mail size={18} />,     href: 'mailto:kunwar@example.com',              label: 'Email' },
              ].map(({ icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 glass rounded-xl flex items-center justify-center
                             text-white/50 hover:text-white hover:border-blue-500/40
                             transition-all duration-300 border border-white/10"
                >
                  {icon}
                </motion.a>
              ))}
              <span className="text-white/25 text-sm">|</span>
              <span className="text-white/40 text-sm">Let's connect</span>
            </motion.div>
          </div>

          {/* Right — Profile Card */}
          <motion.div
            custom={2} variants={floatVariants} initial="initial" animate="animate"
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #06b6d4, #3b82f6)',
                  padding: '3px',
                  borderRadius: '50%',
                  filter: 'blur(1px)',
                }}
              />

              {/* Avatar container */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full p-1"
                style={{ background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #06b6d4, #3b82f6)' }}
              >
                <div className="w-full h-full rounded-full glass flex flex-col items-center justify-center overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #0f1f3d, #060d18)' }}>
                  {/* Placeholder avatar */}
                  <div className="w-full h-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #1e3a5f 0%, #0f1f3d 100%)' }}>
                    <span className="font-display font-bold text-7xl gradient-text select-none">KP</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                animate={{ x: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -left-8 top-1/4 glass rounded-2xl px-4 py-2.5
                           border border-white/10 shadow-xl"
              >
                <div className="text-xs text-white/50 mb-0.5">Current Role</div>
                <div className="text-sm font-semibold text-white whitespace-nowrap">@ Mercedes-Benz R&D</div>
              </motion.div>

              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -right-8 bottom-1/4 glass rounded-2xl px-4 py-2.5
                           border border-white/10 shadow-xl"
              >
                <div className="text-xs text-white/50 mb-0.5">Experience</div>
                <div className="text-sm font-semibold text-white">2+ Years</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.75 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass rounded-2xl px-4 py-2
                           border border-green-500/20 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-medium text-green-400">Open to Projects</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} className="text-white/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
