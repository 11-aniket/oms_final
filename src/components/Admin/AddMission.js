import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

function AddMission({ missions, setMissions, setIsAdding }) {
    const [image, setImage] = useState('');
    const [mission_name, setMission_Name] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!image||!mission_name || !date ||!location||!description) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = missions.length + 1;
        const newMission = {
            id,
            image,
            mission_name,
            date,
            location,
            description
        }
        missions.push(newMission);
        setMissions(missions);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${mission_name}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    }


    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1 className='Add'>Add Mission</h1>

                <label htmlFor="image"> Image </label>
                <input
                    id="image"
                    type="file"
                    name="image"
                    value={image}
                    onChange={e => setImage(e.target.value)}
                />

                <label htmlFor="name"> Mission Name </label>
                <input
                    id="mission_name"
                    type="text"
                    ref={textInput}
                    name="mission_name"
                    value={mission_name}
                    onChange={e => setMission_Name(e.target.value)}
                />
                <label htmlFor="date">Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />

                <label htmlFor="location">Location</label>
                <input
                    id="location"
                    type="text"
                    name="location"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    />

                <label htmlFor="description">Description</label>
                <input
                    id="description"
                    type="text"
                    name="description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
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

export default AddMission;