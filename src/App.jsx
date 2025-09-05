import { useState, useEffect } from 'react'


// Import semua komponen
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('beranda');

  // Fungsi untuk scroll ke section tertentu
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Offset untuk navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // Effect untuk mendeteksi section yang sedang aktif saat scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['beranda', 'tentang', 'proyek', 'kontak'];
      const scrollPosition = window.scrollY + 150; // Offset untuk navbar

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Loading state (opsional)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Loading Screen
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-400 mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-white font-poppins">Loading Portfolio...</h2>
          <p className="text-gray-400 font-poppins mt-2">Sadewa Bharaka Mahaputra</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white font-poppins">
      <Navbar 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
      />
      
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Projects />  
      <Contact />
      <Footer />

      {/* Global Styles untuk Smooth Scrolling */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #1f2937;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #2563eb;
        }

        /* Line clamp utility */
        .line-clamp-3 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }
      `}</style>
    </div>
  )
}

export default App