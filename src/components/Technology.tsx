import React, { useState, useEffect } from 'react';
import { Monitor, Layers, Eye, Laptop } from 'lucide-react';

const Technology = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const technologies = [
    {
      icon: Layers,
      title: 'Metodología BIM',
      description: 'Modelado de información de construcción para mayor precisión',
      highlight: true
    },
    {
      icon: Monitor,
      title: 'Software Cadwork',
      description: 'Herramienta especializada en estructuras de madera',
      highlight: true
    },
    {
      icon: Eye,
      title: 'Visualizaciones interactivas',
      description: 'Experiencias inmersivas para comprender el proyecto'
    },
    {
      icon: Laptop,
      title: 'Modelado 3D avanzado',
      description: 'Representación precisa y detallada del proyecto'
    }
  ];

  return (
    <section id="tecnologia" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extralight mb-4">
            Tecnología y Herramientas
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Utilizamos las herramientas más avanzadas del sector para garantizar la excelencia técnica
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <div key={index} className={`p-6 rounded-2xl transition-all duration-300 hover:transform hover:-translate-y-2 ${tech.highlight ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-gray-800 hover:bg-gray-700'}`}>
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                <tech.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">{tech.title}</h3>
              <p className="text-sm text-gray-300">{tech.description}</p>
            </div>
          ))}
        </div>

        {/* Software Mockup */}
        <div className="bg-gray-800 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Software Especializado</h3>
              <p className="text-gray-300 mb-6">
                Trabajamos con las herramientas más avanzadas del sector para ofrecer soluciones precisas y eficientes en cada proyecto.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
                  <span>Modelado BIM 3D completo</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
                  <span>Cálculos estructurales precisos</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
                  <span>Visualizaciones interactivas</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
                  <span>Documentación técnica automatizada</span>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl">
              {/* Parallax Background Image */}
              <div className="relative h-80 overflow-hidden">
                <div 
                  className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                  style={{ 
                    backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    transform: `translateY(${scrollY * 0.15}px)`,
                    scale: '1.1'
                  }}
                />
                {/* Dark overlay for better text contrast */}
                <div className="absolute inset-0 bg-black/60"></div>
                
                {/* Content overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-emerald-600/90 backdrop-blur-sm rounded-lg p-6 text-center">
                    <Monitor className="w-10 h-10 text-white mx-auto mb-3" />
                    <div className="text-white font-bold text-lg">Cadwork 3D</div>
                    <div className="text-emerald-100 text-sm">Especializado en madera</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;