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
      year_of_enroll: doctor.year_of_enroll,
      years_of_experience: doctor.experience,
      specialization: doctor.speciality
    }));
    return doctorsArray;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default fetchDoctors;
