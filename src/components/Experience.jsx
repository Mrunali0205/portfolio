import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Building, Calendar, CheckCircle } from 'lucide-react'

const Experience = () => {
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

  const experiences = [
    {
      title: "Data Scientist",
      company: "Innovation Development Lab",
      period: "2024 - Present",
      type: "Full-time",
      description: "Built AI content-generation pipeline, deployed LLM-based RAG solutions, and created Power BI dashboards for Arthur J. Gallagher.",
      achievements: [
        "Developed AI content-generation pipeline",
        "Deployed LLM-based RAG solutions",
        "Created interactive Power BI dashboards",
        "Collaborated with Arthur J. Gallagher team",
        "Optimized machine learning workflows"
      ],
      technologies: ["Python", "LLMs", "RAG", "Power BI", "Azure", "MLOps"],
      icon: <Building className="w-6 h-6" />
    },
    {
      title: "Research Assistant",
      company: "DePaul Data Science Research Lab",
      period: "2023 - 2024",
      type: "Part-time",
      description: "Developed SciBERT analogy pipeline, improved contextual embedding recall by 17%, and optimized data prep (4min vs 11min).",
      achievements: [
        "Developed SciBERT analogy pipeline",
        "Improved contextual embedding recall by 17%",
        "Optimized data preprocessing (4min vs 11min)",
        "Conducted NLP research experiments",
        "Published research findings"
      ],
      technologies: ["Python", "SciBERT", "NLP", "PyTorch", "Transformers", "Research"],
      icon: <Briefcase className="w-6 h-6" />
    }
  ]

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-max" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Building innovative solutions and conducting cutting-edge research in data science and AI
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline Line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-32 bg-gray-200 hidden md:block"></div>
                )}

                <div className="grid md:grid-cols-12 gap-8 items-start">
                  {/* Timeline Icon */}
                  <div className="md:col-span-2 flex items-center justify-center md:justify-start">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 shadow-lg">
                      {exp.icon}
                    </div>
                  </div>

                  {/* Experience Content */}
                  <div className="md:col-span-10">
                    <div className="card p-8">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-lg text-primary-600 font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2 sm:mt-0">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full">
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                          Key Achievements
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-600">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="https://www.linkedin.com/in/mrunalipatil2/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View Full Resume on LinkedIn
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 