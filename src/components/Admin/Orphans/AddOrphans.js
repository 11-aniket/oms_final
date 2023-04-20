import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

function AddOrphans({ orphans, setOrphans, setIsAdding }) {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [yearOfEnroll, setYearOfEnroll] = useState('');
    const [org, setOrg] = useState('');
    const [background, setBackground] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
      e.preventDefault();
      if (!name || !gender || !dob || !yearOfEnroll || !org || !background) {
        return Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'All fields are required.',
          showConfirmButton: true
        });
      }
    
      const apiUrl = 'http://localhost:8000/channels/oms/chaincodes/orphanage/admin-create-orphan';
      const token = localStorage.getItem('token');
    
      const data = {
        args: {
          name: name,
          gender: gender,
          dob: dob,
          yearOfEnroll: parseInt(yearOfEnroll),
          org: org,
          background: background
        }
      };
      console.log("Data",data);
    
      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(result => {
          console.log("Result ",result);
          // const updatedOrphans = [...orphans, result];
          // setOrphans(updatedOrphans);
          // setIsAdding(false);
          // Swal.close(); // Close any open message before showing success message
          Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${data.args.name}'s data has been added.`,
            showConfirmButton: false,
            timer: 1500
          });
        })
        .catch(error => {
          console.error('Error:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Failed to add orphan.',
            showConfirmButton: true
          });
        });
    };
    

    return (
        <div >
            <form className='small-container border-2 border-black' onSubmit={handleAdd}>
                <h1 className='flex h-14 mt-2  w-full bg-gray-800 text-white font-bold justify-center items-center'>Add Orphan</h1>
                <label className='mt-10 ' htmlFor="name"> Name </label>
                <input
                    id="name"
                    type="text"
                    ref={textInput}
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <label htmlFor="gender"> Gender </label>
                <input
                    id="gender"
                    type="text"
                    ref={textInput}
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
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default AddOrphans;