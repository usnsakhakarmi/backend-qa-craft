import { Code, Database, Cloud, Wrench, Brain, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const backendSkills = [
    "Node.js", "Python", "Java", "Go", "Express.js", "FastAPI", 
    "Spring Boot", "PostgreSQL", "MongoDB", "Redis", "Docker", "Kubernetes"
  ];

  const qaSkills = [
    "Selenium", "Cypress", "Jest", "Pytest", "Postman", "TestNG",
    "JUnit", "Playwright", "API Testing", "Load Testing", "CI/CD", "Jenkins"
  ];

  const tools = [
    "Git", "AWS", "Azure", "Terraform", "Grafana", "Prometheus",
    "Jira", "SonarQube", "New Relic", "Datadog", "Linux", "Bash"
  ];

  const SkillCategory = ({ title, skills, color }: { title: string; skills: string[]; color: string }) => (
    <div className="card-hover bg-card p-8 rounded-lg border">
      <h3 className="text-2xl font-semibold mb-6 text-center">
        <span className={`text-gradient`}>{title}</span>
      </h3>
      <div className="flex flex-wrap gap-3 justify-center">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-muted rounded-full text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section ref={ref} id="skills" className={`py-24 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Proficient in modern backend technologies and comprehensive testing frameworks
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            <SkillCategory
              title="Backend Development"
              skills={backendSkills}
              color="primary"
            />
            <SkillCategory
              title="QA & Testing"
              skills={qaSkills}
              color="accent"
            />
            <SkillCategory
              title="Tools & DevOps"
              skills={tools}
              color="secondary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;