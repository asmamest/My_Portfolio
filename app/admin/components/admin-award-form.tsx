"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

interface Award {
  id: string
  title: string
  organization: string
  date: string
  description: string
  category: string
  image?: string
  link?: string
}

const categories = ["awards", "competitions", "conferences", "certifications", "academic", "publications"]

export default function AdminAwardForm() {
  const [awards, setAwards] = useState<Award[]>([])
  const [currentAward, setCurrentAward] = useState<Award>({
    id: "",
    title: "",
    organization: "",
    date: "",
    description: "",
    category: "awards",
    image: "",
    link: "",
  })
  const [isEditing, setIsEditing] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (isEditing) {
      setAwards(awards.map((award) => (award.id === currentAward.id ? currentAward : award)))
      setIsEditing(false)
    } else {
      const newAward = {
        ...currentAward,
        id: Date.now().toString(),
      }
      setAwards([...awards, newAward])
    }

    // Reset form
    setCurrentAward({
      id: "",
      title: "",
      organization: "",
      date: "",
      description: "",
      category: "awards",
      image: "",
      link: "",
    })
  }

  const handleEdit = (award: Award) => {
    setCurrentAward(award)
    setIsEditing(true)
  }

  const handleDelete = (id: string) => {
    setAwards(awards.filter((award) => award.id !== id))
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>{isEditing ? "Edit Award" : "Add New Award"}</CardTitle>
          <CardDescription>
            {isEditing ? "Update the award details below" : "Fill in the details to add a new award or accomplishment"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={currentAward.title}
                onChange={(e) => setCurrentAward({ ...currentAward, title: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="organization">Organization</Label>
              <Input
                id="organization"
                value={currentAward.organization}
                onChange={(e) => setCurrentAward({ ...currentAward, organization: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                value={currentAward.date}
                onChange={(e) => setCurrentAward({ ...currentAward, date: e.target.value })}
                placeholder="January 2023"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select
                value={currentAward.category}
                onValueChange={(value) => setCurrentAward({ ...currentAward, category: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={currentAward.description}
                onChange={(e) => setCurrentAward({ ...currentAward, description: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="image">Image URL (Optional)</Label>
              <Input
                id="image"
                value={currentAward.image}
                onChange={(e) => setCurrentAward({ ...currentAward, image: e.target.value })}
                placeholder="/placeholder.svg?height=200&width=300"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="link">Link (Optional)</Label>
              <Input
                id="link"
                value={currentAward.link}
                onChange={(e) => setCurrentAward({ ...currentAward, link: e.target.value })}
                placeholder="https://example.com/award"
              />
            </div>

            <div className="flex justify-end gap-2">
              {isEditing && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setIsEditing(false)
                    setCurrentAward({
                      id: "",
                      title: "",
                      organization: "",
                      date: "",
                      description: "",
                      category: "awards",
                      image: "",
                      link: "",
                    })
                  }}
                >
                  Cancel
                </Button>
              )}
              <Button type="submit">{isEditing ? "Update Award" : "Add Award"}</Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Existing Awards & Accomplishments</h3>
        {awards.length === 0 ? (
          <p className="text-muted-foreground">No awards added yet.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {awards.map((award) => (
              <Card key={award.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 px-2 py-0.5 rounded">
                      {award.category}
                    </span>
                    <span className="text-sm text-muted-foreground">{award.date}</span>
                  </div>
                  <h4 className="font-semibold mb-1">{award.title}</h4>
                  <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">{award.organization}</p>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{award.description}</p>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleEdit(award)}>
                      Edit
                    </Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDelete(award.id)}>
                      Delete
                    </Button>
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
