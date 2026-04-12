import "./home.css"
import { TypewriterText } from "../components/effects";


function Home() {
    return (
        <div className = "home">
            <div className = "infoBox" id = "intro">
                
                <img id="introImage" src="/me.jpeg" alt="James Clarke" />
                
                <div id="introText">
                    <h1 className = "text">James Clarke</h1>
                    <TypewriterText text = {"I am 19, a software engineer, and an athlete"} loop = {false} className = "text" speed = {50}/>
                </div>

            </div>

            <div className = "infoBox" id = "personal">
                
                <div id = "personalText">
                    <TypewriterText text = {"I am in my second year at the University of Exeter"} loop = {false} className = "text" speed = {50}/>
                        
                    <p>I am found on instagram, linkedin, github, facebook, and strava</p>

                    <p>Feature most recent Instagram post from each account</p>
                </div>
                
                <img id="personalImage" src="/me.jpeg" alt="James Clarke" />

            </div>

            <div className = "infoBox" id = "professional">

                <img id="professionalImage" src="/profile.jpg" alt="James Clarke" />
                
                <div id = "professionalText">
                
                    <p>Student software engineer, experience in full stack website design, data automations and cybersecurity</p>
            
                    <p>I am currently looking for a year long placement starting between July and August, and welcome any opportunities here</p>

                    <p>Feature recent github stats</p>

                    <p>Feature 'project spotlight'</p>

                </div>

            </div>

            <div className = "infoBox" id = "sporting">
            
                <div id = "sportingText">

                    <p>Playing Hockey for most of my life, at clubs including York, Leeds, and EUMHC</p>
                    
                    <p>Feature photos</p>

                    <p>Feature most recent strava run</p>
            
                </div>

                <img id="sportingImage" src="/me.jpeg" alt="James Clarke" />

            </div>

        </div>
    )
}

export default Home;
