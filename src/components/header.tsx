export const Header = () => {
  return (
    <header className=" bg-gradient-to-r from-slate-600 to-slate-800 text-white py-5 font-sans font-thin w-screen">
      <div className="container mx-auto flex justify-between items-center px-8">
        <h1 className="text-2xl">Esperança Munlela</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="about" className="hover:underline">Sobre Mim</a></li>
            <li><a href="projects" className="hover:underline">Projectos</a></li>
            <li><a href="contact" className="hover:underline">Contacte-me</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}