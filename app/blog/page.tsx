import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Link from "next/link"
import BlogPreview from "../components/blog-preview"

// Mock data for blog posts
const blogPosts = [
  {
    title: "Understanding Transformer Architecture",
    excerpt: "A deep dive into the architecture that powers modern language models like GPT and BERT.",
    date: "April 15, 2024",
    image: "/placeholder.svg?height=400&width=600",
    slug: "understanding-transformer-architecture",
    tags: ["NLP", "Deep Learning"],
  },
  {
    title: "Implementing K-means Clustering from Scratch",
    excerpt: "A step-by-step guide to implementing the K-means clustering algorithm in Python.",
    date: "March 28, 2024",
    image: "/placeholder.svg?height=400&width=600",
    slug: "implementing-kmeans-clustering",
    tags: ["Clustering", "Python"],
  },
  {
    title: "Ethics in AI: Bias in Machine Learning Models",
    excerpt: "Exploring the ethical implications of bias in machine learning models and how to mitigate it.",
    date: "February 10, 2024",
    image: "/placeholder.svg?height=400&width=600",
    slug: "ethics-in-ai-bias",
    tags: ["Ethics", "AI"],
  },
  {
    title: "Introduction to Reinforcement Learning",
    excerpt: "An overview of reinforcement learning concepts and applications in real-world scenarios.",
    date: "January 22, 2024",
    image: "/placeholder.svg?height=400&width=600",
    slug: "introduction-to-reinforcement-learning",
    tags: ["Reinforcement Learning", "AI"],
  },
  {
    title: "Building Neural Networks with PyTorch",
    excerpt: "A comprehensive guide to building and training neural networks using PyTorch.",
    date: "December 15, 2023",
    image: "/placeholder.svg?height=400&width=600",
    slug: "building-neural-networks-pytorch",
    tags: ["PyTorch", "Neural Networks"],
  },
  {
    title: "Data Preprocessing Techniques for Machine Learning",
    excerpt: "Essential techniques for preparing your data before training machine learning models.",
    date: "November 30, 2023",
    image: "/placeholder.svg?height=400&width=600",
    slug: "data-preprocessing-techniques",
    tags: ["Data Science", "Machine Learning"],
  },
]

// All unique tags from blog posts
const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)))

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Sarah.AI</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="/#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="/#testimonials" className="transition-colors hover:text-foreground/80">
                Testimonials
              </Link>
              <Link href="/blog" className="transition-colors hover:text-foreground/80">
                Blog
              </Link>
              <Link href="/#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container px-4 py-12 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Blog</h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Thoughts, tutorials, and insights on AI, ML, and data science.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-3/4">
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search articles..." className="pl-10" />
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <BlogPreview
                  key={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  image={post.image}
                  slug={post.slug}
                  tags={post.tags}
                />
              ))}
            </div>
          </div>

          <div className="md:w-1/4">
            <div className="sticky top-24">
              <h3 className="font-semibold text-lg mb-4">Categories</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {allTags.map((tag) => (
                  <Link href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`} key={tag}>
                    <Button variant="outline" size="sm" className="rounded-full">
                      {tag}
                    </Button>
                  </Link>
                ))}
              </div>

              <h3 className="font-semibold text-lg mb-4">Recent Posts</h3>
              <ul className="space-y-3">
                {blogPosts.slice(0, 3).map((post) => (
                  <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className="text-sm hover:underline">
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Sarah.AI. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
