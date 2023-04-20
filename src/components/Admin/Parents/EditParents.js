import React, { useState } from 'react'
import Swal from 'sweetalert2';

function EditParents({ parents, selectedParent, setParents, setIsEditing }) {

    const id = selectedParent.id;

    const [firstName, setFirstName] = useState(selectedParent.firstName);
    const [lastName, setLastName] = useState(selectedParent.lastName);
    const [org, setOrg] = useState(selectedParent.org);
    const [address, setAddress] = useState(selectedParent.address);
    const [phoneNo, setPhoneNo] = useState(selectedParent.phoneNo);
    const [occupation, setOccupation] = useState(selectedParent.occupation);
    const [isMarried, setIsMarried] = useState(selectedParent.isMarried);
    const [references, setReferences] = useState(selectedParent.references);
    
    const handleUpdate = e => {
        e.preventDefault();

        if  (!firstName||!lastName||!org||!address||!phoneNo||!occupation||!isMarried||!references){
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const parent = {
            id,
            firstName,
            lastName,
            org,
            address,
            phoneNo,
            occupation,
            isMarried,
            references
           
        };

        for (let i = 0; i < parents.length; i++) {
            if (parents[i].id === id) {
                parents.splice(i, 1, parent);
                break;
            }
        }

        setParents(parents);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${parent.name}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1 className='flex  h-14  flex-wrap md:justify-between justify-between  fixed  top-0 z-10  border-gray-200 px-2  text-xl font-semibold  whitespace-nowrap dark:text-white cursor-pointer bg-gray-900 text-white w-full'>Edit Parent</h1>
                <label className='mt-20' htmlFor="firstName"> FirstName </label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="lastName"> LastName </label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <label htmlFor="org">Organisation</label>
                <input
                    id="org"
                    type="text"
                    name="org"
                    value={org}
                    onChange={e => setOrg(e.target.value)}
                    />
                <label htmlFor="address"> Address</label>
                <input
                    id="address"
                    type="text"
                    name="address"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                />
                <label htmlFor="phoneNo">PhoneNo</label>
                <input
                    id="phoneNo"
                    type="number"
                    name="phoneNo"
                    value={phoneNo}
                    onChange={e => setPhoneNo(e.target.value)}
                    />
                <label htmlFor="occupation">Occupation</label>
                <input
                    id="occupation"
                    type="text"
                    name="occupation"
                    value={occupation}
                    onChange={e => setOccupation(e.target.value)}
                    />
                <label htmlFor="isMarried">IsMarried</label>
                <input
                    id="isMarried"
                    type="text"
                    name="isMarried"
                    value={isMarried}
                    onChange={e => setIsMarried(e.target.value)}
                    />
                <label htmlFor="references">References</label>
                <input
                    id="references"
                    type="text"
                    name="references"
                    value={references}
                    onChange={e => setReferences(e.target.value)}
                    />
               
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default EditParents;