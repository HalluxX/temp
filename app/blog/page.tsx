import Link from 'next/link';
import Image from 'next/image';
import { getAllBlogPosts } from '@/lib/contentful';
import { BlogPostPreview } from '@/types/blog';

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 pt-44 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.sys.id} post={post} />
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No blog posts yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}

function BlogCard({ post }: { post: BlogPostPreview }) {
  const imageUrl = post.fields.featuredImage?.fields.file.url;
  
  return (
    <Link href={`/blog/${post.fields.slug}`} className="group">
      <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        {imageUrl && (
          <div className="aspect-video relative overflow-hidden">
            <Image
              src={`https:${imageUrl}`}
              alt={post.fields.featuredImage?.fields.title || post.fields.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <span>{post.fields.author}</span>
            <span className="mx-2">•</span>
            <time dateTime={post.fields.publishDate}>
              {new Date(post.fields.publishDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
          
          <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
            {post.fields.title}
          </h2>
          
          <p className="text-gray-600 line-clamp-3">
            {post.fields.excerpt}
          </p>
          
          {post.fields.tags && post.fields.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.fields.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
