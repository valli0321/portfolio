'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { portfolioData } from '@/lib/constants'
import { SectionWrapper } from './SectionWrapper'
import { GraduationCap, Award, ExternalLink, CheckCircle, Copy } from 'lucide-react'
import { useState } from 'react'

const EducationCard = ({ edu, index }: { edu: typeof portfolioData.education[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      <div className="relative p-6 rounded-xl bg-muted/50 border border-border/50 hover:border-primary/50 transition-all duration-300">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
            <GraduationCap className="w-6 h-6" />
          </div>

          <div className="flex-grow">
            <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
            <p className="text-primary font-semibold">{edu.school}</p>
            <p className="text-sm text-foreground/60 mt-1">{edu.duration}</p>

            {/* Achievements */}
            <motion.ul
              className="mt-4 space-y-2"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              {edu.achievements.map((achievement, i) => (
                <li key={i} className="text-foreground/70 text-sm flex items-start gap-2">
                  <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{achievement}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const CertificationCard = ({
  cert,
  index,
}: {
  cert: typeof portfolioData.certifications[0]
  index: number
}) => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const [copied, setCopied] = useState(false)

  const copyCredentialId = async () => {
    if (!cert.credentialId) return

    await navigator.clipboard.writeText(cert.credentialId)

    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="relative p-4 rounded-lg bg-linear-to-br from-primary/10 to-accent/5 border border-primary/30 hover:border-primary/60 transition-all duration-300"
    >

      <h4 className="font-semibold text-foreground text-sm">{cert.title}</h4>
      <p className="text-foreground/60 text-xs mt-1">{cert.issuer}</p>
      <p className="text-primary text-xs font-semibold mt-2">{cert.date}</p>
      <div className="flex items-center gap-4 mt-3">
        {/* Verify Link */}
        {cert.credentialUrl && (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
          >
            Verify
            <ExternalLink size={12} />
          </a>
        )}
        {cert.credentialId && (
          <button
            onClick={copyCredentialId}
            className="relative inline-flex cursor-pointer items-center gap-1 text-xs text-foreground/70 hover:text-primary transition-colors"
          >
            <motion.div
              key={copied ? 'copied' : 'copy'}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-1"
            >
              {copied ? (
                <>
                  <CheckCircle size={12} className="text-emerald-400" />
                  Copied
                </>
              ) : (
                <>
                  <Copy size={12} />
                  Copy ID
                </>
              )}
            </motion.div>
          </button>
        )}

      </div>
    </motion.div>
  )
}

// const AwardCard = ({ award, index }: { award: typeof portfolioData.awards[0]; index: number }) => {
//   const { ref, isVisible } = useScrollAnimation(0.2)

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, x: -20 }}
//       animate={isVisible ? { opacity: 1, x: 0 } : {}}
//       transition={{ delay: index * 0.1 }}
//       className="relative p-4 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border border-border/50 hover:border-primary/50 transition-all duration-300"
//     >
//       <h4 className="font-semibold text-foreground text-sm">{award?.title}</h4>
//       <p className="text-foreground/60 text-xs mt-1">{award?.organization}</p>
//       <p className="text-primary text-xs font-semibold mt-2">{award.year}</p>
//     </motion.div>
//   )
// }

export const Education = () => {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <>
      <SectionWrapper id="education" title="Education" subtitle="My academic background">
        <div className="space-y-6">
          {portfolioData.education.map((edu, index) => (
            <EducationCard key={edu.id} edu={edu} index={index} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="" title="Certifications & Achievements" dark>
        <div ref={ref} className="space-y-8">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
          >
            <h3 className="text-2xl font-bold mb-6 text-foreground">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {portfolioData.certifications.map((cert, index) => (
                <CertificationCard key={cert.id} cert={cert} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Awards */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-foreground">Awards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {portfolioData?.awards.map((award, index) => (
                <AwardCard key={award?.id} award={award} index={index} />
              ))}
            </div>
          </motion.div> */}
        </div>
      </SectionWrapper>
    </>
  )
}
