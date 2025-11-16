export type Certification = {
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  tags?: string[];
  image?: string;
  imageAlt?: string;
  status?: "active" | "expired" | "revoked";
};

export const certifications: Certification[] = [
  {
    title: "Fondamentaux et Concepts Avancés de la Programmation Java",
    issuer: "MLIAEdu - Plateforme de Certification Professionnelle",
    issueDate: "2025-10-07",
    tags: ["Java", "Programmation"],
    skills: ["POO", "Collections", "Gestion des Exceptions", "Streams", "Java Avancé"],
  },

  {
    title: "Hibernate & JPA",
    issuer: "MLIAEdu - Plateforme de Certification Professionnelle",
    issueDate: "2025-10-23",
    tags: ["Java", "Hibernate", "JPA", "Back-End"],
    skills: ["ORM", "Mapping Objet-Relationnel", "Gestion des Entités", "Requêtes JPQL", "Optimisation des Performances"],
  },

  {
    title: "Développement Front-End Moderne avec React",
    issuer: "MLIAEdu - Plateforme de Certification Professionnelle",
    issueDate: "2025-11-16",
    tags: ["JavaScript", "React", "Front-End"],
    skills: ["Hooks", "Components", "State Management", "Routing", "UI/UX"],
  },
];
