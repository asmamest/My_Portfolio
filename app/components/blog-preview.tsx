import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

interface BlogPreviewProps {
  title: string
  excerpt: string
  date: string
  image: string
  linkedinUrl: string // Changed from slug to linkedinUrl
  tags: string[]
}

export default function BlogPreview({ title, excerpt, date, image, linkedinUrl, tags }: BlogPreviewProps) {
  // Ensure linkedinUrl is never undefined, provide a fallback if needed
  const safeUrl = linkedinUrl || "#" // Fallback to "#" if linkedinUrl is undefined

  return (
      <Link href={safeUrl} target="_blank" rel="noopener noreferrer">
        <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
          <div className="relative aspect-video">
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          </div>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <time className="text-xs text-muted-foreground">{date}</time>
              <div className="flex flex-wrap gap-1">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-purple-50 px-2 py-0.5 text-xs font-medium text-purple-700 dark:bg-purple-400/10 dark:text-purple-400"
                    >
                  {tag}
                </span>
                ))}
              </div>
            </div>
            <h3 className="font-semibold text-xl mb-2 line-clamp-2">{title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-3">{excerpt}</p>
            <div className="mt-3 text-sm text-purple-600 dark:text-purple-400">
              Read on LinkedIn <span className="ml-1">→</span>
            </div>
          </CardContent>
        </Card>
      </Link>
  )
}
