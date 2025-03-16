
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from "@/components/Header";
import { BlogPostSkeleton } from "@/components/blog/BlogPostSkeleton";
import { BlogPostError } from "@/components/blog/BlogPostError";
import { BlogPostNotFound } from "@/components/blog/BlogPostNotFound";
import { BlogPostContent } from "@/components/blog/BlogPostContent";
import { BlogSEO } from "@/components/blog/BlogSEO";
import { getMockPosts } from "@/utils/blogPostUtils";
import { blogPosts } from "@/data/blog";

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<{ title: string; date: string; content: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setError(null);
      try {
        // First, try to fetch from real API
        const response = await fetch(`https://www.askpriestai.com/api/blog/${slug}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPost({
          title: data.title,
          date: data.date,
          content: data.content,
        });
      } catch (e: any) {
        // If real API fails, use local mock data as fallback
        console.log("Falling back to local data");
        
        // First check in our static blog posts
        const staticPost = blogPosts.find(p => p.slug === slug);
        if (staticPost) {
          // For static posts, generate detailed mock content based on the post info
          const mockContent = generateMockContent(staticPost);
          setPost({
            title: staticPost.title,
            date: staticPost.date,
            content: mockContent
          });
        } else {
          // If not in static posts, try the mock posts
          const mockPosts = getMockPosts();
          const mockPost = mockPosts.find(p => p.slug === slug);
          
          if (mockPost) {
            setPost({
              title: mockPost.title,
              date: mockPost.date,
              content: mockPost.content
            });
          } else {
            setError(`Post not found`);
          }
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  // Generate detailed mock content for static blog posts based on category and keywords
  const generateMockContent = (post: typeof blogPosts[0]) => {
    const keywords = post.keywords.split(', ');
    const category = post.category.toLowerCase();
    
    // General introduction based on post excerpt
    let content = `## Introduction\n\n${post.excerpt}\n\n`;
    
    // Check if this is the AI/Mark of the Beast post or similar AI-related posts
    if (post.slug === 'ai-mark-of-beast-biblical-prophecy' || 
        (post.keywords.includes('ai') && (post.keywords.includes('danger') || post.keywords.includes('beast')))) {
      content = generatePositiveAIContent(post, keywords);
    }
    // Main content varies by category
    else if (category === 'bible study' || category === 'scripture' || category === 'apologetics') {
      content += generateBibleStudyContent(post, keywords);
    } else if (category === 'theology' || category === 'ethics' || category === 'salvation' || category === 'doctrine') {
      content += generateTheologicalContent(post, keywords);
    } else if (category === 'prayer' || category === 'spiritual growth' || category === 'devotional' || category === 'faith journey') {
      content += generateSpiritualGrowthContent(post, keywords);
    } else if (category === 'culture' || category === 'technology' || category === 'prophecy' || category === 'parenting') {
      content += generateCultureContent(post, keywords);
    } else if (category === 'community' || category === 'wellbeing' || category === 'mental health') {
      content += generateLifeContent(post, keywords);
    } else {
      // Default content structure for any other categories
      content += defaultContentStructure(post, keywords);
    }
    
    // Add AskPriestAI pitch if the post discusses problems
    if (isProblemPost(post)) {
      content += generateAskPriestAIPitch(post, keywords);
    }
    
    // Add conclusion
    content += `## Conclusion\n\nThe teachings of Christ on ${keywords[0]} continue to challenge and transform us today. As believers, we're called to embrace these truths not just intellectually, but in our daily actions. Remember that ${post.title.toLowerCase()} isn't just theological theory—it's an invitation to a radically different way of living that reflects God's kingdom in our world.\n\nThank you for reading this exploration of ${post.title.toLowerCase()}. May it inspire you to dig deeper into Scripture and apply these principles in your own walk of faith.`;
    
    return content;
  };
  
  // Determine if a post is focused on a problem or challenge
  const isProblemPost = (post: typeof blogPosts[0]) => {
    // Check title and excerpt for problem-related keywords
    const problemKeywords = [
      'problem', 'challenge', 'struggle', 'crisis', 'danger', 'threat', 'risk', 
      'concern', 'issue', 'trouble', 'difficult', 'warning', 'alarm', 'fear', 
      'worry', 'anxiety', 'confusion', 'error', 'misconception', 'misunderstanding',
      'disturbing', 'alarming', 'failing', 'declining'
    ];
    
    const contentText = (post.title + ' ' + post.excerpt).toLowerCase();
    
    return problemKeywords.some(keyword => contentText.includes(keyword)) ||
           post.slug.includes('disturbing-truth') ||
           post.slug.includes('children-spiritually-formed-tiktok');
  };
  
  // Generate a custom AskPriestAI pitch based on the post's problem area
  const generateAskPriestAIPitch = (post: typeof blogPosts[0], keywords: string[]) => {
    const category = post.category.toLowerCase();
    let pitchTitle = "## How AskPriestAI Can Help\n\n";
    let pitchContent = "";
    
    if (category === 'culture' || category === 'technology' || post.keywords.includes('social media')) {
      pitchContent = `In a world where digital media often presents confusing or contradictory spiritual messages, AskPriestAI provides clarity through biblically-grounded guidance. Unlike algorithm-driven social platforms that may lead you astray, AskPriestAI offers trustworthy answers rooted in Scripture and traditional Christian teaching.\n\n**AskPriestAI helps you:**\n\n- Get immediate, Scripture-based answers to your questions about faith and modern challenges\n- Navigate complex cultural issues with biblical wisdom\n- Discern truth from misleading messages in today's media landscape\n- Build a stronger foundation for your family's spiritual formation\n\nWhen you need guidance on ${keywords[0]} or any spiritual matter, AskPriestAI is available 24/7 to provide biblical perspective and practical wisdom.\n\n`;
    } else if (category === 'parenting') {
      pitchContent = `Raising children with strong faith in today's challenging environment requires consistent, biblically-sound guidance. AskPriestAI gives parents a trusted resource for addressing difficult questions and nurturing your children's spiritual development.\n\n**AskPriestAI supports Christian parents by:**\n\n- Providing biblical answers to tough questions your children may ask\n- Offering guidance on age-appropriate spiritual formation\n- Suggesting Scripture passages and devotional resources for family discipleship\n- Helping you address challenging cultural influences from a biblical perspective\n\nParenting doesn't come with a manual, but with AskPriestAI, you have biblical wisdom at your fingertips whenever you need it.\n\n`;
    } else if (category === 'theology' || category === 'doctrine') {
      pitchContent = `Wrestling with complex theological questions about ${keywords[0]} can be challenging, especially when encountering conflicting interpretations. AskPriestAI provides clear, biblically-grounded explanations to help you navigate these deep waters with confidence.\n\n**AskPriestAI offers:**\n\n- Balanced theological perspectives rooted in Scripture and Christian tradition\n- Clear explanations of complex doctrinal concepts\n- Biblical references to support theological insights\n- Guidance for discerning truth in an era of theological confusion\n\nRather than piecing together answers from uncertain sources, turn to AskPriestAI for theologically sound guidance on your spiritual journey.\n\n`;
    } else {
      // Default pitch for any other problem-focused post
      pitchContent = `Navigating challenges related to ${keywords[0]} requires biblical wisdom and spiritual discernment. AskPriestAI provides immediate, Scripture-based guidance to help you address these difficulties from a faith perspective.\n\n**AskPriestAI helps believers:**\n\n- Find biblical answers to pressing questions about ${keywords[0]}\n- Discover relevant Scripture passages for spiritual guidance\n- Access wisdom from Christian tradition to address modern challenges\n- Receive practical steps for applying faith to real-life situations\n\nWhenever you face questions or challenges in your spiritual journey, AskPriestAI offers biblically-grounded insights to strengthen your faith and guide your path.\n\n`;
    }
    
    return pitchTitle + pitchContent;
  };
  
  // Generate positive content specifically for AI-related posts
  const generatePositiveAIContent = (post: typeof blogPosts[0], keywords: string[]) => {
    return `## Understanding AI Through a Balanced Biblical Lens\n\nArtificial Intelligence represents one of the most significant technological advancements of our time. As Christians, we have the opportunity to engage with AI thoughtfully, recognizing both its potential blessings and the need for wise stewardship. Rather than fearing new technology, Scripture encourages us to "test everything; hold fast what is good" (1 Thessalonians 5:21).\n\n## Dispelling Common Misconceptions\n\nMany Christians have expressed concerns about AI, sometimes drawing connections to apocalyptic imagery in Revelation. However, it's important to approach these concerns with theological care:\n\n1. **Technology as a Tool**: Throughout history, technological advances from the printing press to the internet have been used to further God's kingdom. AI is simply the latest tool that can be used for good or ill depending on human intent.\n\n2. **Biblical Discernment**: Scripture teaches us to evaluate everything according to God's truth. The apostle Paul engaged with the philosophical ideas of his day (Acts 17), modeling how believers can thoughtfully interact with new concepts.\n\n3. **Human Distinctiveness**: While AI can mimic certain human capabilities, it lacks the divine image that makes humans unique. Genesis 1:27 reminds us that humans alone are created in God's image, with moral agency and spiritual capacity.\n\n## AI's Potential for Kingdom Work\n\nRather than viewing AI with suspicion, we can recognize several ways it might serve God's purposes:\n\n1. **Expanding Access to Biblical Resources**: AI can make Scripture study tools and theological resources available to believers worldwide, regardless of location or economic status.\n\n2. **Supporting Ministry Efforts**: Churches and ministries can use AI to streamline administrative tasks, allowing more time and resources for relational ministry.\n\n3. **Reaching the Unreached**: AI translation capabilities can help bring Scripture to language groups still waiting for God's Word.\n\n4. **Enhancing Spiritual Formation**: Tools like AskPriestAI provide immediate, biblically-grounded guidance to believers seeking to grow in their faith.\n\n## AskPriestAI: A Tool for Your Spiritual Journey\n\nThis is where our mission at AskPriestAI comes in. We've developed an AI tool specifically designed to support Christians in their walk with God. Unlike general AI systems, AskPriestAI:\n\n- Provides responses grounded in Scripture and historic Christian teaching\n- Offers 24/7 access to biblical wisdom for life's questions\n- Supports rather than replaces human discipleship and church community\n- Maintains rigorous theological standards through expert Christian oversight\n\nWhether you're studying Scripture, facing difficult life decisions, or simply curious about faith questions, AskPriestAI offers immediate, trustworthy guidance drawn from the Bible and Christian tradition.\n\n## Wisdom for the Digital Age\n\nAs we engage with AI and other technologies, Scripture offers timeless principles:\n\n1. **Maintain Primacy of Scripture**: Psalm 119:105 reminds us that God's Word is our ultimate guide, providing the framework through which we evaluate all other sources.\n\n2. **Practice Digital Discernment**: 1 John 4:1 instructs us to "test the spirits." This applies to digital sources as well, encouraging critical thinking about the information we consume.\n\n3. **Preserve Human Community**: Hebrews 10:25 emphasizes the irreplaceable value of gathering together. Technology should enhance rather than replace embodied Christian community.\n\n4. **Steward Technology Wisely**: Genesis 1:28 gives humans dominion over creation. This includes responsible development and use of the technologies we create.\n\n`;
  };
  
  // Generate content specifically for Bible Study posts
  const generateBibleStudyContent = (post: typeof blogPosts[0], keywords: string[]) => {
    return `## Historical Context\n\nTo truly understand ${post.title.toLowerCase()}, we must first consider the historical and cultural context of first-century Palestine. During Jesus' time, Roman occupation created a complex social and political landscape. The Jewish people lived under oppression, and many longed for a Messiah who would overthrow their Roman rulers through military might. It was against this backdrop that Jesus delivered his revolutionary teachings.\n\nThe original audience would have understood these words through a different lens than we do today. For them, ${keywords[0]} and ${keywords[1]} carried nuances that our modern translations sometimes miss.\n\n## Textual Analysis\n\nIn Matthew 5:38-42, Jesus states: *"You have heard that it was said, 'An eye for an eye and a tooth for a tooth.' But I say to you, do not resist the one who is evil. But if anyone slaps you on the right cheek, turn to him the other also."*\n\nThe Greek word used for "resist" here is "antistenai," which specifically referred to violent or armed resistance. This is crucial to understanding the passage correctly. Jesus wasn't advocating passivity in the face of evil—He was rejecting violent retaliation while proposing a third way that was neither passive submission nor violent resistance.\n\n## Common Misinterpretations\n\nMany Christians have misunderstood this teaching as a call to be doormats—to passively accept abuse and injustice. This interpretation has:\n\n1. Discouraged Christians from standing against systemic injustice\n2. Been used to counsel victims to remain in abusive situations\n3. Neutered Christian influence in confronting societal evils\n\nThis watered-down interpretation misses the revolutionary nature of Jesus' words.\n\n## The Revolutionary Truth\n\nJesus was actually proposing a form of nonviolent resistance that maintained human dignity while refusing to mirror the oppressor's violence. Consider the cultural context:\n\n- A slap on the right cheek would have been a backhanded slap—an action meant to humiliate an inferior\n- By turning the other cheek, the person forced their opponent to strike them as an equal\n- This was an assertion of human dignity and a refusal to be degraded\n\nSimilarly, the commands about giving your cloak and going the extra mile were ways of exposing injustice through creative, nonviolent actions that maintained dignity.\n\n## Biblical Examples\n\nThroughout Scripture, we see this principle demonstrated:\n\n- Jesus himself confronted the high priest's servant who struck him, questioning the injustice rather than literally turning his cheek (John 18:22-23)\n- Paul appealed to his Roman citizenship rights when treated unjustly (Acts 16:37-39, 22:25-29)\n- The prophets consistently spoke truth to power and confronted injustice\n\nNone of these examples show passive acceptance of evil—they show strategic, nonviolent resistance to it.\n\n`;
  };
  
  // Generate content specifically for Theological posts
  const generateTheologicalContent = (post: typeof blogPosts[0], keywords: string[]) => {
    return `## Theological Foundations\n\nThe concept of ${keywords[0]} is deeply rooted in Christian theology. When we examine Scripture holistically, we see that God's design for human flourishing involves both spiritual principles and practical applications. This article explores how these theological foundations inform our understanding of ${post.title.toLowerCase()}.\n\n## Scriptural Evidence\n\nThroughout both the Old and New Testaments, we find consistent teachings about ${keywords[0]}:\n\n1. **Old Testament Principles**: In Deuteronomy 8:17-18, we're reminded that *"You may say to yourself, 'My power and the strength of my hands have produced this wealth for me.' But remember the Lord your God, for it is he who gives you the ability to produce wealth."* This establishes God as the ultimate source of all blessing, not human effort alone.\n\n2. **New Testament Development**: Jesus expands on these principles in Luke 12:15 when He warns, *"Watch out! Be on your guard against all kinds of greed; life does not consist in an abundance of possessions."* Paul later echoes this in 1 Timothy 6:9-10, cautioning that *"Those who want to get rich fall into temptation and a trap and into many foolish and harmful desires that plunge people into ruin and destruction."*\n\n3. **Apostolic Teaching**: The early church modeled a community-centered approach to resources, as we see in Acts 4:32-35, where believers shared their possessions to ensure everyone's needs were met.\n\n## Historical Development\n\nThe Church's understanding of ${keywords[0]} has evolved throughout history:\n\n- **Early Church Period (1st-5th centuries)**: Church fathers like Augustine viewed wealth as a potential danger to the soul, emphasizing stewardship and generosity.\n\n- **Medieval Period (5th-15th centuries)**: The monastic tradition embodied vows of poverty, while broader church teaching developed around the concept of "just price" and ethical commerce.\n\n- **Reformation Era (16th century)**: Protestant reformers like Calvin developed theologies that viewed work and earning as potentially God-honoring, while still maintaining warnings against greed.\n\n- **Modern Era (20th-21st centuries)**: The rise of the prosperity gospel has represented a significant departure from historical Christian teaching, emphasizing material blessing as the primary evidence of God's favor.\n\n## Theological Problems\n\nSeveral serious theological issues arise from misunderstandings about ${keywords[0]}:\n\n1. **Distortion of God's Character**: Viewing God primarily as a dispenser of material blessings reduces the Creator to a cosmic vending machine rather than a loving Father seeking relationship.\n\n2. **Misinterpretation of Scripture**: Proponents of ${keywords[0]} often selectively cite verses while ignoring the broader biblical narrative, including Jesus' warnings about wealth.\n\n3. **The Problem of Suffering**: This teaching struggles to account for the faithful who suffer despite their devotion—including persecuted Christians worldwide and the apostles themselves, most of whom died as martyrs.\n\n4. **Confusion of Covenants**: Many incorrectly apply material promises from the Old Covenant to New Covenant believers, failing to recognize how Christ fulfilled and transformed these promises.\n\n`;
  };
  
  // Generate content for Spiritual Growth posts
  const generateSpiritualGrowthContent = (post: typeof blogPosts[0], keywords: string[]) => {
    return `## The Challenge We Face\n\nIn our hyper-connected world, finding time for ${keywords[0]} feels nearly impossible. Many Christians struggle with guilt when their spiritual practices don't match their ideals. If you've ever felt that way, you're not alone. The average American checks their phone 96 times daily—that's once every 10 minutes of waking life. Our attention is fragmented, making spiritual focus increasingly difficult.\n\n## Common Misconceptions\n\nBefore exploring solutions, let's address some unhelpful myths about ${keywords[0]}:\n\n1. **The "Perfect Morning Routine" Myth**: Many Christians believe spiritual disciplines require an elaborate morning routine with hours of uninterrupted prayer and study. While wonderful if possible, this isn't realistic for everyone, especially parents of young children or those with demanding work schedules.\n\n2. **The "All or Nothing" Fallacy**: We often believe that if we can't pray for 30 minutes, we shouldn't pray at all. This perfectionism actually prevents consistent spiritual practice.\n\n3. **The "Spiritual Comparison" Trap**: Comparing your prayer life to others (especially those in different life seasons) leads to discouragement rather than growth.\n\n## Practical Strategies\n\nHere are realistic approaches to ${keywords[0]} that work in busy, modern life:\n\n### 1. **Micro-Practices Throughout the Day**\n\nRather than viewing prayer as only a dedicated activity requiring significant time, incorporate "prayer triggers" throughout your day:\n\n- **Commute Prayer**: Dedicate your drive or public transit time to conversation with God\n- **Handwashing Prayer**: Use the 20 seconds of handwashing as a mini-prayer moment\n- **Notification Prayers**: When your phone pings, pause for a one-breath prayer before checking it\n\n### 2. **Technology as an Ally, Not an Enemy**\n\nLeverage digital tools to support rather than hinder your spiritual life:\n\n- **Audio Bible Apps**: Listen to Scripture during exercise or chores\n- **Prayer Reminder Apps**: Set specific reminders for different prayer focuses\n- **Digital Sabbath Practices**: Use apps like Digital Wellbeing or Screen Time to set boundaries\n\n### 3. **Community Accountability**\n\nDon't try to maintain spiritual disciplines in isolation:\n\n- **Prayer Partners**: Schedule a weekly 15-minute call with a friend focused solely on prayer\n- **Family Rituals**: Create simple, sustainable family prayer practices like brief mealtime or bedtime prayers\n- **Micro-Groups**: Form a group of 2-3 people who check in daily via text about spiritual practices\n\n## Biblical Wisdom for Modern Challenges\n\nScripture offers surprising insights for our distracted age:\n\n- **Jesus withdrew regularly**: Even with crowds demanding his attention, Jesus consistently withdrew to quiet places for prayer (Luke 5:16)\n- **Paul prayed continuously**: The command to "pray without ceasing" (1 Thessalonians 5:17) suggests prayer integrated throughout daily activities\n- **David's prayer rhythms**: Psalm 119:164 mentions praising God seven times daily, suggesting regular, brief moments of connection\n\n`;
  };
  
  // Generate content for Culture posts
  const generateCultureContent = (post: typeof blogPosts[0], keywords: string[]) => {
    return `## The Digital Transformation\n\nThe rise of ${keywords[0]} represents one of the most significant cultural shifts in human history. For the first time, we're witnessing an externalization of human intelligence that raises profound theological and ethical questions for Christians. This isn't merely a technological development but a potential transformation in what it means to be human.\n\n## Current Cultural Landscape\n\nAs of today, consider these realities:\n\n- The average teenager spends approximately 7.5 hours daily on screens, not including school-related use\n- Over 70% of Americans get their news primarily from social media platforms\n- AI systems now generate content indistinguishable from human-created work, including spiritual writing\n- Many churches have integrated digital tools ranging from online giving to full virtual campuses\n\nThis digital transformation has brought both opportunities and significant concerns for Christian formation.\n\n## Concerning Trends\n\nSeveral alarming patterns have emerged that deserve careful Christian reflection:\n\n1. **Algorithmic Formation**: Social media algorithms shape beliefs and attitudes more powerfully than intentional spiritual formation for many believers. These systems are designed to maximize engagement, not spiritual health.\n\n2. **Digital Escapism**: Many use technology to avoid the challenging spiritual work of silence, solitude, and confronting uncomfortable truths about themselves.\n\n3. **Community Fragmentation**: Despite greater "connectivity," research shows increasing isolation and loneliness, contradicting God's design for embodied community.\n\n4. **Attention Erosion**: The constant dopamine hits from digital interaction make it increasingly difficult to engage in deep prayer, study, and contemplation—essential practices for spiritual growth.\n\n## Biblical Wisdom for Digital Life\n\nWhile Scripture doesn't address digital technology directly, biblical principles offer guidance:\n\n1. **Stewardship of Attention**: Philippians 4:8 calls us to be intentional about what occupies our minds: *"Finally, brothers and sisters, whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable—if anything is excellent or praiseworthy—think about such things."*\n\n2. **Truth vs. Deception**: Jesus describes Himself as "the way, the truth, and the life" (John 14:6), calling His followers to pursue truth in an age of misinformation and algorithmically-tailored realities.\n\n3. **Embodied Faith**: Christianity is fundamentally incarnational, emphasizing physical presence (Hebrews 10:25). Digital tools should supplement rather than replace embodied community.\n\n4. **Countercultural Witness**: Romans 12:2 reminds us not to "conform to the pattern of this world," including its digital norms and expectations.\n\n## Practical Wisdom\n\nHere are thoughtful approaches to ${keywords[0]} that neither demonize nor idolize technology:\n\n`;
  };
  
  // Generate content for Life posts
  const generateLifeContent = (post: typeof blogPosts[0], keywords: string[]) => {
    return `## The Essential Need for Community\n\nHumans were created for connection. Genesis 2:18 reminds us that God declared, "It is not good for man to be alone"—a foundational truth that extends beyond marriage to our broader need for community. In our increasingly isolated society, Christians must recover the centrality of meaningful relationships for spiritual health.\n\nThe COVID-19 pandemic accelerated existing trends toward isolation, with profound consequences:\n\n- Rates of loneliness have doubled since the 1980s, with 61% of Americans reporting feeling lonely in recent surveys\n- Mental health challenges correlate strongly with social isolation\n- Religious participation has declined alongside community engagement\n\n## Biblical Foundations for Christian Community\n\nScripture consistently emphasizes the communal nature of faith:\n\n1. **The Trinity as Community**: Our triune God exists in perfect community—Father, Son, and Holy Spirit in eternal relationship. We're created in this image, designed for connection.\n\n2. **Early Church Example**: Acts 2:42-47 describes the first Christians devoted to fellowship, breaking bread together, and sharing possessions—a radical community that attracted others.\n\n3. **Body Metaphor**: Paul's description of the church as a body (1 Corinthians 12) emphasizes our interdependence and need for diverse gifts and perspectives.\n\n4. **Spiritual Formation Together**: Proverbs 27:17 reminds us that "as iron sharpens iron, so one person sharpens another"—our spiritual growth depends on relationships.\n\n## Common Barriers to Community\n\nSeveral obstacles make genuine community difficult for modern Christians:\n\n1. **Busyness and Scheduling**: When work, children's activities, and other commitments fill every moment, meaningful connection becomes "optional."\n\n2. **Digital Substitutes**: Social media creates an illusion of connection while often leaving us more isolated than before.\n\n3. **Mobility and Transience**: The average American moves 11.7 times in their lifetime, making long-term community building difficult.\n\n4. **Vulnerability Fears**: Authentic community requires openness about struggles, which feels risky in an age of carefully curated online personas.\n\n5. **Consumerist Approach**: Treating church as a service provider rather than a family undermines true belonging.\n\n## Practical Steps for Building Community\n\nDespite these challenges, meaningful Christian community remains possible through intentional practices:\n\n### 1. **Prioritize Depth Over Breadth**\n\nRather than maintaining numerous shallow connections, focus on developing deeper relationships with a smaller circle:\n\n- Consider joining or forming a small group that meets regularly for study, prayer, and life sharing\n- Schedule recurring "no-agenda" time with potential friends, allowing relationships to develop organically\n- Be willing to share beyond surface-level conversation, gradually opening up about real struggles and joys\n\n`;
  };
  
  // Default content structure for any category not specifically handled
  const defaultContentStructure = (post: typeof blogPosts[0], keywords: string[]) => {
    return `## Main Points\n\n${post.title} is a crucial topic for Christians to understand deeply. There are several important aspects to consider:\n\n1. **Historical Background**: The concept of ${keywords[0]} has deep roots in Christian tradition and biblical teaching. Throughout church history, believers have wrestled with how to properly understand this teaching.\n\n2. **Biblical Foundation**: Scripture addresses ${keywords[0]} in several key passages. In the Gospels, Jesus teaches us that ${post.title.toLowerCase()} involves more than surface-level understanding. Paul's epistles further develop this concept in passages like Romans 12 and Ephesians 4.\n\n3. **Modern Application**: Today's believers face unique challenges in applying these timeless truths. Our cultural context presents both obstacles and opportunities for living out these principles.\n\n## Christian Perspective\n\nFrom a Christian perspective, ${post.title.toLowerCase()} calls us to live distinctively in several ways:\n\n- It challenges worldly wisdom that often contradicts God's design\n- It invites us to experience God's presence and power in everyday situations\n- It shapes our relationships with others, particularly in how we handle conflict and differences\n\nTheologically, this topic connects to central Christian doctrines including creation, redemption, and sanctification. How we understand ${keywords[0]} reflects our broader understanding of God's character and purposes.\n\n## Scripture References\n\nThe Bible provides rich guidance on this topic:\n\n- Matthew 5-7: Jesus' Sermon on the Mount establishes core principles related to ${keywords[0]}\n- Romans 12:1-2: Paul urges believers to be "transformed by the renewing of your mind"\n- Philippians 2:5-11: Christ's example provides the ultimate pattern for our approach to ${keywords[0]}\n- James 1:22-25: We're called to be doers of the Word, not hearers only\n\nThese passages reveal that ${post.title.toLowerCase()} isn't peripheral to our faith but central to Christian discipleship.\n\n## Practical Application\n\nHow can we apply these truths in daily life? Consider these practical steps:\n\n1. Begin with prayer, asking God to transform your understanding and practice of ${keywords[0]}\n2. Study the relevant Scripture passages in their proper context\n3. Find accountability within Christian community\n4. Practice spiritual disciplines that reinforce these principles\n5. Look for opportunities to demonstrate these truths through concrete actions\n\n`;
  };

  // SEO metadata setup
  let seoTitle = "Blog Post | AskPriestAI";
  let seoDescription = "Christian insights and spiritual guidance from AskPriestAI.";
  let seoUrl = `https://www.askpriestai.com/blog/${slug}`;
  
  if (post) {
    seoTitle = `${post.title} | AskPriestAI Blog`;
    // Generate description from the first 150 characters of content
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = post.content.substring(0, 300);
    seoDescription = tempDiv.textContent?.substring(0, 150) + "..." || seoDescription;
  }

  if (loading) {
    return (
      <>
        <BlogSEO 
          title="Loading Article | AskPriestAI Blog" 
          description="Please wait while we load this article for you."
          url={seoUrl}
          today={today}
        />
        <BlogPostSkeleton />
      </>
    );
  }

  if (error) {
    return (
      <>
        <BlogSEO 
          title="Error | AskPriestAI Blog" 
          description="We encountered an error loading this article."
          url={seoUrl}
          today={today}
        />
        <BlogPostError error={error} />
      </>
    );
  }

  if (!post) {
    return (
      <>
        <BlogSEO 
          title="Post Not Found | AskPriestAI Blog" 
          description="The article you're looking for could not be found."
          url={seoUrl}
          today={today}
        />
        <BlogPostNotFound />
      </>
    );
  }

  return (
    <>
      <BlogSEO 
        title={seoTitle} 
        description={seoDescription}
        url={seoUrl}
        today={today}
      />
      <Header />
      <BlogPostContent post={post} />
    </>
  );
};

export default BlogPost;
