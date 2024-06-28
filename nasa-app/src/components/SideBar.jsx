import React from 'react'

function SideBar(props) {
    const { data, handleTouggleModel } = props
    return (
        <div className='sidebar'>
            <div onClick={handleTouggleModel} className='bgOverlay'></div>
            <div className='sidebarContants'>

                <h2>{data.title}</h2>
                <div>
                    <p className='discriptionTitle'>{data.date}</p>
                    <p className='discriptionContainer'>{data.explanation}</p>
                </div>
                <button onClick={handleTouggleModel}><i className="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    )
}

export default SideBar;
