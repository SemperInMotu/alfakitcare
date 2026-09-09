'use client';

import { useEffect } from 'react';

export function LangAttr({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return (
    <script
      dangerouslySetInnerHTML={{ __html: `document.documentElement.lang=${JSON.stringify(lang)}` }}
    />
  );
}

