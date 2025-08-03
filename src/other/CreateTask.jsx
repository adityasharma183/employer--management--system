import React from 'react'

const CreateTask = () => {
  return (
     <form className='flex flex-wrap w-full bg-[#1c1c1c] items-start mt-7 justify-between' >
            <div className='w-1/2 '>
            <div>
             <h3 className='text-xl text-grey-400 mb-0.5'>Task Title</h3>
            <input className='text-sm px-2 py-1 rounded outline-none w-4/5 bg-transparent border-[2px] border-black-400 mb-4' type="text" placeholder='Make a UI design' />
        
            </div>
             <div>
            <h3 className='text-xl text-grey-400 mb-0.5'>Date</h3>
            <input className='text-sm px-2 py-1 rounded outline-none w-4/5 bg-transparent border-[2px] border-grey-400 mb-4'type="date" />
            </div>
            <div>
             <h3 className='text-xl text-grey-400 mb-0.5'>Assign To</h3>
            <input className='text-sm px-2 py-1 rounded outline-none w-4/5 bg-transparent border-[2px] border-grey-400 mb-4'type="text" placeholder='employee name' />
            </div>
            <div>
                <h3 className='text-xl text-grey-400 mb-0.5'>Category</h3>
            <input className='text-sm px-2 py-1 rounded outline-none w-4/5 bg-transparent border-[2px] border-grey-400 mb-4' type="text"  placeholder='design,dev etc.'/>
            </div>
            <button className='bg-emerald-500 py-3 px-5 rounded text-sm md-5 mt-4'>Create Task</button>
            </div>
           <div className='w-1/2'>
             <h3 className='text-xl text-grey-400 mb-0.5'>Description</h3>
            <textarea className='text-sm px-2 py-1 rounded outline-none w-4/5 bg-transparent border-[2px] border-grey-400 mb-4' name="" cols='30' rows='10' id=""></textarea>
           </div>
           

        </form>
  )
}

export default CreateTask