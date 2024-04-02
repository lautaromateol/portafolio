import { IconCopyright } from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-0">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <p>&copy; {new Date().getFullYear()} Lautaro Leguizamón.</p>
        <a href="mailto:lautaromateol@gmail.com">Contacto</a>
      </div>
    </footer>
  )
}
