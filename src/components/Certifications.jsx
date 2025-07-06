import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Code, Database, Brain } from 'lucide-react'

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const certifications = [
    {
      title: "Python & SQL",
      organization: "HackerRank",
      year: "2023",
      description: "Demonstrated proficiency in Python programming and SQL database management",
      icon: <Code className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-800",
      skills: ["Python", "SQL", "Database Management", "Problem Solving"]
    },
    {
      title: "NASSCOM AI Standards",
      organization: "NASSCOM",
      year: "2022",
      description: "Certified in AI standards and best practices for industry applications",
      icon: <Brain className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-800",
      skills: ["AI Standards", "Best Practices", "Industry Applications", "Ethics"]
    },
    {
      title: "Data Science Certification",
      organization: "Board Infinity",
      year: "2022",
      description: "Comprehensive data science training covering machine learning and analytics",
      icon: <Database className="w-6 h-6" />,
      color: "bg-green-100 text-green-800",
      skills: ["Machine Learning", "Analytics", "Data Visualization", "Statistical Analysis"]
    }
  ]

  return (
    <section id="certifications" className="section-padding bg-white">
      <div className="container-max" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Continuous learning and professional development in data science and technology
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="card p-8 text-center group"
              >
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${cert.color} group-hover:scale-110 transition-transform duration-300`}>
                  {cert.icon}
                </div>

                {/* Title and Organization */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-primary-600 font-medium mb-1">
                  {cert.organization}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  {cert.year}
                </p>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievement Banner */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-center text-white"
          >
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Award className="w-8 h-8" />
              <h3 className="text-2xl font-bold">Commitment to Excellence</h3>
            </div>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Continuously expanding expertise through professional certifications and staying current with industry best practices in data science and AI
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications 