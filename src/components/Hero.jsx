/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX}
        absolute
        inset-0
        top-[120px]
        max-w-7x1
        mx-auto
        flex
        flex-row
        items-start
        gap-5`}
      >
        <div>
          <h1 className={"${styles.heroHeadText} text-white"}>
            Hey, I'm<span className="text-[#915eff]"> Jesiah</span>
          </h1>
          <p className={"${styles.heroSubText} mt-2 text-white-100"}>
            My Documented Journey from Army medic{" "}
            <br className="sm:block hidden" /> to JS Developer
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div
            className="w-[35px] h-[64px]
          rounded-3xl border-4 border-secondary flex
          justify-center items-start p-2 "
          >
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
