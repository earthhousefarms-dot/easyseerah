import Link from 'next/link';

interface RelatedLink {
  href: string;
  title: string;
  description?: string;
  category?: string;
}

interface InternalLinksProps {
  title?: string;
  links: RelatedLink[];
  variant?: 'grid' | 'list' | 'compact';
  className?: string;
}

export default function InternalLinks({
  title = "Related Content",
  links,
  variant = 'grid',
  className = ''
}: InternalLinksProps) {
  if (links.length === 0) return null;

  const renderGrid = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="group block p-4 bg-white rounded-lg border border-gray-200 hover:border-emerald-400 hover:shadow-md transition-all duration-200"
        >
          {link.category && (
            <span className="inline-block px-2 py-1 text-xs font-medium text-emerald-600 bg-emerald-50 rounded-full mb-2">
              {link.category}
            </span>
          )}
          <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-1">
            {link.title}
          </h3>
          {link.description && (
            <p className="text-sm text-gray-600 line-clamp-2">
              {link.description}
            </p>
          )}
          <span className="inline-flex items-center mt-2 text-sm text-emerald-600 font-medium">
            Learn more
            <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </Link>
      ))}
    </div>
  );

  const renderList = () => (
    <ul className="space-y-3">
      {links.map((link, index) => (
        <li key={index} className="flex items-start">
          <svg className="w-5 h-5 text-emerald-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          <div className="flex-1">
            <Link
              href={link.href}
              className="font-medium text-gray-900 hover:text-emerald-600 transition-colors"
            >
              {link.title}
            </Link>
            {link.description && (
              <p className="text-sm text-gray-600 mt-1">
                {link.description}
              </p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );

  const renderCompact = () => (
    <div className="flex flex-wrap gap-2">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-emerald-100 hover:text-emerald-700 transition-colors"
        >
          {link.title}
        </Link>
      ))}
    </div>
  );

  return (
    <section className={`py-8 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
        {variant === 'grid' && renderGrid()}
        {variant === 'list' && renderList()}
        {variant === 'compact' && renderCompact()}
      </div>
    </section>
  );
}