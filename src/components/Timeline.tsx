import { motion } from 'framer-motion';
import type { TimelineEntry } from '../types';

interface TimelineProps {
  entries: TimelineEntry[];
}

export default function Timeline({ entries }: TimelineProps) {
  return (
    <div className="relative max-w-3xl mx-auto mt-12">
      {/* Center vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-400/20"></div>

      {entries.map((entry, index) => (
        <motion.div
          key={entry.date}
          initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`relative mb-12 ${
            index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8 ml-auto'
          }`}
        >
          {/* Marker centered on line */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="absolute top-5 w-4 h-4 rounded-full bg-green-400 shadow-lg shadow-green-400/50 z-10"
            style={{
              left: 'calc(50% - 0.5rem)',
            }}
          >
            {/* Pulsing animation */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.5, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className="absolute inset-0 rounded-full bg-green-400/30"
            />
          </motion.div>

          {/* Timeline Content */}
          <div
            className={`flex items-center ${
              index % 2 === 0 ? 'justify-end' : 'justify-start'
            }`}
          >
            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-green-500/20 hover:border-green-500/40 transition-all max-w-md">
              <h3 className="text-xl font-semibold text-green-400 mb-2">
                {entry.date}
              </h3>
              <p className="text-gray-300">{entry.title}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
