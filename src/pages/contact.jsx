import { useState } from 'react'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Form submission logic would go here
        console.log('Form submitted:', formData)
        alert('Thank you for your message! I will get back to you soon.')
        setFormData({ name: '', email: '', message: '' })
    }

    const socialLinks = [
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/james-clarke',
            icon: 'work',
            description: 'Academic & Professional History',
        },
        {
            name: 'GitHub',
            url: 'https://github.com/james-clarke',
            icon: 'terminal',
            description: 'Computational Research & Code',
        },
        {
            name: 'Elite Prospects',
            url: 'https://eliteprospects.com/player/james-clarke',
            icon: 'sports_hockey',
            description: 'Athletic Stats & Scouting Reports',
        },
    ]

    return (
        <div className="pt-32 pb-24">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-8 mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                    <div className="lg:col-span-8">
                        <h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter text-on-background leading-none">
                            Get in <br /><span className="text-secondary italic">Touch</span>
                        </h1>
                        <p className="mt-8 text-xl text-on-primary-fixed-variant max-w-xl leading-relaxed">
                            Bridging the gap between athletic peak performance and academic rigor. Reach out for collaborations, research inquiries, or scouting discussions.
                        </p>
                    </div>
                    <div className="lg:col-span-4 flex justify-end">
                        <div className="relative w-full aspect-square bg-surface-container overflow-hidden rounded-lg group max-w-sm">
                            <img
                                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600"
                                alt="Kinetic Scholar"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    {/* Contact Form */}
                    <section className="space-y-12">
                        <div className="space-y-4">
                            <span className="font-label text-xs font-bold tracking-[0.2em] text-secondary uppercase">
                                Inquiry Portal
                            </span>
                            <h2 className="font-headline text-3xl font-bold">Send a Message</h2>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-10">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder=" "
                                    required
                                    className="peer block w-full border-0 border-b-2 border-outline-variant bg-transparent py-4 px-0 text-on-surface focus:border-secondary focus:ring-0 transition-colors outline-none"
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute top-4 left-0 -z-10 origin-[0] -translate-y-8 scale-75 transform text-sm font-label uppercase tracking-widest text-on-surface-variant duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-secondary"
                                >
                                    Full Name
                                </label>
                            </div>

                            <div className="relative">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder=" "
                                    required
                                    className="peer block w-full border-0 border-b-2 border-outline-variant bg-transparent py-4 px-0 text-on-surface focus:border-secondary focus:ring-0 transition-colors outline-none"
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute top-4 left-0 -z-10 origin-[0] -translate-y-8 scale-75 transform text-sm font-label uppercase tracking-widest text-on-surface-variant duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-secondary"
                                >
                                    Email Address
                                </label>
                            </div>

                            <div className="relative">
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder=" "
                                    rows="4"
                                    required
                                    className="peer block w-full border-0 border-b-2 border-outline-variant bg-transparent py-4 px-0 text-on-surface focus:border-secondary focus:ring-0 transition-colors resize-none outline-none"
                                ></textarea>
                                <label
                                    htmlFor="message"
                                    className="absolute top-4 left-0 -z-10 origin-[0] -translate-y-8 scale-75 transform text-sm font-label uppercase tracking-widest text-on-surface-variant duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-secondary"
                                >
                                    Your Message
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="group flex items-center justify-between w-full md:w-auto md:min-w-[240px] bg-primary text-on-primary px-8 py-5 font-headline font-bold text-sm uppercase tracking-widest hover:scale-102 transition-all duration-300 shadow-xl"
                            >
                                <span>Send Transmission</span>
                                <span className="material-symbols-outlined ml-4 group-hover:translate-x-2 transition-transform">
                                    arrow_forward
                                </span>
                            </button>
                        </form>
                    </section>

                    {/* Info & Social Links */}
                    <section className="space-y-16">
                        {/* Info Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="bg-surface-container-low p-8 kinetic-border">
                                <span className="font-label text-[10px] uppercase tracking-widest text-secondary block mb-4">
                                    Location
                                </span>
                                <p className="font-headline text-lg font-bold">Boston / Montreal</p>
                                <p className="text-sm text-on-surface-variant mt-2 font-body">
                                    Available for global transit
                                </p>
                            </div>

                            <div className="bg-surface-container-low p-8 kinetic-border">
                                <span className="font-label text-[10px] uppercase tracking-widest text-secondary block mb-4">
                                    Email
                                </span>
                                <p className="font-headline text-lg font-bold">17ClarkeJa@gmail.com</p>
                                <p className="text-sm text-on-surface-variant mt-2 font-body">
                                    Avg response: 4 hours
                                </p>
                            </div>
                        </div>

                        {/* Professional Links */}
                        <div className="space-y-8">
                            <h3 className="font-headline text-xl font-bold border-b border-outline-variant pb-4">
                                Professional Network
                            </h3>
                            <div className="grid grid-cols-1 gap-4">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center justify-between p-6 bg-surface-container-lowest hover:bg-surface-container-highest transition-colors duration-300"
                                    >
                                        <div className="flex items-center gap-6">
                                            <span className="material-symbols-outlined text-secondary">
                                                {link.icon}
                                            </span>
                                            <div>
                                                <p className="font-headline font-bold text-on-background">
                                                    {link.name}
                                                </p>
                                                <p className="text-xs font-label uppercase text-on-surface-variant">
                                                    {link.description}
                                                </p>
                                            </div>
                                        </div>
                                        <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">
                                            open_in_new
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Decorative Quote */}
                        <div className="relative bg-primary-container p-12 overflow-hidden rounded-xl">
                            <div className="relative z-10">
                                <h4 className="text-on-primary-container font-headline text-2xl font-bold italic leading-tight">
                                    "The mind is a muscle; <br />keep it flexed."
                                </h4>
                            </div>
                            <span className="absolute -right-4 -bottom-8 material-symbols-outlined text-white/5 text-9xl select-none">
                                fitness_center
                            </span>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Contact
