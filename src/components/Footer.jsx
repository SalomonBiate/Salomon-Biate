import { FaGithub, FaHeart, FaLinkedin, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaGithub, link: 'https://github.com/SalomonBiate', label: 'GitHub' },
    { icon: FaLinkedin, link: 'https://www.linkedin.com/in/salomon-biate-b6aa3433a/', label: 'LinkedIn' },
    { icon: FaTwitter, link: 'https://x.com/BiateTech', label: 'X / Twitter' },
    { icon: FaInstagram, link: 'https://www.instagram.com/salomon_biate/', label: 'Instagram' },
    { icon: FaTiktok, link: 'https://www.tiktok.com/@salomon_biate', label: 'TikTok' },
  ]

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    /*{ name: 'Blog', href: '#blog' },*/
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-zinc-900/80 border-t border-zinc-800/60 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold">
              BIATE <span className="text-yellow-400">Salomon</span>
            </h3>
            <p className="text-zinc-500 text-sm mt-1">Creative Full-Stack Developer</p>
          </div>

          <div className="flex flex-wrap justify-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-zinc-400 hover:text-yellow-400 text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex justify-center md:justify-end gap-3">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="p-2.5 bg-zinc-800/60 rounded-full border border-zinc-700/40 hover:border-yellow-400/50 hover:bg-yellow-400/10 text-zinc-400 hover:text-yellow-400 transition-all"
                  aria-label={social.label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              )
            })}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-zinc-800/50 text-center">
          <p className="text-zinc-500 text-sm flex items-center justify-center gap-1.5 flex-wrap">
            © {currentYear} BIATE Salomon. All rights reserved.
            <span className="flex items-center gap-1">
              Made with <FaHeart className="text-red-500 w-3.5 h-3.5 animate-pulse" /> using React & Tailwind
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer