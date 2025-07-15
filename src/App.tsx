import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { About } from "./pages/about"
import { Contact } from "./pages/contact"
import { Home } from "./pages/home"
import { Projects } from "./pages/projects"

export const App = () => {
  return (
    <>
    <div className="flex flex-col min-h-screen ">
    <Header />
    <main className="flex-1">
      <Home />
      <About />
      <Projects />
      <Contact />
    </main>
    <Footer />
    </div>
    </>
  )
}


