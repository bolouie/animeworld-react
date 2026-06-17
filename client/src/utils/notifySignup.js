import { isDemoMode } from './demoMode'

export async function notifySignup(email) {
    if (isDemoMode()) {
        await new Promise(resolve => setTimeout(resolve, 600))

        // fabricated demo nothing to construct
        return {}
    }

    const response = await fetch('http://localhost:5000/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
    })

    if (!response.ok) {
        throw new Error(`Response status: ${response.status} `)
    }

    return response.json()
}


