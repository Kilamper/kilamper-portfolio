"use client";

import Image from "next/image";
import { useState } from "react";

import {
  IconMail
} from "@tabler/icons-react";

import { ContactModal } from "./contact-modal";

export const HeroSection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

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
            <span className="text-foreground">Kilian Jesús</span>
            <br />
            <span className="text-primary">Armas Pérez</span>
          </h1>

          <p
            className="text-lg lg:text-xl text-muted-foreground max-w-xl"
          >
            Graduado en Ingeniería Informática | Desarrollador Web y Móvil
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
              Contáctame
            </button>
          </div>
        </div>

        {/* Imagen del usuario */}
        <div
          className="flex justify-center lg:justify-end"
        >
          <Image
            src="https://i.postimg.cc/Hsv4B8bR/profile-image-transparent.png"
            alt="Kilian Jesús Armas Pérez"
            width={500}
            height={500}
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[600px] object-cover shadow-2xl"
          />
        </div>
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </section>
  );
}