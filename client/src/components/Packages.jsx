import { useState } from 'react'
import packageImageStarter from '../assets/starterCollection.png';
import packageImageClassic from '../assets/classicBundle.png';
import packageImageDeluxe from '../assets/deluxeEdition.png';
import packageImageAnniversary from '../assets/anniversaryBox.png';
import packageImageMystery from '../assets/mysteryPack.png';

const packages = [
    {
        id: 1,
        name: 'Starter Collection',
        description: 'A curated intro to anime culture. Perfect for new fans and curious collectors.',
        regularPrice: 25,
        salePrice: 18,
        availableStock: 40,
        image: packageImageStarter,
        featured: false,
    },
    {
        id: 2,
        name: 'Classic Bundle',
        description: 'Fan-favourite titles and collectibles from the series that defined a generation.',
        regularPrice: 35,
        salePrice: 28,
        availableStock: 30,
        image: packageImageClassic,
        featured: false,
    },
    {
        id: 3,
        name: 'Deluxe Edition',
        description: 'Premium prints and exclusive items for the dedicated anime enthusiast.',
        regularPrice: 60,
        salePrice: 45,
        availableStock: 15,
        image: packageImageDeluxe,
        featured: false,
    },
    {
        id: 4,
        name: 'Anniversary Box',
        description: 'A limited celebration of one year. Includes rare editions you won\'t find anywhere else.',
        regularPrice: 80,
        salePrice: 60,
        availableStock: 10,
        image: packageImageAnniversary,
        featured: true,
    },
    {
        id: 5,
        name: 'Mystery Pack',
        description: 'Unpredictable surprises await! Each pack contains a random selection of exclusive items.',
        regularPrice: 20,
        salePrice: 15,
        availableStock: 50,
        image: packageImageMystery,
        featured: false,
    }
]

function Packages() {
    const [showAll, setShowAll] = useState(false);

    const featuredPackages = packages.filter(pkg => pkg.featured);
    const remainingPackages = packages.filter(pkg => !pkg.featured);
    const displayPackages = showAll ? packages : [...remainingPackages.slice(0, 2), ...featuredPackages];

    return (
        <section aria-labelledby="featured-packages" className="max-w-6xl mx-auto px-4 py-12">
            <h2 id="featured-packages" className="text-3xl font-bold text-center mb-8">
                Featured Packages
            </h2>
            {/* Grid layout for all packages */}
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* show all packages or just the first three */}
                {displayPackages.map(pkg => (
                    <li key={pkg.id}>
                        <article className="h-full outline outline-1 outline-anime-orange flex
                         flex-col p-4 rounded-lg">
                            <img src={pkg.image} alt={pkg.name} className="w-full h-60 object-cover" />
                            <h3 className="mt-4 text-lg font-semibold text-center text-anime-gold">{pkg.name}</h3>
                            <p className="mt-2 mb-2 text-sm text-center text-white/90">
                                {pkg.description}
                                {/* Price with discount styling */}
                                <span className="block text-sm font-semibold text-anime-accent line-through">Was ${pkg.regularPrice}</span>
                                <span className="block text-lg font-bold text-anime-orange tracking-wide">Now ${pkg.salePrice}</span>

                                { /* Stock information */}
                                <p>
                                    <span className="text-sm font-mono text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/10">{pkg.availableStock} available</span>
                                </p>

                            </p>
                            <button aria-label={`View details for ${pkg.name}`} className="w-full py-3 bg-anime-orange hover:bg-anime-orange/90 active:bg-orange-600 rounded-full text-xs font-semibold text-white tracking-widest uppercase transition-all duration-200 flex items-center justify-center shadow-lg hover:scale-[1.01] cursor-pointer mt-auto">
                                View Details
                            </button>
                        </article>
                    </li>
                ))}
            </ul>
            {/* Show more button */}
            <button onClick={() => setShowAll(!showAll)}>
                {showAll ? 'Show Less' : 'Show More'}
            </button>
        </section >
    )
}

export default Packages