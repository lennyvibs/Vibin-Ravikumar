import { motion } from 'framer-motion';
import type { Project } from '../types';
import VideoBackground from '../components/VideoBackground';

const projects: Project[] = [
  {
    title: 'Hospital Analytics Dashboard',
    description: 'Real-time insights using PySpark & BI tools',
  },
  {
    title: 'Legal Chatbot',
    description: 'LLM-based legal assistant with FAISS & Groq',
  },
  {
    title: 'Inventory Forecasting',
    description: 'LSTM/GRU forecasting for drug demand',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen relative">
      <VideoBackground src="/videos/background.mp4" opacity="opacity-20" tint={true} />
      <div className="relative pt-20 px-4 z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-green-400 mb-12">Projects</h1>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/50 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-green-500/20 hover:border-green-500/40 transition-all"
              >
                <h2 className="text-2xl font-semibold text-green-400 mb-4">
                  {project.title}
                </h2>
                <p className="text-gray-300 text-lg">{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    className="inline-block mt-6 text-green-400 hover:text-green-300 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More →
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}