import React from 'react'
function ListParents({ parents, handleEdit, handleDelete }) {

    

    return (
        <div className='border border-black contain-table'>
            <table className='border border-black striped-table'>
                <thead className="border border-black">
                    <tr className="border border-black">
                        <th className="border border-black">No.</th>
                        <th className="border border-black">FirstName</th>
                        <th className="border border-black">LastName</th>
                        <th className="border border-black">Organisation</th>
                        <th className="border border-black">Address</th>
                        <th className="border border-black">Phone No</th>
                        <th className="border border-black">Occupation</th>
                        <th className="border border-black">IsMarried</th>
                        <th className="border border-black">References</th>
                        <th colSpan={2} className=" border border-black text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="border border-black">
                    {parents.length > 0 ? (
                        parents.map((parent, i) => (
                            <tr className="border border-black" key={parent.id}>
                                <td className="border border-black">{i + 1}</td>
                                <td className="border border-black">{parent.firstName}</td>
                                <td className="border border-black">{parent.lastName}</td>
                                <td className="border border-black">{parent.org}</td>
                                <td className="border border-black">{parent.address}</td>
                                <td className="border border-black">{parent.phoneNo}</td>
                                <td className="border border-black">{parent.occupation}</td>
                                <td className="border border-black">{parent.isMarried}</td>
                                <td className="border border-black">{parent.references}</td>
                              
                                <td className="border border-black text-right">
                                    <button3 
                                        onClick={() => handleEdit(parent.id)}
                                        className="button muted-button"
                                    >
                                        Edit
                                    </button3>
                                </td>
                                <td className="border border-black text-left">
                                    <button3
                                        onClick={() => handleDelete(parent.id)}
                                        className="button muted-button"
                                    >
                                        Delete
                                    </button3>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td className='border border-black' colSpan={7}>No Parents</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ListParents;