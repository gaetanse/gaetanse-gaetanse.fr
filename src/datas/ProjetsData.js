import { MMXXIV, MMXXIII, TAG_WORDPRESS, fileCompleteName, TAG_JAVASCRIPT, TAG_HTML, TAG_MATERIAL_UI, TAG_MYSQL, TAG_OPENGL, TAG_PHP, TAG_SQLITE,TAG_SYMFONY, TAG_STEAM, TAG_POEDIT, TAG_BOX2D, TAG_SEMANTIC, TAG_GAME_OFF_2018, TAG_CSHARP, TAG_UNITY, TAG_TCP_IP, TAG_JAVA, TAG_BOOTSTRAP, TAG_CPLUSPLUS, TAG_2D, TAG_3D, TAG_ANDROID, TAG_VUEJS, TAG_SFML, TAG_REACT,TAG_ANTD,TAG_CSS,TAG_JSON, MMXXI, MMXXII, MMXVIII, MMXIX, MMXVII, VIDEO_PATH, PROJECT_BIGTOWN, EXTENSION_MP4, PROJECT_IOT_MODULE, PROJECT_DST, PROJECT_STAYSAFE, PROJECT_MATCH, IMAGE_PREVIEW_PATH, PROJECT_GAETANSE_FR, EXTENSION_PNG, TITLE_GAETANSE_FR, CUSTOM_LINK_GAETANSE_FR, DESCRIPTION_GAETANSE_FR_1,  } from "./Const"

//TODO: put all in const

