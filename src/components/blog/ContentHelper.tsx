
import React from "react";
import { Quote } from "lucide-react";

// Function to create slug IDs from headings
export const createSlug = (text: string) => {
  return text.toLowerCase().replace(/[^\w]+/g, '-');
};

// Extract headings from content
export const extractHeadings = (content: string) => {
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

// Generate content based on post title and keywords
const generateTopicSpecificContent = (sectionTitle: string, postTitle: string, postContent: string): string => {
  // Extract keywords from the post title and content
  const combinedText = `${postTitle} ${postContent.substring(0, 1000)}`.toLowerCase();
  
  // Detect the main topic from title and content
  const topics = {
    children: /children|kids|youth|young|parenting|family|parent/i.test(combinedText),
    technology: /technology|digital|online|internet|social media|tiktok|instagram|facebook|screen/i.test(combinedText),
    prayer: /prayer|praying|pray|worship|devotion/i.test(combinedText),
    scripture: /scripture|bible|word of god|verse|biblical|gospel/i.test(combinedText),
    relationships: /relationship|marriage|dating|friend|community/i.test(combinedText),
    church: /church|congregation|worship|ministry|pastor/i.test(combinedText),
    faith: /faith|belief|trust|doubt|question/i.test(combinedText),
  };
  
  if (sectionTitle === "Practical Wisdom") {
    if (topics.children && topics.technology) {
      return `
Here are practical ways to help children develop spiritual discernment in a digital age:

### 1. **Create Sacred Spaces and Times**

- **Device-Free Zones**: Designate specific areas in your home (like the dinner table and bedrooms) as completely technology-free
- **Family Devotional Time**: Establish a daily or weekly time where phones are put away and Scripture is opened together
- **Digital Sabbath**: Practice regular technology fasts as a family—perhaps Sunday afternoons or one evening per week

### 2. **Model Healthy Digital Habits**

- **Prioritize Presence**: Children learn more from what you do than what you say—demonstrate putting relationships above screens
- **Process Together**: When you encounter concerning content, use it as a teaching opportunity rather than just restricting access
- **Visible Boundaries**: Let your children see you setting and respecting your own technology limits

### 3. **Create Meaningful Alternatives**

- **Nature Exploration**: Regular outdoor activities help children develop wonder and appreciation for God's creation
- **Service Projects**: Engage in hands-on ministry that helps children experience the joy of serving others
- **Creative Expression**: Encourage art, music, and storytelling as ways to process and express faith

### 4. **Develop Critical Thinking Skills**

- **Media Literacy**: Teach children to ask "Who created this content and why?" when consuming media
- **Scripture as Foundation**: Help them develop the habit of filtering messages through biblical truth
- **Question Prompts**: Equip them with questions like "What does God think about this?" and "How does this align with what we believe?"

Remember that nurturing faith in children is a long-term investment. These practices create an environment where genuine spiritual formation can flourish even amid powerful digital influences.`;
    } 
    else if (topics.technology) {
      return `
Here are practical ways to maintain spiritual health in our digital world:

### 1. **Intentional Content Consumption**

- **Content Audit**: Regularly evaluate which voices are shaping your thinking through social media and entertainment
- **Follow Wisely**: Curate your social feeds to include accounts that strengthen rather than weaken your faith
- **Quality Over Quantity**: Prioritize depth over breadth in your information diet

### 2. **Digital Boundaries**

- **Time Limits**: Use screen time management tools to set healthy limits on apps and websites
- **Notification Management**: Disable non-essential notifications to reduce reactive checking
- **Device-Free Times**: Designate specific hours (especially mornings and before bed) as screen-free

### 3. **Spiritual Disciplines for Digital Age**

- **Digital Sabbath**: Take regular breaks from technology to reset your attention and focus on God
- **Scripture First**: Make reading the Bible your first screen activity of the day, not checking messages
- **Prayer Triggers**: Use common digital activities (like unlocking your phone) as reminders to pray

### 4. **Community Accountability**

- **Shared Commitments**: Join with friends in setting and maintaining healthy digital boundaries
- **Face-to-Face Priority**: Intentionally prioritize in-person community over digital connection
- **Vulnerable Conversations**: Create spaces to honestly discuss digital struggles with trusted believers

Digital tools themselves are neutral—it's how we use them that matters. These practices can help ensure technology serves your spiritual growth rather than hinders it.`;
    }
    else if (topics.prayer) {
      return `
Here are practical approaches to deepen your prayer life:

### 1. **Structured Prayer Practices**

- **Prayer Cycles**: Assign different prayer focuses to different days of the week
- **Prayer Lists**: Keep digital or physical lists of prayer requests to revisit regularly
- **Prayer Walking**: Combine physical movement with prayer, perhaps in your neighborhood or workplace

### 2. **Contemplative Prayer Methods**

- **Lectio Divina**: Read Scripture slowly, listening for what God might be highlighting
- **Centering Prayer**: Practice sitting in silence, using a sacred word to refocus when distracted
- **Examen**: Review your day with God, noticing moments of grace and growth areas

### 3. **Praying Scripture**

- **Pray the Psalms**: Use the prayer book of the Bible as your own words to God
- **Personalize Passages**: Insert your name into biblical prayers like Ephesians 1:17-19
- **Scripture Memorization**: Store key verses in your heart to draw upon in prayer

### 4. **Communal Prayer Practices**

- **Prayer Partners**: Establish regular times to pray with another believer
- **Family Prayer Rhythms**: Create age-appropriate ways to pray together as a household
- **Corporate Prayer**: Participate fully in your church's prayer gatherings

Remember that prayer is primarily about relationship, not technique. These practices are meant to help you connect more deeply with God, not become mechanical obligations.`;
    }
    else if (topics.scripture) {
      return `
Here are practical ways to deepen your engagement with Scripture:

### 1. **Structured Bible Reading**

- **Reading Plans**: Follow a structured plan that guides you through books or themes
- **Chronological Method**: Read the Bible in historical order to see how God's story unfolds
- **Whole-Book Approach**: Read entire books in one sitting to grasp their complete message

### 2. **Study Methods**

- **Observation-Interpretation-Application**: First note what the text says, then what it means, then how it applies
- **Cross-Reference Study**: Trace themes and concepts across Scripture using tools like a concordance
- **Word Studies**: Examine key terms in their original languages using accessible resources

### 3. **Scripture Engagement Beyond Reading**

- **Audio Bible**: Listen to Scripture during commutes or chores
- **Scripture Memorization**: Commit key passages to memory, perhaps one verse per week
- **Bible Journaling**: Combine creative expression with Scripture reflection

### 4. **Community-Based Scripture Practices**

- **Small Group Study**: Discuss and apply Scripture with other believers regularly
- **Scripture Conversation**: Make Bible discussion a natural part of your relationships
- **Accountability Partners**: Check in weekly about insights from personal Bible study

Remember that the goal of Scripture engagement isn't merely information but transformation. Approach the Bible expecting to encounter the living God through its words.`;
    }
    else {
      // Default practical wisdom for other topics
      return `
Here are practical ways to apply biblical wisdom to this topic:

### 1. **Scripture-Based Discernment**

- **Biblical Foundation**: Begin with what Scripture clearly teaches about this subject
- **Prayer for Wisdom**: Ask God specifically for insight and understanding (James 1:5)
- **Seeking Counsel**: Consult mature believers who demonstrate godly wisdom

### 2. **Practical Application**

- **Start Small**: Begin with manageable steps that move you in the right direction
- **Accountability**: Share your intentions with someone who will lovingly check your progress
- **Habit Formation**: Build new patterns through consistent small actions over time

### 3. **Community Engagement**

- **Shared Learning**: Discuss these principles in a small group setting
- **Mentoring Relationships**: Seek guidance from those with experience in this area
- **Service Opportunities**: Find ways to use this knowledge to benefit others

### 4. **Ongoing Growth**

- **Regular Assessment**: Schedule times to reflect on your growth in this area
- **Resource Investment**: Identify books, podcasts, or courses that provide deeper understanding
- **Teaching Others**: Solidify your own learning by sharing it appropriately with others

Remember that wisdom isn't just knowledge—it's applied knowledge that honors God and serves others. These practices can help turn biblical insights into lived reality.`;
    }
  } 
  else if (sectionTitle === "Biblical Wisdom") {
    if (topics.children && topics.technology) {
      return `
Scripture provides timeless principles that apply directly to raising children in a digital age:

1. **Parents as Primary Disciplers**: Deuteronomy 6:6-7 instructs parents to impress God's commands on their children and "talk about them when you sit at home and when you walk along the road." In today's context, this includes guiding children's digital experiences and helping them interpret messages they receive online.

2. **Guarding Hearts and Minds**: Philippians 4:8 calls believers to focus on whatever is true, noble, right, pure, lovely, admirable, excellent, and praiseworthy. This principle provides criteria for evaluating digital content that children consume.

3. **The Power of Influence**: 1 Corinthians 15:33 warns that "bad company corrupts good character." Today's "company" includes digital influences through social media personalities and content creators who may shape children's values and behavior.

4. **Biblical Authority over Cultural Authority**: Romans 12:2 instructs believers not to "conform to the pattern of this world, but be transformed by the renewing of your mind." Children need guidance to recognize when digital culture contradicts biblical teaching.

5. **The Value of Wisdom Literature**: Proverbs offers practical guidance for navigating complex moral decisions. Teaching children to apply these principles to their digital choices builds discernment that algorithms cannot provide.

These biblical foundations provide the framework for helping children develop a Christ-centered worldview that can withstand the powerful influence of digital content.`;
    }
    else if (topics.technology) {
      return `
Scripture provides timeless wisdom that applies powerfully to our digital age:

1. **Stewardship of Attention**: Jesus taught that "where your treasure is, there your heart will be also" (Matthew 6:21). In today's context, our "treasure" includes our attention—a finite resource that digital platforms compete aggressively to capture.

2. **Guarding Heart and Mind**: Philippians 4:8 instructs us to focus on whatever is true, noble, right, pure, lovely, admirable, excellent, and praiseworthy. This principle should guide our digital consumption and creation.

3. **Wise Speech**: Proverbs 18:21 reminds us that "the tongue has the power of life and death," while James 1:19 calls believers to be "quick to listen, slow to speak and slow to become angry." These principles apply directly to our online communication.

4. **Rest and Sabbath**: The biblical principle of Sabbath (Exodus 20:8-11) speaks to our need for regular, intentional rest from digital stimulation and constant connectivity.

5. **Community Over Isolation**: Hebrews 10:24-25 urges believers not to give up meeting together, emphasizing the irreplaceable value of physical presence in an age of virtual connection.

These biblical principles provide a foundation for flourishing in the digital age while maintaining spiritual vitality and Christ-centered perspective.`;
    }
    else {
      // Default biblical wisdom for other topics
      return `
Scripture provides timeless guidance that remains relevant today:

1. **God's Unchanging Truth**: Hebrews 13:8 reminds us that "Jesus Christ is the same yesterday and today and forever." While cultures and circumstances change, God's character and truth remain constant.

2. **Scripture as Our Foundation**: 2 Timothy 3:16-17 teaches that "All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness, so that the servant of God may be thoroughly equipped for every good work." The Bible remains our primary source for understanding God's perspective.

3. **Wisdom Beyond Information**: Proverbs 1:7 states that "The fear of the LORD is the beginning of knowledge." True wisdom starts with reverence for God, not merely accumulating information or following cultural trends.

4. **Living Counter-Culturally**: Romans 12:2 instructs believers: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind." Christians are called to a distinctly different approach based on biblical principles.

5. **Grace and Truth Together**: John 1:14 describes Jesus as "full of grace and truth." Following his example means holding firmly to God's truth while extending his grace to others—especially those with whom we disagree.

These biblical principles provide the framework for approaching this topic with both faithfulness to Scripture and relevance to current challenges.`;
    }
  }
  else if (sectionTitle === "Conclusion") {
    if (topics.children && topics.technology) {
      return `
As we navigate the challenging intersection of childhood faith formation and digital influence, remember that technology itself is neutral—it's how we use and manage it that matters. The primary influence in children's spiritual development has always been and will continue to be loving adults who consistently model and teach faith.

Rather than approaching digital media with fear, we can embrace our role as guides, helping children develop the discernment they need to navigate an increasingly complex world. This includes both setting appropriate boundaries and engaging in meaningful conversations about the content they encounter.

Scripture reminds us that God has given us "everything we need for a godly life" (2 Peter 1:3). This includes wisdom for parenting in the digital age. By grounding our approach in biblical principles rather than reactive fear, we can help children develop a authentic faith that withstands the test of time—regardless of what new technologies emerge.

May we raise a generation that leverages the best of technology while remaining firmly rooted in the timeless truths of Scripture and the transforming power of relationship with Jesus Christ.`;
    }
    else if (topics.technology) {
      return `
As we navigate faith in our digital age, let's remember that technology itself is morally neutral—it's how we use these tools that matters. Throughout history, God's people have faced the challenge of living faithfully amid cultural and technological changes, from the printing press to radio to television, and now digital media.

What remains constant is our call to be "in the world but not of it" (John 17:14-16). This means neither rejecting technology outright nor embracing it uncritically, but instead developing a thoughtful Christian approach that puts these powerful tools in their proper place.

Digital tools can either enhance or hinder our spiritual growth, depending on how we use them. By establishing wise boundaries, practicing intentional engagement, and prioritizing embodied community, we can harness technology's benefits while avoiding its pitfalls.

May we be people who engage wisely with technology, maintaining our primary allegiance to Christ rather than digital culture, and demonstrating to a watching world what it means to use these powerful tools in ways that honor God and benefit others.`;
    }
    else {
      // Default conclusion for other topics
      return `
As we conclude this exploration, let's remember that faithfulness to Christ has always required wisdom to apply timeless truth to changing circumstances. The principles we've discussed aren't just theological concepts but invitations to a transformed life that reflects God's kingdom in our world.

Scripture doesn't provide explicit instructions for every situation we face, but it does give us a framework of wisdom through which we can approach any challenge. By grounding ourselves in God's Word, seeking wisdom through prayer and community, and applying these insights with both grace and truth, we can navigate even the most complex issues.

The journey of faith isn't about having all the answers but about trusting the One who does. As we seek to follow Christ faithfully in this area, we can rest in his promise to guide us by his Spirit into all truth (John 16:13).

May this reflection spark not just greater understanding but deeper commitment to living out these truths in your daily life, for the glory of God and the good of others.`;
    }
  }
  
  return '';
};

// Complete specific unfinished sections in content (only if they match known section titles)
export const completeUnfinishedSections = (content: string, postTitle: string = ""): string => {
  const lines = content.split('\n');
  const completedLines = [...lines];
  
  // Look for specific section headers that might be incomplete
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Only process if this is a section header
    if (line.startsWith('## ')) {
      const sectionTitle = line.replace('## ', '');
      
      // Check if this is the last line or if the next line is another header or empty
      const isLastLine = i === lines.length - 1;
      const nextLineIsHeader = !isLastLine && (lines[i+1].startsWith('## ') || lines[i+1].startsWith('# '));
      const nextLinesEmpty = !isLastLine && lines[i+1].trim() === '';
      
      // Only complete the section if it's empty AND it's one of our known section types
      if ((isLastLine || nextLineIsHeader || nextLinesEmpty) && 
          (sectionTitle === "Practical Wisdom" || sectionTitle === "Biblical Wisdom" || sectionTitle === "Conclusion")) {
        
        // Generate content based on the post title and existing content
        const generatedContent = generateTopicSpecificContent(sectionTitle, postTitle, content);
        
        // Only insert the generated content if we actually have content to insert
        if (generatedContent) {
          completedLines.splice(i+1, 0, generatedContent);
        }
      }
    }
  }
  
  return completedLines.join('\n');
};

// Custom components for ReactMarkdown to style different elements
export const createComponents = (content: string) => {
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
