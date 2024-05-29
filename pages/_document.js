import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="icon"
          href="https://braininventory.s3.us-east-2.amazonaws.com/images/logo/Braininventory_logo.png"
        />
        <link
          rel="preload"
          href="../public/fonts/Brinattan.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="../public/fonts/Jost-Regular.ttf"
          as="font"
          type="font/ttf"
          crossorigin="anonymous"
        />
        <link
          rel="preload"
          href="../public/fonts/Brinattan.ttf"
          as="font"
          type="font/ttf"
          crossorigin="anonymous"
        />
        <link
          rel="preload"
          href="../public/fonts/Brinattan.ttf"
          as="font"
          type="font/ttf"
          crossorigin="anonymous"
        />
        <link
          rel="preload"
          href="../public/fonts/Brinattan.ttf"
          as="font"
          type="font/ttf"
          crossorigin="anonymous"
        />
        <link
          rel="preload"
          href="../public/fonts/Brinattan.ttf"
          as="font"
          type="font/ttf"
          crossorigin="anonymous"
        />
        <link
          rel="preload"
          href="../public/fonts/Brinattan.ttf"
          as="font"
          type="font/ttf"
          crossorigin="anonymous"
        />
        <link
          rel="preload"
          href="../public/fonts/Brinattan.ttf"
          as="font"
          type="font/ttf"
          crossorigin="anonymous"
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
