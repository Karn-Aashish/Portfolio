import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link href="/" className="text-xl font-bold">
            <span className="gradient-text">Dev</span>Portfolio
          </Link>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Web Developer Portfolio. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="#"
            target="_blank"
            rel="noreferrer"
            aria-label="Github"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="#"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Twitter className="h-5 w-5" />
          </Link>
          <Link
            href="#"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="mailto:developer@example.com"
            aria-label="Email"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

