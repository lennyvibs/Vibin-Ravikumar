import { motion } from 'framer-motion';

export default function Hobbies() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-green-900 pt-16">
      <div className="space-y-12">
        {/* Liverpool Section */}
        <section className="relative h-screen">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://e1.pxfuel.com/desktop-wallpaper/647/261/desktop-wallpaper-3-kop-the-kop.jpg")',
            }}
          >
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 h-full flex items-center"
          >
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-green-400 mb-6">Liverpool FC</h2>
              <p className="text-gray-300 text-lg mb-8">
                Liverpool is more than just a football club — it's a way of life. The
                passion, the history, and the unbreakable spirit of YNWA (You'll Never
                Walk Alone) make it truly special.
              </p>
              <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors">
                Read More
              </button>
            </div>
          </motion.div>
        </section>

        {/* Gardening Section */}
        <section className="relative h-screen">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg")',
            }}
          >
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 h-full flex items-center"
          >
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-green-400 mb-6">Gardening</h2>
              <p className="text-gray-300 text-lg mb-8">
                My love for gardening began with my grandmother. It's a peaceful escape
                that teaches patience, nurturing, and the joy of watching something grow
                from a tiny seed into something beautiful.
              </p>
              <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors">
                Read More
              </button>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}