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
                <p className="text-orange text-xl mt-3">
                    Sits just off Nakamise, the same shopping street where Tanjiro once crossed paths with a demon. Tucked into a Yokochō — one of Asakusa's quiet side-street alleys. The kind of place you stumble into and never quite forget.
                </p>
            </div>

        </section>
    )
}

export default About