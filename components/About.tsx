'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { portfolioData } from '@/lib/constants'
import { SectionWrapper } from './SectionWrapper'

//  <motion.div
//           className="relative"
//           initial={{ opacity: 0, x: 20 }}
//           animate={isVisible ? { opacity: 1, x: 0 } : {}}
//           transition={{ duration: 0.8 }}
//         >
//           {/* Glass card with stats */}
//           <div className="relative p-8 rounded-2xl bg-gradient-to-br from-muted/50 to-muted/20 border border-border/50 backdrop-blur-xl">
//             {/* Decorative gradient */}
//             <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 rounded-2xl pointer-events-none" />

//             <div className="relative space-y-8">
//               {/* Stat cards */}
//               {[
//                 { number: '+', label: 'Years Experience' },
//                 { number: '30+', label: 'Projects Delivered' },
//                 { number: '15+', label: 'Happy Clients' },
//                 { number: '20+', label: 'Technologies' },
//               ].map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   className="flex items-center gap-4"
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={isVisible ? { opacity: 1, x: 0 } : {}}
//                   transition={{ delay: index * 0.1 }}
//                 >
//                   <div className="h-12 w-1 bg-gradient-to-b from-primary to-accent rounded-full" />
//                   <div>
//                     <p className="text-3xl font-bold text-primary">{stat.number}</p>
//                     <p className="text-foreground/60">{stat.label}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* Floating elements */}
//           <motion.div
//             className="absolute -top-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
//             animate={{ y: [0, 20, 0] }}
//             transition={{ duration: 6, repeat: Infinity }}
//           />
//           <motion.div
//             className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/20 rounded-full blur-3xl"
//             animate={{ y: [0, -20, 0] }}
//             transition={{ duration: 8, repeat: Infinity }}
//           />
//         </motion.div>

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

export const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <SectionWrapper id="about" title={portfolioData.about.title}>
      <div ref={ref} 
        // className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
      >
        {/* Left: Text content */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <motion.p
            className="text-lg text-center text-foreground/80 leading-relaxed"
            variants={itemVariants}
          >
            {portfolioData.about.intro}
          </motion.p>

          <motion.div className="space-y-4" variants={containerVariants}>
            {portfolioData.about.content.map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-center text-foreground/70 leading-relaxed"
                variants={itemVariants}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          <motion.p
            className="text-primary text-center font-semibold text-lg"
            variants={itemVariants}
          >
            {portfolioData.about.skills_overview}
          </motion.p>
        </motion.div>

        {/* Right: Visual element with stats */}
       
      </div>
    </SectionWrapper>
  )
}
