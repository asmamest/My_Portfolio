import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Headphones, Video, ExternalLink } from "lucide-react"
import Link from "next/link"

interface Recommendation {
  id: string
  title: string
  author: string
  description: string
  link: string
  type: "book" | "podcast" | "conference"
  tags?: string[]
}

const recommendations: Recommendation[] = [
  {
    id: "book-1",
    title: "Superintelligence: Paths, Dangers, Strategies",
    author: "Nick Bostrom",
    description: "A fascinating exploration of what happens when machines surpass humans in general intelligence.",
    link: "https://example.com/book",
    type: "book",
    tags: ["AI Ethics", "Future of AI"],
  },
  {
    id: "book-2",
    title: "Deep Learning",
    author: "Ian Goodfellow, Yoshua Bengio, Aaron Courville",
    description:
      "The definitive textbook on deep learning, covering both theoretical foundations and practical applications.",
    link: "https://example.com/book",
    type: "book",
    tags: ["Deep Learning", "Neural Networks"],
  },
  {
    id: "podcast-1",
    title: "Lex Fridman Podcast",
    author: "Lex Fridman",
    description:
      "Conversations about AI, deep learning, and the nature of intelligence with leading researchers and thinkers.",
    link: "https://example.com/podcast",
    type: "podcast",
    tags: ["AI Research", "Interviews"],
  },
  {
    id: "podcast-2",
    title: "Machine Learning Street Talk",
    author: "Tim Scarfe, Yannic Kilcher, Keith Duggar",
    description: "In-depth discussions about the latest research papers and developments in machine learning.",
    link: "https://example.com/podcast",
    type: "podcast",
    tags: ["Research Papers", "Technical Discussion"],
  },
  {
    id: "conference-1",
    title: "NeurIPS (Neural Information Processing Systems)",
    author: "Various Speakers",
    description: "One of the most prestigious conferences in machine learning and computational neuroscience.",
    link: "https://example.com/conference",
    type: "conference",
    tags: ["Research", "Academic"],
  },
  {
    id: "conference-2",
    title: "TED Talks: AI and the Future of Humanity",
    author: "Various Speakers",
    description: "Thought-provoking talks about the impact of AI on society and our future.",
    link: "https://example.com/conference",
    type: "conference",
    tags: ["Society", "Future Impact"],
  },
]

export default function RecommendationsNetwork() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join My Learning Network</h2>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Discover the books, podcasts, and conferences that have shaped my thinking and might inspire yours.
        </p>
        <Button variant="outline" size="lg" className="gap-2">
          <ExternalLink className="h-4 w-4" />
          Join My Network
        </Button>
      </div>

      <Tabs defaultValue="books" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="books" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Books
            </TabsTrigger>
            <TabsTrigger value="podcasts" className="flex items-center gap-2">
              <Headphones className="h-4 w-4" />
              Podcasts
            </TabsTrigger>
            <TabsTrigger value="conferences" className="flex items-center gap-2">
              <Video className="h-4 w-4" />
              Conferences
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="books" className="mt-0">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recommendations
              .filter((item) => item.type === "book")
              .map((item) => (
                <RecommendationCard key={item.id} item={item} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="podcasts" className="mt-0">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recommendations
              .filter((item) => item.type === "podcast")
              .map((item) => (
                <RecommendationCard key={item.id} item={item} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="conferences" className="mt-0">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recommendations
              .filter((item) => item.type === "conference")
              .map((item) => (
                <RecommendationCard key={item.id} item={item} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function RecommendationCard({ item }: { item: Recommendation }) {
  const icons = {
    book: <BookOpen className="h-5 w-5 text-purple-500" />,
    podcast: <Headphones className="h-5 w-5 text-purple-500" />,
    conference: <Video className="h-5 w-5 text-purple-500" />,
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-start gap-3">
          {icons[item.type]}
          <div>
            <CardTitle className="text-lg">{item.title}</CardTitle>
            <CardDescription>{item.author}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">{item.description}</p>
        {item.tags && (
          <div className="flex flex-wrap gap-1 mt-4">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 dark:bg-purple-400/10 dark:text-purple-400 dark:ring-purple-400/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Link href={item.link} target="_blank" className="w-full">
          <Button variant="outline" className="w-full gap-2">
            <ExternalLink className="h-4 w-4" />
            Explore
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
