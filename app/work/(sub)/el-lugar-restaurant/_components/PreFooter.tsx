import React from "react";

const PreFooter = () => {
  return (
    <div className="bg-[#461196] text-white py-16 px-4">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row max-w-2xl text-justify  mx-auto gap-10 mb-16">
          <h4
            className="shrink-0 text-2xl font-semibold text-center md:text-right"
            style={{ flex: "1", letterSpacing: "7.5px" }}
          >
            IMPACT
          </h4>
          <p className="shrink-0" style={{ flex: "2" }}>
            Environmental Impact: Digital menus and online ordering can reduce
            the need for printed menus and paper receipts, contributing to
            environmental sustainability.
            <br /> User-Centered Design: The app&apos;s user-centered design
            serves as a model for other businesses, emphasizing the importance
            of understanding and meeting customer needs through research and
            design.
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
            User Research is Vital: El Lugar&apos;s success is rooted in
            comprehensive user research, emphasizing the significance of
            understanding customer preferences, behaviors, and pain points..
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
