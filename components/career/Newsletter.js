import React from "react";
import Link from "next/link";

const Newsletter = () => {
  return (
    <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
      <div className="container padding-left-all-section">
        <div className="newsletter-project">
          <div className="pb-20">
            <h3 className="Gilroy-Bold text-3xl text-white">
              lets discuss your project
            </h3>
            <p>
              Get free consultation and let us know your project idea to turn it
              into an amazing digital product.
            </p>
          </div>
          <div className="lg:flex items-center justify-between">
            <div>
              <input
                type="text"
                placeholder="enter your email address"
                className="email-newsletter"
              />
              <button className="btn-send-us">Send us</button>
            </div>
            <Link href="/contact">
              <p className="Gilroy-Bold text-lg underline">Contact us!</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
