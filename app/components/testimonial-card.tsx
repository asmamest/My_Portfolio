import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"
import Image from "next/image"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  image: string
}

export default function TestimonialCard({ quote, author, role, image }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <QuoteIcon className="h-8 w-8 text-purple-400 mb-4" />
        <p className="text-muted-foreground mb-6 flex-grow">{quote}</p>
        <div className="flex items-center">
          <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
            <Image src={image || "/placeholder.svg"} alt={author} fill className="object-cover" />
          </div>
          <div>
            <p className="font-medium">{author}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
