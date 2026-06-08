import { useState } from 'react'

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Packages', href: '#packages' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
]

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (

        <nav className="fixed top-0 left-0 right-0 z-50 bg-anime-darken/90 backdrop-blur-sm" aria-label="Main navigation" >

            {/* Top bar row - flex container for logo, nav links, and order button */}
            <div className="flex items-center justify-between px-6 py-4">

                <a href="#home" aria-label="AnimeWorld home" className="text-white font-bold text-xl">Anime<span className="text-anime-orange">World</span></a>

                {/* Hamburger - hidden desktop */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                    className="md:hidden text-anime-peach">
                    <svg
                        aria-hidden="true"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >

                        {isMenuOpen ? (
                            <>
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </>
                        ) : (
                            <>
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </>
                        )}
                    </svg>
                </button>


                <ul className="hidden md:flex gap-8">
                    {   /* Desktop links always visible */}
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className="text-anime-peach hover:text-anime-orange transition-colors">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <a aria-label="Explore Packages" href="#packages"
                    className="hidden md:flex bg-anime-peach hover:bg-anime-orange text-anime-darken transition-colors font-bold py-2 px-6 rounded-full">Order Now</a>
            </div>

            {/* Mobile menu - drops below */}
            {isMenuOpen && (
                <ul className="flex flex-col items-center px-6 pb-4 gap-4 md:hidden">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className="text-anime-peach hover:text-anime-orange transition-colors">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>

    )
}

export default Navbar