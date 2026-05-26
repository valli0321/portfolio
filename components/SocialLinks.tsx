'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { portfolioData } from '@/lib/constants'

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
}

export const SocialLinks = () => {
  return (
    <div className="flex gap-6 justify-center items-center">
      {portfolioData.social.map((link, index) => {
        const Icon = iconMap[link.icon as keyof typeof iconMap]
        return (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:bg-primary/40 transition-colors duration-300" />
            <div className="relative p-3 rounded-full bg-muted hover:bg-primary/10 transition-colors duration-300">
              <Icon className="w-5 h-5" />
            </div>
          </motion.a>
        )
      })}
    </div>
  )
}
