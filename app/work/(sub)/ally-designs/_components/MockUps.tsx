import { Tabs, Lappy } from "@/app/assets";
import { montserratAlt } from "@/app/layout";
import Image from "next/image";

const MockUps = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 basis-1/2 flex items-center justify-end md:bg-white bg-[#036] pb-20 order-1 md:order-none -mt-1 md:mt-0">
          <figure className="relative w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] md:w-[400px] md:h-[400px] -mr-10 z-10">
            <Image src={Tabs} alt="" fill className="pl-4 md:mt-16" />
          </figure>
        </div>
        <div className="flex-1 basis-1/2  bg-[#036] text-white px-8 md:px-20 py-20">
          <h3 className={montserratAlt.className + " text-5xl mb-10"}>
            Mock Ups
          </h3>
          <p className="mb-8">
            The design is well-optimized for responsiveness across different
            devices and screen sizes for a consistent user experience.
          </p>
          <p className="mb-8">
            The design elements are well sized for touch interaction, the goal
            is accessibility and
          </p>
          <p>
            The UI is clean and minimalist, which is great for user focus and
            minimizing distractions. The use of white space is effective as it
            enables the content easy to read and visually appealing.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row -mt-1">
        <div className="flex-1 basis-1/2 order-1 md:order-none py-20">
          <div className="max-w-[350px] mx-auto pt-60 px-2 md:px-0 md:pt-0 text-justify">
            <h4
              className="text-left uppercase font-bold text-[27px] my-10"
              style={{ letterSpacing: "5.5px" }}
            >
              Accessibility <br /> Considerations
            </h4>
            <p className="mb-6">
              Accessible Forms: Label all form fields clearly. Each input field
              has a corresponding &lt;label&gt; that screen readers can
              announce.
            </p>
            <p className="mb-6">
              Colour and Contrast: I made use of WebAIM&apos;s Color Contrast
              Checker to ensure that my color choices meet the minimum contrast
              ratios set by the Web Content Accessibility Guidelines (WCAG). 
            </p>
            <p>
              Alt text for Images: I provided alternative text for images so
              that users using screen readers might be able to navigate the site
            </p>
          </div>
        </div>
        <div className="flex-1 basis-1/2 flex bg-[#036]">
          <figure className="relative h-[450px] sm:h-[500px] md:h-[400px] w-full -mb-60 md:mb-0">
            <Image src={Lappy} alt="" fill className="pl-6 md:pl-0" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default MockUps;
