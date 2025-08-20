import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
        <section>
        <div className="flex flex-row mx-auto w-full max-w-8xl ">
            <div className=" bg-gray-100 justify-center p-30 w-3/4">
                <h1 className="text-4xl font-bold text-center text-blue-500">I'm Hammad Ali</h1>
                <p className="text-center text-lg mt-4 ">
                    Web Developer
                </p>
                <div className='justify-center flex gap-3 mt-6'>

                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    Contact Me
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    CV Download
                </button>
                </div>
            </div>
            <div className="border-blue-500 border-2 p-24">
                <img
                            src=""
                            className="mr-3 h-12 p-40"
                            alt="Home"
                        />
            </div>
        </div>
         </section>
          <section className='bg-gray-100 p-10'>

 <p className="text-center text-2xl  ">
                    Explore my projects, learn about my skills, and get in touch!
                </p>
          </section>
          </>
    );
}