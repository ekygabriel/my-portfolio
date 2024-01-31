import React from "react";

const PreFooter = () => {
  return (
    <div className="bg-yellow-500 text-black py-16 px-4">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row max-w-2xl text-justify  mx-auto gap-10 mb-16">
          <h4
            className="shrink-0 text-2xl font-semibold text-center md:text-right"
            style={{ flex: "1", letterSpacing: "7.5px" }}
          >
            IMPACT
          </h4>
          <p className="shrink-0" style={{ flex: "2" }}>
            By fostering a platform dedicated to accessibility in design, A11y
            Designs will shift the paradigm from designs that cater to the
            majority to designs that are inclusive for all, including users with
            disabilities. This inclusivity will ensure more individuals can
            effectively engage with both digital and physical environments.
          </p>
        </div>
        <div className="flex flex-col md:flex-row max-w-2xl text-justify  mx-auto gap-10 border-b border-black pb-20 sm:border-none">
          <h4
            className="shrink-0 text-2xl font-semibold text-center md:text-right"
            style={{ flex: "1", letterSpacing: "7.5px" }}
          >
            LEARNINGS
          </h4>
          <p className="shrink-0" style={{ flex: "2" }}>
            Learnings: Effective design should not only be aesthetically
            pleasing but must primarily address and solve a problem, thereby
            benefiting others.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
