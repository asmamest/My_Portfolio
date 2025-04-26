"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { MessageCircle, Send } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
}

export default function ChatbotButton() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Bonjour ! Je suis l'assistant virtuel d'Asma. Comment puis-je vous aider aujourd'hui ?",
      role: "assistant",
      timestamp: new Date(),
    },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const handleSend = () => {
    if (input.trim() === "") return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Merci pour votre message ! Vous pouvez contacter Asma directement via le formulaire de contact.",
        "Asma est spécialisée en IA et ML. Voulez-vous en savoir plus sur ses projets ?",
        "N'hésitez pas à explorer le portfolio pour découvrir les compétences et réalisations d'Asma.",
        "Asma est actuellement étudiante en génie informatique avec une spécialisation en intelligence artificielle.",
        "Vous pouvez voir les projets d'Asma dans la section Projets du portfolio.",
      ]
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]

      const botMessage: Message = {
        id: Date.now().toString(),
        content: randomResponse,
        role: "assistant",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend()
    }
  }

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 rounded-full h-14 w-14 shadow-lg"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Chat avec l'assistant d'Asma</DialogTitle>
            <DialogDescription>Posez vos questions sur mon parcours, mes compétences ou mes projets.</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col space-y-4 max-h-[60vh] overflow-y-auto p-4 -mx-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex items-start gap-3 text-sm",
                  message.role === "user" ? "flex-row-reverse self-end" : "",
                )}
              >
                {message.role === "assistant" && (
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>AM</AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={cn(
                    "rounded-lg px-4 py-2 max-w-[80%]",
                    message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground",
                  )}
                >
                  {message.content}
                </div>
                {message.role === "user" && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>YOU</AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex items-start gap-3 text-sm">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>AM</AvatarFallback>
                </Avatar>
                <div className="rounded-lg px-4 py-2 max-w-[80%] bg-muted">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce"></div>
                    <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce delay-75"></div>
                    <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce delay-150"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <DialogFooter className="flex items-center">
            <div className="flex items-center w-full gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Écrivez votre message..."
                className="flex-1"
              />
              <Button type="submit" size="icon" onClick={handleSend} disabled={input.trim() === ""}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
