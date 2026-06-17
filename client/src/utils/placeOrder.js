import { isDemoMode } from './demoMode'

export async function placeOrder(orderData, previewTotal) {
    if (isDemoMode()) {
        // fabricated demo branch
        return {
            totalCost: previewTotal,
            orderId: `DEMO-${Math.floor(Math.random() * 900) + 100}`
        }
    }

    const response = await fetch('http://localhost:5000/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
    })

    if (!response.ok) {
        throw new Error(`Response status: ${response.status} `)
    }

    return response.json()
}