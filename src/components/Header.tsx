
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md border-b" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between">
          <nav className="flex items-center space-x-6">
            <Link to="/" className="font-serif text-xl font-semibold">
              AskPriestAI
            </Link>
            <Link 
              to="/blog" 
              className={`text-sm ${
                location.pathname.startsWith('/blog') 
                  ? 'text-primary-gold-dark font-medium' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Blog
            </Link>
          </nav>
          
          <Button 
            size="sm"
            onClick={() => window.location.href = 'https://www.askpriestai.com/login_signup?screen=Signup'}
            className="bg-primary-gold-dark hover:bg-primary-gold-dark/90"
          >
            Get Started
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};
