import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2';
import axios from 'axios';
import HeaderDoctors from './HeaderDoctors';
import ListDoctors from './ListDoctors';
import AddDoctors from './AddDoctors';
import EditDoctors from './EditDoctors';

function DoctorDashboard() {

    const [doctors, setDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .get(
        'http://localhost:8000/channels/oms/chaincodes/orphanage/admin-queryall-doctor',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setDoctors(response.data.result);
        console.log('Orphans data: ', response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

    const handleEdit = (id) => {
        const [doctor] = doctors.filter(doctor=> doctor.id === id);

        setSelectedDoctor(doctor);
        setIsEditing(true);
    }

    const handleDelete = (id) => {
      Swal.fire({
        icon: 'warning',
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
      }).then((result) => {
        if (result.value) {
          const drToDelete = doctors.find((doctor) => doctor.id === id);
          console.log(drToDelete);
          const updatedDrs = doctors.filter((doctor) => doctor.id !== id);
          setDoctors(updatedDrs);
          Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: `${drToDelete.firstName}'s data has been deleted.`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    };

    return (
      <div className='container'>
        {/* List */}
        {!isAdding && !isEditing && (
          <>
            <HeaderDoctors setIsAdding={setIsAdding} />
            <ListDoctors
              doctors={doctors}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </>
        )}
        {/* Add or Edit */}
        {(isAdding || isEditing) && (
          <>
            {isAdding && (
              <AddDoctors
                doctors={doctors}
                setDoctors={setDoctors}
                setIsAdding={setIsAdding}
              />
            )}
            {isEditing && (
              <EditDoctors
                doctors={doctors}
                selectedDoctor={selectedDoctor}
                setDoctors={setDoctors}
                setIsEditing={setIsEditing}
              />
            )}
            <ListDoctors
              doctors={doctors}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </>
        )}
      </div>
    );
    
}

export default DoctorDashboard;
