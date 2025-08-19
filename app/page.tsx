import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import ThreeDShowcase from "@/components/three-d-showcase"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <ThreeDShowcase />
      <Projects />
      <Contact />
    </main>
  )
}

