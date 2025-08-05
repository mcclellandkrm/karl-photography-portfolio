'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function MyWork() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'portraits', name: 'Portraits' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'events', name: 'Events' },
    { id: 'landscape', name: 'Landscape' },
  ];

  // Placeholder gallery items
  const galleryItems = [
    { id: 1, category: 'portraits', title: 'Studio Portrait Series', image: '/api/placeholder/400/600' },
    { id: 2, category: 'commercial', title: 'Brand Photography', image: '/api/placeholder/600/400' },
    { id: 3, category: 'events', title: 'Corporate Event', image: '/api/placeholder/400/600' },
    { id: 4, category: 'landscape', title: 'Mountain Vista', image: '/api/placeholder/600/400' },
    { id: 5, category: 'portraits', title: 'Environmental Portrait', image: '/api/placeholder/400/600' },
    { id: 6, category: 'commercial', title: 'Product Photography', image: '/api/placeholder/600/400' },
    { id: 7, category: 'events', title: 'Wedding Ceremony', image: '/api/placeholder/400/600' },
    { id: 8, category: 'landscape', title: 'Urban Skyline', image: '/api/placeholder/600/400' },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="work" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">My Work</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A curated collection of my photography work spanning various genres and styles. 
            Each image tells a unique story and captures a moment in time.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group relative overflow-hidden rounded-lg aspect-[4/5] bg-gray-800"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              layout
              whileHover={{ scale: 1.02 }}
            >
              {/* Placeholder for actual images */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <div className="text-4xl mb-2">📸</div>
                  <p className="text-sm">Image Placeholder</p>
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-300 capitalize">{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Interested in Working Together?
          </button>
        </motion.div>
      </div>
    </section>
  );
}
