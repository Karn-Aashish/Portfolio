import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with cart, checkout, and payment processing.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Developer Portfolio",
      description: "A customizable portfolio template for developers with 3D elements and animations.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Three.js", "Framer Motion", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Real-time Chat App",
      description: "A real-time messaging application with video calls and file sharing capabilities.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Socket.io", "WebRTC", "Firebase"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Admin Dashboard",
      description: "A responsive admin dashboard with dark mode and data visualization.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "API Gateway",
      description: "A microservice API gateway with authentication, rate limiting, and caching.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Node.js", "Express", "Redis", "JWT"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "DevOps Toolkit",
      description: "A collection of scripts and tools for automating development workflows.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Docker", "GitHub Actions", "Bash", "Terraform"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Projects</span>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            My <span className="gradient-text">Latest Work</span>
          </h2>
          <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A showcase of my recent web development projects, featuring modern frameworks and best practices.
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="neon-box group overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(128,0,255,0.4)]"
            >
              <div className="aspect-video w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button asChild variant="outline" size="sm" className="border-primary/50 hover:bg-primary/20">
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="border-primary/50 hover:bg-primary/20">
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

