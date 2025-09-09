import { Code, TestTube, Server, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} id="about" className={`py-24 bg-muted/30 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Passionate about building scalable backend systems and ensuring software reliability through comprehensive testing
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                With expertise in backend development and quality assurance, I specialize in creating robust, scalable server-side applications and implementing comprehensive testing strategies that ensure software reliability and performance.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My approach combines clean code principles with thorough testing methodologies, focusing on automation, performance optimization, and continuous integration to deliver high-quality software solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="card-hover bg-card p-6 rounded-lg border text-center">
                <Code className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Clean Code</h3>
                <p className="text-sm text-muted-foreground">Maintainable and scalable solutions</p>
              </div>
              <div className="card-hover bg-card p-6 rounded-lg border text-center">
                <TestTube className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">QA Testing</h3>
                <p className="text-sm text-muted-foreground">Comprehensive test automation</p>
              </div>
              <div className="card-hover bg-card p-6 rounded-lg border text-center">
                <Server className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Backend Systems</h3>
                <p className="text-sm text-muted-foreground">Robust server architecture</p>
              </div>
              <div className="card-hover bg-card p-6 rounded-lg border text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Security</h3>
                <p className="text-sm text-muted-foreground">Secure development practices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;