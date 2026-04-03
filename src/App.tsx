/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Star, 
  MapPin, 
  Phone, 
  Clock, 
  Instagram, 
  Facebook, 
  Twitter, 
  ChevronRight, 
  Utensils, 
  Coffee, 
  Cake, 
  Menu as MenuIcon, 
  X,
  ArrowRight,
  Quote
} from 'lucide-react';
import { RESTAURANT_INFO, MENU_ITEMS, REVIEWS } from './constants';
import { MenuItem } from './types';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex flex-col">
          <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-amber-900' : 'text-white'}`}>
            Mr. FunBun
          </span>
          <span className={`text-[10px] uppercase tracking-widest font-medium ${isScrolled ? 'text-amber-700' : 'text-amber-200'}`}>
            Bakers & Cafe
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-amber-500 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-amber-600/20 active:scale-95">
            Order Online
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-gray-900' : 'text-white'} />
          ) : (
            <MenuIcon className={isScrolled ? 'text-gray-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl p-6 md:hidden flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-gray-800 hover:text-amber-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-amber-600 text-white px-6 py-3 rounded-xl text-center font-semibold">
              Order Online
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/bakery-hero/1920/1080?blur=2" 
          alt="Bakery Interior" 
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center space-x-2 bg-amber-600/20 backdrop-blur-sm border border-amber-500/30 px-4 py-1.5 rounded-full mb-6">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-amber-100 text-xs font-bold uppercase tracking-widest">
              Top Rated Bakery in Lucknow
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1]">
            Sweetening Your <br />
            <span className="text-amber-500">Every Moment</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-lg">
            Experience the finest donuts, waffles, and savory treats at Lucknow's favorite hangout spot. Beautiful ambience meets delicious taste.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-amber-600/30 flex items-center justify-center group">
              Explore Menu
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center">
              Our Story
            </button>
          </div>

          <div className="mt-12 flex items-center space-x-8">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">4.7</span>
              <span className="text-gray-400 text-sm">Google Rating</span>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">199+</span>
              <span className="text-gray-400 text-sm">Happy Reviews</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
};

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Sweet' | 'Savory' | 'Beverage'>('All');

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  const categories = ['All', 'Sweet', 'Savory', 'Beverage'];

  return (
    <section id="menu" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-amber-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">Our Signature Selection</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">Baked with Love & Passion</h3>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-12" />
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat 
                    ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/20' 
                    : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-stone-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-amber-700">
                    {item.category}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-bold text-stone-900">{item.name}</h4>
                    <span className="text-amber-600 font-bold text-lg">{item.price}</span>
                  </div>
                  <p className="text-stone-500 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <button className="w-full py-3 rounded-xl border-2 border-stone-100 text-stone-800 font-bold text-sm hover:bg-amber-600 hover:border-amber-600 hover:text-white transition-all active:scale-95">
                    Add to Order
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-amber-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">Guest Experiences</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight">What Our Happy <br />Customers Say</h3>
          </div>
          <div className="flex items-center space-x-2 bg-stone-50 px-6 py-3 rounded-2xl border border-stone-100">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="font-bold text-stone-900">4.7/5</span>
            <span className="text-stone-400 text-sm">(199 Reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-stone-50 p-10 rounded-[2.5rem] relative group hover:bg-amber-50 transition-colors duration-500"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-amber-200 group-hover:text-amber-300 transition-colors" />
              <div className="flex items-center space-x-4 mb-8">
                <img 
                  src={review.avatar} 
                  alt={review.author} 
                  className="w-14 h-14 rounded-2xl object-cover ring-4 ring-white shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h5 className="font-bold text-stone-900">{review.author}</h5>
                  <p className="text-stone-400 text-xs">{review.date}</p>
                </div>
              </div>
              <p className="text-stone-600 leading-relaxed italic">
                "{review.comment}"
              </p>
              <div className="mt-8 flex">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-stone-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.img 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                src="https://picsum.photos/seed/bakery-1/600/800" 
                alt="Bakery Vibe" 
                className="rounded-[2rem] w-full h-[400px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="space-y-4 pt-12">
                <motion.img 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  src="https://picsum.photos/seed/bakery-2/600/600" 
                  alt="Food" 
                  className="rounded-[2rem] w-full h-[250px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-amber-600 p-8 rounded-[2rem] text-center"
                >
                  <span className="block text-4xl font-bold mb-1">10+</span>
                  <span className="text-amber-100 text-xs font-bold uppercase tracking-widest">Years of Excellence</span>
                </motion.div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-600/20 rounded-full blur-3xl" />
          </div>

          <div className="space-y-8">
            <h2 className="text-amber-500 font-bold uppercase tracking-[0.2em] text-sm">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-bold leading-tight">A Beautiful Ambience <br />For Beautiful Memories</h3>
            <p className="text-stone-400 text-lg leading-relaxed">
              Located in the heart of Lucknow, Mr. FunBun Bakers is more than just a bakery. It's a place where beautiful infrastructure meets the warmth of freshly baked goods. From our signature donuts to our savory KFC momos, every bite is crafted to perfection.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Visit Us</h4>
                  <p className="text-stone-400 text-sm leading-relaxed">
                    {RESTAURANT_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-3 rounded-xl">
                  <Clock className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Opening Hours</h4>
                  <p className="text-stone-400 text-sm">
                    Monday - Sunday: 10:00 AM - 11:30 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-3 rounded-xl">
                  <Phone className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Call Us</h4>
                  <p className="text-stone-400 text-sm">
                    {RESTAURANT_INFO.phone}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button className="bg-white text-stone-900 px-8 py-4 rounded-2xl font-bold hover:bg-amber-500 hover:text-white transition-all active:scale-95">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-stone-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-3xl font-bold tracking-tight text-white">
                Mr. FunBun
              </span>
              <span className="text-xs uppercase tracking-widest font-medium text-amber-500">
                Bakers & Cafe
              </span>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed">
              Crafting delightful experiences through premium baking and a cozy atmosphere in Lucknow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-stone-500 text-sm">
              <li><a href="#home" className="hover:text-amber-500 transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-amber-500 transition-colors">Our Menu</a></li>
              <li><a href="#about" className="hover:text-amber-500 transition-colors">About Us</a></li>
              <li><a href="#reviews" className="hover:text-amber-500 transition-colors">Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Categories</h4>
            <ul className="space-y-4 text-stone-500 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Special Cakes</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Donuts & Waffles</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Savory Snacks</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Beverages</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-stone-500 text-sm mb-4">Subscribe to get special offers and news.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/5 border border-white/10 rounded-l-xl px-4 py-3 text-sm w-full focus:outline-none focus:border-amber-500 transition-colors"
              />
              <button className="bg-amber-600 px-4 rounded-r-xl hover:bg-amber-700 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-600 text-xs">
            © 2026 Mr. FunBun Bakers. All rights reserved.
          </p>
          <div className="flex space-x-6 text-stone-600 text-xs">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-sans selection:bg-amber-200 selection:text-amber-900">
      <Navbar />
      <Hero />
      <MenuSection />
      <AboutSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
}
