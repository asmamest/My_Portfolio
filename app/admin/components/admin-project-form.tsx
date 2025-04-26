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

interface Project {
  id: string
  title: string
  description: string
  image: string
  link: string
  tags: string[]
}

export default function AdminProjectForm() {
  const [projects, setProjects] = useState<Project[]>([])
  const [currentProject, setCurrentProject] = useState<Project>({
    id: "",
    title: "",
    description: "",
    image: "",
    link: "",
    tags: [],
  })
  const [currentTag, setCurrentTag] = useState("")
  const [isEditing, setIsEditing] = useState(false)

  const handleAddTag = () => {
    if (currentTag.trim() !== "") {
      setCurrentProject({
        ...currentProject,
        tags: [...currentProject.tags, currentTag.trim()],
      })
      setCurrentTag("")
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setCurrentProject({
      ...currentProject,
      tags: currentProject.tags.filter((tag) => tag !== tagToRemove),
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (isEditing) {
      setProjects(projects.map((project) => (project.id === currentProject.id ? currentProject : project)))
      setIsEditing(false)
    } else {
      const newProject = {
        ...currentProject,
        id: Date.now().toString(),
      }
      setProjects([...projects, newProject])
    }

    // Reset form
    setCurrentProject({
      id: "",
      title: "",
      description: "",
      image: "",
      link: "",
      tags: [],
    })
  }

  const handleEdit = (project: Project) => {
    setCurrentProject(project)
    setIsEditing(true)
  }

  const handleDelete = (id: string) => {
    setProjects(projects.filter((project) => project.id !== id))
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>{isEditing ? "Edit Project" : "Add New Project"}</CardTitle>
          <CardDescription>
            {isEditing
              ? "Update the project details below"
              : "Fill in the details to add a new project to your portfolio"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Project Title</Label>
              <Input
                id="title"
                value={currentProject.title}
                onChange={(e) => setCurrentProject({ ...currentProject, title: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={currentProject.description}
                onChange={(e) => setCurrentProject({ ...currentProject, description: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="image">Image URL</Label>
              <Input
                id="image"
                value={currentProject.image}
                onChange={(e) => setCurrentProject({ ...currentProject, image: e.target.value })}
                placeholder="/placeholder.svg?height=400&width=600"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="link">Project Link</Label>
              <Input
                id="link"
                value={currentProject.link}
                onChange={(e) => setCurrentProject({ ...currentProject, link: e.target.value })}
                placeholder="https://github.com/your-project"
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Tags</Label>
              <div className="flex gap-2">
                <Input value={currentTag} onChange={(e) => setCurrentTag(e.target.value)} placeholder="Add a tag" />
                <Button type="button" onClick={handleAddTag} size="icon">
                  <PlusCircle className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 mt-2">
                {currentProject.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center gap-1">
                    {tag}
                    <button type="button" onClick={() => handleRemoveTag(tag)} className="ml-1 hover:text-destructive">
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
                    setCurrentProject({
                      id: "",
                      title: "",
                      description: "",
                      image: "",
                      link: "",
                      tags: [],
                    })
                  }}
                >
                  Cancel
                </Button>
              )}
              <Button type="submit">{isEditing ? "Update Project" : "Add Project"}</Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Existing Projects</h3>
        {projects.length === 0 ? (
          <p className="text-muted-foreground">No projects added yet.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.id}>
                <CardContent className="p-4">
                  <div className="aspect-video bg-muted mb-4 rounded-md overflow-hidden">
                    {project.image && (
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <h4 className="font-semibold mb-1">{project.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleEdit(project)}>
                      Edit
                    </Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDelete(project.id)}>
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
