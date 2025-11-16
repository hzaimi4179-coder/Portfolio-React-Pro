import { profile } from "../data/profile";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Briefcase, Mail } from "lucide-react";

export default function Home() {
  return (
    <section className="grid gap-10 md:grid-cols-2 items-center p-4 md:p-12">
      <Helmet>
        <title>{profile.name} — Portfolio</title>
        <meta name="description" content="Portfolio : IA, SIG, DevSecOps, Android." />
      </Helmet>

      {/* Text Content */}
      <div className="order-2 md:order-1">
        <h1 className="text-4xl md:text-6xl font-bold text-gradient-primary mb-4 drop-shadow-lg">
          {profile.name}
        </h1>
        <p className="text-xl md:text-2xl text-gradient-secondary mb-6 drop-shadow-md">
          {profile.role}
        </p>
        <p className="mt-6 text-lg text-gray-400 leading-relaxed">
          {profile.about}
        </p>

        {/* Call to Actions */}
        <div className="mt-8 flex gap-4">
          <Link 
            to="/projects" 
            className="btn-luxury inline-flex items-center gap-2 shadow-lg"
          >
            <Briefcase size={18} />
            Voir les Projets
          </Link>
          <Link 
            to="/contact" 
            className="btn-luxury inline-flex items-center gap-2 shadow-lg"
          >
            Contactez moi
          </Link>
        </div>

        {/* Badges/Skills */}
        <div className="mt-10 flex flex-wrap gap-2 text-sm" aria-label="badges de parcours">
          <span className="rounded-full bg-gray-800 text-indigo-400 px-4 py-1.5 border border-indigo-500/30 font-medium">Master Technologie emergentes en education</span>
          
        </div>
      </div>

      {/* Profile Illustration/Image */}
      <div 
        className="order-1 md:order-2 w-full max-w-lg mx-auto luxury-card rounded-3xl shadow-2xl hover-lift overflow-hidden p-6" 
      >
        <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-d4b896">
          <img src={profile.avatar} alt={profile.name} className="object-cover w-full h-full" />
        </div>
      </div>
    </section>
  );
}