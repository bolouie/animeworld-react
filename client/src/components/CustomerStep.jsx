function CustomerStep({ name, setName, shippingAddress, setShippingAddress, city, setCity, country, setCountry, setCurrentStep }) {

    return (
        <>
            <h2>Enter your details</h2>

            <label htmlFor="name">Name</label>
            <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-anime-bg/60 rounded-lg px-4 py-2 text-anime-peach border border-white/10 focus:outline-none focus:border-anime-orange" />

            <label htmlFor="shippingAddress">Shipping Address</label>
            <textarea
                id="shippingAddress"
                rows={3}
                value={shippingAddress}
                onChange={(e) => setShippingAddress(e.target.value)}
                className="w-full bg-anime-bg/60 rounded-lg px-4 py-2 text-anime-peach border border-white/10 focus:outline-none focus:border-anime-orange">
            </textarea>
            <label htmlFor="city">City</label>
            <input
                id="city"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-anime-bg/60 rounded-lg px-4 py-2 text-anime-peach border border-white/10 focus:outline-none focus:border-anime-orange" />

            <label htmlFor="country">Country</label>
            <input
                id="country"
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full bg-anime-bg/60 rounded-lg px-4 py-2 text-anime-peach border border-white/10 focus:outline-none focus:border-anime-orange" />
            <button
                onClick={() => { setCurrentStep(2) }}
                className="bg-transparent border border-anime-peach py-2 px-4 hover:bg-anime-orange hover:text-anime-darken text-white font-semibold rounded-full cursor-pointer"
            >Next
            </button>
        </>

    )
}

export default CustomerStep