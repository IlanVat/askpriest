
import React from "react";
import { ListOrdered } from "lucide-react";

interface TableOfContentsProps {
  headings: { text: string; slug: string }[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ headings }) => {
  const handleContentClick = (e: React.MouseEvent<HTMLAnchorElement>, slug: string) => {
    e.preventDefault();
    const element = document.getElementById(slug);
    if (element) {
      // Scroll to the element with smooth behavior
      element.scrollIntoView({ behavior: 'smooth' });
      // Update URL with hash without triggering a page reload
      window.history.pushState(null, '', `#${slug}`);
    }
  };

  return (
    <div className="bg-primary-gold-light/10 border border-primary-gold/30 p-6 rounded-lg mb-8 shadow-sm">
      <div className="flex items-center mb-2">
        <ListOrdered className="text-primary-gold-dark mr-2" size={20} />
        <h3 className="text-lg font-semibold text-primary-gold-dark">Contents</h3>
      </div>
      <div className="pl-6">
        {headings.map((heading, index) => (
          <div key={index} className="py-1">
            <a 
              href={`#${heading.slug}`}
              onClick={(e) => handleContentClick(e, heading.slug)}
              className="text-primary-gold-dark hover:text-amber-600 hover:underline cursor-pointer"
            >
              {heading.text}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
