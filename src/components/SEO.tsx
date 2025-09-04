import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  keywords?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  type?: 'website' | 'article' | 'course' | 'book';
  noindex?: boolean;
  schema?: Record<string, unknown>;
}

export default function SEO({
  title,
  description,
  canonical,
  image = '/og-image.png',
  keywords,
  author = 'Easy Seerah',
  publishedTime,
  modifiedTime,
  type = 'website',
  noindex = false,
  schema
}: SEOProps) {
  const siteUrl = 'https://easyseerah.com';
  const fullTitle = `${title} | Easy Seerah`;
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      
      <link rel="canonical" href={fullCanonical} />
      
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />
      
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {!noindex && <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />}
      
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Easy Seerah" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />
      
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@easyseerah" />
      <meta name="twitter:creator" content="@easyseerah" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      
      <meta name="application-name" content="Easy Seerah" />
      <meta name="apple-mobile-web-app-title" content="Easy Seerah" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" content="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" content="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" content="/favicon-16x16.png" />
      <link rel="manifest" content="/site.webmanifest" />
      
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </Head>
  );
}