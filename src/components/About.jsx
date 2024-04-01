import { IconUserCheck } from "@tabler/icons-react";

export default function About() {
  return (
    <section className="py-24 px-0">
      <div className="max-w-4xl mx-auto">
        <h2 className="flex items-center gap-2 text-3xl font-semibold mb-8">
          <IconUserCheck stroke={2} />
          Sobre mi
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <p></p>
        </div>
      </div>
    </section>
  )
}
