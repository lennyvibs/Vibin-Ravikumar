import { motion } from 'framer-motion';
import Timeline from '../components/Timeline';
import VideoBackground from '../components/VideoBackground';

const timelineEntries = [
  { date: '10 April 1996', title: 'Born in Chennai' },
  { date: '2008', title: 'Completed SSC' },
  { date: '2010', title: 'Completed HSC' },
  { date: '2014', title: 'Rotaract Chapter President' },
  { date: '2015', title: 'First job at Hyundai' },
  { date: '2017–2021', title: 'Career Break' },
  { date: '2022', title: 'Joined 360DigiTMG' },
  { date: '2024', title: 'Lead Data Scientist at AiSPRY' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-green-900">
      <div className="relative h-screen">
        <VideoBackground src="/videos/background.mp4" opacity="opacity-30" />

        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-green-400 mb-6">
              Vibin Ravikumar
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Data Scientist and AI Engineer passionate about solving real-world problems
              using data and artificial intelligence.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-400 text-center mb-12">
            My Journey
          </h2>
          <Timeline entries={timelineEntries} />
        </div>
      </section>
    </div>
  );
}