import { Footer } from "./components/footer"
import { Header } from "./components/header"

export const App = () => {
  return (
    <>
    <div className="flex flex-col min-h-screen">
    <Header />
    <main className="container flex-1">
      <div id="home" className="text-center h-screen w-screen flex items-center justify-center bg-red-950">
        <h1 className="text-4xl text-white">Bem-vindo ao meu Portfólio</h1><h1>om</h1>
      </div>
      <div id="about" className="text-center h-screen w-screen flex items-center justify-center bg-blue-950">
        <h2 className="text-4xl text-white">Sobre Mim</h2>
      </div>
    </main>
      <div id="projects" className="text-center h-screen w-screen flex items-center justify-center bg-green-950">
        <h2 className="text-4xl text-white">Projectos</h2>
      </div>
      <div id="contact" className="text-center h-screen w-screen flex items-center justify-center bg-yellow-950">
        <h2 className="text-4xl text-white">Contacte-me</h2>
      </div>
    <Footer />
    </div>
    </>
  )
}


