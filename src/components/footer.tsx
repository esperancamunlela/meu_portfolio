import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto flex flex-col items-center gap-4 text-center">
        <div className="flex gap-6">
          <a
            href="https://github.com/esperancamunlela"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Github className="w-7 h-7" />
          </a>

          <a
            href="www.linkedin.com/in/esperança-antónio-munlela-8500632aa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Linkedin className="w-7 h-7" />
          </a>

          <a
            href="mailto:esperancamunlela@gmail.com"
            className="hover:text-blue-400 transition"
          >
            <Mail className="w-7 h-7" />
          </a>
        </div>

        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} Esperança Munlela. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
