import React, { useState } from "react";

const RevokeAccessModal = ({ setShowRevokeAccessModal, revokeAccess }) => {
  const [orphanId, setOrphanId] = useState("");
  const [doctorId, setDoctorId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the revokeAccess function with the input values
    revokeAccess(orphanId, doctorId);
    // Reset the form and hide the modal
    setOrphanId("");
    setDoctorId("");
    setShowRevokeAccessModal(false);
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div
                className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
              >
                <svg
                  className="h-6 w-6 text-red-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-3xl leading-6 font-medium text-gray-900"
                  id="modal-headline"
                >
                  Revoke Access
                </h3>
                <div className="mt-2">
                  <form onSubmit={handleSubmit}>
                    <div className="my-2">
                      <label
                        htmlFor="orphanId"
                        className="block text-md font-medium text-gray-700"
                      >
                        Orphan ID
                      </label>
                      <input
                        type="text"
                        name="orphanId"
                        id="orphanId"
                        value={orphanId}
                        onChange={(e) => setOrphanId(e.target.value)}
                        autoComplete="off"
                        required
                        className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>
                    <div className="my-2">
                    <label
                        htmlFor="doctorId"
                        className="block text-md font-medium text-gray-700"
                    >
                        Doctor ID
                    </label>
                    <input
                        type="text"
                        name="doctorId"
                        id="doctorId"
                        value={doctorId}
                        onChange={(e) => setDoctorId(e.target.value)}
                        autoComplete="off"
                        required
                        className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    />
                    </div>
                    <div className="mt-4 space-x-4">
                  <button
                    type="submit"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Revoke Access
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowRevokeAccessModal(false)}
                    className="ml-2 inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 border border-transparent rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Cancel
                  </button>
                </div>
                    </form>
                </div>
            </div> 
            </div>
          </div>  
        </div>
      </div>
    </div>
  );  
};             

export default RevokeAccessModal;