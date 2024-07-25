import React from 'react'

function Portfolio() {
    return (
        <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20">
            <h1 className='font-bold text-2xl mb-8' >Portfolio</h1>
            <p className='underline text-blue-400 font-semibold'>Featured Projects</p><br />
          <div className='grid grid-cols-1 md:grid-cols-3 my-5'>
           <div class=" flex flex-col mt-4 text-gray-700 bg-gray-200 shadow-md bg-clip-border rounded-xl w-80 hover:scale-105 duration-300 cursor-pointer">
                <div
                    class=" h-54 mx-4 mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                    <img
                        src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                        alt="card-image" />
                </div>
                <div class="p-6">
                    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Project 1
                    </h5>
                    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        The place is close to Barceloneta Beach and bus stop just 2 min by walk
                        and near to "Naviglio" where you can enjoy the main night life in
                        Barcelona.
                    </p>
                </div>
                <div className="p-6 pt-0 flex justify-between">
                    <button
                        class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                        type="button">
                        View Code
                    </button>
                    <button
                        class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-green-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                        type="button">
                        Go Live
                    </button>
                </div>
            </div>
           <div class=" flex flex-col mt-4 text-gray-700 bg-gray-200 shadow-md bg-clip-border rounded-xl w-80 hover:scale-105 duration-300 cursor-pointer">
                <div
                    class=" h-54 mx-4 mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                    <img
                        src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                        alt="card-image" />
                </div>
                <div class="p-6">
                    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Project 2
                    </h5>
                    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        The place is close to Barceloneta Beach and bus stop just 2 min by walk
                        and near to "Naviglio" where you can enjoy the main night life in
                        Barcelona.
                    </p>
                </div>
                <div className="p-6 pt-0 flex justify-between">
                    <button
                        class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                        type="button">
                        View Code
                    </button>
                    <button
                        class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-green-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                        type="button">
                        Go Live
                    </button>
                </div>
            </div>
           <div class=" flex flex-col mt-4 text-gray-700 bg-gray-200 shadow-md bg-clip-border rounded-xl w-80 hover:scale-105 duration-300 cursor-pointer">
                <div
                    class=" h-54 mx-4 mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                    <img
                        src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                        alt="card-image" />
                </div>
                <div class="p-6">
                    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        UI/UX Review Check
                    </h5>
                    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        The place is close to Barceloneta Beach and bus stop just 2 min by walk
                        and near to "Naviglio" where you can enjoy the main night life in
                        Barcelona.
                    </p>
                </div>
                <div className="p-6 pt-0 flex justify-between">
                    <button
                        class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                        type="button">
                        View Code
                    </button>
                    <button
                        class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-green-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                        type="button">
                        Go Live
                    </button>
                </div>
            </div>
           </div>    
        </div>
    )
}

export default Portfolio