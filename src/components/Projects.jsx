import { ExternalLink, Github, Code, Database, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'Website e-commerce lengkap dengan fitur shopping cart, sistem pembayaran, manajemen produk, dan dashboard admin. Menggunakan React untuk frontend yang responsive dan PHP untuk backend yang robust.',
      tech: ['HTML', 'Tailwind CSS', 'JavaScript'],
      icon: '🛒',
      category: 'First time',
      color: 'from-blue-500 to-cyan-500',
      github: 'https://github.com/Sadewoah/e-commerce-flower.git',
      demo: 'https://tokosekar.netlify.app/'
    },
    {
      title: 'SKKPD',
      description: 'Sistem manajemen sekolah komprehensif dengan dashboard terpisah untuk guru, dan siswa.',
      tech: ['PHP', 'MySQL', 'Tailwind CSS', 'JavaScript'],
      icon: '🏫',
      category: 'Web Application',
      color: 'from-green-500 to-teal-500',
      github: 'https://github.com/Sadewoah/skkpd.git',
      demo: ''
    },
    {
      title: 'Apotek Website',
      description: 'Sistem manajemen apotik dengan dashboard terpisah untuk admin dan user. dimana terdapat fitur login pegawai dan fitur crud..',
      tech: ['PHP', 'MYSQL', 'Tailwind CSS', 'Javascript'],
      icon: '💊',
      category: 'Web Application',
      color: 'from-purple-500 to-pink-500',
      github: 'https://github.com/sadeabharaka/portfolio',
      demo: ''
    }
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Web Application', 'Mobile App', 'Productivity', 'Data Visualization'];

  return (
    <section id="proyek" className="py-20 bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
            Proyek{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Saya
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-poppins">
            Berikut adalah koleksi proyek yang telah saya kerjakan selama perjalanan belajar di SMK. 
            Setiap proyek memberikan pengalaman berharga dan mengasah keterampilan programming saya dalam berbagai teknologi.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 border border-gray-700/50 hover:border-gray-600"
            >
              {/* Project Header */}
              <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium font-poppins">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 font-poppins">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed font-poppins line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded-md text-xs font-medium border border-gray-600/50 font-poppins"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded-md text-xs font-medium font-poppins">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2 font-poppins"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2 font-poppins"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/50">
          <h3 className="text-2xl font-bold text-white mb-4 font-poppins">
            Tertarik Melihat Lebih Banyak?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto font-poppins">
            Kunjungi GitHub saya untuk melihat semua proyek dan kontribusi open source yang telah saya kerjakan. 
            Setiap repository dilengkapi dengan dokumentasi lengkap dan demo yang bisa dijalankan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/Sadewoah"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 font-poppins"
            >
              <Github size={20} />
              Lihat GitHub Saya
            </a>
            <button
              onClick={() => document.getElementById('kontak')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 font-poppins"
            >
              <Code size={20} />
              Diskusi Proyek
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;