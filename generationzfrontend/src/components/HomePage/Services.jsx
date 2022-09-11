import React from 'react'

const Services = () => {
  return (
    <div>
        <div className='w-[90%] m-[auto] text-[white] mt-[100px]'>
            <h2 className='text-[46px]'>Services</h2>
            <div className='flex justify-between'>
               <div className='mt-[300px]'>
                <h3 className='opacity-[0,4] text-right text-[20px]'>Renewebla Energy <br/> consulting</h3>
                <div className='pt-[10px] w-[400px] h-[400px]'>
                    <img className='w-[100%] h-[100%]' src='https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>
                </div>
               </div>

               <div className='mt-[150px]'>
                <h3 className='opacity-[0,4] text-right text-[20px]'>Operation and maintenance <br/> of power stations</h3>
                <div className='pt-[10px] w-[400px] h-[400px]'>
                    <img className='w-[100%] h-[100%]' src='https://images.pexels.com/photos/6434779/pexels-photo-6434779.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>
                </div>
               </div>

               <div>
                <h3 className='opacity-[0,4] text-right text-[20px]'>Industrial and private <br/> power actions</h3>
                <div className='pt-[10px] w-[400px] h-[400px]'>
                    <img className='w-[100%] h-[100%]' src='https://images.pexels.com/photos/6447382/pexels-photo-6447382.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>
                </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Services