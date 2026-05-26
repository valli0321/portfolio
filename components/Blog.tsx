'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { portfolioData } from '@/lib/constants'
import { SectionWrapper } from './SectionWrapper'
import { ArrowRight, Clock } from 'lucide-react'

const BlogCard = ({ blog, index }: { blog: typeof portfolioData.blogs[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      <a
        href={blog.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block h-full p-6 rounded-xl bg-muted/50 border border-border/50 hover:border-primary/50 transition-all duration-300"
      >
        {/* Header section */}
        <div className="flex items-start justify-between mb-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full border border-primary/30">
            {new Date(blog.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {blog.title}
        </h3>

        {/* Description */}
        <p className="text-foreground/70 text-sm mb-4">{blog.description}</p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div className="flex items-center gap-2 text-xs text-foreground/60">
            <Clock className="w-4 h-4" />
            {blog.readTime}
          </div>
          <motion.div
            className="flex items-center gap-2 text-primary group-hover:translate-x-1 transition-transform"
            whileHover={{ x: 4 }}
          >
            Read More
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </div>
      </a>
    </motion.div>
  )
}

export const Blog = () => {
  return (
    <SectionWrapper
      id="blog"
      title="Latest Articles"
      subtitle="Thoughts on web development, design, and technology"
      dark
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.blogs.map((blog, index) => (
          <BlogCard key={blog.id} blog={blog} index={index} />
        ))}
      </div>

      {/* View all link */}
      <motion.div
        className="flex justify-center mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <a
          href="https://medium.com/@alexjohnson"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 hover:border-primary/60 transition-all"
        >
          View All Articles
          <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>
    </SectionWrapper>
  )
}
