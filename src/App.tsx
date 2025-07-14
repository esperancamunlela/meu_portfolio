import { Footer } from "./components/footer"
import { Header } from "./components/header"

export const App = () => {
  return (
    <>
    <div className="flex flex-col min-h-screen ">
    <Header />
    <main className="container flex-1 text-white ">
      <div id="home" className="text-center h-screen w-screen flex items-center justify-center bg-[url('/img/img1.avif')] bg-cover bg-center  bg-black/70 bg-blend-multiply backdrop-blur-md">
      <div className="max-w-4xl ">
        <h1 className="text-5xl font-bold leading-tight ">
          Olá, eu sou a <span className="text-blue-300">Esperança Munlela</span>.
          Bem-vindo ao meu portfólio.
        </h1>
    </div>
      </div>
      <div id="about" className="text-center h-screen w-screen flex items-center justify-center bg-[url('/img/img2.avif')] bg-cover bg-center bg-black/70 bg-blend-multiply">
        <h2 className="text-4xl text-white">Sobre Mim</h2>
      </div>
    </main>
      <div id="projects" className="text-center h-screen w-screen flex items-center justify-center bg-[url('/img/img3.avif')] bg-cover bg-center bg-black/70 bg-blend-multiply">
        <h2 className="text-4xl text-white">Projectos</h2>
      </div>
      <div id="contact" className="text-center h-screen w-screen flex items-center justify-center bg-[url('/img/img4.avif')] bg-cover bg-center bg-black/70 bg-blend-multiply">
        <h2 className="text-4xl text-white">Contacte-me</h2>
      </div>
    <Footer />
    </div>
    </>
  )
}


