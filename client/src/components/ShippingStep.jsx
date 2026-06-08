function ShippingStep({ region, setRegion, setCurrentStep }) {
    return (
        <>
            <h2 className="text-anime-peach font-display font-bold tracking-wide">
                Choose Your  Region
            </h2>
            <button
                onClick={() => { setRegion('NA'); setCurrentStep(1) }}

                className={`w-full py-3 rounded-full border font-display text-sm font-bold tracking-widest uppercase cursor-pointer transition-colors ${region === 'NA' ? 'bg-anime-orange text-anime-darken border-anime-orange' : 'bg-transparent text-anime-peach border-white/20 hover:bg-white/60 hover:text-anime-darken'}`}>
                North America
            </button >
            <button
                onClick={() => { setRegion('EU'); setCurrentStep(1) }}

                className={`w-full py-3 rounded-full border font-display text-sm font-bold tracking-widest uppercase cursor-pointer transition-colors ${region === 'EU' ? 'bg-anime-orange text-anime-darken border-anime-orange' : 'bg-transparent text-anime-peach border-white/20 hover:bg-white/60 hover:text-anime-darken'}`}>
                Europe
            </button >
            <button
                onClick={() => { setRegion('AS'); setCurrentStep(1) }}

                className={`w-full py-3 rounded-full border font-display text-sm font-bold tracking-widest uppercase cursor-pointer transition-colors ${region === 'AS' ? 'bg-anime-orange text-anime-darken border-anime-orange' : 'bg-transparent text-anime-peach border-white/20 hover:bg-white/60 hover:text-anime-darken'}`}>
                Asia/Pacific
            </button >
        </>
    )
}

export default ShippingStep


