import { montserratAlt } from "@/app/layout";

const UserResearch = () => {
  return (
    <div className="py-20 px-4 sm:px-8 max-w-3xl mx-auto text-justify">
      <h3
        className={
          montserratAlt.className + " text-3xl md:text-5xl text-center mb-20"
        }
      >
        User Research
      </h3>
      <h3
        style={{ letterSpacing: "16px" }}
        className="text-2xl text-[#4F10A0] font-semibold mb-3 mt-10"
      >
        SUMMARY:
      </h3>
      <p>
        In my research for the El Lugar app, I used mixed methods to understand
        our users better. Initially targeting tech-savvy users, I found a wider
        range, including less tech-oriented individuals. This led to a design
        accommodating various tech skills. Key insights included a need for
        table reservation and promotion features, influencing the app&apos;s
        design to be more user-centered.
      </p>
      <h3
        style={{ letterSpacing: "16px" }}
        className="text-2xl text-[#4F10A0] font-semibold mb-3 mt-10"
      >
        PAIN POINTS:
      </h3>
      <p className="mb-4">
        Complex Navigation: <br /> Users find it challenging to navigate the app
        due to complex menus and unclear labels. Hence, the need to simplify the
        app&apos;s navigation by categorizing menu items logically
      </p>
      <p className="mb-4">
        Inconsistent Visual Design: <br />
        Users may be put off by inconsistent visual elements like varying fonts
        or colour scheme. I will use a consistent design system standardized
        color palette, typography, and UI elements throughout the app to create
        a cohesive and polished look.
      </p>
      <p className="mb-4">
        Difficult Menu Browsing: <br />
        Users struggle to browse the menu due to cluttered or poorly organized
        menu screens. Implement a user-friendly menu layout with clear
        categorization, high-quality images, and concise descriptions for each
        dish. Users may be put off by inconsistent visual elements like varying
        fonts or colour scheme. I will use a consistent design system
        standardized color palette, typography, and UI elements throughout the
        app to create a cohesive and polished look.
      </p>
      <p className="mb-4">
        Limited Feedback during Ordering: <br />
        Users may feel uncertain about the status of their orders. Provide
        real-time feedback during the ordering process. Use visual cues, to
        reassure users that their orders have been received and are being
        processed.
      </p>
    </div>
  );
};

export default UserResearch;
