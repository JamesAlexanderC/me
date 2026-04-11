import { useState } from 'react'

function Gallery() {
    const [activeFilter, setActiveFilter] = useState('All')
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)

    const filters = ['All Moments', 'The Rink', 'The Lab', 'The City']

    const galleryItems = [
        {
            id: 1,
            title: 'Research Symposium 2024',
            category: 'The Lab',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
            size: 'wide',
        },
        {
            id: 2,
            title: 'Morning Drills',
            category: 'The Rink',
            image: 'https://images.unsplash.com/photo-1516546453174-5e1098a4b4af?w=800',
            size: 'tall',
        },
        {
            id: 3,
            title: 'Focus Hours',
            category: 'The Lab',
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
            size: 'normal',
        },
        {
            id: 4,
            title: 'Pre-Game Silence',
            category: 'The Rink',
            image: 'https://images.unsplash.com/photo-1515703407324-5f81abd77f09?w=800',
            size: 'normal',
        },
        {
            id: 5,
            title: 'Urban Exploration',
            category: 'The City',
            image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800',
            size: 'wide',
        },
        {
            id: 6,
            title: 'Executive Session',
            category: 'Portrait',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
            size: 'tall',
        },
        {
            id: 7,
            title: 'Data Structures',
            category: 'The Lab',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
            size: 'normal',
        },
        {
            id: 8,
            title: 'Championship Night',
            category: 'The Rink',
            image: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=800',
            size: 'wide',
        },
    ]

    const filteredItems = activeFilter === 'All Moments' || activeFilter === 'All'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeFilter)

    const openLightbox = (image) => {
        setSelectedImage(image)
        setLightboxOpen(true)
    }

    const closeLightbox = () => {
        setLightboxOpen(false)
        setSelectedImage(null)
    }

    return (
        <div className="pt-32 pb-24">
            {/* Header Section */}
            <header className="max-w-7xl mx-auto px-8 mb-16">
                <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface mb-6">
                    Visual <span className="text-surface-tint italic font-light">Narratives</span>
                </h1>
                <p className="max-w-2xl text-lg text-on-surface-variant leading-relaxed">
                    A curated intersection of academic research, professional milestones, and the raw energy of the rink. Capturing the motion between the scholar and the athlete.
                </p>
            </header>

            {/* Category Filter */}
            <div className="max-w-7xl mx-auto px-8 mb-12">
                <div className="flex flex-wrap gap-4">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-2 text-sm font-label tracking-widest uppercase transition-all duration-200 ${
                                (activeFilter === filter || (filter === 'All Moments' && activeFilter === 'All'))
                                    ? 'bg-primary text-on-primary'
                                    : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            {/* Gallery Bento Grid */}
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => openLightbox(item)}
                            className={`group relative overflow-hidden bg-surface-container-highest cursor-pointer ${
                                item.size === 'wide' ? 'md:col-span-2' : ''
                            } ${
                                item.size === 'tall' ? 'md:row-span-2' : ''
                            } rounded-lg`}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="font-label text-xs text-secondary-fixed mb-2 uppercase tracking-[0.2em]">
                                    {item.category}
                                </span>
                                <h3 className="font-headline text-xl text-on-primary font-bold">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {lightboxOpen && selectedImage && (
                <div
                    className="fixed inset-0 z-[100] bg-primary-container/95 flex items-center justify-center p-4 md:p-8"
                    onClick={closeLightbox}
                >
                    <button
                        className="absolute top-8 right-8 text-on-primary p-2 hover:rotate-90 transition-transform"
                        onClick={closeLightbox}
                    >
                        <span className="material-symbols-outlined text-4xl">close</span>
                    </button>

                    <div
                        className="max-w-5xl w-full flex flex-col md:flex-row gap-8"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex-1 aspect-video bg-black overflow-hidden flex items-center justify-center rounded-lg"
                        >
                            <img
                                src={selectedImage.image}
                                alt={selectedImage.title}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>

                        <div className="w-full md:w-80 flex flex-col justify-center text-on-primary"
                        >
                            <span className="font-label text-sm text-primary-fixed mb-4 uppercase tracking-widest">
                                {selectedImage.category}
                            </span>
                            <h2 className="font-headline text-3xl font-bold mb-6">{selectedImage.title}</h2>
                            <p className="text-primary-fixed-dim text-sm leading-relaxed mb-8">
                                A moment captured in the journey between academic rigor and athletic intensity.
                            </p>
                            <div className="space-y-4">
                                <div className="flex justify-between border-b border-outline-variant/20 pb-2">
                                    <span className="text-xs font-label uppercase text-on-primary-container">Category</span>
                                    <span className="text-xs font-label">{selectedImage.category}</span>
                                </div>
                                <div className="flex justify-between border-b border-outline-variant/20 pb-2">
                                    <span className="text-xs font-label uppercase text-on-primary-container">Date</span>
                                    <span className="text-xs font-label">2024</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Gallery
