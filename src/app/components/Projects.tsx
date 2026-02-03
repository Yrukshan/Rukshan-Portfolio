'use client'

import { projects } from '@/contents/projects'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, cardHoverSmall } from '@/utils/animations'

export default function Projects() {
  return (
    <section className="py-24 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-extrabold mb-16 text-center tracking-wide drop-shadow-md"
          {...fadeInUp}
        >
          Featured Projects
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              className="
                bg-white/90 dark:bg-dark/40 
                rounded-2xl shadow-xl p-6 backdrop-blur-md 
                border border-primary/10 hover:border-primary/20
                transition-all duration-300
              "
              variants={fadeInUp}
              {...cardHoverSmall}
              whileHover={{ y: -8, scale: 1.02, boxShadow: '0 12px 30px rgba(0,0,0,0.15)' }}
            >
              <motion.div 
                className="relative aspect-video mb-5 rounded-lg overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, type: "spring" }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>

              <motion.h3 
                className="text-xl font-semibold mb-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {project.title}
              </motion.h3>

              <motion.p 
                className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {project.description}
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-2 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    className="
                      px-3 py-1 bg-primary/10 text-primary 
                      rounded-full text-sm shadow-sm 
                      border border-primary/20
                    "
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div 
                className="flex gap-6 items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-secondary hover:text-primary transition-all font-medium"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="h-5 w-5" />
                  <span>Code</span>
                </motion.a>

                <motion.a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-secondary hover:text-primary transition-all font-medium"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt className="h-5 w-5" />
                  <span>Live Demo</span>
                </motion.a>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
