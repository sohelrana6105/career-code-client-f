import React from "react";
import { motion } from "motion/react";

import Team1 from "../../assets/freepic/team1.jpg";
import Team2 from "../../assets/freepic/team2.jpg";
const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-96">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1">
            <motion.img
              animate={{
                y: [0, 50, 0],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              src={Team1}
              className="max-w-sm rounded-t-4xl rounded-br-4xl border-blue-700 border-l-8 border-b-8 shadow-2xl"
            />

            <motion.img
              animate={{
                x: [100, 150, 100],
              }}
              transition={{ duration: 4, delay: 2, repeat: Infinity }}
              src={Team2}
              className="max-w-sm rounded-t-4xl rounded-br-4xl border-blue-700 border-l-8 border-b-8 shadow-2xl"
            />
          </div>

          <div className="flex-1">
            <motion.h1
              animate={{
                rotate: 360,
              }}
              className="text-5xl font-bold"
            >
              Latest{" "}
              <motion.span
                animate={{
                  color: ["#5bff33", "#ff33fc", "#5033ff", "#33ccff"],
                  transition: { duration: 4, repeat: Infinity },
                }}
              >
                Jobs
              </motion.span>{" "}
              News!
            </motion.h1>
            <div className="py-6">
              <motion.h1
                initial={{ scale: 0 }}
                animate={{
                  scale: 1,

                  transition: { duration: 4, repeat: Infinity },
                }}
                className="text-2xl font-bold"
              >
                Provident
              </motion.h1>
              cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
              exercitationem quasi. In deleniti eaque aut repudiandae et a id
              nisi.
            </div>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
