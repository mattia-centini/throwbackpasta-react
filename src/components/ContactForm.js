import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import './ContactForm.css'

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
      <div className='contacts__right'>
            <form className="form" onSubmit={handleSubmit}>
                      <input
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />


                      <input
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />


                      <textarea
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      ></textarea>

                      <button
                        type="submit"
                        style={{ background: loader ? "#ccc" : "  #1d1f39" }}
                      >
                        Submit
                      </button>
                </form>
      </div>
    
  );
};

export default ContactForm
