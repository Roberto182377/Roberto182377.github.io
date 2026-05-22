// Cambiamos el patrón a *.{md,astro} para leer ambos tipos de archivos
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
}>('../content/actividadesSI/*.{md,astro}', { eager: true });

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
    
    // Actualizamos el regex para que soporte tanto .md como .astro
    const pathMatch = filePath.match(/\/([^/]+)\.(md|astro)$/);
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
      href: `/actividadesSI/${slug}`,
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
    
    // Actualizamos el regex aquí también
    const pathMatch = filePath.match(/\/([^/]+)\.(md|astro)$/);
    const fileName = pathMatch ? pathMatch[1] : '';
    const fileSlug = frontmatter.slug || fileName;

    if (fileSlug === slug) {
      return {
        frontmatter,
        Content: module.default, // module.default funciona como componente renderizable para ambos
        slug: fileSlug,
      };
    }
  }

  return null;
}