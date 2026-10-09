import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
    const ref = useRef(null);
    const isInview = useInView(ref, { once: false, amount: 0.2 });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState({ type: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await fetch('https://formspree.io/f/mljgezkq', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // ✅ Corrigé: 'type' au lieu de 'typr'
                setStatus({
                    type: 'success',
                    message: 'Message envoyé avec succès ! Je vous répondrai sous peu.'
                });
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus({
                    type: 'error',
                    message: 'Une erreur est survenue. Veuillez réessayer.',
                });
            }
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'Erreur réseau. Vérifiez votre connexion.',
            });
        } finally {
            setIsLoading(false);
        }
    };

    const contactInfo = [
        {
            icon: FaEnvelope,
            label: 'Email',
            value: 'biatenomolas@gmail.com',
            link: 'mailto:biatenomolas@gmail.com'
        },
        {
            icon: FaPhone,
            label: 'Phone',
            value: '+228 71848810',
            link: 'tel:+22871848810'
        },
        {
            icon: FaMapMarkedAlt,
            label: 'Localisation',
            value: 'Togo',
            link: '#'
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // ✅ Corrigé: staggerChildren
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                damping: 15, // ✅ Corrigé: damping en minuscule
                stiffness: 100
            }
        }
    };

    return (
        <section 
            id="contact"
            className="min-h-screen bg-zinc-950 text-white py-16 px-6 font-ubuntu scroll-m-16 relative overflow-hidden"
            ref={ref}
        >
            <div className="absolute top-1/3 left-0 w-80 bg-yellow-400/25 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-1/3 right-0 w-96 h-80 bg-yellow-400/25 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={isInview ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInview ? { opacity: 1 } : {}}
                        transition={{ delay: 0.2 }}
                        className="text-yellow-400 font-semibold text-sm tracking-[0.3em] uppercase mb-2"
                    >
                        Get In Touch 
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInview ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 }}
                        className="text-4xl sm:text-5xl font-bold"
                    >
                        Contact{' '}
                        <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                            Me 
                        </span>
                    </motion.h2>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={isInview ? { scaleX: 1 } : {}}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="w-24 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"
                    />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial='hidden'
                    animate={isInview ? 'visible' : 'hidden'}
                    className="grid grid-cols-1 lg:grid-cols-2 mt-6 gap-10 items-start"
                >
                    <motion.div variants={itemVariants} className="space-y-5">
                        {contactInfo.map((info, index) => {
                            const Icon = info.icon;
                            return (
                                <motion.a
                                    key={index}
                                    href={info.link}
                                    target={info.label === 'Localisation' ? '_self' : '_blank'}
                                    rel="noopener noreferrer"
                                    variants={itemVariants}
                                    whileHover={{
                                        x: 8,
                                        transition: { type: 'spring', stiffness: 300 } 
                                    }}
                                    className="flex items-center gap-4 p-4 bg-zinc-800/30 backdrop-blur-sm rounded-2xl border border-zinc-700/30 hover:border-yellow-400/50 transition-all duration-300 group"
                                >
                                    <div className="p-3 bg-yellow-400/10 rounded-xl transition-colors group-hover:bg-yellow-400/20 duration-300">
                                        <Icon className="w-5 h-5 text-yellow-400"/>
                                    </div>
                                    <div>
                                        <p className="text-zinc-500 text-xs">{info.label}</p>
                                        <p className="text-white text-sm font-medium group-hover:text-yellow-400 transition-colors duration-300">
                                            {info.value}
                                        </p>
                                    </div>
                                </motion.a>
                            );
                        })}
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <form 
                            onSubmit={handleSubmit}
                            className="bg-zinc-800/30 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/30 shadow-lg"
                        >
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-1">
                                        Your Name 
                                    </label>
                                    <input 
                                        type="text" 
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2.5 bg-zinc-900/50 border border-zinc-700/30 rounded-xl text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-yellow-400/50 transition-colors duration-300"
                                        placeholder="BIATE Salomon"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-1">
                                        Your Email 
                                    </label>
                                    <input 
                                        type="email" 
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2.5 bg-zinc-900/50 border border-zinc-700/30 rounded-xl text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-yellow-400/50 transition-colors duration-300"
                                        placeholder="biatenomolas@gmail.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-1">
                                        Your Message 
                                    </label>
                                    <textarea 
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        required
                                        className="w-full px-4 py-2.5 bg-zinc-900/50 border border-zinc-700/30 rounded-xl text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-yellow-400/50 transition-colors duration-300 resize-none"
                                        placeholder="Tell Me About Your project ...."
                                    />
                                </div>

                                {status.message && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`p-3 rounded-xl text-sm ${
                                            status.type === 'success'
                                                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                                : 'bg-red-500/20 text-red-400 border border-red-500/30'
                                        }`}
                                    >
                                        {status.message}
                                    </motion.div>
                                )}

                                <motion.button
                                    type="submit"
                                    disabled={isLoading}
                                    whileHover={{ scale: 0.98 }}
                                    className="w-full py-3 bg-yellow-400 text-zinc-950 font-bold rounded-xl text-sm hover:bg-yellow-300 transition-all duration-300 shadow-lg shadow-yellow-400/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <AiOutlineLoading3Quarters className="animate-spin h-5 w-5 text-zinc-950"/>
                                            Sending...
                                        </span>
                                    ) : (
                                        'Send Message'
                                    )}
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;