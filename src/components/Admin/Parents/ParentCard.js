import React from 'react'

const ParenttCard = ({parenttData}) => {
  return (
    <>
    <section className=''>
        {parenttData.map ((curElem) =>{
        const {id,name,image, year_of_enroll,age,mat_status,role } = curElem;
        return (
            <>
                <div className=' h-auto border-solid border-2 border-black m-2 w-full' key={id.toString()}>
                    <div className='p-4 flex '>
                            <img className=' border-solid border-2 w-32 h-auto border-black' src={image} alt="" />
                            <div className='flex-col ml-4 px-3 py-2 border-solid border-2 border-black w-full'>
                                <p className='justify-between font-bold text-2xl'>
                                    <span className='font-mono absolute left-38 pb-5 px-2 border-solid border-2 border-black rounded-full h-8 w-8'>{id}</span>
                                    <span className=' font-serif absolute right-10'>{role}</span>
                                </p>
                                <h2 className='mt-8'><span className='font-bold text-lg'>Name : </span> {name}</h2>
                                <h2 className='py-1'><span className='font-bold text-lg'>Age : </span>{age}</h2>
                                <h2 className='py-1'><span className='font-bold text-lg'>Martial_Status : </span>{mat_status}</h2>
                                <h2 className='py-1'><span className='font-bold text-lg'>Year of Enrollment : </span>{year_of_enroll}</h2>
                                <button className='border-solid border-2 border-black bg-slate-400 my-1 cursor-pointer hover:underline hover:font-bold px-2'>More Details</button>
                        </div>
                    </div>
                </div>
            </>
        )
    })}
    </section>
    </>
  )
}

export default ParenttCard