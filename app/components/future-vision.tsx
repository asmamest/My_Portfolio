import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, Users, Code, BookOpen } from "lucide-react"
import type React from "react"

interface VisionGoal {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  timeframe: string
}

const visionGoals: VisionGoal[] = [
  {
    id: "ai-specialist",
    title: "Machine Learning Engineer\n",
    description:
        "Becoming a proficient Machine Learning Engineer with strong expertise in supervised and unsupervised learning, deep learning, and model deployment. The goal is to build and optimize scalable ML pipelines, contribute to impactful real-world projects, collaborate on open-source tools, and publish practical research or case studies.",
    icon: <Code className="h-6 w-6" />,
    timeframe: "1-2 years",
  },
  {
    id: "tech-entrepreneur",
    title: "Tech Entrepreneur",
    description:
        "Growing Entretieni into a successful startup serving universities and career centers in Tunisia, helping students prepare for job interviews.",
    icon: <Building2 className="h-6 w-6" />,
    timeframe: "2-5 years",
  },
  {
    id: "mentor",
    title: "Volunteering",
    description:
        "Volunteering as a Python instructor in my home village, helping high school graduates and students learn Python programming either online during my studies or through in-person sessions during vacations.\n" +
        "\n" +
        "This initiative aims to bridge the digital divide and provide opportunities for young people in rural areas to develop valuable programming skills that can open doors to higher education and employment.",
    icon: <Users className="h-6 w-6" />,
    timeframe: "∞",
  },
]

export default function FutureVision() {
  return (
      <div className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">My Vision</h3>
            <p className="text-muted-foreground">
              I aim to leverage my technical expertise to create practical AI solutions that address real-world challenges
              in education and professional development. My focus is on building sustainable technologies that are
              accessible to diverse communities.
            </p>

            <div className="mt-6 space-y-4">
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <h4 className="text-xl font-semibold flex items-center gap-2">
                  <Code className="h-5 w-5 text-purple-600" /> Current Project: Entretieni
                </h4>
                <p className="text-muted-foreground mt-2">
                  An intelligent, interactive web application powered by artificial intelligence that revolutionizes job
                  interview preparation. It offers candidates an immersive and personalized experience by simulating HR
                  interviews, technical assessments (MCQs), and problem-solving scenarios in near-real conditions.
                </p>
                <p className="text-muted-foreground mt-2">
                  Through automated CV analysis, instant feedback (on emotion, clarity, relevance), and a modern,
                  intuitive interface, Entretieni transforms preparation into an engaging, professional, and measurable
                  journey.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {["AI", "NLP", "React","Nextjs","HuggingFace" ,"Python", "Flask", "Postgresql"].map((tech) => (
                      <span
                          key={tech}
                          className="inline-flex items-center rounded-md bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 dark:bg-purple-400/10 dark:text-purple-400 dark:ring-purple-400/20"
                      >
                    {tech}
                  </span>
                  ))}
                </div>
              </div>

            </div>

            <p className="text-muted-foreground mt-2">
              As a supporter of the Palestinian cause, I'm committed to using technology as a tool for social justice and
              to amplify marginalized voices. I believe that innovation should be guided by ethical principles and a
              commitment to human rights.
            </p>
          </div>

          <div>
            <Tabs defaultValue={visionGoals[0].id}>
              <TabsList className="grid grid-cols-3">
                {visionGoals.map((goal) => (
                    <TabsTrigger key={goal.id} value={goal.id} className="flex flex-col items-center gap-1 py-3">
                      {goal.icon}
                      <span className="text-xs">{goal.title}</span>
                    </TabsTrigger>
                ))}
              </TabsList>

              {visionGoals.map((goal) => (
                  <TabsContent key={goal.id} value={goal.id}>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="mb-4">
                          <h3 className="text-2xl font-bold">{goal.title}</h3>
                          <p className="text-sm text-purple-600 dark:text-purple-400">Timeframe: {goal.timeframe}</p>
                        </div>
                        <p className="text-muted-foreground">{goal.description}</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {visionGoals.map((goal) => (
              <Card key={goal.id} className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                      {goal.icon}
                    </div>
                    <h4 className="font-semibold">{goal.title}</h4>
                    <p className="text-xs text-muted-foreground">{goal.timeframe}</p>
                  </div>
                </CardContent>
              </Card>
          ))}
        </div>
      </div>
  )
}
