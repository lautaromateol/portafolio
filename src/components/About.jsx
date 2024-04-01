import { IconBrandCss3, IconBrandHtml5, IconBrandJavascript, IconBrandMongodb, IconBrandNextjs, IconBrandNodejs, IconBrandReact, IconBrandRedux, IconBrandTailwind, IconUserCheck } from "@tabler/icons-react";

export default function About() {
  return (
    <section className="py-24 px-0">
      <div className="max-w-4xl mx-auto">
        <h2 className="flex items-center gap-2 text-3xl font-semibold mb-8">
          <IconUserCheck stroke={2} />
          Sobre mi
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-base leading-relaxed mb-4">Soy un joven y ambicioso desarrollador, me fascina el diseño y la posibilidad de crear proyectos que aporten un valor real.
            </p>
            <p className="text-base leading-relaxed mb-4">
              Mi objetivo actual es trabajar en un ambiente donde mis habilidades y aptitudes me permitan crecer tanto individual como colectivamente.
            </p>
            <p className="text-base leading-relaxed">
              Estoy abierto a trabajar en todo tipo de proyecto en el cual pueda volcar mi conocimiento a una aplicacion compleja.
            </p>
          </div>
          <div className="grid grid-cols-3 place-items-center">
            <div className="flex items-center justify-center justify-self-start gap-1">
              <IconBrandJavascript className="stroke-[#ffd43b]" />
              <strong>
              Javascript
              </strong>
            </div>
            <div className="flex items-center justify-center justify-self-start gap-1">
              <IconBrandHtml5 className="stroke-[#f76707]"/>
              <strong>
              HTML
              </strong>
            </div>
            <div className="flex items-center justify-center justify-self-start gap-1">
              <IconBrandCss3 className="stroke-[#228be6]"/>
              <strong>
              CSS
              </strong>
            </div>
            <div className="flex items-center justify-center justify-self-start gap-1">
              <IconBrandTailwind className="stroke-[#003159]" />
              <strong>
              TailwindCSS
              </strong>
            </div>
            <div className="flex items-center justify-center justify-self-start gap-1">
              <IconBrandReact className="stroke-[#22b8cf]" />
              <strong>
              React
              </strong>
            </div>
            <div className="flex items-center justify-center justify-self-start gap-1">
              <IconBrandRedux className="stroke-[#5f3dc4]" />
              <strong>
              Redux
              </strong>
            </div>
            <div className="flex items-center justify-center justify-self-start gap-1">
              <IconBrandNextjs />
              <strong>
              NextJS
              </strong>
            </div>
            <div className="flex items-center justify-center justify-self-start gap-1">
              <IconBrandNodejs className="stroke-[#51cf66]" />
              <strong>
              NodeJS
              </strong>
            </div>
            <div className="flex items-center justify-center justify-self-start gap-1">
              <IconBrandMongodb className="stroke-[#2b8a3e]" />
              <strong>
              MongoDB
              </strong>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
