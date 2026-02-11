"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

import {
    IconBrandGithub,
    IconExternalLink,
    IconDownload
} from "@tabler/icons-react";

import projectsData from "../../data/projects.json";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  downloadUrl: string;
}

const allProjects: Project[] = projectsData.projects;


function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
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
        <p className="text-muted-foreground">{project.description}</p>

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
                Código
            </button>
            {project.demoUrl && (
            <button
                className="flex border-primary-darker text-primary hover:bg-primary-darker hover:text-white rounded-md py-1 w-full mx-auto items-center justify-center gap-4 font-bold cursor-pointer"
                onClick={() => window.open(project.demoUrl, '_blank')}
            >
                <IconExternalLink className="w-5 h-5" />
                Demo
            </button>)}
            {project.downloadUrl && (
            <button
                className="flex border-primary-darker text-primary hover:bg-primary-darker hover:text-white rounded-md py-1 w-full mx-auto items-center justify-center gap-4 font-bold cursor-pointer"
                onClick={() => window.open(project.downloadUrl, '_blank')}
            >
                <IconDownload className="w-5 h-5" />
                Descarga
            </button>)}
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [selectedProjects, setSelectedProjects] = useState<Project[]>([]);
  const [isClient, setIsClient] = useState(false);

  // Función para seleccionar proyectos: el primero + 2 aleatorios del resto
  const selectProjects = () => {
    if (allProjects.length === 0) return [];
    
    // Siempre incluir el primer proyecto
    const firstProject = allProjects[0];
    
    // Si solo hay un proyecto, devolver solo ese
    if (allProjects.length === 1) return [firstProject];
    
    // Obtener el resto de proyectos (excluyendo el primero)
    const remainingProjects = allProjects.slice(1);
    
    // Si hay 2 o menos proyectos restantes, tomar todos
    if (remainingProjects.length <= 2) {
      return [firstProject, ...remainingProjects];
    }
    
    // Seleccionar 2 proyectos aleatorios del resto
    const shuffled = [...remainingProjects].sort(() => 0.5 - Math.random());
    const randomProjects = shuffled.slice(0, 2);
    
    return [firstProject, ...randomProjects];
  };

  useEffect(() => {
    // Marcar que estamos en el cliente y seleccionar proyectos
    setIsClient(true);
    setSelectedProjects(selectProjects());
  }, []);

  // Durante SSR, mostrar solo el primer proyecto para evitar hydration mismatch
  const displayProjects = isClient ? selectedProjects : allProjects.slice(0, 1);

  return (
    <section className="py-20 px-6 bg-secondary/15">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4">
            Mis <span className="text-primary">Proyectos</span>
          </h2>
          <p className="text-muted-foreground text-lg">Algunos de los proyectos en los que he trabajado</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Kilamper?tab=repositories"
            target="_blank"
            className="inline-block text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors duration-300"
          >
            <i className="fas fa-chevron-down mr-2"></i>
            Ver todos los proyectos
          </a>
        </motion.div>
      </div>
    </section>
  );
}