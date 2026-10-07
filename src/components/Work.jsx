import { useEffect, useRef, useState } from 'react'
import work1 from '../assets/work1.png'
import work2 from '../assets/work2.png'
import work3 from '../assets/work3.png'
import work4 from '../assets/work4.png'
import work5 from '../assets/work5.png'
import work6 from '../assets/work6.png'
import work7 from '../assets/work7.png'
import { motion, useInView } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const PROJECTS = [
  {
    id: 1,
    title: 'Image Slider / Diaporama',
    desc: 'Un diaporama d’images interactif conçu pour présenter différentes destinations à travers une interface immersive. Le projet met l’accent sur les animations, les transitions et les interactions utilisateur pour créer une expérience visuelle fluide.',
    image: work1,
    technologies: ['Html', 'JavaScript', 'CSS'],
    github: 'https://github.com/SalomonBiate/diaporama-d-images',     // ← LIEN GITHUB ICI
    live: 'https://diaporama-d-images.vercel.app/',                      // ← LIEN LIVE DEMO ICI
  },
  {
    id: 2,
    title: 'Music Player',
    desc: 'Un lecteur de musique web moderne permettant d’explorer et de contrôler la lecture audio à travers une interface simple et interactive. Ce projet m’a permis de travailler sur les interactions utilisateur et la gestion de la lecture multimédia côté frontend.',
    image: work2,
    technologies: ['Html', 'JavaScript', 'CSS'],
    github: 'https://github.com/SalomonBiate/music-player',
    live: 'https://music-player-sandy-theta.vercel.app/',
  },
  // ... fais pareil pour les 6 projets
  {
    id: 3,
    title: 'Webpage Dark Mode',
    desc: 'Une interface web moderne avec un design sombre, conçue pour mettre en pratique la création de layouts responsives, la navigation entre sections et la construction d’une expérience utilisateur claire et élégante.',
    image: work3,
    technologies: ['Html', 'JavaScript', 'CSS'],
    github: 'https://github.com/SalomonBiate/webpage-darckmode',     // ← LIEN GITHUB ICI
    live: 'https://webpage-darckmode.vercel.app/',                      // ← LIEN LIVE DEMO ICI
  },
  {
    id: 4,
    title: 'EduIA',
    desc: 'EduIA est une plateforme éducative basée sur l’IA, conçue pour aider les étudiants à apprendre plus efficacement. Elle propose des ressources pédagogiques, des résumés de cours et des outils intelligents pour faciliter l’apprentissage et l’accès au contenu éducatif.',
    image: work4,
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/SalomonBiate/EDU_IA',     // ← LIEN GITHUB ICI
    live: 'https://EduiIA.com',                      // ← LIEN LIVE DEMO ICI
  },
]

const getItemsPerPages = () => {
    if (typeof window === 'undefined') return 3;
    const width = window.innerWidth;
    if (width < 640 ) return 1;
    if (width < 1024 ) return 2;
    return 3;
};

const getCardWidth = (itemsPerPage) => {
    if (itemsPerPage === 1 ) return '100%';
    if (itemsPerPage === 2 ) return 'calc(50% - 12px)';
    return 'calc(33.333% - 16px)';
};

