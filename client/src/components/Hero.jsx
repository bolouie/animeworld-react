import heroPlaceholder from '../assets/heroBg.jpg';

function Hero() {
    return (

        <section id="home" style={{
            backgroundImage: `url(${heroPlaceholder})`
        }} className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat">
            {/* Overlay - darken the background */}
            < div className="absolute inset-0 bg-anime-darken/50 pointer-events-none" >

            </div>
            {/* Content - centered, above the overlay */}
            <div className="z-10 text-center px-4 max-w-4xl">
                <p className="animate-pulse inline-flex items-center gap-2 m-6 px-3 py-1 bg-anime-orange/15 border border-anime-orange/70 rounded-full text-anime-orange text-xs font-semibold uppercase tracking-wider">✨ Summer Release ✨ </p>
                <h1>
                    <span className="text-white text-6xl font-bold block">Experience the Art of Anime</span>
                </h1>
                <p className="text-anime-orange text-xl mt-3">
                    Immerse yourself in a world where every story leaves a mark
                </p>
                {/* Main CTA */}
                <a aria-label="Explore Packages" href="#packages" className="inline-block mt-6 px-6 py-3 bg-anime-orange text-white rounded-full hover:shadow-[0_0_25px_rgba(255,121,61,0.4)] transition-all duration-300 border border-anime-orange/30 hover:scale-[1.02]">
                    Explore Packages
                </a>
            </div >
        </ section >
    )
}

export default Hero