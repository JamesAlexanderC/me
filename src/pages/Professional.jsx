import '../styles/professional.css'
import '../styles/shared.css'

export default function() {
    return(
        <div id="professional">
            <div id="intro-text">
                <h1>My Professional Life</h1>
                <p>
                    My skills, experiences, achievements and accomplishments within the field. A more in depth look into my background than a CV
                </p>
            </div>
            <div className="container">
                <div className="description">
                    <div classname="heading">
                        <h2>University of Exeter 2024 - 2028</h2>
                    </div>
                    <p className="text">
                        During my time at Exeter I completed many different modules, including LLMS, C fam, web dev, java and more.
                        I learnt skills including concurrency, threading, race conditioning, APIs, conventional OOP, and decorators.
                        I was part of computer science society, cybersecurity society and the hockey club. I went to France with the cybersecurity society
                        representing the university in an international conference. I won BUCs gold with the hockey team, representing the university on
                        the national stage. I am predicted a first, have led group projects and built a deep understanding throughout the subject of which i 
                        have proven my ability to use in a vareity of scenarios
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="description">
                    <div classname="heading">
                        <h2>Tadcaster Grammar School 2017 - 2024</h2>
                    </div>
                    <p className="text">
                        At tadcaster I completed 11 GCSE's, with good grades in maths, CS and english language. I completed 3 A Levels at AAB and took part in multiple
                        extracurricular activities such as maths club and assistant teaching. During this time I balanced 2 sets of standard qualifications with a growing
                        commitment to hocky, and the resulting lesson in managing 
                    </p>
                </div>
            </div>
        </div>
    )
}