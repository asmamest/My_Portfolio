"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  image: string
}

export default function AdminTestimonialForm() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [currentTestimonial, setCurrentTestimonial] = useState<Testimonial>({
    id: "",
    quote: "",
    author: "",
    role: "",
    image: "",
  })
  const [isEditing, setIsEditing] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (isEditing) {
      setTestimonials(
        testimonials.map((testimonial) =>
          testimonial.id === currentTestimonial.id ? currentTestimonial : testimonial,
        ),
      )
      setIsEditing(false)
    } else {
      const newTestimonial = {
        ...currentTestimonial,
        id: Date.now().toString(),
      }
      setTestimonials([...testimonials, newTestimonial])
    }

    // Reset form
    setCurrentTestimonial({
      id: "",
      quote: "",
      author: "",
      role: "",
      image: "",
    })
  }

  const handleEdit = (testimonial: Testimonial) => {
    setCurrentTestimonial(testimonial)
    setIsEditing(true)
  }

  const handleDelete = (id: string) => {
    setTestimonials(testimonials.filter((testimonial) => testimonial.id !== id))
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>{isEditing ? "Edit Testimonial" : "Add New Testimonial"}</CardTitle>
          <CardDescription>
            {isEditing ? "Update the testimonial details below" : "Fill in the details to add a new testimonial"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="quote">Testimonial Quote</Label>
              <Textarea
                id="quote"
                value={currentTestimonial.quote}
                onChange={(e) => setCurrentTestimonial({ ...currentTestimonial, quote: e.target.value })}
                placeholder="What the person said about you or your work"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="author">Author Name</Label>
              <Input
                id="author"
                value={currentTestimonial.author}
                onChange={(e) => setCurrentTestimonial({ ...currentTestimonial, author: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Author Role/Position</Label>
              <Input
                id="role"
                value={currentTestimonial.role}
                onChange={(e) => setCurrentTestimonial({ ...currentTestimonial, role: e.target.value })}
                placeholder="CEO, Company Name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="image">Author Image URL</Label>
              <Input
                id="image"
                value={currentTestimonial.image}
                onChange={(e) => setCurrentTestimonial({ ...currentTestimonial, image: e.target.value })}
                placeholder="/placeholder.svg?height=100&width=100"
                required
              />
            </div>

            <div className="flex justify-end gap-2">
              {isEditing && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setIsEditing(false)
                    setCurrentTestimonial({
                      id: "",
                      quote: "",
                      author: "",
                      role: "",
                      image: "",
                    })
                  }}
                >
                  Cancel
                </Button>
              )}
              <Button type="submit">{isEditing ? "Update Testimonial" : "Add Testimonial"}</Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Existing Testimonials</h3>
        {testimonials.length === 0 ? (
          <p className="text-muted-foreground">No testimonials added yet.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id}>
                <CardContent className="p-4">
                  <div className="flex flex-col h-full">
                    <p className="text-sm text-muted-foreground mb-4 flex-grow italic">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-muted overflow-hidden">
                        {testimonial.image && (
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.author}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{testimonial.author}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                      <Button variant="outline" size="sm" onClick={() => handleEdit(testimonial)}>
                        Edit
                      </Button>
                      <Button variant="destructive" size="sm" onClick={() => handleDelete(testimonial.id)}>
                        Delete
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
