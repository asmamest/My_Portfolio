import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Brain, Globe, MessageCircle } from "lucide-react"

interface Language {
  name: string
  level: string
  proficiency: number
  flag: string
}

interface SoftSkill {
  name: string
  description: string
  icon: React.ReactNode
}

const languages: Language[] = [
  {
    name: "Arabic",
    level: "Native",
    proficiency: 100,
    flag: "🇹🇳",
  },
  {
    name: "English",
    level: "B2",
    proficiency: 55,
    flag: "🇬🇧",
  },
  {
    name: "French",
    level: "B2",
    proficiency: 75,
    flag: "🇫🇷",
  },{
    name: "German",
    level: "A2",
    proficiency: 25,
    flag: "🇩🇪",
  },{
    name: "Turkish",
    level: "A1",
    proficiency: 15,
    flag: "🇹🇷",
  }


]

const softSkills: SoftSkill[] = [
  {
    name: "Communication",
    description:
      "Clear verbal and written skills; experienced in explaining complex tech to various audiences.",
    icon: <MessageCircle className="h-8 w-8 text-purple-500" />,
  },
  {
    name: "Problem Solving",
    description:
      "Analytical and creative thinker with a structured approach to complex issues." ,
    icon: <Brain className="h-8 w-8 text-purple-500" />,
  },
  {
    name: "Adaptability",
    description:
    "Quick to adjust to change and stay effective under pressure.",
    icon: <Globe className="h-8 w-8 text-purple-500" />,
  },
]

export default function LanguagesSkillsSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-muted/20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Languages */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <Globe className="h-6 w-6 text-purple-500" />
              <h2 className="text-2xl font-bold">Langues</h2>
            </div>
            <div className="space-y-6">
              {languages.map((language) => (
                <div key={language.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{language.flag}</span>
                      <span className="font-medium">{language.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{language.level}</span>
                  </div>
                  <Progress value={language.proficiency} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <Brain className="h-6 w-6 text-purple-500" />
              <h2 className="text-2xl font-bold">Soft Skills</h2>
            </div>
            <div className="grid gap-4">
              {softSkills.map((skill) => (
                <Card key={skill.name} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1">{skill.icon}</div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
                        <p className="text-sm text-muted-foreground">{skill.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
