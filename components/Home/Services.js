import Link from "next/link";

const Services = () => {
  return (
    <div className="pt-[calc(100vh-7rem)]">
      <div className="bg-color px-12 relative z-[30] ">
        <div className="max-w-[70rem] py-24 mx-auto flex flex-col text-center items-center justify-center">
          <h3
            data-aos="fade-right"
            data-aos-duration="1000"
            className="h4 font-bold"
          >
            The Tech Dev is specialized in.
          </h3>
          <p
            data-aos="fade-right"
            data-aos-duration="1000"
            className="max-w-[42rem] my-[1.875rem]"
          >
            We are The Tech Dev, a full-service Creative Digital Agency who
            empower ambitious businesses. Our team of experts specialize in All
            Kinds of Websites, Branding and Mobile Aplication.
          </p>
          <div className="w-full flex flex-wrap justify-center items-center gap-4">
            <Link href="/services#web-designing">
              <a>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  className=" h-[12rem] min-w-[20rem] service s1 flex items-center justify-center"
                  style={{ backgroundImage: "url(/images/web_design.jpg)" }}
                >
                  <div className="relative z-[10] flex flex-col justify-center items-center gap-2">
                    <img
                      src="/icons/web-design.svg"
                      alt=""
                      className="h-[3.5rem]"
                    />
                    <h6 className="h6 font-semibold text-white">
                      Web Designing
                    </h6>
                  </div>
                </div>
              </a>
            </Link>
            <Link href="/services#web-development">
              <a>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  className=" h-[12rem] min-w-[20rem] service s2 flex items-center justify-center"
                  style={{ backgroundImage: "url(/images/web_dev.jpg)" }}
                >
                  <div className="relative z-[10] flex flex-col justify-center items-center gap-2">
                    <img
                      src="/icons/web-development.svg"
                      alt=""
                      className="h-[3.5rem]"
                    />
                    <h6 className="h6 font-semibold text-white">
                      Web Development
                    </h6>
                  </div>
                </div>
              </a>
            </Link>
            <Link href="/services#app-development">
              <a>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                  className=" h-[12rem] min-w-[20rem] service s3 flex items-center justify-center"
                  style={{ backgroundImage: "url(/images/mobile_app.jpg)" }}
                >
                  <div className="relative z-[10] flex flex-col justify-center items-center gap-2">
                    <img
                      src="/icons/mobile-application.svg"
                      alt=""
                      className="h-[3.5rem]"
                    />
                    <h6 className="h6 font-semibold text-white">
                      Mobile Application
                    </h6>
                  </div>
                </div>
              </a>
            </Link>
            <Link href="/services#graphics-designing">
              <a>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  className=" h-[12rem] min-w-[20rem] service s4 flex items-center justify-center"
                  style={{ backgroundImage: "url(/images/graphics.jpg)" }}
                >
                  <div className="relative z-[10] flex flex-col justify-center items-center gap-2">
                    <img
                      src="/icons/graphic-design.svg"
                      alt=""
                      className="h-[3.5rem]"
                    />
                    <h6 className="h6 font-semibold text-white">
                      Graphics Designing
                    </h6>
                  </div>
                </div>
              </a>
            </Link>
            <Link href="/services#ui-ux-designing">
              <a>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                  className=" h-[12rem] min-w-[20rem] service s5 flex items-center justify-center"
                  style={{ backgroundImage: "url(/images/ui.jpg)" }}
                >
                  <div className="relative z-[10] flex flex-col justify-center items-center gap-2">
                    <img src="/icons/ux.svg" alt="" className="h-[3.5rem]" />
                    <h6 className="h6 font-semibold text-white">
                      UI/UX Designing
                    </h6>
                  </div>
                </div>
              </a>
            </Link>
            <Link href="/services#e-commerce">
              <a>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="600"
                  className=" h-[12rem] min-w-[20rem] service s6 flex items-center justify-center"
                  style={{ backgroundImage: "url(/images/ecom.jpg)" }}
                >
                  <div className="relative z-[10] flex flex-col justify-center items-center gap-2">
                    <img
                      src="/icons/ecommerce.svg"
                      alt=""
                      className="h-[3.5rem]"
                    />
                    <h6 className="h6 font-semibold text-white">E-commerce</h6>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
