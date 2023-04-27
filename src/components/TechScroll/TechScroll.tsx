import React from "react";
import Tag from "./subcomponents/Tag";
import InfiniteSlider from "./subcomponents/InfiniteSlider";

type Props = {};

const TAGS = [
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  "Typescript",
  "Tailwind",
  "ChakraUI",
  "React",
  "Next.js",
  "Gatsby",
  "Firebase",
  "Node.js",
  "Three.js",
  "GraphQL",
  "UI/UX",
  "SVG",
  "animation",
  "webdev",
];
const DURATION = 15000;
const ROWS = 2;
const TAGS_PER_ROW = 20;

const deterministicRandom = (seed: number, min: number, max: number) =>
  (((seed * 9301 + 49297) % 233280) / 233280) * (max - min) + min;

const deterministicShuffle = (arr: string[], seed: number) => {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(deterministicRandom(seed + i, 0, i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

const TechScroll = (props: Props) => (
  <div className="w-full min-h-[300px] flex flex-col justify-center items-center">
    <div className="relative flex flex-col w-full gap-4 py-2 overflow-hidden max-w-screen-2xl">
      {[...new Array(ROWS)].map((_, i) => (
        <InfiniteSlider
          key={i}
          duration={Math.floor(
            deterministicRandom(i, DURATION - 10000, DURATION + 30000)
          )}
          reverse={false}
        >
          {deterministicShuffle(TAGS, i)
            .slice(0, TAGS_PER_ROW)
            .map((tag) => (
              <Tag text={tag} key={tag} />
            ))}
        </InfiniteSlider>
      ))}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-background via-transparent to to-background" />
    </div>
  </div>
);

export default TechScroll;
