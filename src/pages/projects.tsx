import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSections } from "@/context/route";
import { Github } from "lucide-react";

const projetos = [
  {
    titulo: "Trabalho de Conclusão de Curso",
    descricao: "Aplicação da Aprendizagem supervisionada na previsão de Perdas Gestacionais.",
    imagem: "/img/mono.jpeg",
  },
  {
    titulo: "Flowcore",
    descricao: "Plataforma de gerenciamento, organização e controle de dados usando: Node.js, Express, TypeScript e React.js.",
    imagem: "/img/flowcore.png",
    github: "https://github.com/afonsorelane/project-flowcore",
  },
  {
    titulo: "E-Commerce",
    descricao: "e-commerce com funcionalidades completas para gestão de usuários e produtos usando: Node.js, Express, TypeScript e React.js",
    imagem: "/img/ecomerce.png",
    github: "https://github.com/Jay-Ubisse/b4f-2-final-project",
  },
];


export const Projects=()=> {
  const { projects } = useSections();
  return (
    <section ref={projects} className="bg-gray-900 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-5xl font-bold text-blue-300">Projectos</h2>
        <p className="mt-4 text-xl text-white/80">
          Apresento aqui alguns dos projectos que desenvolvi ao longo da minha formação e experiências práticas, com foco em soluções baseadas em dados, desenvolvimento web e automação de processos
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projetos.map((proj) => (
         <Card
  key={proj.titulo}
  className="relative overflow-hidden shadow-lg transition duration-300 transform hover:scale-[1.03] hover:shadow-2xl group bg-white/10 border border-white/10"
>

  <div className="relative h-48 overflow-hidden">
    <img
      src={proj.imagem}
      alt={proj.titulo}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
    />
  </div>

  <CardHeader>
    <CardTitle className="text-blue-200 text-xl">{proj.titulo}</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-xl text-white/80">{proj.descricao}</p>


    <a
      href={proj.github}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
     <Github className="inline-block mr-2" />
    Ver Código
    </a>
  </CardContent>
</Card>

        ))}
      </div>
    </section>
  );
}
