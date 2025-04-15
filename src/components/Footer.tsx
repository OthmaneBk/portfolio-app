import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/OthmaneBk" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://ma.linkedin.com/in/othmane-kella-bennani-938142294/" target="_blank" rel="noreferrer" style={{width:'60rem', height:'60rem'}}><LinkedInIcon/></a>
      </div>
      <p>Portfolio de Kella Bennani Othmane</p>
    </footer>
  );
}

export default Footer;