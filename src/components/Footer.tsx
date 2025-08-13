import { Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-card border-t py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-gradient">Backend Developer & QA Engineer</span>
            </h3>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Building robust systems and ensuring software quality through comprehensive testing
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          <div className="border-t pt-8">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;