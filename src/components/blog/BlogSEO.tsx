
import React from "react";
import { Helmet } from "react-helmet";

interface BlogSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  today: string;
}

export const BlogSEO: React.FC<BlogSEOProps> = ({
  title = "Christian Insights Blog | Biblical Wisdom and Spiritual Growth | AskPriestAI",
  description = "Explore Christian articles on faith, prayer, biblical wisdom, and spiritual growth. Get expert insights on modern faith challenges and practical spiritual guidance.",
  keywords = "christian blog, bible study, prayer guides, spiritual growth, faith journey, christian community, biblical wisdom",
  url = "https://www.askpriestai.com/blog",
  today
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="date" content={today} />
    </Helmet>
  );
};
