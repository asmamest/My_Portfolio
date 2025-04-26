import { Button } from "@/components/ui/button"
import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import AcademicExperienceSection from "./components/academic-experience-section"
import AwardsSection from "./components/awards-section"
import BlogPreview from "./components/blog-preview"
import ContactForm from "./components/contact-form"
import LanguagesSkillsSection from "./components/languages-skills-section"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import TestimonialCard from "./components/testimonial-card"
import ChatbotButton from "./components/chatbot-button"
import CodeBreakerGame from "./components/code-breaker-game"
import FutureVision from "./components/future-vision"
import { ThemeToggle } from "@/components/theme-toggle"
import PersonalGallery from "./components/personal-gallery"
import RecommendationsNetwork from "./components/recommendations-network"
import FeedbackForm from "./components/feedback-form"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Asma.AI</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#academic-experience" className="transition-colors hover:text-foreground/80">
                Experience
              </Link>
              <Link href="#personal-life" className="transition-colors hover:text-foreground/80">
                Personal Life
              </Link>
              <Link href="#vision" className="transition-colors hover:text-foreground/80">
                Vision
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
            <Button variant="outline">Resume</Button>
          </div>
        </div>
      </header>

      <main className="container px-4 md:px-6">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Asma Mestaysser
                </h1>
                <p className="text-xl text-purple-600 dark:text-purple-400 font-medium">
                  Computer Engineering Student | AI/ML Specialization
                </p>
                <div className="flex items-center justify-center mt-2">
                  <span className="inline-flex items-center rounded-md bg-green-50 px-3 py-1 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20 dark:bg-green-900/30 dark:text-green-400 dark:ring-green-500/20">
                    <span className="mr-1">🇵🇸</span> Supporting Palestine
                  </span>
                </div>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mt-4">
                  Passionate about artificial intelligence and machine learning. I develop innovative solutions to solve
                  real-world problems and shape the future of technology.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="https://github.com" target="_blank">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://linkedin.com" target="_blank">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://twitter.com" target="_blank">
                  <Button variant="outline" size="icon">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </Link>
                <Link href="https://instagram.com" target="_blank">
                  <Button variant="outline" size="icon">
                    <Instagram className="h-4 w-4" />
                    <span className="sr-only">Instagram</span>
                  </Button>
                </Link>
                <Link href="mailto:asma@example.com">
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="languages-skills">
          <LanguagesSkillsSection />
        </section>

        <section id="academic-experience" className="py-12 md:py-24 lg:py-32">
          <AcademicExperienceSection />
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="ML Cell Cluster Classifier"
                description="A machine learning web app built with Streamlit to predict if a cell cluster is benign or malignant."
                image="/Breast_Cancer_Predictor.png?height=400&width=600"
                link="https://github.com/asmamest/Breast_Cancer_Predictor.git"
                tags={["Streamlit", "Python", "Machine Learning"]}
              />
              <ProjectCard
                title="AI/ML Football Analysis system"
                description="Football analysis using YOLO, OpenCV, and Python. Detects and tracks players, refs, and the ball. Uses KMeans for team assignment, optical flow for camera motion, and perspective transform to measure player speed and distance."
                image="/aiml_football.png?height=400&width=600"
                link="#"
                tags={["YOLO", "OpenCV", "Computer Vision", "Deep Learning", "Python"]}
              />
              <ProjectCard
                title="Sentiment Analysis & Emotion Recognition"
                description="Built with Hugging Face for question generation and scoring, and DeepFace for real-time facial emotion recognition."
                image="/Emotions.png?height=400&width=600"
                link="#"
                tags={["NLP", "Hugging Face", "DeepFace", "Emotion Recognition"]}
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </section>

        <section id="awards">
          <AwardsSection />
        </section>

        <section id="personal-life" className="py-12 md:py-24 lg:py-32 bg-muted/10">
          <div className="container px-4 md:px-6">
            <PersonalGallery />
          </div>
        </section>

        <section id="recommendations" className="py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <RecommendationsNetwork />
          </div>
        </section>

        <section id="blog" className="py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Blog</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Thoughts, tutorials, and insights on AI, ML, and data science.
              </p>
              <Link href="/blog">
                <Button variant="outline">View All Posts</Button>
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <BlogPreview
                title="Understanding Transformer Architecture"
                excerpt="A deep dive into the architecture that powers modern language models like GPT and BERT."
                date="April 15, 2024"
                image="/placeholder.svg?height=400&width=600"
                slug="understanding-transformer-architecture"
                tags={["NLP", "Deep Learning"]}
              />
              <BlogPreview
                title="Implementing K-means Clustering from Scratch"
                excerpt="A step-by-step guide to implementing the K-means clustering algorithm in Python."
                date="March 28, 2024"
                image="/placeholder.svg?height=400&width=600"
                slug="implementing-kmeans-clustering"
                tags={["Clustering", "Python"]}
              />
              <BlogPreview
                title="Ethics in AI: Bias in Machine Learning Models"
                excerpt="Exploring the ethical implications of bias in machine learning models and how to mitigate it."
                date="February 10, 2024"
                image="/placeholder.svg?height=400&width=600"
                slug="ethics-in-ai-bias"
                tags={["Ethics", "AI"]}
              />
            </div>
          </div>
        </section>

        <section id="vision" className="py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Future Vision</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Where I see myself in the next 5 to 10 years, my professional goals and aspirations.
              </p>
            </div>
            <FutureVision />
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Testimonials
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <TestimonialCard
                quote="Asma's machine learning expertise helped us reduce prediction errors by 35%. Her ability to explain complex concepts in simple terms is remarkable."
                author="Dr. Emily Chen"
                role="AI Research Lead, TechInnovate"
                image="/placeholder.svg?height=100&width=100"
              />
              <TestimonialCard
                quote="Working with Asma on our NLP project was a game-changer. Her deep understanding of transformer models and attention mechanisms elevated our entire approach."
                author="Prof. Michael Johnson"
                role="Computer Science Department, MIT"
                image="/placeholder.svg?height=100&width=100"
              />
              <TestimonialCard
                quote="Asma's contribution to our computer vision project was exceptional. She not only delivered high-quality code but also provided valuable insights that improved our model's performance."
                author="Alex Rodriguez"
                role="Senior Data Scientist, AI Solutions Inc."
                image="/placeholder.svg?height=100&width=100"
              />
            </div>
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Let's Collaborate</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Interested in working together or have questions? Get in touch with me.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <ContactForm />
              <FeedbackForm />
            </div>
          </div>
        </section>

        <section id="code-breaker" className="py-12 md:py-24 lg:py-32 bg-muted/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Code Breaker</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Test your programming skills by finding and fixing bugs in these code snippets.
              </p>
            </div>
            <CodeBreakerGame />
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Asma Mestaysser. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="/admin">
              Admin
            </Link>
          </nav>
        </div>
      </footer>

      <ChatbotButton />
    </div>
  )
}
