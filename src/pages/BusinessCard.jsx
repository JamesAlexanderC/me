import { useState } from "react"
import "../styles/shared.css"
import "../styles/businesscard.css"

function CopyButton({ text, label, icon }) {
    const [copied, setCopied] = useState(false)

    async function copy() {
        await navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
    }

    return (
        <button className="card-button" onClick={copy}>
            {icon}{copied ? "Copied!" : label}
        </button>
    )
}

export default function(){
    return(
        <div id="card">
            <div id="card-intro">
                <img id="card-img" src="favicon.png" alt="James Clarke" />
                <h1>James Clarke</h1>
                <p>Student at the University of Exeter.</p>
                <p>Software Engineer at Amulet Hotkey.</p>
                <div id="card-links">
                    <a className="card-button" href="https://www.linkedin.com/in/james-clarke-a3376931b/">
                        <img src="linkedin.svg" className="card-icon" alt="" />LinkedIn
                    </a>
                    <a className="card-button" href="https://github.com/JamesAlexanderC">
                        <img src="github-dark.svg" className="card-icon" alt="" />GitHub
                    </a>
                    <a className="card-button" href="mailto:17ClarkeJa@gmail.com">
                        <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="4" width="20" height="16" rx="2" />
                            <path d="m2 7 10 6 10-6" />
                        </svg>Email
                    </a>
                    <a className="card-button" href="/James-Clarke-CV.pdf">
                        <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <path d="M14 2v6h6" />
                            <path d="M8 13h8M8 17h5" />
                        </svg>CV
                    </a>
                    <CopyButton text="https://JamesClarke.tech" label="Website" icon={
                        <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M2 12h20" />
                            <path d="M12 2a15 15 0 0 1 0 20a15 15 0 0 1 0-20z" />
                        </svg>
                    } />
                </div>
                <p id="card-note">Visit my website on a laptop for the full experience.</p>
            </div>
        </div>
    )
}
