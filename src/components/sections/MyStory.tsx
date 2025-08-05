'use client';

import { motion } from 'framer-motion';

export default function MyStory() {
  const milestones = [
    {
      year: "2015",
      title: "The Beginning",
      description: "Started photography as a hobby, experimenting with landscape and street photography."
    },
    {
      year: "2017",
      title: "First Commercial Work",
      description: "Transitioned to professional photography with first paid commercial assignment."
    },
    {
      year: "2019",
      title: "Studio Establishment",
      description: "Opened dedicated photography studio, expanding into portrait and product photography."
    },
    {
      year: "2021",
      title: "Award Recognition",
      description: "Received industry awards for creative excellence in commercial photography."
    },
    {
      year: "2024",
      title: "Global Reach",
      description: "Expanded services internationally, working with clients across multiple continents."
    }
  ];

  const skills = [
    { name: "Portrait Photography", level: 95 },
    { name: "Commercial Photography", level: 90 },
    { name: "Event Coverage", level: 88 },
    { name: "Post-Processing", level: 92 },
    { name: "Creative Direction", level: 85 },
    { name: "Client Relations", level: 96 }
  ];

  return (
    <section id="story" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">My Story</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A journey through creativity, passion, and the pursuit of visual excellence. 
            From first camera to professional studio, every step shaped my unique perspective.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Personal Story */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Placeholder for personal photo */}
              <div className="w-full aspect-[4/5] bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center text-gray-400">
                  <div className="text-6xl mb-4">👨‍💼</div>
                  <p className="text-lg">Karl McClelland</p>
                  <p className="text-sm">Professional Photographer</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                My journey into photography began over a decade ago with a simple desire to capture 
                the beauty I saw in everyday moments. What started as weekend adventures with a camera 
                evolved into a passion that would define my career.
              </p>
              <p>
                Through years of experimentation, learning, and countless hours behind the lens, 
                I&apos;ve developed a unique style that blends technical precision with creative vision. 
                My work spans from intimate portraits to large-scale commercial projects, each 
                telling its own story.
              </p>
              <p>
                Today, I&apos;m privileged to work with clients worldwide, helping them bring their 
                visions to life through photography. Whether it&apos;s capturing the essence of a brand, 
                the emotion of a moment, or the beauty of a landscape, my goal remains the same: 
                to create images that resonate and inspire.
              </p>
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-semibold text-white mb-4">Philosophy</h3>
              <blockquote className="text-lg text-indigo-400 italic border-l-4 border-indigo-600 pl-4">
                &ldquo;Every photograph is a story waiting to be told. My role is to find that story 
                and bring it to life through light, composition, and emotion.&rdquo;
              </blockquote>
            </div>
          </motion.div>

          {/* Timeline & Skills */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Timeline */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Journey Timeline</h3>
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {milestone.year.slice(-2)}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-semibold text-white">{milestone.title}</h4>
                      <p className="text-sm text-indigo-400 mb-1">{milestone.year}</p>
                      <p className="text-gray-400">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Expertise</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-indigo-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-indigo-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
