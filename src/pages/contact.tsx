import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useSections } from "@/context/route";

export const Contact =() => {
    const { contact } = useSections()
  return (
    <section ref={contact} className="relative text-white bg-[url('/img/img4.avif')] bg-cover bg-center bg-blend-multiply bg-black/70 min-h-screen px-6 py-24"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-blue-300">Entra em Contacto</h2>
        <p className="mt-4 text-xl text-white">
          Podes usar o formulário abaixo para me entrar em contacto.
        </p>
      </div>

      <form
        className="max-w-3xl mx-auto mt-10 space-y-6 bg-white/5 p-8 rounded-2xl backdrop-blur"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          <label htmlFor="nome" className="block mb-2 text-xl text-white text-left">Nome</label>
          <Input
            id="nome"
            type="text"
            placeholder="Nome"
            className="bg-white/10 border border-white/20 text-white placeholder-white/40"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 text-xl text-white text-left">Email</label>
          <Input
            id="email"
            type="email"
            placeholder="email@.com"
            className="bg-white/10 border border-white/20 text-white placeholder-white/40"
            required
          />
        </div>

        <div>
          <label htmlFor="mensagem" className="block mb-2 text-xl text-white text-left">Mensagem</label>
          <Textarea
            id="mensagem"
            placeholder="Escreve a tua mensagem..."
            className="bg-white/10 border border-white/20 text-white placeholder-white/40"
            rows={5}
            required
          />
        </div>

        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xl">
          Enviar
        </Button>
      </form>
    </section>
  );
}
