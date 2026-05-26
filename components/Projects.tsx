'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { portfolioData } from '@/lib/constants'
import { SectionWrapper } from './SectionWrapper'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

const ProjectCard = ({ project, index }: { project: typeof portfolioData.projects[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group h-full"
    >
      <div className="relative h-full rounded-xl overflow-hidden border border-border/50 bg-card hover:border-primary/50 transition-all duration-300">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Image placeholder */}
        {
          project?.image ?
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/15" />
            </div> :
            <div className="relative h-48 bg-linear-to-br from-muted to-muted/50 overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(139,92,246,0.1)_25%,rgba(139,92,246,0.1)_50%,transparent_50%,transparent_75%,rgba(139,92,246,0.1)_75%,rgba(139,92,246,0.1))] bg-[length:40px_40px]" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"
                animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
                transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
              />
            </div>
        }




        {/* Content */}
        <div className="relative p-6 space-y-4">
          {/* Category badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.1 + 0.2 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full border border-primary/30">
              {project.category}
            </span>
          </motion.div>

          {/* Title */}
          <h3 className="text-xl font-bold text-foreground">{project.title}</h3>

          {/* Description */}
          <p className="text-foreground/70 text-sm">{project.description}</p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 bg-muted rounded text-foreground/60"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="text-xs px-2 py-1 bg-muted rounded text-foreground/60">
                +{project.tech.length - 3}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-4 border-t border-border/50">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
            {/* <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors ml-auto"
            >
              Live
              <ExternalLink className="w-4 h-4" />
            </a> */}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const { ref, isVisible } = useScrollAnimation(0.2)

  const categories = ['All', ...new Set(portfolioData.projects.map((p) => p.category))]

  const filteredProjects =
    selectedCategory === 'All'
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === selectedCategory)

  return (
    <SectionWrapper id="projects" title="Projects" subtitle="A selection of my recent work">
      {/* Category filter */}
      {/* <motion.div
        ref={ref}
        className="flex flex-wrap gap-3 justify-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-foreground/70 hover:text-foreground border border-border'
            }`}
          >
            {category}
          </motion.button>
        ))}
      </motion.div> */}

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  )
}
