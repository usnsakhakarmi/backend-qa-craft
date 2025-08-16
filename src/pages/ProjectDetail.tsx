import { useParams, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ProjectDetail = () => {
  const { id } = useParams();

  const projects = [
    {
      id: 'ueba-system',
      title: "UEBA (User and Entity Behavior Analytics)",
      description: "Advanced behavioral analytics platform for detecting security threats through machine learning and real-time user activity monitoring.",
      fullDescription: "A sophisticated User and Entity Behavior Analytics (UEBA) system that leverages machine learning algorithms to establish baseline behaviors for users and entities within an organization. The system continuously monitors activities and identifies deviations that may indicate security threats, insider attacks, or compromised accounts. Built with Python and TensorFlow, it processes large volumes of log data in real-time using Apache Kafka for data streaming and Elasticsearch for fast search and analytics.",
      tech: ["Python", "TensorFlow", "Apache Kafka", "Elasticsearch", "MongoDB", "Docker"],
      type: "Security Analytics",
      challenges: [
        "Building accurate behavioral baselines for diverse user types",
        "Processing massive volumes of log data in real-time",
        "Reducing false positives in anomaly detection",
        "Implementing scalable machine learning pipelines"
      ],
      features: [
        "Machine learning-based behavior modeling",
        "Real-time anomaly detection",
        "Risk scoring and prioritization",
        "Interactive security dashboards",
        "Automated threat alerting",
        "Historical behavior analysis"
      ]
    },
    {
      id: 'correlation-engine',
      title: "CE (Correlation Engine)",
      description: "High-performance correlation engine for processing and analyzing large-scale security events and incident detection.",
      fullDescription: "A powerful Correlation Engine designed to process and correlate security events from multiple sources in real-time. The system uses complex event processing techniques to identify patterns and relationships between seemingly unrelated security incidents. Built with Java and Apache Storm for high-throughput stream processing, it integrates with various security tools and SIEM systems to provide comprehensive threat intelligence and automated incident response capabilities.",
      tech: ["Java", "Apache Storm", "Redis", "PostgreSQL", "RabbitMQ", "Kubernetes"],
      type: "Backend Development",
      challenges: [
        "Handling high-velocity event streams",
        "Implementing complex correlation rules",
        "Maintaining low-latency processing",
        "Scaling across distributed environments"
      ],
      features: [
        "Real-time event correlation",
        "Complex pattern matching",
        "Multi-source data integration",
        "Automated incident creation",
        "Rule-based correlation logic",
        "Performance monitoring and metrics"
      ]
    },
    {
      id: 'agentless-monitoring',
      title: "Agentless Monitoring System",
      description: "Network-based monitoring solution that provides comprehensive visibility without requiring agent installation on endpoints.",
      fullDescription: "An innovative agentless monitoring system that provides comprehensive infrastructure monitoring without the overhead of installing agents on target systems. The solution uses network-based discovery, SNMP polling, WMI queries, and API integrations to collect metrics and monitor system health. Built with Go for high performance and low resource consumption, it integrates with Prometheus for metrics collection and Grafana for visualization, providing complete observability across hybrid environments.",
      tech: ["Go", "Prometheus", "Grafana", "SNMP", "WMI", "Linux"],
      type: "DevOps & Monitoring",
      challenges: [
        "Achieving comprehensive monitoring without agents",
        "Handling diverse system types and protocols",
        "Maintaining security without local access",
        "Scaling monitoring across large networks"
      ],
      features: [
        "Network-based system discovery",
        "Multi-protocol data collection",
        "Real-time performance monitoring",
        "Automated alerting and notifications",
        "Custom dashboard creation",
        "Historical data analysis"
      ]
    },
    {
      id: 'node-configuration',
      title: "Node Configuration Management",
      description: "Real-time project setup and configuration management system for dynamic node deployment and orchestration.",
      fullDescription: "A comprehensive node configuration management system designed for real-time project setup and deployment orchestration. The system automates the entire lifecycle of node provisioning, configuration, and management across multiple environments. Built with Ansible for configuration management and Terraform for infrastructure provisioning, it supports dynamic scaling and self-healing capabilities. The solution integrates with Kubernetes for container orchestration and GitLab CI for continuous deployment workflows.",
      tech: ["Ansible", "Terraform", "Kubernetes", "Helm", "GitLab CI", "Bash"],
      type: "DevOps & Infrastructure",
      challenges: [
        "Managing configuration drift across environments",
        "Implementing zero-downtime deployments",
        "Handling complex dependency management",
        "Ensuring consistent state across nodes"
      ],
      features: [
        "Automated node provisioning",
        "Configuration drift detection",
        "Multi-environment support",
        "Rolling update capabilities",
        "Self-healing infrastructure",
        "Compliance monitoring and reporting"
      ]
    }
  ];

  const project = projects.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Button>
          </Link>

          <div className="mb-8">
            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-4 inline-block">
              {project.type}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="grid gap-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.fullDescription}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-muted rounded-md text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Technical Challenges</h2>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;