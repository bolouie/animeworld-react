import { FaGithub } from 'react-icons/fa'
function Footer() {
    return (
        <footer className="grid grid-cols-1 sm:grid-cols-[1fr_2fr_1fr] gap-4 px-8 py-6 text-center">
            <>
                <a href="#home" aria-label="AnimeWorld home" className="text-white font-bold text-xl">Anime<span className="text-anime-orange ">World</span></a>
                <p>Copyright © 2026 React Flask PostgreSQL </p>
                <a href="https://github.com/bolouie" aria-label="Github Profile" className="flex items-center justify-center">

                    <FaGithub className="w-6 h-6 text-white" />
                </a>

            </>
        </footer>

    )
}

export default Footer


