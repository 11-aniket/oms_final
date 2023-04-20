import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const OrphanCard = ({ id, Id, name,dob, gender, organization }) => {
  const [showMedical, setShowMedical] = useState(false);
  const[showing, setShowing] =  useState(false);
  const [showHistory, setShowHistory] = useState({
    allergies: [],
    diagnosis: [],
    disfigurements: [],
    treatments: [],
    changedBy:[]
  });
  
  const fetchMedicalHistory = async () => {
   
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:8000/channels/oms/chaincodes/doctor/doctor-read-orphan-history?orphanId=${Id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const  result1 = response.data.result;
      console.log(result1[1].changedBy[0]);
      const allergies = [];
      const diagnosis = [];
      const disfigurements = [];
      const treatments = [];
      const changedBy =[];
  
      for (let i = 0; i < result1.length; i++) {
        allergies.push(result1[i].allergies[0]);
        diagnosis.push(result1[i].diagnosis[0]);
        disfigurements.push(result1[i].disfigurements[0]);
        treatments.push(result1[i].treatment[0]);
        changedBy.push(result1[i].changedBy[0]);
      }
  
      setShowHistory({
        allergies,
        diagnosis,
        disfigurements,
        treatments,
        changedBy
      });
      setShowMedical(true);
      console.log("showing history ",showHistory);
    } catch (error) {
      console.log(error);
    }
  };
  


  useEffect(() => {
    if (showHistory) {
      fetchMedicalHistory();
    }
  }, [showing]);

  return (
    <div className="justify-center bg-white border-4 border-gray-300 shadow-md rounded-md p-4 flex flex-col" style={{ marginBottom: '1rem' }}>
      <div className="flex flex-row justify-between border border-black">
        <div className="p-3">
          <img src="https://via.placeholder.com/150" alt="Orphan" />
          <p className="text-xl font-semibold text-gray-600 mb-2">Organization Id: {Id}</p>
        </div>
        <div className='pt-2 border border-l-black p-3'>
          <h2 className="text-2xl font-bold mb-2">Name: {name}</h2>
          <p className="text-xl font-semibold text-gray-600 mb-2">Date of Birth: {dob}</p>
          <p className="text-xl font-semibold text-gray-600 mb-2">Gender: {gender}</p>
          <p className="text-xl sm:text-lg font-semibold text-gray-600 mb-4">Organization: {organization}</p>
        </div>
      </div>
      {showMedical && (
        <>
          <h3 className="border border-black mt-2 pt-2 text-2xl text-center font-bold mb-2">Medical History</h3>
          <div className="flex flex-col justify-center">
            <table className="table-fixed">
              <tbody>
                <tr className=''>
                  <td className="font-bold pr-4 border border-black">Allergies:</td>
                  <td className='border border-black'>{showHistory?.allergies?.join(', ') || 'NA'}</td>
                </tr>
                <tr>
                  <td className="font-bold pr-4 border border-black">Previous Diagnosis:</td>
                  <td className='border border-black'>{showHistory?.diagnosis?.join(', ') || 'NA'}</td>
                </tr>
                <tr>
                  <td className="font-bold pr-4 border border-black">Previous Treatment:</td>
                  <td className='border border-black'>{showHistory?.treatments?.join(', ') || 'NA'}</td>
                </tr>
                <tr>
                  <td className="font-bold pr-4 border border-black">Previous Disfigurements:</td>
                  <td className='border border-black'>{showHistory?.disfigurements?.join(', ') || 'NA'}</td>
                </tr>
                <tr>
                  <td className="font-bold pr-4 border border-black">
                    Changed By:
                  </td>
                  <td className='border border-black'>{showHistory?.changedBy?.join(', ') || 'NA'}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button
            className="mx-auto bg-green-500 w-11/12 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={() => setShowMedical(false)}
          >
            Close Medical History
          </button>
        </>
      )}

      {!showMedical && (
        <div className="flex justify-between mt-4 space-x-4">
          <button
            className="ml-10 h-10 sm:ml-5 text-center bg-blue-500 w-1/2 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={fetchMedicalHistory}
          >
            Medical History
          </button>
          <Link
            to={`/dreditOrphan/${Id}`}
            className="mr-10 h-10 sm:mr-5 text-center bg-green-500 w-1/2 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Edit
          </Link>
        </div>
      )}
    </div>
  );
};

export default OrphanCard;