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
      fullDescription: "Focused on validating rule-based and Sigma rule detections for alerts. Ensured backend–core synchronization with Redis and tested integration with webhook services for alert delivery.",
      tech: ["Redis", "Kafka", "PostgreSQL", "Cypress", "Postman", "Webhooks"],
      type: "Event Processing",
      challenges: [
        "Verifying accurate alert matching with imported rules",
        "Ensuring low-latency alert delivery",
        "Debugging rule execution pipelines"
      ],
      features: [
        "Rule-based detection and alert validation",
        "Sigma rule detection testing",
        "Webhook-based notification services",
        "Backend-core coordination via Redis"
      ]
    },
    {
      id: 'agentless-monitoring',
      title: "Agentless Monitoring System",
      description: "Network-based monitoring solution that provides comprehensive visibility without requiring agent installation on endpoints.",
      fullDescription: "Tested multi-database support for banking systems where incoming data was ingested and dumped into containerized services. Validated data synchronization across 5 database engines.",
      tech: ["PostgreSQL", "MySQL", "MSSQL", "Oracle", "MongoDB", "Kubernetes", "Linux", "Postman", "Cypress"],
      type: "DevOps & Monitoring",
      challenges: [
        "Ensuring consistent behavior across heterogeneous databases",
        "Handling schema and query variations among DB engines",
        "Verifying containerized data dumping reliability"
      ],
      features: [
        "Multi-database compatibility",
        "Real-time ingestion into containers",
        "Data validation and consistency testing"
      ]
    },
    {
      id: 'node-configuration',
      title: "HomeTown",
      description: "Real-time project setup and configuration management system for dynamic node deployment and orchestration.",
      fullDescription: "Tested configuration of nodes in distributed environments using Linux VMs provisioned with Vagrant. Validated system behavior with certificate-based authentication using public/private keys and CA bundles.",
      tech: ["Vagrant", "Linux VMs", "Kubernetes", "Certificate management (CA bundles, keys)"],
      type: "DevOps & Infrastructure",
      challenges: [
        "Debugging VM-level misconfigurations",
        "Validating secure system communication using generated certificates",
        "Ensuring consistent node behavior across environments"
      ],
      features: [
        "Node configuration across Linux environments",
        "Certificate-based authentication testing",
        "Secure communication validation"
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