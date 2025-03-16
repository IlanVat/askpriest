
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

// Complete unfinished sections in content
const completeUnfinishedSections = (content: string): string => {
  const lines = content.split('\n');
  const completedLines = [...lines];
  
  // Look for section headers that might be incomplete (no content following them)
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // If we find a section header
    if (line.startsWith('## ')) {
      const sectionTitle = line.replace('## ', '');
      
      // Check if this is the last line or if the next line is another header (indicating empty section)
      const isLastLine = i === lines.length - 1;
      const nextLineIsHeader = !isLastLine && (lines[i+1].startsWith('## ') || lines[i+1].startsWith('# '));
      const nextLinesEmpty = !isLastLine && lines[i+1].trim() === '';
      
      // If this section appears to be empty or incomplete
      if (isLastLine || nextLineIsHeader || nextLinesEmpty) {
        // Generate content based on the section title
        let generatedContent = '';
        
        if (sectionTitle.includes('Practical Wisdom')) {
          generatedContent = `
Here are practical ways to navigate this challenge with biblical wisdom:

### 1. **Intentional Boundaries**

- **Digital Sabbath**: Set aside one day per week (or even just an evening) as a "digital sabbath" where you disconnect from all screens
- **Phone-Free Zones**: Designate certain spaces in your home (such as the dinner table, bedroom) as permanently device-free
- **Scheduled Access**: Use apps like "Digital Wellbeing" or "Screen Time" to limit usage of distracting apps to specific times

### 2. **Curated Information Diet**

- **Audit Your Inputs**: Regularly evaluate which voices and sources you're allowing to shape your thinking
- **Choose Substance Over Sensation**: Replace algorithmically-driven feeds with thoughtfully selected content that builds faith
- **Scripture First**: Commit to reading the Bible before checking social media or news each day

### 3. **Strategic Technology Use**

- **Prayer Apps**: Tools like PrayerMate or Lectio 365 can structure and deepen your prayer life
- **Bible Study Resources**: Apps like Logos Bible Software can enhance rather than replace deep engagement with Scripture
- **Spiritual Formation Podcasts**: Listen to substantive teaching during commutes or exercise

### 4. **Community Accountability**

- **Tech-Free Gatherings**: Organize regular face-to-face meetings where devices are left at the door
- **Digital Accountability**: Use apps like Covenant Eyes or accountability partners for maintaining online integrity
- **Family Media Plan**: Create a family covenant about technology use that aligns with your shared values

Remember that technology itself is morally neutral—it's our relationship with it that matters. These practices can help ensure that digital tools serve your spiritual growth rather than hinder it.`;
        } 
        else if (sectionTitle.includes('Biblical Wisdom')) {
          generatedContent = `
Scripture provides timeless guidance that applies powerfully to our digital age:

1. **Guard Your Heart and Mind**: Philippians 4:8 instructs us to focus on whatever is true, noble, right, pure, lovely, admirable, excellent, and praiseworthy. This principle should guide our digital consumption.

2. **Be Slow to Speak**: James 1:19 reminds us to "be quick to listen, slow to speak and slow to become angry." In an age of instant replies and reactive posting, this wisdom is more relevant than ever.

3. **Redeem the Time**: Ephesians 5:15-16 calls us to "make the most of every opportunity." Technology can either help us steward our time wisely or become a bottomless well of distraction.

4. **Seek Wisdom Above Information**: Proverbs 4:7 urges, "The beginning of wisdom is this: Get wisdom. Though it cost all you have, get understanding." In an information-rich but wisdom-poor age, Christians must prioritize deep understanding over mere data collection.

5. **Practice Digital Sabbath**: The biblical principle of Sabbath (Exodus 20:8-11) applies to our need for regular, intentional rest from digital stimulation and constant connectivity.

These biblical principles provide a foundation for flourishing in the digital age while maintaining spiritual vitality and Christ-centered perspective.`;
        }
        else if (sectionTitle.includes('Conclusion')) {
          generatedContent = `
As we navigate the complexities of faith in today's world, remember that technology is merely a tool—neither inherently good nor evil. What matters is how we steward these tools in service of Christ's kingdom. By developing thoughtful practices grounded in Scripture and supported by Christian community, we can leverage the benefits of digital tools while avoiding their pitfalls.

The challenges we face are not unique to our generation—every age has presented believers with cultural pressures and opportunities. What remains constant is God's faithfulness and the sufficiency of His Word to guide us, even in uncharted technological territory.

May we be people who engage wisely with technology, maintaining our primary allegiance to Christ rather than digital culture, and demonstrating to a watching world what it means to use these powerful tools in ways that honor God and benefit others.`;
        }
        else {
          // Generic content for any other section
          generatedContent = `
This section explores important aspects of ${sectionTitle.toLowerCase()} from a biblical perspective.

1. **Scripture's Guidance**: The Bible offers timeless wisdom applicable to this topic through passages in both the Old and New Testaments.

2. **Christian Tradition**: Throughout church history, believers have wrestled with similar challenges and developed helpful insights.

3. **Practical Application**: Applying these principles in daily life requires intentional practices and community support.

4. **Spiritual Formation**: How this topic relates to our ongoing growth in Christ-likeness and spiritual maturity.

By engaging thoughtfully with these dimensions, believers can navigate this area with wisdom and faithfulness to God's Word.`;
        }
        
        // Insert the generated content after the section title
        completedLines.splice(i+1, 0, generatedContent);
      }
    }
  }
  
  return completedLines.join('\n');
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
  // Complete any unfinished sections in the content
  const completedContent = completeUnfinishedSections(post.content);
  
  // Extract headings for table of contents
  const headings = extractHeadings(completedContent);
  const components = createComponents(completedContent);

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
              {completedContent}
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
