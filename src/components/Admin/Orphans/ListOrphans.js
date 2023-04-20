import React from 'react';
import { Link } from 'react-router-dom';

function ListOrphans({ orphans}) {
  return (
    <div className="contain-table border border-black">
      <table className="striped-table border border-black">
        <thead className="border border-black">
          <tr className="border border-black">
            <th className="border border-black">No.</th>
            <th className="border border-black">Id</th>
            <th className="border border-black">Name</th>
            <th className="border border-black">Gender</th>
            <th className="border border-black">Date Of Birth</th>
            <th className="border border-black">YearOfEnroll</th>
            <th className="border border-black">Organisation</th>
            <th className="border border-black">Background</th>
            <th  colSpan={2} className="border border-black text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="border border-black">
          {orphans && orphans.length > 0 ? (
            orphans.map((orphan, i) => (
              <tr className="border border-black" key={orphan.id}>
                <td className="border border-black">{i + 1}</td>
                <td className="border border-black">{orphan.id}</td>
                <td className="border border-black">{orphan.name}</td>
                <td className="border border-black">{orphan.gender}</td>
                <td className="border border-black">{orphan.dob}</td>
                <td className="border border-black">{orphan.yearOfEnroll}</td>
                <td className="border border-black">{orphan.org}</td>
                <td className="border border-black">{orphan.background}</td>

                <td className="border border-black ">
                  <div className=' border border-black button muted-button'>
                  <Link to={`/editOrphan/${orphan.id}`}>
                    Edit
                  </Link>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="border border-black" colSpan={7}>No Orphans</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ListOrphans;
