import aboutImage from '../assets/animeFigure.jpg'

function About() {
    return (
        <section id="about" style={{
            backgroundImage: `url(${aboutImage})`
        }} className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat">
            {/* Overlay - darken the background */}
            < div className="absolute inset-0 bg-anime-darken/80" >

            </div>
            <div className="z-10 px-4 max-w-4xl">
                <h1>
                    <span className="text-white text-6xl font-bold block">AnimeWorld</span>
                </h1>
                <p className="text-anime-orange text-xl mt-3">
                    A Yokochō shop in Asakusa. The kind of place you stumble into and never quite forget.
                </p>
                <div className="max-w-prose mt-6">
                    <p className="text-white/80 text-base mt-3 max-w-prose">
                        AnimeWorld began the way most meaningful things do. Quietly, and in a neighbourhood that already felt like home.
                    </p>
                    <p className="text-white/80 text-base mt-3 max-w-prose">
                        Kai grew up in the backstreets of Asakusa, where the smell of Nakamise's street food and the flicker of late-night television were equally familiar. It was here, at eight years old, that he first watched Grave of the Fireflies. He understood then that animation could hold something true about what it means to be human.
                    </p>
                    <p className="text-white/80 text-base mt-3 max-w-prose">
                        That conviction never left him. What started as a small collection of manga and imported merchandise tucked into a Yokochō alley has grown into AnimeWorld. Today, it's a space for anyone who has ever found themselves moved, surprised, or quietly changed by a story told in ink and motion.
                    </p>
                    <p className="text-white/80 text-base mt-3 max-w-prose">
                        Kai believes anime belongs to everyone. To the child discovering it for the first time. To the adult who carries it from childhood like a thread. AnimeWorld exists for both.
                    </p>
                </div>
            </div>

        </section>
    )
}

export default About