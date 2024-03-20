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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, voluptates iusto odio in dicta sed rerum voluptatem rem voluptatibus, sequi adipisci vero sint dolores pariatur quo! Reprehenderit, quidem adipisci culpa neque vitae maiores saepe quaerat inventore sequi rem, nisi, aliquam distinctio cupiditate id vel dolorem officiis recusandae! Quibusdam, ipsum voluptates?
                </p>
                <br/>
                <p className='text-xl'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, molestiae quaerat? Magni, obcaecati odio? Velit nesciunt saepe illo repellat provident assumenda minus sequi in delectus repellendus obcaecati quam sint id, porro rem numquam voluptatum iusto sapiente veritatis cumque ut, nihil ipsam. Nostrum debitis obcaecati architecto veniam nesciunt eos, necessitatibus officia.
                </p>
            </div>
        </div>
    )
}

export default About