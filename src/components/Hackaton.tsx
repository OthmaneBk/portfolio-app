import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'


function Hackaton() {

    return (
        <div id="hack">
                <div className="items-container">
                  <h1>Hackaton</h1>
                  <VerticalTimeline>
                  <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
                      contentArrowStyle={{ borderRight: '7px solid  white' }}
                      date="17 Mars - 7 Avril 2025"
                      iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
                      icon={<FontAwesomeIcon icon={faBriefcase} />}
                    >
                      <h3 className="vertical-timeline-element-title">Analyste de Données - Vizathon [CFC]</h3>
  
                      <p className="vertical-timeline-element-title">Collaboré en binôme lors d'un Vizathon organisé par CFC, événement innovant combinant les principes du hackathon et de la visualisation de données. Notre mission consistait à transformer des données brutes complexes en représentations graphiques intuitives et exploitables. Le projet impliquait l'analyse et la visualisation de divers ensembles de données incluant les datasets de GPS, Physical Capability, Recovery Status et Individual Priority Areas, en répondant à différentes questions : "Qu'est-ce qui s'est passé", "Pourquoi cela s'est-il passé".</p>
                    </VerticalTimelineElement>
                  </VerticalTimeline>
                </div>
              </div>
    );

};

export default Hackaton;