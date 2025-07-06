import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, ArrowDown } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const socialLinks = [
    {
      icon: Mail,
      href: 'mailto:patilmrunali0205@gmail.com',
      label: 'Email',
      color: 'hover:text-red-500'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/mrunalipatil2/',
      label: 'LinkedIn',
      color: 'hover:text-blue-600'
    },
    {
      icon: Github,
      href: 'https://github.com/Mrunali0205',
      label: 'GitHub',
      color: 'hover:text-gray-800'
    }
  ]

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-primary-50 via-white to-slate-50">
      <div className="container-max section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm{' '}
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="text-primary-600"
                >
                  Mrunali Patil
                </motion.span>
              </motion.h1>
              
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="h-1 bg-gradient-to-r from-primary-600 to-primary-400 max-w-xs"
              />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl lg:text-2xl text-gray-600 font-medium"
            >
              Data Scientist
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 max-w-2xl leading-relaxed"
            >
              Transforming data into actionable insights with expertise in machine learning, 
              causal inference, and AI research. Building impactful solutions that drive 
              business decisions and innovation.
            </motion.p>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex space-x-4 pt-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 bg-white rounded-full shadow-lg transition-all duration-300 text-gray-600 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-center"
              >
                View My Work
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-center"
              >
                Let's Connect
              </motion.a>
            </motion.div>
          </div>

          {/* Profile Photo Placeholder */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative"
            >
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full blur-3xl opacity-20"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl ring-4 ring-primary-100">
                  <img 
                    src="Photo.jpeg" 
                    alt="Mrunali Patil - Data Scientist" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-primary-500 rounded-full opacity-10"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary-400 rounded-full opacity-10"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-primary-600 cursor-pointer"
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero 