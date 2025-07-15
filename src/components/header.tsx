
import { Download } from "lucide-react";
import { useSections } from "../context/route";

  

export const Header = () => {
  const { home, about, projects, contact } = useSections();

  function handleScroll(ref: React.RefObject<HTMLElement|null>) {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header className=" bg-gradient-to-r from-slate-600 to-slate-800 text-white text-xl py-5 font-sans font-thin w-screen">
      <div className="container mx-auto flex justify-between items-center px-8">
        <h1 className="text-2xl">Esperança Munlela</h1>
        <nav className="flex items-center space-x-6">
        
        <button onClick={() => handleScroll(home)} className="hover:underline">Home</button>
        <button onClick={() => handleScroll(about)} className="hover:underline">Sobre</button>
        <button onClick={() => handleScroll(projects)} className="hover:underline">Projetos</button>
        <button onClick={() => handleScroll(contact)} className="hover:underline">Contacto</button>
        < a href="/docs/cv_esperanca.pdf"
                download
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                <Download className="w-4 h-4" />
                Baixar CV
              </a>
        </nav>
      </div>
    </header>
  );
};
