export type Education = {
  school: string;
  degree: string;
  field?: string;
  location?: string;
  start: string;
  end?: string | null;
  gpa?: string;
  courses?: string[];
  highlights?: string[];
};

export const education: Education[] = [
  {
    school: "Ecole Normale Supérieure de Marrakech",
    degree: "Master",
    field: "Technologies Émergentes en Éducation",
    start: "2024-09",
    end: null,
    location: "Marrakech, Maroc",
    gpa: "3.8/4.0",
    courses: [
      "Programmation Avancée",
      "DevOps",
      "Business Intelligence",
      "Développement Web & Multiplateforme",
      "Intelligence Artificielle Avancée",
      "Bases de Données",
      "Réalité Augmentée & Virtuelle",
      "Sécurité & Administration Réseau"
    ],
    highlights: [
      "Approfondissement des technologies émergentes appliquées à l’éducation",
      "Développement d’applications interactives et immersives",
      "Intégration de l’IA, de l’AR/VR et du Cloud dans l’apprentissage"
    ],
  },

  {
    school: "Ecole Normale Supérieure de Meknès",
    degree: "Licence en Éducation",
    field: "Enseignement Secondaire – Informatique",
    start: "2023-09",
    end: "2024-05",
    location: "Meknès, Maroc",
    gpa: "3.6/4.0",
    highlights: [
      "Formation pédagogique en enseignement de l’informatique",
      "Didactique et méthodologie d’enseignement",
      "Stages pratiques en milieu éducatif"
    ],
  },

  {
    school: "Lycée Militaire Royal d’Ifrane",
    degree: "Baccalauréat",
    field: "Sciences Physiques",
    start: "2013-09",
    end: "2020-07",
    location: "Ifrane, Maroc",
    gpa: "3.4/4.0",
    highlights: [
      "Formation rigoureuse et discipline militaire",
      "Solides bases en sciences et en mathématiques"
    ],
  }
];
