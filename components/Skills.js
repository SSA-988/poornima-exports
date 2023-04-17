import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

function Skills() {
  const skills = [
    {
      id: "0",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 80,
    },
    {
      id: "0",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 80,
    },
    {
      id: "0",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 80,
    },
    {
      id: "0",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 80,
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center xl:flex-row max-w-[2000px] xl:p-10 min-h-screen justify-center xl:space-y-1 mx-auto items-center"
    >
      <h3 className="absolute top-24 tracking-[20px] uppercase text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500">
        Hover over a skill for proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill  skill={skill} />
        ))}

        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
