import React from 'react';
import { PenTool, FileText, Handshake, HardHat } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: PenTool,
      title: 'Asesoría técnica desde el diseño inicial',
      description: 'Aportamos soluciones para integrar correctamente la madera desde las primeras fases del proyecto',
      features: ['Análisis de viabilidad', 'Optimización estructural', 'Selección de materiales']
    },
    {
      icon: FileText,
      title: 'Documentación gráfica y escrita',
      description: 'Elaboramos planos con detalles constructivos, memorias y mediciones de la estructura de madera',
      features: ['Planos técnicos', 'Memorias de cálculo', 'Mediciones detalladas']
    },
    {
      icon: Handshake,
      title: 'Selección y coordinación con proveedores',
      description: 'Proponemos fabricantes y empresas especializadas adaptados a las necesidades de tu proyecto',
      features: ['Red de proveedores', 'Comparativas técnicas', 'Coordinación logística']
    },
    {
      icon: HardHat,
      title: 'Gestión en fase de obra',
      description: 'Coordinamos los trabajos en obra relacionados con la madera, asegurando la correcta ejecución',
      features: ['Supervisión técnica', 'Control de calidad', 'Resolución de incidencias']
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extralight text-gray-900 mb-4">
            ¿En qué consiste la gestión integral de proyectos en madera?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Ofrecemos un servicio completo que abarca desde el diseño inicial hasta la finalización de la obra
          </p>
          
          {/* Video Section */}
          <div className="mt-12 mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://drive.google.com/file/d/1VcnAaBnEuMTMyIqr6vDtB4adk35VsWya/preview"
                  className="w-full h-full"
                  allow="autoplay; encrypted-media; loop"
                  allowFullScreen
                  title="Gestión integral de proyectos en madera - Arquimade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-emerald-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;