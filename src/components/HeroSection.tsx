import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Lottie from 'lottie-react';
import dev from "../assets/Animation - 1738615837780.json"

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm{" "} <br/>
            </span>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Sujeeth Kompella",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
                "Frontend Developer",
                1000,
                "Backend Developer",
                1000,
              ]}
              wrapper="span"
              speed={27}
              deletionSpeed={60}
            //   style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl mb-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            nostrum officia enim ipsa eum dolore quis quia vel totam voluptates.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full mr-4 bg-white hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white">
              Download SV
            </button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="col-span-5 place-self-center mt-4 lg:mt-0 ">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] overflow-hidden">
            {/* <img
              src={dev}
              alt="dev"
              width={300}
              height={300}
              className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 transform"
            /> */}
            <Lottie animationData={dev} className=""/>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
