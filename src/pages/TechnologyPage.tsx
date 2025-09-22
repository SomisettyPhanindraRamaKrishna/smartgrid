import React, { useEffect, useState } from 'react';
import { Battery, Zap, Sun, Wind, Cpu, Shield, ArrowRight, CheckCircle } from 'lucide-react';

const TechnologyPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technologies = [
    {
      icon: <Sun className="w-12 h-12" />,
      title: "Solar Integration",
      description: "Advanced photovoltaic systems with maximum power point tracking",
      features: ["High-efficiency panels", "Smart inverters", "Weather optimization"]
    },
    {
      icon: <Battery className="w-12 h-12" />,
      title: "Energy Storage",
      description: "Lithium-ion battery systems with intelligent charge management",
      features: ["Long cycle life", "Fast charging", "Thermal management"]
    },
    {
      icon: <Wind className="w-12 h-12" />,
      title: "Wind Power",
      description: "Small-scale wind turbines optimized for distributed generation",
      features: ["Low wind speed operation", "Quiet operation", "Maintenance-free"]
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "Smart Control",
      description: "AI-powered energy management and predictive analytics",
      features: ["Load forecasting", "Automatic optimization", "Remote monitoring"]
    }
  ];

  const systemComponents = [
    { name: "Solar Panels", capacity: "50kW", efficiency: "22%" },
    { name: "Battery Storage", capacity: "200kWh", cycles: "6000+" },
    { name: "Wind Turbine", capacity: "10kW", cutIn: "3 m/s" },
    { name: "Control System", response: "<1ms", uptime: "99.9%" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-500" />
        
        <div className={`relative z-10 text-center max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              How It Works
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Advanced technology stack powering sustainable energy solutions
          </p>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur-lg opacity-30 animate-pulse" />
              <div className="relative bg-white dark:bg-gray-800 p-8 rounded-full">
                <Zap className="w-16 h-16 text-purple-600 animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold mb-4">Core Technologies</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Integrated systems working together for optimal energy management
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-purple-600 dark:text-purple-400 mb-6 transition-all duration-300 group-hover:scale-110">
                  {tech.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{tech.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{tech.description}</p>
                
                <div className="space-y-3">
                  {tech.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-blue-500">
        <div className="max-w-6xl mx-auto text-white">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">System Architecture</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Modular design for scalable and reliable energy solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systemComponents.map((component, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold mb-4">{component.name}</h3>
                <div className="space-y-2 text-sm opacity-90">
                  {Object.entries(component).slice(1).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="capitalize">{key}:</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold mb-4">Energy Flow Process</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From generation to consumption - intelligent energy management
            </p>
          </div>

          <div className="relative">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
              {[
                { step: "1", title: "Generation", desc: "Solar & wind energy capture" },
                { step: "2", title: "Storage", desc: "Battery system charging" },
                { step: "3", title: "Management", desc: "AI-powered optimization" },
                { step: "4", title: "Distribution", desc: "Smart grid delivery" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center animate-fadeInUp" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="relative mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {item.step}
                    </div>
                    {index < 3 && (
                      <ArrowRight className="hidden md:block absolute top-1/2 left-full ml-4 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold mb-4">Key Benefits</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Why our technology makes the difference
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Shield className="w-8 h-8" />, title: "Reliability", desc: "99.9% uptime guarantee" },
              { icon: <Zap className="w-8 h-8" />, title: "Efficiency", desc: "Maximum energy utilization" },
              { icon: <Cpu className="w-8 h-8" />, title: "Intelligence", desc: "AI-powered optimization" }
            ].map((benefit, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-purple-600 dark:text-purple-400 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyPage;