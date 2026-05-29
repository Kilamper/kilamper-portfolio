"use client";

import { motion } from "framer-motion";

import {
  IconDeviceTvOld,
  IconDeviceGamepad,
  IconCamera,
  IconHelmet
} from "@tabler/icons-react";

import Image from "next/image";
import { useLanguage } from "./language-context";

export function AboutSection() {
  const { t } = useLanguage();

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
          <h2 className="text-4xl lg:text-5xl mb-4 text-foreground">
            {t("about.title")} <span className="text-primary">{t("about.title.highlight")}</span>
          </h2>
          <p className="text-muted-foreground text-lg">{t("about.subtitle")}</p>
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
            <div className="absolute inset-0 from-primary-darker to-primary" />
            <Image
              src="about-image.svg"
              width={1000}
              height={1000}
              alt="About me"
              className="relative w-full object-cover"
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
                {t("about.bio1")}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("about.bio2")}
              </p>
            </div>

            {/* Intereses */}
            <div className="pt-6">
              <h3 className="text-xl mb-4 text-primary">{t("about.notcoding")}</h3>
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 p-4 bg-card border border-border border-outline hover:border-primary-darker rounded-lg"
                >
                  <IconDeviceTvOld className="w-6 h-6 text-primary" />
                  <span className="text-foreground">{t("about.movies")}</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 p-4 bg-card border border-border border-outline hover:border-primary-darker rounded-lg"
                >
                  <IconHelmet className="w-6 h-6 text-primary" />
                  <span className="text-foreground">{t("about.formula1")}</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-card border border-border border-outline hover:border-primary-darker rounded-lg"
                >
                  <a href="https://www.instagram.com/kilamperphoto/?hl=es" target="_blank" className="flex items-center gap-3 p-4 justify-between">
                    <div className="flex items-center gap-3">
                      <IconCamera className="w-6 h-6 text-primary" />
                      <span className="text-foreground">{t("about.photography")}</span>
                    </div>
                    <i className="fa fa-external-link text-sm"></i>
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 p-4 bg-card border border-border border-outline hover:border-primary-darker rounded-lg"
                >
                  <IconDeviceGamepad className="w-6 h-6 text-primary" />
                  <span className="text-foreground">{t("about.videogames")}</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}