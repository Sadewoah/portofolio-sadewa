import { Heart, Github, Linkedin, Instagram, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const quickLinks = [
    { name: 'Beranda', id: 'beranda' },
    { name: 'Tentang', id: 'tentang' },
    { name: 'Proyek', id: 'proyek' },
    { name: 'Kontak', id: 'kontak' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Sadewoah',
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: '/',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/ig.sadewa',
      color: 'hover:text-pink-400'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:i.sadewabharakamahaputra@gmail.com',
      color: 'hover:text-green-400'
    }
  ];

  const techStack = [
    'React', 'Next.js', 'Vite', 'PHP', 'MySQL', 
    'Tailwind CSS', 'JavaScript', 'Node.js', 'MongoDB', 'Bootstrap'
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800 relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 font-poppins">
              Sadewa Bharaka Mahaputra
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md font-poppins">
              mempunyai ketertarikan dalam bidang Programing dan Designer, terutama pada pembuatan Website dan Desain seperti Poster, Pamflet serta Banner. Ketertarikan pada bidang ini sudah berlangsung lebih dari 3 tahun untuk semua bidang.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg text-gray-400 ${social.color}`}
                    aria-label={social.name}
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm font-poppins">
                &copy; {currentYear} Sadewa. All rights reserved.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500 font-poppins">
            Website ini dibuat sebagai portfolio pribadi • Semua proyek dan informasi adalah asli
          </p>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50"></div>
    </footer>
  );
};

export default Footer;