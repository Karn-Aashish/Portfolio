import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Layers, Palette, Server } from "lucide-react"

export default function About() {
  const skills = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Frontend Development",
      description:
        "Building responsive UIs with React, Next.js, and TypeScript. Expert in modern CSS frameworks like Tailwind.",
    },
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "Backend Development",
      description:
        "Creating robust APIs with Node.js, Express, and GraphQL. Experienced with serverless architectures.",
    },
    {
      icon: <Database className="h-10 w-10 text-secondary" />,
      title: "Database Design",
      description: "Working with SQL and NoSQL databases including PostgreSQL, MongoDB, and Firebase.",
    },
    {
      icon: <Palette className="h-10 w-10 text-secondary" />,
      title: "UI/UX Design",
      description: "Designing intuitive user experiences with Figma and implementing pixel-perfect interfaces.",
    },
    {
      icon: <Layers className="h-10 w-10 text-primary" />,
      title: "DevOps",
      description: "Setting up CI/CD pipelines with GitHub Actions, Docker, and deploying to cloud platforms.",
    },
    {
      icon: <Globe className="h-10 w-10 text-secondary" />,
      title: "Performance Optimization",
      description:
        "Optimizing web applications for speed, accessibility, and SEO to deliver exceptional user experiences.",
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">About Me</span>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            <span className="gradient-text">Full-Stack Developer</span> with a Passion for Modern Web Technologies
          </h2>
          <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I specialize in building high-performance web applications with modern JavaScript frameworks. With 5+ years
            of experience, I've developed solutions for startups and enterprise clients alike, focusing on clean code,
            performance, and exceptional user experiences.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="neon-box overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(128,0,255,0.4)]"
            >
              <CardContent className="flex flex-col items-center gap-4 p-6">
                <div className="rounded-full bg-muted p-3">{skill.icon}</div>
                <h3 className="text-xl font-bold">{skill.title}</h3>
                <p className="text-center text-sm text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

