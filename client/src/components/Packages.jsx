import { useState } from 'react'
import packageImageStarter from '../assets/starterCollection.png';
import packageImageClassic from '../assets/classicBundle.png';
import packageImageDeluxe from '../assets/deluxeEdition.png';
import packageImageAnniversary from '../assets/anniversaryBox.png';
import packageImageMystery from '../assets/mysteryPack.png';

function Packages() {

    return (
        <section aria-labelledby="featured-packages" className="max-w-6xl mx-auto px-4 py-12">
            <h2 id="featured-packages" className="text-3xl font-bold text-center mb-8">
                Featured Packages
            </h2>
            {/* Grid layout for all packages */}
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card structure for single package */}
                <li>
                    <article className="h-full outline outline-1 outline-anime-orange flex flex-col items-center p-4 rounded-lg">
                        <img src={packageImageStarter} alt="Starter Collection" className="w-full h-60 object-cover" />
                        <h3 className="mt-4 text-lg font-semibold text-center">Starter Collection

                        </h3>
                        <p className="mt-2 mb-2 text-sm text-center text-anime-peach/50">
                            A curated intro to anime culture. Perfect for new fans and curious collectors.
                            {/* Price with discount styling */}
                            <span className="block text-sm font-semibold text-anime-orange line-through">Was $25</span>
                            <span className="block text-lg font-bold text-anime-orange tracking-wide">Now $18</span>

                            { /* Stock information */}
                            <span className="text-[11px] font-mono text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/10">5 available</span>
                        </p>
                        <button className="w-full py-3 bg-anime-orange hover:bg-anime-orange/90 active:bg-orange-600 rounded-full text-xs font-semibold text-white tracking-widest uppercase transition-all duration-200 flex items-center justify-center shadow-lg hover:scale-[1.01] cursor-pointer mt-auto">
                            View Details
                        </button>
                    </article>
                </li>
                {/* Repeat similar structure for more packages */}
                <li>
                    <article className="outline outline-1 outline-anime-orange flex flex-col items-center p-4 rounded-lg">
                        <img src={packageImageClassic} className="w-full h-60 object-cover" />
                        <h3 className="mt-4 text-lg font-semibold text-center">Classic Bundle

                        </h3>
                        <p className="mt-2 mb-2 text-sm text-center text-anime-peach/50">
                            Fan-favourite titles and collectibles from the series that defined a generation.
                            {/* Price with discount styling */}
                            <span className="block text-sm font-semibold text-anime-orange line-through">Was $35</span>
                            <span className="block text-lg font-bold text-anime-orange tracking-wide">Now $28</span>

                            { /* Stock information */}
                            <span className="text-[11px] font-mono text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/10">5 available</span>
                        </p>
                        <button className="w-full py-3 bg-anime-orange hover:bg-anime-orange/90 active:bg-orange-600 rounded-full text-xs font-semibold text-white tracking-widest uppercase transition-all duration-200 flex items-center justify-center shadow-lg hover:scale-[1.01] cursor-pointer mt-auto">
                            View Details
                        </button>
                    </article>
                </li>
                {/* Add more packages as needed */}
                <li>
                    <article className="outline outline-1 outline-anime-orange flex flex-col items-center p-4 rounded-lg">
                        <img src={packageImageDeluxe} className="w-full h-60 object-cover" />
                        <h3 className="mt-4 text-lg font-semibold text-center">Deluxe Edition

                        </h3>
                        <p className="mt-2 mb-2 text-sm text-center text-anime-peach/50">
                            Premium prints and exclusive items for the dedicated anime enthusiast.
                            {/* Price with discount styling */}
                            <span className="block text-sm font-semibold text-anime-orange line-through">Was $60</span>
                            <span className="block text-lg font-bold text-anime-orange tracking-wide">Now $45</span>

                            { /* Stock information */}
                            <span className="text-[11px] font-mono text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/10">5 available</span>
                        </p>
                        <button className="w-full py-3 bg-anime-orange hover:bg-anime-orange/90 active:bg-orange-600 rounded-full text-xs font-semibold text-white tracking-widest uppercase transition-all duration-200 flex items-center justify-center shadow-lg hover:scale-[1.01] cursor-pointer mt-auto">
                            View Details
                        </button>
                    </article>
                </li>
                <li>
                    <article className="outline outline-1 outline-anime-orange flex flex-col items-center p-4 rounded-lg">
                        <img src={packageImageAnniversary} className="w-full h-60 object-cover" />
                        <h3 className="mt-4 text-lg font-semibold text-center">Anniversary Box

                        </h3>
                        <p className="mt-2 mb-2 text-sm text-center text-anime-peach/50">
                            A limited celebration of one year. Includes rare editions you won't find anywhere else.
                            {/* Price with discount styling */}
                            <span className="block text-sm font-semibold text-anime-orange line-through">Was $80</span>
                            <span className="block text-lg font-bold text-anime-orange tracking-wide">Now $60</span>

                            { /* Stock information */}
                            <span className="text-[11px] font-mono text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/10">5 available</span>
                        </p>
                        <button className="w-full py-3 bg-anime-orange hover:bg-anime-orange/90 active:bg-orange-600 rounded-full text-xs font-semibold text-white tracking-widest uppercase transition-all duration-200 flex items-center justify-center shadow-lg hover:scale-[1.01] cursor-pointer mt-auto">
                            View Details
                        </button>
                    </article>
                </li>
                <li>
                    <article className="outline outline-1 outline-anime-orange flex flex-col items-center p-4 rounded-lg">
                        <img src={packageImageMystery} className="w-full h-60 object-cover" />
                        <h3 className="mt-4 text-lg font-semibold text-center">Mystery Pack

                        </h3>
                        <p className="mt-2 mb-2 text-sm text-center text-anime-peach/50">
                            Surprise selections hand-picked by our team. Half the fun is not knowing.
                            {/* Price with discount styling */}
                            <span className="block text-sm font-semibold text-anime-orange line-through">Was $30</span>
                            <span className="block text-lg font-bold text-anime-orange tracking-wide">Now $22</span>

                            { /* Stock information */}
                            <span className="text-[11px] font-mono text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/10">5 available</span>
                        </p>
                        <button className="w-full py-3 bg-anime-orange hover:bg-anime-orange/90 active:bg-orange-600 rounded-full text-xs font-semibold text-white tracking-widest uppercase transition-all duration-200 flex items-center justify-center shadow-lg hover:scale-[1.01] cursor-pointer mt-auto">
                            View Details
                        </button>
                    </article>
                </li>

            </ul>
        </section >
    )
}

export default Packages