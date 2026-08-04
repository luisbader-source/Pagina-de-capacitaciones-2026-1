import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Módulos", href: "#modulos" },
    { label: "Contenidos", href: "#contenidos" },
    { label: "Facultades", href: "#facultades" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/LOGOCINTIA.png"
              alt="CINTIA Logo"
              className="h-8 w-8"
            />
            <span className="font-bold text-lg text-primary hidden sm:inline">
              CINTIA
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, idx) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-primary font-medium text-sm transition-colors"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.3 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button
            className="hidden md:block px-6 py-2 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            Comenzar
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            className="md:hidden pb-4 space-y-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="w-full mt-4 px-4 py-2 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors">
              Comenzar
            </button>
          </motion.nav>
        )}
      </div>
    </header>
  );
}
