export type Project = {
  title: string;
  period?: string;
  tags: string[];
  summary: string;
  link?: string;
  repo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Gestion d’une Boutique Marocaine",
    period: "2025",
    summary:
      "Application web de gestion d’une boutique marocaine permettant d’administrer les produits, catégories, stocks et commandes. L’interface d’administration offre la possibilité d’ajouter, modifier ou supprimer des articles, de gérer les prix, les promotions et de suivre les ventes. Le tout est développé avec Spring Boot et Thymeleaf pour une architecture MVC claire et maintenable.",
    tags: ["Spring Boot", "Thymeleaf", "Java", "Bootstrap"],

  },

  {
    title: "Application de Gestion des Salles de Conférences",
    period: "2024",
    summary:
      "Application de gestion des réservations de salles de conférences au sein d’une organisation. Les utilisateurs peuvent consulter la disponibilité des salles, réserver un créneau, annuler ou modifier une réservation. L’application gère aussi les équipements disponibles, la capacité des salles et l’historique des réservations.",
    tags: ["Java", "OOP", "JDBC", "Desktop App"],

  },

  {
    title: "Site E-Commerce avec Angular",
    period: "2023",
    summary:
      "Site e-commerce développé avec Angular offrant une expérience utilisateur moderne et responsive. Les utilisateurs peuvent parcourir le catalogue de produits, filtrer et rechercher, ajouter des articles au panier et passer commande. Le projet met en avant la gestion des composants, du routing, des services et la consommation d’API REST.",
    tags: ["Angular", "TypeScript", "SPA", "REST API"],

  },

  {
    title: "Gestion des Cabinets Médicaux",
    period: "2024",
    summary:
      "Application de gestion des cabinets médicaux permettant d’administrer les dossiers patients, les rendez-vous, les médecins et les consultations. Le système facilite la planification des créneaux, le suivi des visites et la centralisation des informations médicales dans une interface claire et structurée.",
    tags: ["Java", "OOP", "Gestion Médicale"],

  },

  {
    title: "Application de Gestion de Stock",
    period: "2023",
    summary:
      "Application de gestion de stock permettant de suivre les entrées et sorties de produits, les niveaux de stock, les alertes de seuil minimal et l’historique des mouvements. L’objectif est d’optimiser la gestion des articles et d’éviter les ruptures ou les surstocks.",
    tags: ["Java", "Gestion de Stock", "OOP"],

  },
];
