import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ 
  post, 
  variant = 'default', // 'default', 'featured', 'compact'
  className = "" 
}) => {
  const {
    id,
    title,
    excerpt,
    content,
    image,
    author,
    publishedDate,
    category,
    slug,
    readTime,
    tags = []
  } = post;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (variant === 'compact') {
    return (
      <article className={`card group ${className}`}>
        <div className="flex gap-4">
          <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg">
            <Link href={`/blog/${slug || id}`}>
              <Image
                src={image || '/cosmetic.jpg'}
                alt={title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              {category && (
                <span className="text-gold font-medium uppercase tracking-wide">
                  {category}
                </span>
              )}
              {publishedDate && (
                <>
                  <span>•</span>
                  <time>{formatDate(publishedDate)}</time>
                </>
              )}
            </div>
            <Link href={`/blog/${slug || id}`}>
              <h3 className="font-playfair text-lg font-semibold text-gold hover:text-gold/80 transition-colors line-clamp-2">
                {title}
              </h3>
            </Link>
            {readTime && (
              <span className="text-gray-400 text-xs">{readTime} min read</span>
            )}
          </div>
        </div>
      </article>
    );
  }

  if (variant === 'featured') {
    return (
      <article className={`card group ${className}`}>
        <div className="relative h-80 mb-6 overflow-hidden rounded-lg">
          <Link href={`/blog/${slug || id}`}>
            <Image
              src={image || '/cosmetic.jpg'}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </Link>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            {category && (
              <span className="inline-block bg-gold text-black text-xs font-semibold px-3 py-1 rounded-full mb-3">
                {category}
              </span>
            )}
            <Link href={`/blog/${slug || id}`}>
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-white hover:text-gold transition-colors line-clamp-2">
                {title}
              </h2>
            </Link>
          </div>
        </div>
        
        <div className="space-y-4">
          {excerpt && (
            <p className="text-gray-300 leading-relaxed line-clamp-3">
              {excerpt}
            </p>
          )}
          
          <div className="flex items-center justify-between text-sm text-gray-400">
            <div className="flex items-center gap-4">
              {author && (
                <span className="text-gold font-medium">{author}</span>
              )}
              {publishedDate && (
                <time>{formatDate(publishedDate)}</time>
              )}
            </div>
            {readTime && (
              <span>{readTime} min read</span>
            )}
          </div>
          
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 3).map((tag, index) => (
                <span 
                  key={index}
                  className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    );
  }

  // Default variant
  return (
    <article className={`card group ${className}`}>
      <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
        <Link href={`/blog/${slug || id}`}>
          <Image
            src={image || '/cosmetic.jpg'}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        {category && (
          <div className="absolute top-3 left-3">
            <span className="bg-gold text-black text-xs font-semibold px-2 py-1 rounded">
              {category}
            </span>
          </div>
        )}
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          {publishedDate && (
            <time>{formatDate(publishedDate)}</time>
          )}
          {readTime && (
            <>
              <span>•</span>
              <span>{readTime} min read</span>
            </>
          )}
        </div>
        
        <Link href={`/blog/${slug || id}`}>
          <h3 className="font-playfair text-xl font-semibold text-gold hover:text-gold/80 transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>
        
        {excerpt && (
          <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
            {excerpt}
          </p>
        )}
        
        <div className="flex items-center justify-between pt-2">
          {author && (
            <span className="text-gold text-sm font-medium">{author}</span>
          )}
          <Link 
            href={`/blog/${slug || id}`}
            className="text-gold text-sm hover:text-gold/80 transition-colors font-medium"
          >
            Read More →
          </Link>
        </div>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.slice(0, 2).map((tag, index) => (
              <span 
                key={index}
                className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default BlogCard;