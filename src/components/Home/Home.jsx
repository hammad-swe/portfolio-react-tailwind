import React from 'react'
import { Link } from 'react-router-dom';
import home from '../Home/pic.png'
import { useNavigate } from 'react-router-dom';
import { useState } from "react"

// export default function Home() {
//     return (
//         <>
//         <section>
//         <div className="flex flex-row mx-auto w-full max-w-8xl ">
//             <div className=" bg-gray-100 justify-center p-30 w-3/4">
//                 <h1 className="text-4xl font-bold text-center text-blue-500">I'm Hammad Ali</h1>
//                 <p className="text-center text-lg mt-4 ">
//                     Web Developer
//                 </p>
//                 <div className='justify-center flex gap-3 mt-6'>

//                 <button className="bg-blue-500 text-white px-4 py-2 rounded">
//                     Contact Me
//                 </button>
//                 <button className="bg-blue-500 text-white px-4 py-2 rounded">
//                     CV Download
//                 </button>
//                 </div>
//             </div>
//             <div className="border-blue-500 border-2 p-24">
//                 <img
//                     src={home}
//                     className="mr-3 h-12 p-40 z-50 w-16 bg-gray-200"
//                     alt="Home"
//                 />
//             </div>
//         </div>
//          </section>
//           <section className='bg-gray-100 p-10'>

//  <p className="text-center text-2xl  ">
//                     Explore my projects, learn about my skills, and get in touch!
//                 </p>
//                  <img
//                     src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                     className="mr-3 h-12 p-40 z-50 w-16 bg-gray-200"
//                     alt="Home"
//                 />
//           </section>
        
//           </>
//     );
// }



export default () => {

    const [state, setState] = useState(false)

    // Replace javascript:void(0) path with your path
    const navigation = [
        { title: "contact", path: "/contact" },
        { title: "Customers", path: "javascript:void(0)" },
        { title: "Team", path: "javascript:void(0)" },

    ]

    return (
        <>
            <section className="py-28">
                <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
                    <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                        <h1 className="text-sm text-blue-500 font-medium">
                            Wellcome to my Portfolio
                        </h1>
                        <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
                           I'm Hammad Ali
                        </h2>
                        <p>
                            I'm a passionate web developer with a knack for creating stunning and functional websites.
                        </p>
                        <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                            <a href="/contact" className="block py-2 px-4 text-center text-white font-medium bg-blue-500 duration-150 hover:bg-blue-400 active:bg-blue-600 rounded-lg shadow-lg hover:shadow-none">
                                Contact Me
                            </a>
                            <a href="javascript:void(0)" className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
                                Download CV
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
                        <img
                            src={home}
                            className=" md:rounded-tl-[108px] "
                            alt="Pic"
                        />
                    </div>
                </div>
                <div className="mt-14 px-4 md:px-8">
                    <p className="text-center text-sm text-gray-700 font-semibold">Turning ideas into code with these skills</p>
                    <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-6 mt-6">
                        <img
                            src="https://img.icons8.com/?size=100&id=123603&format=png&color=000000"
                            className="w-20 h-20"
                            alt="react"
                        />
                        <img
                            src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000"
                            className="w-20 h-20"
                            alt="node"
                        />
                        <img
                            src="https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000"
                            className="w-20 h-20"
                            alt="js"
                        />
                        <img
                            src="https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000"
                            className="w-20 h-20"
                            alt="tailwindcss
                            "
                        />
                        <img
                            src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000"
                            className="w-20 h-20"
                            alt="github"
                        />
                        


                        </div>
                </div>
            </section>

            {/* call to action section */}

            <section className="py-28 relative bg-blue-600">
            <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
                <div className="max-w-xl md:mx-auto">
                    <p className="text-white text-3xl font-semibold sm:text-4xl">
                        Build the future with us
                    </p>
                    <p className="text-blue-100 mt-3">
                       </p>
                </div>
                <div className="mt-4">
                    <a href="/contact" className="inline-block py-2 px-4 text-gray-800 font-medium bg-white duration-150 hover:bg-gray-100 active:bg-gray-200 rounded-full">
                        Get started
                    </a>
                </div>
            </div>
            <div className="absolute top-0 w-full h-full" style={{ background: "linear-gradient(268.24deg, rgba(59, 130, 246, 0.76) 50%, rgba(59, 130, 246, 0.545528) 80.61%, rgba(55, 48, 163, 0) 117.35%)" }}></div>
        </section>
        </>
    )
}