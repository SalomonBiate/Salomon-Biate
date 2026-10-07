import { motion, useInView } from 'framer-motion'
import React, { useRef, useState } from 'react'
import {
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaJs,
  FaNodeJs,
  FaReact,
  FaWordpress,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJava
} from 'react-icons/fa'

import {
  SiFirebase,
  SiGraphql,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiGooglegemini
} from 'react-icons/si'

import { TbBrandVscode } from 'react-icons/tb'


/* =========================================================
   AI LOGOS
   Logos SVG intégrés directement pour éviter les problèmes
   d'exports react-icons.
========================================================= */

const ChatGPTIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-7 h-7"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M21.2 10.1a5.9 5.9 0 0 0-.5-2.4 6 6 0 0 0-7.1-3.5A6 6 0 0 0 8.4 2a6 6 0 0 0-5.8 7.5A6 6 0 0 0 1 14.8a6 6 0 0 0 6.1 5.1c.8 0 1.6-.2 2.3-.5a6 6 0 0 0 7.1-3.5 6 6 0 0 0 4.7-5.8Zm-3.1 4.4a4 4 0 0 1-2.2.6l-.5-.1-3.6-2.1v4.2a4 4 0 0 1-1.8 1.2 4 4 0 0 1-1.9.2 4 4 0 0 1-3.2-2.4 4 4 0 0 1-.2-2.1l.2-.5 3.6-2.1-3.6-2.1A4 4 0 0 1 5 5.1a4 4 0 0 1 4.4-1.3l.5.2 3.6 2.1v-4a4 4 0 0 1 1.8-1.2 4 4 0 0 1 4.9 2.2 4 4 0 0 1 .2 2.1l-.2.5-3.6 2.1 3.6 2.1a4 4 0 0 1 .2 4.6 4 4 0 0 1-2.3 2.1Zm-7.6-8.8a2 2 0 0 0-2.2.7l-.1.2 3.4 2 1.8-1-2.9-1.7Zm5.4 1.7-1.8 1 1.8 1 3.4-2-.1-.2a2 2 0 0 0-3.3.2Zm-7.2 3.1-1.8 1a2 2 0 0 0-.7 2.2l.1.2 3.4-2v-2Zm4.8 1.4-1.8 1v3.9l.2.1a2 2 0 0 0 2.2-.7l.1-.2v-4.1l-.7-.4Zm-2.6 1-3.4 2 .1.2a2 2 0 0 0 3.3-.2l.1-.2-.1-1.8Zm5-2.8-1.8 1v4.1l.1.2a2 2 0 0 0 3.3-.2l.1-.2-1.8-1v-3.9Z" />
  </svg>
)


const ClaudeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-7 h-7"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12.7 2.5h2.8l5.2 16.8h-2.8l-1.1-3.7H10l-1.2 3.7H6l5.4-16.8h1.3Zm-.3 10.6h3.8l-1.8-6.1-2 6.1Z" />
  </svg>
)


const MistralIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-7 h-7"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M3 4h18v4h-4v4h4v8h-6v-4h-2v4H7v-8H3V4Zm4 4v8h4v-4h2V8H7Zm8 0v4h2V8h-2Z" />
  </svg>
)


const GrokIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-7 h-7"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M4.2 3.5h4.1l3.4 5.7 3.6-5.7h4.5l-5.8 8.2 5.9 8.8h-4.2l-3.9-6.1-4 6.1H3.4l6.2-8.7-5.4-8.3Zm7.2 7.3 2.5 3.8 3.4-5.2-2.4 3.2-3.5-1.8Z" />
  </svg>
)


