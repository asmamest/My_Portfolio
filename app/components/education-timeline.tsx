"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

interface EducationItem {
  id: string
  institution: string
  degree: string
  location: string
  period: string
  description?: string
}

const educationData: EducationItem[] = [
  {
    id: "edu-1",
    institution: "École Nationale des Ingénieurs de Carthage",
    degree: "Génie Informatique, spécialisation IA/ML",
    location: "Carthage, Tunisie",
    period: "2021 - Présent",
    description: "Formation d'ingénieur avec spécialisation en intelligence artificielle et machine learning.",
  },
  {
    id: "edu-2",
    institution: "Institut Préparatoire aux Études d'Ingénieurs",
    degree: "Classes préparatoires",
    location: "Tunisie",
    period: "2019 - 2021",
    description: "Préparation intensive aux concours d'entrée des écoles d'ingénieurs.",
  },
  {
    id: "edu-3",
    institution: "Lycée Remada",
    degree: "Baccalauréat Scientifique",
    location: "Remada, Tunisie",
    period: "2016 - 2019",
    description: "Spécialisation en mathématiques et sciences physiques.",
  },
  {
    id: "edu-4",
    institution: "Collège Pilote Tataouine",
    degree: "Enseignement secondaire",
    location: "Tataouine, Tunisie",
    period: "2012 - 2016",
  },
  {
    id: "edu-5",
    institution: "École Primaire Neckrif",
    degree: "Enseignement primaire",
    location: "Tunisie",
    period: "2006 - 2012",
  },
]

export default function EducationTimeline() {
  const [activeIndex, setActiveIndex] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  })

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % educationData.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [inView])

  return (
    <div ref={ref} className="relative max-w-4xl mx-auto">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-purple-300 dark:bg-purple-800 -translate-x-1/2"></div>

      {educationData.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: activeIndex === index ? 1 : 0.7,
            y: 0,
            scale: activeIndex === index ? 1.03 : 1,
          }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`relative mb-12 ${index % 2 === 0 ? "md:ml-auto md:mr-[50%]" : "md:mr-auto md:ml-[50%]"}`}
        >
          {/* Timeline dot */}
          <div className="absolute left-4 md:left-0 top-6 w-8 h-8 rounded-full bg-purple-100 border-4 border-purple-500 dark:bg-purple-900 dark:border-purple-400 md:-translate-x-1/2 flex items-center justify-center z-10">
            <GraduationCap className="h-4 w-4 text-purple-700 dark:text-purple-300" />
          </div>

          <Card className={`ml-12 md:ml-0 md:w-[90%] ${activeIndex === index ? "border-purple-400 shadow-lg" : ""}`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Badge variant={activeIndex === index ? "default" : "outline"} className="mb-2">
                  {item.period}
                </Badge>
              </div>
              <h3 className="text-xl font-bold mb-1">{item.institution}</h3>
              <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">{item.degree}</p>
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{item.location}</span>
              </div>
              {item.description && <p className="text-sm text-muted-foreground">{item.description}</p>}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
