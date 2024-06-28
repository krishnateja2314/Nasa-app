import React from 'react'

function Footer(props) {
    const { handleTouggleModel } = props
    return (
        <footer>
            <div className='bgGradent'></div>
            <div>
                <h2>The Brutal Martion Landscape</h2>
                <h1>APOD PROJECT</h1>
            </div>
            <button onClick={handleTouggleModel}><i className="fa-solid fa-circle-info"></i></button>
        </footer>
    )
}

export default Footer;
