import Head from "next/head";
import { useRouter } from "next/router";

const SITE_URL = "https://izumiishikawa.com";
const SITE_NAME = "Izumi Ishikawa";
const DEFAULT_OG_IMAGE = `${SITE_URL}/static/assets/og-image.png`;

export default function SEO({
  title,
  description,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  article = null,
  noindex = false,
}) {
  const router = useRouter();
  const currentPath = router.asPath.split("?")[0];
  const canonicalUrl = `${SITE_URL}${currentPath === "/" ? "" : currentPath}`;
  const locale = router.locale || "en";

  const fullTitle = title
    ? `${title} | Izumi Ishikawa`
    : "Freelancer UI/UX Designer & Full-Stack Developer | Izumi Ishikawa";

  const finalImage = image?.startsWith("http") ? image : `${SITE_URL}${image}`;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="author" content="Izumi Ishikawa" />

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Hreflang for i18n */}
      <link rel="alternate" hrefLang="en" href={`${SITE_URL}${currentPath}`} />
      <link rel="alternate" hrefLang="pt" href={`${SITE_URL}/pt${currentPath}`} />
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${currentPath}`} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={locale === "pt" ? "pt_BR" : "en_US"} />
      <meta property="og:locale:alternate" content={locale === "pt" ? "en_US" : "pt_BR"} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={finalImage} />

      {/* Article-specific meta (for blog posts) */}
      {type === "article" && article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          <meta property="article:author" content={article.author || "Izumi Ishikawa"} />
          {article.tags?.map((tag, i) => (
            <meta key={i} property="article:tag" content={tag} />
          ))}
        </>
      )}
    </Head>
  );
}
