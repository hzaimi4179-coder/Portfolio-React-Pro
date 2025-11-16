import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  return (
    <section className="grid gap-8 p-4 md:p-8 bg-gradient-to-b from-gray-900 to-gray-800">
      <h1 className="text-4xl font-bold text-gradient-primary mb-8 drop-shadow-lg">Mes Projets</h1>
      <h2 className="text-4xl font-extrabold text-white tracking-tight border-b border-gray-800 pb-4">
        Derniers Projets Développés 
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p => (
          <article 
            key={p.title} 
            className="project-card bg-gray-800 bg-opacity-50 p-4 rounded-lg shadow-lg"
            className="project-card"
          >
            <h3 className="font-bold text-xl text-gradient-primary mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{p.summary}</p>
            
            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              {p.tags.map(t => 
                <span 
                  key={t} 
                  className="tag-luxury"
                >
                  {t}
                </span>
              )}
            </div>
            
            {/* Links */}
            <div className="mt-5 pt-3 border-t border-border flex gap-4 text-sm font-semibold">
              {p.link && (
                <a 
                  className="text-primary hover:text-accent transition-colors flex items-center gap-1" 
                  href={p.link} 
                  target="_blank" 
                  rel="noreferrer"
                >
                  Voir la Démo
                </a>
              )}
              {p.repo && (
                <a 
                  className="text-primary hover:text-accent transition-colors flex items-center gap-1" 
                  href={p.repo} 
                  target="_blank" 
                  rel="noreferrer"
                >
                  Consulter le Code
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}