import React from 'react'

const Statistics = ({flowers}) => {
  return (
    <div className='w-[90%] m-[auto]'>
      <div className='flex justify-between items-center'>
        <div className='shadow p-[30px] bg-[white] m-[15px]'>
          <h2 className='text-[#31640A] text-[28px]'>{flowers.temp_air}</h2>
          <p>Torpagin temperaturu</p>
        </div>
        <div className='shadow p-[30px] bg-[white] m-[15px]'>
          <h2 className='text-[#31640A] text-[28px]'>{flowers.hum_air}</h2>
          <p>Torpagin temperaturu</p>
        </div>
        <div className='shadow p-[30px] bg-[white] m-[15px]'>
          <h2 className='text-[#31640A] text-[28px]'>{flowers.hum_soil}</h2>
          <p>Torpagin temperaturu</p>
        </div>
        <div className='shadow p-[30px] bg-[white] m-[15px]'>
          <h2 className='text-[#31640A] text-[28px]'>{flowers.light}</h2>
          <p>Torpagin temperaturu</p>
        </div>
        <div className='shadow p-[30px] bg-[white] m-[15px]'>
          <h2 className='text-[#31640A] text-[28px]'>{flowers.rain}</h2>
          <p>Torpagin temperaturu</p>
        </div>
        <div className='shadow p-[30px] bg-[white] m-[15px]'>
          <h2 className='text-[#31640A] text-[28px]'>{flowers.gas}</h2>
          <p>Torpagin temperaturu</p>
        </div>
      </div>
    </div>
  )
}

export default Statistics