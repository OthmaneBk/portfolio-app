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
import Stu from '../assets/images/Stu.jpeg';
import kafW from '../assets/images/kaWhite.png';
import Model from '../assets/images/sentence-transformers-all-MiniLM-L6-v2.png';

interface ProjectType {
    image: string;
    title: string;
    description: string;
}

const projects: ProjectType[] = [
    {
        image:Model,
        title: "Modèle de langage pour la classification de texte (NLP)",
        description: "Le modèle all-MiniLM-L6-v2 vectorise les mots en 384D, pour obtenir une représentation sémantique globale de la phrase, le modèle applique une couche de mean pooling, le modele s'adapte à des tâches comme la classification produits et leurs labels. Enfin, la similarité cosinus permet de comparer (1=similaire, 0=différent) entre les phrases vectorisées."
    },
    {
        image: kafW,
        title: "L'extraction des données via Apache Kafka",
        description: "Ce système consiste à manipuler Apache Kafka, permettant de centraliser les données de sources multiples à l’aide de producers et consumers via des topics. Utilisation de Docker pour déployer une infrastructure Kafka isolée, optimisant la collecte, le stockage et le traitement des données en temps réel."
    },
    {
        image: Stu,
        title: "L'analyse des données de dataset Students Performance et la prédiction du score en mathématiques",
        description: "Application du cadre OSEMN (Obtain, Scrub, Explore, Model, iNterpret) sur le dataset Student Performance, avec l'utilisation d'un modèle de régression linéaire pour prédire le score en mathématiques d’un étudiant et l'évaluant à l'aide de MSE et R au carré."
    },
    {
        image: mock10,
        title: "L'analyse des données de Spotify et la prédiction de la popularité des chansons",
        description: "Développement de divers modèles d'apprentissage automatique tels que la régression linéaire, la descente de gradient stochastique et l'arbre de décision."
    },
    {
        image: mock09,
        title: "Système de recommandation de Netflix",
        description: "Vectoriser le contenu des films en utilisant TF-IDF, puis regrouper les films similaires à l'aide de la similarité cosinus en fonction des besoins des clients."
    },
    {
        image: mock08,
        title: "Prédiction de la maladie Hémophile",
        description: "Implémentation des modèles de machine learning tels que KNN, Naive Bayes gaussien et arbre de décision en utilisant la validation croisée K-Fold, afin de sélectionner le meilleur modèle pour détecter si un patient est malade ou non. Ce système est intégré dans une application mobile développée avec Flutter, rendant le diagnostic accessible directement depuis un smartphone."
    },
    {
        image: mock07,
        title: "Détection du meilleur emplacement pour une quantité donnée dans l'entrepôt",
        description: "Le meilleur emplacement pour une quantité donnée se base sur le calcul des distances entre l'emplacement actuel et les autres emplacements en temps réel, ce qui implique l'utilisation du modèle de machine learning K-Nearest Neighbors. En développant des interfaces (ReactJs) responsives pour le test bêta."
    },
    {
        image: mock06,
        title: "Prédiction des précipitations pour le mois de Avril",
        description: "En utilisant la régression logistique et les données précédentes de précipitation du mois de mars, nous obtenons une prédiction de 95 % pour le mois d'avril."
    },
    {
        image: mock05,
        title: "Web scraping des données de température pour l'année 2024",
        description: "Extraction des données du site de météo en appliquant une certaine logique afin qu'elles soient exploitables pour l'analyse de données et la science des données."
    },
    {
        image: mock04,
        title: "Web scraping des données de distance entre une localisation précise et les autres villes",
        description: "Le feature engineering, notamment l'incorporation de variables pertinentes comme distanceKm, enrichit la représentation des données, permettant aux algorithmes de ML de capturer des patterns complexes, améliorant ainsi les performances en entraînement et la généralisation en test."
    },
    {
        image: Rec,
        title: "Outil de détection et reconnaissance faciale",
        description: "Notre processus de reconnaissance faciale suit ces étapes clés: détection des visages dans l'image source, transformation en matrices numériques, application d'analyses statistiques pour extraire les caractéristiques faciales, comparaison avec une base de données d'images préenregistrées pour l'identification, et exécution en temps réel sur flux vidéo avec déploiement via des end-points Flask."
    },
    {
        image: PopularName,
        title: "Scrapping de Popular Baby Names",
        description: "Utiliser différentes datasets sur les prénoms populaires de bébés puis effectuer un processus ETL (Extract, Transform, Load) pour que ces données deviennent une information puis une connaissance en répondant aux questions : \"Qu'est-ce qui s'est passé\" et \"Pourquoi cela s'est-il passé ?\". Enfin, fournir des insights qui créent de la valeur à partir des données pour les clients finaux."
    },
    {
        image: logs,
        title: "Web log Analyser",
        description: "Un site web dédié aux dashboards de différentes sources de données de logs tels que error log, access log ou secure log, en appliquant le processus ETL afin de les stocker dans une base de données semi-structurée (MongoDB). Ce dernier nous servira à visualiser les données sous forme de dashboard en répondant à des questions comme les URLs non trouvées (NOT FOUND), les navigateurs utilisés (BROWSERS), etc."
    },
    {
        image: Colle,
        title: "Impact de la santé mentale sur la productivité individuelle",
        description: "Ce projet analyse des données collectées via formulaire pour prendre des décisions déterministes basées sur des tests statistiques (significativité des coefficients, test du modèle global). Nous appliquons l'ACP et l'AFC pour explorer les relations entre variables, puis utilisons la régression logistique avec un seuil (threshold) pour diagnostiquer la difficulté de la personne."
    }
];

export default projects;