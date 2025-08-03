import React from 'react'

const AllTask = () => {
  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-48 overflow-auto'>
        <div className='bg-red-400 mt-2  py-2 px-4 flex justify-between rounded  '>
            <h2>Aditya</h2>
            <h3>Make a UI design</h3>
            <h5>Status</h5>
        </div>
         <div className='bg-green-400 mt-2 py-2 px-4 flex justify-between rounded  '>
            <h2>Adarsh</h2>
            <h3>Deploy the project</h3>
            <h5>Status</h5>
        </div>
         <div className='bg-blue-400  mt-2 py-2 px-4 flex justify-between rounded  '>
            <h2>Amit</h2>
            <h3>Fix the bugs in the last project</h3>
            <h5>Status</h5>
        </div>
         <div className='bg-yellow-400 mt-2 py-2 px-4 flex justify-between rounded  '>
            <h2>Mohit</h2>
            <h3>Deal with the client</h3>
            <h5>Status</h5>
        </div>
         <div className='bg-pink-400 mt-2 py-2 px-4 flex justify-between rounded  '>
            <h2>Rajat</h2>
            <h3>Work on the backend </h3>
            <h5>Status</h5>
        </div>
    </div>
  )
}

export default AllTask