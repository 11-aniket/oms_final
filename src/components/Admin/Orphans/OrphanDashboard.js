import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import ListOrphans from '../Orphans/ListOrphans';
import AddOrphans from './AddOrphans';
import HeaderOrphans from './HeaderOrphans';

function OrphanDashboard() {
  const [orphans, setOrphans] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .get(
        'http://localhost:8000/channels/oms/chaincodes/orphanage/admin-queryall-orphan',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setOrphans(response.data.result);
        console.log('Orphans data: ', response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const handleDelete = (id) => {
  //   Swal.fire({
  //     icon: 'warning',
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     showCancelButton: true,
  //     confirmButtonText: 'Yes, delete it!',
  //     cancelButtonText: 'No, cancel!',
  //   }).then((result) => {
  //     if (result.value) {
  //       const orphanToDelete = orphans.find((orphan) => orphan.id === id);
  //       console.log(orphanToDelete);
  //       const updatedOrphans = orphans.filter((orphan) => orphan.id !== id);
  //       setOrphans(updatedOrphans);
  //       Swal.fire({
  //         icon: 'success',
  //         title: 'Deleted!',
  //         text: `${orphanToDelete.name}'s data has been deleted.`,
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //     }
  //   });
  // };

  return (
    <div className="container">
      {/* List */}
      {!isAdding && (
        <>
          <HeaderOrphans setIsAdding={setIsAdding} />
          <ListOrphans orphans={orphans}/>
        </>
      )}
      {/* Add */}
      {isAdding && (
        <AddOrphans
          orphans={orphans}
          setOrphans={setOrphans}
          setIsAdding={setIsAdding}
        />
      )}
    </div>
  );
}

export default OrphanDashboard;
