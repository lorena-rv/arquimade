import React from 'react';
import { Calculator, Layers, Eye, Wrench } from 'lucide-react';

const Process = () => {
  const processSteps = [
    {
      icon: Calculator,
      title: 'Cálculo estructural y modelado para producción',
      description: 'Realizamos cálculos precisos y modelado 3D optimizado para fabricación',
      phase: '01'
    },
    {
      icon: Layers,
      title: 'Planos de montaje',
      description: 'Documentación técnica detallada para facilitar el proceso de construcción',
      phase: '02'
    },
    {
      icon: Eye,
      title: 'Visor interactivo fase de montaje',
      description: 'Herramientas visuales interactivas para comprender el proceso de montaje',
      phase: '03'
    },
    {
      icon: Wrench,
      title: 'Montaje en obra',
      description: 'Supervisión y coordinación durante la fase de construcción',
      phase: '04'
    }
  ];

  return (
    <section id="proceso" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extralight text-gray-900 mb-4">
            ¿Qué incluye el servicio?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Un proceso técnico integral que garantiza la excelencia en cada fase del proyecto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="group relative">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full">
                {/* Phase number badge */}
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center z-10 group-hover:bg-emerald-600 transition-colors duration-300">
                  <span className="text-white font-bold text-lg">{step.phase}</span>
                </div>
                
                <div className="flex flex-col h-full">
                  <div className="flex items-start mb-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                      <step.icon className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div className="ml-6 flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
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

export default Process;