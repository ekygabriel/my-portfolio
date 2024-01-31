import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// import PDFFile from "../../public/ekom.pdf";
import { EkomSVG } from "../assets";
import { MdOutlineArrowBack } from "react-icons/md";
import BackButton from "../contact/components/BackButton";
import Footer from "../components/footer/Footer";

export const metadata: Metadata = {
  title: "About",
};

const AboutPage = () => {
  return (
    <>
      <div className="pt-32 px-6 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-center max-w-3xl mx-auto">
          <figure className="relative w-48 h-48 rounded-full bg-yellow-500">
            <Image
              src={EkomSVG}
              alt="EkomObong"
              fill
              className="rounded-full"
            />
          </figure>
          <h3
            style={{
              letterSpacing: "7.75px",
              fontSize: "25px",
              fontWeight: "600",
            }}
          >
            <span>ABOUT</span>
            <span className="text-yellow-500 ml-1 inline-block">ME</span>
          </h3>
        </div>
        <p className="text-center text-sm mt-10 max-w-4xl">
          My name is EkomObong, I am a versatile designer with a rich background
          in UX design, architecture, interior design, graphics, and motion
          graphics. Currently transitioning my career towards UX, I am driven by
          a passion for creating accessible, human-centered designs. My journey
          is fueled by a blend of creative arts, including music and a deep
          appreciation for arts and design. As I aspire to be Nigeria&apos;s
          leading UX Designer, my portfolio showcases a commitment to innovation
          and excellence.
        </p>

        <div className="mt-16 flex sm:block flex-col items-center">
          <h3 className="flex items-center gap-10 text-2xl font-semibold after:content-[''] after:flex-auto after:h-[1.5px] after:hidden sm:after:block after:bg-gray-200">
            Skills and Tools
          </h3>

          <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-16 mt-10 px-2">
            <div className="flex flex-col gap-10">
              <div className="flex gap-7">
                <h4 className="min-w-[120px] text-right">Research Skills</h4>
                <ul className="font-light text-sm">
                  <li>User Interviews</li>
                  <li>Surveys and Questionnaires</li>
                  <li>Usability Testing</li>
                  <li>Persona Creation</li>
                  <li>User Journey Mapping</li>
                </ul>
              </div>
              <div className="flex gap-7">
                <h4 className="min-w-[120px] text-right">Design Skills</h4>
                <ul className="font-light text-sm">
                  <li>Wireframing</li>
                  <li>Prototyping</li>
                  <li>Information Architecture</li>
                  <li>Visual Design</li>
                  <li>UI Design</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-7 min-w-[340px] md:w-max">
              <h4 className="min-w-[120px] text-right">
                Design & <br /> Collaboration <br /> Tools
              </h4>
              <ul className="font-light text-sm">
                <li>Figma</li>
                <li>Canva</li>
                <li>Illustrator</li>
                <li>Photoshop</li>
                <li>InDesign</li>
                <li>Premier Pro</li>
                <li>Miro</li>
                <li>Sketch up</li>
                <li>Webflow</li>
                <li>Lumion</li>
                <li>Microsoft Office</li>
                <li>Procreate</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 flex sm:block flex-col items-center">
          <h3 className="flex items-center gap-10 text-2xl font-semibold after:content-[''] after:flex-auto after:h-[1.5px] after:hidden sm:after:block after:bg-gray-200">
            Hobbies and Interest
          </h3>
          <p className="mt-8 text-center sm:text-left">
            Playing the guitar and keyboard, composing music, reading about
            trends in the industry, Artificial intelligence.
          </p>
        </div>
        <div className="mt-16 flex flex-col items-center sm:items-stretch">
          <h3 className="flex items-center gap-10 text-2xl font-semibold after:content-[''] after:flex-auto after:h-[1.5px] sm:after:block after:bg-gray-200 after:hidden text-center">
            Qualifications
          </h3>
          <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:justify-between pt-8">
            <p>
              Google UX Design <br /> Professional Certificate <br /> 2023
            </p>
            <p>
              M.Sc. Architecture <br /> 2016
              <br />
            </p>
            <p>
              B.Sc. Architecture <br /> 2014
              <br />
            </p>
          </div>
        </div>
        <footer className="flex justify-between items-center mt-28">
          <BackButton />
          <Link
            href="ekom.pdf"
            target="_blank"
            className="bg-yellow-500 py-3 px-6 rounded-3xl font-semibold hover:bg-black hover:text-yellow-500 transition"
            style={{ boxShadow: "0px 4px 28.8px 0px rgba(255, 193, 7, 0.36)" }}
          >
            Download Resume{" "}
          </Link>
        </footer>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
