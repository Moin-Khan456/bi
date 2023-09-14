import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Script from "next/script";
const Header = dynamic(() => import("../components/header/Header"));
const LocateUs = dynamic(() => import("../components/common/locateUs"));
const LetsKick = dynamic(() => import("../components/common/LetsKick"));
const Footer = dynamic(() => import("../components/common/Footer"));
const Contact1 = dynamic(() => import("../components/contacts/contact.js"));
const ContactBanner = dynamic(() =>
  import("../components/contacts/contactBanner.js")
);
const Loader = dynamic(() => import("../components/common/loader.js"));

function Contact() {
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
          Contact Brain Inventory to Kickstart Your Digital Journey Today
        </title>

        <meta
          name="description"
          content="Contact Brain Inventory for 
          any service, requirement & 
          query. Get a free no obligation 
          consulting for your website, 
          software & App development 
          projects. Contact us today!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content=" Contact Brain 
Inventory to Kick start Your Digital Journey Today "
        />
        <meta
          property="og:description"
          content=" Contact Brain 
Inventory for any service, requirement & query. Get a free 
no obligation consulting for your website, software & App 
development projects.
Contact us now."
        />
        <meta
          property="og:url"
          content=" 
https://braininventory.in/"
        />
        <meta
          property="og:image"
          content="https://d1u4arv5y5eda6.cloudfront.net/images/Braininventory_contact.jpg"
        />
        <meta property="twitter:domain" content="https://braininventory.in/ " />
        <meta
          property="twitter:image"
          content="https://d1u4arv5y5eda6.cloudfront.net/images/Logobg.png"
        />
        <meta
          property="twitter:title"
          content=" Contact Brain Inventory 
to Kick start Your Digital Journey Today "
        />
        <meta
          property="twitter:description"
          content=" Contact Brain 
Inventory for any service, requirement & query. Get a free no 
obligation consulting for your website, software & App development
projects.
Contact us now."
        />
        <meta property="twitter:creator" content=" BrainInventory " />
        <meta property="twitter:site" content="BrainInventory" />
        <meta property="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://braininventory.in/contact" />
      </Head>
      {/*<Loader />*/}
      <main className="relative second-component ">
        <Header />
        <ContactBanner />
        <section className="container">
          <Contact1 />
        </section>
        <LocateUs />
        <LetsKick />
        <Footer />
      </main>
    </>
  );
}

export default Contact;
