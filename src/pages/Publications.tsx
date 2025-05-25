import { motion } from 'framer-motion';
import type { Publication } from '../types';
import VideoBackground from '../components/VideoBackground';

const publications: Publication[] = [
  {
    title: 'AI-Powered Legal Chatbot',
    date: 'Mar 2025',
    link: 'https://doi.org/10.38124/ijisrt/25mar1268',
  },
  {
    title: 'Forecasting Drug Demand',
    date: 'Sep 2023',
    link: 'https://zenodo.org/records/8351668',
  },
];

export default function Publications() {
  return (
    <div className="min-h-screen relative">
      <VideoBackground src={`${import.meta.env.BASE_URL}videos/background.mp4`} opacity="opacity-20" tint={true} />
      <div className="relative pt-20 px-4 z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-green-400 mb-12">Publications</h1>
          <div className="grid gap-8">
            {publications.map((publication, index) => (
              <motion.div
                key={publication.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/50 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-green-500/20 hover:border-green-500/40 transition-all"
              >
                <h2 className="text-2xl font-semibold text-green-400 mb-4">
                  {publication.title}
                </h2>
                <p className="text-gray-300 text-lg mb-6">{publication.date}</p>
                <a
                  href={publication.link}
                  className="inline-block text-green-400 hover:text-green-300 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Paper →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}