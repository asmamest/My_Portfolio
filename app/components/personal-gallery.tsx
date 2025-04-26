"use client"

import { useState } from "react"
import Image from "next/image"
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
import { Camera, Book, Heart, ChevronLeft, ChevronRight } from "lucide-react"

interface GalleryItem {
  id: string
  title: string
  description: string
  image: string
  category: string
  date?: string
  eventId?: string // Pour grouper les images d'un même événement
}

// Sample gallery items - replace with your actual photos and descriptions
const galleryItems: GalleryItem[] = [
  {
    id: "reading-1",
    title: "Book Collection",
    description: "My growing collection of science fiction and philosophy books.",
    image: "/placeholder.svg?height=600&width=800",
    category: "reading",
    date: "December 2023",
  },
  {
    id: "volunteer-1",
    title: "Community Tech Workshop",
    description: "Volunteering to teach basic programming to kids in my community.",
    image: "/placeholder.svg?height=600&width=800",
    category: "volunteer",
    date: "January 2024",
  },
  {
    id: "event-1-photo-1",
    title: "AI Conference 2023",
    description: "Participating in panel discussions about the future of AI ethics.",
    image: "/placeholder.svg?height=600&width=800",
    category: "events",
    date: "October 2023",
    eventId: "ai-conf-2023",
  },
  {
    id: "event-1-photo-2",
    title: "AI Conference 2023 - Workshop",
    description: "Leading a workshop on neural networks for beginners.",
    image: "/placeholder.svg?height=600&width=800",
    category: "events",
    date: "October 2023",
    eventId: "ai-conf-2023",
  },
  {
    id: "event-1-photo-3",
    title: "AI Conference 2023 - Networking",
    description: "Meeting with industry professionals and researchers.",
    image: "/placeholder.svg?height=600&width=800",
    category: "events",
    date: "October 2023",
    eventId: "ai-conf-2023",
  },
  {
    id: "event-2-photo-1",
    title: "Hackathon 2024",
    description: "Working with my team on an AI solution for healthcare.",
    image: "/placeholder.svg?height=600&width=800",
    category: "events",
    date: "February 2024",
    eventId: "hackathon-2024",
  },
  {
    id: "event-2-photo-2",
    title: "Hackathon 2024 - Presentation",
    description: "Presenting our solution to the judges.",
    image: "/placeholder.svg?height=600&width=800",
    category: "events",
    date: "February 2024",
    eventId: "hackathon-2024",
  },
  {
    id: "reading-2",
    title: "Philosophy Corner",
    description: "My favorite philosophical works that inspire my approach to AI ethics.",
    image: "/placeholder.svg?height=600&width=800",
    category: "reading",
    date: "March 2024",
  },
  {
    id: "volunteer-2",
    title: "Mentoring Program",
    description: "Mentoring young women interested in STEM careers.",
    image: "/placeholder.svg?height=600&width=800",
    category: "volunteer",
    date: "April 2024",
  },
]

const categories = [
  { id: "all", label: "All", icon: <Heart className="h-4 w-4" /> },
  { id: "reading", label: "Reading", icon: <Book className="h-4 w-4" /> },
  { id: "volunteer", label: "Volunteering", icon: <Heart className="h-4 w-4" /> },
  { id: "events", label: "Events", icon: <Camera className="h-4 w-4" /> },
]

export default function PersonalGallery() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredItems =
    selectedCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  // Fonction pour trouver toutes les images du même événement
  const getEventImages = (eventId: string | undefined) => {
    if (!eventId) return [selectedImage]
    return galleryItems.filter((item) => item.eventId === eventId)
  }

  // Images de l'événement actuel
  const currentEventImages = selectedImage ? getEventImages(selectedImage.eventId) : []

  // Fonction pour naviguer entre les images d'un événement
  const navigateImage = (direction: "next" | "prev") => {
    if (currentEventImages.length <= 1) return

    const newIndex =
      direction === "next"
        ? (currentImageIndex + 1) % currentEventImages.length
        : (currentImageIndex - 1 + currentEventImages.length) % currentEventImages.length

    setCurrentImageIndex(newIndex)
    setSelectedImage(currentEventImages[newIndex])
  }

  // Mise à jour de l'index lorsqu'une nouvelle image est sélectionnée
  const handleImageSelect = (image: GalleryItem) => {
    setSelectedImage(image)
    if (image.eventId) {
      const images = getEventImages(image.eventId)
      const index = images.findIndex((img) => img.id === image.id)
      setCurrentImageIndex(index >= 0 ? index : 0)
    } else {
      setCurrentImageIndex(0)
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="inline-flex items-center justify-center p-2 bg-purple-100 rounded-full dark:bg-purple-900/30">
          <Camera className="h-6 w-6 text-purple-700 dark:text-purple-300" />
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Life Beyond Code</h2>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Exploring my passions, hobbies, and adventures outside the world of technology.
        </p>
      </div>

      <Tabs defaultValue="all" value={selectedCategory} onValueChange={setSelectedCategory}>
        <div className="flex justify-center mb-8 overflow-x-auto pb-2">
          <TabsList className="flex flex-nowrap">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                {category.icon}
                <span>{category.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value={selectedCategory} className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden cursor-pointer hover:shadow-lg transition-all"
                onClick={() => handleImageSelect(item)}
              >
                <CardContent className="p-4">
                  <h3 className="font-medium text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                  {item.date && (
                    <p className="text-xs text-muted-foreground mb-3 flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                      {item.date}
                    </p>
                  )}
                  <div className="relative aspect-video">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover rounded-md"
                    />
                    {item.eventId && (
                      <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                        {getEventImages(item.eventId).length} photos
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        {selectedImage && (
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>{selectedImage.title}</DialogTitle>
              <DialogDescription>{selectedImage.date}</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <p className="text-muted-foreground">{selectedImage.description}</p>
              <div className="relative aspect-video w-full">
                <Image
                  src={selectedImage.image || "/placeholder.svg"}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <DialogFooter className="flex justify-between items-center">
              {currentEventImages.length > 1 && (
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="icon" onClick={() => navigateImage("prev")}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    {currentImageIndex + 1} / {currentEventImages.length}
                  </span>
                  <Button variant="outline" size="icon" onClick={() => navigateImage("next")}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>

      <div className="flex justify-center mt-8">
        <Button variant="outline">View More Photos</Button>
      </div>
    </div>
  )
}
