import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
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

function Project() {
    return(
    <div className="projects-container" id="Projets">
        <h1>Projet personnel</h1>
        <div className="projects-grid">
            <div className="project">
                <a ><img src={mock10} className="zoom" alt="thumbnail" width="100%" height="40%"/></a>
                <div style={{}}><h2 style={{textDecoration: 'none'}}>L'analyse des données de Spotify et la prédiction de la popularité des chansons</h2></div>
                <p>Développement de divers modèles d'apprentissage automatique tels que la régression linéaire, la descente de gradient stochastique et l'arbre de décision.</p>
            </div>
            <div className="project">
                <a ><img src={mock09} className="zoom" alt="thumbnail" width="100%" height="40%"/></a>
                <a ><h2 style={{textDecoration: 'none'}}>Système de recommandation de Netflix</h2></a>
                <p>Vectoriser le contenu des films en utilisant TF-IDF, puis regrouper les films similaires à l'aide de la similarité cosinus en fonction des besoins des clients.</p>
            </div>
            <div className="project">
                <a ><img src={mock08} className="zoom" alt="thumbnail" width="100%" height="40%"/></a>
                <a ><h2 style={{textDecoration: 'none'}}>Prédiction de la maladie Hémophile</h2></a>
                <p>Implémentation des modèles de machine learning tels que KNN, Naive Bayes gaussien et arbre de décision en utilisant la validation croisée K-Fold, afin de sélectionner le meilleur modèle pour détecter si un patient est malade ou non.</p>
            </div>
            <div className="project">
                <a ><img src={mock07} className="zoom" alt="thumbnail" width="100%" height="40%"/></a>
                <a ><h2 style={{textDecoration: 'none'}}>Détection du meilleur emplacement pour une quantité donnée dans l'entrepôt</h2></a>
                <p>Le meilleur emplacement pour une quantité donnée se base sur le calcul des distances entre l'emplacement actuel et les autres emplacements en temps réel, ce qui implique l'utilisation du modèle de machine learning K-Nearest Neighbors.</p>
            </div>
            <div className="project">
                <a ><img src={mock06} className="zoom" alt="thumbnail" width="100%" height="40%"/></a>
                <a ><h2 style={{textDecoration: 'none'}}>Prédiction des précipitations pour le mois de Avril</h2></a>
                <p>En utilisant la régression logistique et les données précédentes de précipitation du mois de mars, nous obtenons une prédiction de 95 % pour le mois d'avril.</p>
            </div>
            <div className="project">
                <a ><img src={mock05} className="zoom" alt="thumbnail" width="100%" height="40%"/></a>
                <a ><h2 style={{textDecoration: 'none'}}>Web scraping des données de température pour l'année 2024</h2></a>
                <p>Extraction des données du site de météo en appliquant une certaine logique afin qu'elles soient exploitables pour l'analyse de données et la science des données.</p>
            </div>
            <div className="project">
                <a ><img src={mock04} className="zoom" alt="thumbnail" width="100%" height="40%"/></a>
                <a ><h2 style={{textDecoration: 'none'}}>Web scraping des données de distance entre une localisation précise et les autres villes</h2></a>
                <p>Ce processus est conçu pour l'ingénierie des données afin de former des modèles de machine learning qui soient performants à la fois en entraînement et en test.</p>
            </div>
            <div className="project">
                <a ><img src={Rec} className="zoom" alt="thumbnail" width="100%" height="40%"/></a>
                <a ><h2 style={{textDecoration: 'none'}}>Outil de détection et reconnaissance faciale</h2></a>
                <p>Ce mécanisme est conçu pour détecter les visages à l'aide d'OpenCV en les transformant en matrices, puis en les comparant avec les images stockées afin de fournir l'identité de la personne présente.</p>
            </div>
            <div className="project">
                <a ><img src={PopularName} className="zoom" alt="thumbnail" width="100%" height="40%"/></a>
                <a ><h2 style={{textDecoration: 'none'}}>Scrapping de Popular Baby Names </h2></a>
                <p>Utiliser différentes datasets sur les prénoms populaires de bébés puis effectuer un processus ETL (Extract, Transform, Load) pour que ces données deviennent une information puis une connaissance en répondant aux questions : "Qu'est-ce qui s'est passé" et "Pourquoi cela s'est-il passé ?". Enfin, fournir des insights qui créent de la valeur à partir des données pour les clients finaux.</p>
            </div>
            <div className="project">
                <a ><img src={logs} className="zoom" alt="thumbnail" width="100%" height="40%"/></a>
                <a ><h2 style={{textDecoration: 'none'}}>Web log Analyser</h2></a>
                <p>Un site web dédié aux dashboards de différentes sources de données de logs tels que error log, access log ou secure log, en appliquant le processus ETL afin de les stocker dans une base de données semi-structurée (MongoDB). Ce dernier nous servira à visualiser les données sous forme de dashboard en répondant à des questions comme les URLs non trouvées (NOT FOUND), les navigateurs utilisés (BROWSERS), etc.</p>
            </div>
            <div className="project">
                <a ><img src={Colle} className="zoom" alt="thumbnail" width="100%" height="40%"/></a>
                <a ><h2 style={{textDecoration: 'none'}}>Impact de la santé mentale sur la productivité individuelle</h2></a>
                <p>Ce projet a pour but d'analyser et prendre des décisions déterministes en se basant sur des hypothèses statistiques telles que le test de significativité des coefficients ou le test du modèle global. Nous avons collecté des données en créant un formulaire. Pour l'analyse de ces données, nous utiliserons l'ACP (Analyse en Composantes Principales) qui permet de réduire l'information en des composants prédéterminés pour les variables quantitatives, notamment via la méthode du coude. Nous emploierons également l'AFC (Analyse Factorielle des Correspondances) qui vise à capturer les relations entre les variables catégorielles.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;