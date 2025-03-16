
// Blog post data with current dates - sorted by date from newest to oldest
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  keywords: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 17,
    title: "Is AI the Mark of the Beast? Biblical Prophecy in the Digital Age",
    excerpt: "Exploring the unsettling parallels between Revelation's warnings and our increasing dependence on artificial intelligence. Are we sleepwalking into prophecy?",
    date: "2025-04-05",
    readTime: "14 min read",
    category: "Prophecy",
    slug: "ai-mark-of-beast-biblical-prophecy",
    keywords: "mark of the beast, AI danger, revelation prophecy, end times technology, antichrist system"
  },
  {
    id: 16,
    title: "What Jesus REALLY Meant by 'Turn the Other Cheek' - It's Not Passive",
    excerpt: "The radical misunderstanding of Christ's teaching on nonviolence has neutered Christian influence. Discover the revolutionary truth behind these words.",
    date: "2025-04-02",
    readTime: "12 min read",
    category: "Scripture",
    slug: "what-jesus-really-meant-turn-other-cheek",
    keywords: "turn other cheek, Jesus teaching, christian resistance, nonviolence, radical jesus"
  },
  {
    id: 15,
    title: "Your Children Are Being Spiritually Formed By TikTok, Not Scripture",
    excerpt: "The alarming reality of how social media algorithms are shaping your child's worldview more than Sunday School ever will. What parents must know now.",
    date: "2025-03-28",
    readTime: "9 min read",
    category: "Parenting",
    slug: "children-spiritually-formed-tiktok-not-scripture",
    keywords: "christian parenting, social media dangers, tiktok influence, digital discipleship, protecting children"
  },
  {
    id: 14,
    title: "The 'Good Person' Delusion: Why Moral People Still Need Salvation",
    excerpt: "The dangerous lie that being a 'good person' is enough for God. Why moral behavior without Christ leads to eternal separation, regardless of intentions.",
    date: "2025-03-25",
    readTime: "11 min read",
    category: "Salvation",
    slug: "good-person-delusion-moral-people-need-salvation",
    keywords: "salvation requirements, good people hell, morality without god, righteousness, gospel truth"
  },
  {
    id: 13,
    title: "When Prayer Feels Like Talking to the Ceiling: Confronting Divine Silence",
    excerpt: "The crisis of faith when God seems absent. Honest reflections on what to do when prayers go unanswered and heaven feels closed.",
    date: "2025-03-22",
    readTime: "10 min read",
    category: "Prayer",
    slug: "prayer-feels-like-talking-to-ceiling",
    keywords: "unanswered prayer, god's silence, prayer doubts, when god feels distant, spiritual drought"
  },
  {
    id: 12,
    title: "The Modern Church's Uncomfortable Compromise with Sexual Ethics",
    excerpt: "How cultural pressure is causing many churches to silently abandon biblical sexual ethics. The coming division between faithful and accommodating Christianity.",
    date: "2025-03-20",
    readTime: "13 min read",
    category: "Ethics",
    slug: "modern-church-compromise-sexual-ethics",
    keywords: "biblical sexuality, christian sexual ethics, church compromise, cultural christianity, scriptural authority"
  },
  {
    id: 11,
    title: "Wealth Gospel or Prosperity Heresy? The Dangerous Theology Infecting Christianity",
    excerpt: "The twisted theology that equates faith with financial success. Why this popular teaching contradicts Christ and harms vulnerable believers.",
    date: "2025-03-18",
    readTime: "15 min read",
    category: "Theology",
    slug: "wealth-gospel-prosperity-heresy",
    keywords: "prosperity gospel, wealth theology, false teaching, biblical economics, christian materialism"
  },
  {
    id: 10,
    title: "Did Jesus REALLY Claim to be God? The Definitive Answer to Skeptics",
    excerpt: "Addressing the common claim that Jesus never claimed divinity. The overwhelming biblical evidence that Christ explicitly identified as God incarnate.",
    date: "2025-03-17",
    readTime: "14 min read",
    category: "Apologetics",
    slug: "did-jesus-really-claim-to-be-god",
    keywords: "jesus divinity, christ god claims, jesus deity, apologetics, jesus identity"
  },
  {
    id: 18,
    title: "The Disturbing Truth About 'Christian' Entertainment You're Consuming",
    excerpt: "Many popular 'faith-based' shows and movies subtly undermine core Christian beliefs. Learn to discern the dangerous messages hiding in plain sight.",
    date: "2025-03-15",
    readTime: "8 min read",
    category: "Culture",
    slug: "disturbing-truth-christian-entertainment",
    keywords: "christian media, faith entertainment, media discernment, biblical worldview, christian movies"
  },
  {
    id: 19,
    title: "Why 'Just Pray About It' Can Be Terrible Spiritual Advice",
    excerpt: "The problematic nature of shallow spiritual platitudes. When prayer alone isn't the answer and what Scripture actually teaches about faithful action.",
    date: "2025-03-08",
    readTime: "7 min read",
    category: "Spiritual Growth",
    slug: "why-just-pray-about-it-terrible-advice",
    keywords: "prayer misconceptions, christian action, spiritual platitudes, faith and works, practical christianity"
  },
  {
    id: 7,
    title: "Understanding the Beatitudes: Christ's Path to True Happiness",
    excerpt: "An in-depth exploration of Jesus' Beatitudes and how these counterintuitive principles offer a roadmap to genuine fulfillment.",
    date: "2025-03-16",
    readTime: "11 min read",
    category: "Bible Study",
    slug: "understanding-the-beatitudes",
    keywords: "beatitudes, sermon on the mount, jesus teachings, christian happiness, biblical promises"
  },
  {
    id: 6,
    title: "Digital Discipleship: Using Technology to Grow Faith",
    excerpt: "How modern technology and AI can be leveraged as tools for spiritual development without compromising authentic faith practice.",
    date: "2025-03-14",
    readTime: "7 min read",
    category: "Technology",
    slug: "digital-discipleship-technology",
    keywords: "christian technology, digital faith, AI spiritual tools, online church, faith apps"
  },
  {
    id: 8,
    title: "Spiritual Disciplines for a Distracted Age",
    excerpt: "Rediscovering ancient Christian practices that can help believers maintain focus in our attention-fragmented modern world.",
    date: "2025-03-12",
    readTime: "9 min read",
    category: "Spiritual Growth",
    slug: "spiritual-disciplines-for-a-distracted-age",
    keywords: "spiritual disciplines, christian focus, meditation, contemplative prayer, christian habits"
  },
  {
    id: 3,
    title: "Prayer Techniques for Busy Lives",
    excerpt: "Simple but effective ways to maintain a prayer life when your schedule seems impossible. Practical methods for spiritual connection.",
    date: "2025-03-10",
    readTime: "6 min read",
    category: "Prayer",
    slug: "prayer-techniques-busy-lives",
    keywords: "prayer methods, busy christian, prayer life, spiritual disciplines, christian prayer"
  },
  {
    id: 5,
    title: "Finding Peace in Uncertain Times",
    excerpt: "Biblical wisdom for maintaining spiritual peace during periods of personal or global uncertainty. Practical guidance for anxious hearts.",
    date: "2025-03-05",
    readTime: "9 min read",
    category: "Devotional",
    slug: "finding-peace-uncertain-times",
    keywords: "christian peace, anxiety, biblical peace, uncertain times, spiritual peace"
  },
  {
    id: 9,
    title: "Faith and Mental Health: A Christian Perspective",
    excerpt: "How biblical wisdom and modern psychology can work together to support mental wellbeing while honoring spiritual truth.",
    date: "2025-03-01",
    readTime: "10 min read",
    category: "Wellbeing",
    slug: "faith-and-mental-health",
    keywords: "christian mental health, faith and psychology, biblical counseling, christian therapy, emotional wellbeing"
  },
  {
    id: 1,
    title: "Understanding Biblical Context: Why It Matters",
    excerpt: "Discover how understanding the historical and cultural context can transform your interpretation of scripture and deepen your faith journey.",
    date: "2025-02-28",
    readTime: "8 min read",
    category: "Bible Study",
    slug: "understanding-biblical-context",
    keywords: "biblical interpretation, scripture context, biblical history, hermeneutics, bible study methods"
  },
  {
    id: 4,
    title: "The Role of Community in Spiritual Growth",
    excerpt: "Why fellowship with other believers is essential for developing a stronger faith and maintaining spiritual health in an isolated world.",
    date: "2025-02-05",
    readTime: "10 min read",
    category: "Community",
    slug: "community-spiritual-growth",
    keywords: "christian community, church fellowship, spiritual growth, faith community, christian relationships"
  },
  {
    id: 2,
    title: "Modern Faith Challenges and How to Navigate Them",
    excerpt: "A look at how believers can stay true to their faith while navigating complex social and ethical questions in today's rapidly changing world.",
    date: "2025-01-15",
    readTime: "12 min read",
    category: "Faith Journey",
    slug: "modern-faith-challenges",
    keywords: "christian challenges, faith questions, modern christianity, secular society, christian ethics"
  }
];
