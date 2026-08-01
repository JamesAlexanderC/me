import '../styles/projects.css'

export default function() {
    return(
        <div id="now">
            <div className="container">
                <div id="description">
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
                        control<a href="https://github.com/daijro/camoufox"> Camoufox </a> browser instances.
                        This includes a 'scan-loop' which runs on a configurable timer to find the requested ticket,
                        and multiple reservation flows, which trigger on the finding of a requested ticket and run 
                        async to each other to allow for pseduo-parrallel runs. This engine is exposed through a 
                        dedicated <a href="https://fastapi.tiangolo.com/"> FastAPI </a> API served on 
                        <a href="https://gunicorn.org/"> Gunicorn </a>, requests can be made to the API to add messages 
                        to the queue or to edit configuration details. A very simple graphical interface is served.
                        
                    </p>
                </div>
                <img id="fixr-img" src="fixr-bot.png"></img>
            </div>
        </div>
    )
}