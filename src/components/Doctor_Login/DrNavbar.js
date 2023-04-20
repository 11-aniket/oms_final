import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function DrNavbar() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const closeProfile = () => {
    setProfileOpen(false);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.history.pushState(null, null, '/');
    navigate('/signin');
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('token');
    if (!isLoggedIn) {
      navigate('/signin');
    }
  }, [navigate]);

  let Links = [
    { name: 'Profile', link: '/drhome' },
    { name: 'Orphans Details', link: '/orphanUMe' },
  ];

  return (
    <>
      <topnav
        className=" fixed top-0 z-10 w-full text-white border-gray-200 px-2.5 py-2.5 bg-gray-900"
        onClick={closeProfile}
      >
        <div className="mx-auto flex justify-between">
          <span className="self-center text-2xl font-semibold  whitespace-nowrap dark:text-white cursor-pointer">
            Orphanage Foundation Center
          </span>
          <div
            onClick={() => setOpen(!open)}
            className="h-5 w-6 cursor-pointer md:hidden"
          >
            <img
              src={open ? '../images/cancel.png' : '../images/menu.png'}
              alt=""
            />
          </div>
        </div>
      </topnav>
      <sidenav
        className={`sticky md:flex md:items-center h-screen md:space-x-5 md:py-0 pb-8 md:px-0 px-5 flex m-4 py-6 md:static md:z-auto z-[4] md:w-1/6 left-0 top-0 md:my-0 my-14 md:mx-0 mx-1 w-fit transition-all duration-500 ease-in ${
          open ? 'top-0' : '-top-[1000px]'
        }`}
        style={{ borderRight: '2px solid black', backgroundColor: 'white' }}
      >
        <div
          className='flex flex-col cursor-pointer font-semibold w-11/12 space-y-3 gap-y-96'
          style={{ color: 'black' }}
        >
          <ul className='space-y-3'>
            {Links.map((link) => (
              <li
                key={link.name}
                className=' text-justify hover:border-solid hover:border-gray-500 hover:w-full hover:pl-2 md:m-2 text-2xl flex items-center pl-4'
              >
                <Link to={link.link} onClick={() => setProfileOpen(true)}>
                  {link.name}  
                </Link>
              </li>
            ))}
          </ul>
          <div className='pl-4 '>
            <button className=' text-lg font-bold bg-red-500 text-white py-2 px-4 rounded-xl w-3/5' onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
        <div class="left-56 h-full top-14 w-0.5 bg-slate-500 fixed"></div>
      </sidenav>
    </>
  );
}

export default DrNavbar;
