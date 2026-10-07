import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaArrowRight, FaCalendarAlt } from 'react-icons/fa'

const posts = [
  {
    id: 1,
    title: 'Comment j’ai construit mon premier SaaS avec Next.js',
    excerpt: 'Retour d’expérience complet sur l’architecture, les choix techniques et les leçons apprises.',
    date: '15 Sept 2025',
    category: 'Development',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=350&fit=crop',
    url: 'https://ton-blog.com/premier-saas-nextjs', // ← mets le vrai lien de ton article
  },
  {
    id: 2,
    title: 'Les meilleurs outils IA pour les développeurs en 2025',
    excerpt: 'Claude, Grok, Cursor, v0... Comment je les utilise au quotidien pour 3x ma productivité.',
    date: '02 Oct 2025',
    category: 'AI',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=350&fit=crop',
    url: 'https://ton-blog.com/outils-ia-2025',
  },
  {
    id: 3,
    title: 'Pourquoi Tailwind CSS reste mon choix n°1',
    excerpt: 'Comparaison honnête avec les autres solutions et pourquoi je ne change pas.',
    date: '28 Août 2025',
    category: 'CSS',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&h=350&fit=crop',
    url: 'https://ton-blog.com/tailwind-css-choix',
  },
]

const Blog = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section id="blog" ref={ref} className="py-24 px-4 sm:px-6 bg-zinc-950/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <p className="text-yellow-400 font-semibold text-sm tracking-[0.25em] uppercase mb-3">
            Latest Articles
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            My <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">Blog</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mt-5 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-yellow-400/40 transition-all group cursor-pointer block"
            >
              {/* Image réelle */}
              <div className="h-44 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-zinc-500 mb-3">
                  <span className="px-2.5 py-1 bg-yellow-400/10 text-yellow-400 rounded-full font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt className="w-3 h-3" /> {post.date}
                  </span>
                  <span>• {post.readTime}</span>
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-yellow-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-yellow-400 text-sm font-medium">
                  Lire l’article <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog