import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, Trophy, Users } from "lucide-react"
import type React from "react"

interface VisionGoal {
  id: string
  title: string
  description: string
  icon: React.ReactNode
}

const visionGoals: VisionGoal[] = [
  {
    id: "project-owner",
    title: "Project Owner",
    description:
      "Founding my own AI solutions company focused on enterprise applications, with a team of 20+ professionals and international clients.",
    icon: <Building2 className="h-6 w-6" />,
  },
  {
    id: "leader",
    title: "Recognized Leader",
    description:
      "Becoming a reference in the AI field across North Africa, with regular speaking engagements at international conferences.",
    icon: <Trophy className="h-6 w-6" />,
  },
  {
    id: "mentor",
    title: "Mentor",
    description: "Creating a mentorship program to help young in my region know about tech and AI.",
    icon: <Users className="h-6 w-6" />,
  },
]

export default function FutureVision() {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">My Vision</h3>
          <p className="text-muted-foreground">
            I see myself as a future leader in the field of artificial intelligence, creating innovative solutions that
            positively impact society. My goal is to build a thriving business while inspiring the next generation of
            women in tech.
          </p>
          <p className="text-muted-foreground">
            By combining my technical skills with an entrepreneurial vision, I aim to create technologies that solve
            concrete problems in areas such as healthcare, education, and sustainable development, particularly in North
            Africa and the Middle East.
          </p>
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
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
