import React, { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
  };
  const navLinks = [{
    name: 'Accueil',
    href: '#hero'
  }, {
    name: 'À propos',
    href: '#about'
  }, {
    name: 'Compétences',
    href: '#skills'
  }, {
    name: 'Expérience',
    href: '#experience'
  }, {
    name: 'Formation',
    href: '#education'
  }, {
    name: 'Projets',
    href: '#projects'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  return <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#hero" className="text-xl font-bold tracking-tight">
          Amadou Dioulde BA
        </a>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-8">
            {navLinks.map(link => <a key={link.href} href={link.href} className="text-foreground/80 hover:text-foreground transition-colors duration-200">
                {link.name}
              </a>)}
          </nav>
          <button onClick={toggleTheme} className="p-2 rounded-full bg-accent/20 hover:bg-accent/30 transition-colors" aria-label="Toggle theme">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleTheme} className="p-2 rounded-full bg-accent/20 hover:bg-accent/30 transition-colors" aria-label="Toggle theme">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation Menu */}
      {isMenuOpen && <nav className="md:hidden bg-background/95 backdrop-blur-md shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map(link => <a key={link.href} href={link.href} className="text-foreground/80 hover:text-foreground transition-colors duration-200 py-2" onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </a>)}
          </div>
        </nav>}
    </header>;
};