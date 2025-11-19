import { GraduationCap, Code2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-card hover:bg-card-hover transition-colors duration-300 border-border hover-lift">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-muted-foreground mb-1">Computer Science Engineering</p>
                  <p className="text-sm text-muted-foreground">Guru Nanak Institute of Technology</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card hover:bg-card-hover transition-colors duration-300 border-border hover-lift">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Code2 className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Specialization</h3>
                  <p className="text-muted-foreground mb-1">Full Stack Web Development</p>
                  <p className="text-sm text-muted-foreground">Building modern, scalable applications</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Computer Science Engineering student with a strong focus on web development. 
              I love creating elegant, efficient solutions using modern technologies and best practices. 
              My journey in tech is driven by curiosity and a commitment to continuous learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
