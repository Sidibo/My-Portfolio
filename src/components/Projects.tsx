import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: "A full-stack web application built with React, Node.js, and MongoDB. Features include user authentication, real-time updates, and responsive design.",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Project Two",
      description: "Modern e-commerce platform with Next.js and Express. Includes payment integration, cart management, and admin dashboard.",
      tags: ["Next.js", "Express", "MongoDB"],
    },
    {
      title: "Project Three",
      description: "Interactive data visualization dashboard using React and Python. Features real-time analytics and customizable charts.",
      tags: ["React", "Python", "JavaScript"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="p-6 bg-card hover:bg-card-hover transition-all duration-300 border-border hover-lift flex flex-col animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary/50 hover:bg-primary/10"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              More projects coming soon! Check back for updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
