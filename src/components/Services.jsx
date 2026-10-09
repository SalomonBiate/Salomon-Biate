import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { 
    FaChartLine, 
    FaCode,
    FaMobileAlt, 
    FaPalette, 
    FaServer, 
    FaShoppingCart 
} from "react-icons/fa";

const Services = () => {
    const ref = useRef(null);
    const containerRef = useRef(null);
    // Correction de la casse : isInView (V majuscule)
    const isInView = useInView(ref, { once: false, amount: 0.2 });
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [dragOffset, setDragOffset] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    const services = [
        {
            id: 1,
            title: 'Web Development',
            desc: 'Je conçois et développe des sites et applications web modernes, responsives et adaptés aux besoins du projet. Je travaille principalement avec React, JavaScript et les technologies modernes du développement web.',
            icon: FaCode,
            color: '#F7DF1E' 
        },
        {
            id: 2,
            title: 'UI/UX Design',
            desc: 'Je crée des interfaces modernes, propres et intuitives, avec une attention particulière portée à la simplicité, à la cohérence visuelle et à l’expérience utilisateur. Je transforme les idées et maquettes en interfaces web fonctionnelles.',
            icon: FaPalette,
            color: '#FF6B6B' 
        },
        {
            id: 3,
            title: 'Mobile Apps',
            desc: 'Je développe des applications mobiles orientées vers des besoins concrets, avec une attention particulière portée à l ergonomie, aux performances et à l accessibilité. Je m intéresse notamment aux applications cross-platform et aux solutions mobiles intégrant l IA.',
            icon: FaMobileAlt,
            color: '#4ECDC4' 
        },
        {
            id: 4,
            title: 'Backend Systems',
            desc: 'Je développe la partie backend des applications : API REST, logique métier, authentification, gestion des données et communication entre les différents services.Je travaille notamment avec Node.js, Express et PostgreSQL, et je m intéresse à la conception d architectures backend fiables, maintenables et évolutives.',
            icon: FaServer,
            color: '#45B7D1' 
        },
        {
            id: 5,
            title: 'E-Commerce',
            desc: 'Je conçois des fonctionnalités pour des plateformes e-commerce : présentation des produits, gestion des utilisateurs, paniers, commandes et intégration avec un backend. L objectif est de construire une expérience d achat simple et efficace.',
            icon: FaShoppingCart,
            color: '#F9CA24' 
        },
        {
            id: 6,
            title: 'Analytics & SEO',
            desc: "J'optimise les applications et sites web pour améliorer leur visibilité, leur structure et leur performance. Je m'intéresse notamment aux bonnes pratiques SEO, à l'organisation du contenu et aux performances techniques.",
            icon: FaChartLine,
            color: '#6C5CE7' 
        }
    ];

    useEffect(() => {
        const updateItems = () => {
            setItemsPerPage(
                window.innerWidth < 640 
                    ? 1 
                    : window.innerWidth < 1024 ? 2 : 3
            );
        };
        updateItems();
        window.addEventListener('resize', updateItems);
        return () => window.removeEventListener('resize', updateItems);
    }, []);

    const maxIndex = Math.max(0, services.length - itemsPerPage);
    const totalPages = Math.ceil(services.length / itemsPerPage);

    const handlePointerDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
        setDragOffset(0);
        containerRef.current?.setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e) => {
        if (isDragging) setDragOffset(startX - e.clientX);
    };

    const handlePointerUp = (e) => {
        if (!isDragging) return;
        setIsDragging(false);
        containerRef.current?.releasePointerCapture?.(e.pointerId);

        if (dragOffset > 50) {
            setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
        } else if (dragOffset < -50) {
            setCurrentIndex((prev) => Math.max(prev - 1, 0));
        }
        setDragOffset(0);
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: (index) => ({
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: {
                type: 'spring',
                damping: 15, 
                stiffness: 100, 
                delay: index * 0.1
            }
        })
    };

    // Correction du nom de variable : cardWidth
    const cardWidth = itemsPerPage === 1
        ? '100%'
        : itemsPerPage === 2
        ? 'calc((100% - 24px) / 2)'
        : 'calc((100% - 48px) / 3)';

    return (
        <section 
            id="services" 
            ref={ref} 
            className="lg:min-h-screen bg-zinc-950 text-white py-24 sm:py-28 lg:py-24 px-4 font-ubuntu scroll-m-4 relative overflow-hidden"
        >
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 sm:mb-14"
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.2 }}
                        className="text-yellow-400 font-semibold text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3"
                    > 
                        What I Do 
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold"
                    >
                        My <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">Services</span>
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : {}}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="w-20 sm:w-24 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"
                    />     
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5 }}
                        className="text-zinc-400 text-sm sm:text-lg max-w-2xl mx-auto mt-5 sm:mt-6 px-2 font-light leading-relaxed"
                    >   
                        Je transforme les problèmes concrets en Afrique en solutions numériques innovantes.
                    </motion.p>
                </motion.div>

                <div 
                    ref={containerRef}
                    className="relative overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y select-none"
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    onPointerCancel={() => {
                        setIsDragging(false);
                        setDragOffset(0);
                    }}
                >
                    <motion.div
                        className="flex gap-6"
                        style={{
                            transform: `translateX(calc(-${currentIndex * (100 / itemsPerPage)}% - ${currentIndex * (24 / itemsPerPage)}px - ${dragOffset}px))`,
                            transition: isDragging ? 'none' : 'transform 0.5s ease-in-out'
                        }}
                    >
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={service.id}
                                    custom={index}
                                    variants={cardVariants}
                                    initial="hidden"
                                    animate={isInView ? 'visible' : 'hidden'}
                                    style={{ minWidth: cardWidth }}
                                    className="group"
                                >
                                    <div className="relative bg-zinc-800/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-zinc-700/30 hover:border-yellow-400/50 shadow-lg hover:shadow-yellow-400/10 transition-all duration-300 h-full min-h-[280px] flex flex-col items-start overflow-hidden">
                                        <div
                                            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                            style={{
                                                background: `radial-gradient(circle at 50% 0%, ${service.color}15, transparent 70%)`
                                            }}
                                        />
                                        <div
                                            className="text-3xl sm:text-4xl mb-4 transition-transform duration-300 group-hover:scale-110 relative z-10"
                                            style={{ color: service.color }}
                                        >
                                            <Icon />
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors duration-300 relative z-10">
                                            {service.title}
                                        </h3>
                                        <p className="text-zinc-400 text-sm leading-relaxed z-10 group-hover:text-zinc-300 transition-colors duration-300">
                                            {service.desc}
                                        </p>
                                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-yellow-400 group-hover:w-2/3 transition-all duration-300 rounded-full" />
                                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <span className="text-yellow-400 text-xs sm:text-sm font-semibold">
                                                Learn More 
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

                <div className="flex justify-center items-center gap-2 mt-6">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(Math.min(index * itemsPerPage, maxIndex))}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                Math.floor(currentIndex / itemsPerPage) === index
                                    ? 'w-8 bg-yellow-400'
                                    : 'w-2 bg-zinc-600 hover:bg-zinc-400'
                            }`}
                            aria-label={`Go to page ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;