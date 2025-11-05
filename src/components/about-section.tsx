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
            Sobre <span className="text-primary">Mí</span>
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
            <div className="absolute inset-0 bg-gradient-to-br from-primary-darker to-primary rounded-3xl blur-3xl opacity-20" />
            <Image
              src="https://i.postimg.cc/MHYWtH8x/about-image.png"
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
                Desde que empecé a programar, descubrí lo mucho que disfruto creando cosas desde cero y viendo cómo una idea puede transformarse en algo funcional. Me gusta enfrentarme a nuevos retos, entender cómo funcionan las cosas y buscar siempre la mejor forma de hacerlas. La programación, para mí, es una forma de aprender constantemente y de mejorar con cada línea de código.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Soy una persona curiosa y con ganas de seguir creciendo. Me motiva aprender, compartir ideas y seguir especializándome en desarrollo web e ingeniería de software, explorando nuevas tecnologías que me inspiren a seguir creando.
              </p>
            </div>

            {/* Intereses */}
            <div className="pt-6">
              <h3 className="text-xl mb-4 text-primary">Cuando no estoy programando...</h3>
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 p-4 bg-card border border-border border-outline hover:border-primary-darker rounded-lg"
                >
                  <IconDeviceTvOld className="w-6 h-6 text-primary" />
                  <span className="text-foreground">Películas y Series</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 p-4 bg-card border border-border border-outline hover:border-primary-darker rounded-lg"
                >
                  <IconHelmet className="w-6 h-6 text-primary" />
                  <span className="text-foreground">Formula 1</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-card border border-border border-outline hover:border-primary-darker rounded-lg"
                >
                  <a href="https://www.instagram.com/kilamperphoto/?hl=es" target="_blank" className="flex items-center gap-3 p-4">
                    <IconCamera className="w-6 h-6 text-primary" />
                    <span className="text-foreground">Fotografía</span>
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 p-4 bg-card border border-border border-outline hover:border-primary-darker rounded-lg"
                >
                  <IconDeviceGamepad className="w-6 h-6 text-primary" />
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