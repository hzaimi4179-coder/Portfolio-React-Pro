import { education } from "../data/education";
import { fmt } from "../lib/utils";
import { GraduationCap } from "lucide-react";

export default function EducationPage() {
  return (
    <section className="grid gap-8 p-4 md:p-8">
      <h1 className="text-4xl font-bold text-gradient-primary mb-8 drop-shadow-lg">Mon Parcours</h1>
      <h2 className="text-4xl font-extrabold text-gradient-primary tracking-tight border-b border-border pb-4">
        Formations 
      </h2>
      <div className="space-y-6">
        {education.map(e => (
          <div key={e.school + e.start} className="luxury-card p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gradient-primary">
              {e.degree}{e.field ? ` — ${e.field}` : ""}
            </h3>
            <p className="text-primary font-medium">{e.school}</p>
            <p className="text-sm text-muted-foreground">{e.start} — {e.end || "Présent"}</p>
            <p className="text-muted-foreground mt-2">{e.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}