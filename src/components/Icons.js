import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const SocialMediaIcons = () => (
  <div style={{ display: "flex", gap: "10px" }} className="social-media-icons">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <FaFacebookF size={24} color="#4267B2" /> {/* Facebook icon */}
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <FaTwitter size={24} color="#1DA1F2" /> {/* Twitter icon */}
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <FaInstagram size={24} color="#C13584" /> {/* Instagram icon */}
    </a>
  </div>
);

export default SocialMediaIcons;
