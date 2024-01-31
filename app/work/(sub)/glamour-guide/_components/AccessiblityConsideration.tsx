const AccessiblityConsideration = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 px-4 py-20 md:pt-72">
      <h4
        className="uppercase font-bold text-2xl sm:text-3xl lg:pldsd-10 my-10 mx-auto lg:mx-0 text-center lg:text-right"
        style={{ letterSpacing: "7.5px", flex: "2" }}
      >
        Accessibility <br /> Considerations
      </h4>
      <div
        className="max-w-[500px] text-justify mx-auto lg:max-w-none lg:pr-20 flex flex-col gap-4 "
        style={{ flex: "3" }}
      >
        <p>
          Screen Reader Compatibility: Ensuring that all content, including
          text, images, and videos, is compatible with screen readers for users
          with visual impairments.
        </p>
        <p>
          Alternative Text for Images: Providing descriptive alternative text
          (alt text) for all images to convey their content and purpose to users
          who cannot see them.
        </p>
        <p>
          High Contrast and Readability: Choosing color combinations and fonts
          that provide sufficient contrast and readability for users with low
          vision or color blindness.
        </p>
      </div>
    </div>
  );
};

export default AccessiblityConsideration;
