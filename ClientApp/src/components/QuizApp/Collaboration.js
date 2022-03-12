import React, { Component } from 'react';

export class Collaboration extends Component {

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
            <h2 className='mb-8'>Meet Our Collaborator</h2>
            <div className='grid grid-cols-4 gap-4'>
                <figure>
                <img
                    className="rounded-lg w-full col-span-1"
                    src="https://drive.google.com/uc?export=view&id=1UeTb9xrvh1E68JmuP64eBzxRURVAxz9a"
                    alt=""
                />
                </figure>
                <div className='col-span-3'>
                    <h3 className='text-blue-600'>Bill Harit Yafi</h3>
                    <h4 className=''>Institut Teknologi Sepuluh Nopember</h4>
                    <p>
                       We Collaborate together with the best IT Developer from indonesia. Since 2019, Bill is a striving IT Student at Institut Technology Sepuluh Nopember. Having a lot of work experience in website programming and Machine learning, Our collaborator lets us easily do joints work on solving many problem in IT fields
                    </p>
                </div>
                <div className='hidden md:block md:col-span-1'>
                    <div className='absolute py-0.5 px-16 rounded bg-blue-800'></div>  
                </div>
            </div>
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
