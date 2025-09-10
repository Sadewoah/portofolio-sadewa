import { Code, Database, Globe, Palette, Settings, Zap, Camera, Edit3, Layers, Pen } from 'lucide-react';

const About = () => {
  const tools = [
    { name: 'VS Code', category: 'Code Editor', icon: Code, color: 'bg-blue-600' },
    { name: 'Figma', category: 'UI/UX Design', icon: Palette, color: 'bg-purple-600' },
    { name: 'Adobe Photoshop', category: 'Image Editing', icon: Layers, color: 'bg-blue-500' },
    { name: 'Adobe Illustrator', category: 'Vector Design', icon: Pen, color: 'bg-orange-500' },
    { name: 'CapCut', category: 'Video Editing', icon: Edit3, color: 'bg-pink-600' },
    { name: 'Canva', category: 'Graphic Design', icon: Camera, color: 'bg-cyan-500' },
    { name: 'XAMPP', category: 'Development Server', icon: Database, color: 'bg-orange-600' },
    { name: 'Git & GitHub', category: 'Version Control', icon: Settings, color: 'bg-gray-600' },
    { name: 'Chrome DevTools', category: 'Debugging', icon: Globe, color: 'bg-green-600' }
  ];

  const skillCategories = [
    {
      title: 'Frontend Development',
      color: 'text-blue-400',
      bgColor: 'bg-blue-600/20',
      borderColor: 'border-blue-400/30',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Responsive Design']
    },
    {
      title: 'Backend Development',
      color: 'text-green-400',
      bgColor: 'bg-green-600/20',
      borderColor: 'border-green-400/30',
      skills: ['PHP', 'Node.js', 'Express.js', 'RESTful API']
    },
    {
      title: 'Database',
      color: 'text-purple-400',
      bgColor: 'bg-purple-600/20',
      borderColor: 'border-purple-400/30',
      skills: ['MySQL', 'MongoDB', 'Database Design', 'SQL Queries']
    },
    {
      title: 'Design & Multimedia',
      color: 'text-pink-400',
      bgColor: 'bg-pink-600/20',
      borderColor: 'border-pink-400/30',
      skills: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Canva', 'CapCut', 'UI/UX Design', 'Logo Design', 'Photographer','Video Editing','Videographer']
    },
    {
      title: 'Tools & Development',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-600/20',
      borderColor: 'border-yellow-400/30',
      skills: ['Git & GitHub', 'VS Code', 'XAMPP', 'Chrome DevTools', 'npm/yarn']
    }
  ];

  return (
    <section id="tentang" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-poppins">
            Tentang{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Saya
            </span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed font-poppins">
              Saya adalah seorang website developer dan designer dengan passion yang tinggi dalam menciptakan solusi digital yang inovatif. 
              Dengan pengalaman <span className="text-blue-400 font-semibold">3 tahun</span> selama menempuh pendidikan di SMK, 
              saya telah mengembangkan berbagai macam proyek yang mengasah kemampuan teknis dan kreativitas saya dalam bidang 
              pengembangan web dan desain multimedia.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed font-poppins">
              Selama perjalanan belajar saya, saya telah menguasai berbagai teknologi web modern serta tools design profesional 
              seperti Adobe Creative Suite, Figma, dan berbagai platform multimedia lainnya. Saya percaya bahwa kombinasi antara 
              technical skills yang solid, kreativitas dalam problem-solving, dan kemampuan design adalah kunci untuk menciptakan 
              aplikasi web yang tidak hanya fungsional, tetapi juga memberikan user experience yang luar biasa dan visual yang menarik.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Tools Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-blue-400 font-poppins flex items-center gap-3">
              <Settings className="text-blue-400" size={28} />
              Tools & Software
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tools.map((tool, index) => {
                const IconComponent = tool.icon;
                return (
                  <div 
                    key={index} 
                    className="group bg-gray-700/50 backdrop-blur-sm p-5 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-600/50 hover:border-gray-500"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${tool.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-white font-poppins">{tool.name}</div>
                        <div className="text-sm text-gray-400 font-poppins">{tool.category}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-blue-400 font-poppins flex items-center gap-3">
              <Code className="text-blue-400" size={28} />
              Keahlian & Kompetensi
            </h3>
            <div className="space-y-6">
              {skillCategories.map((category, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-xl border-2 ${category.borderColor} ${category.bgColor} backdrop-blur-sm hover:scale-105 transition-all duration-300`}
                >
                  <h4 className={`text-lg font-semibold mb-4 ${category.color} font-poppins`}>
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className={`${category.bgColor} ${category.color} px-3 py-2 rounded-full text-sm font-medium border ${category.borderColor} hover:scale-110 transition-transform duration-200 font-poppins`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { number: '3+', label: 'Tahun Pengalaman', desc: 'Belajar di SMK' },
            { number: '15+', label: 'Proyek Selesai', desc: 'Web & Design' },
            { number: '15+', label: 'Tools Dikuasai', desc: 'Development & Design' },
            { number: '5+', label: 'Kategori Skill', desc: 'Full Stack & Multimedia' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-600/50 hover:scale-105 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 font-poppins">{stat.number}</div>
              <div className="text-lg font-semibold text-white mb-1 font-poppins">{stat.label}</div>
              <div className="text-sm text-gray-400 font-poppins">{stat.desc}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default About;