"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
}

const projects: Project[] = [
  {
    title: "PhobiaXperience",
    description: "Plataforma completa de comercio electrónico con pasarela de pagos, gestión de inventario y panel de administración.",
    image: "https://i.postimg.cc/CKN7gP3p/Teslasuit.webp",
    technologies: ["Unity", "C#", "VR", "Teslasuit"],
    githubUrl: "https://github.com/Kilamper/PhobiaXperience",
    demoUrl: ""
  },
  {
    title: "Task Management App",
    description: "Aplicación móvil para gestión de tareas y proyectos con sincronización en tiempo real y colaboración en equipo.",
    image: "https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    technologies: ["React Native", "Firebase", "TypeScript"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com"
  },
  {
    title: "Portfolio Designer",
    description: "Herramienta web para crear portfolios profesionales con templates personalizables y exportación a múltiples formatos.",
    image: "https://images.unsplash.com/photo-1669062897193-f8a4215c2033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    technologies: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com"
  }
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-[#4522a0] transition-all duration-300"
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
            <span key={i} className="px-3 py-1 rounded-full text-sm bg-primary-darker/10 text-primary hover:bg-primary-darker/20 transition-colors duration-200">
              {tech}
            </span>
          ))}
        </div>

        {/* Enlaces */}
        <div className="flex gap-3 pt-2">
            <button
                className="flex-1 border-[#4522a0] text-[#a78bfa] hover:bg-[#4522a0] hover:text-white"
                onClick={() => window.open(project.githubUrl, '_blank')}
            >
                <i className="fa-brands fa-github">GitHub</i>
            </button>
            <button
                className="flex-1 border-[#4522a0] text-[#a78bfa] hover:bg-[#4522a0] hover:text-white"
                onClick={() => window.open(project.demoUrl, '_blank')}
            >
                <i className="fa-solid fa-arrow-up-right-from-square">Demo</i>
            </button>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4">
            Mis <span className="text-[#a78bfa]">Proyectos</span>
          </h2>
          <p className="text-muted-foreground text-lg">Algunos de los proyectos en los que he trabajado</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}