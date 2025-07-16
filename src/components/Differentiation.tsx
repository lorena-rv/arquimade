import React from 'react';
import { Target, Brain, Users } from 'lucide-react';

const Differentiation = () => {
  const differentiators = [
    {
      icon: Target,
      title: 'Visión integral del proyecto',
      description: 'Entendemos que cada decisión técnica afecta al conjunto del proyecto',
      color: 'bg-emerald-500'
    },
    {
      icon: Brain,
      title: 'Conocimiento específico',
      description: 'Aportamos experiencia y conocimiento específico en estructuras de madera',
      color: 'bg-blue-500'
    },
    {
      icon: Users,
      title: 'Enfoque colaborativo',
      description: 'Trabajamos codo a codo con tu equipo, con un enfoque colaborativo y práctico',
      color: 'bg-purple-500'
    }
  ];

  return (
    <section className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extralight text-gray-900 mb-4">
            ¿Por qué confiar en Arquimade?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Nuestra experiencia y enfoque especializado nos distingue en el mercado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <div key={index} className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiation;