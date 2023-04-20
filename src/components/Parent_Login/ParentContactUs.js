import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // Add code to submit form data here
  };

  const Form = tw.form`
    flex flex-col items-center w-80 mx-auto p-8 rounded-lg shadow-md bg-gray-100
  `;

  const Title = tw.h2`
    text-3xl mb-8 text-gray-800 text-center
  `;

  const InputLabel = tw.label`
    block mb-2 font-bold text-gray-800 text-sm uppercase
  `;

  const Input = tw.input`
    w-full px-3 py-2 text-gray-700 bg-gray-200 rounded
  `;

  const Textarea = tw.textarea`
    w-full px-3 py-2 text-gray-700 bg-gray-200 rounded
  `;

  const Button = tw.button`
    w-1/2 py-3 my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded
  `;

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Contact Us</Title>
      <div>
        <InputLabel htmlFor="name">Name</InputLabel>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div>
        <InputLabel htmlFor="message">Message</InputLabel>
        <Textarea
          id="message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
      </div>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default ContactUs;