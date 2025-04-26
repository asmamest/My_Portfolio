"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, BadgeIcon as Certificate, Code, Globe, GraduationCap, Trophy } from "lucide-react"
import Image from "next/image"

interface AwardItem {
  id: string
  title: string
  organization: string
  date: string
  description: string
  category: string
  image?: string
  link?: string
}

// Sample data - replace with your actual accomplishments
const accomplishments: AwardItem[] = [
  {
    id: "award-1",
    title: "Best AI Project Award",
    organization: "International AI Conference 2023",
    date: "November 2023",
    description:
      "Recognized for developing an innovative neural network architecture that improved image classification accuracy by 15%.",
    category: "awards",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "award-2",
    title: "Women in Tech Scholarship",
    organization: "Tech Foundation",
    date: "September 2022",
    description:
      "Selected among 500+ applicants for a full scholarship based on academic excellence and leadership potential in AI/ML field.",
    category: "awards",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "hackathon-1",
    title: "1st Place - Healthcare AI Hackathon",
    organization: "MedTech Innovation",
    date: "March 2023",
    description:
      "Led a team of 4 to develop an AI-powered diagnostic tool for early detection of retinal diseases, winning against 30 competing teams.",
    category: "competitions",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "conference-1",
    title: "Speaker - 'The Future of Ethical AI'",
    organization: "Tech Summit 2023",
    date: "July 2023",
    description:
      "Invited speaker at the prestigious Tech Summit, presenting research on ethical considerations in developing AI systems.",
    category: "conferences",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "certification-1",
    title: "TensorFlow Developer Certification",
    organization: "Google",
    date: "January 2023",
    description: "Demonstrated proficiency in building and training neural networks using TensorFlow.",
    category: "certifications",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "certification-2",
    title: "AWS Machine Learning Specialty",
    organization: "Amazon Web Services",
    date: "May 2023",
    description: "Validated expertise in designing, implementing, and maintaining machine learning solutions on AWS.",
    category: "certifications",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "academic-1",
    title: "Dean's List",
    organization: "University of Technology",
    date: "2021-2023",
    description:
      "Recognized for outstanding academic achievement, maintaining a GPA of 3.9/4.0 for four consecutive semesters.",
    category: "academic",
    image: "/placeholder.svg?height=200&width=300",
  },
]

const categoryIcons = {
  awards: <Trophy className="h-5 w-5" />,
  competitions: <Code className="h-5 w-5" />,
  conferences: <Globe className="h-5 w-5" />,
  certifications: <Certificate className="h-5 w-5" />,
  academic: <GraduationCap className="h-5 w-5" />,
}

export default function AwardsSection() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredAccomplishments =
    activeTab === "all" ? accomplishments : accomplishments.filter((item) => item.category === activeTab)

  return (
    <section className="py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Awards & Accomplishments</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Recognitions, achievements, and milestones throughout my academic and professional journey.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-2">
              <TabsTrigger value="all" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span className="hidden md:inline">All</span>
              </TabsTrigger>
              <TabsTrigger value="awards" className="flex items-center gap-2">
                <Trophy className="h-4 w-4" />
                <span className="hidden md:inline">Awards</span>
              </TabsTrigger>
              <TabsTrigger value="competitions" className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                <span className="hidden md:inline">Competitions</span>
              </TabsTrigger>
              <TabsTrigger value="conferences" className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span className="hidden md:inline">Conferences</span>
              </TabsTrigger>
              <TabsTrigger value="certifications" className="flex items-center gap-2">
                <Certificate className="h-4 w-4" />
                <span className="hidden md:inline">Certifications</span>
              </TabsTrigger>
              <TabsTrigger value="academic" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                <span className="hidden md:inline">Academic</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredAccomplishments.map((item) => (
                <AwardCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function AwardCard({ item }: { item: AwardItem }) {
  return (
    <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
      <div className="relative h-48">
        <Image
          src={item.image || "/placeholder.svg?height=200&width=300"}
          alt={item.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="flex items-center gap-1 bg-background/80 backdrop-blur-sm">
            {categoryIcons[item.category as keyof typeof categoryIcons]}
            <span className="capitalize">{item.category}</span>
          </Badge>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <time className="text-sm text-muted-foreground">{item.date}</time>
        </div>
        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
        <p className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-3">{item.organization}</p>
        <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
        {item.link && (
          <Button variant="outline" size="sm" className="w-full" asChild>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
