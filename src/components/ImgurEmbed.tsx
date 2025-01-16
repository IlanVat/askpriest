import { useEffect, useRef } from "react";

declare global {
  interface Window {
    imgurEmbed?: {
      createIframe?: () => void;
    }
  }
}

export const ImgurEmbed = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadAttempts = useRef(0);
  const maxAttempts = 3;

  useEffect(() => {
    const loadImgurScript = () => {
      return new Promise<void>((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://s.imgur.com/min/embed.js';
        script.async = true;
        
        script.onload = () => {
          console.log('Imgur script loaded successfully');
          // Give a small delay for the script to initialize
          setTimeout(() => resolve(), 100);
        };
        
        script.onerror = () => {
          console.error('Failed to load Imgur script');
          reject();
        };

        document.body.appendChild(script);
      });
    };

    const initializeEmbed = async () => {
      try {
        // Remove any existing scripts first
        const existingScript = document.querySelector('script[src*="imgur.com/min/embed.js"]');
        if (existingScript) {
          existingScript.remove();
        }

        await loadImgurScript();
        
        // Force reload of the embed
        if (containerRef.current) {
          const blockquote = containerRef.current.querySelector('blockquote');
          if (blockquote) {
            // Clone and replace the blockquote to trigger a fresh embed
            const clone = blockquote.cloneNode(true);
            blockquote.parentNode?.replaceChild(clone, blockquote);
          }
        }

      } catch (error) {
        console.error('Error initializing Imgur embed:', error);
        scriptLoadAttempts.current += 1;
        
        if (scriptLoadAttempts.current < maxAttempts) {
          console.log(`Retrying... Attempt ${scriptLoadAttempts.current + 1} of ${maxAttempts}`);
          setTimeout(initializeEmbed, 1000); // Retry after 1 second
        }
      }
    };

    initializeEmbed();

    return () => {
      const script = document.querySelector('script[src*="imgur.com/min/embed.js"]');
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="imgur-container">
      <blockquote 
        className="imgur-embed-pub" 
        lang="en" 
        data-id="a/X4ctIoj"
        data-context="false"
      >
        <a href="https://imgur.com/a/X4ctIoj">Demo</a>
      </blockquote>
    </div>
  );
};