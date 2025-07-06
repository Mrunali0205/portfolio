import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Brain, Database, Cloud, Code } from 'lucide-react'

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Data Science & Analytics",
      icon: <Brain className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-800",
      skills: [
        "Quantitative Analysis",
        "Forecasting",
        "Statistical Modeling",
        "Clustering",
        "A/B Testing",
        "Hypothesis Testing"
      ]
    },
    {
      title: "Machine Learning & AI",
      icon: <Code className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-800",
      skills: [
        "Transformers",
        "NLP",
        "Deep Learning",
        "TensorFlow",
        "PyTorch",
        "XGBoost",
        "GenAI",
        "LLMs",
        "MLOps",
        "RAG"
      ]
    },
    {
      title: "Big Data & Cloud",
      icon: <Cloud className="w-6 h-6" />,
      color: "bg-green-100 text-green-800",
      skills: [
        "PySpark",
        "BigQuery",
        "GCP",
        "AWS",
        "Snowflake",
        "ETL",
        "Distributed Systems"
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Database className="w-6 h-6" />,
      color: "bg-orange-100 text-orange-800",
      skills: [
        "Python",
        "R",
        "SQL",
        "Tableau",
        "Power BI",
        "Git",
        "LangChain",
        "LangGraph",
        "Flask",
        "Hugging Face",
        "Pandas",
        "NumPy"
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-max" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive toolkit for transforming data into actionable insights and building intelligent systems
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 rounded-lg ${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ 
                        delay: 0.1 * skillIndex,
                        duration: 0.3 
                      }}
                      whileHover={{ scale: 1.05 }}
                      className="tag cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            {[
              { number: "4.0", label: "GPA", suffix: "/4.0" },
              { number: "3+", label: "Years Experience", suffix: "" },
              { number: "10+", label: "Projects Completed", suffix: "" },
              { number: "5+", label: "Technologies", suffix: "" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6 bg-white rounded-lg shadow-md"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                  className="text-3xl font-bold text-primary-600 mb-2"
                >
                  {stat.number}
                  <span className="text-xl text-gray-400">{stat.suffix}</span>
                </motion.div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 