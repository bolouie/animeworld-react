function CustomerStep({ name, setName, address, setAddress, setCurrentStep }) {

    return (
        <>
            <h2>Enter your details</h2>

            <label htmlFor="name">Name</label>
            <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-anime-bg/60 rounded-lg px-4 py-2 text-anime-peach border border-white/10 focus:outline-none focus:border-anime-orange" />

            <label htmlFor="address">Address </label>
            <textarea
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full bg-anime-bg/60 rounded-lg px-4 py-2 text-anime-peach border border-white/10 focus:outline-none focus:border-anime-orange resize-none rows={3}">
            </textarea>
            <button
                onClick={() => { setCurrentStep(2) }}
                className="bg-transparent border border-anime-peach py-2 px-4 hover:bg-anime-orange text-white font-semibold rounded-full cursor-pointer"
            >Next
            </button>
        </>

    )
}

export default CustomerStep