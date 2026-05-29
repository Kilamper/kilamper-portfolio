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
import { useLanguage } from "./language-context";

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
    description: "Android Studio, Kotlin, Android"
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
    description: "Desempeño eficaz en entornos colaborativos"
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
  const { t } = useLanguage();

  // Helper to map skill translations
  const getSkillKeys = (name: string) => {
    switch (name) {
      case "Desarrollo Frontend": return { name: "skills.frontend", desc: "skills.frontend.desc" };
      case "Desarrollo Backend": return { name: "skills.backend", desc: "skills.backend.desc" };
      case "Desarrollo Móvil": return { name: "skills.mobile", desc: "skills.mobile.desc" };
      case "UI/UX Design": return { name: "skills.design", desc: "skills.design.desc" };
      case "Trabajo en Equipo": return { name: "skills.teamwork", desc: "skills.teamwork.desc" };
      case "Pensamiento Creativo": return { name: "skills.creative", desc: "skills.creative.desc" };
      case "Orientación a Objetivos": return { name: "skills.goals", desc: "skills.goals.desc" };
      case "Comunicación": return { name: "skills.communication", desc: "skills.communication.desc" };
      case "Gestión del Tiempo": return { name: "skills.time", desc: "skills.time.desc" };
      case "Adaptabilidad": return { name: "skills.adaptability", desc: "skills.adaptability.desc" };
      default: return null;
    }
  };

  const keys = getSkillKeys(skill.name);
  const translatedName = keys ? t(keys.name) : skill.name;
  const translatedDesc = keys ? t(keys.desc) : skill.description;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: delay + index * 0.05 }}
      className="group bg-card border border-border rounded-xl p-6 border-outline hover:border-primary-darker hover:shadow-lg hover:shadow-primary-darker/20 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-primary-darker/10 text-primary group-hover:bg-primary-darker group-hover:text-white transition-all duration-300">
          {skill.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg mb-2 text-foreground">{translatedName}</h3>
          <p className="text-sm text-gray-400">{translatedDesc}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const { t } = useLanguage();
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
          <h2 className="text-4xl lg:text-5xl mb-4 text-foreground">
            {t("skills.title")} <span className="text-primary">{t("skills.title.highlight")}</span>
          </h2>
          <p className="text-muted-foreground text-lg">{t("skills.subtitle")}</p>
        </motion.div>

        {/* Hard Skills */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl lg:text-3xl mb-8 text-primary"
          >
            {t("skills.hard")}
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
            className="text-2xl lg:text-3xl mb-8 text-primary"
          >
            {t("skills.soft")}
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