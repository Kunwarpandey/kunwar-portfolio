import { motion } from 'framer-motion'

const experiences = [
  {
    company:    'Mercedes-Benz R&D India',
    role:       'Software Engineer',
    period:     '2022 – Present',
    duration:   '2+ Years',
    location:   'Bengaluru, India',
    emoji:      '🏎️',
    color:      '#3b82f6',
    highlights: [
      'Developed and maintained enterprise-grade automation testing frameworks using Python and Selenium, reducing regression cycle time by 40%.',
      'Built scalable data engineering pipelines on Databricks and PySpark, processing millions of records for vehicle telemetry analytics.',
      'Contributed to cloud infrastructure on AWS and Azure, implementing CI/CD pipelines with Kubernetes and Docker.',
      'Collaborated with cross-functional teams across Germany and India using Agile methodologies.',
      'Delivered backend microservices in Python and Golang for internal R&D tooling.',
    ],
    tags: ['Python', 'Automation', 'PySpark', 'AWS', 'Kubernetes', 'Golang'],
  },
  {
    company:    'Freelance Projects',
    role:       'Full Stack Developer',
    period:     '2021 – Present',
    duration:   'Ongoing',
    location:   'Remote',
    emoji:      '💻',
    color:      '#8b5cf6',
    highlights: [
      'Delivered 10+ full-stack web projects for clients in India, Europe, and USA.',
      'Built custom Django backends and React frontends for SaaS, e-commerce, and portfolio clients.',
      'Integrated AI/ML features (image captioning, chatbots) into client web platforms.',
      'Maintained 100% client satisfaction with on-time delivery and clear communication.',
    ],
    tags: ['Django', 'React', 'PostgreSQL', 'Docker', 'AI Integration'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Career Journey</span>
          <h2 className="section-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(180deg, #3b82f6, #8b5cf6, transparent)' }} />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-16 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-6 z-10">
                <div className="w-4 h-4 rounded-full border-2 border-current animate-pulse-slow"
                  style={{ borderColor: exp.color, background: exp.color, boxShadow: `0 0 16px ${exp.color}80` }} />
              </div>

              {/* Spacer for opposite side */}
              <div className="hidden md:block flex-1" />

              {/* Card */}
              <div className="flex-1 ml-12 md:ml-0 md:max-w-[calc(50%-2rem)]">
                <div className="glass rounded-2xl p-6 border border-white/8 hover:border-blue-500/25
                               transition-all duration-300 group">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl text-2xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${exp.color}15`, border: `1px solid ${exp.color}30` }}>
                      {exp.emoji}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display font-bold text-white text-base">{exp.company}</h3>
                      <div className="text-sm font-semibold mt-0.5" style={{ color: exp.color }}>{exp.role}</div>
                      <div className="flex items-center gap-3 mt-1.5 text-xs text-white/40">
                        <span>{exp.period}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                        <span>•</span>
                        <span className="font-semibold" style={{ color: exp.color }}>{exp.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2.5 mb-5">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-white/60 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ background: exp.color }} />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{ background: `${exp.color}12`, border: `1px solid ${exp.color}25`, color: exp.color }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
