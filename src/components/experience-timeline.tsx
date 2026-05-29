"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

import experienceData from "../../data/experience.json";
import { useLanguage } from "./language-context";

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  logo: string;
}

const experiences: Experience[] = experienceData.experience;

function TimelineItem({ experience, index }: { experience: Experience; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  // Translate dynamically based on roles in JSON
  const isFullStack = experience.role === "Desarrollador Full Stack" || experience.role.includes("Full Stack");
  const translatedRole = isFullStack ? t("exp.role.fullstack") : t("exp.role.intern");
  const translatedPeriod = isFullStack ? t("exp.period.fullstack") : t("exp.period.intern");
  const translatedDesc = isFullStack ? t("exp.desc.fullstack") : t("exp.desc.intern");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Línea vertical */}
      <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-darker to-transparent" />

      {/* Punto en la línea */}
      <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-background border-4 border-background flex items-center justify-center">
        <i className="fas fa-circle-dot text-primary-darker" />
      </div>

      {/* Contenido */}
      <div className="bg-card border border-border rounded-xl p-6 border-outline hover:border-primary-darker transition-colors duration-300">
        <div className="flex gap-4">
          {/* Logo de la empresa */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-lg overflow-hidden bg-white">
              <Image src={experience.logo} alt={`${experience.company} logo`} width={64} height={64} className="object-cover" />
            </div>
          </div>

          {/* Información */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <h3 className="text-xl text-foreground">{translatedRole}</h3>
              <span className="text-sm text-primary whitespace-nowrap">{translatedPeriod}</span>
            </div>
            <p className="text-primary mb-2">{experience.company}</p>
            <p className="text-muted-foreground">{translatedDesc}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ExperienceTimeline() {
  const { t } = useLanguage();
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4 text-foreground">
            {t("exp.title")} <span className="text-primary">{t("exp.title.highlight")}</span>
          </h2>
          <p className="text-muted-foreground text-lg">{t("exp.subtitle")}</p>
        </motion.div>

        <div className="relative">
          {experiences.map((experience, index) => (
            <TimelineItem key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}