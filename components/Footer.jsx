import React from "react";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import {FaFacebookMessenger,FaTelegram} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 @MUMU APP All rights reserved</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiOutlineWhatsApp />
        <BsFacebook />
        <FaFacebookMessenger/>
        <FaTelegram/>
        <AiOutlineLinkedin/>
      </p>
    </div>
  );
};

export default Footer;
