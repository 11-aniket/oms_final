import React, { useState } from "react";
import Footer from "./Footer";
import MyNavbar from "./Navbar";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Phone: ${phone}, Location: ${location}, Message: ${message}`);
    // handle form submission logic here
  };

  return (
    <>
    <MyNavbar/>
    <div>
      <h1 className="mt-20 text-center bg-gray-900 text-white font-extrabold">Contact Us</h1>
      <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.589358605869!2d72.87404391482546!3d19.30021588695965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b01633d596dd%3A0x5846eeeb84dd563f!2sShree%20L%20R%20Tiwari%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1679054209450!5m2!1sen!2sin"  height="450" allowfullscreen="" loading="lazy" ></iframe>
      <form className="small-container" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Phone:
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <br />
        <label>
          Location:
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </label>
        <br />
        <label>
          Message:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      
    </div>
    <Footer/>
    </>
  );
};

export default ContactUs;
