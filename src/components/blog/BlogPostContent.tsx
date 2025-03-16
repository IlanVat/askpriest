
import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ChevronLeft, ListOrdered, Quote } from "lucide-react";
import { InlineCTA } from "./InlineCTA";
import { RelatedArticles } from "./RelatedArticles";

interface BlogPostContentProps {
  post: {
    title: string;
    date: string;
    content: string;
  };
}

// Function to create slug IDs from headings
const createSlug = (text: string) => {
  return text.toLowerCase().replace(/[^\w]+/g, '-');
};

// Extract headings from content
const extractHeadings = (content: string) => {
  const headings: {text: string; slug: string}[] = [];
  
  content.split('\n').forEach(line => {
    if (line.startsWith('## ')) {
      const text = line.replace('## ', '');
      const slug = createSlug(text);
      headings.push({ text, slug });
    }
  });
  
  return headings;
};

// Custom components for ReactMarkdown to style different elements
const createComponents = (content: string) => {
  // Extract all headings in advance
  const headings = extractHeadings(content);
  
  return {
    h1: ({ node, ...props }: any) => {
      const slug = createSlug(props.children.toString());
      return (
        <h1 id={slug} className="text-3xl font-bold mt-8 mb-4 text-primary-gold-dark font-serif scroll-mt-24" {...props}>
          {props.children}
        </h1>
      );
    },
    h2: ({ node, ...props }: any) => {
      const slug = createSlug(props.children.toString());
      return (
        <h2 id={slug} className="text-2xl font-bold mt-6 mb-3 text-primary-gold-dark font-serif scroll-mt-24" {...props}>
          {props.children}
        </h2>
      );
    },
    h3: ({ node, ...props }: any) => {
      const slug = createSlug(props.children.toString());
      return (
        <h3 id={slug} className="text-xl font-bold mt-4 mb-2 text-primary-gold-dark font-serif scroll-mt-24" {...props}>
          {props.children}
        </h3>
      );
    },
    ul: ({ node, ...props }: any) => (
      <ul className="list-disc pl-6 my-4 space-y-2" {...props} />
    ),
    ol: ({ node, ...props }: any) => (
      <ol className="list-decimal pl-6 my-4 space-y-2" {...props} />
    ),
    li: ({ node, ...props }: any) => (
      <li className="mb-2 text-gray-800" {...props} />
    ),
    blockquote: ({ node, ...props }: any) => (
      <blockquote className="border-l-4 border-primary-gold pl-4 my-4 py-2 bg-primary-gold-light/20 rounded-r text-gray-700 flex items-start" {...props}>
        <Quote className="inline-block mr-2 text-primary-gold-dark mt-1 flex-shrink-0" size={18} />
        <div>{props.children}</div>
      </blockquote>
    ),
    p: ({ node, ...props }: any) => (
      <p className="my-4 text-gray-800 leading-relaxed" {...props} />
    ),
    strong: ({ node, ...props }: any) => (
      <strong className="font-bold text-primary-gold-dark" {...props} />
    ),
    a: ({ node, ...props }: any) => (
      <a className="text-primary-gold-dark hover:text-amber-600 underline" {...props} />
    ),
  };
};

