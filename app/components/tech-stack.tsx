import { Card } from "@/components/ui/card"

const technologies = [
  {
    category: "Machine Learning",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "NLTK", "OpenCV"],
  },
  {
    category: "Data Science",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter", "R"],
  },
  {
    category: "Frontend",
    skills: ["Angular", "TypeScript", "HTML/CSS", "RxJS", "D3.js", "Material UI"],
  },
  {
    category: "Backend",
    skills: ["Spring Boot", "Java", "Python", "RESTful APIs", "PostgreSQL", "MongoDB"],
  },
]

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card key={tech.category} className="p-6">
          <h3 className="text-lg font-semibold mb-4">{tech.category}</h3>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-sm font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 dark:bg-purple-400/10 dark:text-purple-400 dark:ring-purple-400/20"
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
