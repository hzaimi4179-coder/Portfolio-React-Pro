import { Outlet, NavLink } from "react-router-dom";
import { profile } from "../data/profile";

const navItems = [
  { path: "/", name: "Accueil" },
  { path: "/projects", name: "Projets" },
  { path: "/education", name: "Formations" },
  { path: "/certifications", name: "Certifications" },
  { path: "/contact", name: "Contact" },
];

export default function RootLayout() {
  return (
    <div className="luxury-card flex flex-col min-h-screen bg-gradient-to-br from-[#f7efe5] via-[#e8d8c3] to-[#c9a886] text-[#4b2e20] font-sans antialiased">

      {/* Navigation */}
      <header className="sticky top-0 z-50 luxury-card/90 backdrop-blur-xl shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap justify-between items-center">

          {/* Nom */}
          <h1 className="text-xl font-bold text-gradient-primary tracking-wide">
            {profile.name}
          </h1>

          {/* Nav Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm mt-3 md:mt-0">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `pb-1 transition-all duration-300 ${
                    isActive
                      ? "text-[#7a4a2b] border-b-2 border-[#7a4a2b] font-semibold"
                      : "text-[#4b2e20] hover:text-[#7a4a2b]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>

      {/* Contenu principal */}
      <main className="flex-grow max-w-7xl mx-auto px-4 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="p-8 text-center luxury-card/90 backdrop-blur-xl shadow-inner">
        <p className="text-sm text-gradient-primary font-medium">
          Portfolio | © {new Date().getFullYear()} {profile.name}
        </p>
      </footer>
    </div>
  );
}
