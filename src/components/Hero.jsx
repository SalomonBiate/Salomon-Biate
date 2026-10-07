import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import hero from '../assets/hero.png'
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa'

const words = [
  'Software Engineer',
  'Full-Stack Developer',
  'AI Enthusiast',
  'Tech Community Builder',
]

const socialLinks = [
  {
    icon: FaGithub,
    link: 'https://github.com/SalomonBiate',
    label: 'GitHub',
  },
  {
    icon: FaLinkedin,
    link: 'https://www.linkedin.com/in/salomon-biate-b6aa3433a/',
    label: 'LinkedIn',
  },
  {
    icon: FaTwitter,
    link: 'https://x.com/BiateTech',
    label: 'X',
  },
  {
    icon: FaInstagram,
    link: 'https://www.instagram.com/salomon_biate/',
    label: 'Instagram',
  },
  {
    icon: FaTiktok,
    link: 'https://www.tiktok.com/@salomon_biate',
    label: 'TikTok',
  },
]

const Hero = () => {
  const [index, setIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeout
    const currentWord = words[index]

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayedText(
          currentWord.substring(0, displayedText.length - 1)
        )

        if (displayedText.length === 0) {
          setIsDeleting(false)
          setIndex((prev) => (prev + 1) % words.length)
        }
      }, 70)
    } else {
      timeout = setTimeout(() => {
        setDisplayedText(
          currentWord.substring(0, displayedText.length + 1)
        )

        if (displayedText.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1800)
        }
      }, 100)
    }

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, index])

  return (
    <section
      id="home"
      className="
        lg:min-h-screen
        text-white
        flex items-center justify-center
        relative overflow-hidden
        pt-32 lg:pt-28
        pb-28 sm:pb-16
        px-4 sm:px-6
        font-ubuntu
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-50 h-50
          sm:w-75 sm:h-75
          md:w-100 md:h-100
          lg:w-125 lg:h-125
          rounded-full
          bg-yellow-400/10
          blur-3xl
          pointer-events-none
        "
      />

      {/* Main Container */}
      <div
        className="
          max-w-6xl
          mx-auto
          w-full
          items-center
          grid
          grid-cols-1
          lg:grid-cols-12
          gap-8 md:gap-12
          z-10
        "
      >
        {/* =========================
            PROFILE IMAGE
        ========================== */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="
            lg:col-span-5
            flex justify-center items-center
            order-1 lg:order-0
          "
        >
          <div
            className="
              relative
              w-64 sm:w-72
              h-80 sm:h-96
              flex items-center justify-center
              my-4
            "
          >
            {/* =========================
                BACK YELLOW CARD (Contour)
            ========================== */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
              animate={{ opacity: 1, scale: 1, rotate: -12 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="
                absolute
                inset-0
                rounded-3xl
                border-[3px]
                border-yellow-400/40
              "
              style={{
                transform: 'translateX(-30px) translateY(15px)',
                zIndex: 1,
                boxShadow: '0 0 30px rgba(250, 204, 21, 0.15)',
              }}
            />

            {/* =========================
                MIDDLE YELLOW CARD (Contour)
            ========================== */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: -6 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="
                absolute
                inset-0
                rounded-3xl
                border-[3px]
                border-yellow-400/70
              "
              style={{
                transform: 'translateX(-15px) translateY(8px)',
                zIndex: 2,
                boxShadow: '0 0 30px rgba(250, 204, 21, 0.25)',
              }}
            />

            {/* =========================
                MAIN IMAGE CARD (Fond jaune)
            ========================== */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 0.3 },
                scale: { duration: 0.6, delay: 0.3 },
                y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
              }}
              className="
                absolute
                inset-0
                rounded-3xl
                overflow-hidden
                flex items-end justify-center
                bg-yellow-400
              "
              style={{
                zIndex: 3,
                boxShadow: '0 20px 60px rgba(250, 204, 21, 0.45)',
              }}
            >
              {/* Image principale */}
              <motion.img
                src={hero}
                alt="Salomon Biate"
                className="
                  w-full
                  h-[85%]
                  object-cover
                  object-top
                "
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
              />

              {/* Overlay dégradé (optionnel, pour l'ambiance) */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-yellow-400/30
                  via-transparent
                  to-transparent
                  pointer-events-none
                "
              />
            </motion.div>
          </div>
        </motion.div>

        {/* =========================
            TEXT CONTENT
        ========================== */}
        <div
          className="
            lg:col-span-7
            flex flex-col
            items-center
            lg:items-start
            text-center
            lg:text-left
            order-2
            lg:order-0
          "
        >
          {/* Greeting */}
          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              text-zinc-300
              text-sm sm:text-base lg:text-lg
              font-medium
              mb-1 sm:mb-2
              tracking-wide
            "
          >
            Hi! I'm{' '}
            <span className="text-yellow-400 font-bold">
              Salomon Biate
            </span>
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-bold
              tracking-tight
              my-2 sm:my-3
            "
          >
            <div>I Build With Code</div>

            {/* Typing Effect */}
            <div
              className="
                inline-flex
                items-center
                min-h-[1.2em]
                relative
                justify-center
                lg:justify-start
              "
            >
              <span
                className="
                  text-yellow-400
                  font-ubuntu
                  font-medium
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl
                  xl:text-6xl
                "
              >
                {displayedText}
              </span>

              <span
                className="
                  w-1
                  h-6
                  sm:h-8
                  md:h-10
                  lg:h-12
                  bg-yellow-400
                  ml-1
                  sm:ml-2
                  inline-block
                  animate-pulse
                "
              />
            </div>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="
              text-zinc-400
              text-base
              sm:text-lg
              max-w-xl
              font-light
              font-ubuntu
              leading-relaxed
              my-2 sm:my-4
              px-2 sm:px-0
            "
          >
            Étudiant en Génie Logiciel basé à Lomé, au Togo.
            Je construis des produits numériques et j'explore
            l'Intelligence Artificielle, la cybersécurité et les
            technologies émergentes, tout en contribuant à la
            construction de communautés tech.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
            className="
              flex
              flex-wrap
              gap-3 sm:gap-4
              mt-1 sm:mt-2
              justify-center
              lg:justify-start
            "
          >
            <a
              href="#contact"
              className="
                px-8
                py-3.5
                bg-yellow-400
                text-zinc-950
                font-bold
                rounded-full
                hover:bg-yellow-300
                hover:scale-105
                transition-all
                duration-300
                font-ubuntu
                text-xs sm:text-sm
                shadow-lg
                shadow-yellow-400/20
              "
            >
              Let's Connect
            </a>

            <a
              href="#work"
              className="
                px-8
                py-3.5
                border-2
                border-yellow-400/80
                text-yellow-400
                font-semibold
                hover:bg-yellow-400/10
                hover:scale-105
                transition-all
                duration-300
                rounded-full
                font-ubuntu
                text-xs sm:text-sm
              "
            >
              Explore My Work
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 0.6,
            }}
            className="
              flex
              items-center
              justify-center
              lg:justify-start
              gap-4
              mt-7
            "
          >
            {socialLinks.map((social, i) => {
              const Icon = social.icon

              return (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -4,
                    scale: 1.15,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="
                    w-11
                    h-11
                    rounded-full
                    bg-zinc-800/80
                    border
                    border-zinc-700
                    flex
                    items-center
                    justify-center
                    text-zinc-400
                    hover:text-yellow-400
                    hover:border-yellow-400/50
                    transition-all
                    duration-300
                  "
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero