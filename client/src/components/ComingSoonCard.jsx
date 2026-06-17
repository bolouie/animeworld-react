import { useState } from 'react'
import { notifySignup } from '../utils/notifySignup'

function ComingSoonCard() {

    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)

    async function handleNotify() {
        if (!email) return

        try {
            const result = await notifySignup(email)
            setSubmitted(true)
            console.log(result)
        } catch (error) {
            console.error(error.message)
        }
    }

    // Early submit: If submitted is true, confirm!
    if (submitted) {
        return (
            <article className="h-full border-2 border-dashed border-anime-orange/60 shadow-lg shadow-anime-orange/20 flex flex-col p-6 rounded-lg bg-white/5 items-center justify-center text-center gap-4 min-h-[400px]"
            >
                <svg className="text-anime-orange w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                </svg>
                <h2 className="text-anime-peach text-lg font-display font-bold tracking-wide">
                    You're on the list! 🎉
                </h2>
                <p className="text-white/60 text-sm">
                    We'll notify {email} when new packages drop.
                </p>
            </article>
        )
    }

    // 
    return (
        <article className="h-full border-2 border-dashed border-white/20 flex flex-col p-6 rounded-lg bg-white/5 items-center justify-center text-center gap-4 min-h-[400px] outline-anime-orange/50 hover:outline-anime-orange hover:outline-2 shadow-md hover:shadow-lg hover:shadow-anime-orange/30 transition-all duration-200 flex">

            {/* Image slot — all decorative */}
            <div className="relative w-full border-2 border-dashed border-anime-orange/50 rounded-sm bg-[#32204A]/30 min-h-[240px] overflow-hidden"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,140,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,140,0,0.05) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                }}
                aria-hidden="true">
                <div className="absolute top-1 left-2 text-xs text-anime-orange/70">W_GRID: 380x300</div>   {/* corner stamp TL */}
                <div className="absolute top-1 right-2 text-xs text-anime-orange/70">SYS_REF: #PKG_06</div>  {/* corner stamp TR */}
                <div className="animate-radar-ping absolute inset-0">     {/* rings wrapper covered by parent div aria-hidden*/}
                    <span style={{ animationDelay: '0s' }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-anime-orange/40 size-16"></span>

                    <span style={{ animationDelay: '1.05s' }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-anime-orange/40 size-32"></span>

                    <span style={{ animationDelay: '2.1s' }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-anime-orange/40 size-48"></span>

                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-anime-orange">?</div> {/* sigil covered by parent div aria-hidden */}
                <p className="absolute top-[60%] left-1/2 -translate-x-1/2 text-xs text-anime-orange/70 font-mono tracking-widest text-center w-full px-2"
                >MATERIALIZING...</p>        {/* meaningful status */}
                <div className="absolute bottom-1 left-2 text-xs text-anime-orange/70">DIM: -- × -- × -- cm</div> {/* corner stamp BL */}
                <div className="absolute bottom-1 right-2 text-xs text-anime-orange/70">SEC: No. --- / ---</div>    {/* corner stamp BR */}
            </div>

            {/* Card body */}
            <p className="text-anime-orange/70 outline px-2 py-2 rounded-md text-xs tracking-widest font-mono">RENDERING</p>

            <p className="text-white/60">New package is still in ghost phase. Be the first to know when it drops.</p>
            {/* email input + button */}
            <input
                id="email"
                type="email"
                value={email}
                placeholder="type your email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/10 rounded-lg px-4 py-2 text-anime-peach border border-white/10 focus:outline-none focus:border-anime-orange" />

            <button
                aria-label="Submit Email"
                onClick={handleNotify}
                className="w-full py-3 bg-transparent border border-anime-peach rounded-full text-xs font-semibold text-white tracking-widest uppercase transition-all duration- 200 flex items-center justify-center shadow-lg mt-auto [box-shadow:3px_3px_0px_#16101C] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_0px_#16101C] cursor-pointer"
            >Submit Email
            </button>
        </article>
    )
}

export default ComingSoonCard