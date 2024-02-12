import { useEffect, useState } from "react";
import "../styles/globals.css";
import HireDedicatedCard from "../components/blog/HireDedicatedCard";
import { FiMail } from "react-icons/fi";
import Script from "next/script";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // Accessing the current page URL
  const { asPath } = router;
  const [localForm, setLocal] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      localForm === null &&
        setLocal(
          window.innerWidth < 1000
            ? false
            : asPath == "/thank-you"
            ? false
            : true
        );
      window.smartlook ||
        (function (d) {
          var o = (window.smartlook = function () {
              o.api.push(arguments);
            }),
            h = d.getElementsByTagName("head")[0];
          var c = d.createElement("script");
          o.api = new Array();
          c.async = true;
          c.type = "text/javascript";
          c.charset = "utf-8";
          c.src = "https://web-sdk.smartlook.com/recorder.js";
          h.appendChild(c);
        })(document);
      window.smartlook("init", "a3459c65e0d69bf6b6ff9d9b4120d4f1dc6aa787", {
        region: "eu",
      });
    }
  }, [asPath]);
  return (
    <>
      {/* <Script src="https://cdn.botpress.cloud/webchat/v1/inject.js" />
      <Script
        src="https://mediafiles.botpress.cloud/658b4e1a-0e00-4bc2-a5d4-e2941f86b8c9/webchat/config.js"
        defer
      /> */}
      <Component {...pageProps} />
      <div className="fixed bottom-4 right-4">
        {localForm ? (
          <HireDedicatedCard setLocal={setLocal} />
        ) : (
          <div
            className="text-white bg-gradient-to-r from-[#000076] to-[#7600EB] p-4 rounded-full max-w-fit text-2xl m-2 ml-2 lg:m-8 cursor-pointer"
            onClick={() => {
              setLocal(true);
            }}
          >
            <FiMail />
          </div>
        )}
      </div>
    </>
  );
}
export default MyApp;