const Work = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

    const [currentIndex, setCurrentIndex] = useState(0);
    // Correction de l'initialisation du state
    const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPages()); 
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [dragOffset, setDragOffset] = useState(0);

    const totalPages = Math.ceil(PROJECTS.length / itemsPerPage);
    const maxIndex = Math.max(0, PROJECTS.length - itemsPerPage);
    const cardWidth = getCardWidth(itemsPerPage);
    const translatePercentage = currentIndex * (100 / itemsPerPage);
    const currentPage = Math.floor(currentIndex / itemsPerPage);

    useEffect(() => {
        const handleResize = () => {
            setItemsPerPage(getItemsPerPages());
            setCurrentIndex(0);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handlePointerDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
        setDragOffset(0);
    };

    const handlePointerMove = (e) => {
        if (!isDragging) return;
        setDragOffset(startX - e.clientX);
    };

    const handlePointerUp = () => {
        if (!isDragging) return;
        setIsDragging(false);

        if (dragOffset > 50) {
            setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
        } else if ( dragOffset < -50 ) {
            setCurrentIndex((prev) => Math.max(prev - 1, 0));
        }
        setDragOffset(0);
    };

    const handlePointerCancel = () => {
        setIsDragging(false);
        setDragOffset(0);
    };

    const goToPage = (pageIndex) => {
        // Correction de l'opérateur (= transformé en *)
        setCurrentIndex(pageIndex * itemsPerPage);
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: (index) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: 'spring', // Corrigé : type au lieu de Type
                damping: 15,
                stiffness: 100,
                delay: index * 0.1
            },
        })
    };

  return (
    <section
        id='work'
        ref={sectionRef}
        className='lg:min-h-screen bg-zinc-950 text-white py-24 sm:py-28 lg:py-16 px-4 sm:px-6 font-ubuntu scroll-m-16 relative overflow-hidden'
    >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-80 bg-yellow-400/20 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={isInView ? { opacity: 1, y: 0} : {}}
                transition={{ duration: 0.6 }}
                className='text-center mb-8 lg:mb-10'
            >
                <motion.p
                    initial={{ opacity: 0}}
                    animate={isInView ? { opacity: 1} : {}}
                    transition={{ duration: 0.2 }}
                    className='text-yellow-400 font-semibold text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-2'
                >
                    My Portfolio
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0} : {}}
                    transition={{ duration: 0.3 }}
                    className='text-4xl font-bold'
                >
                    Featured {' '}
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                        Projects
                    </span>
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0} : {}}
                    transition={{ duration: 0.3 }}
                    className='w-12 sm:w-16 lg:w-20 h-1 bg-yellow-400 mx-auto mt-3 rounded-full'
                />
            </motion.div>
        </div>

        <div 
            className="relative overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y select-none max-w-6xl mx-auto"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
            onPointerLeave={handlePointerCancel}
        >
            <motion.div
                className='flex gap-6'
                style={{
                    transform: `translateX(calc(-${translatePercentage}% + ${-dragOffset}px))`,
                    transition: isDragging ? 'none' : 'transform 0.5s ease-in-out' // Corrigé : transform
                }}
            >
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={project.id}
                        custom={index}
                        variants={cardVariants}
                        initial='hidden'
                        animate={isInView ? 'visible' : 'hidden'}
                        style={{ minWidth: cardWidth, width: cardWidth }}
                    >
                        <div className="bg-zinc-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden border border-zinc-700/30 hover:border-yellow-400/50 shadow-lg hover:shadow-lg hover:shadow-yellow-400/10 transition-all duration-300 h-full group">
                            <div className="relative overflow-hidden h-40 sm:h-40 lg:h-44">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none'
                                    draggable='false'
                                />
                                {/* Corrigé : bg-gradient-to-t */}
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60"></div>
                                
                                <div className="absolute top-3 right-3 flex gap-2">
                                   {/* Bouton GitHub */}
                                         <a
                                           href={project.github}
                                           target="_blank"
                                           rel="noopener noreferrer"
                                           className="p-2 bg-zinc-900/80 backdrop-blur-sm rounded-full hover:bg-yellow-400 hover:text-zinc-950 transition-all duration-300"
                                           onPointerDown={(e) => e.stopPropagation()}
                                           aria-label="Code source GitHub"
                                         >
                                             <FaGithub className="w-4 h-4" />
                                         </a>

                                         {/* Bouton Live Demo (l'icône à côté) */}
                                         <a
                                           href={project.live}
                                           target="_blank"
                                           rel="noopener noreferrer"
                                           className="p-2 bg-zinc-900/80 backdrop-blur-sm rounded-full hover:bg-yellow-400 hover:text-zinc-950 transition-all duration-300"
                                           onPointerDown={(e) => e.stopPropagation()}
                                           aria-label="Voir le projet en ligne"
                                         >
                                           <FaExternalLinkAlt className="w-4 h-4" />
                                         </a>
                                </div>
                            </div>
                            <div className="p-4 sm:p-5">
                                <h3 className='text-base sm:text-lg font-bold mb-2 text-white group-hover:text-yellow-400 transition-colors duration-300'>
                                    {project.title}
                                </h3>
                                <p className="text-zinc-400 text-xs sm:text-sm mb-4 leading-relaxed">
                                    {project.desc}
                                </p>
                                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className='px-2 sm:px-2.5 py-1 bg-zinc-800/50 text-zinc-300 text-[10px] sm:text-xs rounded-full border border-zinc-700/30 whitespace-nowrap'
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>

        <div className="flex justify-center items-center gap-2 mt-8 sm:mt-10">
            {/* Corrigé : totalPages avec un S et correction de la ternaire */}
            {Array.from({ length: totalPages }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => goToPage(index)}
                    aria-label={`Go to page ${index}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                        currentPage === index
                            ? 'w-8 bg-yellow-400'
                            : 'w-2 bg-zinc-600 hover:bg-zinc-400'
                    }`}
                ></button>
            ))}
        </div>
    </section>
  )
}

export default Work;