import React, { Link, useEffect, useState, useRef } from "react";
import Sidenav from '../SideNav';
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import GrantAccessModal from "./GrantAccessModal";
import RevokeAccessModal from "./RevokeAccessModal";
import ImageModal from "./ModalImage";

const OrphanDetail = () => {
  const { id } = useParams();
  const [orphan, setOrphan] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [showGrantAccessModal, setShowGrantAccessModal] = useState(false);
  const [showRevokeAccessModal, setShowRevokeAccessModal] = useState(false);
  const [ birthcertfile, setBirthCertFile] = useState("");
  const [aadharfile, setAadharfile] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const token = localStorage.getItem("token");

  const fileInputRef = useRef(null);

  const handleAadharUpload = () => {
    const formData = new FormData();
    formData.append("aadhaar", aadharfile);
    formData.append("orphanId", id);
    console.log(formData);
    fetch("http://localhost:8000/channels/oms/chaincodes/orphanage/upload/admin-orphan-aadhaar", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`, // add authorization header with token
      },
      body: formData,
    })
      .then((response) => {
        if (response.status === 200) {
          fetchOrphan();
        } else {
          throw new Error("API request failed");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("API request failed");
      });
  };

  const handleBirthCertUpload = () => {
    const formData = new FormData();
    formData.append("birthcert", birthcertfile);
    formData.append("orphanId", id);
    console.log(formData);
    fetch("http://localhost:8000/channels/oms/chaincodes/orphanage/upload/admin-orphan-birthcert", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`, // add authorization header with token
      },
      body: formData,
    })
      .then((response) => {
        if (response.status === 200) {
          fetchOrphan();
        } else {
          throw new Error("API request failed");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("API request failed");
      });
  };

  useEffect(() => {
    console.log("Birthcertfile:", birthcertfile.name , "Aadhaar File : ", aadharfile.name);
  }, [birthcertfile, aadharfile]);

  const handleAadharFileChange = (event) => {
    const file = event.target.files[0];
    setAadharfile(file);
    console.log("fileName ", aadharfile.name);
    console.log("file " , file);
  };
  

  const handleBirthFileChange = (event) => {
    const file = event.target.files[0];
    setBirthCertFile(file);
    console.log("fileName ",birthcertfile.name);
    console.log("file " , file);
  };

  useEffect(() => {
    fetchOrphan();
  }, []);

  const fetchOrphan = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/channels/oms/chaincodes/orphanage/admin-read-orphan?` +
          new URLSearchParams({
            orphanId: id,
          }),
        {
          method: "GET",
          headers: {
            "Cache-Control": "no-cache",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        setOrphan(data);
        console.log(data);
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
      alert("API request failed", error);
    }
  };

  const grantAccess = async (orphanId, doctorId) => {
    try {
      console.log({
        orphanId: orphanId,
        doctorId: doctorId,
      })
      const response = await fetch(
        "http://localhost:8000/channels/oms/chaincodes/orphanage/admin-grantaccess-orphan",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body:JSON.stringify ({
            args: {
              orphanId: orphanId,
              doctorId: doctorId,
            },
          }),
        }
      );
      if (response.status === 200) {
        const data = await response.json();
        setOrphan(data);
        fetchOrphan();
      }
    } catch (error) {
      console.error(error);
      alert("API request failed");
    }
  };

  const revokeAccess = async (orphanId, doctorId) => {
    try {
      console.log({
        orphanId: orphanId,
        doctorId: doctorId,
      });
      const response = await fetch(
        `http://localhost:8000/channels/oms/chaincodes/orphanage/admin-revokeaccess-orphan`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body:JSON.stringify ({
            args: {
              orphanId: orphanId,
              doctorId: doctorId,
            },
          }),
        }
      );

      if (response.status === 200) {
        const data = await response.json();
        setOrphan(data);
        fetchOrphan();
      }
    } catch (error) {
      console.error(error);
      alert("API request failed");
    }
  };
  return (
    <>
    <div className="">
      <div className="">
        <Sidenav />
      </div>
    <div className=" fixed right-0 top-14 w-full md:w-10/12 content-center min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="fixed top-20 right-0 lg:mr-20 md:-mr-1 sm:mr-0 self-center md:w-3/4 w-fit p-2 space-y-8">
        {isLoading ? (
          <div>
            <p className="text-3xl ml-20 text-black fixed top-28">
              Loading orphan details...
            </p>
            <div className="content-center">
              <FontAwesomeIcon
                icon={faCircleNotch}
                spin
                className="text-black text-6xl fixed top-24 justify-center"
              />
            </div>
          </div>
        ) : (
          <>
            <div className="bg-white p-2 md:text-2xl sm:text-md space-y-3 shadow-md border-4 border-black md:py-4 sm:py-2">
              <h2 className="text-2xl pl-3 border-black border-2 font-bold text-gray-800">
                Orphan ID: {orphan.result.id || 1}
              </h2>
              <img className='ml-5 border-solid border-2 justify-center w-40 h-auto border-black' src='../images/boy.png' alt="" />
              <div className="bg-white shadow-md rounded-lg px-6 py-4">
                <table className="border-black border-2">
                  <tbody >
                    <tr className="border-black border-2">
                      <td className=" border-black border-2 w-1/2 text-md font-medium text-gray-800">
                        Name:
                      </td>
                      <td className=" border-black border-2 text-md font-medium text-gray-600">
                        {orphan.result.name}
                      </td>
                    </tr>
                    <tr className="border-black border-2">
                      <td className=" border-black border-2 w-1/2 text-md font-medium text-gray-800">
                        Date of Birth:
                      </td>
                      <td className=" border-black border-2 text-md font-medium text-gray-600">
                        {orphan.result.dob}
                      </td>
                    </tr>
                    <tr className="border-black border-2">
                      <td className=" border-black border-2 w-1/2  text-md font-medium text-gray-800">
                        Year of Enrollment:
                      </td>
                      <td className="border-black border-2 text-md font-medium text-gray-600">
                        {orphan.result.yearOfEnroll}
                      </td>
                    </tr>
                    <tr className="border-black border-2">
                     <td className="border-black border-2 w-1/2 text-md font-medium text-gray-800">
                      Adoption Status:
                    </td>
                    <td className="border-black border-2 text-md font-medium text-gray-600">
                      {orphan.result.isAdopted ? "Adopted" : "UnAdopted"}
                    </td>
                  </tr>
                  <tr className="border-black border-2">
                    <td className="border-black border-2 w-1/2 text-md font-medium text-gray-800">
                      Background:
                    </td>
                    <td className="border-black border-2 text-md font-medium text-gray-600">
                      {orphan.result.background}
                    </td>
                  </tr>
                  <tr className="border-2 border-black w-1/2 text-md font-medium text-gray-800">
                    <td className="border-2 border-black">
                      Upload Documents
                    </td>
                    <td className="bordre-2 border-black">
                      *********************
                    </td>
                   </tr>
                   <tr>
                    <td className="border-2 border-black">
                      Aadhar-Card
                    </td>
                    <td className="border-2 border-black">
                      {orphan.result.aadhaarHash ? (
                        <a
                        href={`http://localhost:8080/ipfs/${orphan.result.aadhaarHash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 text-white px-4 py-2 rounded"
                      >
                        View Image
                      </a>
                      ) : (
                        <>
                          <div className="flex space-x-2">
                            {aadharfile ? (
                              <div className="flex items-center space-x-2">
                                <p className="mx-3 px-4 border-black border-2 bg-gray-300 rounded-full">{aadharfile.name}</p>
                                <button
                                  onClick={handleAadharUpload}
                                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
                                >
                                  Upload
                                </button>
                                <button
                                  onClick={() => setAadharfile(null)}
                                  className="px-2 py-2 rounded-md bg-gray-400 text-white"
                                >
                                  Cancel
                                </button>
                              </div>
                            ) : (
                              <label
                                htmlFor="file_input"
                                className="block h-10 text-xl w-full text-black font-semibold border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-black focus:outline-none px-4 dark:placeholder-gray-400"
                              >
                                Browse...
                              </label>
                            )}
                            <input
                              onChange={handleAadharFileChange}
                              className="hidden"
                              id="file_input"
                              type="file"
                            />
                          </div>
                        </>
                      )}
                    </td>
                  </tr>
                   <tr>
                    <td className="border-2 border-black">
                      Birth -Certificate
                    </td>
                    <td className="border-2 border-black">
                    {orphan.result.birthCertHash ? (
                <a
                  href={`http://localhost:8080/ipfs/${orphan.result.birthCertHash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 text-white px-4 py-2 rounded"
                >
                  View Image
                </a>
              ) : (
                <>
                 <div className=" flex space-x-2">
                  {birthcertfile ? (
                    <div className=" flex items-center space-x-2">
                      <p className="mx-3 px-4 border-black border-2 bg-gray-300 rounded-full">{birthcertfile.name}</p>
                      <button
                        onClick={handleBirthCertUpload}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
                      >
                        Upload
                      </button>
                      <button
                          onClick={() => setBirthCertFile(null)}
                          className="px-2 py-2 rounded-md bg-gray-400 text-white"
                        >
                          Cancel
                        </button>
                    </div>
                    ) : (
                      <label
                        htmlFor="birth_file_input"
                        className="block h-10 text-xl w-full text-black font-semibold border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-black focus:outline-none  
                        px-4
                        dark:placeholder-gray-400"                      
                      >
                        Browse...
                      </label>
                    )}
                    <input
                      onChange={handleBirthFileChange}
                      className="hidden"
                      id="birth_file_input"
                      type="file"
                    />
                  </div>
                    </>  
                  )}                  
                    </td>
                   </tr>
                    {orphan.result.permissionGranted && (
                    <tr className="border-black border-2">
                    <td className=" border-black border-2 text-md font-medium text-gray-800">
                      Access Granted to Doctor:
                    </td>
                        <td className=" border-black  border-2 text-md font-medium text-gray-600">
                          {orphan.result.permissionGranted.join(", ")}
                        </td>
                      </tr>
                    )}
                     <tr className="border-black border-2">
                    <td className=" border-black border-2 w-1/2 text-md font-medium">
                      <button
                        onClick={() => setShowGrantAccessModal(true)}
                        className="rounded-md px-4 py-2 bg-blue-600 text-white font-bold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      >
                        Grant Access
                      </button>
                    </td>
                    <td className="border-black border-2 w-1/2 text-md font-medium ">
                      <button
                        onClick={() => setShowRevokeAccessModal(true)}
                        className="rounded-md px-4 py-2 bg-red-600 text-white font-bold hover:bg-red-700"
                      >
                        Revoke Access
                      </button>
                    </td>
                  </tr>
                  {showGrantAccessModal && (
                    <GrantAccessModal
                      setShowGrantAccessModal={setShowGrantAccessModal}
                      grantAccess={grantAccess}
                    />
                  )}
                  {showRevokeAccessModal && (
                    <RevokeAccessModal
                      setShowRevokeAccessModal={setShowRevokeAccessModal}
                      revokeAccess={revokeAccess}
                    />
                  )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div> 
    </div>
    </>
  );
};

export default OrphanDetail;
