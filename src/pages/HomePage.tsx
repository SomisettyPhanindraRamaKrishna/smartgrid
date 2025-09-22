import React, { useEffect, useState } from 'react';
import { Zap, Shield, Leaf, Globe, ArrowRight, Battery, Sun, Wind } from 'lucide-react';

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [heroTextIndex, setHeroTextIndex] = useState(0);

  const heroTexts = [
    "Powering the most remote locations",
    "Sustainable energy for everyone",
    "Smart grids for a better tomorrow"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setHeroTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Smart Energy Management",
      description: "Intelligent distribution and optimization of power resources"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Reliable Infrastructure",
      description: "99.9% uptime with redundant systems and fail-safes"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Eco-Friendly Solutions",
      description: "Renewable energy integration with minimal environmental impact"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Connectivity",
      description: "Remote monitoring and control from anywhere in the world"
    }
  ];

  const stats = [
    { number: "500+", label: "Installations" },
    { number: "99.9%", label: "Uptime" },
    { number: "50MW", label: "Total Capacity" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-500" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-float" />
          <div className="absolute top-40 right-20 w-16 h-16 bg-green-200 dark:bg-green-800 rounded-full opacity-20 animate-float-delayed" />
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-yellow-200 dark:bg-yellow-800 rounded-full opacity-20 animate-float" />
        </div>

        <div className={`relative z-10 text-center max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Smart Microgrid
            </span>
          </h1>
          
          <div className="h-16 mb-8 flex items-center justify-center">
            <p className={`text-xl md:text-2xl text-gray-600 dark:text-gray-300 transition-all duration-500 ${
              heroTextIndex >= 0 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
            }`}>
              {heroTexts[heroTextIndex]}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Get Started
              <ArrowRight className="inline-block ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:border-blue-500 dark:hover:border-blue-400">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold mb-4">Why Choose SmartMicrogrid?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Advanced technology meets sustainable energy solutions for reliable power anywhere
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Preview */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInUp">
              <h2 className="text-4xl font-bold mb-6">Advanced Energy Solutions</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Our cutting-edge microgrid technology combines renewable energy sources, 
                intelligent storage systems, and smart distribution networks to deliver 
                reliable power to the most challenging locations.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Sun className="w-6 h-6 text-yellow-500" />
                  <span>Solar energy integration</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Battery className="w-6 h-6 text-green-500" />
                  <span>Advanced battery storage</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Wind className="w-6 h-6 text-blue-500" />
                  <span>Wind power compatibility</span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-green-100 dark:from-gray-700 dark:to-gray-600 rounded-3xl p-8 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4 w-full h-full">
                  <div className="bg-blue-500 rounded-2xl animate-pulse" />
                  <div className="bg-green-500 rounded-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="bg-yellow-500 rounded-2xl animate-pulse" style={{ animationDelay: '1s' }} />
                  <div className="bg-purple-500 rounded-2xl animate-pulse" style={{ animationDelay: '1.5s' }} />
                  <div className="bg-red-500 rounded-2xl animate-pulse" style={{ animationDelay: '2s' }} />
                  <div className="bg-indigo-500 rounded-2xl animate-pulse" style={{ animationDelay: '2.5s' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;