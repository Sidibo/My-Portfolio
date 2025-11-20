import { Code2, Database, Layout, Server, Coffee, Cpu, GitBranch, Terminal } from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: Layout, color: "text-orange-500", delay: 0 },
    { name: "CSS", icon: Layout, color: "text-blue-500", delay: 100 },
    { name: "JavaScript", icon: Code2, color: "text-yellow-500", delay: 200 },
    { name: "React", icon: GitBranch, color: "text-cyan-500", delay: 300 },
    { name: "Node.js", icon: Server, color: "text-green-500", delay: 400 },
    { name: "Express", icon: Server, color: "text-gray-400", delay: 500 },
    { name: "Next.js", icon: Terminal, color: "text-white", delay: 600 },
    { name: "Angular", icon: Code2, color: "text-red-500", delay: 700 },
    { name: "MongoDB", icon: Database, color: "text-green-600", delay: 800 },
    { name: "Java", icon: Coffee, color: "text-orange-600", delay: 900 },
    { name: "C", icon: Cpu, color: "text-blue-600", delay: 1000 },
    { name: "C++", icon: Cpu, color: "text-blue-700", delay: 1100 },
    { name: "Python", icon: Code2, color: "text-yellow-600", delay: 1200 },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Technical <span className="gradient-text">Skills</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {skills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="skill-card group relative bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-500 hover-lift animate-fade-in"
                  style={{ animationDelay: `${skill.delay}ms` }}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="skill-icon-wrapper relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                      <IconComponent 
                        className={`w-12 h-12 ${skill.color} relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="text-sm font-medium text-foreground/90 group-hover:text-foreground transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 rounded-xl transition-all duration-500" />
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Always learning and exploring new technologies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
