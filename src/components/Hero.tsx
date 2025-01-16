import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.open('https://www.askpriestai.com', '_blank');
  };

  useEffect(() => {
    let retryCount = 0;
    const maxRetries = 3;

    const initializeImgur = () => {
      // Clean up any existing elements
      const existingScript = document.querySelector('script[src="//s.imgur.com/min/embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }

      const existingBlockquote = document.querySelector('.imgur-embed-pub');
      if (existingBlockquote) {
        existingBlockquote.remove();
      }

      // Create new elements
      const blockquote = document.createElement('blockquote');
      blockquote.className = 'imgur-embed-pub';
      blockquote.setAttribute('lang', 'en');
      blockquote.setAttribute('data-id', 'a/X4ctIoj');
      blockquote.setAttribute('data-context', 'false');
      
      const link = document.createElement('a');
      link.href = '//imgur.com/a/X4ctIoj';
      link.textContent = 'Demo';
      blockquote.appendChild(link);

      // Add blockquote to container
      const container = document.querySelector('#imgur-container');
      if (container) {
        container.innerHTML = ''; // Clear container
        container.appendChild(blockquote);
      }

      // Add script with load event handler
      const script = document.createElement('script');
      script.src = '//s.imgur.com/min/embed.js';
      script.async = true;
      
      script.onload = () => {
        console.log('Imgur script loaded successfully');
        if (window.imgurEmbed) {
          window.imgurEmbed.createIframe();
          console.log('Imgur embed initialized');
        }
      };

      script.onerror = () => {
        console.error('Failed to load Imgur script');
        if (retryCount < maxRetries) {
          retryCount++;
          console.log(`Retrying... Attempt ${retryCount} of ${maxRetries}`);
          setTimeout(initializeImgur, 1000); // Retry after 1 second
        }
      };

      document.body.appendChild(script);
    };

    // Initial load with a slight delay to ensure DOM is ready
    setTimeout(initializeImgur, 100);

    // Cleanup
    return () => {
      const script = document.querySelector('script[src="//s.imgur.com/min/embed.js"]');
      if (script) {
        script.remove();
      }
      const container = document.querySelector('#imgur-container');
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-4 bg-gradient-to-b from-primary-gold-light via-primary-gold-light to-white">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fadeIn mt-8">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground">
          Faith at Your Fingertips
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 font-serif">
          Meet AskPriest, Your Virtual Christian Guide
        </p>
        <p className="text-2xl font-serif text-foreground/90 italic">
          Seek Guidance. Find Peace. Strengthen Your Faith.
        </p>
        <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
          Experience 24/7 spiritual guidance powered by the most advanced AI, offering biblical wisdom and compassionate answers to your faith questions.
        </p>
        <div className="flex justify-center pt-4">
          <Button 
            size="lg" 
            className="bg-primary-gold-dark hover:bg-primary-gold text-white"
            onClick={handleClick}
          >
            Start Your Faith Journey for Free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="mt-12 w-full max-w-full overflow-hidden px-4">
        <div id="imgur-container" className="relative w-full max-w-[600px] mx-auto">
          {/* Imgur embed will be inserted here dynamically */}
        </div>
      </div>
    </section>
  );
};