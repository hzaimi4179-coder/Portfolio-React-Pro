import { useMemo, useState } from "react";
import CertificationCard from "../components/CertificationCard";
import { certifications } from "../data/certifications";

export default function CertificationsPage() {
  const [q, setQ] = useState("");
  const list = useMemo(
    () =>
      certifications
        .filter(c =>
          [c.title, c.issuer, ...(c.tags ?? []), ...(c.skills ?? [])]
            .join(" ")
            .toLowerCase()
            .includes(q.toLowerCase())
        )
        .sort((a, b) => b.issueDate.localeCompare(a.issueDate)),
    [q]
  );

  return (
    <section className="grid gap-8 p-4 md:p-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-border pb-4">
        <h2 className="text-4xl font-extrabold text-gradient-primary tracking-tight">
          Certifications 🏅
        </h2>
        <input
          placeholder="Filtrer (ex: AWS, Kubernetes)"
          value={q}
          onChange={(e)=>setQ(e.target.value)}
          className="w-full md:w-72 bg-gray-800 text-gray-100 border border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl px-4 py-2 transition-all duration-300 placeholder-gray-500"
          aria-label="Filtrer les certifications"
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {list.map(c => 
          <CertificationCard key={c.title + c.issueDate} c={c} />
        )}
      </div>
      
      {list.length === 0 && (
          <p className="text-center text-xl text-gray-500 mt-12">
              No certifications found for "{q}".
          </p>
      )}
    </section>
  );
}