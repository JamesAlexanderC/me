import { Link } from 'react-router-dom'

function Sporting() {
    const stats = [
        { label: 'Total Games', value: '42', note: 'Regular season + playoffs' },
        { label: 'Goals Scored', value: '18', trend: '+12% vs LY', trendUp: true },
        { label: 'Assists', value: '31', note: 'Primary playmaker role' },
        { label: 'PIM', value: '12', note: 'Disciplined defensive play' },
    ]

    const galleryImages = [
        {
            title: 'Power Play Execution',
            subtitle: 'State Finals',
            size: 'wide',
            image: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=800',
        },
        {
            title: 'Leadership in Focus',
            subtitle: 'Team Huddle',
            size: 'tall',
            image: 'https://images.unsplash.com/photo-1516546453174-5e1098a4b4af?w=800',
        },
    ]

    return (
        <div className="pt-32 pb-24">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-8 mb-28">
                <div className="relative overflow-hidden rounded-xl h-[600px] bg-primary-container group"
                >
                    <img
                        src="https://images.unsplash.com/photo-1516546453174-5e1098a4b4af?w=1200"
                        alt="Action Shot"
                        className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-transparent to-transparent"></div>
                    <div className="absolute bottom-12 left-12 max-w-2xl">
                        <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container font-label text-xs tracking-widest uppercase mb-4"
                        >
                            Elite Athlete Profile
                        </span>
                        <h1 className="text-white font-headline font-extrabold text-5xl md:text-7xl tracking-tighter leading-none mb-6"
                        >
                            POWER ON <br /> <span className="text-secondary-fixed">THE ICE</span>
                        </h1>
                        <p className="text-primary-fixed-dim text-lg md:text-xl font-medium max-w-lg">
                            Balancing clinical precision with explosive athleticism. A journey through competitive hockey and academic excellence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Current Team Section */}
            <section className="max-w-7xl mx-auto px-8 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div className="md:col-span-4 flex flex-col justify-center">
                        <h2 className="font-headline font-extrabold text-5xl text-on-surface mb-6 leading-tight">
                            Current Team
                        </h2>
                        <p className="text-on-surface-variant font-body leading-relaxed mb-8">
                            Currently competing at the collegiate level, where tactical intelligence meets high-speed execution.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="h-[2px] w-12 bg-primary"></div>
                            <span className="font-label text-sm uppercase tracking-widest font-bold">Season 2024-2025</span>
                        </div>
                    </div>

                    <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-surface-container-highest p-8 rounded-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <span className="material-symbols-outlined text-[100px]">sports_hockey</span>
                            </div>
                            <h3 className="font-headline font-bold text-2xl mb-2">Varsity Knights</h3>
                            <p className="font-label text-secondary font-bold text-sm mb-6">NCAA Division I</p>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="font-body text-on-surface-variant">Position</span>
                                    <span className="font-label font-bold">Left Wing</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-body text-on-surface-variant">Jersey</span>
                                    <span className="font-label font-bold">#24</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-body text-on-surface-variant">Status</span>
                                    <span className="font-label font-bold text-error">Active</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/15 flex flex-col justify-center items-center text-center">
                            <div className="w-32 h-32 bg-surface-container-high rounded-full flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-6xl text-secondary">emoji_events</span>
                            </div>
                            <span className="font-label text-xs uppercase tracking-tighter text-outline mb-1">Affiliation</span>
                            <p className="font-headline font-extrabold text-xl">The Royal Athletic Institute</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-surface-container py-24 mb-32">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="font-headline font-extrabold text-4xl mb-2">Performance Analytics</h2>
                            <p className="text-on-surface-variant font-body">The data behind the explosive energy.</p>
                        </div>
                    </div>

                    <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-8">
                        {stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="min-w-[280px] bg-surface-container-lowest p-8 rounded-xl border-l-4 border-primary"
                            >
                                <span className="font-label text-xs text-secondary font-bold uppercase tracking-widest mb-4 block">
                                    {stat.label}
                                </span>
                                <div className="text-6xl font-headline font-black mb-2">{stat.value}</div>
                                {stat.trend && (
                                    <div className="flex items-center text-error font-bold text-sm">
                                        <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
                                        {stat.trend}
                                    </div>
                                )}
                                {stat.note && (
                                    <p className="text-on-surface-variant text-sm">{stat.note}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Journey Section */}
            <section className="max-w-7xl mx-auto px-8 mb-32">
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="lg:w-1/2 relative">
                        <div className="aspect-[4/5] overflow-hidden rounded-lg">
                            <img
                                src="https://images.unsplash.com/photo-1516546453174-5e1098a4b4af?w=800"
                                alt="Ice Rink"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-64 aspect-square bg-surface-container-highest p-4 rounded-lg hidden lg:block">
                            <img
                                src="https://images.unsplash.com/photo-1515703407324-5f81abd77f09?w=400"
                                alt="Training"
                                className="w-full h-full object-cover rounded-sm"
                            />
                        </div>
                    </div>

                    <div className="lg:w-1/2 pt-12">
                        <h2 className="font-headline font-extrabold text-5xl mb-8 tracking-tighter">
                            About my <br />hockey journey
                        </h2>
                        <div className="space-y-6 font-body text-lg text-on-surface-variant leading-relaxed">
                            <p>
                                Starting at the age of five on frozen ponds in Ontario, the rink has always been my laboratory. For me, hockey is a game of angles, physics, and split-second cognitive processing.
                            </p>
                            <p>
                                Transitioning through AAA minor hockey to the junior leagues, I learned that true leadership isn't just about scoring; it's about elevating the collective energy of the room. My journey is defined by the resilience required to balance 5:00 AM practices with advanced calculus and research projects.
                            </p>
                            <div className="pt-8 grid grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-headline font-bold text-on-surface">15+ Years</h4>
                                    <p className="text-sm font-label text-outline uppercase tracking-wider">Competitive Experience</p>
                                </div>
                                <div>
                                    <h4 className="font-headline font-bold text-on-surface">3 Titles</h4>
                                    <p className="text-sm font-label text-outline uppercase tracking-wider">Regional Championships</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Action Gallery Preview */}
            <section className="max-w-7xl mx-auto px-8 mb-32">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="font-headline font-extrabold text-4xl">Action Archive</h2>
                    <Link
                        to="/gallery"
                        className="inline-flex items-center gap-2 font-bold text-sm group"
                    >
                        View Full Gallery
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 relative h-96 rounded-xl overflow-hidden group">
                        <img
                            src={galleryImages[0].image}
                            alt={galleryImages[0].title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                            <span className="font-label text-white text-xs uppercase tracking-widest">
                                {galleryImages[0].title} • {galleryImages[0].subtitle}
                            </span>
                        </div>
                    </div>
                    <div className="relative h-96 rounded-xl overflow-hidden group">
                        <img
                            src={galleryImages[1].image}
                            alt={galleryImages[1].title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                            <span className="font-label text-white text-xs uppercase tracking-widest">
                                {galleryImages[1].title}
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Sporting
