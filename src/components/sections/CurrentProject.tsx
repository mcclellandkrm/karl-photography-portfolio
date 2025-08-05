'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function CurrentProject() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', name: 'Overview' },
    { id: 'progress', name: 'Progress' },
    { id: 'gallery', name: 'Gallery' },
    { id: 'updates', name: 'Updates' }
  ];

  const progressMilestones = [
    { phase: 'Concept Development', status: 'completed', date: 'Jan 2024' },
    { phase: 'Location Scouting', status: 'completed', date: 'Feb 2024' },
    { phase: 'Pre-Production', status: 'completed', date: 'Mar 2024' },
    { phase: 'Photography Sessions', status: 'in-progress', date: 'Apr 2024' },
    { phase: 'Post-Production', status: 'upcoming', date: 'May 2024' },
    { phase: 'Final Delivery', status: 'upcoming', date: 'Jun 2024' }
  ];

  const recentUpdates = [
    {
      date: 'April 15, 2024',
      title: 'Session 3 Complete',
      content: 'Completed third photography session with excellent results. Weather conditions were perfect for outdoor shots.'
    },
    {
      date: 'April 8, 2024',
      title: 'Midpoint Review',
      content: 'Client review session completed. Positive feedback on creative direction and image quality.'
    },
    {
      date: 'April 1, 2024',
      title: 'Production Phase Started',
      content: 'Officially began the photography phase of the project. All equipment and locations confirmed.'
    }
  ];

  return (
    <section id="current-project" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Current Project</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Follow along with my latest project - a comprehensive visual campaign 
            for an emerging sustainable fashion brand.
          </p>
        </motion.div>

        {/* Project Header */}
        <motion.div
          className="bg-gray-900 rounded-lg p-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">EcoThreads Campaign</h3>
              <p className="text-lg text-indigo-400 mb-4">Sustainable Fashion Brand</p>
              <p className="text-gray-300 leading-relaxed">
                A comprehensive visual identity project for a sustainable fashion startup, 
                including product photography, lifestyle shoots, and brand storytelling content 
                for their upcoming launch campaign.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <span className="px-3 py-1 bg-green-600 text-white text-sm rounded-full">
                  In Progress
                </span>
                <span className="text-gray-400">Est. Completion: June 2024</span>
              </div>
            </div>
            <div className="relative">
              {/* Project preview image placeholder */}
              <div className="w-full aspect-[4/3] bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <div className="text-4xl mb-2">🌱</div>
                  <p className="text-sm">Project Preview</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-white">Project Scope</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center"><span className="text-indigo-500 mr-2">•</span>Product photography (50+ items)</li>
                  <li className="flex items-center"><span className="text-indigo-500 mr-2">•</span>Lifestyle and lookbook shoots</li>
                  <li className="flex items-center"><span className="text-indigo-500 mr-2">•</span>Behind-the-scenes content</li>
                  <li className="flex items-center"><span className="text-indigo-500 mr-2">•</span>Social media assets</li>
                  <li className="flex items-center"><span className="text-indigo-500 mr-2">•</span>Website hero imagery</li>
                </ul>
              </div>
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-white">Creative Vision</h4>
                <p className="text-gray-300 leading-relaxed">
                  Creating authentic, natural imagery that reflects the brand&apos;s commitment to 
                  sustainability while showcasing the quality and style of their products. 
                  The visual approach emphasizes earth tones, natural lighting, and genuine moments.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'progress' && (
            <div className="max-w-4xl mx-auto">
              <h4 className="text-2xl font-bold text-white mb-8 text-center">Project Timeline</h4>
              <div className="space-y-6">
                {progressMilestones.map((milestone, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className={`w-4 h-4 rounded-full flex-shrink-0 ${
                      milestone.status === 'completed' ? 'bg-green-500' :
                      milestone.status === 'in-progress' ? 'bg-yellow-500' :
                      'bg-gray-500'
                    }`} />
                    <div className="flex-1 flex justify-between items-center py-4 border-b border-gray-700">
                      <div>
                        <h5 className="text-white font-semibold">{milestone.phase}</h5>
                        <span className={`text-sm capitalize ${
                          milestone.status === 'completed' ? 'text-green-400' :
                          milestone.status === 'in-progress' ? 'text-yellow-400' :
                          'text-gray-400'
                        }`}>
                          {milestone.status.replace('-', ' ')}
                        </span>
                      </div>
                      <span className="text-gray-400">{milestone.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'gallery' && (
            <div>
              <h4 className="text-2xl font-bold text-white mb-8 text-center">Work in Progress</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <div className="text-3xl mb-2">📸</div>
                      <p className="text-sm">Sample {item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'updates' && (
            <div className="max-w-4xl mx-auto">
              <h4 className="text-2xl font-bold text-white mb-8 text-center">Recent Updates</h4>
              <div className="space-y-8">
                {recentUpdates.map((update, index) => (
                  <div key={index} className="bg-gray-900 rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h5 className="text-xl font-semibold text-white">{update.title}</h5>
                      <span className="text-gray-400 text-sm">{update.date}</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{update.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-gray-400 mb-6">
            Interested in collaborating on your next project?
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
            Let&apos;s Discuss Your Vision
          </button>
        </motion.div>
      </div>
    </section>
  );
}
