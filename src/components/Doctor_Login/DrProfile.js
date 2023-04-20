import React, { useState, useEffect } from 'react';
import DrNavbar from './DrNavbar';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import ForbiddenPage from '../Pages/ForbiddenPage'

const DrProfile = () => {
  const [doctorData, setDoctorData] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert("You need to be logged in First !!!! ");
      window.location = '/signin';
    }
    const decoded = jwt_decode(token);
    if (decoded.token.role === "Doctor") {
      setIsAuthenticated(true);
      setIsLoading(true);
    }
    else if (decoded.token.role !== "Doctor") {
      setIsAuthenticated(false);
      alert("You Don't have Access to this page !!!! ");
      window.location = '/admin';
    }
    console.log(decoded.token.username);
    const fetchData = async () => {
      try {
        const headers = {
          'Authorization': `Bearer ${token}`
        };
        const response = await axios.get(`http://localhost:8000/channels/oms/chaincodes/doctor/doctor-read-doctor?doctorId=${decoded.token.username}`, { headers });
        const doctorData = response.data;
        setDoctorData(doctorData.result);
        console.log(doctorData);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };
  
    fetchData();
  }, []);
  
  if (isLoading) {
    return <div>Loading...</div>;
    // {isLoading ? (
    //   <div>
    //     <p className="text-3xl ml-20 text-black fixed top-28">
    //       Loading orphan details...
    //     </p>
    //     <div className="content-center">
    //       <FontAwesomeIcon
    //         icon={faCircleNotch}
    //         spin
    //         className="text-black text-6xl fixed top-24 justify-center"
    //       />
  }
  
  if (!isAuthenticated) {
    return <ForbiddenPage />;
  }
  

  return (
    <div className='bg-gradient-to-r from-indigo-400 to-purple-400 h-screen'>
    <DrNavbar />
    <div className="fixed top-16 left-1/2 transform -translate-x-1/2 max-w-sm mx-auto my-10 p-10 bg-white rounded-xl shadow-lg border-4 border-gray-800">
      <p className="text-gray-600 mb-4 font-medium text-center ">
        Doctor ID: {doctorData.id}
      </p>
      <img
        className="w-full h-64 object-cover object-center rounded-t-lg p-2 border-4 border-gray-800"
        src={doctorData.imageUrl || 'https://via.placeholder.com/400x300'}
        alt="Doctor's Profile"
      />
      <div className="mt-6 text-lg ">
      <h2 className="text-3xl font-bold text-center text-indigo-600">
          {`Dr. ${doctorData.firstName} ${doctorData.lastName}` || 'Dr. John Doe'}
      </h2>
        <p className="text-gray-800 font-medium mt-2 text-justify"> 
        Role: {doctorData.speciality || 'Orthopedic Surgeon'}
        </p>
        <p className="text-gray-800 font-medium text-justify mt-2"> 
          Organization: {doctorData.org || 'ABC Hospital'}
        </p>
        <p className="text-gray-800 font-medium text-justify mt-2"> 
          Phone: {doctorData.phoneNo || '(123) 456-7890'}
        </p>
        <div className="mt-6 text-center space-y-2">
          <p className="text-gray-900 mt-2 inline-block bg-gray-200 rounded-full px-3 py-1">
            Qualification: {doctorData.qualification || 'Hip and Knee Surgery'}
          </p>
          <p className="text-gray-900 inline-block bg-gray-200 rounded-full px-3 py-1 mr-2">
            Years of Experience: {doctorData.experience || '10'}
          </p>
        </div>
      </div>
    </div>

  </div>
  );
};

export default DrProfile;