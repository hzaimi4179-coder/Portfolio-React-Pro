import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./RootLayout";

// Pages
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Experience from "../pages/Experience";
import EducationPage from "../pages/Education";
import CertificationsPage from "../pages/Certifications";
import Contact from "../pages/Contact";

// Router configuration
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,

    // Pages inside the layout
    children: [
      { index: true, element: <Home /> },                  // Accueil
      { path: "projects", element: <Projects /> },         // Projets
      { path: "experience", element: <Experience /> },     // Expérience
      { path: "education", element: <EducationPage /> },   // Formations
      { path: "certifications", element: <CertificationsPage /> }, // Certifs
      { path: "contact", element: <Contact /> },           // Contact
    ],
  },
]);
