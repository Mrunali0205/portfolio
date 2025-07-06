import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, ExternalLink, TrendingUp, Brain, Target } from 'lucide-react'

const Projects = () => {
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

  const projects = [
    {
      title: "TS-12: Causality",
      description: "Applied causal inference (PSM, RDD, Double ML) to estimate a 7.3% engagement uplift; reduced model error by 31%.",
      tools: ["Python", "DoWhy", "EconML"],
      github: "https://github.com/Mrunali0205",
      icon: <Brain className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-800",
      achievements: [
        "7.3% engagement uplift",
        "31% model error reduction",
        "Causal inference implementation"
      ]
    },
    {
      title: "Retail Forecasting",
      description: "Forecasted daily retail sales (10K+ SKUs); improved MAPE to 89.3%, reduced RMSE by 18.5%.",
      tools: ["Prophet", "XGBoost", "scikit-learn"],
      github: "https://www.kaggle.com/code/mishki/time-series-demand-forecast-arma-prophet",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "bg-green-100 text-green-800",
      achievements: [
        "10K+ SKUs forecasted",
        "89.3% MAPE accuracy",
        "18.5% RMSE reduction"
      ]
    },
    {
      title: "SOC Code Retrieval – ONET Connector",
      description: "Built hybrid recommender; cut feature build time 70%, boosted MAP@20 to 0.238, deployed at 15K req/min with 90ms latency.",
      tools: ["PyTorch Lightning", "LLMs", "AWS"],
      github: "https://github.com/Mrunali0205/Documents-and-Certifications",
      icon: <Target className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-800",
      achievements: [
        "70% build time reduction",
        "MAP@20: 0.238",
        "15K req/min, 90ms latency"
      ]
    }
  ]

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-max" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Showcasing real-world applications of data science and machine learning to solve complex business problems
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="card p-8 group"
              >
                {/* Project Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 rounded-lg ${project.color}`}>
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Project Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tools/Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Achievements */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                    Key Achievements
                  </h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm font-medium">
                      {project.github.includes('kaggle') ? 'Kaggle' : 'GitHub'}
                    </span>
                  </motion.a>
                  
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm font-medium">View Project</span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
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
                href="https://github.com/Mrunali0205"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View All Projects on GitHub
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 