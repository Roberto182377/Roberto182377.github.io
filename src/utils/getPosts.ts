const allMarkdownModules = import.meta.glob<{
  frontmatter: {
    title?: string;
    description?: string;
    date?: string;
    readTime?: string;
    image?: string;
    slug?: string;
  };
  default: any;
}>('../content/parcial01/*.md', { eager: true });

export interface Post {
  title: string;
  description: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  href: string;
}

/**
 * Get all posts from the content directory
 */
export function getAllPosts(): Post[] {
  const posts: Post[] = [];

  for (const filePath in allMarkdownModules) {
    const module = allMarkdownModules[filePath];
    
    if (!module) {
      console.warn(`Failed to load module: ${filePath}`);
      continue;
    }

    const frontmatter = module.frontmatter || {};
    
    const pathMatch = filePath.match(/\/([^/]+)\.md$/);
    const fileName = pathMatch ? pathMatch[1] : '';
    
    const slug = frontmatter.slug || fileName;
    
    if (!slug) {
      console.warn(`No slug found for file: ${filePath}`);
      continue;
    }
    
    posts.push({
      title: frontmatter.title || '',
      description: frontmatter.description || '',
      date: frontmatter.date || '',
      readTime: frontmatter.readTime || '',
      image: frontmatter.image || '/assets/images/posts/post1.jpg',
      slug: slug,
      href: `/parcial01/${slug}`,
    });
  }

  // Sort by slug (act1, act2, act10...)
  posts.sort((a, b) =>
    a.slug.localeCompare(b.slug, undefined, { numeric: true })
  );


  return posts;
}

/**
 * Get a single post by slug
 */
export function getPostBySlug(slug: string): {
  frontmatter: {
    title?: string;
    description?: string;
    date?: string;
    readTime?: string;
    image?: string;
    slug?: string;
  };
  Content: any;
  slug: string;
} | null {
  for (const filePath in allMarkdownModules) {
    const module = allMarkdownModules[filePath];
    
    if (!module) {
      continue;
    }

    const frontmatter = module.frontmatter || {};
    
    const pathMatch = filePath.match(/\/([^/]+)\.md$/);
    const fileName = pathMatch ? pathMatch[1] : '';
    const fileSlug = frontmatter.slug || fileName;

    if (fileSlug === slug) {
      return {
        frontmatter,
        Content: module.default,
        slug: fileSlug,
      };
    }
  }

  return null;
}

/**
 * Get all post slugs for static generation
 */
export function getAllPostSlugs(): string[] {
  return getAllPosts().map((post) => post.slug);
}