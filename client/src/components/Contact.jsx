import contactImage from '../assets/animeVignette.jpg'

function Contact() {
    return (

        <section id="contact" style={{
            backgroundImage: `url(${contactImage})`
        }} className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat">
            {/* Overlay - darken the background */}
            < div className="absolute inset-0 bg-anime-darken/70 pointer-events-none" >

            </div>
            {/* Content - centered, above the overlay */}
            <div className="z-10 text-center px-4 max-w-4xl">
                <p className="animate-pulse inline-flex items-center gap-2 m-6 px-3 py-1 bg-anime-orange/15 border border-anime-orange/70 rounded-full text-anime-orange text-xs font-semibold uppercase tracking-wider">✨ Summer Hours ✨ </p>
                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold block">
                    Visit Us!
                </h1>
                <address>
                    <p className="text-anime-orange text-xl mt-3">
                        3-12-6 Hanakawado Yokochō
                    </p>
                    <p className="text-anime-orange text-xl mt-3">
                        Asakusa, Taitō-ku, Tōkyō 111-0033
                    </p>
                </address>
                <dl className="mt-3 text-anime-peach text-md">
                    <div className="flex gap-2 justify-center">
                        <dt>Mon - Fri</dt>
                        <dd>11:00 - 20:00</dd>
                    </div>
                    <div className="flex gap-2 justify-center">
                        <dt>Sat - Sun</dt>
                        <dd>10:00 - 21:00</dd>
                    </div>
                </dl>
            </div >
        </ section >
    )
}

export default Contact
