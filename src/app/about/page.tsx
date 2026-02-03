'use client'

import { FaCode, FaLaptopCode, FaGraduationCap, FaDatabase, FaLanguage } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { 
  fadeInUp, 
  fadeInDown, 
  fadeIn, 
  staggerContainer, 
  cardHover, 
  cardHoverSmall 
} from '@/utils/animations'

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        About Me
      </motion.h1>
      
      {/* Bio Section */}
      <motion.section 
        className="mb-16"
        {...fadeInUp}
      >
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I&apos;m Rukshan Ekanayake, a software engineering undergraduate at SLIIT. 
          I&apos;m passionate about technology, driven by innovation, and focused on solving real-world problems through creative solutions. 
          I enjoy working in dynamic environments that push me to learn, grow, and make a meaningful impact in the software world.
        </p>
      </motion.section>

      {/* Education Section */}
      <motion.section
        {...fadeIn}
        transition={{ delay: 0.6 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Education
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Current Undergraduate Program</h3>
            <p className="text-primary mb-2">Sri Lanka Institute of Information Technology (SLIIT) • 2023 - 2027</p>
            <p className="text-secondary">
              BSc (Hons) in Information Technology Specialising in Software Engineering
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      <br /><br /><br />
      
      {/* Skills Section */}
      <motion.section 
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.2 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Skills
        </motion.h2>
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>React / Next.js</li>
              <li>React Native</li>
              <li>TypeScript</li>
              <li>Vite</li>
              <li>Tailwind CSS</li>
              <li>HTML / CSS / JavaScript</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>Java Spring Boot</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>MERN Stack</li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaDatabase className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Database</h3>
            <ul className="text-secondary space-y-2">
              <li>MongoDB</li>
              {/* <li>Firebase</li> */}
              <li>SQL</li>
              <li>MySQL Workbench</li>
              <li>Neon</li>
              <li>Oracle</li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaLanguage className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Other Languages</h3>
            <ul className="text-secondary space-y-2">
              <li>Python</li>
              <li>Kotlin</li>
              <li>R</li>
              <li>Java</li>
              <li>PHP</li>
              <li>C++</li>
              <li>C</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub</li>
              <li>VS Code</li>
              <li>Visual Studio</li>
              <li>IntelliJ IDEA</li>
              <li>Postman</li>
              <li>Jira</li>
              <li>Figma</li>
              <li>JUnit / Mockito</li>
              <li>Android Studio</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      {/* <motion.section 
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.4 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Experience
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Senior Full Stack Developer</h3>
            <p className="text-primary mb-2">Company Name • 2020 - Present</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Led development of multiple web applications using React and Node.js</li>
              <li>Implemented CI/CD pipelines reducing deployment time by 50%</li>
              <li>Mentored junior developers and conducted code reviews</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
            <p className="text-primary mb-2">Previous Company • 2018 - 2020</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Developed and maintained RESTful APIs</li>
              <li>Built responsive user interfaces with modern JavaScript frameworks</li>
              <li>Optimized database queries improving performance by 40%</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section> */}

      {/* Education Section */}
      {/* <motion.section
        {...fadeIn}
        transition={{ delay: 0.6 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Education
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Current Undergraduate Program</h3>
            <p className="text-primary mb-2">Sri Lanka Institute of Information Technology (SLIIT) • 2023 - 2027</p>
            <p className="text-secondary">
              BSc (Hons) in Information Technology Specialising in Software Engineering
            </p>
          </motion.div>
        </motion.div>
      </motion.section> */}
    </div>
  )
} 