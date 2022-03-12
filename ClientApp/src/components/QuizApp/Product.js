import React, { Component } from 'react';

export class Product extends Component {

  render() {
    return (
    <div className="relative py-16 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
            </svg>
            <svg
              className="absolute bottom-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className=" prose prose-indigo prose-lg text-gray-500 mx-auto">
            <h2>What we offer</h2>
            <h1 className='mt-10 text-6xl text-blue-600'>Effective solution for every businesses</h1 >
            <div className='grid grid-cols-6 md:grid-cols-7 py-4 gap-4'>
                <div className='hidden md:block md:col-span-1'>
                    <div className='absolute py-0.5 px-16 rounded bg-blue-800'></div>  
                </div>
                <div className='col-span-3'>
                    <h3 className='text-blue-600'>Deep Data Analytics</h3>
                    <p>
                        With our state-of-the-art technology, our company provides quick solutions to effectively manage and present data.
                    </p>
                </div>
                <div className='col-span-3'>
                    <h3 className='text-blue-600'>Technology Innovation</h3>
                    <p>
                        Proficiency across the technology stacks, databases, mobile and web apps development, hardware development, and electrical and telecommunication engineering. </p>
                </div>
                <div className='hidden md:block md:col-span-1'></div>
                <div className='col-span-3'>
                    <h3 className='text-blue-600'>Telco Consulting</h3>
                    <p>
                        Perform cost-benefit and needs analysis of existing/potential telco customers, covering their technology needs with our range of IT solutions.</p>
                </div>
                <div className='col-span-3'>
                    <h3 className='text-blue-600'>Digital Strategy</h3>
                    <p>
                        We create strategies to give the best possible solution and generate positive results for your company
                    </p>
                </div>  

            </div>
            <figure>
              <img
                className="w-full rounded-lg"
                src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt=""
                width={1310}
                height={873}
              />
            </figure>
            <div className='bg-orange-200 p-8'>
                <h2 className='text-center mb-8'>Wants to work Together?</h2>
                <div className='w-60 mx-auto'>
                    <button className='w-60 py-3 px-4 border rounded-md shadow-md text-blue-600'><a href='/q1/company' className='no-underline'>Find Out More</a></button>
                </div>
            </div>
          </div>
        </div>
    </div>
    );
  }
}
