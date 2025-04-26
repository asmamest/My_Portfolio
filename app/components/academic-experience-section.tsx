import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Briefcase, Calendar } from 'lucide-react'

interface Education {
  id: string
  degree: string
  institution: string
  location: string
  period: string
  description: string
  achievements?: string[]
}

interface Experience {
  id: string
  position: string
  company: string
  location: string
  period: string
  description: string
  responsibilities: string[]
  technologies?: string[]
}

const educationData: Education[] = [
  {
    id: "edu-1",
    degree: "Computer Engineering – AI/ML Specialization",
    institution: "National School of Engineers of Carthage (ENICarthage)",
    location: "Charguia 2, Ariana, Tunisia",
    period: "2021 – Present",
    description: "Computer Engineering degree",
    achievements: [
      "Awarded \"Best Poster\" for summer internship presentation (2024)" ,
      "Member of the ENICarthage Career Forum Program Committee (2024 & 2025)"
    ],
  },
  {
    id: "edu-2",
    degree: "Preparatory Classes – Physics & Chemistry Track",
    institution: "Preparatory Institute for Engineering Studies of Bizerte (IPEIB)",
    location: "Zarzouna, Bizerte ,Tunisia",
    period: "2019 - 2021",
    description: "Intensive training for national engineering school entrance exams.",
    achievements: ["Ranked in the top 23% of students in the national engineering entrance exam."],
  },
]

const experienceData: Experience[] = [
  {
    id: "exp-1",
    position: "Machine Learning Intern",
    company: "CodeAlpha",
    location: "Online",
    period: "April 2024",
    description: "One-month internship at an innovative startup specializing in AI-driven speech and emotion analysis solutions.",
    responsibilities: [
      "Developed a speech emotion recognition model using deep learning and speech signal processing techniques.",
      "Prepared, cleaned, and augmented speech datasets to enhance model robustness and accuracy.",
      "Designed and implemented a complete training, evaluation, and optimization pipeline for CNN and RNN-based models to classify emotions such as happiness, anger, and sadness.",
      "Actively participated in sprint reviews, brainstorming sessions, and technical presentations to the team."
    ],
    technologies: ["Python", "Librosa", "TensorFlow", "Keras", "Scikit-learn", "NumPy", "Pandas"],
  },
  {
    id: "exp-2",
    position: "Intern in Maintenance and Automation",
    company: "OMV",
    location: "OMV, Waha CPF, Tunisia",
    period: "July-August 2024",
    description: "One-month internship at OMV, a leading oil and gas exploration company, focusing on maintenance and automation in field production systems.",
    responsibilities: [
      "Configured and programmed the FloBoss FB 1200 for real-time data monitoring using Modbus TCP/IP and RS-485 communication protocols.",
      "Developed a dynamic React-based dashboard to visualize key performance indicators (temperature, pressure, flow rates) in real time.",
      "Integrated Modbus RTU and TCP/IP protocols to ensure seamless communication between field devices and the monitoring system.",
      "Collaborated closely with the maintenance team to troubleshoot, optimize, and document system configurations."
    ],
    technologies: ["Python", "JavaScript", "React", "Modbus TCP/IP", "RS-485", "Modbus RTU"],
  },
]

export default function AcademicExperienceSection() {
  return (
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
            Academic & Professional Background
          </h2>

          <Tabs defaultValue="experience" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="experience" className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  Professional Experience
                </TabsTrigger>
                <TabsTrigger value="education" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Academic Education
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="experience" className="space-y-8">
              {experienceData.map((experience) => (
                  <Card key={experience.id} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start gap-4">
                        <div className="md:w-1/3">
                          <h3 className="text-xl font-semibold">{experience.position}</h3>
                          <p className="text-purple-600 dark:text-purple-400 font-medium">{experience.company}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                            <Calendar className="h-4 w-4" />
                            <span>{experience.period}</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{experience.location}</p>

                          {experience.technologies && (
                              <div className="mt-4">
                                <p className="text-sm font-medium mb-2">Technologies:</p>
                                <div className="flex flex-wrap gap-2">
                                  {experience.technologies.map((tech) => (
                                      <Badge key={tech} variant="outline" className="bg-purple-50 dark:bg-purple-900/20">
                                        {tech}
                                      </Badge>
                                  ))}
                                </div>
                              </div>
                          )}
                        </div>

                        <div className="md:w-2/3">
                          <p className="text-muted-foreground mb-4">{experience.description}</p>
                          <p className="text-sm font-medium mb-2">Responsabilités principales:</p>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            {experience.responsibilities.map((responsibility, index) => (
                                <li key={index}>{responsibility}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
              ))}
            </TabsContent>

            <TabsContent value="education" className="space-y-8">
              {educationData.map((education) => (
                  <Card key={education.id} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start gap-4">
                        <div className="md:w-1/3">
                          <h3 className="text-xl font-semibold">{education.degree}</h3>
                          <p className="text-purple-600 dark:text-purple-400 font-medium">{education.institution}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                            <Calendar className="h-4 w-4" />
                            <span>{education.period}</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{education.location}</p>
                        </div>

                        <div className="md:w-2/3">
                          <p className="text-muted-foreground mb-4">{education.description}</p>
                          {education.achievements && (
                              <>
                                <p className="text-sm font-medium mb-2">Achievements:</p>
                                <ul className="list-disc pl-5 space-y-1 text-sm">
                                  {education.achievements.map((achievement, index) => (
                                      <li key={index}>{achievement}</li>
                                  ))}
                                </ul>
                              </>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>
  )
}