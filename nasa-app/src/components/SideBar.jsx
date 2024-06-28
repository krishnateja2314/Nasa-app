import React from 'react'

function SideBar(props) {
    const { handleTouggleModel } = props
    return (
        <div className='sidebar'>
            <div onClick={handleTouggleModel} className='bgOverlay'></div>
            <div className='sidebarContants'>

                <h2>The Brutal Martion Landscape</h2>
                <div>
                    <p>Discription</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, eos vero. Facilis explicabo quibusdam velit id. Illum quasi eum nisi quibusdam nemo corrupti, delectus expedita perferendis commodi tempora, reiciendis rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi esse aspernatur non. Quasi veniam adipisci illum tempora distinctio unde provident fuga, qui aspernatur, eius voluptate est. Distinctio cupiditate voluptate facilis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum voluptates culpa tempore blanditiis dolore repudiandae esse quisquam corrupti, quasi ad officia earum dolor porro unde amet quo inventore. Sapiente, ipsum.</p>
                </div>
                <button onClick={handleTouggleModel}><i className="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    )
}

export default SideBar;
