import Head from "next/head";
import { useEffect } from "react";
import Layout from "../components/Layout";
import Top from "../components/Top";

const Services = () => {
  const handleScroll = () => {
    let body = document.querySelector("body");
    let panel = document.querySelectorAll(".panel");
    let scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    let height = window.innerHeight;
    var scroll = scrollTop + height / 3;

    panel.forEach((p) => {
      if (p.offsetTop <= scroll && p.offsetTop + height > scroll) {
        // Remove all classes on body with color-
        // body.removeClass(function (index, css) {
        //   return (css.match(/(^|\s)color-\S+/g) || []).join(" ");
        // });
        let classList = body.classList;
        classList.forEach((c) => {
          body.classList.remove(c.match(/(^|\s)color-\S+/g).join(" "));
        });
        body.classList.add("color-" + p.dataset.color);

        // Add class of currently active div
        // body.addClass("color-" + $(this).data("color"));
      }
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div>
      <Head>
        <title>Neuronious</title>
        <meta name="description" content="Neuronious" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <Top
          heading="We provide the Best"
          desc="That’s why our service pillars live under the one roof. We’re a full-service agency with experts in-house who can transform your business into a digital success. Our core offerings and consistently strong focus on conversions are how we achieve our beautiful results."
          img="/images/abt-bg.jpg"
        />
        <div className="relative z-[30] ">
          <div className="px-12 mx-auto flex flex-col justify-center items-center py-24 bg-white">
            <h3 className="h4 font-bold text-center">We can help you with</h3>
          </div>

          <div className="flex flex-col gap-36 md:gap-16 pb-16">
            {/* Web designing */}
            <div
              data-color="violet"
              className="min-h-[calc(100vh-10rem)] panel w-full px-12 flex items-center "
              id="web-designing"
            >
              <div className="max-w-[70rem] mx-auto flex flex-col md:flex-row gap-12 items-center h-full">
                <div className="md:flex-1 flex flex-col gap-4 justify-center py-12 text-center md:text-left">
                  <h4
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="text-white h4 font-bold"
                  >
                    Web Designing
                  </h4>
                  <p
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                    className="text-white"
                  >
                    Neuronious specializes in website design and development
                    services. Our web experiences are high-performing,
                    feature-packed and digitally transformative, designed to be
                    user-friendly, fully functional, very secure and able to
                    scale as your enterprise grows.
                  </p>
                </div>
                <div className="flex-1 w-full h-full  ">
                  <div className="w-full h-full flex items-start md:items-center justify-center md:justify-end ">
                    <img
                      src="/images/Web-Des.png"
                      alt=""
                      className="relative h-[15rem] md:h-[25rem]"
                      data-aos="fade-down"
                      data-aos-duration="1000"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Web development */}
            <div
              data-color="indigo"
              className="min-h-[calc(100vh-10rem)] panel w-full px-12 flex items-center"
              id="web-development"
            >
              <div className="max-w-[70rem] mx-auto flex gap-12 items-center h-full flex-col md:flex-row">
                <div className="flex-1 w-full h-full order-2 md:order-[0]">
                  <div className="w-full h-full flex items-start md:items-center justify-center md:justify-start ">
                    <img
                      src="/images/webdev-desk.png"
                      alt=""
                      className="absolute h-[10rem] md:h-[15rem]"
                      data-aos="fade-down"
                      data-aos-duration="1000"
                    />
                    <img
                      src="/images/webdev-mob.png"
                      alt=""
                      className="relative h-[8rem] md:h-[10rem] bottom-[-4rem]"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
                  <h4
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="text-white h4 font-bold"
                  >
                    Web Development
                  </h4>
                  <p
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                    className="text-white"
                  >
                    Maximize the potential of your website, your most important
                    marketing tool, and differentiate yourself from your
                    competitors.Our website developers provide expert web
                    application development and web design services to our
                    clients. Neuronious offers a variety of website design and
                    development services,
                  </p>
                </div>
              </div>
            </div>
            {/* App Development */}
            <div
              data-color="blue"
              className="min-h-[calc(100vh-10rem)] panel w-full px-12 flex items-center"
              id="app-development"
            >
              <div className="max-w-[70rem] mx-auto flex gap-12 items-center h-full flex-col md:flex-row">
                <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
                  <h4
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="text-white h4 font-bold"
                  >
                    Mobile App Development
                  </h4>
                  <p
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                    className="text-white"
                  >
                    We are providing you our best service that is Android/IOS
                    Application. Moreover, we are providing you Hybrid
                    application service which can run on any
                    platform(Android/IOS). we are expert in providing best
                    mobile app development services to write the success story
                    of your business.
                  </p>
                </div>
                <div className="flex-1 w-full h-full  ">
                  <div className="w-full h-full flex items-center justify-end gap-4">
                    <img
                      src="/images/App-1.png"
                      alt=""
                      className="relative h-[20rem] md:h-[25rem]"
                      data-aos="fade-down"
                      data-aos-duration="1000"
                    />
                    <img
                      src="/images/App-2.png"
                      alt=""
                      className="relative h-[20rem] md:h-[25rem] bottom-[-4rem]"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Graphics Designing */}
            <div
              data-color="green"
              className="min-h-[calc(100vh-10rem)] panel w-full px-12 flex items-center"
              id="graphics-designing"
            >
              <div className="max-w-[70rem] mx-auto flex gap-12 items-center h-full flex-col md:flex-row">
                <div className="flex-1 w-full h-full order-2 md:order-[0]">
                  <div className="w-full h-full min-h-[] flex items-start md:items-center justify-center md:justify-start ">
                    <img
                      src="/images/graphics.png"
                      alt=""
                      className="relative h-[15rem] md:h-[25rem]"
                      data-aos="fade-down"
                      data-aos-duration="1000"
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
                  <h4
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="text-white h4 font-bold"
                  >
                    Graphics Designing
                  </h4>
                  <p
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                    className="text-white"
                  >
                    There’s no limit to what you can get designed at NEURONIOUS.
                    Whether you’re looking for a spectacular new logo or some
                    stunning flyers, the talented designers at NEURONIOUS can
                    make it happen. NEURONIOUS prides itself on its high-quality
                    designers who deliver only the best graphic design services
                  </p>
                </div>
              </div>
            </div>
            {/* UI/UX Designing */}
            <div
              data-color="yellow"
              className="min-h-[calc(100vh-10rem)] panel w-full px-12 flex items-center"
              id="ui-ux-designing"
            >
              <div className="max-w-[70rem] mx-auto flex gap-12 items-center h-full flex-col md:flex-row">
                <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
                  <h4
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="text-white h4 font-bold"
                  >
                    UI/UX Designing
                  </h4>
                  <p
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                    className="text-white"
                  >
                    Want to build your product with a team that establishes a
                    clear design process, meets deadlines, and delivers a
                    spot-on end result? Turn to Neuronious&apos;s UI and UX
                    services. Our design team is a small design studio within a
                    large software company that will help you build an engaging
                    product easily and quickly.
                  </p>
                </div>
                <div className="flex-1 w-full h-full  ">
                  <div className="relative w-full h-full flex items-center justify-end gap-4">
                    <img
                      src="/images/UI-left.png"
                      alt=""
                      className="absolute top-[-2rem] left-[0rem] h-[5rem] md:h-[9rem]"
                      data-aos="fade-down"
                      data-aos-duration="1000"
                    />
                    <img
                      src="/images/UI-main.png"
                      alt=""
                      className="relative h-[6rem] md:h-[11rem] top-0 md:top-[2rem] left-[7rem] md:left-[9rem]"
                      data-aos="fade-down"
                      data-aos-delay="300"
                      data-aos-duration="1000"
                    />
                    <img
                      src="/images/UI-right.png"
                      alt=""
                      className="relative h-[6rem] md:h-[11rem] top-[2rem] md:top-[6rem] left-[1rem] md:left-[-1rem]"
                      data-aos="fade-down"
                      data-aos-duration="1000"
                      data-aos-delay="600"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* E-commerce */}
            <div
              data-color="orange"
              className="min-h-[calc(100vh-10rem)] panel w-full px-12 flex items-center"
              id="e-commerce"
            >
              <div className="max-w-[70rem] mx-auto flex gap-12 items-center h-full flex-col md:flex-row">
                <div className="flex-1 w-full h-full order-2 md:order-[0]">
                  <div className="w-full h-full flex items-start md:items-center justify-center md:justify-start relative">
                    <img
                      src="/images/Ecom-5.png"
                      alt=""
                      className="absolute h-[8rem] md:h-[10rem] top-[0rem] left-[0rem]"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="300"
                    />
                    <img
                      src="/images/Ecom-4.png"
                      alt=""
                      className="absolute h-[8rem] md:h-[10rem] top-[-2rem] md:top-[-4rem] left-[2rem]"
                      data-aos="fade-down"
                      data-aos-duration="1000"
                      data-aos-delay="600"
                    />
                    <img
                      src="/images/Ecom-1.png"
                      alt=""
                      className="relative h-[10rem] md:h-[15rem] left-[1rem] md:left-[5rem]"
                      data-aos="fade-down"
                      data-aos-duration="1000"
                    />
                    <img
                      src="/images/Ecom-3.png"
                      alt=""
                      className="absolute h-[8rem] md:h-[10rem] top-[-2.8rem] right-[0] md:right-[7rem]"
                      data-aos="fade-down"
                      data-aos-duration="1000"
                      data-aos-delay="900"
                    />
                    <img
                      src="/images/Ecom-2.png"
                      alt=""
                      className="absolute h-[8rem] md:h-[12rem] top-[4rem] md:top-[9rem] left-[1rem]"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="1200"
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
                  <h4
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="text-white h4 font-bold"
                  >
                    E-commerce
                  </h4>
                  <p
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                    className="text-white"
                  >
                    Our eCommerce development services starts from designing of
                    your EStore UX/UI for desktops and mobile to the development
                    of your product catalogues and payment gateway. We being the
                    best eCommerce developer in Pakistan, helps to achieve a
                    digital commerce experience. With a team of E-commerce
                    developers and professionals on board, who keep in touch
                    with the recent trends of the industry, we can uplift your
                    site framework for better pursuance easily.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Services;
