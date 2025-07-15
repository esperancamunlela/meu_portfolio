export  const About = () => {
  return (
    <>
      <div id="about" className="text-center h-screen w-screen flex items-center justify-around bg-[url('/img/img2.avif')] bg-cover bg-center bg-black/70 bg-blend-multiply">
       <div className=" bg-black/50 rounded-3xl" >
      <h2 className="text-4xl text-blue-300">Sobre Mim</h2>
        <p className="max-w-2xl text-xl text-white mt-4 text-justify">
          Sou Esperança António Munlela, uma jovem estudante de Estatística e amante de tecnologias, com habilidades em análise e visualização de dados, bem como na construção de aplicações Web modernas.
          Actualmente, dedico-me a aprofundar os meus conhecimentos em programação, inteligência artificial e ciência de dados, com foco especial em aplicações práticas nas áreas da saúde. Acredito no potencial dos dados para orientar decisões mais informadas, justas e eficazes.
          Estou sempre em busca de novos desafios e oportunidades de aprendizagem que me permitam crescer como profissional e contribuir para soluções tecnológicas.
        </p></div>
        <div className="flex items-center justify-center">
            <img src="/img/me.jpg" alt="Esperança Munlela" className="rounded-3xl w-xl m-auto pl-2" />
        </div>
      </div>
    </>
  );
}