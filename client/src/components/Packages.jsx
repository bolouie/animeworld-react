import { useState } from 'react'
import packageImageStarter from '../assets/starterCollection.png';
import packageImageClassic from '../assets/classicBundle.png';
import packageImageDeluxe from '../assets/deluxeEdition.png';
import packageImageAnniversary from '../assets/anniversaryBox.png';
import packageImageMystery from '../assets/mysteryPack.png';
import PackageCard from './PackageCard';

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

{/* Packages receives two setters and passes them straight through to PackageCard */ }
function Packages({ setSelectedPackage, setIsWizardOpen }) {
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
                        <PackageCard
                            id={pkg.id}
                            name={pkg.name}
                            description={pkg.description}
                            regularPrice={pkg.regularPrice}
                            salePrice={pkg.salePrice}
                            availableStock={pkg.availableStock}
                            image={pkg.image}
                            setSelectedPackage={setSelectedPackage}
                            setIsWizardOpen={setIsWizardOpen}
                        />
                    </li>
                ))}
            </ul>
            {/* Show more button */}
            <button className="mt-4 px-4 py-2 border border-anime-peach/20 hover:border-anime-gold/40 hover:bg-anime-card/75 text-anime-peach hover:text-white rounded-full text-sm transition-all duration-200 flex items-center cursor-pointer"
                onClick={() => setShowAll(!showAll)}>
                {showAll ? 'Show Less' : 'Show More'}
            </button>
        </section >
    )
}

export default Packages