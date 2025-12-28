import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { getBlogPost, getAllBlogPosts } from '@/lib/contentful';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  
  return posts.map((post) => ({
    slug: post.fields.slug,
  }));
}

// Rich text rendering options
const richTextOptions = {
  renderMark: {
    [MARKS.BOLD]: (text: any) => <strong className="font-bold">{text}</strong>,
    [MARKS.ITALIC]: (text: any) => <em className="italic">{text}</em>,
    [MARKS.CODE]: (text: any) => (
      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">{text}</code>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
      <p className="mb-6 text-gray-700 leading-relaxed">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node: any, children: any) => (
      <h1 className="text-3xl font-bold text-gray-900 mb-6 mt-8">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node: any, children: any) => (
      <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node: any, children: any) => (
      <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">{children}</h3>
    ),
    [BLOCKS.UL_LIST]: (node: any, children: any) => (
      <ul className="list-disc list-inside mb-6 space-y-2">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node: any, children: any) => (
      <ol className="list-decimal list-inside mb-6 space-y-2">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node: any, children: any) => (
      <li className="text-gray-700">{children}</li>
    ),
    [BLOCKS.QUOTE]: (node: any, children: any) => (
      <blockquote className="border-l-4 border-blue-500 pl-6 my-6 italic text-gray-600">
        {children}
      </blockquote>
    ),
  },
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const imageUrl = post.fields.featuredImage?.fields.file.url;

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Back to blog link */}
        <Link 
          href="/blog" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          ← Back to Blog
        </Link>

        <article className="max-w-4xl mx-auto">
          {/* Featured Image */}
          {imageUrl && (
            <div className="aspect-video relative mb-8 rounded-lg overflow-hidden">
              <Image
                src={`https:${imageUrl}`}
                alt={post.fields.featuredImage?.fields.title || post.fields.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {post.fields.title}
            </h1>
            
            <div className="flex items-center text-gray-600 mb-4">
              <span className="font-medium">{post.fields.author}</span>
              <span className="mx-3">•</span>
              <time dateTime={post.fields.publishDate}>
                {new Date(post.fields.publishDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>

            {post.fields.excerpt && (
              <p className="text-xl text-gray-600 leading-relaxed">
                {post.fields.excerpt}
              </p>
            )}

            {post.fields.tags && post.fields.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {post.fields.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {documentToReactComponents(post.fields.content, richTextOptions)}
          </div>
        </article>
      </div>
    </div>
  );
}
