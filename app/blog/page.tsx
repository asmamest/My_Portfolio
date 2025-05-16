import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Link from "next/link"
import BlogPreview from "../components/blog-preview"

// Mock data for blog posts with LinkedIn URLs
const blogPosts = [
  {
    title: "𝐀𝐧𝐨𝐦𝐚𝐥𝐲 𝐃𝐞𝐭𝐞𝐜𝐭𝐢𝐨𝐧 𝐢𝐧 𝐂𝐡𝐞𝐦𝐢𝐜𝐚𝐥 𝐄𝐧𝐠𝐢𝐧𝐞𝐞𝐫𝐢𝐧𝐠 – 𝐏𝐚𝐫𝐭 2",
    excerpt: "In the first article of this series, we explored the growing importance of predictive maintenance in the age of AI, particularly in chemical and industrial processes. ",
    date: "18 février 2025",
    image: "/placeholder.svg?height=400&width=600",
    linkedinUrl: "https://www.linkedin.com/pulse/tennessee-eastman-process-open-source-benchmark-asma-mestaysser-k8u1f/?trackingId=Pc%2Bz7qnM%2BLKO4pt2p4qiGw%3D%3D",
    tags: [
      "Machine Learning",
      "Anomaly Detection",
      "Tennessee Eastman Process",
      "Fault Detection",
      "Chemical Engineering",
      "Data Science",
      "PCA",
      "Autoencoders",
      "LSTM",
      "Isolation Forest",
      "Process Control",
      "Predictive Maintenance",
      "Industrial Automation",
      "Process Optimization"
    ]  },
  {
    title: "Implementilkjkjlkjlng K-means Clustering from Scratch",
    excerpt: "A step-by-step guide to implementing the K-means clustering algorithm in Python.",
    date: "March 28, 2024",
    image: "/placeholder.svg?height=400&width=600",
    linkedinUrl: "https://www.linkedin.com/pulse/implementing-k-means-clustering-from-scratch-python-guide",
    tags: ["Clustering", "Python"],
  },
  {
    title: "Ethics in AI: Bias in Machine Learning Models",
    excerpt: "Exploring the ethical implications of bias in machine learning models and how to mitigate it.",
    date: "February 10, 2024",
    image: "/placeholder.svg?height=400&width=600",
    linkedinUrl: "https://www.linkedin.com/pulse/ethics-ai-bias-machine-learning-models-exploration",
    tags: ["Ethics", "AI"],
  },
  {
    title: "Introduction to Reinforcement Learning",
    excerpt: "An overview of reinforcement learning concepts and applications in real-world scenarios.",
    date: "January 22, 2024",
    image: "/placeholder.svg?height=400&width=600",
    linkedinUrl: "https://www.linkedin.com/pulse/introduction-reinforcement-learning-overview-concepts",
    tags: ["Reinforcement Learning", "AI"],
  },
  {
    title: "Building Neural Networks with PyTorch",
    excerpt: "A comprehensive guide to building and training neural networks using PyTorch.",
    date: "December 15, 2023",
    image: "/placeholder.svg?height=400&width=600",
    linkedinUrl: "https://www.linkedin.com/pulse/building-neural-networks-pytorch-comprehensive-guide",
    tags: ["PyTorch", "Neural Networks"],
  },
  {
    title: "Data Preprocessing Techniques for Machine Learning",
    excerpt: "Essential techniques for preparing your data before training machine learning models.",
    date: "November 30, 2023",
    image: "/placeholder.svg?height=400&width=600",
    linkedinUrl: "https://www.linkedin.com/pulse/data-preprocessing-techniques-machine-learning-essential",
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
            <p className="text-sm text-muted-foreground">Click on any article to read the full post on LinkedIn</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="md:w-3/4">
              <div className="relative mb-8">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search articles..." className="pl-10" />
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((post, index) => (
                    <BlogPreview
                        key={index}
                        title={post.title}
                        excerpt={post.excerpt}
                        date={post.date}
                        image={post.image}
                        linkedinUrl={post.linkedinUrl}
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
                      <Button key={tag} variant="outline" size="sm" className="rounded-full">
                        {tag}
                      </Button>
                  ))}
                </div>

                <h3 className="font-semibold text-lg mb-4">Follow Me</h3>
                <div className="space-y-3">
                  <Link
                      href="https://www.linkedin.com/in/your-linkedin-profile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-purple-600 transition-colors"
                  >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-linkedin"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    LinkedIn Profile
                  </Link>
                  <Link
                      href="https://medium.com/@your-medium-profile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-purple-600 transition-colors"
                  >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-book-open"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    Medium Articles
                  </Link>
                </div>
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
