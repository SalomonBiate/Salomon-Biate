import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Work from './components/Work'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Certificates from './components/Certificates'
{/*import Blog from './components/Blog'*/}
import Contact from './components/Contact'
import Footer from './components/Footer'

// Musique depuis assets
import musicFile from './assets/music.mp3'

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Création de l'audio
  useEffect(() => {
    const audio = new Audio(musicFile)
    audio.loop = true
    audio.volume = 0.8
    audioRef.current = audio

    return () => {
      audio.pause()
      audio.src = ''
    }
  }, [])

  const togglePlay = async () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      try {
        await audioRef.current.play()
        setIsPlaying(true)
      } catch (err) {
        console.log('Autoplay bloqué, clique sur le bouton Play')
      }
    }
  }

  const toggleMute = () => {
    if (!audioRef.current) return
    audioRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  return (
    <div className="bg-zinc-950 text-white min-h-screen relative overflow-x-hidden selection:bg-yellow-400 selection:text-zinc-950 font-ubuntu">
      {/* Curseur custom */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-yellow-400/80 pointer-events-none z-50 flex items-center justify-center mix-blend-difference"
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: 'spring', stiffness: 400, damping: 28, mass: 0.4 }}
      >
        <div className="w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_12px_3px_rgba(250,204,21,0.6)]" />
      </motion.div>

      {/* Boutons musique */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
        <button
          onClick={toggleMute}
          className="w-11 h-11 rounded-full bg-zinc-900/90 border border-zinc-700 flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-zinc-950 transition-all shadow-lg"
        >
          {isMuted ? <FaVolumeMute className="w-4 h-4" /> : <FaVolumeUp className="w-4 h-4" />}
        </button>
        <button
          onClick={togglePlay}
          className="w-12 h-12 rounded-full bg-yellow-400 text-zinc-950 flex items-center justify-center hover:bg-yellow-300 transition-all shadow-lg shadow-yellow-400/30"
        >
          {isPlaying ? <FaPause className="w-4 h-4" /> : <FaPlay className="w-4 h-4 ml-0.5" />}
        </button>
      </div>

      <Navbar />
      <Hero />
      <Skills />
      <Work />
      <Services />
      <Testimonials />
      <Certificates />
      {/*<Blog />*/}
      <Contact />
      <Footer />
    </div>
  )
}

export default App