import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/p_pangpndd/"><InstagramIcon /></a>
        <a href="https://www.facebook.com/profile.php?id=100002842596773"><FacebookIcon /></a>
        <a href="https://github.com/Jakkaphat07?tab=repositories"><GitHubIcon /></a>
      </div>
    </div>
  );
}

export default Footer;