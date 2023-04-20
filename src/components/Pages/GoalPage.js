import React from 'react'
import {BsEmojiSmile} from 'react-icons/bs'

const GoalPage = () => {
  return (
    <>
     <div className='border-black border-2 justify-center items-center w-webkit-fill-available m-6 rounded-3xl py-20'>
        <h1 className=' w-full -mt-10 items-center text-center text-2xl font-bold '>Our Goals</h1>
        <div className='flex w-full items-center justify-center mb-5'>
            ------------------<img className='w-24 h-16 px-1' src="./images/hand.jpg" alt="" />
            ------------------
        </div>
        <div className='flex justify-around'>
            <div className='items-center justify-center mx-5 p-4'>
                
                <p className='flex-row justify-center items-center sm:ml-[20%] md:ml-[40%] font-extrabold font-2xl'><BsEmojiSmile className='ml-[15%]'/>Save Childrens</p>
                <p>There are many Childresn which require the primary protection, care and love.</p>
                </div>
                <div className='items-center justify-center mx-5 p-4'>
                
                <p className='flex-row justify-center items-center sm:ml-[20%] md:ml-[40%] font-extrabold font-2xl'><BsEmojiSmile className='ml-[15%]'/>Save Childrens</p>
                <p>There are many Childresn which require the primary protection, care and love.</p>
                </div>
                <div className='items-center justify-center mx-5 p-4'>
                
                <p className='flex-row justify-center items-center sm:ml-[20%] md:ml-[40%] font-extrabold font-2xl'><BsEmojiSmile className='ml-[15%]'/>Save Childrens</p>
                <p>There are many Childresn which require the primary protection, care and love.</p>
                </div>
                {/* BsEmojiSmile */}
               
        </div>
     </div>
    
    </>
  )
}

export default GoalPage