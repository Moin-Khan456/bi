import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="icon"
          href="https://braininventory.s3.us-east-2.amazonaws.com/images/logo/Braininventory_logo.png"
        />
         <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageObject",
          "url": "https://braininventory.s3.us-east-2.amazonaws.com/images/logo/Braininventory_homepage+preview+image.png",
          "width": 800,
          "height": 600,
          "alt": "Custom Software Development Company",
          "caption": "Custom Software Development Company"
        }) }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
