function PackageCard({ id, name, description, regularPrice, salePrice, availableStock, image, setSelectedPackage, setIsWizardOpen }) {
    return (

        <article className="h-full outline-anime-orange/50 hover:outline-anime-orange hover:outline-2 shadow-md hover:shadow-lg hover:shadow-anime-orange/30 transition-all duration-200 flex flex-col p-4 rounded-lg bg-sword-blue/30">
            <img src={image} alt={name} className="w-full h-60 object-cover" />
            <h3 className="mt-4 text-lg font-semibold text-center text-anime-gold">{name}</h3>
            <p className="mt-2 mb-2 text-sm text-center text-white/90">
                {description}
                {/* Price with discount styling */}
            </p>
            <p className="text-center">
                <span className="block text-sm font-semibold text-anime-accent line-through">Was ${regularPrice}</span>
                <span className="block text-lg font-bold text-anime-orange tracking-wide">Now ${salePrice}</span>
            </p>

            { /* Stock information */}
            <p className="text-center text-sm font-mono text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 mb-2 mx-25 rounded border border-emerald-500/10" >{availableStock} available</p>

            <button
                onClick={() => { setSelectedPackage({ id, name }); setIsWizardOpen(true) }}
                aria-label={`View details for ${name}`}
                className="w-full py-3 bg-anime-orange rounded-full text-xs font-semibold text-white tracking-widest uppercase transition-all duration-200 flex items-center justify-center shadow-lg cursor-pointer mt-auto [box-shadow:3px_3px_0px_#511D38] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_0px_#FF793D]">
                View Details
            </button>
        </article>
    )
}

export default PackageCard;