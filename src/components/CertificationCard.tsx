import type { Certification } from "../data/certifications";

const CertificationCard = ({ c }: { c: Certification }) => (
    <article className="project-card">
      <h3 className="font-bold text-lg text-gradient-primary line-clamp-1 mb-2">{c.title}</h3>
      <p className="text-sm text-muted-foreground mt-1">{c.issuer}</p>
      <p className="text-xs text-accent mt-2 font-medium">Délivré: {c.issueDate}</p>
      <div className="mt-3 flex flex-wrap gap-2 text-xs">
          {(c.tags || []).slice(0, 3).map(t => (
              <span key={t} className="tag-luxury">{t}</span>
          ))}
      </div>
    </article>
);

export default CertificationCard;