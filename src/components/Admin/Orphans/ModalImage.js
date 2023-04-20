import React from "react";

const ImageModal = ({ imageUrl, altText, onClose }) => {
  console.log("I have been called ....")
  return (
    <div className="fixed z-100 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div className="w-full max-w-lg mx-auto rounded-lg overflow-hidden shadow-lg">
          <div className="relative pb-2/3">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src={imageUrl}
              alt={altText}
            />
          </div>
          <div className="bg-white px-4 py-3">
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-gray-200 rounded-full hover:bg-gray-300 text-gray-800 px-4 py-2 font-semibold"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
