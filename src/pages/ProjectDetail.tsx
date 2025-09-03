import { useParams, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ProjectDetail = () => {
  const { id } = useParams();

  const projects = [
    {
      id: 'ecommerce-api',
      title: "E-Commerce API Platform",
      description: "Scalable REST API supporting 10K+ concurrent users with microservices architecture, Redis caching, and comprehensive test coverage.",
      fullDescription: "A comprehensive e-commerce API platform built with modern microservices architecture. The system handles high-traffic scenarios with over 10,000 concurrent users through efficient load balancing and Redis caching strategies. The platform includes user authentication, product catalog management, order processing, payment integration, and real-time inventory tracking. Built with Node.js and Express, the API follows RESTful principles and includes comprehensive test coverage using Jest. The system is containerized with Docker for easy deployment and scaling.",
      tech: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker", "Jest"],
      type: "Backend Development",
      challenges: [
        "Handling high concurrent user loads",
        "Implementing efficient caching strategies",
        "Ensuring data consistency across microservices",
        "Building comprehensive test coverage"
      ],
      features: [
        "User authentication and authorization",
        "Product catalog management",
        "Order processing system",
        "Payment gateway integration",
        "Real-time inventory tracking",
        "Analytics and reporting"
      ]
    },
    {
      id: 'testing-framework',
      title: "Automated Testing Framework",
      description: "Custom testing framework with parallel execution, cross-browser support, and detailed reporting for web applications.",
      fullDescription: "A robust automated testing framework designed for modern web applications. The framework supports parallel test execution across multiple browsers and environments, significantly reducing testing time. Built with Selenium WebDriver and Python, it provides detailed reporting with Allure integration and supports continuous integration workflows. The framework includes page object model implementation, data-driven testing capabilities, and automatic screenshot capture on failures.",
      tech: ["Selenium", "Python", "Pytest", "Docker", "CI/CD", "Allure"],
      type: "QA Automation",
      challenges: [
        "Implementing stable cross-browser testing",
        "Managing test data and environments",
        "Creating maintainable test architecture",
        "Integrating with CI/CD pipelines"
      ],
      features: [
        "Cross-browser testing support",
        "Parallel test execution",
        "Page Object Model architecture",
        "Data-driven testing",
        "Detailed reporting with screenshots",
        "CI/CD integration"
      ]
    },
    {
      id: 'api-testing-suite',
      title: "API Testing Suite",
      description: "Comprehensive API testing solution with automated contract testing, performance testing, and security validation.",
      fullDescription: "A comprehensive API testing suite that covers all aspects of API quality assurance. The suite includes automated contract testing to ensure API compliance, performance testing to validate system behavior under load, and security testing to identify vulnerabilities. Built with Postman, Newman, and JMeter, it provides automated test execution and detailed reporting. The solution integrates with FastAPI for rapid test development and uses MongoDB for test data management.",
      tech: ["Postman", "Newman", "JMeter", "Python", "FastAPI", "MongoDB"],
      type: "QA & Testing",
      challenges: [
        "Implementing comprehensive API contract testing",
        "Designing realistic performance test scenarios",
        "Automating security vulnerability detection",
        "Managing complex test data scenarios"
      ],
      features: [
        "Automated contract testing",
        "Performance and load testing",
        "Security vulnerability scanning",
        "Test data management",
        "Continuous integration support",
        "Detailed test reporting"
      ]
    },
    {
      id: 'ueba-system',
      title: "UEBA (User and Entity Behavior Analytics)",
      description: "Advanced behavioral analytics platform for detecting security threats through machine learning and real-time user activity monitoring.",
      fullDescription: "Tested ML-trained models for anomaly detection based on user activity patterns. Ensured backend–core coordination through Kafka and Centrifugo for real-time notifications. Validated system recovery during Kubernetes restarts and tested zombie processes in core modules.",
      tech: ["Kafka", "Centrifugo", "PostgreSQL", "Cypress", "Postman", "Kubernetes", "K6"],
      type: "Security Analytics",
      challenges: [
        "Ensuring stability during Kubernetes restarts",
        "Maintaining accuracy of anomaly detection models",
        "Monitoring and debugging errors in distributed logs"
      ],
      features: [
        "ML-based anomaly detection",
        "Real-time notification and alerting",
        "Backend-core resync validation during container restarts",
        "Zombie process detection and testing"
      ]
    },
    {
      id: 'correlation-engine',
      title: "CE (Correlation Engine)",
      description: "High-performance correlation engine for processing and analyzing large-scale security events and incident detection.",
      fullDescription: "A powerful Correlation Engine designed to process and correlate security events from multiple sources in real-time. The system uses complex event processing techniques to identify patterns and relationships between seemingly unrelated security incidents. Built with Java and Apache Storm for high-throughput stream processing, it integrates with various security tools and SIEM systems to provide comprehensive threat intelligence and automated incident response capabilities.",
      tech: ["Java", "Apache Storm", "Redis", "PostgreSQL", "RabbitMQ", "Kubernetes"],
      type: "Event Processing",
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