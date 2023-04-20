import React, { useState } from "react";
import { Link,NavLink,useNavigate } from "react-router-dom";
import SignIn from "./SignIn";

function MyNavbar() {
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/signin");
  };

  let Links = [
  //  { name: "Home", link: "/" },
    // {name:"Services",link:"/"},
    { name: "About Us", link: "/aboutus" },
    { name: "Donate", link: "/donate" },
    { name: "Contact Us", link: "/contactus" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <>
      <nav className=" fixed top-0 z-10 w-full text-white border-gray-200 px-2 sm:px-4 py-2.5 bg-gray-900 ">
        <div className="flex md:justify-between justify-between">
          <div className=" flex mr-3 h-6 sm:h-9">
            <a href="/" className="self-center text-xl font-semibold  whitespace-nowrap dark:text-white cursor-pointer">
              Orphanage Foundation Center
            </a>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="h-5 mr-3 w-6 cursor-pointer md:hidden"
          >
            <img
              src={open ? "../images/cancel.png" : "../images/menu.png"}
              alt=""
            />
          </div>
          <ul
            className={`md:flex md:items-center md:py-0 pb-8 md:px-0 px-5 absolute md:static md:z-auto z-[4] left-0 top-0 w-fit md:my-0 my-14 md:mx-0 mx-1 md:w-auto md:bg-gray-900 bg-gray-900 transition-all duration-500 ease-in rounded-2xl ${
              open ? "top-0" : "-top-[500px]"
            }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:mx-3 text-md md:my-0 my-7 font-bold text-xl">
               <Link to={link.link} className="text-white hover:text-gray-200 duration-300 hover:underline"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <button
              className="md:ml-10 self-center w-32 text-lg hover:text-xl font-semibold whitespace-nowrap text-gray-800  hover:text-gray-900 bg-white rounded-md px-2 py-1 cursor-pointer hover:bg-gray-200 transform transition duration-500 hover:scale-110"
              onClick={navigateLogin}
            >
              Login
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default MyNavbar;
