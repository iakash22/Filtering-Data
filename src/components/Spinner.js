import React from 'react'

const Spinner = () => {
  return (
    <div className='flex flex-col justify-center items-center space-y-2 h-[100vh]'>
      <div className='spinner'></div>
      <p className=' text-bgDark text-lg font-semibold'>Loading...</p>
    </div>
  )
}

export default Spinner
