import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { Header } from "@/components/Header";

// Sample blog data - in a real app, this would come from an API or CMS
const blogPosts = [
  {
    id: 1,
    title: "Understanding Biblical Context: Why It Matters",
    excerpt: "Discover how understanding the historical and cultural context can transform your interpretation of scripture.",
    content: `
      <p>When we read the Bible, we're reading texts that were written thousands of years ago in different languages, cultures, and historical settings. Understanding these contexts is crucial for properly interpreting Scripture.</p>
      
      <h2>Historical Context</h2>
      <p>The Bible was written over approximately 1,500 years, from around 1400 BC to about 100 AD. Different books were written during different historical periods, which significantly influenced their content and themes.</p>
      <p>For example, understanding that many of the Psalms were written during times of war or exile helps us appreciate their emotional depth and relevance to our own struggles.</p>
      
      <h2>Cultural Context</h2>
      <p>Biblical authors wrote within specific cultural frameworks that shaped their language, metaphors, and concepts. When Jesus referred to himself as the "good shepherd," his audience immediately understood the rich cultural significance of that metaphor in ways that might not be immediately apparent to modern readers.</p>
      
      <h2>Literary Context</h2>
      <p>The Bible contains various literary genres - historical narrative, poetry, prophecy, letters, and apocalyptic literature, among others. Each genre has its own conventions and should be interpreted accordingly.</p>
      <p>Reading a poetic passage like Psalm 18, which describes God riding on the wings of the wind, requires a different interpretive approach than reading historical narrative in the book of Acts.</p>
      
      <h2>Practical Application</h2>
      <p>To better understand biblical context:</p>
      <ul>
        <li>Use study Bibles that provide historical and cultural background information</li>
        <li>Research the historical period in which a book was written</li>
        <li>Pay attention to the literary features and genre of the text</li>
        <li>Consider how the original audience would have understood the passage</li>
      </ul>
      
      <p>By taking context seriously, we can avoid misinterpretations and discover the rich, nuanced meanings within Scripture that might otherwise remain hidden.</p>
    `,
    date: "May 15, 2023",
    readTime: "8 min read",
    category: "Bible Study",
    slug: "understanding-biblical-context",
    author: "Dr. Sarah Johnson",
    authorRole: "Biblical Studies Professor"
  },
  {
    id: 2,
    title: "Modern Faith Challenges and How to Navigate Them",
    excerpt: "A look at how believers can stay true to their faith while navigating complex social and ethical questions.",
    content: `
      <p>In today's rapidly changing world, Christians face unique challenges that previous generations didn't encounter. From technological ethics to complex social issues, navigating modern life while maintaining strong faith requires wisdom and discernment.</p>
      
      <h2>Digital Discipleship</h2>
      <p>Our digital lives present both opportunities and challenges for faith. Social media can connect believers globally but also presents temptations toward comparison, shallow relationships, and time mismanagement.</p>
      <p>Consider establishing healthy boundaries with technology, using digital tools to enhance rather than replace spiritual disciplines, and being intentional about how you represent your faith online.</p>
      
      <h2>Cultural Engagement</h2>
      <p>Christians are called to be "in the world but not of it." This balance requires discernment about when to adapt to culture and when to counter it.</p>
      <p>Seeking to understand different perspectives, finding common ground where possible, and expressing disagreement with gentleness and respect allows believers to engage meaningfully with culture without compromising core convictions.</p>
      
      <h2>Ethical Complexity</h2>
      <p>Modern medical, technological, and social developments raise ethical questions that don't have explicit biblical answers. In these areas, believers must apply biblical principles rather than looking for specific rules.</p>
      <p>Begin with clear biblical commands, consider the underlying principles, seek wisdom through prayer and counsel, and be humble about areas where faithful Christians might disagree.</p>
      
      <h2>Practical Steps</h2>
      <ul>
        <li>Root yourself in Scripture and prayer</li>
        <li>Find community with other believers for support and accountability</li>
        <li>Seek to understand before being understood</li>
        <li>Remember that Christian unity doesn't require uniformity on all issues</li>
        <li>Keep the gospel central in all discussions</li>
      </ul>
      
      <p>By approaching modern challenges with biblical wisdom, intellectual honesty, and spiritual humility, believers can navigate complex issues while maintaining a faithful witness.</p>
    `,
    date: "June 10, 2023",
    readTime: "12 min read",
    category: "Faith Journey",
    slug: "modern-faith-challenges",
    author: "Pastor Michael Chen",
    authorRole: "Urban Ministry Leader"
  },
  {
    id: 3,
    title: "Prayer Techniques for Busy Lives",
    excerpt: "Simple but effective ways to maintain a prayer life when your schedule seems impossible.",
    content: `
      <p>Modern life moves at a relentless pace. Between work, family responsibilities, and the constant ping of notifications, finding time for prayer can seem impossible. Yet prayer remains essential for spiritual growth.</p>
      
      <h2>Breath Prayers</h2>
      <p>Breath prayers are short, simple prayers that can be prayed in a single breath. They can be prayed anywhere - during your commute, between meetings, or while waiting in line.</p>
      <p>Examples include "Lord, have mercy," "Jesus, give me peace," or "Spirit, guide my steps." These compact prayers keep us connected to God throughout the day.</p>
      
      <h2>Scheduled Prayer Triggers</h2>
      <p>Link prayer to activities you already do daily. For example, pray while brewing coffee, during your shower, or at stoplights during your commute.</p>
      <p>By anchoring prayer to existing habits, it becomes more naturally integrated into your life rather than feeling like one more thing to squeeze in.</p>
      
      <h2>Praying Scripture</h2>
      <p>When words don't come easily, let Scripture guide your prayers. The Psalms particularly lend themselves to prayer, expressing the full range of human emotion.</p>
      <p>Try reading a verse or short passage, then responding to God in prayer based on what you've read. This approach provides structure while remaining personal.</p>
      
      <h2>Prayer Walking</h2>
      <p>Combine physical activity with prayer by praying while walking. This can be done during a lunch break, while exercising, or even while walking between meetings.</p>
      <p>Pray for the people, businesses, and homes you pass, or use the time for personal conversation with God.</p>
      
      <h2>Practical Tips</h2>
      <ul>
        <li>Set realistic expectations - five focused minutes can be more meaningful than a distracted half-hour</li>
        <li>Use prayer apps that offer guided prayers or reminders</li>
        <li>Consider journaling as a form of prayer if you process thoughts better in writing</li>
        <li>Remember that quality matters more than quantity</li>
      </ul>
      
      <p>By adopting these flexible approaches to prayer, even the busiest person can maintain communication with God throughout their day.</p>
    `,
    date: "July 22, 2023",
    readTime: "6 min read",
    category: "Prayer",
    slug: "prayer-techniques-busy-lives",
    author: "Lisa Rodriguez",
    authorRole: "Spiritual Formation Director"
  },
  {
    id: 4,
    title: "The Role of Community in Spiritual Growth",
    excerpt: "Why fellowship with other believers is essential for developing a stronger faith.",
    content: `
      <p>Faith was never meant to be a solo journey. From the earliest days of the church, Christians have gathered to worship, learn, and support one another. Today, in an increasingly individualistic culture, spiritual community is more important than ever.</p>
      
      <h2>Biblical Foundation</h2>
      <p>Throughout Scripture, faith is described in communal terms. The early church "devoted themselves to the apostles' teaching and to fellowship, to the breaking of bread and to prayer" (Acts 2:42).</p>
      <p>The New Testament contains over 50 "one another" commands - love one another, encourage one another, bear one another's burdens - all of which require community to fulfill.</p>
      
      <h2>Growth Through Relationships</h2>
      <p>Spiritual growth happens most effectively in relationships. Others can see our blind spots, challenge our assumptions, and encourage us when we struggle.</p>
      <p>Just as iron sharpens iron, one person sharpens another (Proverbs 27:17). Our rough edges are smoothed through interaction with different personalities and perspectives.</p>
      
      <h2>Support in Struggles</h2>
      <p>When facing doubts, temptations, or hardships, community provides crucial support. Others can offer perspective, share wisdom from their own experiences, and remind us of God's faithfulness when our own vision is clouded.</p>
      <p>This support isn't just emotional - it's practical as well, as believers meet one another's tangible needs.</p>
      
      <h2>Accountability and Growth</h2>
      <p>Left to ourselves, it's easy to rationalize spiritual shortcuts or inconsistency. Accountability partners and small groups help us maintain spiritual disciplines and address areas needing growth.</p>
      <p>This accountability works best when it combines both grace and truth - holding high standards while offering acceptance and support.</p>
      
      <h2>Finding Community</h2>
      <ul>
        <li>Join a small group or Bible study at your church</li>
        <li>Seek mentoring relationships with more mature believers</li>
        <li>Serve alongside others in ministry</li>
        <li>Consider online communities if in-person options are limited</li>
        <li>Be patient - deep community takes time to develop</li>
      </ul>
      
      <p>By investing in spiritual community, we not only accelerate our own growth but contribute to others' journeys as well, fulfilling God's vision for a connected, interdependent body of believers.</p>
    `,
    date: "August 5, 2023",
    readTime: "10 min read",
    category: "Community",
    slug: "community-spiritual-growth",
    author: "James Wilson",
    authorRole: "Community Pastor"
  },
  {
    id: 5,
    title: "Finding Peace in Uncertain Times",
    excerpt: "Biblical wisdom for maintaining spiritual peace during periods of personal or global uncertainty.",
    content: `
      <p>Uncertainty is a natural part of human experience, but that doesn't make it any easier to bear. Whether facing personal difficulties, global crises, or simply an unclear future, Scripture offers guidance for finding peace amid unpredictability.</p>
      
      <h2>The Peace That Surpasses Understanding</h2>
      <p>In Philippians 4:6-7, Paul writes: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus."</p>
      <p>This peace isn't dependent on circumstances but on God's character and promises. It doesn't necessarily make sense logically - it "surpasses understanding" - but it's real nonetheless.</p>
      
      <h2>Focusing on What's Certain</h2>
      <p>When everything seems uncertain, we can anchor ourselves to what we know for sure: God's character, his promises, and his past faithfulness.</p>
      <p>Immersing ourselves in Scripture reminds us that while circumstances change, God remains consistent - "Jesus Christ is the same yesterday and today and forever" (Hebrews 13:8).</p>
      
      <h2>Living One Day at a Time</h2>
      <p>Jesus taught his followers not to worry about tomorrow, for "each day has enough trouble of its own" (Matthew 6:34). This isn't dismissing planning but avoiding being paralyzed by future uncertainties.</p>
      <p>Practicing mindfulness and gratitude helps us remain present rather than mentally living in an uncertain future or a difficult past.</p>
      
      <h2>Community in Uncertainty</h2>
      <p>We weren't meant to face uncertainty alone. The support of fellow believers provides perspective, encouragement, and tangible help during difficult periods.</p>
      <p>Being vulnerable about our fears with trusted friends allows them to speak truth, offer support, and remind us of God's faithfulness when we struggle to see it.</p>
      
      <h2>Practical Steps</h2>
      <ul>
        <li>Create a "certainties list" of God's promises and character traits to review during anxious moments</li>
        <li>Develop a regular prayer practice that includes thanksgiving, even for small blessings</li>
        <li>Limit consumption of news and social media if it increases anxiety</li>
        <li>Practice self-care through adequate rest, exercise, and nutrition</li>
        <li>Serve others - helping those in need often puts our own uncertainties in perspective</li>
      </ul>
      
      <p>By grounding ourselves in God's unchanging nature and promises, we can experience genuine peace even when life feels most unpredictable.</p>
    `,
    date: "September 12, 2023",
    readTime: "9 min read",
    category: "Devotional",
    slug: "finding-peace-uncertain-times",
    author: "Dr. Rebecca Thomas",
    authorRole: "Christian Counselor"
  },
  {
    id: 6,
    title: "Digital Discipleship: Using Technology to Grow Faith",
    excerpt: "How modern technology and AI can be leveraged as tools for spiritual development.",
    content: `
      <p>Technology is transforming every aspect of modern life, including how we practice our faith. While digital tools can never replace face-to-face community or personal spiritual disciplines, they can enhance and support our spiritual growth in unprecedented ways.</p>
      
      <h2>AI-Assisted Spiritual Learning</h2>
      <p>Artificial intelligence tools like AskPriestAI are revolutionizing how believers access spiritual guidance. These tools can provide immediate, personalized responses to theological questions, offer scriptural insights, and suggest relevant Bible passages based on specific life situations.</p>
      <p>While AI can't replace human spiritual mentors, it can provide accessible guidance when human resources aren't immediately available.</p>
      
      <h2>Bible Study Tools</h2>
      <p>Digital Bible study tools have made in-depth Scripture study more accessible than ever. Apps that provide original language insights, cross-references, and historical context put seminary-level resources at everyone's fingertips.</p>
      <p>Features like searchable text, personalized highlighting, and synchronized notes across devices make consistent Bible engagement more convenient.</p>
      
      <h2>Prayer and Devotional Apps</h2>
      <p>Prayer and devotional apps can help maintain consistency in spiritual practices. Features like customizable reminders, guided prayers, and prayer tracking help users develop and sustain meaningful prayer habits.</p>
      <p>Many apps also offer daily devotionals, Scripture readings, or spiritual exercises to support regular engagement with God's word.</p>
      
      <h2>Online Community</h2>
      <p>Technology bridges geographical gaps to connect believers globally. Online small groups, forums, and social media communities allow Christians to find support, discuss Scripture, and pray together despite physical distance.</p>
      <p>These digital communities can be especially valuable for believers in isolated areas, those with mobility limitations, or Christians living in regions hostile to faith.</p>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Use technology as a supplement to, not a replacement for, in-person community</li>
        <li>Establish healthy boundaries to prevent digital tools from becoming distractions</li>
        <li>Evaluate digital resources against Scripture rather than accepting all content uncritically</li>
        <li>Balance consumption with application - knowledge without practice doesn't lead to growth</li>
        <li>Seek guidance from trusted spiritual leaders about incorporating technology into spiritual life</li>
      </ul>
      
      <p>By thoughtfully integrating digital tools into our spiritual practices, we can leverage technology's benefits while avoiding its potential pitfalls, ultimately enhancing our growth as disciples in the digital age.</p>
    `,
    date: "October 30, 2023",
    readTime: "7 min read",
    category: "Technology",
    slug: "digital-discipleship-technology",
    author: "Mark Stevens",
    authorRole: "Digital Ministry Director"
  }
];

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const post = blogPosts.find(post => post.slug === slug);
  
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <p className="mb-6">The article you're looking for doesn't exist or has been moved.</p>
          <Button onClick={() => navigate('/blog')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        <div className="container px-4 mx-auto py-12">
          <Button 
            variant="ghost" 
            className="mb-8"
            onClick={() => navigate('/blog')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
          
          <div className="max-w-3xl mx-auto">
            {/* Article Header */}
            <div className="mb-8">
              <div className="text-sm font-medium text-primary-gold-dark mb-2">
                {post.category}
              </div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                {post.title}
              </h1>
              
              {/* Author and Meta */}
              <div className="flex flex-wrap items-center justify-between gap-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mr-3">
                    {post.author.split(' ').map(name => name[0]).join('')}
                  </div>
                  <div>
                    <div className="font-medium">{post.author}</div>
                    <div className="text-sm text-gray-500">{post.authorRole}</div>
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-3">{post.date}</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
            
            {/* Article Content */}
            <div 
              className="prose max-w-none prose-headings:font-serif prose-headings:font-semibold prose-p:text-gray-700 prose-a:text-primary-gold-dark" 
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Share and Related */}
            <div className="border-t border-gray-200 mt-12 pt-8">
              <div className="flex justify-between items-center">
                <Button variant="outline" className="flex items-center gap-2">
                  <Share2 className="h-4 w-4" />
                  Share Article
                </Button>
                
                <Button onClick={() => navigate('/blog')}>
                  See More Articles
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
