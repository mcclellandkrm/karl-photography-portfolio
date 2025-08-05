'use client';

import { motion } from 'framer-motion';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "Global Tech Conference 2024",
      client: "TechCorp International",
      category: "Event Photography",
      description: "Comprehensive coverage of a 3-day international technology conference, capturing keynote speeches, networking sessions, and product launches.",
      challenge: "Document a fast-paced event across multiple venues while maintaining consistent quality and style.",
      solution: "Deployed a multi-photographer team with coordinated equipment and real-time image delivery system.",
      results: ["500+ edited images delivered within 24 hours", "95% client satisfaction rating", "Contract renewal for 2025 event"],
      image: "/api/placeholder/600/400",
      year: "2024"
    },
    {
      id: 2,
      title: "Executive Portrait Series",
      client: "Fortune 500 Company",
      category: "Corporate Photography",
      description: "Professional headshots and environmental portraits for C-suite executives and department heads across multiple office locations.",
      challenge: "Create consistent, professional imagery that reflects company values while accommodating busy executive schedules.",
      solution: "Portable studio setup with standardized lighting and background options, flexible scheduling across multiple sessions.",
      results: ["50+ executive portraits completed", "Unified brand image across all platforms", "Reduced photography costs by 40%"],
      image: "/api/placeholder/600/400",
      year: "2024"
    },
    {
      id: 3,
      title: "Artisan Brand Campaign",
      client: "Handcrafted Jewelry Co.",
      category: "Product & Lifestyle",
      description: "Complete visual identity project including product photography, lifestyle shots, and behind-the-scenes content for social media campaign.",
      challenge: "Showcase intricate jewelry details while telling the brand's artisan story and craftsmanship process.",
      solution: "Macro photography techniques combined with storytelling imagery, featuring the artisans and their workspace.",
      results: ["300% increase in social media engagement", "Featured in industry publications", "Award-winning campaign design"],
      image: "/api/placeholder/600/400",
      year: "2023"
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Case Studies</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            In-depth looks at successful projects, showcasing the creative process, 
            challenges overcome, and measurable results achieved for clients.
          </p>
        </motion.div>

        <div className="space-y-24">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-full">
                    {study.category}
                  </span>
                  <span className="text-gray-400">{study.year}</span>
                </div>
                
                <h3 className="text-3xl font-bold text-white">{study.title}</h3>
                <p className="text-lg text-indigo-400 font-semibold">{study.client}</p>
                <p className="text-gray-300 leading-relaxed">{study.description}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-gray-400">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                    <p className="text-gray-400">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-center text-gray-400">
                          <span className="text-indigo-500 mr-2">✓</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button className="px-6 py-3 border border-indigo-600 text-indigo-400 hover:bg-indigo-600 hover:text-white rounded-lg transition-all duration-300">
                  View Full Project
                </button>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <motion.div
                  className="relative overflow-hidden rounded-lg aspect-[3/2] bg-gray-800"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Placeholder for actual images */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <div className="text-4xl mb-2">📊</div>
                      <p className="text-sm">Case Study Image</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-gray-400 mb-6">
            Ready to create your own success story?
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
}
