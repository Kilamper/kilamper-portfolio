"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import {
    IconCode,
    IconDatabase,
    IconDeviceMobile,
    IconPalette,
    IconUsers,
    IconBulb,
    IconCurrentLocation,
    IconMessage,
    IconClock,
    IconBolt
} from "@tabler/icons-react";

interface Skill {
  name: string;
  icon: React.ReactNode;
  description: string;
}

const hardSkills: Skill[] = [
  {
    name: "Desarrollo Frontend",
    icon: <IconCode className="w-6 h-6" />,
    description: "Astro, Angular, React, Next.js"
  },
  {
    name: "Desarrollo Backend",
    icon: <IconDatabase className="w-6 h-6" />,
    description: "Node.js, Laravel, MySQL, PostgreSQL"
  },
  {
    name: "Desarrollo Móvil",
    icon: <IconDeviceMobile className="w-6 h-6" />,
    description: "Android Studio, Kotlin, iOS/Android"
  },
  {
    name: "UI/UX Design",
    icon: <IconPalette className="w-6 h-6" />,
    description: "Figma, Diseño responsive"
  }
];

const softSkills: Skill[] = [
  {
    name: "Trabajo en Equipo",
    icon: <IconUsers className="w-6 h-6" />,
    description: "Colaboración efectiva y liderazgo"
  },
  {
    name: "Pensamiento Creativo",
    icon: <IconBulb className="w-6 h-6" />,
    description: "Soluciones innovadoras a problemas"
  },
  {
    name: "Orientación a Objetivos",
    icon: <IconCurrentLocation className="w-6 h-6" />,
    description: "Enfoque en resultados medibles"
  },
  {
    name: "Comunicación",
    icon: <IconMessage className="w-6 h-6" />,
    description: "Expresión clara de ideas técnicas"
  },
  {
    name: "Gestión del Tiempo",
    icon: <IconClock className="w-6 h-6" />,
    description: "Priorización y cumplimiento de plazos"
  },
  {
    name: "Adaptabilidad",
    icon: <IconBolt className="w-6 h-6" />,
    description: "Rápida adopción de nuevas tecnologías"
  }
];

function SkillCard({ skill, index, delay }: { skill: Skill; index: number; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: delay + index * 0.05 }}
      className="group bg-card border border-border rounded-xl p-6 border-outline hover:border-[#4522a0] hover:shadow-lg hover:shadow-[#4522a0]/20 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-[#4522a0]/10 text-[#a78bfa] group-hover:bg-[#4522a0] group-hover:text-white transition-all duration-300">
          {skill.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg mb-2 text-foreground">{skill.name}</h3>
          <p className="text-sm text-gray-400">{skill.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4">
            Habilidades & <span className="text-[#a78bfa]">Competencias</span>
          </h2>
          <p className="text-muted-foreground text-lg">Combinación de habilidades técnicas y personales</p>
        </motion.div>

        {/* Hard Skills */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl lg:text-3xl mb-8 text-[#a78bfa]"
          >
            Hard Skills
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hardSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} delay={0} />
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl lg:text-3xl mb-8 text-[#a78bfa]"
          >
            Soft Skills
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} delay={0.2} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}