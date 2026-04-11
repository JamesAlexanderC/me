import { Link } from 'react-router-dom'

function Footer() {
    const socialLinks = [
        { name: 'LinkedIn', url: 'https://linkedin.com/in/james-clarke' },
        { name: 'GitHub', url: 'https://github.com/james-clarke' },
        { name: 'EliteProspects', url: 'https://eliteprospects.com/player/james-clarke' },
        { name: 'Instagram', url: 'https://instagram.com/james.clarke' },
    ]

    return (
        <footer className="w-full py-12 px-8 bg-slate-100 dark:bg-[#08121C] border-t border-slate-200/50 dark:border-white/5 mt-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
                <div className="flex flex-col items-center md:items-start">
                    <span className="font-label uppercase text-xs font-bold tracking-[0.2em] text-slate-400">
                        The Kinetic Scholar
                    </span>
                    <p className="font-body text-sm tracking-wide text-slate-500 dark:text-slate-400 mt-2">
                        Built with academic rigor and athletic energy
                    </p>
                </div>

                <div className="flex gap-8">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-body text-sm tracking-wide text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors opacity-80 hover:opacity-100"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <p className="font-body text-sm tracking-wide text-slate-500 dark:text-slate-400 text-center md:text-right">
                    © 2024 James Clarke. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
