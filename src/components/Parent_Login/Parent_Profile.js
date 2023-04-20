import React, { useState, useEffect } from 'react';

const Parent_Profile = () => {
const [profile, setProfile] = useState({
image: "",
name: "",
address: "",
contactNo: "",
maritalStatus: ""
});

useEffect(() => {
fetch("https://api.example.com/profile")
.then(response => response.json())
.then(data => {
setProfile({
image: data.image,
name: data.name,
address: data.address,
contactNo: data.contactNo,
maritalStatus: data.maritalStatus
});
})
.catch(error => {
setProfile({
image: "aniket.png",
name: "Aniket Gupta",
address: "Santacruz",
contactNo: "+91 555784555",
maritalStatus: "Single"
});
});
}, []);

return (
<div>
<main className="w-full">
<div className="card mx-auto mt-10" style={{ width: "25rem", height: "30rem" }}>
<img src={profile.image} className="card-img-top" alt="" />
<div className="card-body">
<h5 className="card-title text-xl font-bold">{profile.name}</h5>
</div>
<ul className="list-group list-group-flush">
<li className="list-group-item">{profile.address}</li>
<li className="list-group-item">{profile.contactNo}</li>
<li className="list-group-item">Marital Status : {profile.maritalStatus}</li>
</ul>
<div className="card-body">
<a href="#" className="card-link text-xl font-bold">Card link</a>
<a href="#" className="card-link text-xl font-bold">Another link</a>
</div>
</div>
</main>
</div>
);
};

export default Parent_Profile;