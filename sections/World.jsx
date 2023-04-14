"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TitleText, TypingText } from "../components";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />
        <div className="absolute bottom-[10%] right-[10%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] shadow-[0_0px_20px_-1px_rgba(246,98,62,255)]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-[10%] left-[12%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] shadow-[0_0px_20px_-1px_rgba(242,157,176,255)]">
          <img src="people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-[50%] left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] shadow-[0_0px_20px_-1px_rgba(155,68,162,255)]">
          <img src="people-06.png" alt="people" className=" rounded-full w-full h-full" />
        </div>
        <div className="absolute top-[15%] right-[35%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] shadow-[0_0px_20px_-1px_rgba(50,63,106,255)]">
          <img src="people-03.png" alt="people" className="rounded-full w-full h-full" />
        </div>
        <div className="absolute top-[60%] left-[12%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] shadow-[0_0px_20px_-1px_rgba(252,210,92,255)]">
          <img src="people-05.png" alt="people" className="rounded-full w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
