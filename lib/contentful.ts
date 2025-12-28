import { createClient } from 'contentful';
import { BlogPost, BlogPostPreview } from '@/types/blog';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN!,
  host: 'preview.contentful.com',
});

export async function getAllBlogPosts(preview = false): Promise<BlogPostPreview[]> {
  const contentfulClient = preview ? previewClient : client;
  
  const entries = await contentfulClient.getEntries({
    content_type: 'blogPost',
    order: ['-fields.publishDate'],
  });

  return entries.items as unknown as BlogPostPreview[];
}

export async function getBlogPost(slug: string, preview = false): Promise<BlogPost | null> {
  const contentfulClient = preview ? previewClient : client;
  
  const entries = await contentfulClient.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
    limit: 1,
  });

  return (entries.items[0] as unknown as BlogPost) || null;
}

export async function getBlogPostsByTag(tag: string): Promise<BlogPostPreview[]> {
  const entries = await client.getEntries({
    content_type: 'blogPost',
    'fields.tags[in]': [tag],
    order: ['-fields.publishDate'],
  });

  return entries.items as unknown as BlogPostPreview[];
}
