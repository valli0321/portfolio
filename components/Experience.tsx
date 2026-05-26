'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { portfolioData } from '@/lib/constants'
import { SectionWrapper } from './SectionWrapper'
import { Briefcase, Calendar } from 'lucide-react'

const ExperienceCard = ({
  exp,
  index,
}: {
  exp: typeof portfolioData.experience[0]
  index: number
}) => {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline line and dot */}
      <div className="absolute -left-[2.5rem] top-0 w-14 h-14 rounded-full bg-muted border-2 border-primary flex items-center justify-center">
        <Briefcase className="w-6 h-6 text-primary" />
      </div>

      {/* Vertical line connector */}
      {index !== portfolioData.experience.length - 1 && (
        <div className="absolute -left-12 top-14 h-20 w-0.5 bg-linear-to-b from-primary to-transparent" />
      )}

      {/* Content card */}
      <motion.div
        className="ml-12 p-6 rounded-xl bg-muted/50 border border-border/50 hover:border-primary/50 transition-all duration-300"
        whileHover={{ y: -4 }}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-foreground">{exp.position}</h3>
            <p className="text-primary font-semibold">{exp.company}</p>
          </div>
          <div className="flex items-center gap-2 text-foreground/60 text-sm mt-2 sm:mt-0">
            <Calendar className="w-4 h-4" />
            {exp.duration}
          </div>
        </div>

        {/* Description */}
        <p className="text-foreground/70 mb-4">{exp.description}</p>

        {/* Achievements */}
        <motion.ul className="space-y-2">
          {exp.achievements.map((achievement, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1 + i * 0.05 }}
              className="text-foreground/60 text-sm flex items-start gap-3"
            >
              <span className="text-primary ">•</span>
              <span>{achievement}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  )
}

export const Experience = () => {
  return (
    <SectionWrapper id="experience" title="Experience" subtitle="My professional journey">
      <div className="max-w-4xl mx-auto">
        <motion.div className="relative">
          {/* Main timeline line */}
          <div className="absolute -left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-transparent" />

          {/* Experience items */}
          <div className="space-y-8">
            {portfolioData.experience.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
