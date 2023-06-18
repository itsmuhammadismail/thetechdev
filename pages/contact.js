import Head from "next/head";
import Layout from "../components/Layout";
import Top from "../components/Top";

const Contact = () => {
  return (
    <div>
      <Head>
        <title>The Tech Dev</title>
        <meta name="description" content="The Tech Dev" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <Top
          heading="Get in Touch"
          desc="If you were looking for a “contact us” form to submit, We don’t have any."
          img="/images/abt-bg.jpg"
        />
        <div className="bg-white relative z-[30] py-[5rem] px-12">
          <div className="max-w-[70rem] mx-auto ">
            <p className="body">
              We believe in quick responses. So, if you want to connect with us,
              <br />
              we’re available here:
            </p>
            <div className="flex gap-4 mt-8">
              <a
                href="http://wa.me/+923181162186"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/contact/whatsapp.svg"
                  alt=""
                  className="h-[5rem]"
                />
              </a>
              <a
                href="https://www.facebook.com/thetechdev.io"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/contact/facebook.svg"
                  alt=""
                  className="h-[5rem]"
                />
              </a>
              {/* <a
                href="https://www.instagram.com/theneuronious"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/contact/instagram.svg"
                  alt=""
                  className="h-[5rem]"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/neuronious"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/contact/linkedin.svg"
                  alt=""
                  className="h-[5rem]"
                />
              </a> */}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Contact;
