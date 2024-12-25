import { IconBrandCss3, IconBrandHtml5, IconBrandJavascript, IconBrandMongodb, IconBrandNextjs, IconBrandRedux, IconBrandTailwind, IconBrandVite, IconCode, IconBrandNodejs, IconBrandSupabase, IconBrandReact, IconBrandPrisma } from "@tabler/icons-react"
import ProjectCard from "./ProjectCard"

const TAGS = {
  React: {
    name: "React",
    icon: <IconBrandReact className="size-4" />,
    styles: "bg-[#364fc7]"
  },
  NextJS:
  {
    name: "NextJS",
    icon: <IconBrandNextjs className="w-4 h-4" />,
    styles: "bg-black"
  },
  MongoDB:
  {
    name: "MongoDB",
    icon: <IconBrandMongodb className="w-4 h-4" />,
    styles: "bg-[#2b8a3e]"
  },
  ViteJS: {
    name: "ViteJS",
    icon: <IconBrandVite className="w-4 h-4" />,
    styles: "bg-[#364fc7]"
  },
  TailwindCSS: {
    name: "TailwindCSS",
    icon: <IconBrandTailwind className="w-4 h-4" />,
    styles: "bg-[#003159]"
  },
  Redux: {
    name: "Redux",
    icon: <IconBrandRedux className="w-4 h-4" />,
    styles: "bg-[#5f3dc4]"
  },
  Html: {
    name: "HTML",
    icon: <IconBrandHtml5 className="w-4 h-4" />,
    styles: "bg-[#f76707]"
  },
  Css: {
    name: "CSS",
    icon: <IconBrandCss3 className="w-4 h-4" />,
    styles: "bg-[#228be6]"
  },
  Javascript: {
    name: "Javascript",
    icon: <IconBrandJavascript className="w-4 h-4" />,
    styles: "bg-[#ffd43b]"
  },
  NodeJS: {
    name: "NodeJS",
    icon: <IconBrandNodejs className="w-4 h-4" />,
    styles: "bg-[#51cf66]"
  },
  Supabase: {
    name: "Supabase",
    icon: <IconBrandSupabase className="w-4 h-4" />,
    styles: "bg-[#51cf30]"
  },
  Prisma: {
    name: "Prisma",
     icon: <IconBrandPrisma className="w-4 h-4" />,
    styles: "bg-[#228be6]"
  },
}

const PROJECTS = [
  {
    title: "FreelancePRO - gestión de gastos",
    description: "Aplicación de gestión de gastos para freelancers creada con NextJS, Hono y React Query. Posee autenticación, creación de proyectos, asignación de fecha, Kanban Board, presupuesto y transacciónes. Cuenta con un registro de transacciones general e importación via CSV. Posee panel de seguimiento de gastos, filtrado por fechas y cuentas, calendario y diseño responsivo.",
    image: "./img/projects/freelancepro.png",
    repoLink: "https://github.com/lautaromateol/freelance-pro",
    deployLink: "https://freelance-pro-gray.vercel.app/",
    tags: [TAGS.NextJS, TAGS.Prisma, TAGS.TailwindCSS]
  },
  {
    title: "Adsync - gestión de agencias",
    description: "Software as a service dedicado a la gestión de agencias de marketing. Posee funcionalidades de registro y edición de clientes, vinculación con redes sociales, creación de campañas publicitarias en Meta, etc. Desarrollo en curso.",
    image: "./img/projects/adsync.png",
    repoLink: "https://github.com/lautaromateol/smma-management",
    deployLink: "https://adsync.vercel.app/",
    tags: [TAGS.NextJS,  TAGS.Prisma, TAGS.TailwindCSS]
  },
  {
    title: "Projectly - gestión de proyectos para devs",
    description: "Aplicación de gestión de proyectos orientada a desarrolladores, desarrollada en NextJS. Cada usuario puede crear proyectos, asignarle historias de usuario, tareas, requerimentos funcionales y un stack tecnologico. Integración con IA proximamente.",
    image: "./img/projects/projectly.png",
    repoLink: "https://github.com/lautaromateol/projectly",
    deployLink: "https://projectly-tan.vercel.app/",
    tags: [TAGS.NextJS, TAGS.Supabase, TAGS.TailwindCSS]
  },
  {
    title: "Pure Decor - e-commerce",
    description: "Tienda online de muebles para el hogar con diseño responsivo y múltiples funcionalidades. Carrito de compras, pagos con Stripe, sección de comentarios, perfil y autenticación de usuario, panel de administración y más.",
    image: "./img/projects/pure-decor.png",
    repoLink: "https://github.com/lautaromateol/demo-ecom",
    deployLink: "https://sup-ecom.vercel.app/",
    tags: [TAGS.NextJS, TAGS.NodeJS, TAGS.MongoDB, TAGS.TailwindCSS]
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-24 px-6 lg:px-0">
      <div className="max-w-4xl mx-auto">
        <h2 className="flex items-center gap-2 text-3xl font-semibold mb-8">
          <IconCode stroke={2} />
          Proyectos
        </h2>
        <div className="flex flex-col gap-y-8">
          {PROJECTS.map(({ title, description, image, deployLink, repoLink, tags }) => {
            return (
              <ProjectCard
                key={title}
                title={title}
                description={description}
                image={image}
                deployLink={deployLink}
                repoLink={repoLink}
                tags={tags}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
