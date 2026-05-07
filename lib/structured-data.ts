import type { BlogPost } from './blog-data'

export function generateBlogPostStructuredData(post: BlogPost, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${url}/og-images/${post.slug}.png`,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      '@type': 'Person',
      name: post.author.name,
      url: 'https://github.com/shashinthakamunasinghe',
    },
    publisher: {
      '@type': 'Person',
      name: 'Shashinthaka Munasinghe',
      url: 'https://shashinthaka.dev',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${url}/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: post.tags.join(', '),
    timeRequired: post.readTime,
  }
}

export function generateWebsiteStructuredData(url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Shashinthaka Munasinghe Portfolio',
    description: "Full Stack Developer & ICT Undergraduate skilled in React, Next.js, Spring Boot, and cloud technologies. Building responsive, secure, and scalable web systems.",
    url: url,
    author: {
      '@type': 'Person',
      name: 'Shashinthaka Munasinghe',
      url: 'https://github.com/shashinthakamunasinghe',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${url}/blog?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generatePersonStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Shashinthaka Munasinghe',
    url: 'https://shashinthaka.dev',
    image: 'https://shashinthaka.dev/developer-portrait.png',
    sameAs: [
      'https://github.com/shashinthakamunasinghe',
      'https://linkedin.com/in/shashinthaka-munasinghe',
    ],
    jobTitle: 'Full Stack Developer',
    worksFor: {
      '@type': 'EducationalOrganization',
      name: 'Uva Wellassa University of Sri Lanka',
    },
  }
}

export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
