import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Calendar, BadgeIcon as Certificate, Code, Globe, GraduationCap, Trophy } from "lucide-react"

interface TimelineEvent {
  id: string
  title: string
  organization: string
  date: string
  description: string
  category: string
}

// Sample data - replace with your actual accomplishments
const timelineEvents: TimelineEvent[] = [
  {
    id: "event-1",
    title: "Best AI Project Award",
    organization: "International AI Conference",
    date: "November 2023",
    description: "Recognized for developing an innovative neural network architecture.",
    category: "awards",
  },
  {
    id: "event-2",
    title: "Women in Tech Scholarship",
    organization: "Tech Foundation",
    date: "September 2022",
    description: "Selected among 500+ applicants for a full scholarship.",
    category: "awards",
  },
  {
    id: "event-3",
    title: "1st Place - Healthcare AI Hackathon",
    organization: "MedTech Innovation",
    date: "March 2023",
    description: "Led a team to develop an AI-powered diagnostic tool.",
    category: "competitions",
  },
  {
    id: "event-4",
    title: "Speaker - 'The Future of Ethical AI'",
    organization: "Tech Summit 2023",
    date: "July 2023",
    description: "Invited speaker presenting research on ethical AI.",
    category: "conferences",
  },
  {
    id: "event-5",
    title: "TensorFlow Developer Certification",
    organization: "Google",
    date: "January 2023",
    description: "Demonstrated proficiency in building neural networks.",
    category: "certifications",
  },
  {
    id: "event-6",
    title: "Research Paper Publication",
    organization: "Journal of AI in Medicine",
    date: "April 2023",
    description: "Published research on transformer models for medical text analysis.",
    category: "publications",
  },
]

const categoryIcons = {
  awards: <Trophy className="h-5 w-5" />,
  competitions: <Code className="h-5 w-5" />,
  conferences: <Globe className="h-5 w-5" />,
  certifications: <Certificate className="h-5 w-5" />,
  academic: <GraduationCap className="h-5 w-5" />,
  publications: <Award className="h-5 w-5" />,
}

export default function TimelineSection() {
  // Sort events by date (newest first)
  const sortedEvents = [...timelineEvents].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Journey</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            A chronological timeline of key milestones and achievements.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-border -translate-x-1/2 z-0"></div>

          <div className="space-y-12">
            {sortedEvents.map((event, index) => (
              <div
                key={event.id}
                className={`relative flex items-center ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-purple-100 border-4 border-purple-500 -translate-x-1/2 z-10 flex items-center justify-center">
                  {categoryIcons[event.category as keyof typeof categoryIcons]}
                </div>

                {/* Content card */}
                <Card
                  className={`w-[calc(100%-2rem)] md:w-[45%] ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"} relative z-20`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <time className="text-sm text-muted-foreground">{event.date}</time>
                      <Badge variant="outline" className="ml-auto">
                        {event.category}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold">{event.title}</h3>
                    <p className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-2">
                      {event.organization}
                    </p>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
