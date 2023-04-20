import axios from 'axios';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const EditOrphans = () => {
  const { id } = useParams();
  const [orphan, setOrphan] = useState({});
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [yearOfEnroll, setYearOfEnroll] = useState('');
  const [org, setOrg] = useState('');
  const [background, setBackground] = useState('');

  useEffect(() => {
    fetchOrphan();
  }, []);

  const fetchOrphan = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:8000/channels/oms/chaincodes/orphanage/admin-read-orphan?` + new URLSearchParams({
        orphanId: id,
      }), {
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        setOrphan(data);
        setName(data.result.name);
        setGender(data.result.gender);
        setDob(data.result.dob);
        console.log(dob);
        setYearOfEnroll(data.result.yearOfEnroll);
        setOrg(data.result.org);
        setBackground(data.result.background);
      }
    } catch (error) {
      console.error(error);
      alert('API request failed', error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!name || !gender || !dob || !yearOfEnroll || !org || !background) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const orphan = {
      id,
      name,
      gender,
      dob,
      yearOfEnroll,
      org,
      background,
    };

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        return Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'You are not authorized to perform this action.',
          showConfirmButton: true,
        });
      }

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      const body = {
        args: orphan,
        orphanId: id,
      };

      const response = await axios.post(
        'http://localhost:8000/channels/oms/chaincodes/orphanage/admin-update-orphan',
        body,
        config
      );

      if (response.data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Updated!',
          text: `${orphan.name}'s information has been updated successfully.`,
          showConfirmButton: true,
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Unable to update orphan information.',
          showConfirmButton: true,
        });
      }
    } catch (error) {
      console.error(error);
      alert('API request failed', error);
    }
  };

  return (
        <div >
           <h1 className='flex items-center h-14 text-center flex-wrap md:justify-between z-10  border-gray-200 px-2  text-xl font-semibold  whitespace-nowrap cursor-pointer bg-gray-900 text-white w-full'>Edit Orphan</h1>
            <form className='small-container' onSubmit={handleUpdate}>
                <label className='mt-20' htmlFor="name"> Name </label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <label htmlFor="gender"> Gender </label>
                <input
                    id="gender"
                    type="text"
                    name="gender"
                    value={gender}
                    onChange={e => setGender(e.target.value)}
                />
                <label htmlFor="dob">Dob</label>
                <input
                    id="dob"
                    type="date"
                    name="dob"
                    value={dob}
                    onChange={e => setDob(e.target.value)}
                />
                <label htmlFor="yearOfEnroll">YearOfEnroll</label>
                <input
                    id="yearOfEnroll"
                    type="number"
                    name="yearOfEnroll"
                    value={yearOfEnroll}
                    onChange={e => setYearOfEnroll(e.target.value)}
                    />
                <label htmlFor="org">Organisation</label>
                <input
                    id="org"
                    type="text"
                    name="org"
                    value={org}
                    onChange={e => setOrg(e.target.value)}
                />
                <label htmlFor="background">Background</label>
                <input
                    id="background"
                    type="text"
                    name="background"
                    value={background}
                    onChange={e => setBackground(e.target.value)}
                />

                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        // onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default EditOrphans;