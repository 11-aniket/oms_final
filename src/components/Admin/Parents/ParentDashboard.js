import React, { useState } from 'react'
import Swal from 'sweetalert2';

import HeaderParents from './HeaderParents';
import ListParents from './ListParents';
import AddParents from './AddParents';
import EditParents from './EditParents';

import parentsData from '../Api/parentsData'; 

function ParentDashboard() {

    const [parents, setParents] = useState(parentsData);
    const [selectedParent, setSelectedParent] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = (id) => {
        const [parent] = parents.filter(parent => parent.id === id);

        setSelectedParent(parent);
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
        }).then(result => {
            if (result.value) {
                const [parent] = parents.filter(parent => parent.id === id);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${parent.name}'s data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                setParents(parents.filter(parent => parent.id !== id));
            }
        });
    }


    return (
        <div className='container'>
            {/* List */}
            {!isAdding && !isEditing && (
                <>
                    <HeaderParents
                        setIsAdding={setIsAdding}
                    />
                    <ListParents
                        parents={parents}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </>
            )}
            {/* Add */}
            {isAdding && (
                <AddParents
                    parents={parents}
                    setParents={setParents}
                    setIsAdding={setIsAdding}
                />
            )}
            {/* Edit */}
            {isEditing && (
                <EditParents
                    parents={parents}
                    selectedParent={selectedParent}
                    setParents={setParents}
                    setIsEditing={setIsEditing}
                />
            )}
        </div>
    )
}

export default ParentDashboard;