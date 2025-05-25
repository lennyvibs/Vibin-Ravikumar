import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Certificates from './pages/Certificates';
import Hobbies from './pages/Hobbies';
import Projects from './pages/Projects';
import Publications from './pages/Publications';
import Resume from './pages/Resume';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />

          <Route path="/projects" element={<Projects />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <footer className="bg-black/80 backdrop-blur-sm border-t border-green-500/20 py-8">
          <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-4">
            <div className="flex items-center gap-6">
              <a
                href="mailto:vibin.ravikumar01@gmail.com"
                className="text-green-400 hover:text-green-300 flex items-center gap-2"
              >
                <Mail size={20} />
                <span>Email</span>
              </a>
              <a
                href="https://linkedin.com/in/vibin-ravikumar-963314a4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 flex items-center gap-2"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 flex items-center gap-2"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </div>
            <p className="text-gray-400">© 2025 Vibin Ravikumar. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;