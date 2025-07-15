import { useSections } from "@/context/route"

export const Home = () => {
  const { home } = useSections()
  return (
    
    <>
    <div ref={home} className=" text-white text-center h-screen w-screen flex items-center justify-center bg-[url('/img/img1.png')] bg-cover bg-center bg-black/70 bg-blend-multiply">
      <div className="max-w-4xl ">
        <h1 className="text-5xl font-bold leading-tight">
          Olá, eu sou a <span className="text-blue-300">Esperança Munlela</span>.
          Bem-vindo ao meu portfólio.
        </h1>
    </div>
      </div>
    </>
  )}      