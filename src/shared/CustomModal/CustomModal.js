import { Container } from "@mui/material";
import React from "react";
import * as AiIcons from "react-icons/ai";
import "./CustomModal.css";

const CustomModal = ({ modalShow, closeModal, project }) => {
   const { name, tag, sub_img } = project;
   return (
      <Container className={modalShow ? "modal active" : "modal"}>
         <div className="heading">
            <h1>{name}</h1>
         </div>
         <div className="figure">
            {sub_img.map((img, index) => (
               <img key={index} src={img} alt="" />
            ))}
         </div>
         <div className="tag">
            {tag.map((tool, index) => (
               <p key={index}>{tool}</p>
            ))}
         </div>
         <button onClick={closeModal} className="modal_close">
            <AiIcons.AiFillCloseCircle />
         </button>
      </Container>
   );
};

export default CustomModal;
