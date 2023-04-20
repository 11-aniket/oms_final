import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import OrphanCard from './drOrphanCard';
import DrNavbar from './DrNavbar';

const OrphanUMe = () => {
  const [orphans, setOrphans] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [dataReceived, setDataReceived] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem('token');
        const headers = {
          'Authorization': `Bearer ${token}`,
          'Cache-Control': 'no-cache'
        };
        const res = await Axios.get('http://localhost:8000/channels/oms/chaincodes/doctor/doctor-read-orphan-assigned', {headers});
        setOrphans(res.data.result);
        console.log("res.data", res.data.result);
        setIsLoading(false);
        setDataReceived(true);
        console.log("response " , orphans);
      } catch (err) {
        console.error(err);
        alert('Error fetching orphans data');
      }
      setIsLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div className="flex min-h-screen">
      <DrNavbar />
      <div className='flex flex-col items-center justify-center mt-10 md:mt-20 px-0 md:pl-10 w-3/5'>
        {isLoading || !dataReceived ? (
          <div>Loading...</div>
        ) : (
          orphans.length > 0 ? (
            orphans.map(orphan => (
              <OrphanCard
                key={orphan.id}
                Id = {orphan.id}
                name={orphan.name}
                dob={orphan.dob}
                gender = {orphan.gender}
                organization={orphan.org}
              />
            ))
          ) : (
            <div>No orphans found.</div>
          )
        )}
      </div>
    </div>
  );
};

export default OrphanUMe;
