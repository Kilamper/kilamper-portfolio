"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { IconHome, IconBriefcase, IconCode, IconUser, IconMail } from "@tabler/icons-react";

export const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Si estamos en la parte superior (menos de 50px), siempre mostrar
            if (currentScrollY < 50) {
                setIsVisible(true);
            }
            // Si bajamos, ocultar
            else if (currentScrollY > lastScrollY) {
                setIsVisible(false);
            }
            // Si subimos, mostrar
            else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            <div className="backdrop-blur-md bg-background/80 border-b border-outline/50 shadow-lg">
                <div className="max-w-7xl mx-auto px-6 py-2">
                    <nav className="flex items-center justify-between">
                        {/* Logo/Nombre */}
                        <Image src="https://i.postimg.cc/k5Gr9yzz/favicon.png" alt="Logo" width={40} height={40} />

                        {/* Navegación */}
                        <ul className="hidden md:flex items-center space-x-8">
                            <li>
                                <button
                                    onClick={() => scrollToSection("hero")}
                                    className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
                                >
                                    <IconHome className="w-5 h-5" />
                                    <span>Inicio</span>
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection("experience")}
                                    className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
                                >
                                    <IconBriefcase className="w-5 h-5" />
                                    <span>Experiencia</span>
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection("projects")}
                                    className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
                                >
                                    <IconCode className="w-5 h-5" />
                                    <span>Proyectos</span>
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection("about")}
                                    className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
                                >
                                    <IconUser className="w-5 h-5" />
                                    <span>Sobre mí</span>
                                </button>
                            </li>
                        </ul>

                        {/* Selector de idioma */}
                        <div className="hidden md:block">
                            <select
                                className="bg-background border border-outline text-foreground text-sm rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer hover:border-primary transition-colors"
                                defaultValue="es"
                            >
                                <option value="es">🇪🇸 Español</option>
                                <option value="en">🇺🇸 English</option>
                            </select>
                        </div>

                        {/* Menú móvil (hamburguesa) - simplificado */}
                        <div className="md:hidden">
                            <button className="text-foreground hover:text-primary transition-colors">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};
