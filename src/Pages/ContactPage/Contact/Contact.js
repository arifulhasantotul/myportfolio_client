import { CircularProgress, Container } from "@mui/material";
import emailjs from "emailjs-com";
import React, { useRef, useState } from "react";
import * as SiIcons from "react-icons/si";
import "./Contact.css";

const Contact = () => {
   const [sendLoading, setSendLoading] = useState(false);
   const form = useRef();

   const sendEmail = (e) => {
      setSendLoading(true);
      e.preventDefault();
      emailjs
         .sendForm(
            "service_wsa10es",
            "template_6674hti",
            form.current,
            "user_bv5LhnKg6IHQxfjNtfzZC"
         )
         .then(
            (result) => {
               console.log(result.text);
               alert("Message sent successfully");
            },
            (error) => {
               console.log(error.text);
            }
         )
         .finally(() => {
            setSendLoading(false);
            e.target.reset();
         });
   };
   return (
      <Container className="contact_page">
         <form ref={form} className="contact_form" onSubmit={sendEmail}>
            <div className="input_field">
               <span>Your Name</span>
               <input name="user_name" type="text" required />
            </div>
            <div className="input_field">
               <span>Your Email</span>
               <input name="user_email" type="email" required />
            </div>
            <div className="input_field">
               <span>Subject</span>
               <input name="subject" type="text" required />
            </div>
            <div className="input_field">
               <span>Your Message</span>
               <textarea
                  name="message"
                  cols="30"
                  rows="10"
                  type="text"
                  required
               />
            </div>
            {!sendLoading && (
               <div className="input_field button">
                  <input
                     className="btn"
                     type="submit"
                     value="Send Email"
                     required
                  />{" "}
                  <span className="mail_icon">
                     <SiIcons.SiMinutemailer />
                  </span>
               </div>
            )}
            {sendLoading && (
               <div className="mail_icon" style={{ textAlign: "center" }}>
                  <CircularProgress
                     color="warning"
                     style={{ margin: "0 auto" }}
                  />
               </div>
            )}
         </form>
      </Container>
   );
};

export default Contact;
