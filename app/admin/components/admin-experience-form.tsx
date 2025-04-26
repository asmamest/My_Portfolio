"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { PlusCircle, Trash2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Experience {
  id: string
  position: string
  company: string
  location: string
  period: string
  description: string
  responsibilities: string[]
  technologies?: string[]
}

export default function AdminExperienceForm() {
  const [experiences, setExperiences] = useState<Experience[]>([])
  const [currentExperience, setCurrentExperience] = useState<Experience>({
    id: "",
    position: "",
    company: "",
    location: "",
    period: "",
    description: "",
    responsibilities: [],
    technologies: [],
  })
  const [currentResponsibility, setCurrentResponsibility] = useState("")
  const [currentTechnology, setCurrentTechnology] = useState("")
  const [isEditing, setIsEditing] = useState(false)

  const handleAddResponsibility = () => {
    if (currentResponsibility.trim() !== "") {
      setCurrentExperience({
        ...currentExperience,
        responsibilities: [...currentExperience.responsibilities, currentResponsibility.trim()],
      })
      setCurrentResponsibility("")
    }
  }

  const handleRemoveResponsibility = (index: number) => {
    setCurrentExperience({
      ...currentExperience,
      responsibilities: currentExperience.responsibilities.filter((_, i) => i !== index),
    })
  }

  const handleAddTechnology = () => {
    if (currentTechnology.trim() !== "") {
      setCurrentExperience({
        ...currentExperience,
        technologies: [...(currentExperience.technologies || []), currentTechnology.trim()],
      })
      setCurrentTechnology("")
    }
  }

  const handleRemoveTechnology = (tech: string) => {
    setCurrentExperience({
      ...currentExperience,
      technologies: currentExperience.technologies?.filter((t) => t !== tech),
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (isEditing) {
      setExperiences(experiences.map((exp) => (exp.id === currentExperience.id ? currentExperience : exp)))
      setIsEditing(false)
    } else {
      const newExperience = {
        ...currentExperience,
        id: Date.now().toString(),
      }
      setExperiences([...experiences, newExperience])
    }

    // Reset form
    setCurrentExperience({
      id: "",
      position: "",
      company: "",
      location: "",
      period: "",
      description: "",
      responsibilities: [],
      technologies: [],
    })
  }

  const handleEdit = (experience: Experience) => {
    setCurrentExperience(experience)
    setIsEditing(true)
  }

  const handleDelete = (id: string) => {
    setExperiences(experiences.filter((exp) => exp.id !== id))
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>{isEditing ? "Edit Experience" : "Add New Experience"}</CardTitle>
          <CardDescription>
            {isEditing
              ? "Update the experience details below"
              : "Fill in the details to add a new professional experience"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="position">Position/Title</Label>
              <Input
                id="position"
                value={currentExperience.position}
                onChange={(e) => setCurrentExperience({ ...currentExperience, position: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company/Organization</Label>
              <Input
                id="company"
                value={currentExperience.company}
                onChange={(e) => setCurrentExperience({ ...currentExperience, company: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={currentExperience.location}
                onChange={(e) => setCurrentExperience({ ...currentExperience, location: e.target.value })}
                placeholder="San Francisco, CA"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="period">Period</Label>
              <Input
                id="period"
                value={currentExperience.period}
                onChange={(e) => setCurrentExperience({ ...currentExperience, period: e.target.value })}
                placeholder="2021 - Present"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={currentExperience.description}
                onChange={(e) => setCurrentExperience({ ...currentExperience, description: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Responsibilities</Label>
              <div className="flex gap-2">
                <Input
                  value={currentResponsibility}
                  onChange={(e) => setCurrentResponsibility(e.target.value)}
                  placeholder="Add a responsibility"
                />
                <Button type="button" onClick={handleAddResponsibility} size="icon">
                  <PlusCircle className="h-4 w-4" />
                </Button>
              </div>

              <ul className="space-y-2 mt-2">
                {currentExperience.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-center justify-between bg-muted p-2 rounded-md">
                    <span className="text-sm">{responsibility}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveResponsibility(index)}
                      className="h-8 w-8 p-0"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <Label>Technologies</Label>
              <div className="flex gap-2">
                <Input
                  value={currentTechnology}
                  onChange={(e) => setCurrentTechnology(e.target.value)}
                  placeholder="Add a technology"
                />
                <Button type="button" onClick={handleAddTechnology} size="icon">
                  <PlusCircle className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 mt-2">
                {currentExperience.technologies?.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center gap-1">
                    {tech}
                    <button
                      type="button"
                      onClick={() => handleRemoveTechnology(tech)}
                      className="ml-1 hover:text-destructive"
                    >
                      <Trash2 className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-2">
              {isEditing && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setIsEditing(false)
                    setCurrentExperience({
                      id: "",
                      position: "",
                      company: "",
                      location: "",
                      period: "",
                      description: "",
                      responsibilities: [],
                      technologies: [],
                    })
                  }}
                >
                  Cancel
                </Button>
              )}
              <Button type="submit">{isEditing ? "Update Experience" : "Add Experience"}</Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Existing Experiences</h3>
        {experiences.length === 0 ? (
          <p className="text-muted-foreground">No experiences added yet.</p>
        ) : (
          <div className="space-y-4">
            {experiences.map((experience) => (
              <Card key={experience.id}>
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="md:w-1/3">
                      <h4 className="font-semibold">{experience.position}</h4>
                      <p className="text-purple-600 dark:text-purple-400">{experience.company}</p>
                      <p className="text-sm text-muted-foreground">{experience.location}</p>
                      <p className="text-sm text-muted-foreground">{experience.period}</p>

                      {experience.technologies && experience.technologies.length > 0 && (
                        <div className="mt-2">
                          <p className="text-xs font-medium mb-1">Technologies:</p>
                          <div className="flex flex-wrap gap-1">
                            {experience.technologies.map((tech, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="md:w-2/3">
                      <p className="text-sm mb-2">{experience.description}</p>

                      {experience.responsibilities.length > 0 && (
                        <div>
                          <p className="text-xs font-medium mb-1">Responsibilities:</p>
                          <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground">
                            {experience.responsibilities.map((responsibility, index) => (
                              <li key={index}>{responsibility}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 mt-4">
                    <Button variant="outline" size="sm" onClick={() => handleEdit(experience)}>
                      Edit
                    </Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDelete(experience.id)}>
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
