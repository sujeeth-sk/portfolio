import { useState, useTransition } from "react";
import TabButton from "./TabButton";
import dev from "../assets/laptop.svg"
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>NextJS</li>
        <li>NodeJS</li>
        <li>ExpressJS</li>
        <li>MongoDB</li>
        <li>ReactJS</li>
        <li>TaiwlindCSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>VIT Vellore</li>
        <li>B Tech IT</li>
        <li>2022-2026</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  var val = isPending || true;
  val = val || true;


  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 ">
        <img src={dev} alt="" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col">
          <h2 className="text-4xl font-bold text-white mb-4 ">About Me</h2>
          <p className="text-base lg:text-lg">
          Full-stack developer proficient in building user-centric applications using modern web technologies. My skillset includes front-end development with TypeScript, JavaScript, HTML, CSS, Next.js, React.js, and Tailwind CSS, and back-end development with Node.js, Express.js, and MongoDB. I'm experienced with Git for version control and thrive in collaborative environments.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton> */}
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab)?.content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
