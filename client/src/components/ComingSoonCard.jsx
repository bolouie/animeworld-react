import { useState } from 'react'

function ComingSoonCard() {

    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)

    async function handleNotify() {
        const url = "http://localhost:5000/notify"

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: email
                })
            });

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`)
            }
            // Await the response, then parse it as JSON
            const result = await response.json();
            setSubmitted(true)
            console.log(result)
        } catch (error) {
            console.error(error.message)
        }
    }

    // Early submit: If submitted is true, confirm!
    if (submitted) {
        return (
            <>
                <article className="h-full border-2 border-dashed border-white/20 flex flex-col p-6 rounded-lg bg-white/5 items-center justify-center text-center gap-4 min-h-[400px]">

                    <h2 className="text-anime-peach text-lg font-display font-bold tracking-wide">
                        You're on the list! 🎉
                    </h2>
                    <p className="text-white/60 text-sm">
                        We'll notify {email} when new packages drop.
                    </p>
                </article>
            </>
        )
    }

    // 
    return (
        <>
            <article className="h-full border-2 border-dashed border-white/20 flex flex-col p-6 rounded-lg bg-white/5 items-center justify-center text-center gap-4 min-h-[400px]">

                <p className="text-white/50 text-sm">New packages dropping soon. Be the first to know.</p>


                <h2 className="text-anime-peach text-lg font-display font-bold tracking-wide">
                    Get Notified!
                </h2>
                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-anime-peach/80 text-base font-display tracking-wide">Email</label>
                    <input
                        id="email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white/10 rounded-lg px-4 py-2 text-anime-peach border border-white/10 focus:outline-none focus:border-anime-orange" />
                </div>
                <button
                    aria-label="Submit Email"
                    onClick={handleNotify}
                    className="bg-transparent border border-anime-peach mt-6 py-2 px-4 hover:bg-anime-orange hover:text-anime-darken text-white font-semibold rounded-full cursor-pointer"
                >Submit Email
                </button>
            </article>
        </>
    )
}

export default ComingSoonCard