import React from 'react'

function About() {
    return (
        <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800
        to-black text-white">
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center
            w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4
                    border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20'>
                Building responsive and visually appealing web pages.
                Converting design wireframes into code accurately.
                Writing clean, efficient HTML, CSS and JavaScript code.
                Use frameworks like React and BootStrap for development.
                    </p>
                <br/>
                <p className='text-xl'>
                I ensure the functionality and quality of PCB used in electronics devices.
                I conducted manual and API testing using Swift 3.0 with defects often related to code deadlocks caused by electronic component issues.
                I worked on telecom projects (FSM/FRM 3.2) involving Python code on telecom modules.    
                </p>
            </div>
        </div>
    )
}

export default About