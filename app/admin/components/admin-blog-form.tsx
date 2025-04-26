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

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  image: string
  slug: string
  tags: string[]
}

export default function AdminBlogForm() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [currentPost, setCurrentPost] = useState<BlogPost>({
    id: "",
    title: "",
    excerpt: "",
    content: "",
    date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
    image: "",
    slug: "",
    tags: [],
  })
  const [currentTag, setCurrentTag] = useState("")
  const [isEditing, setIsEditing] = useState(false)

  const handleAddTag = () => {
    if (currentTag.trim() !== "") {
      setCurrentPost({
        ...currentPost,
        tags: [...currentPost.tags, currentTag.trim()],
      })
      setCurrentTag("")
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setCurrentPost({
      ...currentPost,
      tags: currentPost.tags.filter((tag) => tag !== tagToRemove),
    })
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
  }

  const handleTitleChange = (title: string) => {
    setCurrentPost({
      ...currentPost,
      title,
      slug: generateSlug(title),
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (isEditing) {
      setPosts(posts.map((post) => (post.id === currentPost.id ? currentPost : post)))
      setIsEditing(false)
    } else {
      const newPost = {
        ...currentPost,
        id: Date.now().toString(),
        date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      }
      setPosts([...posts, newPost])
    }

    // Reset form
    setCurrentPost({
      id: "",
      title: "",
      excerpt: "",
      content: "",
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      image: "",
      slug: "",
      tags: [],
    })
  }

  const handleEdit = (post: BlogPost) => {
    setCurrentPost(post)
    setIsEditing(true)
  }

  const handleDelete = (id: string) => {
    setPosts(posts.filter((post) => post.id !== id))
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>{isEditing ? "Edit Blog Post" : "Add New Blog Post"}</CardTitle>
          <CardDescription>
            {isEditing ? "Update the blog post details below" : "Fill in the details to add a new blog post"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={currentPost.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="slug">Slug</Label>
              <Input
                id="slug"
                value={currentPost.slug}
                onChange={(e) => setCurrentPost({ ...currentPost, slug: e.target.value })}
                required
              />
              <p className="text-xs text-muted-foreground">
                The slug is automatically generated from the title, but you can edit it if needed.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                value={currentPost.excerpt}
                onChange={(e) => setCurrentPost({ ...currentPost, excerpt: e.target.value })}
                placeholder="A brief summary of the blog post"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                value={currentPost.content}
                onChange={(e) => setCurrentPost({ ...currentPost, content: e.target.value })}
                className="min-h-[200px]"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="image">Featured Image URL</Label>
              <Input
                id="image"
                value={currentPost.image}
                onChange={(e) => setCurrentPost({ ...currentPost, image: e.target.value })}
                placeholder="/placeholder.svg?height=400&width=600"
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
                {currentPost.tags.map((tag, index) => (
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
                    setCurrentPost({
                      id: "",
                      title: "",
                      excerpt: "",
                      content: "",
                      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
                      image: "",
                      slug: "",
                      tags: [],
                    })
                  }}
                >
                  Cancel
                </Button>
              )}
              <Button type="submit">{isEditing ? "Update Post" : "Add Post"}</Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Existing Blog Posts</h3>
        {posts.length === 0 ? (
          <p className="text-muted-foreground">No blog posts added yet.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {posts.map((post) => (
              <Card key={post.id}>
                <CardContent className="p-4">
                  <div className="aspect-video bg-muted mb-4 rounded-md overflow-hidden">
                    {post.image && (
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                  </div>
                  <h4 className="font-semibold mb-1">{post.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleEdit(post)}>
                      Edit
                    </Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDelete(post.id)}>
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
