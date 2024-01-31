import React from "react";

const PreFooter = () => {
  return (
    <div className="bg-[#800020] text-[#FCFBF4] py-16 px-4">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row max-w-2xl text-justify  mx-auto gap-10 mb-16 ">
          <h4
            className="shrink-0 text-2xl font-semibold text-center md:text-right"
            style={{ flex: "1", letterSpacing: "7.5px" }}
          >
            IMPACT
          </h4>
          <p className="shrink-0" style={{ flex: "2" }}>
            The design of GlamourGuide has the potential to positively impact
            individuals by providing accessible, empowering, and engaging makeup
            education, fostering inclusivity, and boosting self-confidence and
            creativity in the world of beauty.
          </p>
        </div>
        <div className="flex flex-col md:flex-row max-w-2xl text-justify  mx-auto gap-10 pb-20">
          <h4
            className="shrink-0 text-2xl font-semibold text-center md:text-right"
            style={{ flex: "1", letterSpacing: "7.5px" }}
          >
            LEARNINGS
          </h4>
          <p className="shrink-0" style={{ flex: "2" }}>
            Accessibility First: Prioritizing accessibility features is crucial
            to ensure inclusivity for users with disabilities, aligning with the
            platform&apos;s commitment to accessibility. <br /> User-Centered
            Navigation: The navigation structure should be intuitive and
            user-centered, making it easy for users to find content and courses
            relevant to their needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
