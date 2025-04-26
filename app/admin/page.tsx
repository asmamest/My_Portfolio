"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"
import AdminProjectForm from "./components/admin-project-form"
import AdminAwardForm from "./components/admin-award-form"
import AdminBlogForm from "./components/admin-blog-form"
import AdminTestimonialForm from "./components/admin-testimonial-form"
import AdminExperienceForm from "./components/admin-experience-form"
import AdminEducationForm from "./components/admin-education-form"
import { useRouter } from "next/navigation"

export default function AdminPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // This is a simple authentication for demo purposes
    // In a real application, you would use a proper authentication system
    if (email === "admin@example.com" && password === "password") {
      setIsAuthenticated(true)
      setError("")
    } else {
      setError("Invalid email or password")
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setEmail("")
    setPassword("")
    router.push("/")
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl">Admin Login</CardTitle>
            <CardDescription>Enter your credentials to access the admin panel</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p className="text-sm text-red-500">{error}</p>}
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-muted/10">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <h1 className="text-lg font-semibold">Portfolio Admin Panel</h1>
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => router.push("/")}>
              View Site
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8 px-4 md:px-6">
        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="awards">Awards</TabsTrigger>
            <TabsTrigger value="blog">Blog</TabsTrigger>
            <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>

          <TabsContent value="projects">
            <AdminProjectForm />
          </TabsContent>

          <TabsContent value="awards">
            <AdminAwardForm />
          </TabsContent>

          <TabsContent value="blog">
            <AdminBlogForm />
          </TabsContent>

          <TabsContent value="testimonials">
            <AdminTestimonialForm />
          </TabsContent>

          <TabsContent value="experience">
            <AdminExperienceForm />
          </TabsContent>

          <TabsContent value="education">
            <AdminEducationForm />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
