import React from 'react'
import MyNavbar from '../Pages/Navbar'
import { useNavigate } from 'react-router-dom'
import Donategallery from '../Pages/Donategallery'
import Footer from '../Pages/Footer'

const Donate = () => {
  const navigate = useNavigate();
    const navigateDonateform= () => {
        navigate('/Donation');
    };
    
  return (
   <>
       <MyNavbar />
   <div className='bg-blue-200 w-full box-border'>
    <div className='relative top-16 text-center mr-1 border-solid border-2 border-black my-4 p-2 font-extrabold text-2xl italic hover:underline'>
            Missions
    </div>
    <div>
    <div className=' flex justify-around mt-24'>
        <div className=' flex border-2 hover:bg-slate-700 border-black px-2 justify-center items-center w-2/5 space-x-2 mx-4 my-2 group-hover:opacity-10  '>
            <img className='w-48 h-64 p-2 hover:scale-105' src="./images/Missions/Missions-1.jpeg" alt="" />
            <p className='text-lg mb-3 group-hover:opacity-25'>
               <h1 className='font-bold text-xl italic hover:underline w-fit border-2 border-black mt-1 px-3 hover:bg-slate-900 hover:rounded-lg hover:text-white'>Fundraiser for Kids</h1>
               <h3 className='text-sm mb-3'>Oct 1, 2022 | Ball Room New York</h3>
               <hr className='h-1 bg-black mb-1 -mt-1'/>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque, provident eaque harum, dignissimos eos cum, officiis beatae qui tenetur sit reprehenderit omnis mollitia ullam. 
              <button className='bg-blue-600 mt-2 text-black font-semibold p-2 rounded hover:scale-x-110 flex flex-col items-center' onClick={navigateDonateform} >Donate</button>
            </p>
        </div>
        {/* <div className=' py-1 relative top-48 right-3 w-fit opacity-0 group hover:opacity-100'>
                <button className='rounded-xl bg-blue-900 hover:bg-blue-700 font-semibold hover:underline px-5 pb-2 text-xl'>Donate</button>
        </div> */}

        <div className=' flex border-2 hover:bg-slate-700 border-black px-2 justify-center items-center w-2/5 space-x-2 mx-4 my-2 group-hover:opacity-10  '>
            <img className='w-48 h-64 p-2 hover:scale-105' src="./images/Missions/Missions-4.jpeg" alt="" />
            <p className='text-lg mb-3 group-hover:opacity-25 '>
               <h1 className='font-bold text-xl italic hover:underline w-fit border-2 border-black mt-1 px-3 hover:bg-slate-900 hover:rounded-lg hover:text-white'>Food For All</h1>
               <h3 className='text-sm mb-3'>Oct 1, 2022 | Ball Room New York</h3>
               <hr className='h-1 bg-black mb-1 -mt-1'/>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque, provident eaque harum, dignissimos eos cum, officiis beatae qui tenetur sit reprehenderit omnis mollitia ullam. 
               <button className='bg-blue-600 mt-2 text-black font-semibold p-2 rounded hover:scale-x-110 flex flex-col items-center' onClick={navigateDonateform} >Donate</button>
            </p>
        </div>
    </div>
    <hr className='h-1 bg-black mb-1 mt-2'/>
    <div>
    <div className=' mr-1 border-solid border-2 text-center border-black my-4 p-2 font-extrabold text-2xl italic hover:underline'>
          Newsletter
    </div>
    <div className='justify-center items-center m-5 p-5'>
        <h1 className='justify-center items-center font-bold text-2xl text-center py-2'>
            June
        </h1>
        <div>
            <span className='font-semibold '> New baby Born : </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi possimus repudiandae eligendi! Optio voluptas enim unde natus ipsa debitis error animi excepturi obcaecati eveniet placeat dignissimos numquam, commodi iusto quae earum, maxime tempore doloribus, saepe officia. Qui asperiores voluptatibus illo tenetur, magnam excepturi aliquam, quod nihil ut alias, iusto similique.
        </div>
     </div>
     <hr className='h-1 bg-black m-5'/>
     <div className='justify-center items-center m-5 p-5'>
        <h1 className='justify-center items-center font-bold text-2xl text-center py-2'>
            June
        </h1>
        <div>
            <span className='font-semibold '> New baby Born : </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi possimus repudiandae eligendi! Optio voluptas enim unde natus ipsa debitis error animi excepturi obcaecati eveniet placeat dignissimos numquam, commodi iusto quae earum, maxime tempore doloribus, saepe officia. Qui asperiores voluptatibus illo tenetur, magnam excepturi aliquam, quod nihil ut alias, iusto similique.
        </div>
     </div>
     <hr className='h-1 bg-black m-5'/>
    </div>
    <hr className='h-1 bg-black mb-1 mt-2'/>
    <hr className='h-1 bg-black mb-1 mt-2'/>
    <div className=' mr-1 my-4 p-2 font-extrabold text-2xl italic hover:underline'>
     < Donategallery />
    </div>
    </div>
    <Footer />
   </div>
   
   </>
  )
}

export default Donate