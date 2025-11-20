import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "EcoClean Hub",
      description: "A smart waste management platform that uses AI to detect bin fill-levels and auto-schedule pickups. Completed collections are stored on Ethereum for full transparency. Includes citizen request portal, officer dashboard, and live tracking map.",
      tags: ["AI", "Ethereum", "Smart Management"],
      githubUrl: "https://github.com/Sidibo/Eco_Clean_Hub.git",
    },
    {
      title: "WeatherWise",
      description: "Fast, reliable local forecasts with current conditions, hourly and 7-day outlooks, interactive radar, and intelligent alerts. Clean UI, low data usage, and quick access to the info you need to plan your day — rain or shine.",
      tags: ["React", "Weather API", "JavaScript"],
      githubUrl: "https://github.com/Sidibo/Weather-Checking-Website",
    },
    {
      title: "Project In Progress",
      description: "Exciting new project currently under development. Stay tuned for updates!",
      tags: ["Coming Soon"],
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
                  {project.githubUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-primary/50 hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90"
                    disabled={!project.githubUrl}
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
