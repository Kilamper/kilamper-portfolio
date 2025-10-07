"use client";

import { motion } from "framer-motion";

import {
    IconDeviceTvOld,
    IconDeviceGamepad,
    IconCamera,
    IconHelmet
} from "@tabler/icons-react";

import Image from "next/image";

export function AboutSection() {
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
            Sobre <span className="text-[#a78bfa]">Mí</span>
          </h2>
          <p className="text-muted-foreground text-lg">Conoce más sobre mi historia y pasiones</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#4522a0] to-[#a78bfa] rounded-3xl blur-3xl opacity-20" />
            <Image
              src="https://i.postimg.cc/Hsv4B8bR/profile-image-transparent.png"
              width={500}
              height={500}
              alt="About me"
              className="relative w-full h-[500px] object-cover rounded-3xl shadow-2xl"
            />
          </motion.div>

          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg text-foreground leading-relaxed">
                Soy un desarrollador apasionado por crear experiencias digitales que marquen la diferencia. 
                Con más de 5 años de experiencia en el desarrollo web y móvil, he tenido la oportunidad de 
                trabajar en proyectos diversos que van desde startups innovadoras hasta empresas consolidadas.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mi enfoque se centra en escribir código limpio, mantenible y escalable, siempre buscando las 
                mejores prácticas y tecnologías modernas. Me encanta aprender constantemente y compartir 
                conocimiento con la comunidad de desarrolladores.
              </p>
            </div>

            {/* Intereses */}
            <div className="pt-6">
              <h3 className="text-xl mb-4 text-[#a78bfa]">Cuando no estoy programando...</h3>
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 p-4 bg-card border border-border border-outline hover:border-[#4522a0] rounded-lg"
                >
                  <IconDeviceTvOld className="w-6 h-6 text-[#a78bfa]" />
                  <span className="text-foreground">Películas y Series</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 p-4 bg-card border border-border border-outline hover:border-[#4522a0] rounded-lg"
                >
                  <IconHelmet className="w-6 h-6 text-[#a78bfa]" />
                  <span className="text-foreground">Formula 1</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 p-4 bg-card border border-border border-outline hover:border-[#4522a0] rounded-lg"
                >
                  <IconCamera className="w-6 h-6 text-[#a78bfa]" />
                  <span className="text-foreground">Fotografía</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 p-4 bg-card border border-border border-outline hover:border-[#4522a0] rounded-lg"
                >
                  <IconDeviceGamepad className="w-6 h-6 text-[#a78bfa]" />
                  <span className="text-foreground">Videojuegos</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}