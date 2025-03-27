import { Html, Head, Main, NextScript } from "next/document";
import DOMPurify from "isomorphic-dompurify";
import Script from "next/script";
const jsonLdScript = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Brain Inventory",
  "url": "https://braininventory.in/",
  "logo": {
    "@type": "ImageObject",
    "url": "https://braininventory.in/_next/image?url=https%3A%2F%2Fbraininventory.s3.us-east-2.amazonaws.com%2Fimages%2Fmain%2FLogobg.png&w=384&q=75"
  },
  "sameAs": [
    "https://www.facebook.com/BrainInventoryIndia/",
    "https://www.instagram.com/braininventory_com/",
    "https://www.youtube.com/channel/UCmBF3Fito6xxYWyomJ-ittw",
    "https://in.linkedin.com/company/braininventory"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+1-206-653-3419",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "en"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "37"
  }
}
const jsonLdScriptLocal = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Brain Inventory",
  "image": "https://braininventory.in/_next/image?url=https%3A%2F%2Fbraininventory.s3.us-east-2.amazonaws.com%2Fimages%2Fmain%2FLogobg.png&w=384&q=75",
  "@id": "",
  "url": "https://braininventory.in/",
  "telephone": "+91 8109561401",
  "priceRange": "00",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "720 Seneca St Ste",
    "addressLocality": "Seattle",
    "addressRegion": "WA",
    "postalCode": "98101",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 47.6114,
    "longitude": -122.3305
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "08:00",
    "closes": "11:00"
  },
  "sameAs": [
    "https://www.facebook.com/BrainInventoryIndia/",
    "https://in.linkedin.com/company/braininventory",
    "https://www.instagram.com/braininventory_com/",
    "https://www.youtube.com/channel/UCmBF3Fito6xxYWyomJ-ittw",
    "https://www.pinterest.com/brainventory/",
    "https://www.tumblr.com/braininventoryusa",
    "https://github.com/brainventory"
  ] 
}
export default function Document() {
  const sanitizedJsonLd = DOMPurify.sanitize(JSON.stringify(jsonLdScript));
  const sanitizedJsonLdLocal = DOMPurify.sanitize(JSON.stringify(jsonLdScriptLocal));
  return (
    <Html lang="en">
      <Head>
        <link
          rel="icon"
          href="https://braininventory.s3.us-east-2.amazonaws.com/images/logo/Braininventory_logo.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: sanitizedJsonLd }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: sanitizedJsonLdLocal }}
        />
      </Head>

      <Script
        strategy="afterInteractive"
        src="https://rum.corewebvitals.io/cwv/6577fca7b86b6a09f6ce71f8.js"
      />
      <Script id="clarity" strategy="afterInteractive">
        {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "m8bt6qludg");
            `}
      </Script>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
