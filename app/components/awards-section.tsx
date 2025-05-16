"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import {
  Calendar,
  BadgeIcon as Certificate,
  Code,
  Globe,
  GraduationCap,
  Trophy,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"

interface AwardItem {
  id: string
  title: string
  organization: string
  date: string
  description: string
  category: string
  images: string[]
  link?: string
}

const accomplishments: AwardItem[] = [
  {
    id: "award-1",
    title: "IPEIB Success Story 2024",
    organization: "Bizerte Preparatory Institute for Engineering Studies (IPEIB)",
    date: "November 2024",
    description:
        "Selected among top alumni for outstanding academic excellence. Had the opportunity to meet with new students and share practical strategies on managing stress, maintaining motivation, and achieving top rankings in the national engineering entrance exam.",
    category: "awards",
    images: ["/IPEIB1.jpg?height=200&width=300", "/IPEIB2.jpg?height=200&width=300"],
  },
  {
    "id": "award-2",
    "title": "Best Internship Summer Poster",
    "organization": "National School of Engineers of Carthage (ENICARTHAGE)",
    "date": "September 2024",
    "description": "Awarded for the best idea, design, and conception of the summer internship poster, recognized for creativity and visual impact.",
    "category": "awards",
    "images": ["/best_poster.jpg?height=200&width=300"]
  },

  /*{
    id: "hackathon-1",
    title: "1st Place - Healthcare AI Hackathon",
    organization: "MedTech Innovation",
    date: "March 2023",
    description:
        "Led a team of 4 to develop an AI-powered diagnostic tool for early detection of retinal diseases, winning against 30 competing teams.",
    category: "competitions",
    images: ["/placeholder.svg?height=200&width=300"],
  },*/
  {
    "id": "conference-1",
    "title": "ENICarthage Business Forum 2023",
    "organization": "ENICarthage",
    "date": "2023",
    "description": "Member of the Program Committee for the Forum des Entreprises ENICarthage 2023, responsible for planning the event, including selecting themes, inviting speakers, creating the event schedule, and organizing conferences and workshops." +
        " Main point of contact with businessmen, including Oussama Ouertani.",
    "category": "conferences",
    "images": ["/fee2023m.jpg?height=200&width=300","/ffe20231.jpg?height=200&width=300","/f2023.jpg"]
  },
  {
    "id": "conference-2",
    "title": "ENICarthage Business Forum 2024",
    "organization": "ENICarthage",
    "date": "2024",
    "description": "As a key member of the Program Committee for the ENICarthage Business Forum 2024, I played an integral role in shaping the event's vision and execution. My responsibilities spanned from curating innovative themes and securing top-tier speakers to designing the full event schedule. I led the organization of dynamic conferences and workshops, ensuring they addressed the latest trends in business and technology. Additionally, I served as the primary liaison between the forum and prominent industry leaders, including Oussama Ouertani, fostering valuable partnerships and collaborations.",
    "category": "conferences",
    "images": ["/azaza.jpg?height=200&width=300","/helo.jpg?height=200&width=300"]
  },
  {
    "id": "certification-5",
    "title": "Hashgraph Developer Course",
    "organization": "The Hashgraph Association",
    "date": "Apr 2025",
    "description": "This credential certifies that the learner has completed the Hashgraph Developer Course and equips you with essential skills to:\n\nUnderstand the fundamentals of Hashgraph consensus algorithm\n\nDevelop decentralized applications using Hashgraph technology\n\nImplement smart contracts and manage state in a distributed ledger\n\nExplore Hashgraph’s advantages in speed, security, and fairness\n\nBuild scalable and secure distributed systems\n\nApply best practices for decentralized application development",
    "category": "certifications",
    "images": ["hashgraph_dev.png/?height=200&width=300"]
  },
  {
    id: "certification-2",
    title: "CCNA: Introduction to Networks",
    organization: "Cisco",
    date: "March 2025",
    description: "This certification introduces the fundamentals of networking and equips you with essential skills to:\n" +
        "\n" +
        "Configure switches, routers, and end devices for local and remote network access\n" +
        "\n" +
        "Understand how physical and data link layer protocols support Ethernet operations\n" +
        "\n" +
        "Build and verify IPv4/IPv6 addressing schemes and ensure end-to-end connectivity\n" +
        "\n" +
        "Explain how upper OSI layers support network applications\n" +
        "\n" +
        "Implement small networks following security best practices\n" +
        "\n" +
        "Troubleshoot connectivity issues in small-scale networks",
    category: "certifications",
    images: ["ccna.png/?height=200&width=300"],
  },
  {
    "id": "certification-4",
    "title": "Advanced Learning Algorithms",
    "organization": "DeepLearning.AI & Stanford | Coursera",
    "date": "March 2025",
    "description": "This certification explores advanced machine learning algorithms and equips you with essential skills to:\n\nUnderstand complex models such as neural networks, decision trees, and ensemble methods\n\nImplement techniques for feature engineering and selection\n\nOptimize algorithms using hyperparameter tuning and cross-validation\n\nApply deep learning frameworks for real-world problem solving\n\nEvaluate model robustness and generalization\n\nDevelop scalable machine learning pipelines with best practices",
    "category": "certifications",
    "images": ["advanced_algorithms.png/?height=200&width=300"]
  },
  {
    id: "certification-3",
    title: "Supervised Machine Learning: Regression and Classification",
    organization: "DeepLearning.AI & Standford | Coursera",
    date: "Jan 2025",
    description: "This certification introduces the fundamentals of supervised machine learning and equips you with essential skills to:\n\nUnderstand key concepts such as regression, classification, loss functions, and gradient descent\n\nBuild and train models using linear and logistic regression\n\nApply regularization techniques to prevent overfitting\n\nEvaluate model performance with appropriate metrics and validation methods\n\nImplement supervised learning pipelines using Python and best practices\n\nAnalyze data, train predictive models, and make informed decisions based on outputs",
    category: "certifications",
    images: ["reg.png/?height=200&width=300"],
  },
  {
    "id": "certification-6",
    "title": "Docker Crash Course",
    "organization": "RBK",
    "date": "Jan 2025",
    "description": "This certification provides a practical introduction to Docker and equips you with essential skills to:\n\nUnderstand containerization concepts and Docker architecture\n\nBuild, manage, and deploy Docker containers\n\nCreate and optimize Dockerfiles for efficient image creation\n\nManage Docker networks and volumes\n\nImplement container orchestration basics\n\nApply Docker best practices for development and deployment workflows",
    "category": "certifications",
    "images": ["docker_crash_course.png/?height=200&width=300"]
  },
  {
    id: "certification-1",
    title: "Microsoft Certified : Azure AI Fundamentals",
    organization: "Microsoft",
    date: "nov. 2024",
    description: "An official Microsoft certification that validates the fundamentals of artificial intelligence and Azure AI services.\n" +
        "It covers the core concepts of machine learning, natural language processing, computer vision, and conversational AI, using Cognitive Services, Azure Bot Services, and Azure Machine Learning.\n" +
        "\n",
    category: "certifications",
    images: ["/azure.png?height=200&width=300"],
  }



]