export const BlogPostContent: React.FC<BlogPostContentProps> = ({ post }) => {
  // Extract headings for table of contents
  const headings = extractHeadings(post.content);
  const components = createComponents(post.content);

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

  // Ensure all sections have complete content
  const ensureCompleteContent = (content: string): string => {
    // Check for sections that might be incomplete (headings followed by minimal content)
    const lines = content.split('\n');
    let updatedLines = [...lines];
    
    for (let i = 0; i < lines.length; i++) {
      // If this is a heading (## or ###)
      if ((lines[i].startsWith('## ') || lines[i].startsWith('### ')) && 
          i < lines.length - 3) {
        
        // Check if the section has minimal content (just 1-2 lines) before the next heading
        let nextHeadingIndex = -1;
        for (let j = i + 1; j < lines.length; j++) {
          if (lines[j].startsWith('## ') || lines[j].startsWith('### ')) {
            nextHeadingIndex = j;
            break;
          }
        }
        
        // If we're near the end of the content or this section has very little content
        if ((nextHeadingIndex > 0 && nextHeadingIndex - i <= 3) || 
            (nextHeadingIndex === -1 && lines.length - i <= 3)) {
          
          // Extract the section title
          const sectionTitle = lines[i].replace(/^##+ /, '');
          
          // Add more detailed content based on the section title
          const additionalContent = generateAdditionalContent(sectionTitle);
          
          // If this is at the end of the content
          if (nextHeadingIndex === -1) {
            updatedLines.splice(i + 1, 0, additionalContent);
          } else {
            // Insert before the next heading
            updatedLines.splice(nextHeadingIndex, 0, additionalContent);
          }
        }
      }
    }
    
    return updatedLines.join('\n');
  };
  
  // Generate additional content for incomplete sections
  const generateAdditionalContent = (sectionTitle: string): string => {
    // Tailor additional content based on the section title
    if (sectionTitle.toLowerCase().includes('practical wisdom')) {
      return `
Consider these practical approaches to balancing technology and faith:

1. **Digital Sabbath**: Set aside one day per week (or even one hour per day) free from screens and digital devices. Use this time for prayer, Scripture reading, and face-to-face relationships.

2. **Content Curation**: Be intentional about the digital content you consume. Use tools like Christian AI to help filter and recommend content that aligns with biblical values.

3. **Accountability Software**: Consider using apps that monitor your digital habits or provide accountability for online activities. These can be particularly helpful for areas of temptation.

4. **Family Media Plan**: Create clear guidelines for technology use in your household, including screen-free zones and times. Model healthy digital habits for children.

5. **Mindful Consumption**: Practice asking "Is this edifying?" before engaging with digital content, following Paul's guidance in Philippians 4:8.

Remember that technology itself is neutral—it's how we use it that matters. With thoughtful boundaries and intentional practices, digital tools like Christian AI can become powerful allies in your spiritual journey rather than distractions from it.
`;
    } else if (sectionTitle.toLowerCase().includes('biblical wisdom')) {
      return `
Scripture provides timeless principles that apply to our digital age:

1. **Guard Your Heart and Mind**: Proverbs 4:23 reminds us to "guard your heart, for everything you do flows from it." This includes being careful about what digital content we allow to shape our thinking.

2. **Seek Wisdom in Community**: Proverbs 15:22 states, "Plans fail for lack of counsel, but with many advisers they succeed." Christian AI can supplement (but never replace) the wisdom found in godly community.

3. **Redeem the Time**: Ephesians 5:15-16 urges us to "be very careful, then, how you live—not as unwise but as wise, making the most of every opportunity." Technology should help us steward our time well, not waste it.

4. **Test Everything**: 1 Thessalonians 5:21 instructs us to "test everything; hold fast what is good." This applies to the information we encounter online and the digital tools we use.

5. **Honor God in All Things**: Colossians 3:17 reminds us, "And whatever you do, in word or deed, do everything in the name of the Lord Jesus." This includes our online interactions and digital consumption.

These biblical principles provide a framework for navigating technology with wisdom and intentionality, helping us leverage tools like Christian AI while maintaining spiritual health.
`;
    } else {
      // Generic additional content for any other incomplete section
      return `
Here are several key insights regarding ${sectionTitle}:

1. **Biblical Integration**: Apply Scripture to this area by seeking passages that address similar principles. God's Word remains relevant across technological and cultural changes.

2. **Thoughtful Engagement**: Rather than passive consumption, engage critically with content related to ${sectionTitle}, testing it against biblical truth.

3. **Community Discernment**: Discuss challenges related to ${sectionTitle} with trusted believers. Christian AI can provide biblical context, but human community offers essential wisdom and accountability.

4. **Practical Application**: Implement specific practices that help you navigate ${sectionTitle} from a faith perspective. Small, consistent habits often lead to significant spiritual growth.

5. **Grace-Filled Approach**: Remember that sanctification is a process. Extend grace to yourself and others while striving for faithfulness in ${sectionTitle}.

By approaching ${sectionTitle} with biblical wisdom and practical intentionality, believers can navigate this area faithfully while leveraging helpful tools like Christian AI for guidance and support.
`;
    }
  };

  // Apply the content completion check
  const completeContent = ensureCompleteContent(post.content);

  return (
    <div className="container mx-auto mt-10 px-4 mb-16">
      <div className="max-w-3xl mx-auto">
        <div className="mb-4">
          <Link to="/blog" className="text-primary-gold-dark hover:underline inline-flex items-center transition-colors">
            <ChevronLeft className="inline-block mr-1 w-4 h-4" />
            Back to Blog
          </Link>
        </div>
        
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-3 font-serif text-black">{post.title}</h1>
          <p className="text-gray-600 mb-8 pb-4 border-b border-gray-200">
            Published on: {new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric'
            })}
          </p>
          
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
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]} 
              components={components}
            >
              {completeContent}
            </ReactMarkdown>
          </div>
        </article>
        
        {/* Call to Action Section */}
        <div className="mt-12 border-t pt-8">
          <InlineCTA />
        </div>
        
        {/* Related Articles */}
        <RelatedArticles />
      </div>
    </div>
  );
};
