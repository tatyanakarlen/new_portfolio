import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Tatyana Karlen - Software Developer",
  description:
    "Portfolio of Tatyana Karlen, a full-stack developer specializing in front-end development and UI/UX design.",
  keywords:
    "Tatyana Karlen, software developer, front-end development, UI/UX design, web development, portfolio",
  authors: [{ name: "Tatyana Karlen", url: "https://tatyanakarlen.com" }],
  openGraph: {
    title: "Tatyana Karlen - Software Developer",
    description:
      "Explore the portfolio of Tatyana Karlen, showcasing expertise in modern web technologies.",
    url: "https://tatyanakarlen.com", // Replace with your actual website URL
    // image: "https://yourwebsite.com/your-image.jpg",
    siteName: "Tatyana Karlen",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tatyana Karlen - Software Developer",
    description:
      "Discover the skills and projects of Tatyana Karlen in software development.",
    // image: "https://yourwebsite.com/your-image.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="format-detection" content="telephone=no, email=no" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <title>{typeof metadata.title === 'string' ? metadata.title : "Default Title"}</title>
        <meta name="description" content={metadata.description ?? "Default description here."} />
        <meta name="keywords"  content={Array.isArray(metadata.keywords) ? metadata.keywords.join(", ") : "Default keywords here"}></meta>
        <meta name="author" content={Array.isArray(metadata.authors) && metadata.authors.length > 0 ? metadata.authors[0].name : "Unknown Author"} />
        {/* Open Graph Meta Tags */}
        {/* <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:locale" content={metadata.openGraph.locale} /> */}
        {/* Twitter Meta Tags */}
        {/* <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} /> */}
      </head>
      <body>{children}</body>
    </html>
  );
}


