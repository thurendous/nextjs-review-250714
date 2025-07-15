'use client'

import Link from "next/link";
import { use } from 'react';

export default function Articles({ params, searchParams }: { params: Promise<{ articleId: string }>, searchParams: Promise<{ lang?: 'en' | 'fr' | 'es' }> }) {
  const { articleId } = use(params);
  const { lang = 'en' } = use(searchParams);
  console.log(articleId, lang);

  return (
    <div>
      <h1>News article id</h1>
      <p>Reading in language: {lang}</p>

      <div>
        <p>
          <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
        </p>
        <p>
          <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
        </p>
        <p>
          <Link href="/articles/breaking-news-123?lang=es">Read in Spanish</Link>
        </p>
      </div>
    </div>
  );
}
