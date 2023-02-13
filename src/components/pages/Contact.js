import React, { useState } from 'react';
import './styles/Contact.css';

import { validateEmail } from './utils/helpers';

function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }

    alert(`Message Sent`);

    setName('');
    setEmail('');
    setMessage('');
  };

    return (
      <div className='contact'>
        <form>
        <label for="name">Name:</label><br></br>
        <input type="name" id="name" onChange={handleInputChange} name="name" value={name} placeholder="name"></input><br></br>
        <label for="email">E-mail:</label><br></br>
        <input type="email" id="email" onChange={handleInputChange} name="email" value={email} placeholder="yourEmail@email.com"></input><br></br>
        <label for="message">Write your message here:</label><br></br>
        <textarea type="text" id="message" onChange={handleInputChange} name="message" value={message} placeholder="Text"></textarea><br></br>
        <button type="submit" onClick={handleFormSubmit}>Send</button>
        </form>
        {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      </div>
    );
  };

  export default Contact;