export const HeroSection = () => {
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
              className="p-3 rounded-lg hover:bg-primary-darker transition-colors duration-300"
            >
              <i className="fab fa-linkedin-in text-2xl"></i>
            </a>
            <a
              href="https://github.com/Kilamper"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg hover:bg-primary-darker transition-colors duration-300"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
            
          </div>
        </div>

        {/* Imagen del usuario */}
        <div
          className="flex justify-center lg:justify-end"
        >
        </div>
      </div>
    </section>
  );
}