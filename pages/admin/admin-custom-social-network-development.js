import React, { useState, useEffect } from "react";
import Head from "next/head";
import Smartlook from "../../utils/smartlook";

import Header from "../../components/Admin/Header.jsx";
import HeroSection from "../../components/Admin/HeroSection.jsx";
import LoginForm from "../../components/Admin/LoginForm.jsx";

function HireAangularJsDeveloper(props) {
  const [login, setLogin] = useState(false);

  return (
    <>
      <Head>
        <title>We Develop Highly Engaging Custom Social Networks</title>
        <meta
          name="description"
          content="Hire top-rated Web and Mobile app Developers from Brain Inventory to build highly scalable Application. Our experienced developers build highly customized applications for different sizes of businesses."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="We Develop Highly Engaging Custom Social Networks"
        />
        <meta
          property="og:description"
          content="Hire top-rated Web and Mobile app Developers from Brain Inventory to build highly scalable Application. Our experienced developers build highly customized applications for different sizes of businesses."
        />
        <meta property="og:url" content="https://braininventory.in/" />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/I-1.png"
        />

        <meta property="twitter:domain" content="https://braininventory.in/ " />
        <meta
          property="twitter:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/Logobg.png"
        />
        <meta
          property="twitter:title"
          content=" Custom Android App 
Development | Android App Development Company"
        />
        <meta
          property="twitter:description"
          content=" Brain Inventory is 
the leading Web and Mobile App Development Company with a top-notch 
Web and Mobile App Developers team having profound expertise in trending Technologies. Contact us today. "
        />
        <meta property="twitter:creator" content=" BrainInventory " />
        <meta property="twitter:site" content="BrainInventory" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="relative bg-black overflow-y-hidden h-screen">
        <Header setLogin={setLogin} type={{ logout: false, text: "Login" }} />
        <HeroSection setLogin={setLogin} />
        {login && <LoginForm login={login} setLogin={setLogin} />}
      </div>
    </>
  );
}

export default HireAangularJsDeveloper;
