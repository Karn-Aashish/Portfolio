"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, Mail, MessageSquare, Send } from "lucide-react"
import { submitContactForm } from "@/app/actions"
import { useToast } from "@/hooks/use-toast"
import dynamic from "next/dynamic"

const CalendlyEmbed = dynamic(() => import("./calendly-embed"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-[400px] bg-muted rounded-md">
      <p>Loading calendar...</p>
    </div>
  ),
})

export default function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await submitContactForm(formData)
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I will get back to you soon.",
      })
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Contact</span>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have a project in mind or want to discuss potential collaborations? Get in touch!
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
          <Card className="neon-box">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form below to get in touch with me.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-primary/30 bg-muted/50 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-primary/30 bg-muted/50 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[120px] border-primary/30 bg-muted/50 focus:border-primary"
                  />
                </div>
                <Button type="submit" className="w-full group" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="flex flex-col gap-6">
            <Card className="neon-box">
              <CardHeader>
                <CardTitle>Schedule a Meeting</CardTitle>
                <CardDescription>Book a time slot that works for you.</CardDescription>
              </CardHeader>
              <CardContent>
                <CalendlyEmbed />
              </CardContent>
            </Card>
            <Card className="neon-box">
              <CardHeader>
                <CardTitle>Other Ways to Connect</CardTitle>
                <CardDescription>Reach out through these channels.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/20 p-2">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <span>developer@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/20 p-2">
                    <CalendarDays className="h-5 w-5 text-primary" />
                  </div>
                  <span>Available Monday-Friday</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/20 p-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <span>Live chat available during business hours</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

