
import { BlogPost } from "./types";
import { biblePosts } from "./biblePosts";
import { spiritualGrowthPosts } from "./spiritualGrowthPosts";
import { culturePosts } from "./culturePosts";
import { theologicalPosts } from "./theologicalPosts";
import { lifePosts } from "./lifePosts";

// Combine all blog posts from different categories
export const blogPosts: BlogPost[] = [
  ...biblePosts,
  ...spiritualGrowthPosts,
  ...culturePosts,
  ...theologicalPosts,
  ...lifePosts
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// Re-export the interface for use elsewhere in the application
export type { BlogPost } from "./types";
