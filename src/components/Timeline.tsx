import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div>
      <div id="Experiences">
        <div className="items-container">
          <h1>Expériences</h1>
          <VerticalTimeline>

          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
              contentArrowStyle={{ borderRight: '7px solid  white' }}
              date="1 Mars 2025 - Aujourd'hui"
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">Responsable des conférenciers et des partenariats</h3>
              <p>
              En tant que Responsable des conférenciers et des partenariats chez MDS, je pilote la stratégie de relations externes de l'organisation en me spécialisant dans les domaines de l'intelligence artificielle. Je suis chargé d'identifier, de sélectionner et de collaborer avec des experts renommés en IA pour nos événements.
              </p>
            </VerticalTimelineElement>

          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
              contentArrowStyle={{ borderRight: '7px solid  white' }}
              date="1 Mars 2025 - Aujourd'hui"
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">Développeur Full Stack</h3>
              <h4 className="vertical-timeline-element-subtitle">Maroc, Fès</h4>
              <p>
              Développement d’une application web pour une startup Pub2Win de l’incubateur d’ESISA, ceci est axé sur le monitoring de l’application à travers la création et la gestion des Dashboards, ces derniers permettent de visualiser et d’analyser les donnés clés de l’application.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
              contentArrowStyle={{ borderRight: '7px solid  white' }}
              date="1 Mai - 1 Septembre 2024"
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">Développeur Stagiaire</h3>
              <h4 className="vertical-timeline-element-subtitle">Maroc, Fès</h4>
              <p>
              Dématérialisation des processus de la gestion de stock :
              Développement Web Full Stack d’une application pour une meilleure efficacité et traçabilité avec l’intégration de L’Intelligence d’Artificielle et le Machine Learning.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="1 Février - 15 Avril"
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">Développeur Full Stack et Ingenierie en Machine Learining</h3>
              <h4 className="vertical-timeline-element-subtitle">Maroc, Fès</h4>
              <p>
              Développement d’une application mobile intelligente pour les patients hémophiles, intégrant des algorithmes de machine learning pour la prédiction de la maladie et le suivi des pas quotidiens afin de promouvoir un mode de vie sain.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>

      <div id="Formation">
        <div className="items-container">
          <h1>Formation</h1>
          <VerticalTimeline>
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
              contentArrowStyle={{ borderRight: '7px solid  white' }}
              date="2024-2025"
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">1ère année master en ingénierie des systèmes d’information et Intelligence Artificielle.</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2021-2024"
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">Licence en Ingénierie Logicielle (bac+3)</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2020-2021"
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">Baccalauréat en Sciences Physiques</h3>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
}

export default Timeline;