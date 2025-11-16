import { Mail, Phone, Github } from "lucide-react";
import { profile } from "../data/profile";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <section className="grid gap-8 p-4 md:p-8">
      <h2 className="text-4xl font-extrabold text-gradient-primary tracking-tight border-b border-border pb-4">
        Contacts
      </h2>
      
      <div className="luxury-card rounded-2xl p-8 max-w-3xl mx-auto w-full shadow-xl">
        <p className="text-xl text-muted-foreground mb-6 text-center">
          Contactez moi 
        </p>
        
        <div className="grid gap-6 mb-8">
          {/* Email */}
          <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <Mail className="text-indigo-400" size={24} />
            <a href={`mailto:${profile.email}`} className="text-primary hover:text-accent transition-colors">
              {profile.email}
            </a>
          </div>

          {/* Phone (Optional) */}
          <div className="flex items-center gap-4 p-4 luxury-card rounded-lg">
            <Phone className="text-accent" size={24} />
            <a href={`tel:+212${profile.phone.replace(/\s/g, '')}`} className="text-primary hover:text-accent transition-colors">{profile.phone}</a>
          </div>

          
          
          
          

          {/* GitHub (from profile data) */}
          <div className="flex items-center gap-4 p-4 luxury-card rounded-lg">
            <Github className="text-primary" size={24} />
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
              {profile.github}
            </a>
          </div>
        </div>
        
        <p className="text-center text-sm text-gray-500 mt-6">
          N'hésitez pas à me contacter via l'un de ces moyens!
        </p>
      </div>
    </section>
  );
}

export default Contact;