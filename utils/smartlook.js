export default function Smartlook() {
  if (typeof window !== "undefined") {
    window.smartlook ||
      (function (d) {
        var o = (smartlook = function () {
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
    smartlook("init", "a3459c65e0d69bf6b6ff9d9b4120d4f1dc6aa787", {
      region: "eu",
    });
  }
}
