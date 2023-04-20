import React, { useState, useEffect } from 'react';
import Sidenav from '../SideNav';
import Orphannavbar from './OrphanNavbar';
import OrphanCard from './OrphanCard';
import { Link } from 'react-router-dom';
import { TiUserAdd } from 'react-icons/ti';
import { GrUpdate} from 'react-icons/gr';
import jwt_decode from "jwt-decode";
import ForbiddenPage from '../../Pages/ForbiddenPage'

const OrphanDetails = () => {
    const [orphanData, setOrphanData] = useState([]);
    const [orphanlist, setOrphanlist] = useState(['All', 'Adopted', 'Unadopted']);
    const [selectedOption, setSelectedOption] = useState('All');
    const [originalData, setOriginalData] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
  
    const fetchOrphans = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          alert("You need to be logged in First !!!! ");
          window.location = '/signin';
        }
        const decoded = jwt_decode(token);
        if (decoded.token.role === "Admin") {
          setIsAuthenticated(true);
        }
        else if(decoded.token.role !== "Admin"){
          setIsAuthenticated(false);
          alert("You Don't have Access to this page !!!! ");
          window.location = '/drhome';
        }
        const response = await fetch('http://localhost:8000/channels/oms/chaincodes/orphanage/admin-queryall-orphan', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if(response.status === 200) {
        const data = await response.json();
        const orphansArray = data.result.map((orphan,index) => ({
          id: orphan.id,
          number:index+1,
          image: '../images/boy.png',
          name: orphan.name,
          age: orphan.age,
          gender: orphan.gender,
          dateOfBirth: orphan.dob,
          adoption_status: (orphan.isAdopted == true ) ? 'Adopted' : 'Unadopted',
          year_of_enroll: orphan.yearOfEnroll,
          background: orphan.background,
          permissionGranted: orphan.permissionGranted,
          aadhaarHash:orphan.aadhaarHash,
          birthCertHash:orphan.birthCertHash,
        }));
        setOrphanData(orphansArray);
        setOriginalData(orphansArray);
      }
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      fetchOrphans();
    }, []);
  
    const filterItem = (option) => {
      setSelectedOption(option);
    };
  
    useEffect(() => {
      if (selectedOption === 'All') {
        setOrphanData(originalData);
      } else {
        const updatedList = originalData.filter((orphan) => orphan.adoption_status === selectedOption);
        setOrphanData(updatedList);
      }
    }, [selectedOption, originalData]);

    useEffect(() => {
      const handlePopstate = () => {
        // force re-render when the browser history changes
        window.location.reload();
      };
      window.onpopstate = handlePopstate;
      return () => {
        window.onpopstate = null;
      };
    }, []);

    if (!isAuthenticated) {
      return <ForbiddenPage /> ;
    }
  
    return (
      <>
        <Sidenav />
        <div className='mt-12 ml-3 md:mt-0 md:absolute left-72 top-24 border-solid border-2 border-black inline-flex w-9/12'>
          <div className='font-extrabold text-3xl italic hover:underline'>Orphan Details</div>
          <div className='py-3 font-bold sm:text-sm md:text-base flex absolute right-[2%]'>
            <TiUserAdd className='w-9 h-7 -mt-1' />
            <Link className='ml-1 mr-8' to='../AddOrphans'>
              Add New Orphan
            </Link>
            <GrUpdate className='w-8 h-8-mt-1' />
            <Link className='ml-1 mr-8 ' to='../OrphanDashboard'>
              Update
            </Link>
          </div>
          <Orphannavbar filterItem={filterItem} orphanlist={orphanlist} />
        <div className='sm:pt-10 md:pt-0 absolute left-6 top-36 w-11/12'>
          <OrphanCard orphanData={orphanData} />
        </div>
      </div>
    </>
  );
};

export default OrphanDetails;
