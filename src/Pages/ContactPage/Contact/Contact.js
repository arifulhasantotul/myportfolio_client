import { Container } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import * as SiIcons from "react-icons/si";
import "./Contact.css";

const Contact = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();
   const onSubmit = (data) => console.log(data);
   return (
      <Container className="contact_page">
         <form className="contact_form" onSubmit={handleSubmit(onSubmit)}>
            <div className="input_field">
               <span>Your Name</span>
               <input type="text" {...register("name", { required: true })} />
               {errors.name && <span className="error">Name is required</span>}
            </div>
            <div className="input_field">
               <span>Your Email</span>
               <input type="email" {...register("email", { required: true })} />
               {errors.email && (
                  <span className="error">Email is required</span>
               )}
            </div>
            <div className="input_field">
               <span>Your Message</span>
               <textarea
                  cols="30"
                  rows="10"
                  type="text"
                  {...register("msg", { required: true })}
               />
               {errors.msg && (
                  <span className="error">Message is required</span>
               )}
            </div>
            <div className="input_field button">
               <input className="btn" type="submit" value="Send Email" />{" "}
               <span className="mail_icon">
                  <SiIcons.SiMinutemailer />
               </span>
            </div>
         </form>
      </Container>
   );
};

export default Contact;
