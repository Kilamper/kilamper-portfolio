"use client";

import { motion } from "framer-motion";

export function BackgroundPattern() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Patrón de puntos sutil */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}
      />

      {/* Símbolos de código flotantes */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-[15%] text-primary text-6xl opacity-[0.03]"
      >
        <i className="fas fa-code"></i>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 25, 0],
          opacity: [0.04, 0.08, 0.04],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute top-1/3 right-[10%] text-primary-dark text-5xl opacity-[0.04]"
      >
        {"{ }"}
      </motion.div>

      <motion.div
        animate={{
          y: [0, -15, 0],
          opacity: [0.03, 0.07, 0.03],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/4 left-[20%] text-primary-darker text-4xl opacity-[0.03]"
      >
        <i className="fas fa-laptop-code"></i>
      </motion.div>

      <motion.div
        animate={{
          rotate: [0, 5, 0],
          opacity: [0.04, 0.08, 0.04],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-2/3 right-[25%] text-primary-light text-7xl opacity-[0.04]"
      >
        {"()"}
      </motion.div>

      {/* Etiquetas HTML flotantes */}
      <motion.div
        animate={{
          x: [0, 10, 0],
          y: [0, -10, 0],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[15%] right-[35%] text-primary text-3xl opacity-[0.03] font-mono"
      >
        {"<div>"}
      </motion.div>

      <motion.div
        animate={{
          x: [0, -15, 0],
          opacity: [0.04, 0.07, 0.04],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute bottom-[30%] right-[15%] text-primary-dark text-3xl opacity-[0.04] font-mono"
      >
        {"</html>"}
      </motion.div>

      {/* Iconos de programación */}
      <motion.div
        animate={{
          rotate: [0, 360],
          opacity: [0.04, 0.08, 0.04],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[40%] left-[10%] opacity-[0.04]"
      >
        <i className="fas fa-code"></i>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, 10, 0],
          opacity: [0.05, 0.09, 0.05],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-[60%] right-[40%] opacity-[0.05]"
      >
        <i className="fas fa-terminal"></i>
      </motion.div>

      <motion.div
        animate={{
          rotate: [0, -15, 0],
          scale: [1, 1.1, 1],
          opacity: [0.04, 0.07, 0.04],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
        className="absolute bottom-[20%] left-[35%] opacity-[0.04]"
      >
        <i className="fas fa-gamepad"></i>
      </motion.div>

      {/* Símbolos de lenguajes de programación */}
      <motion.div
        animate={{
          y: [0, -12, 0],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-[25%] left-[40%] text-primary-light text-2xl opacity-[0.03] font-mono"
      >
        {"function()"}
      </motion.div>

      <motion.div
        animate={{
          x: [0, 8, 0],
          opacity: [0.04, 0.07, 0.04],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
        className="absolute bottom-[45%] left-[25%] text-primary text-xl opacity-[0.04] font-mono"
      >
        {"=>"}
      </motion.div>

      <motion.div
        animate={{
          rotate: [0, 3, 0],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute top-[50%] right-[20%] text-primary-darker text-2xl opacity-[0.03] font-mono"
      >
        {"const"}
      </motion.div>

      {/* Pixel art / gaming references */}
      <motion.div
        animate={{
          y: [0, -8, 0],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[70%] right-[30%] opacity-[0.03]"
      >
        <div className="w-8 h-8 grid grid-cols-3 gap-0.5">
          <div className="bg-primary rounded-sm"></div>
          <div className="bg-transparent"></div>
          <div className="bg-primary rounded-sm"></div>
          <div className="bg-transparent"></div>
          <div className="bg-primary rounded-sm"></div>
          <div className="bg-transparent"></div>
          <div className="bg-primary rounded-sm"></div>
          <div className="bg-primary rounded-sm"></div>
          <div className="bg-primary rounded-sm"></div>
        </div>
      </motion.div>

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.04, 0.07, 0.04],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute top-[80%] left-[15%] text-primary-dark text-4xl opacity-[0.04]"
      >
        {"▲"}
      </motion.div>

      {/* Grid de líneas diagonales */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 50px,
            var(--primary-dark) 50px,
            var(--primary-dark) 51px
          )`
        }}
      />

      {/* Formas geométricas grandes flotantes */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-primary-darker/10 to-primary-dark/5 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-primary/8 to-primary-darker/5 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          rotate: [0, -180, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-primary-dark/5 rounded-full blur-3xl"
      />

      {/* Formas geométricas decorativas */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/3 right-1/4 w-64 h-64 border-2 border-primary-darker/10 rounded-[40%]"
      />

      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/3 left-1/3 w-48 h-48 border-2 border-primary/10 rounded-3xl"
      />

      {/* Elementos pequeños dispersos */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 right-1/3 w-12 h-12 bg-primary-light/20 rounded-full blur-sm"
      />

      <motion.div
        animate={{
          y: [0, 40, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-2/3 left-1/4 w-16 h-16 bg-primary-darker/15 rounded-full blur-md"
      />

      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -20, 0],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute bottom-1/4 right-1/2 w-20 h-20 bg-primary-dark/20 rounded-2xl blur-lg"
      />

      {/* Líneas decorativas sutiles */}
      <motion.div
        animate={{
          scaleX: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
      />

      <motion.div
        animate={{
          scaleX: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
        className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-darker to-transparent"
      />

      {/* Gradiente vertical superior */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-primary-darker/5 to-transparent" />
      
      {/* Gradiente vertical inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-primary-darker/5 to-transparent" />
    </div>
  );
}