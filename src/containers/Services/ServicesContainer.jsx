import { Squircle } from "@squircle-js/react";
import { servicesConstants } from "./_servicesConstants";

const ServicesContainer = () => {
  const gradientBackgroundStyle = {
    backgroundImage: `
      linear-gradient(102deg, #0085A2 0%, #4C00C9 100%),
      linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%),
      url(${servicesConstants.backgroundImage})
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: "overlay, hard-light, normal",
  };

  return (
    <Squircle
      cornerRadius={50}
      cornerSmoothing={0.8}
      className="flex flex-col gap-[8rem] px-[4.8rem] py-[4.8rem] md:px-[11.2rem] md:py-[12.8rem]"
      style={gradientBackgroundStyle}
    >
      <div className="flex max-w-[77.6rem] flex-col gap-[1.6rem]">
        <p className="p-sm-bold md:p-norm-bold text-white">Services</p>
        <h2 className="gradient-text-green">{servicesConstants.title}</h2>
        <p className="xl-reg p-norm-reg md:p-xl-reg text-white">
          {servicesConstants.description}
        </p>
      </div>
      <div className="grid gap-16 gap-x-16 lg:grid-cols-3 xl:gap-y-32">
        {servicesConstants.services.map((service, index) => (
          <div className="flex flex-col gap-[1.6rem]" key={index}>
            <h3 className="gradient-text-green">{service.title}</h3>
            <p className="text-[1.6rem] font-[400] leading-[168%] text-white">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </Squircle>
  );
};

export default ServicesContainer;
