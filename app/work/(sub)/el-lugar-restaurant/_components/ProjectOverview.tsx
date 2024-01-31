import { montserratAlt } from "@/app/layout";

const ProjectOverview = () => {
  const data = [
    {
      left: "The Product",
      right: [
        "The El Lugar restaurant app is a digital platform designed to enhance the dining experience at a Spanish restaurant located in Lagos, Nigeria. This user-friendly mobile application likely offers features such as: Menu display, Online ordering, Reservation",
      ],
    },
    {
      left: "Project Goal",
      right: [
        "To improve the customer experience by enabling stress-free meal ordering.",
      ],
    },
    {
      left: "The problem",
      right: [
        "The current challenge is designing the El Lugar restaurant app in a way that simplifies and enhances the food ordering process for customers, allowing them to conveniently and efficiently purchase Spanish cuisine.",
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
      right: ["1 month"],
    },
  ];
  return (
    <div className="bg-[#461196] py-28 text-white mx-auto px-4">
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
