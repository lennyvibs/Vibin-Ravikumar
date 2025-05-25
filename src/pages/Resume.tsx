import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-green-900 pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-green-400 mb-8">My Resume</h1>
          <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-green-500/20">
            <p className="text-gray-300 mb-6">
              You can view or download my complete resume below.
            </p>
            <iframe
              src="/pdfs/resume.pdf"
              className="w-full h-[800px] rounded-lg mb-6"
            />
            <a
              href="/Vibin-Ravikumar-Resume-20250517.pdf"
              download
              className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
            >
              Download Resume (PDF)
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}