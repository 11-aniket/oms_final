import axios from 'axios';

const orphan = [];

const fetchOrphans = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get('http://localhost:8000/channels/oms/chaincodes/orphanage/admin-queryall-orphan', {
      headers: {
        Authorization: `Bearer ${token}` // Pass the token as an authorization header
      }
    });
    const data = response.data.result;
    const orphansArray = data.map((orphan, index) => ({
      id: (index + 1),
      image: '../images/boy.png',
      name: orphan.name,
      age: orphan.age,
      gender: orphan.gender,
      dateOfBirth: orphan.dob,
      adoption_status: (orphan.isAdopted == true) ? "Adopted" : "UnAdopted",
      year_of_enroll: orphan.yearOfEnroll,
      background: orphan.background,
      permissionGranted: orphan.permissionGranted
    }));
    console.log(orphansArray);
    return orphansArray;
  } catch (error) {
    console.error(error);
  }
};

const fetchData = async () => {
  try {
    const data = await fetchOrphans();
    orphan.push(...data);
  } catch (error) {
    console.error(error);
  }
};

fetchData();

export default orphan;
