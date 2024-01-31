import { montserratAlt } from "@/app/layout";

const ProjectOverview = () => {
  const data = [
    {
      left: "The Product",
      right: [
        "GlamourGuide is your comprehensive online destination for makeup tutorials, beauty education, and skincare expertise. Our platform empowers makeup enthusiasts, novices, and professionals to master the art of makeup through expertly curated tutorials and in-depth courses.",
      ],
    },
    {
      left: "Project Goal",
      right: [
        "The primary goal of GlamourGuide is to empower users to confidently express their unique beauty by offering accessible, expert-led makeup tutorials and comprehensive beauty education",
      ],
    },
    {
      left: "The problem",
      right: [
        "GlamourGuide aims to solve the problem of limited accessibility to high-quality makeup tutorials and beauty education by providing a user-friendly platform for individuals of all skill levels and backgrounds.",
      ],
    },
    {
      left: "Role on Project",
      right: [
        "Role on Project: Lead UX designer and Researcher",
        "Responsibilities: User research, wire framing, prototyping, creating of mockups, conducting usability test, etc.",
      ],
    },
    {
      left: "Duration",
      right: ["2 Months"],
    },
  ];
  return (
    <div className="bg-[#800020] pb-28 pt-80 md:pt-28 text-white mx-auto px-4">
      <h2
        className={
          montserratAlt.className +
          " text-5xl text-center mb-16 md:mb-20 flex flex-col md:block"
        }
      >
        <span className="">Project</span>{" "}
        <span className="text-yellow-500 -mt-5 z-10 md:z-0 md:mt-0">
          Overview
        </span>
      </h2>
      <div className="max-w-xl md:max-w-4xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col last-of-type:flex-row last-of-type:items-center md:flex-row justify-center items-start md:items-center gap-4 lg:gap-10 mb-12 "
          >
            <h4
              className="shrink-0 font-medium uppercase text-[22px] md:text-[27px]  md:text-right"
              style={{ letterSpacing: "7.5px", flex: "2" }}
            >
              {item.left}
            </h4>
            <div className="shrink-0 text-justify md:" style={{ flex: "3" }}>
              {item.right.map((inner, i) => (
                <p key={i}>{inner}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectOverview;
