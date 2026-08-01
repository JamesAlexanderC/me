import '../styles/projects.css'

export default function() {
    return(
        <div id="projects">
            <div id="intro-text">
                <h1>My Projects!</h1>
                <p>
                    A collection of projects I am or have worked on
                </p>
            </div>
            <div className="container">
                <div className="description">
                    <div className="heading">
                        <h2>Fixr-Bot</h2>
                        <a href="https://github.com/JamesAlexanderC/Fixr-bot" className="button">GitHub<img src="github-dark.svg" id="github-svg" className="svg" /></a>
                        <div className="tools">
                            <img src="python.svg" className="svg" />
                            <img src="playwright.svg" className="svg" />
                            <img src="fastapi.svg" className="svg" />
                            <img src="gunicorn.svg" className="svg" />
                            <img src="javascript.svg" className="svg" />
                            <img src="html5.svg" className="svg" />
                            <img src="css.svg" className="svg" />
                        </div>
                    </div>
                    <p className="text">
                        Fixr-Bot is a ticket reservation system for the<a href="https://fixr.co"> Fixr </a> 
                        platform. It allows a user to preconfigure the accounts they want to use, the push
                        notifications they will recieve after a successful reservation, and the event they
                        want to reserve tickets for. Currently under active development with no pre-release,
                        release planned for September 2026.
                    </p>
                    <p className="text">
                        The bot uses an async engine that recieves messages from a queue to create and
                        control camoufox wrapped playwright browser instances. This includes a 'scan-loop' 
                        which runs on a configurable timer to find the requested ticket, and multiple reservation 
                        flows, which trigger on the finding of a requested ticket and run async to each other 
                        to allow for pseduo-parrallel runs. This engine is exposed through a 
                        dedicated FastAPI API served on gunicorn, requests can be made to the API to add messages 
                        to the queue or to edit configuration details. A very simple graphical interface is served.
                    </p>
                </div>
                <img className="project-img" id="fixr-img" src="fixr-bot.png"></img>
            </div>
            <div className="container">
                <div className="description">
                    <div className="heading">
                        <h2>My Personal Website</h2>
                        <a href="https://github.com/JamesAlexanderC/me" className="button">GitHub<img src="github-dark.svg" id="github-svg" className="svg" /></a>
                        <div className="tools">
                            <img src="react.svg" className="svg" />
                            <img src="html5.svg" className="svg" />
                            <img src="css.svg" className="svg" />
                        </div>
                    </div>
                    <p className="text">
                        This is my Personal Website! A simple static react app where I keep public information,
                        my experience, projects updates and more. I've built it for fun and it is still in development.
                    </p>
                    <p className="text">
                        This website was self designed and implemented in react, once finished I plan to begin self
                        hosting and integrate interfaces for future projects and other services such as a public docker
                        registry and git server, with custom interfaces.
                    </p>
                </div>
                <img className="project-img" id="website-img" src="personal-website.png"></img>
            </div>
            <div className="container">
                <div className="description">
                    <div className="heading">
                        <h2>Project Ate</h2>
                        <a href="https://github.com/Project-Ate-COM2020/Project-Ate" className="button">GitHub<img src="github-dark.svg" id="github-svg" className="svg" /></a>
                        <div className="tools">
                            <img src="python.svg" className="svg" />
                            <img src="django.svg" className="svg" />
                            <img src="react.svg" className="svg" />
                        </div>
                    </div>
                    <p className="text">
                        Project Ate was a university group project I lead during second year, as a team of 7 we developed a full stack
                        web app market place, capable of supporting multiple sellers, consumers, staff members, an analytics engine and
                        a gamification layer. This app is not currently being developed, and is not intended for contribution, however I 
                        have plans to build a personal fork.
                    </p>
                    <p className="text">
                        We used a simple Django/React stack, and JWT auth tokens to ensure security. 
                    </p>
                </div>
                <img className="project-img" id="website-img" src="project-ate.png"></img>
            </div>
        </div>
    )
}