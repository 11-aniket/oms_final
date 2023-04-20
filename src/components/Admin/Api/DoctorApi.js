// import axios from 'axios';

// const doctor = async () => {
//   try {
//     // const response = await axios.get('http://localhost:8000/channels/oms/chaincodes/orphanage/admin-queryall-doctor');
//     const token = localStorage.getItem('token');
//     const response = await axios.get('http://localhost:8000/channels/oms/chaincodes/orphanage/admin-doctor-org',{
//       headers: {
//         Authorization: `Bearer ${token}` // Pass the token as an authorization header
//       }
//     });
//     const data = response.data.result;
//     const doctorsArray = data.map((doctor,index) => ({
//       id: (index+1),
//       image: '../images/doctor.jpeg',
//       name: `${doctor.firstName} ${doctor.lastName}`,
//       age: doctor.age,
//       year_of_enroll: doctor.year_of_enroll,
//       years_of_experience: doctor.experience,
//       specialization: doctor.speciality
//     }));
//     console.log(doctorsArray);
//   } catch (error) {
//     console.error(error);
//   }
// };

const doctor = [
    {
        id:1,
        image:"../images/doctor.jpeg",
        name: "Dr. Suraj Sharma",
        age:"33",
        year_of_enroll:"2001",
        years_of_experience:"4",
        specialization : "Dentist",
    },
    {
      id:2,
      image:"../images/doctor.jpeg",
      name: "Dr. Neil Ora",
      age:"35",
      year_of_enroll:"2003",
      years_of_experience:"10",
      specialization : "Therapist",
  },
  {
    id:3,
    image:"../images/doctor.jpeg",
    name: "Dr. Neil Ora",
    age:"35",
    year_of_enroll:"2003",
    years_of_experience:"10",
    specialization : "Psychotherapist",
  },
  ];
  
   export default doctor