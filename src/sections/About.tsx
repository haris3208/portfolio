"use client";
import SectionHeader from "@/components/SectionHeader";

import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import BookImage from "@/assets/images/book-cover.png";
import MapImage from "@/assets/images/map.png";
import SmileMemoji from "@/assets/images/memoji-smile.png";
import { motion } from "framer-motion";
import Card from "@/components/Card";
import Image from "next/image";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import { useRef } from "react";

const toolboxItems = [
  { title: "JavaScript", iconType: JavascriptIcon },
  { title: "HTML5", iconType: HTMLIcon },
  { title: "CSS3", iconType: CssIcon },
  { title: "REACT", iconType: ReactIcon },
  { title: "CHROME", iconType: ChromeIcon },
  { title: "GITHUB", iconType: GithubIcon },
];

const hobbies = [
  {
    title: "Painting",
    emoji: "P",
    top: "5%",
    left: "5%",
  },

  {
    title: "Photography",
    emoji: "P",
    top: "5%",
    left: "50%",
  },
  {
    title: "Hiking",
    emoji: "H",
    top: "40%",
    left: "35%",
  },
  {
    title: "Gaming",
    emoji: "G",
    top: "35%",
    left: "10%",
  },
  {
    title: "Music",
    emoji: "M",
    top: "45%",
    left: "70%",
  },
  {
    title: "Fitness",
    emoji: "F",
    top: "65%",
    left: "5%",
  },
  {
    title: "Reading",
    emoji: "R",
    top: "70%",
    left: "45%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className={"py-20 lg:py-28"} id={"about"}>
      <div className={"container"}>
        <SectionHeader
          title={"A Glimpse into my world"}
          eyebrow={"About Me"}
          description={
            "Learn more about who I am,What I do, and what inspires me"
          }
        />
        <div className={"mt-20 flex flex-col gap-8"}>
          <div
            className={"grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 "}
          >
            <Card className={"h-[320px] md:col-span-2 lg:col-span-1"}>
              <CardHeader
                title={"My Reads"}
                description={" Explore the books shaping my perspectives"}
              />
              <div className={"w-40 mx-auto mt-2"}>
                <Image src={BookImage} alt={"Book Cover"} />
              </div>
            </Card>
            <Card className={"h-[320px] p-0 md:col-span-3 lg:col-span-2"}>
              <CardHeader
                title={"My Toolbox"}
                description={
                  "Explore the Technologies and tools I use to craft exceptional digital experiences"
                }
                className={"px-6 pt-6"}
              />
              <div>
                <ToolboxItems
                  items={toolboxItems}
                  itemsWrapperClassName={
                    "animate-move-left [animation-duration:30s]"
                  }
                />
                <ToolboxItems
                  items={toolboxItems}
                  itemsWrapperClassName={
                    "animate-move-right [animation-duration:15s]"
                  }
                  className={"mt-6"}
                />
              </div>
            </Card>
          </div>

          <div
            className={"grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3"}
          >
            <Card
              className={
                "h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2"
              }
            >
              <CardHeader
                title={"Beyond the Code"}
                description={
                  "Explore my interests and hobbies beyond the digital realm"
                }
                className={"p-6"}
              />

              <div className={"relative flex-1"} ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className={
                      "inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    }
                    style={{ left: hobby.left, top: hobby.top }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className={"font-semibold text-gray-950"}>
                      {hobby.title}
                    </span>
                    <span className={"text-gray-950"}>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card
              className={"h-[320px] p-0 relative md:col-span-2 lg:col-span-1"}
            >
              <Image
                src={MapImage}
                alt={"map Image"}
                className={"h-full w-full object-cover object-left-top"}
              />
              <div
                className={
                  "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:rounded-full after:-outline-offset-2 after:outline-gray-950/30"
                }
              >
                <div
                  className={
                    "absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"
                  }
                ></div>
                <div
                  className={
                    "absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10 "
                  }
                ></div>
                <Image
                  src={SmileMemoji}
                  alt={"Smile Memoji Image"}
                  className={"size-20"}
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
