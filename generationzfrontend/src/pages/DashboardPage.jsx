import React from 'react'
import FlowerData from '../FlowerData';
import LineChart from '../components/Graphs/LineChart';
const DashboardPage = () => {
  return (
    <div className='w-[90%] m-[auto]'>
          <div>
            <FlowerData/>
            {/* <LineChart/> */}
          </div>
    </div>
  )
}

export default DashboardPage