import React from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="relative min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="parallax-bg w-full h-full bg-cover bg-center bg-no-repeat opacity-30"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1495321308589-43affb814eee?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        {/* Enhanced gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70"></div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-400/20 to-transparent"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Subtle animated particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-emerald-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 max-w-7xl mx-auto">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white">Arquimade</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#servicios" className="text-emerald-100 hover:text-white transition-colors duration-300">Servicios</a>
              <a href="#proceso" className="text-emerald-100 hover:text-white transition-colors duration-300">Proceso</a>
              <a href="#tecnologia" className="text-emerald-100 hover:text-white transition-colors duration-300">Tecnología</a>
              <a href="#contacto" className="bg-white text-emerald-800 px-4 py-2 rounded-lg hover:bg-emerald-50 transition-colors duration-300 font-medium">Contactar</a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-emerald-200 transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-emerald-900/95 backdrop-blur-lg border-t border-emerald-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#servicios" className="block px-3 py-2 text-emerald-100 hover:text-white transition-colors duration-300">Servicios</a>
              <a href="#proceso" className="block px-3 py-2 text-emerald-100 hover:text-white transition-colors duration-300">Proceso</a>
              <a href="#tecnologia" className="block px-3 py-2 text-emerald-100 hover:text-white transition-colors duration-300">Tecnología</a>
              <a href="#contacto" className="block px-3 py-2 text-emerald-100 hover:text-white transition-colors duration-300">Contactar</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative z-40 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-thin mb-6 leading-tight font-ultra-thin">
            <div className="text-white font-extralight">Arquimade</div>
            <div className="text-emerald-300 font-extralight">Arquitectura en Madera</div>
          </h1>
          
          <p className="text-xl sm:text-2xl text-emerald-100 mb-4 font-thin font-ultra-thin">
            Gestión Integral de Proyectos en Madera
          </p>
          
          <p className="text-lg text-emerald-200 mb-8 italic font-thin font-ultra-thin">
            Timber Project Management
          </p>
          
          <p className="text-lg sm:text-xl text-white mb-12 max-w-3xl mx-auto leading-relaxed">
            Somos la extensión técnica especializada que tu estudio necesita para proyectos en madera de alta eficiencia energética
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contacto" className="bg-emerald-500 text-white px-8 py-4 rounded-lg hover:bg-emerald-600 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Consulta tu próximo proyecto
            </a>
            <a href="#servicios" className="bg-white/10 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold text-lg border border-white/20 backdrop-blur-sm">
              Conoce nuestros servicios
            </a>
          </div>
        </div>
      </div>

      {/* Contact Info Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm border-t border-emerald-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-emerald-100">
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <span className="text-sm">info@arquimade.net</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span className="text-sm">665 387 433</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={16} />
              <span className="text-sm">Cantabria</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;