import { Squircle } from "@squircle-js/react";
import DrupalBackground from "../assets/images/drupal-bg.jpeg";
// import { squircleClip } from "../clipPaths";
import squircleClip from "../clipPaths/squircleClip.svg";

const ServicesContainer = () => {


  const gradientBackgroundStyle = {
    backgroundImage: `
      linear-gradient(102deg, #0085A2 0%, #4C00C9 100%),
      linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%),
      url(${DrupalBackground})
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: "overlay, hard-light, normal",

    
  };


  const bodyTextClasses =
    "text-[1.6rem] font-[400] leading-[168%] text-white";


  return (
    <Squircle
      cornerRadius={50}
      cornerSmoothing={.8}
      className="flex flex-col gap-[8rem] px-[4.8rem] py-[4.8rem] md:px-[11.2rem] md:py-[12.8rem]"
      style={gradientBackgroundStyle}
    >
      <div className="flex max-w-[77.6rem] flex-col gap-[1.6rem]">
        <p className="p-sm-bold md:p-norm-bold text-white">Services</p>
        <h2 className="gradient-text-green">
          Build smarter and succeed faster when the power of Drupal meets
          Camber’s standard of excellence.
        </h2>
        <p className="xl-reg p-norm-reg md:p-xl-reg text-white">
          Our elite Drupal team crafts tailored solutions that save you time and
          money in the long run by getting your project done right from the
          start.
        </p>
      </div>
      <div className="grid gap-16 gap-x-16 lg:grid-cols-3 xl:gap-y-32">
        <div className="flex flex-col gap-[1.6rem]">
          <h3 className="gradient-text-green">Drupal Development</h3>
          <p className={bodyTextClasses}>
            Empower your vision with precision-crafted Drupal sites that are as
            robust as they are beautiful. We blend innovation with simplicity,
            creating experiences that captivate and perform flawlessly—every
            time.
          </p>
        </div>
        <div className="flex flex-col gap-[1.6rem]">
          <h3 className="gradient-text-green">Drupal Migration</h3>
          <p className={bodyTextClasses}>
            Switch to Drupal without a hitch. Our seamless migration process
            ensures your content, SEO, and functionality make the leap
            effortlessly, keeping your business running at full speed.
          </p>
        </div>
        <div className="flex flex-col gap-[1.6rem]">
          <h3 className="gradient-text-green">Headless Drupal</h3>
          <p className={bodyTextClasses}>
            Go beyond the limits of the traditional CMS. With headless Drupal,
            we deliver lightning-fast, omnichannel experiences that engage your
            audience wherever they are, on any device.
          </p>
        </div>
        <div className="flex flex-col gap-[1.6rem]">
          <h3 className="gradient-text-green">Drupal Multisite</h3>
          <p className={bodyTextClasses}>
            Manage multiple sites with ease. With Drupal Multisite, we
            centralize control, streamline updates, and maintain consistency
            across all your sites, giving you the power to manage your digital
            ecosystem from a single, intuitive interface. Simplify management,
            amplify reach.
          </p>
        </div>
        <div className="flex flex-col gap-[1.6rem]">
          <h3 className="gradient-text-green">Drupal Integration</h3>
          <p className={bodyTextClasses}>
            Connect everything. Integrate Drupal with the tools that power your
            business—from CRM systems to marketing automation—creating a
            seamless, unified ecosystem that works smarter.
          </p>
        </div>
        <div className="flex flex-col gap-[1.6rem]">
          <h3 className="gradient-text-green">Drupal Security</h3>
          <p className={bodyTextClasses}>
            Stay secure with our comprehensive Drupal security solutions. We
            implement best practices, regular updates, and advanced monitoring
            to protect your site from threats. With Camber, your data and your
            users are always safe, ensuring peace of mind and uninterrupted
            performance.
          </p>
        </div>
      </div>
    </Squircle>
  );
};

export default ServicesContainer;

