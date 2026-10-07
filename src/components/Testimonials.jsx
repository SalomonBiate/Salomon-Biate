import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import test1 from "../assets/test1.png";
import test2 from "../assets/test2.png";
import test3 from "../assets/test3.png";
import test4 from "../assets/test4.png";

const Testimonials = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const testimonials = [
    {
      id: 1,
      name: "Kimmich Sarah",
      role: "CEO, TechCrop",
      image: test1,
      text: "Ce que j'apprécie chez Salomon, c'est sa capacité à prendre des initiatives et à transformer une idée en projet concret. Il ne se contente pas de parler de technologie, il cherche réellement à construire.",
      rating: 5,
    },
    {
      id: 2,
      name: "Emma Sarah",
      role: "CEO, TechCrop",
      image: test2,
      text: "Salomon est quelqu'un de très impliqué dans ce qu'il entreprend. Il cherche à comprendre les problèmes, propose des solutions et n'hésite pas à apprendre rapidement lorsqu'il rencontre une difficulté.",
      rating: 5,
    },
    {
      id: 3,
      name: "Mary Sarah",
      role: "CEO, TechCrop",
      image: test3,
      text: "Salomon apporte une bonne énergie dans une équipe. Il est ouvert aux échanges, accepte les retours et cherche toujours à faire avancer le travail collectif.",
      rating: 5,
    },
    {
      id: 4,
      name: "Kimmich Sarah",
      role: "CEO, TechCrop",
      image: test4,
      text: "Salomon montre un réel intérêt pour le développement de la communauté tech. Il cherche à connecter les personnes, partager les connaissances et créer des opportunités d'apprentissage.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 640) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
      setCurrentIndex(0);
    };
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

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

  const cardWidth =
    itemsPerPage === 1
      ? "100%"
      : itemsPerPage === 2
      ? "calc((100% - 20px) / 2)"
      : "calc((100% - 40px) / 3)";

  return (
    <section
      id="testimonials"
      ref={ref}
      className="bg-zinc-950 text-white py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-yellow-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10"
        >
          <p className="text-yellow-400 font-semibold text-xs tracking-[0.25em] uppercase mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            What People{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Say
            </span>
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mt-3 rounded-full" />
        </motion.div>

        {/* Slider */}
        <div
          ref={containerRef}
          className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => {
            setIsDragging(false);
            setDragOffset(0);
          }}
        >
          <motion.div
            className="flex gap-5"
            style={{
              transform: `translateX(calc(-${(currentIndex * 100) / itemsPerPage}% - ${(currentIndex * 20) / itemsPerPage}px - ${dragOffset}px))`,
              transition: isDragging ? "none" : "transform 0.45s ease-out",
            }}
          >
            {testimonials.map((test, i) => (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 }}
                style={{ minWidth: cardWidth, width: cardWidth }}
                className="group shrink-0"
              >
                {/* Card plus compacte */}
                <div className="relative bg-zinc-900/60 backdrop-blur-sm rounded-xl p-5 border border-zinc-800 hover:border-yellow-400/40 transition-all duration-300 h-full flex flex-col">
                  
                  {/* Quote icon petit */}
                  <FaQuoteLeft className="absolute top-4 right-4 w-5 h-5 text-yellow-400/25" />

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(test.rating)].map((_, i) => (
                      <FaStar key={i} className="w-3.5 h-3.5 text-yellow-400" />
                    ))}
                  </div>

                  {/* Texte */}
                  <p className="text-zinc-300 text-[13px] leading-relaxed mb-5 flex-1">
                    "{test.text}"
                  </p>

                  {/* Auteur */}
                  <div className="flex items-center gap-3 pt-3 border-t border-zinc-800/80">
                    <img
                      src={test.image}
                      alt={test.name}
                      className="w-9 h-9 rounded-full object-cover border border-yellow-400/30"
                    />
                    <div>
                      <h4 className="text-white font-medium text-sm group-hover:text-yellow-400 transition-colors">
                        {test.name}
                      </h4>
                      <p className="text-zinc-500 text-xs">{test.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-7">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() =>
                setCurrentIndex(Math.min(index * itemsPerPage, maxIndex))
              }
              className={`h-1.5 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / itemsPerPage) === index
                  ? "w-6 bg-yellow-400"
                  : "w-1.5 bg-zinc-600 hover:bg-zinc-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;