export const importData = [
    {
      name: TITLE_GAETANSE_FR,
      date: MMXXIV,
      preview: fileCompleteName(IMAGE_PREVIEW_PATH, PROJECT_GAETANSE_FR, EXTENSION_PNG),
      custom_link: CUSTOM_LINK_GAETANSE_FR,
      description: [DESCRIPTION_GAETANSE_FR_1],
      type: fileCompleteName(IMAGE_PREVIEW_PATH, PROJECT_GAETANSE_FR, EXTENSION_PNG),
      tags: [TAG_REACT, TAG_JAVASCRIPT, TAG_CSS, TAG_HTML, TAG_MATERIAL_UI],
      expanded: false,
    },
    {
      name: "IOT-Modules",
      date: MMXXIV,
      preview: "/images/previews/iot-modules.png",
      custom_link: "",
      description: ["Création d'un projet simulant la création et le fonctionnement de modules ainsi que la gestion de création de données aléatoire en tâche de fond étant relié à un module avec une base de donné en utilisant doctrine sous sqlite."],
      type: fileCompleteName(VIDEO_PATH, PROJECT_IOT_MODULE, EXTENSION_MP4),
      tags: [TAG_SYMFONY, TAG_PHP, TAG_JAVASCRIPT, TAG_CSS, TAG_SQLITE],
      expanded: false,
    },
    {
      name: "Big-Town",
      date: MMXXIII,
      preview: "/images/previews/big.png",
      custom_link: "",
      description: ["Création d'un projet 3d utilisant Opengl / c++ et sfml, création d'un parser de .obj et de lecture de celui-ci, utilisation d'une skybox, possibilité de créer ou supprimer des objets 3d, afficher des objets 3d ainsi que leurs animations, caméra en vue fps."],
      type: fileCompleteName(VIDEO_PATH, PROJECT_BIGTOWN, EXTENSION_MP4),
      tags: [TAG_CPLUSPLUS, TAG_OPENGL, TAG_SFML, TAG_3D, TAG_2D],
      expanded: false,
    },
    {
      name: "React-express-imc",
      date: MMXXII,
      preview: "/images/previews/imc.png",
      custom_link: "",
      description: ["Utilisation redux et router, Système d'inscription et de connexion, Barre de navigation (sidebar) qui utilise react-router-dom, Formulaire pour ajouter un imc.","Liste des cards imcs avec des informations diverses, Liste des cards imcs sous forme de graphique camembert, Liste des cards imcs sous forme de graphique en ligne."],
      type: "/videos/reactexpressimc.mp4",
      tags: [TAG_REACT, TAG_ANTD, TAG_CSS, TAG_JSON],
      expanded: false,
    },
    {
      name: "Redux-react-pokemon",
      date: MMXXII,
      preview: "/images/previews/redux-react-pokemon.png",
      custom_link: "",
      description: ["Utilisation redux,router, bootstrap et json, Liste des pokemons sous forme de Card, Détail des pokemons av diverses informations.","Barre de navigation qui utilise react-router-dom, Panier qui peut être rempli avec des pokemons."],
      type: "/videos/redux-react-pokemon.mp4",
      tags: [TAG_REACT, TAG_BOOTSTRAP, TAG_CSS, TAG_JSON],
      expanded: false,
    },
    {
      name: "Adopte-un-chat",
      date: MMXXII,
      preview: "/images/previews/adopteUnChat.png",
      custom_link: "",
      description: ["Création d'un site vitrine pour chat, Utilisation d'html, css et json."],
      type: "/videos/adopteUnChat.mp4",
      tags: [TAG_HTML, TAG_CSS, TAG_JSON],
      expanded: false,
    },
    {
      name: "Cube-That-Do-Things",
      date: MMXXII,
      preview: "/images/previews/cubethatdothings.png",
      custom_link: "",
      description: ["Réalisation d'un site sur un thème précis, Utilisation d'html, css et js, Utilisation des EventListener."],
      type: "/videos/cube.mp4",
      tags: [TAG_HTML, TAG_CSS, TAG_JAVASCRIPT],
      expanded: false,
    },
    {
      name: "Gaetanse.fr",
      date: MMXXII,
      preview: "/images/previews/portfolio0.png",
      custom_link: "",
      description: ["Réalisation d'une application web sur wordpress, J'ai utilisé comme extension Elementor, wp dark mode, yast seo."],
      type: "/videos/wordpress-gaetanse.fr.mp4",
      tags: [TAG_WORDPRESS],
      expanded: false,
    },
    {
      name: "Stay safe",
      date: MMXXII,
      preview: "/images/previews/staySafe.png",
      custom_link: "",
      description: ["Création d'un projet unity sous c#., Utilisation de la 3d, 2d, d'une caméra, de colision, d'animation."],
      type: fileCompleteName(VIDEO_PATH, PROJECT_STAYSAFE, EXTENSION_MP4),
      tags: [TAG_CSHARP, TAG_UNITY, TAG_3D],
      expanded: false,
    },
    {
      name: "Farm dungeon rpg",
      date: MMXXI,
      preview: "/images/previews/fdr.png",
      custom_link: "",
      description: ["Création d'un jeu android sous java, Création d'un serveur sous java relié au client.","Utilisation d'android, java, 2d et de tcp/ip."],
      type: "/videos/fdr.mp4",
      tags: [TAG_ANDROID, TAG_TCP_IP, TAG_JAVA,TAG_2D],
      expanded: false,
    },
    {
      name: "Dst traduction fr",
      date: MMXXI,
      preview: "/images/previews/dst-1-1024x576.jpg",
      custom_link: "https://steamcommunity.com/sharedfiles/filedetails/?id=2595875363",
      description: ["Réalisation d'un mod de traduction en français pour Don't starve together, Ce mod a était mit sur le workshop Steam.","Communauté de 49 000 personnes utilisateurs de ce mod."],
      type: fileCompleteName(VIDEO_PATH, PROJECT_DST, EXTENSION_MP4),
      tags: [TAG_STEAM, TAG_POEDIT],
      expanded: false,
    },
    {
      name: "Yoddle",
      date: MMXIX,
      preview: "/images/previews/yoddle.png",
      custom_link: "",
      description: ["Création d'un projet en groupe pour créer un jeu 2d multijoueurs, Utilisation du c++, box2d, tcp/ip et de sfml."],
      type: "/videos/yoodle.mp4",
      tags: [TAG_CPLUSPLUS, TAG_2D, TAG_BOX2D, TAG_TCP_IP, TAG_SFML],
      expanded: false,
    },
    {
      name: "Match",
      date: MMXIX,
      preview: "/images/previews/match.png",
      custom_link: "",
      description: ["Création d'un projet php en utilisant des objets, Utilisation de semantic pour le design."],
      type: fileCompleteName(VIDEO_PATH, PROJECT_MATCH, EXTENSION_MP4),
      tags: [TAG_PHP, TAG_SEMANTIC, TAG_HTML, TAG_CSS],
      expanded: false,
    },
    {
      name: "Char",
      date: MMXIX,
      preview: "/images/previews/char.png",
      custom_link: "",
      description: ["Création d'un jeu vidéo 2d solo, Utilisation du c++ et de sfml."],
      type: "/videos/char.mp4",
      tags: [TAG_CPLUSPLUS, TAG_SFML, TAG_2D],
      expanded: false,
    },
    {
      name: "Survive and craft",
      date: MMXIX,
      preview: "/images/previews/survive.png",
      custom_link: "",
      description: ["Création d'un jeu vidéo 2d solo et multi, Utilisation de c++ et de sfml."],
      type: "/videos/survive.mp4",
      tags: [TAG_CPLUSPLUS, TAG_SFML, TAG_2D],
      expanded: false,
    },
    {
      name: "Map",
      date: MMXVIII,
      preview: "/images/previews/map.png",
      custom_link: "",
      description: ["Création d'un projet de groupe, Utilisation de html, php, css et mysql."],
      type: "/images/previews/map.png",
      tags: [TAG_HTML, TAG_PHP, TAG_MYSQL, TAG_CSS],
      expanded: false,
    },
    {
      name: "Smash-patanimal",
      date: MMXVIII,
      preview: "/images/previews/smash.png",
      custom_link: "",
      description: ["Création d'un projet en 48h pour le Game Off 2018, Game Off 2018 itch.io 196 / 328","Utilisation de c++ et de sfml."],
      type: "/videos/smash.mp4",
      tags: [TAG_CPLUSPLUS, TAG_SFML, TAG_2D, TAG_GAME_OFF_2018],
      expanded: false,
    },
    {
      name: "Filmothèque",
      date: MMXVIII,
      preview: "/images/previews/filmotheque.png",
      custom_link: "",
      description: ["Création d'un projet en groupe, Utilisation de axios pour récupérer des données en fichier json.","Utilisation de vuejs, js, html, json et bootstrap"],
      type: "/videos/filmotheque.mp4",
      tags: [TAG_VUEJS, TAG_JAVASCRIPT, TAG_HTML, TAG_BOOTSTRAP, TAG_JSON],
      expanded: false,
    },
    {
      name: "Provins",
      date: MMXVII,
      preview: "/images/previews/provins.png",
      custom_link: "",
      description: ["Projet de cours réalisé en groupe, Ayant pour but de créer un site vitrine d'une ville.","Ainsi qu'un système de connexion avec un utilisateur d'une base de donnée, Utilisation de html, css, php et mysql."],
      type: "/images/previews/provins.png",
      tags: [TAG_HTML, TAG_CSS, TAG_MYSQL, TAG_PHP],
      expanded: false,
    },
  ]