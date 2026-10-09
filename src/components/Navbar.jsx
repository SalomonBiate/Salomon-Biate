import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Work', href: '#work' },
  { name: 'Services', href: '#services' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Certificates', href: '#certificates' },
  /*{ name: 'Blog', href: '#blog' },*/
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <div className="fixed top-4 sm:top-6 left-0 w-full z-40 flex justify-center px-4">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-zinc-900/90 backdrop-blur-xl px-4 sm:px-8 py-3 sm:py-4 rounded-full flex items-center justify-between gap-4 sm:gap-8 shadow-2xl shadow-black/50 w-full sm:w-auto max-w-6xl border border-zinc-800/50"
      >
        <a href="#home" className="text-lg sm:text-xl font-black tracking-widest text-white shrink-0">
          BIATE<span className="text-yellow-400">Salomon</span>
        </a>

        <div className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-sm font-medium text-zinc-300 hover:text-yellow-400 transition-colors duration-200 tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </div>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="hidden md:inline-block px-5 lg:px-6 py-2.5 rounded-full bg-yellow-400 text-zinc-950 font-semibold text-sm hover:bg-yellow-300 transition-colors shadow-lg shadow-yellow-400/25 shrink-0"
        >
          Contact Me
        </motion.a>

        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Toggle Menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="absolute top-20 left-4 right-4 bg-zinc-900/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-zinc-800 md:hidden"
          >
            <div className="flex flex-col gap-3 items-center">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-base font-medium text-zinc-300 hover:text-yellow-400 w-full text-center py-2.5 hover:bg-white/5 rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                onClick={closeMenu}
                className="w-full mt-2 px-7 py-3 text-center rounded-full bg-yellow-400 text-zinc-950 font-semibold text-sm"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar