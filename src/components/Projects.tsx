import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: "ueba-system",
      title: "UEBA (User and Entity Behavior Analytics)",
      description: "Advanced behavioral analytics platform for detecting security threats through machine learning and real-time user activity monitoring.",
      tech: ["Python", "TensorFlow", "Apache Kafka", "Elasticsearch", "MongoDB", "Docker"],
      type: "Security Analytics",
      image: "/api/placeholder/400/250"
    },
    {
      id: "correlation-engine",
      title: "CE (Correlation Engine)",
      description: "High-performance correlation engine for processing and analyzing large-scale security events and incident detection.",
      tech: ["Java", "Apache Storm", "Redis", "PostgreSQL", "RabbitMQ", "Kubernetes"],
      type: "Backend Development",
      image: "/api/placeholder/400/250"
    },
    {
      id: "agentless-monitoring",
      title: "Agentless Monitoring System",
      description: "Network-based monitoring solution that provides comprehensive visibility without requiring agent installation on endpoints.",
      tech: ["Go", "Prometheus", "Grafana", "SNMP", "WMI", "Linux"],
      type: "DevOps & Monitoring",
      image: "/api/placeholder/400/250"
    },
    {
      id: "node-configuration",
      title: "Node Configuration Management",
      description: "Real-time project setup and configuration management system for dynamic node deployment and orchestration.",
      tech: ["Ansible", "Terraform", "Kubernetes", "Helm", "GitLab CI", "Bash"],
      type: "DevOps & Infrastructure",
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
              <div 
                key={index} 
                className="card-hover bg-card rounded-lg border overflow-hidden cursor-pointer transition-transform hover:scale-105"
                onClick={() => navigate(`/project/${project.id}`)}
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-6xl font-mono text-primary/30">
                    {project.type === "Security Analytics" ? "👁️" : 
                     project.type === "Backend Development" ? "{}" :
                     project.type === "DevOps & Monitoring" ? "📊" : 
                     project.type === "DevOps & Infrastructure" ? "⚙️" : "🔧"}
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
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
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