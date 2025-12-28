import { Document } from '@contentful/rich-text-types';

export interface BlogPost {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  fields: {
    title: string;
    slug: string;
    excerpt: string;
    content: Document;
    featuredImage?: {
      fields: {
        file: {
          url: string;
        };
        title: string;
      };
    };
    author: string;
    publishDate: string;
    tags?: string[];
  };
}

export interface BlogPostPreview {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  fields: {
    title: string;
    slug: string;
    excerpt: string;
    featuredImage?: {
      fields: {
        file: {
          url: string;
        };
        title: string;
      };
    };
    author: string;
    publishDate: string;
    tags?: string[];
  };
}
