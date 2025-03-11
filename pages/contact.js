import React, { useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Script from "next/script";
const Header = dynamic(() => import("../components/header/Header"),{ssr:false});
const ContactBanner = dynamic(() => import("../components/contacts/contactBanner.js"));
const Contact1 = dynamic(() => import("../components/contacts/contact.js"),{ssr:false});
const LocateUs = dynamic(() => import("../components/common/locateUs"));
const LetsKick = dynamic(() => import("../components/common/LetsKick"));
const Footer = dynamic(() => import("../components/common/Footer"),{ssr:false});

function Contact() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = window.location;
      if (url.hash === "#contact") {
        window.scrollTo({
          top: 750,
          behavior: "smooth",
        });
      }
    }
  }, []);
  return (
    <>
      <Script
        id="1"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MWMG4P2');`,
        }}
      />
      <Head>
        <title>
        You Think We Create - Contact Brain Inventory
        </title>
        <meta
          name="description"
          content="Contact Brain Inventory for any IT services, requirement And query. Get free consulting for your development projects. Contact us today!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content=" Contact Brain 
Inventory to Kick start Your Digital Journey Today "
        />
        <meta
          property="og:description"
          content="Contact Brain Inventory for any IT services, requirement And query. Get free consulting for your development projects. Contact us today!"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/Braininventory_contact.jpg"
        />
        <meta property="og:url" content="https://braininventory.in/contact" />
        <link rel="canonical" href="https://braininventory.in/contact" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Brain Inventory",
              url: "https://braininventory.in/contact",
              logo: "https://braininventory.in/_next/image?url=https%3A%2F%2Fbraininventory.s3.us-east-2.amazonaws.com%2Fimages%2Fmain%2FLogobg.png&w=256&q=75",
              alternateName:
                "Brain Inventory: Staff Augmentation | Custom Software Development Company",
              sameAs: [
                "https://www.instagram.com/braininventory_com/",
                "https://in.linkedin.com/company/braininventory",
                "https://www.youtube.com/channel/UCmBF3Fito6xxYWyomJ-ittw",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91-810-956-1401",
                  contactType: "technical support",
                  email: "askus@braininventory.com",
                  areaServed: "IN",
                  availableLanguage: ["en", "hi"],
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+1(206)6533419",
                  contactType: "",
                  email: "askus@braininventory.com",
                  areaServed: "US",
                  availableLanguage: "en",
                },
              ],
            }),
          }}
        />
      </Head>
      <div className="relative   ">
        <Header />
        <ContactBanner />
        <span className="container">
          <Contact1 />
          <LocateUs />
          <LetsKick />
        </span>
        <Footer />
      </div>
    </>
  );
}

export default Contact;
