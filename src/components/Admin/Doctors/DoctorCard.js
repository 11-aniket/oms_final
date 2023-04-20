import React from 'react'

const DoctorCard = ({doctorData}) => {
  return (
    <>
    <section className=''>
        {doctorData.map ((curElem) =>{
        const {id,name,image, years_of_experience,age, qualification, specialization, phoneNo} = curElem;
        return (
            <>
                <div className=' my-4 h-auto border-solid border-2 border-black m-2 w-full' key={id.toString()}>
                    <div className='px-4 py-3 flex '>
                            <img className=' border-solid border-2 w-32 h-auto border-black' src={image} alt="" />
                            <div className='flex-col ml-4 px-3 py-2 border-solid border-2 border-black w-full'>
                            <p className='justify-between font-bold text-2xl'>
                            <span className='font-mono absolute left-38 pb-5 px-2 border-solid border-2 border-black rounded-full h-8 w-8'>{id}</span>
                            </p>
                            <h2 className='mt-8'><span className='font-bold text-lg'>Name : </span> {name}</h2>
                            <h2 className='py-1'><span className='font-bold text-lg'>Age : </span>{age}</h2>
                            <h2 className='py-1'><span className='font-bold text-lg'>Qualification : </span>{qualification}</h2>
                            <h2 className='py-1'><span className='font-bold text-lg'>Specialization : </span>{specialization}</h2>
                            <h2 className='py-1'><span className='font-bold text-lg'>Years of Experience : </span>{years_of_experience}</h2>
                            <h2 className='py-1'><span className='font-bold text-lg'>Phone No : </span>{phoneNo}</h2>
                           
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

export default DoctorCard


// import React from 'react'

// const DoctorCard = ({doctorData}) => {
//   return (
//     <>
//     <section className=''>
//         {doctorData.map ((curElem) =>{
//         const {id,name,image, year_of_enroll,age, years_of_experience, specialization} = curElem;
//         return (
//             <>
//                 <div className=' my-4 h-auto border-solid border-2 border-black m-2 w-full' key={id.toString()}>
//                     <div className='px-4 py-3 flex '>
//                             <img className=' border-solid border-2 w-32 h-auto border-black' src={image} alt="" />
//                             <div className='flex-col ml-4 px-3 py-2 border-solid border-2 border-black w-full'>
//                             <p className='justify-between font-bold text-2xl'>
//                             <span className='font-mono absolute left-38 pb-5 px-2 border-solid border-2 border-black rounded-full h-8 w-8'>{id}</span>
//                             </p>
//                             <h2 className='mt-8'><span className='font-bold text-lg'>Name : </span> {name}</h2>
//                             <h2 className='py-1'><span className='font-bold text-lg'>Age : </span>{age}</h2>
//                             <h2 className='py-1'><span className='font-bold text-lg'>Year of Enrollment : </span>{year_of_enroll}</h2>
//                             <h2 className='py-1'><span className='font-bold text-lg'>Years of Experience : </span>{years_of_experience}</h2>
//                             <h2 className='py-1'><span className='font-bold text-lg'>Specialization : </span>{specialization}</h2>
                           
//                         </div>
//                     </div>
//                 </div>
//             </>
//         )
//     })}
//     </section>
//     </>
//   )
// }

// export default DoctorCard