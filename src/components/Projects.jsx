import { ExternalLink, Github, Code, Database, Globe, Camera, Image, User } from 'lucide-react';



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
      github: 'https://github.com/Sadewoah/',
      demo: ''
    },
    {
      title: 'Banner Mobile Legends Top Up',
      description: 'Layanan editing gambar untuk banner mobile legends. Retouching portrait, color grading, dan creative manipulation menggunakan Adobe Photoshop.',
      tech: ['Adobe Photoshop', 'Color Grading', 'Retouching'],
      icon: '🎨',
      category: 'Photo Editing',
      color: 'from-pink-500 to-violet-500',
      type: 'photography',
      images: [
        "/images/editing/header.jpg",
      ]
    },
    {
      title: 'Invitaion Tournament Card',
      description: 'Layanan editing invitation card untuk penggelaran lomba valorant untuk memeriahkan acara 17an. Retouching portrait, color grading, dan creative manipulation menggunakan Adobe Photoshop.',
      tech: ['Adobe Photoshop', 'Color Grading', 'Retouching'],
      icon: '🎨',
      category: 'Photo Editing',
      color: 'from-pink-500 to-violet-500',
      type: 'photography',
      images: [
        "/images/editing/invitation.jpg"
      ]
    },
    {
      title: 'Banner Top Up Games',
      description: 'Experiment editing banner untuk top up games mobile legends. Retouching portrait, color grading, dan creative manipulation menggunakan Adobe Photoshop.',
      tech: ['Adobe Photoshop','Color Grading', 'Retouching'],
      icon: '🆔',
      category: 'Photo Editing',
      color: 'from-cyan-500 to-blue-500',
      type: 'photography',
      images: [
        "/images/editing/banner.jpg",
      ]
    },
      {
    title: 'Produk Desain 1',
    description: 'Layanan desain produk kreatif untuk kebutuhan branding dan promosi.',
    tech: ['Adobe Photoshop', 'Illustrator'],
    icon: '🎨',
    category: 'Product Design',
    color: 'from-yellow-500 to-orange-500',
    type: 'productDesign',
    images: [
      "/images/editing/chicken.jpg",
    ]
  },
  {
    title: 'Produk Desain 2',
    description: 'Desain produk profesional untuk meningkatkan identitas visual.',
    tech: ['Adobe Photoshop', 'Illustrator'],
    icon: '🎨',
    category: 'Product Design',
    color: 'from-teal-500 to-green-500',
    type: 'productDesign',
    images: [
      "/images/editing/potato.jpg",
    ]
  },
  {
    title: 'Produk Desain 3',
    description: 'Desain unik dan menarik sesuai kebutuhan klien.',
    tech: ['Adobe Photoshop', 'Illustrator'],
    icon: '🎨',
    category: 'Product Design',
    color: 'from-indigo-500 to-purple-500',
    type: 'productDesign',
    images: [
      "/images/editing/koko.jpg",
    ]
  },

  // === Pas Foto ===
  {
    title: 'Pas Foto',
    description: 'Layanan pas foto formal untuk dokumen resmi, lamaran kerja, dan ijazah.',
    tech: ['Camera', 'Adobe Photoshop'],
    icon: '📸',
    category: 'Photography',
    color: 'from-red-500 to-pink-500',
    type: 'pasfoto',
    images: [
      "/images/pasfoto/3.jpg",
    ]
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

        {/* Programming Projects Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4 font-poppins">
              Programming Projects
            </h3>
            <p className="text-gray-400 font-poppins">
              Proyek pengembangan web dan aplikasi yang telah saya kerjakan
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(project => !project.type).map((project, index) => (
              <div 
                key={index} 
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 border border-gray-700/50 hover:border-gray-600"
              >
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

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 font-poppins">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed font-poppins line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded-md text-xs font-medium border border-gray-600/50 font-poppins"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

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
        </div>

        {/* Photography Projects Section */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4 font-poppins">
              Design Services
            </h3>
            <p className="text-gray-400 font-poppins">
              Layanan fotografi profesional dan editing kreatif
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(project => project.type === 'photography').map((project, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl overflow-hidden hover:transform hover:scale-105 transition-all duration-700 hover:shadow-2xl hover:shadow-purple-500/20 border border-gray-700/30"
              >
                {/* Main Image Display */}
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={project.images[0]} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <div className={`bg-gradient-to-r ${project.color} px-4 py-2 rounded-full`}>
                      <span className="text-white text-sm font-semibold font-poppins flex items-center gap-2">
                        {project.icon} {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Gallery Preview */}
                  <div className="absolute top-6 right-6 flex gap-2">
                    {project.images.slice(1, 4).map((image, imgIndex) => (
                      <div key={imgIndex} className="w-12 h-12 rounded-lg overflow-hidden border-2 border-white/20 backdrop-blur-sm">
                        <img 
                          src={image} 
                          alt={`Preview ${imgIndex + 1}`}
                          className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300 font-poppins">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed font-poppins">
                      {project.description}
                    </p>
                  </div>

                  {/* Skills/Tools */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide font-poppins">Tools & Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="bg-gradient-to-r from-gray-700/50 to-gray-600/50 text-gray-200 px-3 py-1.5 rounded-full text-xs font-medium border border-gray-500/30 backdrop-blur-sm font-poppins"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-pink-500/10 to-violet-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Design Section */}
<div className="mb-12">
  <div className="text-center mb-12">
    <h3 className="text-3xl font-bold text-white mb-4 font-poppins">
      Product Design
    </h3>
    <p className="text-gray-400 font-poppins">
      Desain produk kreatif untuk kebutuhan branding & promosi
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {projects.filter(project => project.type === 'productDesign').map((project, index) => (
      <div
        key={index}
        className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 
                   backdrop-blur-xl rounded-3xl overflow-hidden hover:transform hover:scale-105 
                   transition-all duration-700 hover:shadow-2xl hover:shadow-green-500/20 
                   border border-gray-700/30"
      >
        {/* Image Display (square 1080x1080) */}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute top-6 left-6">
            <div className={`bg-gradient-to-r ${project.color} px-4 py-2 rounded-full`}>
              <span className="text-white text-sm font-semibold font-poppins flex items-center gap-2">
                {project.icon} {project.category}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300 font-poppins">
            {project.title}
          </h3>
          <p className="text-gray-300 leading-relaxed font-poppins">
            {project.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

{/* Pas Foto Section */}
<div className="mb-12">
  <div className="text-center mb-12">
    <h3 className="text-3xl font-bold text-white mb-4 font-poppins">
      Pas Foto
    </h3>
    <p className="text-gray-400 font-poppins">
      Layanan pas foto formal untuk dokumen, ijazah, dan kebutuhan resmi lainnya
    </p>
  </div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {projects.filter(project => project.type === 'pasfoto').map((project, index) => (
    <div
      key={index}
      className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 
                 backdrop-blur-xl rounded-3xl overflow-hidden hover:transform hover:scale-105 
                 transition-all duration-700 hover:shadow-2xl hover:shadow-red-500/20 
                 border border-gray-700/30"
    >
      {/* Ubah jadi aspect-[9/16] */}
      <div className="relative aspect-[9/16] overflow-hidden">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-white font-poppins">
          {project.title}
        </h3>
        <p className="text-gray-300 font-poppins">
          {project.description}
        </p>
      </div>
    </div>
  ))}
</div>

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
