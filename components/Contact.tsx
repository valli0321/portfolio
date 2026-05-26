'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { portfolioData } from '@/lib/constants'
import { SectionWrapper } from './SectionWrapper'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const ContactInfo = ({ icon: Icon, label, value, href }: any) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ x: 4 }}
    className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 border border-border/50 hover:border-primary/50 transition-all duration-300"
  >
    <div className="p-3 rounded-lg bg-primary/10 text-primary">
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <p className="text-sm text-foreground/60">{label}</p>
      <p className="font-semibold text-foreground">{value}</p>
    </div>
  </motion.a>
)

export const Contact = () => {
  const { ref, isVisible } = useScrollAnimation(0.2)
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false)
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
    }, 1000)
  }

  return (
    <SectionWrapper
      id="contact"
      title="Get In Touch"
      subtitle="Have a project or opportunity? Let&apos;s talk!"
      dark
    >
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-foreground/70 text-lg">
            I&apos;m always interested in hearing about new projects and opportunities.
          </p>

          <div className="space-y-4">
            <ContactInfo
              icon={Mail}
              label="Email"
              value={portfolioData.email}
              href={`mailto:${portfolioData.email}`}
            />
            <ContactInfo
              icon={Phone}
              label="Phone"
              value={portfolioData.phone}
              href={`tel:${portfolioData.phone}`}
            />
            <ContactInfo
              icon={MapPin}
              label="Location"
              value={portfolioData.location}
              href="#"
            />
          </div>

          {/* Social links */}
          <motion.div
            className="pt-6 border-t border-border/50"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <p className="text-sm text-foreground/60 mb-4">Connect on social media:</p>
            <div className="flex gap-3 flex-wrap">
              {portfolioData.social.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0, x: 20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                required
                className="w-full px-4 py-2 rounded-lg bg-muted border border-border/50 focus:border-primary/50 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                required
                className="w-full px-4 py-2 rounded-lg bg-muted border border-border/50 focus:border-primary/50 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <Input
                id="subject"
                type="text"
                placeholder="Project inquiry"
                required
                className="w-full px-4 py-2 rounded-lg bg-muted border border-border/50 focus:border-primary/50 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell me about your project..."
                rows={5}
                required
                className="w-full px-4 py-2 rounded-lg bg-muted border border-border/50 focus:border-primary/50 focus:outline-none transition-colors resize-none"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <Button
              type="submit"
              disabled={isLoading || submitted}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg group"
            >
              {submitted ? (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  Message sent!
                </motion.span>
              ) : isLoading ? (
                'Sending...'
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </motion.div>
        </motion.form>
      </div>
    </SectionWrapper>
  )
}
