import React, { useState, useEffect } from 'react';

const OrphanagePage = () => {
const [orphanage, setOrphanage] = useState({
name: "",
address: "",
contactNo: "",
emailId: "",
website:"",
admin: "",
establishmentYear: "",
previousMission: "",
ongoingMission: ""
});

useEffect(() => {
fetch("https://api.example.com/orphanage")
.then(response => response.json())
.then(data => {
setOrphanage({
name: data.name || "Default Orphanage",
address: data.address || "Default Address",
contactNo: data.contactNo || "Default Contact No.",
emailId: data.emailId || "Default Email-Id",
website:data.website || "Default Website",
admin: data.admin || "Default Admin",
establishmentYear: data.establishmentYear || "Default Establishment Year",
previousMission: data.previousMission || "Default Previous Mission",
ongoingMission: data.ongoingMission || "Default Ongoing Mission"
});
})
.catch(() => {
setOrphanage({
name: "Sindhutai Sakal Orphange",
address: "Mira Road - 400085 ",
contactNo: "+91 880808080",
emailId: "Sindhumai6@gmail.com",
website: " sindhumai.com",
admin: "Om Gerg",
establishmentYear: "2019",
previousMission: "Default Previous Mission",
ongoingMission: "Default Ongoing Mission"
});
});
}, []);

const cardStyle = {
backgroundColor: "#f2f2f2",
borderRadius: "10px",
boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
width: "70%",
margin: "20px auto",
padding: "30px"
};

const titleStyle = {
fontSize: "32px",
fontWeight: "bold",
textAlign: "center",
margin: "20px 0"
};

const selectStyle = {
display: "block",
width: "100%",
padding: "0.375rem 0.75rem",
fontSize: "1rem",
lineHeight: "1.5",
color: "#495057",
backgroundColor: "#fff",
backgroundClip: "padding-box",
border: "1px solid #ced4da",
borderRadius: "0.25rem",
transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out"
};

return (
<div style={cardStyle}>
<h2 style={titleStyle}>Orphanage Information</h2>
<p>Name: <input type="text" value={orphanage.name} /></p>
<p>Address: <input type="text" value={orphanage.address} /></p>
<p>Contact No.: <input type="text" value={orphanage.contactNo} /></p>
<p>Email-Id: <input type="text" value={orphanage.emailId} /></p>
<p>Website: <input type = "text" value={orphanage.website} /></p>
<p>Establishment Year: <input type="num" value={orphanage.establishmentYear} /></p>
<div className="form-group">
<label htmlFor="previousMission">Previous Mission:</label>
<select
  className="form-select"
  id="previousMission"
  value={orphanage.previousMission}
>
  <option value="">We Grow With You </option>
  <option value="Mission 1">Feed a Needy</option>
  <option value="Mission 2">Help to Grow</option>
  <option value="Mission 3">Make Smile</option>
</select>
</div>
<div className="form-group">
<label htmlFor="ongoingMission">Ongoing Mission:</label>
<select
  className="form-select"
  id="Ongoing Mission"
  value={orphanage.ongoingMission}
>
  <option value="">Eager to Help</option>
  <option value="Mission 1">Feed a Needy</option>
  <option value="Mission 2">Help to Grow</option>
  <option value="Mission 3">Make Smile</option>
</select>
</div>
</div>
)
}
;
export default OrphanagePage;
