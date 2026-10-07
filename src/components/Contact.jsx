import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { FaEnvelope, FaMapMarkedAlt, FaPhone, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch('https://formspree.io/f/mljgezkq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message envoyé avec succès ! Je vous répondrai sous peu.' })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus({ type: 'error', message: 'Une erreur est survenue. Veuillez réessayer.' })
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Erreur réseau. Vérifiez votre connexion.' })
    } finally {
      setIsLoading(false)
    }
  }

  const contactInfo = [
    { icon: FaEnvelope, label: 'Email', value: 'biatenomolas@gmail.com', link: 'mailto:biatenomolas@gmail.com' },
    { icon: FaPhone, label: 'Phone', value: '+228 71 84 88 10', link: 'tel:+22871848810' },
    { icon: FaMapMarkedAlt, label: 'Localisation', value: 'Lomé, Togo', link: '#' },
  ]

  const socialLinks = [
    { icon: FaGithub, link: 'https://github.com/SalomonBiate', label: 'GitHub' },
    { icon: FaLinkedin, link: 'https://www.linkedin.com/in/salomon-biate-b6aa3433a/', label: 'LinkedIn' },
    { icon: FaTwitter, link: 'https://x.com/BiateTech', label: 'X' },
    { icon: FaInstagram, link: 'https://www.instagram.com/salomon_biate/', label: 'Instagram' },
    { icon: FaTiktok, link: 'https://www.tiktok.com/@salomon_biate', label: 'TikTok' },
  ]

  return (
    <section id="contact" ref={ref} className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-yellow-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-80 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <p className="text-yellow-400 font-semibold text-sm tracking-[0.3em] uppercase mb-3">Get In Touch</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Contact <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mt-5 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="space-y-5"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center gap-4 p-4 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800 hover:border-yellow-400/40 transition-all group"
                >
                  <div className="p-3 bg-yellow-400/10 rounded-xl group-hover:bg-yellow-400/20 transition-colors">
                    <Icon className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-xs">{info.label}</p>
                    <p className="text-white text-sm font-medium group-hover:text-yellow-400 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              )
            })}

            {/* Socials */}
            <div className="pt-4">
              <p className="text-zinc-400 text-sm mb-4">Retrouve-moi aussi sur :</p>
              <div className="flex gap-3">
                {socialLinks.map((social, i) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -4, scale: 1.1 }}
                      className="w-11 h-11 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-yellow-400 hover:border-yellow-400/50 transition-all"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
          >
            <form onSubmit={handleSubmit} className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-zinc-800">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-1.5">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-950/50 border border-zinc-700 rounded-xl text-white text-sm focus:outline-none focus:border-yellow-400/60 transition-colors"
                    placeholder="Ton nom"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-1.5">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-950/50 border border-zinc-700 rounded-xl text-white text-sm focus:outline-none focus:border-yellow-400/60 transition-colors"
                    placeholder="ton@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-1.5">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-zinc-950/50 border border-zinc-700 rounded-xl text-white text-sm focus:outline-none focus:border-yellow-400/60 transition-colors resize-none"
                    placeholder="Parle-moi de ton projet..."
                  />
                </div>

                {status.message && (
                  <div className={`p-3 rounded-xl text-sm ${
                    status.type === 'success'
                      ? 'bg-green-500/15 text-green-400 border border-green-500/30'
                      : 'bg-red-500/15 text-red-400 border border-red-500/30'
                  }`}>
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 bg-yellow-400 text-zinc-950 font-bold rounded-xl text-sm hover:bg-yellow-300 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <AiOutlineLoading3Quarters className="animate-spin h-5 w-5" />
                      Envoi en cours...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact