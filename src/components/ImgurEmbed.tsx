import { useEffect } from "react";

declare global {
  interface Window {
    imgurEmbed?: {
      createIframe?: () => void;
    }
  }
}

export const ImgurEmbed = () => {
  useEffect(() => {
    const loadImgur = () => {
      // Remove any existing script
      const existingScript = document.querySelector('script[src="//s.imgur.com/min/embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }

      // Create and append the script
      const script = document.createElement('script');
      script.src = '//s.imgur.com/min/embed.js';
      script.async = true;
      
      script.onload = () => {
        console.log('Imgur script loaded successfully');
      };

      document.body.appendChild(script);
    };

    // Initial load
    loadImgur();

    // Cleanup
    return () => {
      const script = document.querySelector('script[src="//s.imgur.com/min/embed.js"]');
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <blockquote 
      className="imgur-embed-pub" 
      lang="en" 
      data-id="a/X4ctIoj"
      data-context="false"
    >
      <a href="//imgur.com/a/X4ctIoj">Demo</a>
    </blockquote>
  );
};