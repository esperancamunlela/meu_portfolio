import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSections } from "@/context/route";

const skills = [
  { categoria: "Linguagens", items: [ "R", "JavaScript", "TypeScript"] },
  { categoria: "Frameworks", items: ["React", "TailwindCSS", "Express", "Node.js"] },
];

export const About=()=> {
  const { about } = useSections()
  return (
    <section
      ref={about}
      className="relative text-white bg-[url('/img/img2.avif')] bg-cover bg-center bg-blend-multiply bg-black/70 min-h-screen px-6 py-24"
    >
     
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
    
        <div className="bg-black/50 p-8 rounded-3xl max-w-2xl">
          <h2 className="text-5xl font-bold text-blue-300 text-center mb-6">Sobre Mim</h2>
          <p className="text-xl leading-loose text-justify">
             Sou Esperança António Munlela, uma jovem estudante de Estatística e amante de tecnologias, com habilidades em análise e visualização de dados, bem como na construção de aplicações Web modernas. <br />
          Actualmente, dedico-me a aprofundar os meus conhecimentos em programação, inteligência artificial e ciência de dados, com foco especial em aplicações práticas nas áreas da saúde. Acredito no potencial dos dados para orientar decisões mais informadas, justas e eficazes.
          Estou sempre em busca de novos desafios e oportunidades de aprendizagem que me permitam crescer como profissional e contribuir para soluções tecnológicas.
          </p>
        </div>

       
        <div className="flex justify-center">
          <img
            src="/img/me.jpg"
            alt="Esperança Munlela"
            className="rounded-3xl w-[340px] h-[460px] object-cover border-4 border-white shadow-xl"
          />
        </div>
      </div>

     
      <div className="mt-24 max-w-7xl mx-auto">
        <h3 className="text-5xl font-semibold text-center text-blue-300 mb-10">Competências</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <Card key={skill.categoria} className="bg-white/10 border-none text-white backdrop-blur">
              <CardHeader>
                <CardTitle className="text-blue-200 text-3xl">{skill.categoria}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 space-y-1 text-xl text-white leading-loose">
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
