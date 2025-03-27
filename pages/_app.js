import { useEffect, useState } from "react";
import "../styles/globals.css";
import HireDedicatedCard from "../components/blog/HireDedicatedCard";
import { FiMail } from "react-icons/fi";
import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();


function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const { asPath } = router;
  const [localForm, setLocal] = useState(null);

  function throttle(callback, delay) {
    let lastCall = 0;
    return function (...args) {
      const now = new Date().getTime();
      if (now - lastCall >= delay) {
        lastCall = now;
        callback(...args);
      }
    };
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
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

      const handleScroll = throttle(() => {
        if (window.scrollY > 400) {
          if (
            localForm === null &&
            (JSON.parse(localStorage.getItem("openPopup")) ?? true)
          ) {
            setLocal(
              window.innerWidth < 1000
                ? false
                : asPath === "/thank-you"
                ? false
                : true
            );
          }
        }
      }, 200);

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [asPath]);

  return (
    <>
      {/* <Script src="https://cdn.botpress.cloud/webchat/v1/inject.js" />
      <Script
        src="https://mediafiles.botpress.cloud/658b4e1a-0e00-4bc2-a5d4-e2941f86b8c9/webchat/config.js"
        defer
      /> */}

<QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
      <div className="fixed bottom-4 right-4 z-20">
        {localForm ? (
          <HireDedicatedCard setLocal={setLocal} />
        ) : (
          <div
            className="text-primaryBg bg-primaryTx p-4 rounded-full max-w-fit text-2xl m-2 ml-2 lg:m-8 cursor-pointer"
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
