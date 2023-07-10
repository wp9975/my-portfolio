import React, { useEffect, useRef, useState } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import Typewriter from "typewriter-effect";
import background from "../assets/svg/hero/herobackground.svg";
import backgroundfront from "../assets/svg/hero/herobackgroundfront.svg";
import backgroundtreesfront from "../assets/svg/hero/herobackgroundTreesFront.svg";
import backgroundtreesback from "../assets/svg/hero/herobackgroundTreesBack.svg";
import backgroundtreesmiddle from "../assets/svg/hero/herobackgroundTreesMiddle.svg";
import { useInView } from "react-intersection-observer";
import Birds from "./subcomponents/Birds";

const Footer = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <section className="relative flex items-center justify-center min-h-screen">
      <ParallaxBanner
        layers={[
          {
            image: backgroundfront,
            speed: -15,
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
              <div
                ref={ref}
                className="relative z-10 flex flex-col items-center justify-center h-full text-center "
              >
                <div className="px-8 py-4 rounded-md bg-primary-300">
                  <h1 className="text-5xl font-bold">
                   {inView ? 
                    <Typewriter  
                      onInit={(typewriter) => {
                        typewriter
                          .pauseFor(400)
                          .typeString("Thanks for visiting my website")
                          .pauseFor(400)
                          .deleteAll()
                          .typeString("I hope you enjoyed it")
                          .pauseFor(1000)
                          .deleteAll()
                          .typeString("Have a nice day!")
                          .start();
                        }

                      }
                    />
          : ''}
                  </h1>
                </div>
              </div>
            ),
          },
          {
            image: backgroundtreesfront,
            translateY: [0, 0],
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
      <Birds/>
    </section>
  );
};

export default Footer;
