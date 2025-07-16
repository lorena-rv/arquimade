import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Arquimade</h3>
            <p className="text-gray-300 mb-4">
              Arquitectura en Madera | Gestión Integral de Proyectos
            </p>
            <p className="text-gray-400 text-sm">
              18+ años especializados en arquitectura y construcción en madera
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-500" />
                <a href="mailto:infoarquimade@gmail.com" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">
                  infoarquimade@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-500" />
                <a href="tel:+34665387433" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">
                  665 387 433
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-emerald-500" />
                <span className="text-gray-300">Cantabria, España</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/lorenarodr%C3%ADguezvillalba/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center hover:bg-emerald-700 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Arquimade. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;