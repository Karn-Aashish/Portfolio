import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Code, Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden py-20 md:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute -right-20 bottom-20 h-64 w-64 rounded-full bg-secondary/20 blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                <span className="gradient-text font-extrabold">Full-Stack</span> Web Developer
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Building modern web applications with cutting-edge technologies and pixel-perfect design.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                React
              </span>
              <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                Next.js
              </span>
              <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                TypeScript
              </span>
              <span className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/10 px-2.5 py-0.5 text-xs font-medium text-secondary">
                Node.js
              </span>
              <span className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/10 px-2.5 py-0.5 text-xs font-medium text-secondary">
                GraphQL
              </span>
              <span className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/10 px-2.5 py-0.5 text-xs font-medium text-secondary">
                Tailwind CSS
              </span>
            </div>
            <div className="flex flex-col gap-2 pt-4 min-[400px]:flex-row">
              <Button asChild size="lg" className="group">
                <Link href="#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-primary/50 hover:bg-primary/20">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-[500px] animate-float">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20 blur-2xl"></div>
              <div className="relative overflow-hidden rounded-full border-2 border-primary/50 shadow-[0_0_20px_rgba(128,0,255,0.5)]">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Developer Portrait"
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </div>
              <div className="absolute -right-4 -top-4 flex h-20 w-20 items-center justify-center rounded-full bg-card p-2 shadow-lg">
                <Code className="h-10 w-10 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

