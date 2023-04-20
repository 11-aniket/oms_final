import React from 'react'
import { useState , useEffect } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import jwt_decode from "jwt-decode";

function Sidenav() {
  const Links = [
    { name: "Home", link: "/admin" },
    { name: "Photo Gallery", link: "/photogallery" },
    { name: "Missions", link: "/missions" },
    { name: "News Letter", link: "/newsletter" },
    { name: "Feedback", link: "/feedback" },
    { name: "Doctors", link: "/doctors" },
    { name: "Parents", link: "/parent_details" },
    
  ];
  const [open, setOpen] = useState(false);
  const [username , setUserName] = useState("");
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.clear();
    window.history.pushState(null, null, '/');
    navigate('/signin');
  };

   useEffect(() => {
     const token = localStorage.getItem('token');
     const decoded = jwt_decode(token);
     setUserName(decoded.token.username);
     console.log(username);
   }, []);

  return (
    <>
      <nav className=" fixed  top-0 z-100 w-screen text-white border-gray-200 px-2 sm:px-4 py-2.5 bg-gray-900 ">
        <div className="flex  mr-3 h-6 sm:h-9  flex-wrap md:justify-between justify-between mx-auto">
          <Link to='/admin' className=" text-xl font-semibold  whitespace-nowrap dark:text-white cursor-pointer">Orphanage Foundation Center</Link>
        </div>
        <div onClick={() => setOpen(!open)}
          className="h-5 mr-3 w-6 cursor-pointer md:hidden">
          <img src={open ? "../images/cancel.png" : "../images/menu.png"} alt="" />
        </div>
      </nav>
      <sidenav className={`md:flex md:items-center md:space-x-5 md:py-0 pb-8 md:px-0 px-5 flex m-4 py-6 absolute md:static md:z-auto z-[4] md:mt-16 md:w-2/5 left-0 top-0 md:my-0 my-14 md:mx-0 mx-1 w-fit transition-all duration-500 ease-in rounded-2xl ${open ? 'top-0' : '-top-[1000px]'}`}>
        <div className='flex flex-col cursor-pointer sm:text-white sm:bg-slate-600 md:bg-white md:text-black font-semibold md:w-2/5 sm:w-1/2 '>
         <div> 
          <ul className='space-y-3'>
            <h1 className='w-56 p-2 border-4 border-black hover:border-solid hover:border-2 hover:border-gray-500  md:m-2 text-lg md:pr-8 '>Welcome, {username}</h1>
            {Links.map((link) => (
              <li key={link.name} className='w-56 p-2 border-t-2 border-r-4 border-b-4 border-black hover:border-solid hover:border-2 hover:border-gray-500  md:m-2 text-xl md:pr-8 '>
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='pt-32 cursor-pointer'>
          <button className="bg-red-500 text-white py-3 px-20 ml-2 rounded-xl fixed" onClick={handleLogout}>
             Logout
          </button>
        </div>
        </div>
        <div class="left-56 h-full top-14 w-0.5 bg-slate-500 fixed"></div>
      </sidenav>
    </>
  )
}

export default Sidenav
