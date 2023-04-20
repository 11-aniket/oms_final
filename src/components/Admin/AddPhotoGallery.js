import React, { useState } from "react";
import { Link } from "react-router-dom";


const AddPhotoGallery= () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));

    // FOR BUG IN CHROME
    event.target.value = "";
  };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  return (
    <section className="section2">
      <label className="label2">
        + Add Images
        <br />
        <span className="span2"></span>
        <input className="input2"
          type="file"
          name="images"
          onChange={onSelectFile}
          multiple
          accept="image/png , image/jpeg, image/webp"
        />
      </label>
      <br />

      <input className="input2" type="file" multiple />

      {selectedImages.length > 0 &&
        (selectedImages.length > 10 ? (
          <p className="error2">
            You can't upload more than 10 images! <br />
            <span className="span2">
              please delete <b> {selectedImages.length - 10} </b> of them{" "}
            </span>
          </p>
        ) : (
          
          <button2 
            className="upload-btn"
            onClick={() => {
              console.log(selectedImages);
              
            }}
          >
            UPLOAD {selectedImages.length} IMAGE
            {selectedImages.length === 1 ? "" : "S"}
          </button2 >
          
         
          
        ))}

      <div className="images2">
        {selectedImages &&
          selectedImages.map((image, index) => {
            return (
              <div key={image} className="image2">
                <img src={image} height="200" alt="upload" />
                <button2 className="button2" onClick={() => deleteHandler(image)}>
                  delete image
                </button2>
                <p>{index + 1}</p>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default AddPhotoGallery;