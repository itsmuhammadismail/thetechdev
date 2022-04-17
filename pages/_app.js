import { useEffect } from "react";
import "../styles/globals.css";

import AOS from "aos";

import "aos/dist/aos.css";
// import "../scss/style.scss";
import Script from "next/script";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-QRP84F44J8`}
      />

      <Script id="gtm-script" strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-QRP84F44J8');
    `}
      </Script>

      <Head>
        <meta
          name="google-site-verification"
          content="AQ_XmLCWht2lks64FHxA-8_wiza45xHB1eCOKmdHLMU"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
