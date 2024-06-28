import React from 'react'

function Main(props) {
    const { data } = props
    return (
        <div className='imageContainer'>
            <img src={data.hdurl} alt="imageOfTheDay" className='Backgroundimg' />
        </div>
    )
}

export default Main;
