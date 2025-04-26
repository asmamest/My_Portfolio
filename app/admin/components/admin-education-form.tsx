"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { PlusCircle, Trash2 } from "lucide-react"

interface Education {
  id: string
  degree: string
  institution: string
  location: string
  period: string
  description: string
  achievements: string[]
}

export default function AdminEducationForm() {
  const [educations, setEducations] = useState<Education[]>([])
  const [currentEducation, setCurrentEducation] = useState<Education>({
    id: "",
    degree: "",
    institution: "",
    location: "",
    period: "",
    description: "",
    achievements: [],
  })
  const [currentAchievement, setCurrentAchievement] = useState("")
  const [isEditing, setIsEditing] = useState(false)

  const handleAddAchievement = () => {
    if (currentAchievement.trim() !== "") {
      setCurrentEducation({
        ...currentEducation,
        achievements: [...currentEducation.achievements, currentAchievement.trim()],
      })
      setCurrentAchievement("")
    }
  }

  const handleRemoveAchievement = (index: number) => {
    setCurrentEducation({
      ...currentEducation,
      achievements: currentEducation.achievements.filter((_, i) => i !== index),
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (isEditing) {
      setEducations(educations.map((edu) => (edu.id === currentEducation.id ? currentEducation : edu)))
      setIsEditing(false)
    } else {
      const newEducation = {
        ...currentEducation,
        id: Date.now().toString(),
      }
      setEducations([...educations, newEducation])
    }

    // Reset form
    setCurrentEducation({
      id: "",
      degree: "",
      institution: "",
      location: "",
      period: "",
      description: "",
      achievements: [],
    })
  }

  const handleEdit = (education: Education) => {
    setCurrentEducation(education)
    setIsEditing(true)
  }

  const handleDelete = (id: string) => {
    setEducations(educations.filter((edu) => edu.id !== id))
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>{isEditing ? "Edit Education" : "Add New Education"}</CardTitle>
          <CardDescription>
            {isEditing ? "Update the education details below" : "Fill in the details to add a new academic background"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="degree">Degree/Certificate</Label>
              <Input
                id="degree"
                value={currentEducation.degree}
                onChange={(e) => setCurrentEducation({ ...currentEducation, degree: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="institution">Institution</Label>
              <Input
                id="institution"
                value={currentEducation.institution}
                onChange={(e) => setCurrentEducation({ ...currentEducation, institution: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={currentEducation.location}
                onChange={(e) => setCurrentEducation({ ...currentEducation, location: e.target.value })}
                placeholder="Boston, MA"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="period">Period</Label>
              <Input
                id="period"
                value={currentEducation.period}
                onChange={(e) => setCurrentEducation({ ...currentEducation, period: e.target.value })}
                placeholder="2017 - 2021"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={currentEducation.description}
                onChange={(e) => setCurrentEducation({ ...currentEducation, description: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Achievements</Label>
              <div className="flex gap-2">
                <Input
                  value={currentAchievement}
                  onChange={(e) => setCurrentAchievement(e.target.value)}
                  placeholder="Add an achievement"
                />
                <Button type="button" onClick={handleAddAchievement} size="icon">
                  <PlusCircle className="h-4 w-4" />
                </Button>
              </div>

              <ul className="space-y-2 mt-2">
                {currentEducation.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-center justify-between bg-muted p-2 rounded-md">
                    <span className="text-sm">{achievement}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveAchievement(index)}
                      className="h-8 w-8 p-0"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end gap-2">
              {isEditing && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setIsEditing(false)
                    setCurrentEducation({
                      id: "",
                      degree: "",
                      institution: "",
                      location: "",
                      period: "",
                      description: "",
                      achievements: [],
                    })
                  }}
                >
                  Cancel
                </Button>
              )}
              <Button type="submit">{isEditing ? "Update Education" : "Add Education"}</Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Existing Education</h3>
        {educations.length === 0 ? (
          <p className="text-muted-foreground">No education entries added yet.</p>
        ) : (
          <div className="space-y-4">
            {educations.map((education) => (
              <Card key={education.id}>
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="md:w-1/3">
                      <h4 className="font-semibold">{education.degree}</h4>
                      <p className="text-purple-600 dark:text-purple-400">{education.institution}</p>
                      <p className="text-sm text-muted-foreground">{education.location}</p>
                      <p className="text-sm text-muted-foreground">{education.period}</p>
                    </div>

                    <div className="md:w-2/3">
                      <p className="text-sm mb-2">{education.description}</p>

                      {education.achievements.length > 0 && (
                        <div>
                          <p className="text-xs font-medium mb-1">Achievements:</p>
                          <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground">
                            {education.achievements.map((achievement, index) => (
                              <li key={index}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 mt-4">
                    <Button variant="outline" size="sm" onClick={() => handleEdit(education)}>
                      Edit
                    </Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDelete(education.id)}>
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
