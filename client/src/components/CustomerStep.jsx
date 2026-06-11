function CustomerStep({ name, setName, shippingAddress, setShippingAddress, city, setCity, country, setCountry, setCurrentStep }) {

    return (
        <>
            <h2 className="text-anime-peach text-lg font-display font-bold tracking-wide">Enter your details</h2>
            <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-anime-peach/80 text-base font-display tracking-wide">Name</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/10 rounded-lg px-4 py-2 text-anime-peach border border-white/10 focus:outline-none focus:border-anime-orange" />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="shippingAddress" className="text-anime-peach/80 text-base font-display tracking-wide">Shipping Address</label>
                <textarea
                    id="shippingAddress"
                    type="text"
                    rows={3}
                    value={shippingAddress}
                    onChange={(e) => setShippingAddress(e.target.value)}
                    className="w-full bg-white/10 rounded-lg px-4 py-2 text-anime-peach border border-white/10 focus:outline-none focus:border-anime-orange resize-none">
                </textarea>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="city" className="text-anime-peach/80 text-base font-display tracking-wide">City</label>
                <input
                    id="city"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-white/10 rounded-lg px-4 py-2 text-anime-peach border border-white/10 focus:outline-none focus:border-anime-orange" />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="country" className="text-anime-peach/80 text-base font-display tracking-wide">Country</label>
                <input
                    id="country"
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full bg-white/10 rounded-lg px-4 py-2 text-anime-peach border border-white/10 focus:outline-none focus:border-anime-orange" />
            </div>
            <button
                onClick={() => { setCurrentStep(2) }}
                className="bg-transparent border border-anime-peach mt-6 py-2 px-4 hover:bg-anime-orange hover:text-anime-darken text-white font-semibold rounded-full cursor-pointer"
            >Next
            </button>
        </>

    )
}

export default CustomerStep