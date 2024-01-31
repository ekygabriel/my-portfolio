import { montserratAlt } from "@/app/layout";
import Card from "./Card";

import classes from "./UserResearch.module.scss";

const UserResearch = () => {
  return (
    <div className={classes.Container}>
      <h3
        className={
          montserratAlt.className + " text-3xl md:text-5xl text-center mb-20"
        }
      >
        User Research
      </h3>
      <div className="flex gap-16 lg:gap-6 flex-col lg:flex-row px-0 md:px-6">
        <div className="shrink-0 text-justify" style={{ flex: "3" }}>
          I conducted user research interviews which I then turned to empathy
          maps to better understand my target user and their needs. I discovered
          a diverse user base with varying levels of makeup expertise, from
          beginners to professionals, highlighting the importance of offering
          content suitable for all skill levels. Other users expressed a desire
          to have a wide range of makeup tutorials, also the need for
          interactive learning etc. Based on these findings, GlamourGuide is
          committed to offering a diverse, accessible, and user-centric platform
          that addresses the unique needs and preferences of its makeup-loving
          community.
        </div>
        <div
          className="shrink-0 flex gap-16 md:gap-4 flex-col md:flex-row md:max-w-none mx-auto"
          style={{ flex: "7" }}
        >
          <div className="flex-1 shrink-0">
            <Card className="w-full mb-[15px]">
              <div>
                <h5 className="font-bold text-lg">User 1:</h5> Sarah - Makeup
                Enthusiast
              </div>
            </Card>
            <div className="flex flex-wrap gap-[10px] justify-between">
              <Card className="flex flex-col justify-center w-[48%] min-h-40 md:min-h-72 xl:min-h-56">
                <h5 className="text-[#B76E79] text-lg font-bold">Says:</h5>
                <p>
                  {"I love experimenting with makeup and trying new looks."}
                </p>
              </Card>
              <Card className="flex flex-col justify-center w-[48%] min-h-40 md:min-h-72 xl:min-h-56">
                <h5 className="text-[#B76E79] text-lg font-bold">Thinks:</h5>
                <p>overwhelmed by the abundance of tutorials and products.</p>
              </Card>
              <Card className="flex flex-col justify-center w-[48%] min-h-40 md:min-h-72 xl:min-h-56">
                <h5 className="text-[#B76E79] text-lg font-bold">Does:</h5>
                <p>
                  Follow makeup artists on social media, watch tutorials, and
                  buy various makeup products.
                </p>
              </Card>
              <Card className="flex flex-col justify-center w-[48%] min-h-40 md:min-h-72 xl:min-h-56">
                <h5 className="text-[#B76E79] text-lg font-bold">Feels:</h5>
                <p>Excitement about learning new makeup techniques</p>
              </Card>
            </div>
            <Card className=" md:min-h-[135px] mt-[15px] text-sm">
              <b className="text-base">Pain Points:</b> Difficulty finding
              tutorials suitable for her skill level, spends too much time
              searching for quality content.
            </Card>
          </div>
          <div className="flex-1 shrink-0">
            <Card className="w-full mb-[15px]">
              <div>
                <h5 className="font-bold text-lg">User 2:</h5> Patricia - 60yr
                old Makeup Novice
              </div>
            </Card>
            <div className="flex flex-wrap gap-[10px] justify-between">
              <Card className="flex flex-col justify-center w-[48%] min-h-40 md:min-h-72 xl:min-h-56">
                <h5 className="text-[#B76E79] text-lg font-bold">Says:</h5>
                <p>
                  {
                    "I want to learn how to apply makeup, especially for special occasions."
                  }
                </p>
                <p>
                  {
                    "I wish makeup tutorials were more age-appropriate and easy to follow."
                  }
                </p>
              </Card>
              <Card className="flex flex-col justify-center w-[48%] min-h-40 md:min-h-72 xl:min-h-56">
                <h5 className="text-[#B76E79] text-lg font-bold">Thinks:</h5>
                <p>
                  How she can enhance her appearance so as to boost her
                  confidence through makeup
                </p>
              </Card>
              <Card className="flex flex-col justify-center w-[48%] min-h-40 md:min-h-72 xl:min-h-56 ">
                <h5 className="text-[#B76E79] text-lg font-bold">Does:</h5>
                <p>
                  Tries to follow makeup tutorials online but often feels
                  overwhelmed.
                </p>
                <p>
                  Explores makeup products at the store but is not sure which
                  ones to choose.
                </p>
              </Card>
              <Card className="flex flex-col justify-center w-[48%] min-h-40 md:min-h-72 xl:min-h-56">
                <h5 className="text-[#B76E79] text-lg font-bold">Feels:</h5>
                <p>
                  Frustration when makeup tutorials assume she already knows the
                  basics.
                </p>
                <p>
                  Anxious about looking outdated and not keeping up with beauty
                  trends.
                </p>
              </Card>
            </div>
            <Card className=" md:min-h-[135px] mt-[15px] text-sm">
              <b className="text-base">Pain Points:</b> Difficulty finding
              makeup tutorials that are age appropriate suiting her specific
              needs.
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserResearch;
