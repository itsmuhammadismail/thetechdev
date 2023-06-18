import Head from "next/head";
import Top from "../components/Top";
import Layout from "../components/Layout";
import Team from "../components/About/Team";

const About = () => {
  return (
    <div>
      <Head>
        <title>The Tech Dev</title>
        <meta name="description" content="The Tech Dev" />
        <link rel="icon" href="/favicon.png" />
        
      </Head>
      <Layout>
        <Top
          heading="We are Experts in"
          desc="Websites, landing pages, interactive campaigns, or just about any
            other digital media needed, we can merge innovative ideas with
            beautiful designs to reach the hearts and minds of your core
            audiences."
          img="/images/abt-bg.jpg"
        />
        <Team />
      </Layout>
    </div>
  );
};

export default About;
