import React from 'react'
import {motion} from 'framer-motion'
const PrimaryComponent = () => {
  return (
    <div>
        <div>
        <div className='ml-[300px] pt-[50px]' >
            <h1  className='text-[50px] text-[white]'>
                SMART RENEWABLE <br/>
                ENERGY SOLUTIONS
            </h1>
        </div>
        <div className='w-[90%] m-[auto] flex justify-between mt-[30px]'>
            <div className='w-[40%] text-[14px] text-[white] text-right opacity-[0.6]'>
                lorem ipsum dolor sit amensectetur adipiscing elit.
                lorem ipsum dolor sit amet, consectetur adipisci
                lorem ipsum dolor sitt, consectetur adipiscing elit.sit amet, consectetur adipiscing elit.
            </div>
            <div className='w-[100%] h-[450px] pl-[20px]'>
                <img className='w-[100%]  h-[100%]' src="https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=600"  alt=''/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default PrimaryComponent