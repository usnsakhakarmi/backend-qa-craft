import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce API Platform",
      description: "Scalable REST API supporting 10K+ concurrent users with microservices architecture, Redis caching, and comprehensive test coverage.",
      tech: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker", "Jest"],
      type: "Backend Development",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Automated Testing Framework",
      description: "Custom testing framework with parallel execution, cross-browser support, and detailed reporting for web applications.",
      tech: ["Selenium", "Python", "Pytest", "Docker", "CI/CD", "Allure"],
      type: "QA Automation",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Cloud Infrastructure Monitoring",
      description: "Monitoring solution with real-time metrics, alerting, and automated scaling for cloud-native applications.",
      tech: ["Go", "Prometheus", "Grafana", "Kubernetes", "AWS", "Terraform"],
      type: "DevOps & Backend",
      image: "/api/placeholder/400/250"
    },
    {
      title: "API Testing Suite",
      description: "Comprehensive API testing solution with automated contract testing, performance testing, and security validation.",
      tech: ["Postman", "Newman", "JMeter", "Python", "FastAPI", "MongoDB"],
      type: "QA & Testing",
      image: "/api/placeholder/400/250"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Showcasing backend systems and testing frameworks that solve real-world problems
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="card-hover bg-card rounded-lg border overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-6xl font-mono text-primary/30">
                    {project.type === "Backend Development" ? "{}" : 
                     project.type === "QA Automation" ? "⚡" :
                     project.type === "DevOps & Backend" ? "☁️" : "🔧"}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {project.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;