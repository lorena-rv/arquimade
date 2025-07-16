import React from 'react';
import { Award, Users, Calendar, CheckCircle } from 'lucide-react';

const TrustSection = () => {
  const stats = [
    { icon: Calendar, value: '18+', label: 'Años de experiencia' },
    { icon: Users, value: '50+', label: 'Proyectos completados' },
    { icon: CheckCircle, value: '100%', label: 'Clientes satisfechos' },
  ];

  const certifications = [
    { name: 'Metodología BIM', description: 'Modelado de información de construcción' },
    { name: 'Software Cadwork', description: 'Especialización en software específico' },
    { name: 'Cantabria', description: 'Experiencia local y regional' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extralight text-gray-900 mb-4">
            18+ años especializados en arquitectura y construcción en madera
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Décadas de experiencia nos respaldan como el partner técnico de confianza para estudios de arquitectura
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4 group-hover:bg-emerald-200 transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-emerald-600" />
              </div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Certificaciones y Especializaciones
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center mb-3">
                      <Award className="w-6 h-6 text-emerald-600 mr-3" />
                      <h4 className="text-lg font-semibold text-gray-900">{cert.name}</h4>
                    </div>
                    <p className="text-gray-600">{cert.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:order-first">
              <img 
                src="/Arquimade2.webp" 
                alt="Equipo de Arquimade trabajando en proyectos" 
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;