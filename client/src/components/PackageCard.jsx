function PackageCard({ name, description, regularPrice, salePrice, availableStock, image }) {
    return (
        <article className="h-full outline outline-1 outline-anime-orange flex
                         flex-col p-4 rounded-lg bg-sword-blue/30">
            <img src={image} alt={name} className="w-full h-60 object-cover" />
            <h3 className="mt-4 text-lg font-semibold text-center text-anime-gold">{name}</h3>
            <p className="mt-2 mb-2 text-sm text-center text-white/90">
                {description}
                {/* Price with discount styling */}
                <span className="block text-sm font-semibold text-anime-accent line-through">Was ${regularPrice}</span>
                <span className="block text-lg font-bold text-anime-orange tracking-wide">Now ${salePrice}</span>

                { /* Stock information */}
                <p>
                    <span className="text-sm font-mono text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/10">{availableStock} available</span>
                </p>

            </p>
            <button aria-label={`View details for ${name}`} className="w-full py-3 bg-anime-orange hover:bg-anime-orange/90 active:bg-orange-600 rounded-full text-xs font-semibold text-white tracking-widest uppercase transition-all duration-200 flex items-center justify-center shadow-lg hover:scale-[1.01] cursor-pointer mt-auto">
                View Details
            </button>
        </article>
    )
}

export default PackageCard;;