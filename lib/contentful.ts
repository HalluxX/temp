import { createClient } from 'contentful';
import { BlogPost, BlogPostPreview } from '@/types/blog';

// Check if Contentful credentials are available
const hasContentfulCredentials = 
  process.env.CONTENTFUL_SPACE_ID && 
  process.env.CONTENTFUL_ACCESS_TOKEN;

const client = hasContentfulCredentials ? createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
}) : null;

const previewClient = (hasContentfulCredentials && process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN) 
  ? createClient({
      space: process.env.CONTENTFUL_SPACE_ID!,
      accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN!,
      host: 'preview.contentful.com',
    })
  : null;

export async function getAllBlogPosts(preview = false): Promise<BlogPostPreview[]> {
  if (!client && !previewClient) {
    console.warn('Contentful credentials not configured. Returning empty blog posts.');
    return [];
  }
  
  const contentfulClient = preview ? previewClient : client;
  if (!contentfulClient) return [];
  
  const entries = await contentfulClient.getEntries({
    content_type: 'blogPost',
    order: ['-fields.publishDate'],
  });

  return entries.items as unknown as BlogPostPreview[];
}

export async function getBlogPost(slug: string, preview = false): Promise<BlogPost | null> {
  if (!client && !previewClient) {
    console.warn('Contentful credentials not configured. Returning null.');
    return null;
  }
  
  const contentfulClient = preview ? previewClient : client;
  if (!contentfulClient) return null;
  
  const entries = await contentfulClient.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
    limit: 1,
  });

  return (entries.items[0] as unknown as BlogPost) || null;
}

export async function getBlogPostsByTag(tag: string): Promise<BlogPostPreview[]> {
  if (!client) {
    console.warn('Contentful credentials not configured. Returning empty blog posts.');
    return [];
  }
  
  const entries = await client.getEntries({
    content_type: 'blogPost',
    'fields.tags[in]': [tag],
    order: ['-fields.publishDate'],
  });

  return entries.items as unknown as BlogPostPreview[];
}
