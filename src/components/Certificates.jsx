import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaCertificate, FaTimes, FaExternalLinkAlt } from 'react-icons/fa'

// Importe tes images de certificats (mets-les dans assets/)
// import cert1 from '../assets/cert1.png'
// import cert2 from '../assets/cert2.png'
// etc.

const certificates = [
  {
    id: 1,
    title: 'React Advanced Certification',
    issuer: 'Meta / Coursera',
    year: '2024',
    description: 'Certification avancée sur React, Hooks, Performance et Architecture. Couvre les patterns avancés, le state management et l’optimisation.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop', // remplace par ton image
    link: '#', // lien vers le certificat officiel si tu en as un
  },
  {
    id: 2,
    title: 'Full-Stack JavaScript',
    issuer: 'Udemy',
    year: '2023',
    description: 'Node.js, Express, MongoDB, Authentication et déploiement. Projet final d’une application complète.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
    link: '#',
  },
  {
    id: 3,
    title: 'UI/UX Design Specialization',
    issuer: 'Google',
    year: '2024',
    description: 'Design thinking, Figma, prototypes et tests utilisateurs. Parcours complet Google UX Design.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    link: '#',
  },
  {
    id: 4,
    title: 'JavaScript Algorithms',
    issuer: 'freeCodeCamp',
    year: '2023',
    description: 'Structures de données, algorithmes et résolution de problèmes en JavaScript.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
    link: '#',
  },
  {
    id: 5,
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    year: '2022',
    description: 'HTML, CSS, Flexbox, Grid et design responsive mobile-first.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
    link: '#',
  },
]

const Certificates = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [selected, setSelected] = useState(null)

  return (
    <section id="certificates" ref={ref} className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <p className="text-yellow-400 font-semibold text-sm tracking-[0.25em] uppercase mb-3">
            Achievements
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Certificates & <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">Awards</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mt-5 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelected(cert)}
              className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-yellow-400/40 transition-all group cursor-pointer"
            >
              {/* Image du certificat */}
              <div className="h-44 overflow-hidden relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
                <div className="absolute bottom-3 left-3 p-2 bg-yellow-400/20 rounded-lg text-yellow-400">
                  <FaCertificate className="w-5 h-5" />
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-lg group-hover:text-yellow-400 transition-colors line-clamp-1">
                  {cert.title}
                </h3>
                <p className="text-yellow-400/80 text-sm mt-1">{cert.issuer} • {cert.year}</p>
                <p className="text-zinc-400 text-sm mt-2 line-clamp-2">{cert.description}</p>
                <p className="text-yellow-400 text-xs mt-3 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Cliquer pour voir plus →
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-zinc-900 border border-zinc-700 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl"
            >
              <div className="relative h-56 sm:h-72">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-zinc-950/80 text-white flex items-center justify-center hover:bg-yellow-400 hover:text-zinc-950 transition-all"
                >
                  <FaTimes className="w-4 h-4" />
                </button>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-white mb-1">{selected.title}</h3>
                <p className="text-yellow-400 text-sm mb-4">{selected.issuer} • {selected.year}</p>
                <p className="text-zinc-300 leading-relaxed mb-6">{selected.description}</p>
                {selected.link && selected.link !== '#' && (
                  <a
                    href={selected.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-yellow-400 text-zinc-950 font-semibold rounded-full hover:bg-yellow-300 transition-all"
                  >
                    Voir le certificat <FaExternalLinkAlt className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Certificates