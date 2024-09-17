import StarsBlack from "../assets/icons/StarsBlack";
import StarsIcon from "../assets/icons/StarsIcon";
import StyleMePrettyLogo from "../assets/logos/StyleMePrettyLogo";
import AHLogo from "../assets/logos/AHLogo";
import "./testimonials.css";
const TestimonialContainer = () => {
  return (
    <div className="mx-auto">
      <div className="mb-[4rem] flex flex-col items-center gap-[.8rem] lg:mb-0 lg:gap-[1.6rem]">
        <p className="p-sm-bold md:p-norm-bold text-black">Testimonials</p>
        <h2 className="gradient-text-blue mb-[4rem] lg:mb-0">
          Our clients said it best.
        </h2>
        <div className="justify-baseline flex flex-col items-center gap-[.8rem] lg:flex-row lg:gap-[.6rem]">
          <StarsIcon className="text-[#0085A2]" />
          <p className="gradient-text-blue max-w-[30rem] text-center text-[1.8rem] font-semibold leading-[128%] lg:-mb-1 lg:max-w-full lg:leading-[200%]">
            4.9/5 from third-party-verified client reviews
          </p>
        </div>
      </div>
      <div className="testimonials relative grid xl:!pt-0">
        {/* transparent to white masks */}
        <div className="mask t-fade-top absolute -top-[1px] h-[2.4rem] w-full lg:h-[6.4rem] xl:h-[12.8rem]"></div>
        <div className="mask t-fade-bottom absolute -bottom-[2px] h-[2.4rem] w-full lg:h-[6.4rem] xl:h-[12.8rem]"></div>
        <div className="mask t-fade-left xl:t-fade-left-xl absolute -left-px h-full w-[2.4rem] lg:w-[6.4rem] xl:-left-[6.4rem] xl:w-[12.8rem]"></div>
        <div className="mask t-fade-right xl:t-fade-right-xl absolute -right-px h-full w-[2.4rem] lg:w-[6.4rem] xl:-right-[6.4rem] xl:w-[12.8rem]"></div>
        {/* border fades */}
        <div className="x1 h-[2.4rem] lg:h-[6.4rem] xl:h-[12.8rem]"></div>
        <div className="x2"></div>
        <div className="x3"></div>
        <div className="x4"></div>
        <div className="x5 lg:w-[6.4rem] xl:w-[12.8rem]"></div>
        <div className="x6"></div>
        <div className="x7"></div>
        <div className="x8"></div>
        <div className="x9"></div>
        <div className="x10 w-[2.4rem] lg:h-[6.4rem] lg:w-auto xl:h-[12.8rem]"></div>
        <div className="x11"></div>
        <div className="x12 h-[2.4rem] lg:h-auto"></div>
        <div className="x13"></div>
        <div className="x14 w-[2.4rem] lg:w-[6.4rem] xl:w-[12.8rem]"></div>
        <div className="x15"></div>
        <div className="x16"></div>
        <div className="x17"></div>
        <div className="x18"></div>
        <div className="x19"></div>
        <div className="x20"></div>
        {/* Testimonials */}
        <div
          className="t1 relative justify-between bg-[#F7EFEC] p-[4rem]"
          style={{
            boxShadow:
              "0px 55px 15px 0px rgba(0, 0, 0, 0.00), 0px 35px 14px 0px rgba(0, 0, 0, 0.01), 0px 20px 12px 0px rgba(0, 0, 0, 0.04), 0px 9px 9px 0px rgba(0, 0, 0, 0.07), 0px 2px 5px 0px rgba(0, 0, 0, 0.08)",
          }}
        >
          <div className="mb-[4rem] lg:mb-[170px]">
            <StyleMePrettyLogo fill="#000" />
          </div>
          <div className="flex flex-col gap-[3.2rem]">
            <p className="p-lg-reg lg:p-xl-reg">
              “I haven’t found another team that can deliver like Camber. The
              ROI is consistently great.”
            </p>
            <div className="flex flex-col gap-[.8rem]">
              <StarsBlack />
              <p className="p-sm-reg lg:p-norm-reg text-black/50">
                Founder & CEO / Style Me Pretty
              </p>
            </div>
          </div>
        </div>
        <div className="t2 relative p-[4rem] px-[2.4rem] lg:px-[4rem]">
          <div className="flex flex-col gap-[3.2rem]">
            <p className="text-[1.6rem] leading-[144%]">
              “Camber is solution-oriented and made my objectives a top
              priority. Their strategic advice helped turn my vision into
              reality.”
            </p>
            <div className="flex flex-col gap-[.8rem]">
              <StarsBlack />
              <p className="p-sm-reg lg:p-norm-reg text-black/50">
                Founder & CEO / To Eat List
              </p>
            </div>
          </div>
        </div>
        <div className="t3 relative p-[4rem] px-[2.4rem] lg:px-[4rem]">
          <div className="flex flex-col gap-[3.2rem]">
            <p className="text-[1.6rem] leading-[144%]">
              “Camber has top-notch employees and their work is high level. Most
              companies would enjoy working side by side with them.”
            </p>
            <div className="flex flex-col gap-[.8rem]">
              <StarsBlack />
              <p className="p-sm-reg lg:p-norm-reg text-black/50">
                Co-Founder / eDispatches
              </p>
            </div>
          </div>
        </div>
        <div className="t4 relative p-[4rem] px-[2.4rem] lg:px-[4rem]">
          <div className="flex flex-col gap-[3.2rem]">
            <p className="text-[1.6rem] leading-[144%]">
              &ldquo;Camber&apos;s organization and project management are the
              most impressive I&apos;ve ever seen.&rdquo;
            </p>
            <div className="flex flex-col gap-[.8rem]">
              <StarsBlack />
              <p className="p-sm-reg lg:p-norm-reg text-black/50">
                Founder & CEO / Unmanned Safety Institute
              </p>
            </div>
          </div>
        </div>
        <div className="t6 relative p-[4rem] px-[2.4rem] lg:px-[4rem]">
          <div className="flex flex-col gap-[3.2rem]">
            <p className="text-[1.6rem] leading-[144%]">
              “Camber is a long-term partner, and their extensive experience is
              showcased well in a reliable and intuitive product.”
            </p>
            <div className="flex flex-col gap-[.8rem]">
              <StarsBlack />
              <p className="p-sm-reg lg:p-norm-reg text-black/50">
                Founder & CEO / InvestorFuse
              </p>
            </div>
          </div>
        </div>
        <div className="t7 p-[4rem] px-[2.4rem] lg:px-[4rem]">
          <div className="flex flex-col gap-[3.2rem]">
            <p className="text-[1.6rem] leading-[144%]">
              “I couldn’t have found a more reliable partner. Expect an
              effective and collaborative process and quality products.”
            </p>
            <div className="flex flex-col gap-[.8rem]">
              <StarsBlack />
              <p className="p-sm-reg lg:p-norm-reg text-black/50">
                Founder & CEO / BreathPlayer
              </p>
            </div>
          </div>
        </div>
        <div
          className="t5 relative justify-between bg-[#0966BC] p-[4rem] text-white shadow-lg"
          style={{
            boxShadow:
              "0px 273px 77px 0px rgba(0, 0, 0, 0.00), 0px 175px 70px 0px rgba(0, 0, 0, 0.01), 0px 98px 59px 0px rgba(0, 0, 0, 0.04), 0px 44px 44px 0px rgba(0, 0, 0, 0.07), 0px 11px 24px 0px rgba(0, 0, 0, 0.08)",
          }}
        >
          <div className="mb-[4rem] lg:mb-[170px]">
            <AHLogo fill="#fff" />
          </div>
          <div className="flex flex-col gap-[3.2rem]">
            <p className="p-lg-reg lg:p-xl-reg">
              “Camber has helped us tremendously. They have phenomenal
              expertise. You can expect a deep talent pool and a modern
              ecosystem.”
            </p>
            <div className="flex flex-col gap-[.8rem]">
              <StarsBlack fill="#fff" />
              <p className="text-[1.6rem] leading-[168%] text-white">
                Director, Digital Workplace / AdventHealth
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialContainer;

// {
//   /* up top left */
// }
// <div className="absolute -left-px hidden h-[6.4rem] w-px border-r border-dashed lg:-top-[6.4rem] lg:block xl:-top-[12.8rem] xl:h-[12.8rem]"></div>;
// {
//   /* up top right */
// }
// <div className="absolute -right-px hidden h-[6.4rem] w-px border-r border-dashed lg:-top-[6.4rem] lg:block xl:-top-[12.8rem] xl:h-[12.8rem]"></div>;
// {
//   /* left top */
// }
// <div className="absolute -left-[12.8rem] -top-px hidden h-px w-[12.8rem] border-b border-dashed lg:block"></div>;
// {
//   /* left bottom */
// }
// <div className="absolute -bottom-px -left-[12.8rem] h-px w-[12.8rem] border-b border-dashed"></div>;
