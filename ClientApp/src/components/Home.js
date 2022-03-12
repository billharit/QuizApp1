import React, { Component } from 'react';
import mainHero from '../img/78786.jpg'

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <>
        <div className="mx-auto grid grid-cols-2">
          <div className='col-span-2 md:col-span-1 p-8 md:min-h-screen'>
            <h2>Hi, <span className='text-blue-500'>Welcome to</span></h2>
            <h1 className='py-8 md:text-6xl'>Harit's Startup</h1>
            <button className='py-3 px-4 border rounded-md shadow-md text-blue-600'><a href='/q1/profile' className='no-underline'>Discover More</a></button>
          </div>
          <div className='col-span-2 md:col-span-1 statc md:min-h-screen'>
            <img className='md:transform md:translate-y-11 min-w-full' src={mainHero} alt="buildingimage"/>
          </div>
        </div>
      </>
    );
  }
}
