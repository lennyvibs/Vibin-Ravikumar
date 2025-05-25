import { motion } from 'framer-motion';
import type { Certificate } from '../types';

const certificates: Certificate[] = [
  {
    title: 'AI Certificate',
    imageUrl: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg',
  },
  {
    title: 'Best Innovator Award',
    imageUrl: 'https://images.pexels.com/photos/5926397/pexels-photo-5926397.jpeg',
  },
  {
    title: 'Speaker at AI Conference',
    imageUrl: 'https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg',
  },
];

export default function Certificates() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-green-900 pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-green-400 mb-12">
          Certificates & Awards
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-green-500/20"
            >
              <img
                src={certificate.imageUrl}
                alt={certificate.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-green-400">
                  {certificate.title}
                </h2>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}