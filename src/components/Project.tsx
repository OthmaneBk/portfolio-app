import projects from '../data/data';    

import '../assets/styles/Project.scss';

function Project() {
        return (
        <div className="projects-container" id="Projets">
            <h1>Projet personnel</h1>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-image-container">
                            <img src={project.image} className="project-image" alt={project.title} />
                            <div className="project-overlay">
                                <div className="project-details">
                                    <h2>{project.title}</h2>
                                    <p>{project.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;