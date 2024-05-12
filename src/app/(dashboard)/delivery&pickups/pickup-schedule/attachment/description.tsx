import { func } from 'prop-types'
import React from 'react'

type Props = {}

 export default function Description  (props: Props){
  return (
    <div className="bg-white rounded-lg shadow-md h-48 grid grid-cols-2">
      <div className="col-span-1 pl-4 mt-5">
        <h1 className="text-sm font-semibold leading-normal text-green">
          Task Description: Metal delivery
        </h1>
        <div className="mt-2 text-regular">
          <p className="py-2">Date: 22 April, 2024</p>
          <p className="py-2">Location: Auburn</p>
          <p className="py-2">Truck Number: 1234</p>
        </div>
      </div>
      <div className=" mt-12 flex flex-col justify-start ">
        <p className='py-2'>Driver's Name: John Doe</p>
        <p className='py-2'>Total Weight: 4 tons</p>
      </div>
    </div>
      
  )
}


