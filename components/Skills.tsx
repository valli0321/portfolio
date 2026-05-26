'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { portfolioData } from '@/lib/constants'
import { SectionWrapper } from './SectionWrapper'

const SkillCard = ({ category, skills, index }: { category: string; skills: string[]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      {/* Card */}
      <div className="relative p-6 rounded-xl bg-muted/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
        {/* Gradient background on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300 -z-10" />

        <div className="relative space-y-4">
          {/* Category heading */}
          <h3 className="text-lg font-semibold text-foreground">{category}</h3>

          {/* Skills grid */}
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, skillIndex) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                className="px-3 py-1.5 text-sm rounded-lg bg-primary/10 text-primary border border-primary/30 hover:border-primary/60 transition-colors duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {/* Progress indicator */}
          <motion.div
            className="h-1 bg-border rounded-full overflow-hidden"
            initial={{ width: '0%' }}
            animate={isVisible ? { width: '100%' } : {}}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            <motion.div
              className="h-full bg-linear-to-r from-primary to-accent"
              initial={{ width: '0%' }}
              animate={isVisible ? { width: '100%' } : {}}
              transition={{ delay: index * 0.1 + 0.4, duration: 1.5 }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export const Skills = () => {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <SectionWrapper id="skills" title={portfolioData.skills.title} dark>
      <motion.div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
      >
        {portfolioData.skills.categories.map((category, index) => (
          <SkillCard
            key={category.name}
            category={category.name}
            skills={category.skills}
            index={index}
          />
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
