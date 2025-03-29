import React from "react";
import { projects, skills } from "@/lib/data";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";

// function SkillTag({ skill, index }: { skill: string; index: number }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.8 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       transition={{
//         type: "spring",
//         stiffness: 260,
//         damping: 20,
//         delay: 0.05 * index,
//       }}
//       whileHover={{ scale: 1.05, y: -2 }}
//       className="px-3 py-1 bg-muted/80 backdrop-blur-sm rounded-md text-sm border border-purple-500/10 shadow-sm"
//     >
//       {skill}
//     </motion.div>
//   );
// }


function SkillTag({ skill, index }: { skill: string; index: number }) {
  
  const skillToProjectMap: { [key: string]: string[] } = {};
  projects.forEach((project) => {
    project.skills.forEach((projectSkill) => {
      if (!skillToProjectMap[projectSkill]) {
        skillToProjectMap[projectSkill] = [];
      }
      skillToProjectMap[projectSkill].push(`project-${project.title.replace(/\s+/g, "-").toLowerCase()}`);
    });
  });

  const handleClick = () => {
    const targetProjects = skillToProjectMap[skill] || []; 
    console.log("Navegando a los proyectos:", targetProjects); 
    targetProjects.forEach((targetId) => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        console.log(`Navegando a ${targetId}`);
      } else {
        console.log(`No se encontró el ID para ${targetId}`);
      }
    });
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.05 * index,
      }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="px-3 py-1 bg-muted/80 backdrop-blur-sm rounded-md text-sm border border-purple-500/10 shadow-sm cursor-pointer"
      onClick={handleClick}
    >
      {skill}
    </motion.div>
  );
}





const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const skillCategoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-12 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            🛠️ Skills
          </h2>
        </MotionWrapper>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={skillCategoryVariants}>
            <GlassCard className="p-4">
              <h3 className="text-lg font-medium mb-3 text-center md:text-left flex items-center">
                <span className="mr-2 text-xl">💻</span> Programming Languages
              </h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {skills.programmingLanguages.map((skill, index) => (
                  <SkillTag key={skill} skill={skill} index={index} />
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={skillCategoryVariants}>
            <GlassCard className="p-4">
              <h3 className="text-lg font-medium mb-3 text-center md:text-left flex items-center">
                <span className="mr-2 text-xl">🎨</span> Software  Development
              </h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {skills.SoftwareDevelopment.map((skill, index) => (
                  <SkillTag key={skill} skill={skill} index={index} />
                ))}
              </div>
            </GlassCard>
          </motion.div>

          

          {/* <motion.div variants={skillCategoryVariants}>
            <GlassCard className="p-4">
              <h3 className="text-lg font-medium mb-3 text-center md:text-left flex items-center">
                <span className="mr-2 text-xl">🎨</span> Frontend Development
              </h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {skills.frontendDevelopment.map((skill, index) => (
                  <SkillTag key={skill} skill={skill} index={index} />
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={skillCategoryVariants}>
            <GlassCard className="p-4">
              <h3 className="text-lg font-medium mb-3 text-center md:text-left flex items-center">
                <span className="mr-2 text-xl">⚙️</span> Backend Development
              </h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {skills.backendDevelopment.map((skill, index) => (
                  <SkillTag key={skill} skill={skill} index={index} />
                ))}
              </div>
            </GlassCard>
          </motion.div> */}

          {/* <motion.div variants={skillCategoryVariants}>
            <GlassCard className="p-4">
              <h3 className="text-lg font-medium mb-3 text-center md:text-left flex items-center">
                <span className="mr-2 text-xl">🗄️</span> Database & Storage
              </h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {skills.databaseAndStorage.map((skill, index) => (
                  <SkillTag key={skill} skill={skill} index={index} />
                ))}
              </div>
            </GlassCard>
          </motion.div> */}
          <motion.div variants={skillCategoryVariants}>
            <GlassCard className="p-4">
              <h3 className="text-lg font-medium mb-3 text-center md:text-left flex items-center">
                <span className="mr-2 text-xl">🛜</span> IT Suport
              </h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {skills.itSupport.map((skill, index) => (
                  <SkillTag key={skill} skill={skill} index={index} />
                ))}
              </div>
            </GlassCard>
          </motion.div>
          <motion.div variants={skillCategoryVariants}>
            <GlassCard className="p-4">
              <h3 className="text-lg font-medium mb-3 text-center md:text-left flex items-center">
                <span className="mr-2 text-xl">👾</span> Etical Hacking
              </h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {skills.eticalHacking.map((skill, index) => (
                  <SkillTag key={skill} skill={skill} index={index} />
                ))}
              </div>
            </GlassCard>
          </motion.div>




          {/* <motion.div variants={skillCategoryVariants}>
            <GlassCard className="p-4">
              <h3 className="text-lg font-medium mb-3 text-center md:text-left flex items-center">
                <span className="mr-2 text-xl">🧰</span> Tools & Services
              </h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {skills.toolsAndServices.map((skill, index) => (
                  <SkillTag key={skill} skill={skill} index={index} />
                ))}
              </div>
            </GlassCard>
          </motion.div>  */}
        </motion.div>
      </div>
    </section>
  );
}
