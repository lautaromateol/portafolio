import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 lg:px-0">
      <div className="mx-auto max-w-4xl">
        <img className="size-[5rem] mb-4 rounded-full" src="https://avatars.githubusercontent.com/u/103976582?v=4" alt="Foto de Lautaro Leguizamón" />
        <h1 className="text-4xl text-primary font-bold leading-tight mb-4">Hola! Soy Lautaro Leguizamón</h1>
        <p className="text-2xl text-secondary mb-6 w-full lg:w-1/2">Desarrollador Full-Stack oriundo de Argentina. Apasionado por el desarrollo de aplicaciones web complejas.</p>
        <div className="flex items-center gap-x-4">
          <a className="flex justify-center gap-1 px-4 py-1 rounded-full bg-gray-100 border border-gray-300 text-secondary text-base" target="_blank" href="https://github.com/lautaromateol">
            <IconBrandGithub stroke={1} />
            GitHub
          </a>
          <a className="flex justify-center gap-1 px-4 py-1 rounded-full bg-gray-100 border border-gray-300 text-secondary text-base" target="_blank" href="https://www.linkedin.com/in/lautaro-mateo-leguizamon-35b902279/">
            <IconBrandLinkedin stroke={1} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
