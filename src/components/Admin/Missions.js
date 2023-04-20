import React from 'react'
import Sidenav from './SideNav'
import { RiPlayListAddLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Missions = () => {
  return (
    <>
    <Sidenav/>
    <div className='absolute left-64 top-16 space-y-4 w-10/12 hover:cursor-pointer '>
    <div className=' pt-3 font-bold sm: text-sm md:text-base flex float-right mr-5'>
        <RiPlayListAddLine className='w-9 h-7 mt-2' />
            <Link className='mt-3' to="../AddMission">Add Missions</Link>
    </div>
        <h1 className='text-3xl mr-2 px-4 font-extrabold border-solid border-2 border-black'>Missions</h1>
        <p className='text-3xl font-bold underline text-center '>Current Missions</p>
        <hr className=' h-1 bg-black m-5'/>
    <div className='flex justify-around'>
        <div className=' flex border-2 hover:bg-slate-700 border-black px-2 justify-center items-center w-2/5 space-x-2 mx-4 my-2 group-hover:opacity-10  '>
            <img className='w-48 h-64 p-2 hover:border-2 border-white' src="./images/Missions/Missions-1.jpeg" alt="" />
            <p className='text-lg mb-3 group-hover:opacity-25 '>
               <h1 className='font-bold text-xl italic hover:underline w-fit border-2 border-black mt-1 px-3 hover:bg-slate-900 hover:rounded-lg'>Fundraiser for Kids</h1>
               <h3 className='text-sm mb-3'>Oct 1, 2022 | Ball Room New York</h3>
               <hr className='h-1 bg-black mb-1 -mt-1'/>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque, provident eaque harum, dignissimos eos cum, officiis beatae qui tenetur sit reprehenderit omnis mollitia ullam. 
            </p>
        </div>
        {/* <div className=' py-1 relative top-48 right-3 w-fit opacity-0 group hover:opacity-100'>
                <button className='rounded-xl bg-blue-900 hover:bg-blue-700 font-semibold hover:underline px-5 pb-2 text-xl'>Donate</button>
        </div> */}

        <div className=' flex border-2 hover:bg-slate-700 border-black px-2 justify-center items-center w-2/5 space-x-2 mx-4 my-2 group-hover:opacity-10  '>
            <img className='w-48 h-64 p-2 hover:border-2 border-white' src="./images/Missions/Missions-4.jpeg" alt="" />
            <p className='text-lg mb-3 group-hover:opacity-25 '>
               <h1 className='font-bold text-xl italic hover:underline w-fit border-2 border-black mt-1 px-3 hover:bg-slate-900 hover:rounded-lg'>Food For All</h1>
               <h3 className='text-sm mb-3'>Oct 1, 2022 | Ball Room New York</h3>
               <hr className='h-1 bg-black mb-1 -mt-1'/>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque, provident eaque harum, dignissimos eos cum, officiis beatae qui tenetur sit reprehenderit omnis mollitia ullam. 
            </p>
        </div>
        {/* <div className=' py-1 relative top-48 right-3 w-fit opacity-0 group hover:opacity-100'>
                <button className='rounded-xl bg-blue-900 hover:bg-blue-700 font-semibold hover:underline px-5 pb-2 text-xl'>Donate</button>
        </div> */}
        
</div>

        <hr className=' h-1 bg-black m-5'/>
        <hr className=' h-1 bg-black m-5'/>
        <p className='text-3xl font-bold underline text-center '>Missions Completed</p>
        <hr className=' h-1 bg-black m-5'/>
        <div className='flex justify-around items-center'>

        <div className=' flex border-2 hover:bg-slate-700 border-black px-2 justify-center items-center space-x-2 w-2/5 mx-4 my-2 group-hover:opacity-10  '>
            <img className='w-60 h-64 p-2 hover:border-2 border-white' src="./images/Missions/Missions-2.jpeg" alt="" />
            <p className='text-lg mb-3 group-hover:opacity-25 '>
               <h1 className='font-bold text-xl italic hover:underline w-fit border-2 border-black mt-1 px-3 hover:bg-slate-900 hover:rounded-lg'>Education for All</h1>
               <h3 className='text-sm mb-3'>Oct 1, 2022 | Ball Room New York</h3>
               <hr className='h-1 bg-black mb-1 -mt-1'/>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque, provident eaque harum, dignissimos eos cum, officiis beatae qui tenetur sit reprehenderit omnis mollitia ullam. 
            </p>
        </div>

        <div className=' flex border-2 hover:bg-slate-700 border-black px-2 justify-center items-center space-x-2 w-2/5 mx-4 my-2 group-hover:opacity-10  '>
            <img className='w-60 h-64 p-2 hover:border-2 border-white' src="./images/Missions/Missions-3.jpeg" alt="" />
            <p className='text-lg mb-3 group-hover:opacity-25 '>
               <h1 className='font-bold text-xl italic hover:underline w-fit border-2 border-black mt-1 px-3 hover:bg-slate-900 hover:rounded-lg'>Water for All</h1>
               <h3 className='text-sm mb-3'>Oct 1, 2022 | Ball Room New York</h3>
               <hr className='h-1 bg-black mb-1 -mt-1'/>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque, provident eaque harum, dignissimos eos cum, officiis beatae qui tenetur sit reprehenderit omnis mollitia ullam. 
            </p>
        </div>

        </div>
        </div>
    </>
  )
}

export default Missions