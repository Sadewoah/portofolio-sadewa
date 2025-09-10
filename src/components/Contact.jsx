import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send, MessageCircle, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validasi
    if (!formData.name || !formData.email || !formData.message) {
      alert('Mohon isi semua field yang wajib!');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulasi pengiriman (ganti dengan API yang sebenarnya)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'i.sadewabharakamahaputra@gmail.com',
      description: 'Kirim email untuk kerjasama',
      color: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700',
      link: 'mailto:i.sadewabharakamahaputra@gmail.com'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '+62 822 4781 4145',
      description: 'Chat langsung via WhatsApp',
      color: 'bg-green-600',
      hoverColor: 'hover:bg-green-700',
      link: 'https://wa.me/6282247814145'
    },
    {
      icon: MapPin,
      title: 'Lokasi',
      value: 'Indonesia, Bali',
      description: 'Tersedia untuk remote work',
      color: 'bg-red-600',
      hoverColor: 'hover:bg-red-700',
      link: '#'
    }
  ];

  const socialMedia = [
    {
      icon: Github,
      name: 'GitHub',
      username: '@Sadewoah',
      url: 'https://github.com/Sadewoah',
      color: 'hover:bg-gray-600',
      description: 'Lihat kode dan kontribusi'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      username: '-',
      url: '',
      color: 'hover:bg-blue-600',
      description: ''
    },
    {
      icon: Instagram,
      name: 'Instagram',
      username: '@ig.sadewa',
      url: 'https://instagram.com/ig.sadewa',
      color: 'hover:bg-pink-600',
      description: 'Behind the scenes'
    }
  ];

  return (
    <section id="kontak" className="py-20 bg-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
            Hubungi{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Saya
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-poppins">
            Mari berkolaborasi! Saya selalu terbuka untuk diskusi proyek baru, kesempatan kerjasama, 
            atau sekedar berbagi pengalaman tentang dunia web development. Jangan ragu untuk menghubungi saya!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 font-poppins flex items-center gap-3">
                <MessageCircle className="text-blue-400" size={28} />
                Informasi Kontak
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="group">
                      <a 
                        href={info.link}
                        className={`flex items-center gap-4 p-4 bg-gray-700/50 backdrop-blur-sm rounded-xl border border-gray-600/50 transition-all duration-300 hover:bg-gray-700 hover:border-gray-500 hover:scale-105 ${info.link !== '#' ? 'cursor-pointer' : 'cursor-default'}`}
                      >
                        <div className={`w-14 h-14 ${info.color} ${info.hoverColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300`}>
                          <IconComponent size={22} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-white font-poppins">{info.title}</div>
                          <div className="text-gray-300 font-medium font-poppins">{info.value}</div>
                          <div className="text-sm text-gray-400 font-poppins">{info.description}</div>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white font-poppins">Media Sosial</h4>
              <div className="space-y-4">
                {socialMedia.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 bg-gray-700/30 backdrop-blur-sm rounded-xl border border-gray-600/30 transition-all duration-300 hover:bg-gray-700 ${social.color} hover:scale-105 group`}
                    >
                      <div className="w-12 h-12 bg-gray-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                        <IconComponent size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-white font-poppins">{social.name}</div>
                        <div className="text-sm text-gray-400 font-poppins">{social.username}</div>
                        <div className="text-xs text-gray-500 font-poppins">{social.description}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Response Time Info */}
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm p-6 rounded-xl border border-blue-400/30">
              <h4 className="text-lg font-semibold mb-4 text-blue-400 font-poppins flex items-center gap-2">
                <Clock size={20} />
                Tips Menghubungi Saya
              </h4>
              <ul className="text-sm text-gray-300 space-y-2 font-poppins">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong>Proyek:</strong> Jelaskan kebutuhan dan timeline secara detail</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong>Kolaborasi:</strong> Ceritakan ide dan visi Anda</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong>Konsultasi:</strong> Siapkan pertanyaan spesifik Anda</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong>Response time:</strong> Biasanya dalam 24 jam</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
              <h3 className="text-2xl font-bold mb-8 text-white font-poppins flex items-center gap-3">
                <Send className="text-blue-400" size={28} />
                Kirim Pesan
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-200 font-poppins">
                      Nama Lengkap <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 text-white placeholder-gray-400 transition-all duration-200 font-poppins"
                      placeholder="Masukkan nama lengkap Anda"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-200 font-poppins">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 text-white placeholder-gray-400 transition-all duration-200 font-poppins"
                      placeholder="email@example.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-200 font-poppins">
                    Subjek
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 text-white placeholder-gray-400 transition-all duration-200 font-poppins"
                    placeholder="Subjek pesan Anda"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-200 font-poppins">
                    Pesan <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="6"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 text-white placeholder-gray-400 resize-none transition-all duration-200 font-poppins"
                    placeholder="Tulis pesan Anda di sini... Jelaskan proyek, kebutuhan, atau pertanyaan yang ingin Anda sampaikan secara detail."
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed font-poppins"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Mengirim Pesan...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Kirim Pesan
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="bg-green-600/20 border border-green-400/30 text-green-300 p-4 rounded-xl flex items-center gap-3 font-poppins">
                    <CheckCircle size={20} />
                    <span>Pesan berhasil dikirim! Saya akan membalasnya secepatnya.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-600/20 border border-red-400/30 text-red-300 p-4 rounded-xl font-poppins">
                    Terjadi kesalahan saat mengirim pesan. Silakan coba lagi atau hubungi langsung via WhatsApp.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;