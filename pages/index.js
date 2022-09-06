import Head from "next/head";
import Contact from "../components/Home/Contact";
import Hero from "../components/Home/Hero2";
import Projects from "../components/Home/Projects";
import Services from "../components/Home/Services";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Neuronious</title>
        <meta name="description" content="Neuronious" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </Layout>
    </div>
  );
}
