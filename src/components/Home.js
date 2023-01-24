import React from 'react';
// import { Link } from 'react-router-dom';


function Home() {
    return (
      <div className='relative h-[480px]'>
        <div className='absolute z-20 flex h-full flex-col items-start justify-center space-y-4 ml-12 tex-white font-bold w-[800px]'>
          <h2 className='text-6xl'>Welcome to Your world on Dribbly</h2>
          <p>Woo hoo Best PLace to be</p>
          <button className='bg-pink-500 px-[12px] py-[9px] text-[15px] font-bold text-white rounded-md hover:bg-pink-400'>
            Sign up
          </button>
        </div>
        <div className='bg-black absolute opacity-70 w-full h-full'>
          <img className='w-full h-full object-cover' src="" alt="" />
        </div>
      </div>

    )
  }

export default Home