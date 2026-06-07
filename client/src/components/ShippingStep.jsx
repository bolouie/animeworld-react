function ShippingStep({ shippingRegion, setShippingRegion, setCurrentStep }) {
    return (
        <>
            <h2 className="text-anime-peach font-display font-bold tracking-wide">
                Choose Your Shipping Region
            </h2>
            <button
                onClick={() => { setShippingRegion('NA'); setCurrentStep(1) }}

                className={`w-full py-3 rounded-xl border font-display text-sm font-bold tracking-widest uppercase cursor-pointer transition-colors ${shippingRegion === 'NA' ? 'bg-anime-orange text-anime-darken border-anime-orange' : 'bg-transparent text-anime-peach border-white/20'}`}>
                North America
            </button >
            <button
                onClick={() => { setShippingRegion('EU'); setCurrentStep(1) }}

                className={`w-full py-3 rounded-xl border font-display text-sm font-bold tracking-widest uppercase cursor-pointer transition-colors ${shippingRegion === 'EU' ? 'bg-anime-orange text-anime-darken border-anime-orange' : 'bg-transparent text-anime-peach border-white/20'}`}>
                Europe
            </button >
            <button
                onClick={() => { setShippingRegion('AS'); setCurrentStep(1) }}

                className={`w-full py-3 rounded-xl border font-display text-sm font-bold tracking-widest uppercase cursor-pointer transition-colors ${shippingRegion === 'AS' ? 'bg-anime-orange text-anime-darken border-anime-orange' : 'bg-transparent text-anime-peach border-white/20'}`}>
                Asia/Pacific
            </button >
        </>
    )
}

export default ShippingStep