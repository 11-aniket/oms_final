import React, { useEffect } from 'react';
import { useState } from 'react';

const imageSlider = [ 
    "./images/slider_image_1.jpeg",
    "./images/slider_image_4.jpeg",
    "./images/slider_image_2.jpeg",
    "./images/slider_image_3.jpeg",
    "./images/slider_image_2.jpeg",
];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleOnNextClick = () => {
        if(currentIndex === imageSlider.length-1){
            setCurrentIndex(0)
        }
        else{
            setCurrentIndex(currentIndex+1)
        }
    };
    
    useEffect (() => {
        startSlider()
    }, [])

    const startSlider = () => {
        setInterval(() => {
            handleOnNextClick();
        }, 5000);
    }
    
    return (
        <>
            <div className="flex relative bg-black">   
                <img className='object-cover opacity-50 md:h-[730px] h-96 w-full' src={imageSlider[currentIndex]} alt="" />
                <div className=" z-[3] absolute w-full top-1/2 transform -translate-y-1 py-2 px-4 flex justify-between items-center text-2xl text-white font-extrabold">
          
                </div>
                <div className=' absolute w-full h-3/4 justify-end top-1/4  transform -translate-y-1 py-2 px-3 flex flex-col items-center md:text-2xl text-lg text-white font-semibold'>
                    <p className=' text-center w-full md:text-3xl text-xl text-white z-0 '>
                        <h2 className='text-white'>Help the <span className='md:text-4xl text-2xl text-yellow-200'>People</span></h2>
                        <h2 className='my-1'>Grow up <span className='md:text-3xl text-2xl text-yellow-200' >humanity</span> & <span className='md:text-3xl text-2xl text-yellow-200'> kindness</span></h2>
                    </p>
                    <h2 className='w-1/2 text-center text-sm items-center text-gray-300 item-center py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam praesentium enim debitis? Minima veniam, molestiae iste quis sunt maxime tempora labore repellat in, vero nostrum similique tempore veritatis eveniet ipsum, quas nisi. Autem, aliquam suscipit.</h2>
                    <a className=' z-[1] text-xl my-10 bg-red-300 opacity-70 rounded-md px-5 py-2 relative hover:underline hover:opacity-100 text-black' href='https://en.wikipedia.org/wiki/Orphanage' target="_blank">Learn more... </a>
                </div>  
            </div>
        </>
    )
}

export default Slider
