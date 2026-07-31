import '../styles/home.css'

export default function Home() {

    return (
        <div id="home">

                <div id="intro">

                    <img id="hero" src="hero-img.jpeg" />

                    <h1 id="title">James Clarke</h1>

                    <p id="intro-text">
                        My name is James, I'm a student at the University Exeter; an engineer at Amulet 
                        Hotkey; and an athlete at EUMHC.
                    </p>

                </div>

                <div id="texts">


                    <p className="block">
                        I am student at the University of Exeter studying BSc Computer Science with
                        Industrial Experience.

                        I am a student software engineer at Amulet Hotkey helping to develop embedded 
                        systems and automated tooling.
                    </p>

                    <p className="block">
                        Average grade pp 64% having completed key modules: Machine Learning, C Family, 
                        Object Oriented Programming and Web Development.

                        I am an active member of both Exeter CS Society and Exeter Cybersecurity Society,
                        having attended Cyberus summer school as a representative for the University.
                    </p>

                    <p className="block">
                        I have a strong portfolio of personal projects and hackathon entries; built from 
                        a passion for creating amongst a number of dsciplines including AI, cybersecurity,
                        embedded systems and blockchain technologies.
                    </p>



                    <p className="block">
                        Over the last 2 years I have played for EUMHC, having been lucky enough to win a BUCS
                        championship with the second team and (sort of) win promotion to the national prem 
                        with the first team.
                    </p>

                    <p className="block">
                        Hockey has been one of the most formative experiences of my life, and much of my 
                        professional mentality has been derived from lessons first taught on the pitch.
                    </p>

                    <p className="block">
                        I will soon be pursuing a project relating my work with embedded systems and 
                        ML algorithms to my experience with the role of data in hockey
                    </p>

                </div>

        </div>
)
}