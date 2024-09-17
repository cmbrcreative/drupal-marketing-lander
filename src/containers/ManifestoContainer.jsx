import React from "react";
import EmailIcon from "../assets/icons/EmailIcon";

const ManifestoContainer = () => {
  return (
    <div className="flex flex-col justify-center gap-[4rem] lg:flex-row lg:gap-[8rem]">
      <div className="gradient-text-blue max-w-[32rem] text-transparent">
        <h2 className="p-sm-bold md:p-norm-bold font-suisse text-black">
          Our Manifesto
        </h2>
        <p className="font-rebond text-[3.2rem] font-medium leading-[108%] tracking-[-0.048rem] lg:text-[4.8rem]">
          We’re ridding the world of bad software.
        </p>
      </div>
      <div className="gradient-text-blue max-w-[85.6rem] text-black">
        <p className="p-lg-reg lg:p-xl-reg">
          <span className="p-lg-bold lg:p-xl-bold text-transparent">
            Bad software is everywhere.
          </span>{" "}
          You see it all the time... websites that don’t work, apps that solve
          problems that don’t exist, subscription services that are downright
          unpleasant to use. Software is a critical part of our lives, yet much
          of it is frustratingly inadequate.
        </p>
        <br />
        <p className="p-lg-reg lg:p-xl-reg">
          Why should this matter so much?{" "}
          <span className="p-lg-bold lg:p-xl-bold text-transparent">
            Because every bad piece of software is a missed opportunity to make
            life better.
          </span>{" "}
          Every website that confuses rather than clarifies, every app that
          offers solutions in search of a problems, every software-as-a-service
          problems, every software-as-a-service that charges exorbitantly for
          subpar performance, reflects a fundamental disrespect for the needs
          and wants of the human beings it was meant to serve.
        </p>
        <br />
        <p className="p-lg-reg lg:p-xl-reg">
          <span className="p-lg-bold lg:p-xl-bold text-transparent">
            These aren’t just minor annoyances.
          </span>{" "}
          They’re significant barriers that waste time, strain resources, and
          diminish the quality of our daily interactions and therefore our
          lives.{" "}
        </p>
        <br />
        <p className="p-lg-reg lg:p-xl-reg">
          <span className="p-lg-bold lg:p-xl-bold text-transparent">
            We choose to give a damn.
          </span>{" "}
          We choose to reject apathy and pursue excellence. We choose to design
          software thoughtfully–from every line of code to every pixel on the
          screen. We choose to create digital products that are delightful for
          products that are delightful for the people who use them, good for our
          clients’ businesses, and a joy for our team to work on.
        </p>
        <br />
        <p className="p-lg-bold lg:p-xl-bold text-transparent">
          We choose to rid the world of bad software, one project at a time.
          Join us.
        </p>
        <a
          href=""
          className="p-lg-bold lg:p-xl-bold mt-[1.6rem] flex max-w-[18.6rem] items-center gap-[1.6rem] text-transparent lg:mt-[5.6rem] lg:max-w-full"
        >
          <EmailIcon />
        </a>
      </div>
    </div>
  );
};

export default ManifestoContainer;
