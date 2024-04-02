import { useEffect } from "react";
import './Header.css'

export default function Header() {

  useEffect(() => {
    const sections = document.querySelectorAll("section")
    const navItems = document.querySelectorAll("header nav a")

    navItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault()
        const href = item.getAttribute("href")
        if(href === "#home") {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          })
        }
        if(href !== "#" && href.startsWith("#")) {
          const section = document.querySelector(href)
          section.scrollIntoView({behavior: "smooth"})
        }
      })
    })

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navItems.forEach((item) => {
            if (item.getAttribute("aria-label") == entry.target.id) {
              item.classList.add("text-yellow-500")
            } else {
              item.classList.remove("text-yellow-500")
            }
          })
        }
      })
    }

    const intersectionObserver = new IntersectionObserver(callback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.3
    })

    sections.forEach((section) => {
      intersectionObserver.observe(section)
    })

    const handleVisibilityChange = () => {
      if(document.visibilityState === "hidden") {
        observer.disconnect()
      } else {
        sections.forEach((section) => {
          observer.observe(section)
        })
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

  }, [])

  return (
    <header className="fixed top-0 z-10 flex justify-center items-center py-8 w-full mx-auto mt-2">
      <nav className="flex px-3 text-sm font-medium rounded-full bg-[rgba(213, 221, 201, 0.5)] text-gray-600 justify-center items-center">
        <a aria-label="home" className="relative block px-2 py-2 hover:text-yellow-500" href="#home">Inicio</a>
        <a aria-label="projects" className="relative block px-2 py-2 hover:text-yellow-500" href="#projects">Proyectos</a>
        <a aria-label="about" className="relative block px-2 py-2 hover:text-yellow-500" href="#about">Sobre mi</a>
      </nav>
    </header>
  )
}
