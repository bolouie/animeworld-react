function ConfirmStep({ selectedPackage, name, region, shippingAddress, city, country, setTotalCost, onClose }) {

    // 2. Event handler - lives inside the component
    async function handlePlaceOrder() {
        // fetch logic 
        const url = "http://localhost:5000/order";
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    productOrdered: selectedPackage.id,
                    name: name,
                    region: region,
                    shippingAddress: shippingAddress,
                    city: city,
                    country: country,
                })
            });

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`)
            }
            //  Await the response, then parse it as JSON
            const result = await response.json();
            setTotalCost(result.totalCost)
            onClose(); // only closes if request succeeded 
            console.log(result)
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <>
            <h2 className="text-anime-peach font-display font-bold tracking-wide">
                Your Order Details
            </h2>
            {/* display order summary as a description list */}
            <dl>
                <div className="flex gap-2">
                    <dt className="text-white/50">Package: </dt>
                    <dd className="text-anime-peach">{selectedPackage.name}</dd>
                </div>
                <div className="flex gap-2">
                    <dt className="text-white/50">Region: </dt>
                    <dd className="text-anime-peach">{region}</dd>
                </div>
                <div className="flex gap-2">
                    <dt className="text-white/50">Name: </dt>
                    <dd className="text-anime-peach">{name}</dd>
                </div>
                <div className="flex gap-2">
                    <dt className="text-white/50">Address: </dt>
                    <dd className="text-anime-peach">{shippingAddress}</dd>
                </div>
                <div className="flex gap-2">
                    <dt className="text-white/50">City: </dt>
                    <dd className="text-anime-peach">{city}</dd>
                </div>
                <div className="flex gap-2">
                    <dt className="text-white/50">Country: </dt>
                    <dd className="text-anime-peach">{country}</dd>
                </div>
            </dl>
            <button
                aria-label="Place Order"
                onClick={handlePlaceOrder}
                className="bg-transparent border border-anime-peach py-2 px-4 hover:bg-anime-orange hover:text-anime-darken text-white font-semibold rounded-full cursor-pointer"
            >Place Order
            </button>
        </>
    )
}

export default ConfirmStep
