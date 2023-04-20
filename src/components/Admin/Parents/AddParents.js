import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";

function AddParents() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [orphanId, setOrphanId] = useState("");
  const [isMarried, setIsMarried] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [occupation, setOccupation] = useState("");

  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);

  const addParent = async () => {
    const url =
      "http://localhost:8000/channels/oms/chaincodes/orphanage/admin-create-parent";
    const token = localStorage.getItem("token");

    const data = {
      args: {
        name,
        email,
        phone,
        occupation,
        isMarried,
        orphanId,
        address,
      },
    };
    console.log(data);
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
            Swal.fire({
                icon: "success",
                title: "Added!",
                text: `${name}'s data has been Added.`,
                showConfirmButton: false,
                timer: 1500,
              });
        }
      })
      .catch((error) => console.error(error));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (
      !name ||
      !phone ||
      !orphanId ||
      !address ||
      !email ||
      !occupation ||
      !isMarried
    ) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }
  };

  return (
    <>
      <h1 className="flex items-center h-14  flex-wrap md:justify-between justify-between  fixed  top-0 z-10  border-gray-200 px-2  text-xl font-semibold  whitespace-nowrap dark:text-white cursor-pointer bg-gray-900 text-white w-full">
        Add Parent
      </h1>
      <div className="small-container">
        <form onSubmit={handleAdd}>
          <label className="mt-20" htmlFor="name">
            {" "}
            Name{" "}
          </label>
          <input
            id="name"
            type="text"
            ref={textInput}
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email"> Email </label>
          <input
            id="email"
            type="text"
            ref={textInput}
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="orphanId">OrphanId</label>
          <input
            id="orphanId"
            type="text"
            name="orphanId"
            value={orphanId}
            onChange={(e) => setOrphanId(e.target.value)}
          />
          <label htmlFor="address"> Address</label>
          <input
            id="address"
            type="text"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="number"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label htmlFor="occupation">Occupation</label>
          <input
            id="occupation"
            type="text"
            name="occupation"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          />
          <label>Are you married?</label>
          <div className="flex flex-row space-x-5">
            <label>
              <input
                type="radio"
                name="isMarried"
                value="true"
                checked={isMarried === "true"}
                onChange={(e) => setIsMarried(e.target.value)}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="isMarried"
                value="false"
                checked={isMarried === "false"}
                onChange={(e) => setIsMarried(e.target.value)}
              />
              No
            </label>
          </div>
          <div style={{ marginTop: "30px" }}>
            <input type="submit" value="Add" onClick={() => addParent()} />
            <input
              style={{ marginLeft: "12px" }}
              className="muted-button"
              type="button"
              value="Cancel"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default AddParents;
