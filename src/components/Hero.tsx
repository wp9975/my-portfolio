import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import Typewriter from "typewriter-effect";
import background from "../assets/svg/hero/herobackground.svg";
import backgroundfront from "../assets/svg/hero/herobackgroundfront.svg";
import backgroundtreesfront from "../assets/svg/hero/herobackgroundTreesFront.svg";
import backgroundtreesback from "../assets/svg/hero/herobackgroundTreesBack.svg";
import backgroundtreesmiddle from "../assets/svg/hero/herobackgroundTreesMiddle.svg";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center w-full min-h-screen">
      <ParallaxBanner
        layers={[
          {
            image: background,
            speed: 0,
          },
          {
            image: backgroundfront,
            speed: -30,
          },
          {
            image: backgroundtreesback,

            translateY: [-10, 10],
          },

          {
            image: backgroundtreesmiddle,
            translateY: [-10, 30],
          },
          {
            speed: -50,
            children: (
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center ">
                <div className="px-8 py-4 rounded-md bg-primary-300">
                <h2 className="mt-4 text-3xl">My name is Wojciech</h2>
                <h1 className="text-5xl font-bold">
                  <Typewriter
                    options={{
                      strings: [
                        "I'm a Front End Developer",
                        "I'm a Web Developer",
                        "I'm a Software Developer",
                        "I'm a Programmer",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h1>
                </div>
              </div>
            ),
          },
          {
            image: backgroundtreesfront,
            translateY: [10, -5],
          },
        ]}
        className="w-full h-full"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </section>
  );
};

export default Hero;