const Skills = () => {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: false,
    amount: 0.15
  })

  const [activeCategory, setActiveCategory] = useState('frontend')


  const skillCategories = {

    /* =====================================================
       FRONTEND
    ===================================================== */

    frontend: {
      name: 'Frontend',

      skills: [
        {
          name: 'React',
          icon: FaReact,
          color: '#61DAFB',
          level: 92
        },

        {
          name: 'Next.js',
          icon: SiNextdotjs,
          color: '#ffffff',
          level: 88
        },

        {
          name: 'JavaScript',
          icon: FaJs,
          color: '#F7DF1F',
          level: 90
        },

        {
          name: 'Tailwind CSS',
          icon: SiTailwindcss,
          color: '#06B6D4',
          level: 94
        },

        {
          name: 'HTML5',
          icon: FaHtml5,
          color: '#E34F26',
          level: 96
        },

        {
          name: 'CSS3',
          icon: FaCss3Alt,
          color: '#1572B6',
          level: 93
        }
      ]
    },


    /* =====================================================
       BACKEND
    ===================================================== */

    backend: {
      name: 'Backend',

      skills: [
        {
          name: 'Node.js',
          icon: FaNodeJs,
          color: '#339933',
          level: 85
        },

        {
          name: 'Python',
          icon: FaPython,
          color: '#3776AB',
          level: 80
        },

        {
          name: 'Java',
          icon: FaJava,
          color: '#007396',
          level: 75
        },

        {
          name: 'MongoDB',
          icon: SiMongodb,
          color: '#47A248',
          level: 82
        },

        {
          name: 'PostgreSQL',
          icon: SiPostgresql,
          color: '#4169E1',
          level: 78
        },

        {
          name: 'Firebase',
          icon: SiFirebase,
          color: '#FFCA28',
          level: 86
        },

        {
          name: 'GraphQL',
          icon: SiGraphql,
          color: '#E10098',
          level: 76
        }
      ]
    },


    /* =====================================================
       TOOLS & DESIGN
    ===================================================== */

    tools: {
      name: 'Tools & Design',

      skills: [
        {
          name: 'Git',
          icon: FaGitAlt,
          color: '#F05032',
          level: 90
        },

        {
          name: 'GitHub',
          icon: FaGithub,
          color: '#ffffff',
          level: 92
        },

        {
          name: 'Figma',
          icon: FaFigma,
          color: '#F24E1E',
          level: 84
        },

        {
          name: 'WordPress',
          icon: FaWordpress,
          color: '#21759B',
          level: 80
        },

        {
          name: 'VS Code',
          icon: TbBrandVscode,
          color: '#007ACC',
          level: 95
        }
      ]
    },


    /* =====================================================
       AI TOOLS
    ===================================================== */

    ai: {
      name: 'AI Tools',

      skills: [
        {
          name: 'ChatGPT',
          icon: ChatGPTIcon,
          color: '#10A37F',
          level: 90
        },

        {
          name: 'Claude',
          icon: ClaudeIcon,
          color: '#D97706',
          level: 88
        },

        {
          name: 'Gemini',
          icon: SiGooglegemini,
          color: '#4285F4',
          level: 85
        },

        {
          name: 'Mistral',
          icon: MistralIcon,
          color: '#FF6B00',
          level: 80
        },

        {
          name: 'Grok',
          icon: GrokIcon,
          color: '#ffffff',
          level: 87
        }
      ]
    }
  }


  const filteredSkills =
    skillCategories[activeCategory]?.skills || []


  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden"
    >

      {/* Background decorations */}

      <div
        className="absolute top-1/4 -right-20 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none"
      />

      <div
        className="absolute bottom-1/4 -left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
      />


      <div className="max-w-6xl mx-auto relative z-10">


        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: -20
          }}

          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0
                }
              : {}
          }

          className="text-center mb-14"
        >

          <p className="text-yellow-400 font-semibold text-sm tracking-[0.25em] uppercase mb-3">
            My Expertise
          </p>


          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">

            Skills &{' '}

            <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">

              Technologies

            </span>

          </h2>


          <div
            className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mt-5 rounded-full"
          />

        </motion.div>



        {/* =================================================
            CATEGORIES
        ================================================= */}

        <div className="flex flex-wrap justify-center gap-3 mb-12">

          {Object.entries(skillCategories).map(
            ([key, cat]) => (

              <button
                key={key}

                onClick={() =>
                  setActiveCategory(key)
                }

                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === key
                    ? 'bg-yellow-400 text-zinc-950 shadow-lg shadow-yellow-400/30'
                    : 'bg-zinc-800/60 text-zinc-400 hover:bg-zinc-700/60 hover:text-white border border-zinc-700/40'
                }`}
              >

                {cat.name}

              </button>

            )
          )}

        </div>



        {/* =================================================
            SKILLS GRID
        ================================================= */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {filteredSkills.map((skill, i) => {

            const Icon = skill.icon

            return (

              <motion.div
                key={skill.name}

                initial={{
                  opacity: 0,
                  y: 30
                }}

                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0
                      }
                    : {}
                }

                transition={{
                  delay: i * 0.07
                }}

                whileHover={{
                  y: -6
                }}

                className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:border-yellow-400/40 transition-all duration-300 group"
              >

                <div className="flex items-center gap-4 mb-4">


                  {/* =================================================
                      ICON
                  ================================================= */}

                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{
                      backgroundColor: `${skill.color}20`,
                      color: skill.color
                    }}
                  >

                    <Icon />

                  </div>



                  {/* =================================================
                      NAME + LEVEL
                  ================================================= */}

                  <div className="flex-1">

                    <h3 className="font-semibold text-white group-hover:text-yellow-400 transition-colors">

                      {skill.name}

                    </h3>


                    <p className="text-xs text-zinc-500 mt-0.5">

                      {skill.level}% mastery

                    </p>

                  </div>


                  <span className="text-yellow-400 font-bold text-lg">

                    {skill.level}%

                  </span>

                </div>



                {/* =================================================
                    PROGRESS BAR
                ================================================= */}

                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">

                  <motion.div

                    initial={{
                      width: 0
                    }}

                    animate={
                      isInView
                        ? {
                            width: `${skill.level}%`
                          }
                        : {}
                    }

                    transition={{
                      duration: 1,
                      delay: 0.2 + i * 0.08,
                      ease: 'easeOut'
                    }}

                    className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-amber-500"

                  />

                </div>

              </motion.div>

            )

          })}

        </div>

      </div>

    </section>
  )
}


export default Skills