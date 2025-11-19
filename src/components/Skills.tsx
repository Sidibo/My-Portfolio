import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      color: "text-primary",
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express", "Next.js", "Angular"],
      color: "text-accent",
    },
    {
      title: "Database",
      skills: ["MongoDB"],
      color: "text-green-400",
    },
    {
      title: "Programming Languages",
      skills: ["Java", "C", "C++", "Python"],
      color: "text-blue-400",
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Technical <span className="gradient-text">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={category.title}
                className="p-6 bg-card hover:bg-card-hover transition-all duration-300 border-border hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className={`text-xl font-semibold mb-4 ${category.color}`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-4 py-2 text-sm bg-secondary hover:bg-muted transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
