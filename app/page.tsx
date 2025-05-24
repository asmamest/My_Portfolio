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
              <span className="hidden font-bold sm:inline-block">A.</span>
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
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mt-4">
                  Passionate about artificial intelligence and machine learning. I develop innovative solutions to solve
                  real-world problems and shape the future of technology.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="https://github.com/asmamest" target="_blank">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://linkedin.com/in/mestaysserasma" target="_blank">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://instagram.com/asma_mestaysser" target="_blank">
                  <Button variant="outline" size="icon">
                    <Instagram className="h-4 w-4" />
                    <span className="sr-only">Instagram</span>
                  </Button>
                </Link>
                <Link href="mestaysserasma@gmail.com">
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
                  title="Automated Exam Status Management Platform — ENICarthage Collaboration"
                  description={
                    `Developed in collaboration with the Academic Affairs Directorate at ENICarthage, this web platform automates and streamlines the tracking of exam statuses within an academic environment.
- Replaces a slow, manual, and non-transparent process with a centralized solution.
- Offers real-time dashboards and automated notifications.
- Features an intuitive interface enhancing communication between teachers and administration.`
                  }

                  image="/enicarthage_exam_management_advanced.png?height=400&width=600"
                  link="#"
                  tags={[
                    "Spring Boot",
                    "Angular",
                    "Docker",
                    "Docker-Compose",
                    "CI/CD Pipeline",
                    "Jenkins",
                    "JWT",
                    "Spring Security",
                    "Role-Based Access Control",
                    "CORS",
                    "MySQL",
                    "Web Application",
                    "Automated Workflow",
                    "DevOps",
                    "Team Project"
                  ]}
              />
              <ProjectCard
                  title="BookMyShow — Mobile Ticket Booking App"
                  description={`BookMyShow is a user-friendly mobile app designed to help users discover shows effortlessly through smart search, photos, and geolocation.\n
Users can quickly and securely book tickets and manage their reservations based on their profiles.\n
Registered users gain access to exclusive promotions.\n
The app prioritizes the protection of personal data and ensures secure transactions for a trustworthy experience.`}
                  image="/bookmyshow_app_screenshot.png?height=400&width=600"
                  link="#"
                  tags={[
                    "Java",
                    "Android Studio",
                    "Spring Boot",
                    "MySQL",
                    "REST API",
                    "Mobile App",
                    "Secure Transactions",
                    "User Experience",
                    "Agile",
                    "3-Tier Architecture"
                  ]}
              />


              <ProjectCard
                title="ML Cell Cluster Classifier"
                description="A machine learning web app built with Streamlit to predict if a cell cluster is benign or malignant."
                image="/Breast_Cancer_Predictor.png?height=400&width=600"
                link="https://github.com/asmamest/Breast_Cancer_Predictor.git"
                tags={["Streamlit", "Python", "Machine Learning"]}
              />
              <ProjectCard
                  title=" Heart Disease Prediction – Data Analysis Project"
                  description="A complete data analysis was performed on a heart disease dataset to extract insights and predict risk factors. The workflow included data cleaning, exploratory data analysis (EDA), and dimensionality reduction using PCA. Clustering techniques such as KMeans and Agglomerative Hierarchical Clustering (AHC) were applied to segment patient profiles."
                  image="/heart.jpg?height=400&width=600"
                  link="https://github.com/asmamest/Predicting-Heart-Disease.git"
                  tags={["Data Science", "Heart Disease Prediction", "EDA", "PCA", "KMeans", "Hierarchical Clustering", "Machine Learning", "Python", "Healthcare AI"]}
              />
              <ProjectCard
                title="AI/ML Football Analysis system"
                description="Football analysis using YOLO, OpenCV, and Python. Detects and tracks players, refs, and the ball. Uses KMeans for team assignment, optical flow for camera motion, and perspective transform to measure player speed and distance."
                image="/aiml_football.png?height=400&width=600"
                link="https://github.com/asmamest/AI-ML-Football-Analysis-system.git"
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


        <section id="blog" className="py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Blog</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Thoughts, tutorials, and insights on AI, ML, and data science.
              </p>
              <p className="text-sm text-muted-foreground">Click on any article to read the full post on LinkedIn</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <BlogPreview
                  title="Anomaly Detection in Chemical Engineering - Part 2"
                  excerpt="In the first article of this series, we explored the growing importance of predictive maintenance in the age of AI, particularly in chemical and industrial processes. "
                  date="February 18, 2025"
                  image="/1739459208960.png?height=400&width=600"
                  linkedinUrl="https://www.linkedin.com/pulse/tennessee-eastman-process-open-source-benchmark-asma-mestaysser-k8u1f/?trackingId=Pc%2Bz7qnM%2BLKO4pt2p4qiGw%3D%3D"
                  tags={["Machine Learning",
                    "Anomaly Detection",
                    "Fault Detection",
                    "PCA",
                    "Autoencoders",
                    "LSTM",
                    "Isolation Forest"]}
              />
              <BlogPreview
                  title="What if AI could predict chemical process failures before they happen?"
                  excerpt="During my summer internship at OMV, I had the chance to explore the fascinating world of chemical processes on-site. But one question kept me thinking: How can we optimize and maintain these processes while integrating cutting-edge AI technologies?"
                  date="February 13, 2025"
                  image="/1739459208960.png?height=400&width=600"
                  linkedinUrl="https://www.linkedin.com/pulse/introduction-anomaly-detection-chemical-engineering-asma-mestaysser-rcxlf/?trackingId=SZ1LX8Olp3FVx0uBnVHabQ%3D%3D"
                  tags={["Anomaly Detection",
                    "Tennessee Eastman Process",
                    "Data Science",
                    "Machine Learning",
                    "Fault Detection",
                    "Statistical Methods",
                    "Oil and Gas"]}
              />
              <BlogPreview
                  title="Can Machines Think and Act in Non-Human Ways? "
                  excerpt="In the world of AI and automation, we often ask: Can machines interact with the world in ways that are truly non-human? Can they think and decide in ways that break free from our human limitations?"
                  date="October 28, 2024"
                  image="/1724392363177.jpg?height=400&width=600"
                  linkedinUrl="https://www.linkedin.com/posts/mestaysserasma_ai-innovation-autonomoussystems-activity-7232625793879670784-r2e5?utm_source=share&utm_medium=member_desktop&rcm=ACoAADVQeJYB2bpv4KZlrIypUAJclYmuYNYEI2Y"
                  tags={[ "AI",
                    "Machine Thinking",
                    "Non-Human AI",
                    "AlphaGo"]}
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
            <FutureVision/>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Testimonials
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <TestimonialCard
                  quote="It was nice meeting you , good luck in your future endeavors!"
                  author="
