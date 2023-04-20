import React from 'react'
import { Link } from 'react-router-dom';

const OrphanCard = ({orphanData}) => {
  return (
    <>
      <section className=''>
        {orphanData.map ((curElem) =>{
          const {id, number, name, image, year_of_enroll, dateOfBirth, adoption_status, aadhaarHash, birthCertHash} = curElem;
          const isAadhaarPending = !aadhaarHash;
          const isBirthCertPending = !birthCertHash;
          return (
            <div className='h-auto border-solid border-2 border-black m-2 w-full' key={id.toString()}>
              <div className='p-4 flex'>
                <img className='border-solid border-2 w-32 h-auto border-black' src={image} alt="" />
                <div className='flex-col ml-4 px-3 py-2 border-solid border-2 border-black w-full'>
                  <p className='justify-between font-bold text-2xl'>
                    <span className='font-mono absolute left-38 pb-5 px-2 border-solid border-2 border-black rounded-full h-8 w-8'>{number}</span>
                    <span className='font-serif absolute right-10'>{adoption_status}</span>
                  </p>
                  <h2 className='mt-8'> <span className='font-bold text-lg'>Name : </span> {name}</h2>
                  <h2 className='py-1'><span className='font-bold text-lg'>Date of Birth : </span>{dateOfBirth}</h2>
                  <h2 className='py-1'><span className='font-bold text-lg'>Year of Enrollment : </span>{year_of_enroll}</h2>
                  <Link to={`/orphan/${id}`} className='  border-solid border-2 border-black bg-slate-400 mr cursor-pointer hover:underline hover:font-bold px-2 text-white font-bold'>
                    More Details
                  </Link>
                  {isAadhaarPending && isBirthCertPending && <p className="text-red-500"><strong>*</strong>Please upload Aadhaar card and birth certificate</p>}
                  {isAadhaarPending && !isBirthCertPending && <p className="text-red-500"><strong>*</strong>Please upload Aadhaar card</p>}
                  {!isAadhaarPending && isBirthCertPending && <p className="text-red-500"><strong>*</strong>Please upload birth certificate</p>}
                </div>
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default OrphanCard
