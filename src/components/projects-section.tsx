"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

import {
  IconBrandGithub,
  IconExternalLink,
  IconDownload
} from "@tabler/icons-react";

import projectsData from "../../data/projects.json";
import { useLanguage } from "./language-context";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  downloadUrl: string;
  highlighted: boolean;
}

const allProjects: Project[] = projectsData.projects;

function ProjectCard({ project, index, showAll }: { project: Project; index: number; showAll: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const { t } = useLanguage();

  // Helper to map project description translations
  const getProjectDescKey = (title: string) => {
    switch (title.toLowerCase()) {
      case "phobiaxperience": return "projects.desc.phobia";
      case "mapa guaguas municipales": return "projects.desc.guaguas";
      case "stellardive": return "projects.desc.stellar";
      case "dbreeze": return "projects.desc.dbreeze";
      case "textsnap": return "projects.desc.textsnap";
      case "image viewer": return "projects.desc.imageviewer";
      case "money calculator": return "projects.desc.money";
      default: return "";
    }
  };

  const descKey = getProjectDescKey(project.title);
  const translatedDescription = descKey ? t(descKey) : project.description;

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0
      }}
      exit={{
        opacity: 0,
        scale: 0.8,
        y: -20
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: "easeOut",
        layout: { duration: 0.5, ease: "easeOut" }
      }}
      className="group bg-card border border-border rounded-2xl overflow-hidden border-outline hover:border-primary-darker transition-all duration-300"
    >
      {/* Imagen del proyecto */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Contenido */}
      <div className="p-6 space-y-4">
        <h3 className="text-2xl text-foreground">{project.title}</h3>
        <p className="text-muted-foreground">{translatedDescription}</p>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span key={i} className="px-3 py-1 rounded-full text-xs bg-primary-darker/10 text-primary hover:bg-primary-darker/20 transition-colors duration-200">
              {tech}
            </span>
          ))}
        </div>

        {/* Enlaces */}
        <div className="flex gap-3 pt-2">
          <button
            className="flex border-primary-darker text-primary hover:bg-primary-darker hover:text-white rounded-md py-1 w-full mx-auto items-center justify-center gap-4 font-bold cursor-pointer"
            onClick={() => window.open(project.githubUrl, '_blank')}
          >
            <IconBrandGithub className="w-5 h-5" />
            {t("projects.btn.code")}
          </button>
          {project.demoUrl && (
            <button
              className="flex border-primary-darker text-primary hover:bg-primary-darker hover:text-white rounded-md py-1 w-full mx-auto items-center justify-center gap-4 font-bold cursor-pointer"
              onClick={() => window.open(project.demoUrl, '_blank')}
            >
              <IconExternalLink className="w-5 h-5" />
              {t("projects.btn.demo")}
            </button>)}
          {project.downloadUrl && (
            <button
              className="flex border-primary-darker text-primary hover:bg-primary-darker hover:text-white rounded-md py-1 w-full mx-auto items-center justify-center gap-4 font-bold cursor-pointer"
              onClick={() => window.open(project.downloadUrl, '_blank')}
            >
              <IconDownload className="w-5 h-5" />
              {t("projects.btn.download")}
            </button>)}
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [arrangedProjects, setArrangedProjects] = useState<Project[]>([]);
  const [isClient, setIsClient] = useState(false);
  const [showAll, setShowAll] = useState(false);

  // Función para organizar los proyectos: el resaltado y luego el resto de forma aleatoria
  const arrangeProjects = () => {
    if (allProjects.length === 0) return [];

    // Incluir proyecto resaltado ("highlighted": true)
    const firstProject = allProjects.find(p => p.highlighted) || allProjects[0];

    // Si solo hay un proyecto, devolver solo ese
    if (allProjects.length === 1) return [firstProject];

    // Obtener el resto de proyectos (excluyendo el primero)
    const remainingProjects = allProjects.filter(p => p.title !== firstProject.title);

    // Desordenar todos los proyectos restantes de manera aleatoria
    const shuffled = [...remainingProjects].sort(() => 0.5 - Math.random());

    return [firstProject, ...shuffled];
  };

  useEffect(() => {
    // Marcar que estamos en el cliente y organizar proyectos
    setIsClient(true);
    setArrangedProjects(arrangeProjects());
  }, []);

  // Durante SSR, mostrar solo el primer proyecto. En el cliente, mostrar 3 o todos dependiendo de showAll
  const displayProjects = isClient
    ? (showAll ? arrangedProjects : arrangedProjects.slice(0, 3))
    : allProjects.slice(0, 1);

  const handleToggleProjects = () => {
    if (showAll) {
      const element = document.getElementById("projects");
      if (element) {
        // Offset scroll for header slightly or just standard scrollIntoView
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setShowAll(!showAll);
  };

  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/15">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4 text-foreground">
            {t("projects.title")} <span className="text-primary">{t("projects.title.highlight")}</span>
          </h2>
          <p className="text-muted-foreground text-lg">{t("projects.subtitle")}</p>
        </motion.div>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                showAll={showAll}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {allProjects.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-12"
          >
            <button
              onClick={handleToggleProjects}
              className="inline-flex items-center gap-2 bg-primary-darker text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              <i className={`fas fa-chevron-${showAll ? 'up' : 'down'}`}></i>
              {showAll ? t("projects.btn.less") : t("projects.btn.all")}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}