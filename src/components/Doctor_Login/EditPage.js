import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link , useParams} from "react-router-dom";
import Swal from "sweetalert2";

function DrOrphanEditor() {
  const { id } = useParams();
  const [basicDetails, setBasicDetails] = useState({
    id: "",
    name: "",
    gender: "",
    dob: "",
    org: ""
  });

  const [medicalDetails, setMedicalDetails] = useState({
    allergies: "",
    diagnosis: "",
    treatment: "",
    disfigurements: "",
  });

  const[orphanId, setOrphanId] = useState(basicDetails.id);
  useEffect(() => {
    getOrphanDetails();
  },[]);

  const getOrphanDetails = async () => {
    try {
      console.log("getOrphanDetials called....")
      const token = localStorage.getItem("token"); 
      const config = {
       headers : {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    };
      const response = await axios.get(
        `http://localhost:8000/channels/oms/chaincodes/doctor/doctor-read-orphan?orphanId=${id}`, config );
      console.log(response.data.result);
      const orphanData = response.data.result;
      setBasicDetails({
        id: orphanData.id,
        name: orphanData.name,
        gender: orphanData.gender,
        dob: orphanData.dob,
      });
  
      setMedicalDetails({
        allergies: orphanData.allergies,
        diagnosis: orphanData.diagnosis,
        treatment: orphanData.treatment,
        disfigurements: orphanData.disfigurements,
      });
    } catch (error) {
      console.log(error);
    }
  }

  const handleMedicalDetailsChange = (event) => {
    setMedicalDetails({
      ...medicalDetails,
      [event.target.name]: event.target.value,
    });
     console.log(event.target.value, event.target.name);
  };
   console.log( "allgeriey  ",medicalDetails.allergies)
  const handleUpdateOrphan = async (event) => {
    console.log("ia running");
    event.preventDefault();
    const data = {
      args: {
        allergies: [medicalDetails.allergies],
        diagnosis: [medicalDetails.diagnosis],
        treatment: [medicalDetails.treatment],
        disfigurements: [medicalDetails.disfigurements],
        orphanId: id
      }
    };
    console.log("data:", data);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        "http://localhost:8000/channels/oms/chaincodes/doctor/doctor-update-orphan",
        data,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        }
      );
      if (response.status === 200) {
        console.log("response data:", response.data);
        Swal.fire({
          icon: 'success',
          title: 'Updated!',
          text: `${basicDetails.name}'s data has been updated.`,
          showConfirmButton: false,
          timer: 1500
      });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
  <div className="md:w-1/2 sm:w-5/6 mx-auto border-4 border-black p-5 my-5 mx-1/2 sm:mx-10">
      <form className="text-center">
      <hr className="my-4 border-2 border-black" />
      <div className="my-4 p-2 border-2 text-center text-2xl sm:text-lg bg-gray-900 text-white font-bold">Editor Form: Update Orphan Details</div>
        <hr className="my-4 border-2 border-black" />
        <div className="p-3 border-2 border-y-black" >
        <h3 className="my-4 p-1 bg-gray-400 font-semibold rounded-xl text-center">Basic Details:</h3>
        <label className=" ml-2 text-justify" htmlFor="id">ID:</label>
        <input 
          type="text"
          id="id"
          name="id"
          value={basicDetails.id}
          readOnly
        />

        <label className=" ml-2 text-justify" htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={basicDetails.name}
          readOnly
        />

        <label className=" ml-2 text-justify" htmlFor="gender">Gender:</label>
        <input
          type="text"
          id="gender"
          name="gender"
          value={basicDetails.gender}
          readOnly
        />
      
        <label className=" ml-2 text-justify" htmlFor="dob">DOB:</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={basicDetails.dob}
          readOnly
        />
        </div>
    <div>
    <h3 className="my-4 p-1 bg-gray-400 font-semibold rounded-xl text-center">Medical Details:</h3>
    <label className=" ml-2 text-justify" htmlFor="allergies">Allergies:</label>
    <textarea
      id="allergies"
      name="allergies"
      value={medicalDetails.allergies}
      onChange={(e)=>handleMedicalDetailsChange(e)}
    />

    <label className=" ml-2 text-justify" htmlFor="diagnosis">Diagnosis:</label>
    <textarea
      id="diagnosis"
      name="diagnosis"
      value={medicalDetails.diagnosis}
      onChange={(e)=>handleMedicalDetailsChange(e)}
    />

    <label className=" ml-2 text-justify" htmlFor="treatment">Treatment:</label>
    <textarea
      id="treatment"
      name="treatment"
      value={medicalDetails.treatment}
      onChange={(e)=>handleMedicalDetailsChange(e)}
    />

    <label className=" ml-2 text-justify" htmlFor="disfigurements">Disfigurements:</label>
    <textarea
      id="disfigurements"
      name="disfigurements"
      value={medicalDetails.disfigurements}
      onChange={(e)=>handleMedicalDetailsChange(e)}
    />

    </div>
    <Link to="/orphanUMe" className=" w-3/6 border-2 border-green-900 inline-block text-lg bg-green-400 hover:bg-green-700 text-black font-bold py-2 px-4 rounded mx-auto mt-4" onClick={(e)=>handleUpdateOrphan(e)}>Update</Link>

  </form>
</div>
</>
)
  }

export default DrOrphanEditor
