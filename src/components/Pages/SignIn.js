import { React, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate =  useNavigate();
  const navigatenewHome = (e) => {
    console.log(e); 
    e.preventDefault();
     const args = {
      username: username,
      password: password,
      org: org,
      role: role,
    };
    console.log(args); // Log the args object

  axios.defaults.timeout = 10000;
    axios.post("http://localhost:8000/login", {args} )
      .then((res) => {
        if(res.status == 200){
        const token = res.data.token;
        localStorage.setItem('token',token);
        switch (role) {
          case "Admin":
            navigate("/admin");
            break;
          case "Doctor":
            navigate("/drhome");
            break;
          case "Parent":
            navigate("/parent");
            break;
          default:
            navigate("/");
            break;
        }
        }
      })
      .catch((error) => {
        alert("Username or password Incorrect!!!");
        console.log(error);
      });
      const token = localStorage.getItem('token');


      
  };
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Admin");
  const [org, setOrg] = useState("Org1");

  return (
    <>
      <div className="relative w-full h-screen justify-center  bg-gray-900/80 ">
        <img
          className="absolute w-full h-full object-cover mix-blend-overlay"
          src="../images/login.jpg"
          alt=""
        />
        <div className="flex justify-center items-center h-full">
          <form
            action=""
            className="max-w-[500px] w-full mx-auto bg-white p-8 rounded-2xl"
          >
            <h2 className="text-4xl font-bold text-center py-4 border-x-8">
              Orphan Foundation Center
            </h2>
            <hr />

            <div className="flex flex-col mb-4 ">
              <label>Username</label>
              <input
                className="border relative bg-gray-200 p-2"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                type="text"
              />
            </div>
            <div className="flex flex-col mb-4 Blue">
              <label >Password</label>
              <input
                className="border relative bg-gray-200 p-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </div>
            <div>
              <label>Select Role</label>
              <div className="relative w-full flex flex-col mb-4">
                <select
                  className="w-full p-2 text-black bg-gray-200 border rounded-md shadow-sm hover:border hover:border-black"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="Admin">Admin</option>
                  <option value="Doctor">Doctor</option>
                  {/* <option value="Parent">Parent</option> */}
                </select>
              </div>
            </div>
            <div>
              <label>Select Organization</label>
              <div className="relative w-full flex flex-col mb-4">
                <select
                  className="w-full p-2 text-black bg-gray-200 border rounded-md shadow-sm hover:border hover:border-black"
                  value={org}
                  onChange={(e) => setOrg(e.target.value)}
                >
                  <option value="Org1">Organization 1</option>
                  <option value="Org2">Organization 2</option>
                </select>
              </div>
            </div>

            <button
              className="w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-800 relative text-white rounded-3xl"
              onClick={(e)=>navigatenewHome(e)}
            >
              Sign In{" "}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;