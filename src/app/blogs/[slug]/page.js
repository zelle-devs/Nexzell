import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
// Using the @ alias ensures the path works regardless of folder depth
import { blogData, getLargeImage, blogAuthor, SITE_URL, SITE_NAME } from '@/components/BlogPageComponents/NexzellMainBlogsWFilters/blogData';
import styles from './BlogPost.module.css';

// Generate static routes for all blog posts at build time
export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

// Generate SEO Metadata for each blog post
export async function generateMetadata({ params }) {
  // ✅ FIX 1: Await params for Next.js 15+
  const resolvedParams = await params;
  const post = blogData.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.seoTitle,
    description: post.metaDescription,
    keywords: post.keywords.join(', '),
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      url: `${SITE_URL}/blogs/${post.slug}`,
      siteName: SITE_NAME,
      images: [
        {
          url: getLargeImage(post.image),
          width: 1200,
          height: 630,
          alt: post.imageAlt || post.title,
        },
      ],
      type: 'article',
    },
  };
}

// Helper function to render the rich content blocks
const renderContentBlock = (block, index) => {
  switch (block.type) {
    case 'p':
      return <p key={index} className={styles.paragraph}>{block.text}</p>;
    case 'h2':
      return <h2 key={index} className={styles.h2}>{block.text}</h2>;
    case 'h3':
      return <h3 key={index} className={styles.h3}>{block.text}</h3>;
    case 'ul':
      return (
        <ul key={index} className={styles.list}>
          {block.items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      );
    case 'ol':
      return (
        <ol key={index} className={styles.list}>
          {block.items.map((item, i) => <li key={i}>{item}</li>)}
        </ol>
      );
    case 'quote':
      return (
        <blockquote key={index} className={styles.quote}>
          {block.text}
        </blockquote>
      );
    case 'callout':
      return (
        <div key={index} className={styles.callout}>
          <h4 className={styles.calloutTitle}>{block.title}</h4>
          <p className={styles.calloutText}>{block.text}</p>
        </div>
      );
    default:
      return null;
  }
};

export default async function BlogPost({ params }) {
  // ✅ FIX 1: Await params for Next.js 15+
  const resolvedParams = await params;
  const post = blogData.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className={styles.articleWrapper}>
      {/* Hero Section */}
      <header className={styles.heroSection}>
        <div className={styles.heroImageWrapper}>
          <img 
            src={getLargeImage(post.image)} 
            alt={post.imageAlt || post.title} 
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        
        <div className={styles.heroContent}>
          <Link href="/blogs" className={styles.backLink}>
            <ArrowLeft size={16} /> Back to Blogs
          </Link>
          
          <div className={styles.categoryBadge}>
            <span className={styles.badgeDot}></span>
            {post.category}
          </div>
          
          <h1 className={styles.title}>{post.title}</h1>
          
          <div className={styles.metaGroup}>
            <div className={styles.metaItem}>
              <Calendar size={16} />
              <time dateTime={post.isoDate}>{post.date}</time>
            </div>
            <div className={styles.metaItem}>
              <Clock size={16} />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className={styles.contentContainer}>
        <div className={styles.contentBody}>
          {post.content.map((block, index) => renderContentBlock(block, index))}
        </div>

        {/* Author Box */}
        <div className={styles.authorBox}>
          <div className={styles.authorInfo}>
            <h4 className={styles.authorName}>{blogAuthor.name}</h4>
            <p className={styles.authorRole}>{blogAuthor.role}</p>
            <p className={styles.authorBio}>{blogAuthor.bio}</p>
          </div>
        </div>

        {/* FAQs Section */}
        {post.faqs && post.faqs.length > 0 && (
          <div className={styles.faqSection}>
            <h2 className={styles.faqHeading}>Frequently Asked Questions</h2>
            <div className={styles.faqList}>
              {post.faqs.map((faq, index) => (
                <div key={index} className={styles.faqItem}>
                  <h3 className={styles.faqQuestion}>{faq.q}</h3>
                  <p className={styles.faqAnswer}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}