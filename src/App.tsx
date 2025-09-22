import React, { useState, useEffect } from 'react';
import { Sun, Moon, ChevronLeft, ChevronRight } from 'lucide-react';
import HomePage from './pages/HomePage';
import TechnologyPage from './pages/TechnologyPage';
import ContactPage from './pages/ContactPage';

type PageType = 'home' | 'technology' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const pages: { id: PageType; title: string }[] = [
    { id: 'home', title: 'Home' },
    { id: 'technology', title: 'Technology' },
    { id: 'contact', title: 'Contact' }
  ];

  const currentPageIndex = pages.findIndex(page => page.id === currentPage);

  const navigateToPage = (pageId: PageType) => {
    if (pageId === currentPage || isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(pageId);
      setIsTransitioning(false);
    }, 300);
  };

  const navigatePrevious = () => {
    const prevIndex = currentPageIndex > 0 ? currentPageIndex - 1 : pages.length - 1;
    navigateToPage(pages[prevIndex].id);
  };

  const navigateNext = () => {
    const nextIndex = currentPageIndex < pages.length - 1 ? currentPageIndex + 1 : 0;
    navigateToPage(pages[nextIndex].id);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'technology':
        return <TechnologyPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full transition-all duration-300 hover:scale-110 ${
          isDarkMode 
            ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-400' 
            : 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
        }`}
      >
        {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 p-6 transition-colors duration-500 ${
        isDarkMode ? 'bg-gray-900/90' : 'bg-white/90'
      } backdrop-blur-md`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
            SmartMicrogrid
          </div>
          
          <div className="flex items-center space-x-8">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => navigateToPage(page.id)}
                className={`relative px-4 py-2 font-medium transition-all duration-300 hover:scale-105 ${
                  currentPage === page.id
                    ? 'text-blue-600'
                    : isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {page.title}
                {currentPage === page.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-green-500 animate-slideIn" />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Page Navigation Arrows */}
      <button
        onClick={navigatePrevious}
        className={`fixed left-6 top-1/2 transform -translate-y-1/2 z-40 p-3 rounded-full transition-all duration-300 hover:scale-110 ${
          isDarkMode 
            ? 'bg-gray-800 text-white hover:bg-gray-700' 
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={navigateNext}
        className={`fixed right-6 top-1/2 transform -translate-y-1/2 z-40 p-3 rounded-full transition-all duration-300 hover:scale-110 ${
          isDarkMode 
            ? 'bg-gray-800 text-white hover:bg-gray-700' 
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Page Content */}
      <main className={`transition-all duration-300 ${
        isTransitioning ? 'opacity-0 transform translate-x-8' : 'opacity-100 transform translate-x-0'
      }`}>
        {renderCurrentPage()}
      </main>

      {/* Page Indicators */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 flex space-x-3">
        {pages.map((page, index) => (
          <button
            key={page.id}
            onClick={() => navigateToPage(page.id)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentPage === page.id
                ? 'bg-blue-600 scale-125'
                : isDarkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;