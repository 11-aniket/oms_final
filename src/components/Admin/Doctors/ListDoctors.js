import React from 'react'

function ListDoctors({ doctors, handleEdit, handleDelete }) {
    return (
        <div className='border border-black contain-table'>
            <table className='border border-black striped-table'>
                <thead className="border border-black">
                    <tr className="border border-black">
                        <th className="border border-black">No.</th>
                        <th className="border border-black">FisrtName</th>
                        <th className="border border-black">LastName</th>
                        <th className="border border-black">Age</th>
                        <th className="border border-black">Organisation</th>
                        <th className="border border-black">Speciality</th>
                        <th className="border border-black">Qualification</th>
                        <th className="border border-black">Experience</th>
                        <th className="border border-black">Phone No</th>
                        <th className="border border-black">Personal Address</th>
                        <th colSpan={2} className=" border border-black text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="border border-black">
                    {doctors.length > 0 ? (
                        doctors.map((doctor, i) => (
                            <tr className="border border-black" key={doctor.id}>
                                <td className="border border-black">{i + 1}</td>
                                <td className="border border-black">{doctor.firstName}</td>
                                <td className="border border-black">{doctor.lastName}</td>
                                <td className="border border-black">{doctor.age}</td>
                                <td className="border border-black">{doctor.org}</td>
                                <td className="border border-black">{doctor.speciality} </td>
                                <td className="border border-black">{doctor.qualification} </td>
                                <td className="border border-black">{doctor.experience} </td>
                                <td className="border border-black">{doctor.phoneNo} </td>
                                <td className="border border-black">{doctor.personalAddress} </td>

                                <td className="border border-black text-right">
                                    <button2
                                        onClick={() => handleEdit(doctor.id)}
                                        className="button muted-button"
                                    >
                                        Edit
                                    </button2>
                                </td>
                                <td className="border border-black text-left">
                                    <button2
                                        onClick={() => handleDelete(doctor.id)}
                                        className="button muted-button"
                                    >
                                        Delete
                                    </button2>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Doctors</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ListDoctors;