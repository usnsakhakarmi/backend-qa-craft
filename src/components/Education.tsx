import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Education = () => {
  const { ref, isVisible } = useScrollAnimation();
  const education = [
    {
      degree: "Bachelor's of Computer Application",
      institution: "Bhaktapur Multiple Campus",
      duration: "2022 - 2026",
      description: "Comprehensive study of computer applications, programming languages, software development, and database management. Focused on practical applications of technology in solving real-world problems."
    },
    {
      degree: "Science",
      institution: "Khwopa College",
      duration: "2020 - 2021",
      description: "Foundation in science with emphasis on mathematics, physics, and computer science. Built strong analytical and problem-solving skills essential for technology career."
    },
    {
      degree: "School Level Education",
      institution: "Bright Star English School",
      duration: "2019",
      description: "Completed secondary education with excellence in academics and extracurricular activities. 'Education is the most powerful weapon which you can use to change the world' - this philosophy guided my learning journey, building strong foundations in critical thinking and leadership skills."
    }
  ];

  return (
    <section ref={ref} id="education" className={`py-24 bg-muted/30 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Educational <span className="text-gradient">Background</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Academic foundation in computer science and technology
          </p>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center border-4 border-background shadow-lg">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  
                  <div className="card-hover bg-card p-8 rounded-lg border flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-semibold">{edu.degree}</h3>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mt-2 md:mt-0 self-start">
                        {edu.duration}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="font-medium">{edu.institution}</span>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
                
                {index < education.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-8 bg-border"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;