import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.sendForm('service_01eehio', 'template_3pbt2ng', form.current!, 'uEz5gi00E6z7lJeAP')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          setTimeout(() => {window.location.reload()}, 1000);
      }, (error) => {
          console.log(error.text);
      });
  };

  return ( 
    <div className="form-container">
      <h2 className='text-center m-4'>Send us a message!</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
  
};
