import { Card } from "@/components/ui/card"

const technologies = [
  {
    category: "Programming Languages",
    skills: ["Python", "C", "C++", "Java", "JavaScript"]
  },
  {
    category: "Machine Learning",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "Data Preprocessing"]
  },
  {
    category: "Natural Language Processing",
    skills: ["Hugging Face Transformers", "NLTK"]
  },
  {
    category: "Computer Vision",
    skills: ["YOLOv8", "OpenCV", "DeepFace"]
  },
  {
    category: "Database Management",
    skills: ["Oracle", "MySQL", "MongoDB"]
  },
  {
    category: "Version Control",
    skills: ["Git", "GitHub"]
  },
  {
    category: "Web Development",
    skills: ["HTML", "CSS", "React", "Angular"]
  },
]

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {technologies.map((tech) => (
          <Card key={tech.category} className="p-4 max-w-md">
            <h3 className="text-base font-semibold mb-3">{tech.category}</h3>
            <div className="flex flex-wrap gap-2">
              {tech.skills.map((skill) => (
                  <span
                      key={skill}
                      className="inline-flex items-center rounded-md bg-purple-50 px-1.5 py-0.5 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 dark:bg-purple-400/10 dark:text-purple-400 dark:ring-purple-400/20"
                  >
        {skill}
                   </span>
              ))}
            </div>
          </Card>

      ))}
    </div>
  )
}
