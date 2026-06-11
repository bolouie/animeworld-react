import { useState } from 'react'

function ConfirmStep({ selectedPackage, name, region, shippingAddress, city, country, totalCost, setTotalCost, onClose }) {

    // 1a. State declaration
    const [orderPlaced, setOrderPlaced] = useState(false)

    // 1b. Pricing lookups and derived values
    const packagePrices = {
        1: 18,
        2: 28,
        3: 45,
        4: 60,
        5: 22
    }

    const shippingPrices = {
        NA: 7,
        EU: 14,
        AS: 10
    }

    const packageCost = packagePrices[selectedPackage.id]
    const shippingCost = shippingPrices[region]
    const previewTotal = packageCost + shippingCost

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
            setOrderPlaced(true)
            console.log(result)
        } catch (error) {
            console.error(error.message)
        }
    }

    // State B: if orderPlaced is true, render a confirmation message, the Flask total, and a close button calls onClose().
    if (orderPlaced) {
        return (
            <>
                <h2 className="text-anime-peach text-lg font-display font-bold tracking-wide">
                    Congrats! 🎊 Order Confirmed
                </h2>
                <dl>
                    <div className="flex gap-2">
                        <dt className="text-white/50">You ordered: </dt>
                        <dd className="text-anime-peach">{selectedPackage.name}</dd>
                    </div>
                    <div className="flex gap-2">
                        <dt className="text-white/50">Total: </dt>
                        <dd className="text-anime-peach">${totalCost}</dd>
                    </div>
                </dl>
                <button
                    aria-label="Back to AnimeWorld"
                    onClick={onClose}
                    className="bg-transparent border border-anime-peach py-2 px-4 hover:bg-anime-orange hover:text-anime-darken text-white font-semibold rounded-full cursor-pointer"
                >Back to AnimeWorld
                </button>
            </>
        )
    }

    // State A: React-calculated total.
    return (
        <>
            <h2 className="text-anime-peach text-lg font-display font-bold tracking-wide">
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
                <hr className="border-white/10 my-2" />
                <div className="flex gap-2">
                    <dt className="text-white/50">Package Cost: </dt>
                    <dd className="text-anime-peach">${packageCost}</dd>
                </div>
                <div className="flex gap-2">
                    <dt className="text-white/50">Shipping Cost: </dt>
                    <dd className="text-anime-peach">${shippingCost}</dd>
                </div>
                <div className="flex gap-2">
                    <dt className="text-white/70 font-semibold">Total Cost: </dt>
                    <dd className="text-anime-orange font-bold text-lg">${previewTotal}</dd>
                </div>
            </dl>
            <button
                aria-label="Place Order"
                onClick={handlePlaceOrder}
                className="bg-transparent border border-anime-peach mt-6 py-2 px-4 hover:bg-anime-orange hover:text-anime-darken text-white font-semibold rounded-full cursor-pointer"
            >Place Order
            </button>
        </>
    )
}

export default ConfirmStep
