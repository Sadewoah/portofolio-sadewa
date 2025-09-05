import { Download, Eye, ArrowDown } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
  const handleDownloadCV = () => {
    // Ganti dengan path file CV Anda yang ada di folder public
    const link = document.createElement('a');
    link.href = './public/CV.pdf';
    link.download = 'CV-Sadewa.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="beranda" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight">
                Hi, Saya{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Sadewa
                </span>
              </h1>
              <div className="text-xl md:text-2xl font-medium text-gray-300 font-poppins">
                Seorang Website Developer
              </div>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-poppins">
              Saya mempunyai ketertarikan dalam bidang Programing dan Designer, terutama pada pembuatan Website dan Desain seperti Poster, Pamflet serta Banner. Ketertarikan pada bidang ini sudah berlangsung lebih dari 3 tahun untuk semua bidang.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={handleDownloadCV}
                className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-3 font-poppins"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                Download CV
              </button>
              <button 
                onClick={() => scrollToSection('proyek')}
                className="group border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 font-poppins"
              >
                <Eye size={20} className="group-hover:scale-110 transition-transform duration-300" />
                Lihat Proyek
              </button>
            </div>
          </div>

          {/* Profile Image/Animation */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full animate-spin-slow opacity-75 blur-sm"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
                <div className="w-72 h-72 lg:w-80 lg:h-80 bg-gray-800/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                  {/* <div className="text-8xl lg:text-9xl animate-pulse">👨‍💻</div> */}
                  <img
                    src="./src/assets/images/hero.JPG"
                    alt="Profile"
                    className="w-72 h-72 lg:w-80 lg:h-80 rounded-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce delay-1000"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-purple-500 rounded-full animate-bounce delay-500"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-pink-500 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('tentang')}
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;