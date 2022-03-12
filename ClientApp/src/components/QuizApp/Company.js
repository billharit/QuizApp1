import React, { Component } from 'react';

export class Company extends Component {

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
          <div className="prose prose-indigo prose-lg text-gray-500 mx-auto">
            <h1 className='text-3xl text-blue-600 text-center'>About's Company</h1>
            <p className='text-center'>
                Started in 2022. Harit's Company strive to be the powerhouse of startup industry in near future of Indonesia
            </p>
            <div className='grid grid-cols-2'>
                <div className='col-span-1 p-4'>
                    <h2 className='text-center'>Visit our Office at</h2>
                    <p className='text-center'>
                        Jl.Keputih Tegal No.23 Lhoktuan
                    </p>
                    <p className='text-center'>
                        Keputih, Sukolilo, Surabaya    
                    </p>
                </div>
                <div className='col-span-1 p-4'>
                    <h2 className='text-center'>Company Email</h2>
                    <p className='text-center'>
                        billharit@gmail.com
                    </p>

                </div>
                <div className='col-span-1 p-4'>
                    <h2 className='text-center'>Our social media</h2>
                    <p className='text-center'>IG : billharit</p>
                </div>
                <div className='col-span-1 p-4'>
                    <h2 className='text-center'>Our Number</h2>
                    <p className='text-center'>
                        085921427073
                    </p>
                </div>

            </div>
            <figure>
              <img
                className="w-full rounded-lg"
                src="https://images.unsplash.com/photo-1460472178825-e5240623afd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmdzfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                alt=""
                width={1310}
                height={873}
              />
            </figure>
          </div>
        </div>
    </div>
    );
  }
}
