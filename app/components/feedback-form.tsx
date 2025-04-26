"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { MessageSquare, ThumbsUp, Star } from "lucide-react"

export default function FeedbackForm() {
  const [feedbackType, setFeedbackType] = useState("feedback")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [rating, setRating] = useState<number | null>(null)
  const [isPublic, setIsPublic] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici, vous implémenteriez la logique pour envoyer le feedback
    console.log({ feedbackType, name, email, message, rating, isPublic })

    // Simuler une soumission réussie
    setTimeout(() => {
      setSubmitted(true)
      // Réinitialiser le formulaire après quelques secondes
      setTimeout(() => {
        setFeedbackType("feedback")
        setName("")
        setEmail("")
        setMessage("")
        setRating(null)
        setIsPublic(false)
        setSubmitted(false)
      }, 3000)
    }, 1000)
  }

  const renderStars = () => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setRating(star)}
            className={`text-2xl ${(rating || 0) >= star ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}`}
          >
            <Star className="h-6 w-6" fill={(rating || 0) >= star ? "currentColor" : "none"} />
          </button>
        ))}
      </div>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Témoignages / Recommandations / Feedback</CardTitle>
        <CardDescription>
          Partagez vos impressions sur mon travail, mes projets ou offrez des conseils pour m'aider à m'améliorer.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {submitted ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="rounded-full bg-green-100 p-3 dark:bg-green-900/30">
              <ThumbsUp className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="mt-4 text-lg font-medium">Merci pour votre contribution!</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Votre feedback est très apprécié et m'aidera à m'améliorer.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label>Type de contribution</Label>
              <RadioGroup value={feedbackType} onValueChange={setFeedbackType} className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="feedback" id="feedback" />
                  <Label htmlFor="feedback" className="cursor-pointer">
                    Feedback général
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="testimonial" id="testimonial" />
                  <Label htmlFor="testimonial" className="cursor-pointer">
                    Témoignage professionnel
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="recommendation" id="recommendation" />
                  <Label htmlFor="recommendation" className="cursor-pointer">
                    Recommandation ou conseil
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Nom</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  required
                />
              </div>
            </div>

            {feedbackType === "testimonial" && (
              <div className="space-y-2">
                <Label>Évaluation</Label>
                {renderStars()}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={
                  feedbackType === "feedback"
                    ? "Partagez vos impressions sur mon travail..."
                    : feedbackType === "testimonial"
                      ? "Décrivez votre expérience professionnelle avec moi..."
                      : "Partagez vos conseils ou recommandations..."
                }
                className="min-h-[120px]"
                required
              />
            </div>

            {(feedbackType === "testimonial" || feedbackType === "recommendation") && (
              <div className="flex items-center space-x-2">
                <Checkbox id="public" checked={isPublic} onCheckedChange={(checked) => setIsPublic(checked === true)} />
                <Label htmlFor="public" className="text-sm cursor-pointer">
                  Je consens à ce que ce témoignage soit affiché publiquement sur le portfolio
                </Label>
              </div>
            )}

            <Button type="submit" className="w-full">
              <MessageSquare className="mr-2 h-4 w-4" />
              Envoyer
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
