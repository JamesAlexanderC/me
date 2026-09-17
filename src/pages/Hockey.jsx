import "../styles/hockey.css"

function Gallery({ pictures }) {
    return (
        <div id="hockey-gallery">
            {pictures.map(picture => (
                    <img src={picture} className="gallery-picture"/>
            ))
            }
        </div>
    )
}

export default function() {
    {/* For Now I will use this repository as a host for pictures
    however in future I will set up a proper system*/}
    const pictureModules = import.meta.glob("../hockey-gallery/*.{jpg,jpeg,png,webp,JPG}", { eager: true, import: "default" })
    const pictures = Object.values(pictureModules)
    return(
        <div id="hockey">
            <div id="intro-text">
                <h1>Hockey</h1>
                <p>
                    Hockey is a big part of my life and has contributed significantly to my experiences throughout childhood and at Exeter
                </p>
                <Gallery
                pictures={pictures}
                />
            </div>
        </div>
    )
}