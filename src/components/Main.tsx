import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import image from '..//assets//images//image.jpg';




function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={image} alt="image" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/OthmaneBk" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://ma.linkedin.com/in/othmane-kella-bennani-938142294/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Kella Bennani Othmane</h1>
          <p>Passionné par L'intelligence artificielle et la science des données </p>

          <div className="mobile_social_icons">
            <a href="https://github.com/OthmaneBk" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://ma.linkedin.com/in/othmane-kella-bennani-938142294/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;