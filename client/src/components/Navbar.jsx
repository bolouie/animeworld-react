import { useState } from 'react'


function Navbar() {
    const[isMenuOpen, setIsMenuOpen] = useState(false)
    return (

        <nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-anime-darken/90 backdrop-blur-sm">
            <a href="#home" aria-label="AnimeWorld home" className="text-white font-bold text-xl">Anime<span className="text-anime-orange">World</span></a>
            
            {/* // Hamburger - visible mobile, hidden desktop // */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md: hidden" aria-label="Toggle navigation menu">Menu</button>

            {/* // Nav links - hidden mobile when closed, always visible desktop // */}
            <ul className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex`}>
                <li><a href="#home">Home</a></li>
                <li><a href="#packages">Packages</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <button aria-label="Open order form" className="bg-anime-orange hover:bg-anime-gold text-white font-bold py-2 px-4 rounded">Order Now</button>
        </nav>

    )
}

export default Navbar