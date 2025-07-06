import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Award, Calendar } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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

  const education = [
    {
      institution: "DePaul University",
      degree: "MS Data Science",
      period: "2023–2025",
      gpa: "4.0",
      note: "Scholarship Recipient",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      institution: "University of Mumbai",
      degree: "BS Information Technology",
      period: "2018–2021",
      gpa: "3.5",
      note: "",
      icon: <GraduationCap className="w-6 h-6" />
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-6">
                <motion.p
                  variants={itemVariants}
                  className="text-lg text-gray-600 leading-relaxed"
                >
                  Data Scientist with a 4.0 GPA at DePaul University, a passion for causal inference, 
                  NLP, and ML research. I build real-world solutions in analytics, forecasting, and 
                  generative AI, with a focus on impact and product strategy.
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-2 gap-6"
                >
                  <div className="bg-primary-50 p-6 rounded-lg">
                    <div className="flex items-center space-x-3 mb-3">
                      <Award className="w-6 h-6 text-primary-600" />
                      <h3 className="font-semibold text-gray-900">Focus Areas</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Causal Inference</li>
                      <li>• NLP & ML Research</li>
                      <li>• Generative AI</li>
                      <li>• Product Strategy</li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg">
                    <div className="flex items-center space-x-3 mb-3">
                      <Calendar className="w-6 h-6 text-slate-600" />
                      <h3 className="font-semibold text-gray-900">Experience</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Analytics & Forecasting</li>
                      <li>• Real-world Solutions</li>
                      <li>• Research & Development</li>
                      <li>• Data-driven Impact</li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Education Timeline */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                          {edu.icon}
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="card p-6">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h4 className="text-lg font-semibold text-gray-900">
                              {edu.institution}
                            </h4>
                            <span className="text-sm text-primary-600 font-medium">
                              {edu.period}
                            </span>
                          </div>
                          
                          <p className="text-gray-600 mb-2">{edu.degree}</p>
                          
                          <div className="flex items-center space-x-4 text-sm">
                            <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full">
                              GPA: {edu.gpa}
                            </span>
                            {edu.note && (
                              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                                {edu.note}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Timeline Line */}
                    {index < education.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-6 bg-gray-200"></div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 