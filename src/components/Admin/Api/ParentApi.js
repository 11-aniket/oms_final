/*

import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const data = response.data;
    const dataArray = Array.from(data); // Converting response data into an array
    return dataArray;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default fetchData;

*/
const parentt = [
    {
        id:1,
        image:"../images/parentt.png",
        name: "Surya Prakash",
        mat_status : "Married",
        age:"28",
        year_of_enroll:"2001",
        role:"Member",
    },
    {
        id:2,
        image:"../images/parentt.png",
        name: "Amitabh Shukla",
        gender:"UnMarried",
        age:"33",
        year_of_enroll:"2001",
        role:"Donor",
    }
  ]
  export default parentt