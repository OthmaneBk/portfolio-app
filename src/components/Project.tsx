import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import Rec from '../assets/images/Rec.png';
import PopularName from '../assets/images/PopularName.png';
import logs from '../assets/images/logs.png';
import Colle from '../assets/images/Colle.png';

import '../assets/styles/Project.scss';
import projects from '../data/data';

function Project() {
    return(
    <div className="projects-container" id="Projets">
        <h1>Projet personnel</h1>
        <div className="projects-grid">
            {projects.map((project, index) => (
                <div className="card" key={index}>
                    <div className="front">
                        <img src={project.image} className="zoom" alt="thumbnail"/>
                        <h2 style={{padding: '1rem'}}>{project.title}</h2>
                    </div>
                    
                    <div className="back">
                        <p>{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
}

export default Project;