Manai Mohamed Mortadha"
                  role="AI Engineer |AI Expert |XAI Engineer @Netflix"
                  image="/1730842613045.jpg?height=100&width=100"
              />
              <TestimonialCard
                  quote="Congratulations! You did an excellent job with the internship, and we are confident that as you continue on your path to success."
                  author="Houssem Haouali"
                  role="Expert System Engineer - OMV Tunisia"
                  image="/1726136390212.jpg?height=100&width=100"
              />
              <TestimonialCard
                  quote="Dear Asma, it was nice meeting you and kudos on winning the quiz. This gives me the comfort and optimism that our Tunisian future leaders and colleagues are engaged! Please drop by whenever you are in Tunis."
                  author="Thomas Gieles"
                  role="General Manager - OMV Tunisia"
                  image="/1527345665519.jpg?height=100&width=100"
              />
              <TestimonialCard
                  quote="It is my pleasure to recommend Ms Asma Moustaysser for computer engineering. I came to know Asma when she was a trainer in OMV Waha field. During internship, Asma distinguished herself by submitting an exceptionally well researched and interesting project on optimization of control systems with Flowboss FB 1200 and Prosoft PLX31-EIP-MBS4. Overall, Asma is highly intelligent and has good analytical skills. Her project demonstrated her ability to come a detailed understanding of computer engineering. "
                  author="Mabrouki Abdelbasset"
                  role="Mechanical Construction Superintendent"
                  image="/1516943159098.jpg?height=100&width=100"
              />
            </div>
          </div>
        </section>

        {/*
<section id="contact" className="py-12 md:py-24 lg:py-32">
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        Let's Collaborate
      </h2>
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
*/}


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
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 Asma Mestaysser. All rights reserved.</p>
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