const categoryIcons = {
  awards: <Trophy className="h-5 w-5" />,
  competitions: <Code className="h-5 w-5" />,
  conferences: <Globe className="h-5 w-5" />,
  certifications: <Certificate className="h-5 w-5" />
}

export default function AwardsSection() {
  const [activeTab, setActiveTab] = useState("all")
  const [selectedAward, setSelectedAward] = useState<AwardItem | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredAccomplishments =
      activeTab === "all" ? accomplishments : accomplishments.filter((item) => item.category === activeTab)

  const navigateImage = (direction: "next" | "prev") => {
    if (!selectedAward || selectedAward.images.length <= 1) return

    const newIndex =
        direction === "next"
            ? (currentImageIndex + 1) % selectedAward.images.length
            : (currentImageIndex - 1 + selectedAward.images.length) % selectedAward.images.length

    setCurrentImageIndex(newIndex)
  }

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
              <TabsList className="grid grid-cols-3 md:grid-cols-4 gap-2">
                <TabsTrigger value="all" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span className="hidden md:inline">All</span>
                </TabsTrigger>
                <TabsTrigger value="awards" className="flex items-center gap-2">
                  <Trophy className="h-4 w-4" />
                  <span className="hidden md:inline">Awards</span>
                </TabsTrigger>
                <TabsTrigger value="conferences" className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  <span className="hidden md:inline">Conferences</span>
                </TabsTrigger>
                <TabsTrigger value="certifications" className="flex items-center gap-2">
                  <Certificate className="h-4 w-4" />
                  <span className="hidden md:inline">Certifications</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value={activeTab} className="mt-0">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredAccomplishments.map((item) => (
                    <Card
                        key={item.id}
                        className="overflow-hidden h-full hover:shadow-md transition-shadow cursor-pointer"
                        onClick={() => {
                          setSelectedAward(item)
                          setCurrentImageIndex(0)
                        }}
                    >
                      <div className="relative h-48">
                        <Image
                            src={item.images[0] || "/placeholder.svg?height=200&width=300"}
                            alt={item.title}
                            fill
                            className="object-cover"
                        />
                        {item.images.length > 1 && (
                            <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                              {item.images.length} photos
                            </div>
                        )}
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
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <Dialog open={!!selectedAward} onOpenChange={(open) => !open && setSelectedAward(null)}>
            {selectedAward && (
                <DialogContent className="max-w-4xl">
                  <DialogHeader>
                    <DialogTitle>{selectedAward.title}</DialogTitle>
                    <DialogDescription>
                      {selectedAward.organization} • {selectedAward.date}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">{selectedAward.description}</p>
                    <div className="relative aspect-video w-full">
                      <Image
                          src={selectedAward.images[currentImageIndex] || "/placeholder.svg"}
                          alt={selectedAward.title}
                          fill
                          className="object-contain"
                          priority
                      />
                      {selectedAward.images.length > 1 && (
                          <div className="absolute inset-0 flex items-center justify-between">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 rounded-full bg-background/60 backdrop-blur-sm"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  navigateImage("prev")
                                }}
                            >
                              <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 rounded-full bg-background/60 backdrop-blur-sm"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  navigateImage("next")
                                }}
                            >
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </div>
                      )}
                    </div>
                    {selectedAward.images.length > 1 && (
                        <div className="flex justify-center gap-1 mt-2">
                          {selectedAward.images.map((_, index) => (
                              <span
                                  key={index}
                                  className={`h-1.5 w-1.5 rounded-full ${
                                      index === currentImageIndex ? "bg-purple-500" : "bg-gray-300 dark:bg-gray-600"
                                  }`}
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    setCurrentImageIndex(index)
                                  }}
                              />
                          ))}
                        </div>
                    )}
                  </div>
                  <DialogFooter className="flex justify-between items-center">
                    {selectedAward.images.length > 1 && (
                        <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">
                      {currentImageIndex + 1} / {selectedAward.images.length}
                    </span>
                        </div>
                    )}
                    {selectedAward.link && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={selectedAward.link} target="_blank" rel="noopener noreferrer">
                            Learn More
                          </a>
                        </Button>
                    )}
                  </DialogFooter>
                </DialogContent>
            )}
          </Dialog>
        </div>
      </section>
  )
}
