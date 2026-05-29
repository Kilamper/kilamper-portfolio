"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

import {
  IconMail
} from "@tabler/icons-react";

import { ContactModal } from "./contact-modal";
import { useLanguage } from "./language-context";

export const HeroSection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div
          className="space-y-6"
        >
          <h1
            className="text-5xl lg:text-7xl tracking-tight"
          >
            <span className="text-foreground">{t("hero.greeting")}</span>
            <br />
            <span className="text-primary">{t("hero.surname")}</span>
          </h1>

          <p
            className="text-lg lg:text-xl text-muted-foreground max-w-xl"
          >
            {t("hero.role")}
          </p>

          {/* Redes sociales y botón de contacto */}
          <div
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <a
              href="https://www.linkedin.com/in/kilamper/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg hover:bg-primary-darker transition-colors duration-300 text-center flex"
            >
              <i className="fab fa-linkedin-in text-2xl w-6 h-6"></i>
            </a>
            <a
              href="https://github.com/Kilamper"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg hover:bg-primary-darker transition-colors duration-300 text-center flex"
            >
              <i className="fab fa-github text-2xl w-6 h-6"></i>
            </a>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="bg-primary-darker text-white px-5 py-3 rounded-lg hover:bg-primary-dark transition-colors duration-300 text-center flex items-center cursor-pointer"
            >
              <IconMail className="mr-2 text-xl w-6 h-6" />
              {t("hero.contact")}
            </button>
          </div>
        </div>

        {/* Imagen del usuario con animación de baraja */}
        <div className="flex justify-center lg:justify-end relative">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-80 md:h-80 lg:w-[360px] lg:h-[400px] flex items-center justify-center">
            
            {/* Carta del fondo 1 (Gira a la izquierda) */}
            <motion.div
              initial={{ rotate: 0, x: 0, y: 0, scale: 0.95, opacity: 0 }}
              animate={{ rotate: -8, x: -16, y: 12, scale: 1, opacity: 0.8 }}
              whileHover={{ rotate: -15, x: -32, y: 24 }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
              className="absolute inset-0 bg-card border border-outline/60 rounded-2xl shadow-xl flex flex-col justify-between p-6 select-none overflow-hidden"
              style={{ zIndex: 1 }}
            >
              {/* Contenido decorativo de la carta 1 */}
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)`,
                backgroundSize: '16px 16px',
              }} />
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono text-primary/50 tracking-wider">PORTFOLIO.TSX</span>
                <span className="text-xs text-primary/30 font-bold">K</span>
              </div>
              <div className="my-auto space-y-2">
                <div className="w-12 h-1.5 bg-primary/20 rounded-full" />
                <div className="w-20 h-1.5 bg-primary/10 rounded-full" />
                <div className="w-16 h-1.5 bg-primary/15 rounded-full" />
              </div>
              <div className="flex justify-between items-end">
                <span className="text-[9px] font-mono text-muted-foreground/40">© 2026</span>
                <span className="text-[10px] font-mono text-primary/50">STUDENT</span>
              </div>
            </motion.div>

            {/* Carta del fondo 2 (Gira a la derecha) */}
            <motion.div
              initial={{ rotate: 0, x: 0, y: 0, scale: 0.98, opacity: 0 }}
              animate={{ rotate: 4, x: 12, y: -6, scale: 1, opacity: 0.9 }}
              whileHover={{ rotate: 10, x: 28, y: -12 }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
              className="absolute inset-0 bg-gradient-to-br from-card to-background border border-primary/20 rounded-2xl shadow-xl flex flex-col justify-between p-6 select-none overflow-hidden"
              style={{ zIndex: 2 }}
            >
              {/* Contenido decorativo de la carta 2 */}
              <div className="absolute -right-10 -bottom-10 w-24 h-24 bg-primary/5 rounded-full blur-xl" />
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono text-primary/60 tracking-wider">DEV.BUILD</span>
                <span className="text-xs text-primary/40 font-bold">A</span>
              </div>
              <div className="my-auto space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500/60 animate-pulse" />
                  <span className="text-[11px] font-mono text-foreground/60">Ready to build</span>
                </div>
                <div className="text-xs font-mono text-primary/60">{"const dev = 'creative';"}</div>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-[9px] font-mono text-muted-foreground/50">ENGINEER</span>
                <span className="text-xs text-primary/40">⚡</span>
              </div>
            </motion.div>

            {/* Carta principal (Imagen del usuario) */}
            <motion.div
              initial={{ rotate: 0, x: 0, y: 0, scale: 0.9, opacity: 0 }}
              animate={{ rotate: -2, x: -2, y: 2, scale: 1, opacity: 1 }}
              whileHover={{ rotate: 0, x: 0, y: -16, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="absolute inset-0 rounded-2xl shadow-2xl overflow-hidden border border-outline bg-card"
              style={{ zIndex: 3 }}
            >
              <Image
                src="https://i.postimg.cc/nzXyH7GH/profile-image-square.png"
                alt="Kilian Jesús Armas Pérez"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-2xl"
                priority
              />
              {/* Gradiente sutil sobre la foto para darle un toque premium */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent pointer-events-none" />
            </motion.div>

          </div>
        </div>
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </section>
  );
}