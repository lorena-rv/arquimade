import React from 'react';
import { Home, Building, Package, Ruler } from 'lucide-react';

const UseCases = () => {
  const useCases = [
    {
      icon: Home,
      title: 'Vivienda unifamiliar eficiente',
      description: 'Proyectos residenciales con altos estándares de eficiencia energética',
      features: ['Passivhaus', 'Bajo consumo energético', 'Confort térmico'],
      image: '/Arquimade3.webp'
    },
    {
      icon: Building,
      title: 'Edificación en altura con estructura de madera',
      description: 'Construcciones de múltiples plantas con sistemas estructurales innovadores',
      features: ['CLT y Glulam', 'Sistemas mixtos', 'Normativa técnica'],
      image: '/Arquimade4.webp'
    },
    {
      icon: Package,
      title: 'Construcción modular',
      description: 'Soluciones prefabricadas que optimizan tiempos y costos',
      features: ['Prefabricación', 'Montaje rápido', 'Control de calidad'],
      image: '/Arquimade1.webp'
    },
    {
      icon: Ruler,
      title: 'Grandes luces con soluciones técnicas y sostenibles',
      description: 'Estructuras complejas que requieren ingeniería especializada',
      features: ['Ingeniería avanzada', 'Sostenibilidad', 'Innovación técnica'],
      image: '/Arquimade2.webp'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extralight text-gray-900 mb-4">
            ¿Próximo proyecto en madera?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Especializados en diferentes tipologías de proyectos arquitectónicos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={useCase.image} 
                    alt={useCase.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors duration-300">
                  <useCase.icon className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-xs text-gray-600">
                      <div className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;