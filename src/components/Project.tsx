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