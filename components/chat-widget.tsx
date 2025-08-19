"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, Send, X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface Message {
  id: string
  content: string
  sender: "user" | "agent"
  timestamp: Date
}

export default function ChatWidget() {
  const { toast } = useToast()
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hi there! How can I help you with your web development project?",
      sender: "agent",
      timestamp: new Date(),
    },
  ])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()

    if (!message.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: message,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setMessage("")

    // Simulate agent response after a short delay
    setTimeout(() => {
      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "Thanks for your message! I'd be happy to discuss your project requirements. Could you provide more details about what you're looking to build?",
        sender: "agent",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, agentMessage])

      toast({
        title: "New message",
        description: "You have a new message in the chat.",
      })
    }, 1000)
  }

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 rounded-full p-4 shadow-[0_0_15px_rgba(128,0,255,0.5)]"
        size="icon"
        aria-label="Open Chat"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat Widget */}
      {isOpen && (
        <Card className="fixed bottom-4 right-4 z-50 w-80 shadow-[0_0_20px_rgba(128,0,255,0.3)] md:w-96 neon-box">
          <CardHeader className="flex flex-row items-center justify-between pb-2 border-b border-primary/20">
            <CardTitle className="text-sm font-medium">
              <span className="gradient-text">Live Chat</span>
            </CardTitle>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full hover:bg-primary/20"
              onClick={() => setIsOpen(false)}
              aria-label="Close Chat"
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="h-80 overflow-y-auto p-4">
            <div className="flex flex-col gap-3">
              {messages.map((msg) => (
                <div
                  key={msg.id.toString()}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-3 py-2 ${
                      msg.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted border border-primary/20"
                    }`}
                  >
                    <p className="text-sm">{msg.content}</p>
                    <p className="mt-1 text-right text-xs opacity-70">
                      {msg.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t border-primary/20 p-3">
            <form onSubmit={handleSendMessage} className="flex w-full gap-2">
              <Input
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 border-primary/30 bg-muted/50 focus:border-primary"
              />
              <Button type="submit" size="icon" aria-label="Send Message">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </>
  )
}

