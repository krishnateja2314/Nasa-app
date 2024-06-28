import React from 'react'

function Footer(props) {
    const { showModal, data, handleTouggleModel } = props
    return (
        <footer>
            <div className='bgGradent'></div>
            <div>
                <h1>APOD PROJECT</h1>
                <h2>{data.title}</h2>
            </div>
            {(!showModal && <button onClick={handleTouggleModel}><i className="fa-solid fa-circle-info"></i></button>)}
        </footer>
    )
}

export default Footer;
