import Head from "next/head";
import { useEffect } from "react";
import Layout from "../components/Layout";
import Top from "../components/Top";

const Projects = () => {
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
          heading="A Treasure Trove of Selected Projects"
          desc="Spotlighting work that shows different facets of our capabilities, design imagination, coding skills, and branding magic."
          img="/images/abt-bg.jpg"
        />
        <div className="relative z-[30] ">
          <div className="px-12 mx-auto flex flex-col justify-center items-center py-24 bg-white">
            <h3 className="h4 font-bold text-center">Our Projects</h3>
          </div>

          <div className="flex flex-col gap-36 md:gap-16 pb-16">
            {/* Web designing */}
            <div
              data-color="violet"
              className="min-h-[calc(100vh-10rem)] panel w-full px-12 flex items-center"
            >
              <div className="max-w-[70rem] mx-auto flex flex-col md:flex-row gap-12 items-center h-full">
                <div className="md:flex-1 flex flex-col gap-4 justify-center py-12 text-center md:text-left">
                  <h4
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="text-white h4 font-bold"
                  >
                    School Managemnet System
                  </h4>
                  <p
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                    className="text-white"
                  >
                    School Management System is design and develop for Eden
                    Education which has 3 panels, Admin, Teacher and Student.
                  </p>
                </div>
                <div className="flex-1 w-full h-full  ">
                  <div className="w-full h-full flex items-start md:items-center justify-center md:justify-end ">
                    <img
                      src="/images/LMS.png"
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
            >
              <div className="max-w-[70rem] mx-auto flex gap-12 items-center h-full flex-col md:flex-row">
                <div className="flex-1 w-full h-full order-2 md:order-[0]">
                  <div className="w-full h-full flex items-start md:items-center justify-center md:justify-start ">
                    <img
                      src="/images/LootMart.png"
                      alt=""
                      className="relative h-[15rem] md:h-[25rem]"
                      data-aos="fade-down"
                      data-aos-duration="1000"
                    />
                    {/* <img
                      src="/images/webdev-mob.png"
                      alt=""
                      className="relative h-[8rem] md:h-[10rem] bottom-[-4rem]"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    /> */}
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
                  <h4
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="text-white h4 font-bold"
                  >
                    Lootmart
                  </h4>
                  <p
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                    className="text-white"
                  >
                    Lootmart is an e-commerce website and mobile application
                    which is developed for the purpose of selling any type of
                    products.
                  </p>
                </div>
              </div>
            </div>
            {/* App Development */}
            <div
              data-color="blue"
              className="min-h-[calc(100vh-10rem)] panel w-full px-12 flex items-center"
            >
              <div className="max-w-[70rem] mx-auto flex gap-12 items-center h-full flex-col md:flex-row">
                <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
                  <h4
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="text-white h4 font-bold"
                  >
                    Taqwa Apps
                  </h4>
                  <p
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                    className="text-white"
                  >
                    TaqwaApps is a Digital Agency Company and Provide Platforms
                    for Social Workers for the Sake of Allah Almighty We are
                    Honoured to Work with Them
                  </p>
                </div>
                <div className="flex-1 w-full h-full  ">
                  <div className="w-full h-full flex items-center justify-end gap-4">
                    <img
                      src="/images/TaqwaApps.png"
                      alt=""
                      className="relative h-[15rem] md:h-[25rem]"
                      data-aos="fade-down"
                      data-aos-duration="1000"
                    />
                    {/* <img
                      src="/images/App-2.png"
                      alt=""
                      className="relative h-[20rem] md:h-[25rem] bottom-[-4rem]"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
            {/* Graphics Designing */}
            <div
              data-color="green"
              className="min-h-[calc(100vh-10rem)] panel w-full px-12 flex items-center"
            >
              <div className="max-w-[70rem] mx-auto flex gap-12 items-center h-full flex-col md:flex-row">
                <div className="flex-1 w-full h-full order-2 md:order-[0]">
                  <div className="w-full h-full min-h-[] flex items-start md:items-center justify-center md:justify-start ">
                    <img
                      src="/images/Authentic.png"
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
                    Authentic
                  </h4>
                  <p
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                    className="text-white"
                  >
                    Authentic is a real estate services, providing sustained
                    value to clients and the community. At Authentic they
                    utilize extensive expertise in HNI client management and AI
                    learning technology for providing end-to-end property
                    management solutions to clients. We are Honoured to Work on
                    theirs Project
                  </p>
                </div>
              </div>
            </div>
            {/* UI/UX Designing */}
            <div
              data-color="yellow"
              className="min-h-[calc(100vh-10rem)] panel w-full px-12 flex items-center"
            >
              <div className="max-w-[70rem] mx-auto flex gap-12 items-center h-full flex-col md:flex-row">
                <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
                  <h4
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="text-white h4 font-bold"
                  >
                    Moonlight Digitizing
                  </h4>
                  <p
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                    className="text-white"
                  >
                    Moonlight Digitizing is a digitizing company that provides
                    digitizing, vector, patches, graphics designing and video
                    editing services.
                  </p>
                </div>
                <div className="flex-1 w-full h-full  ">
                  <div className="relative w-full h-full flex items-center justify-end gap-4">
                    <img
                      src="/images/MoonLight.png"
                      alt=""
                      className="relative h-[15rem] md:h-[25rem]"
                      data-aos="fade-down"
                      data-aos-delay="300"
                      data-aos-duration="1000"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Projects;
