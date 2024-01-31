const AccessiblityConsideration = () => {
  return (
    <div className="flex flex-col lg:flex-row max-w-[1200px] mx-auto gap-6 px-4 py-20">
      <h4
        className="uppercase font-bold text-2xl sm:text-3xl my-10 mx-auto lg:mx-0 text-center lg:text-right"
        style={{ letterSpacing: "7.5px", flex: "2" }}
      >
        Accessibility <br /> Considerations
      </h4>
      <div
        className="max-w-[500px] text-justify mx-auto lg:max-w-none lg:pr-20 flex flex-col gap-4 "
        style={{ flex: "3" }}
      >
        <p>
          Text Size and Font: Allow users to adjust text size and font
          preferences within the app settings to accommodate those with visual
          impairments.
        </p>
        <p>
          Color Contrast: Maintain a high color contrast between text and
          background elements to aid users with low vision or color blindness in
          reading content.
        </p>
        <p>
          I Inserted two sentence summaries describing each accessibility
          consideration applied in your designs.
        </p>
      </div>
    </div>
  );
};

export default AccessiblityConsideration;
