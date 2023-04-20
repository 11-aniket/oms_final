import React, { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import Side_nav from '../SideNav'
import DoctorCard from './DoctorCard'
import { TiUserAdd, TiUserDelete } from 'react-icons/ti'

import axios from 'axios';

const fetchDoctors = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get('http://localhost:8000/channels/oms/chaincodes/orphanage/admin-doctor-org',{
      headers: {
        Authorization: `Bearer ${token}` // Pass the token as an authorization header
      }
    });
    const data = response.data.result;
    const doctorsArray = data.map((doctor,index) => ({
        id: (index+1),
        image: '../images/doctor.jpeg',
        name: `${doctor.firstName} ${doctor.lastName}`,
        age: doctor.age,
        qualification : doctor.qualification,
        years_of_experience: doctor.experience,
        specialization: doctor.speciality,
        phoneNo : doctor.phoneNo
      }));
    return doctorsArray;
  } catch (error) {
    console.error(error);
  }
};

const Doctor_Details = () => {
  const [doctorData,setDoctorData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const doctorsArray = await fetchDoctors();
      setDoctorData(doctorsArray);
      console.log(doctorsArray);
    };
    fetchData();
  }, []);

  return (
    <>
    <Side_nav/>
    <div className='mt-12 ml-3 md:mt-0 md:absolute left-72 top-24 border-solid border-2 border-black inline-flex w-9/12'>
        <div className='font-extrabold text-3xl italic hover:underline'>
            Doctor Details
        </div>
        <div className=' py-3 font-bold sm: text-sm md:text-base flex absolute right-[2%]'>
                <TiUserAdd className='w-9 h-7 -mt-1'/>
                <Link className='ml-1 mr-8' to="../AddDoctors">Add New Doctor</Link>
            </div>
        <div className=' sm:pt-10 md:pt-0 absolute left-6 top-16 w-11/12'>
            < DoctorCard doctorData={doctorData} />
        </div>
    </div>
    </>
  );
}

export default Doctor_Details;

// Portion to be omitted --->>>

// import React, { useState } from 'react'
// import Side_nav from '../SideNav'
// import doctor from '../Api/DoctorApi'
// import DoctorCard from './DoctorCard'
// import DoctorNavbar from './DoctorNavbar'
// import { TiUserAdd, TiUserDelete } from 'react-icons/ti'

// const uniqueList = [
//     ...new Set(
//         doctor.map((curElem)=>{
//             return curElem.specialization;
//         }) 
//     ),
//     "General"
// ];

// const Doctor_Details = () => {

//      const [doctorData,setDoctorData] = useState(doctor);
//     const [doctorlist, setDoctorlist] = useState(uniqueList);
    
//     const filterItem = (specialization) => {

//         if(specialization === "General"){
//             setDoctorData(doctor);
//             return;
//         }

//         const updatedList = doctor.filter((curElem) => {
//             return curElem.specialization === specialization;
//         });
//         setDoctorData(updatedList);
//     };
//   return (
//     <>
//     <Side_nav/>
//     <div className='mt-12 ml-3 md:mt-0 md:absolute left-72 top-24 border-solid border-2 border-black inline-flex w-9/12'>
//         <div className='font-extrabold text-3xl italic hover:underline'>
//             Doctor Details
//         </div>
//         <div className=' py-3 font-bold sm: text-sm md:text-base flex absolute right-[2%]'>
//                 <TiUserAdd className='w-9 h-7 -mt-1'/>
//                 <a className='ml-1 mr-8' href="../AddDoctors">Add New Doctor</a>
//                 <TiUserDelete className='w-8 h-7 -mt-1'/>
//                 <a className='ml-1' href="../DoctorDashboard">Delete Doctor</a>
//             </div>
//         {/* <doctorNavbar filterItem={filterItem} doctorlist={doctorlist} /> */}
//         <DoctorNavbar filterItem={filterItem} doctorlist={doctorlist} />
//         <div className=' sm:pt-10 md:pt-0 absolute left-6 top-36 w-11/12'>
//             < DoctorCard doctorData={doctorData} />
//         </div>
//     </div>
//     </>
//   );
// }

// export default Doctor_Details
 