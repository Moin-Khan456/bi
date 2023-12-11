import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="icon"
          href="https://braininventory.s3.us-east-2.amazonaws.com/images/logo/Braininventory_logo.png"
        />
        <link rel="preload" href="../public/fonts/Brinattan.ttf" as="font" type="font/ttf" crossorigin="anonymous"/>
        <link rel="preload" href="../public/fonts/Jost-Regular.ttf" as="font" type="font/ttf" crossorigin="anonymous"/>
        <link rel="preload" href="../public/fonts/Brinattan.ttf" as="font" type="font/ttf" crossorigin="anonymous"/>
        <link rel="preload" href="../public/fonts/Brinattan.ttf" as="font" type="font/ttf" crossorigin="anonymous"/>
        <link rel="preload" href="../public/fonts/Brinattan.ttf" as="font" type="font/ttf" crossorigin="anonymous"/>
        <link rel="preload" href="../public/fonts/Brinattan.ttf" as="font" type="font/ttf" crossorigin="anonymous"/>
        <link rel="preload" href="../public/fonts/Brinattan.ttf" as="font" type="font/ttf" crossorigin="anonymous"/>
        <link rel="preload" href="../public/fonts/Brinattan.ttf" as="font" type="font/ttf" crossorigin="anonymous"/>

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
