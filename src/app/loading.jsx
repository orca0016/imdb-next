import React from 'react'
export default function loading() {
  return (
    <div className=' w-full flex justify-center flex-col items-center'>
        <img className='h-52' src={'/spinner.svg'} alt="loading..." />
    </div>
  )
}
