import React from 'react'

const TaskNumbers = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className=' w-[45%] rounded-xl py-5=6 px-9 bg-red-400'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium '>New Task</h3>
        </div>
        <div className=' w-[45%] rounded-xl py-5=6 px-9 bg-blue-400'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium '>New Task</h3>
        </div>
        <div className=' w-[45%] rounded-xl py-5=6 px-9 bg-yellow-400'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium '>New Task</h3>
        </div>
        <div className=' w-[45%] rounded-xl py-5=6 px-9 bg-pink-400'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium '>New Task</h3>
        </div>

    </div>
  )
}

export default TaskNumbers