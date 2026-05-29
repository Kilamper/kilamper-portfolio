"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
    IconHome,
    IconBriefcase,
    IconCode,
    IconUser,
    IconChevronDown
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./language-context";

const languages = [
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "it", name: "Italiano", flag: "🇮🇹" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "pt", name: "Português", flag: "🇵🇹" },
    { code: "ja", name: "日本語", flag: "🇯🇵" },
] as const;

export const Header = () => {
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [theme, setTheme] = useState<'dark' | 'light'>('dark')

    const { language, setLanguage, t } = useLanguage()
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'dark' | 'light'
        if (savedTheme) {
            setTheme(savedTheme)
        } else {
            setTheme('dark')
        }
    }, [])

    const toggleTheme = () => {
        const nextTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(nextTheme)
        localStorage.setItem('theme', nextTheme)
        if (nextTheme === 'light') {
            document.documentElement.classList.add('light')
        } else {
            document.documentElement.classList.remove('light')
        }
    }

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

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const currentLang = languages.find((l) => l.code === language) || languages[0];

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
                                    <span>{t("nav.home")}</span>
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection("experience")}
                                    className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
                                >
                                    <IconBriefcase className="w-5 h-5" />
                                    <span>{t("nav.experience")}</span>
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection("projects")}
                                    className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
                                >
                                    <IconCode className="w-5 h-5" />
                                    <span>{t("nav.projects")}</span>
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection("about")}
                                    className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
                                >
                                    <IconUser className="w-5 h-5" />
                                    <span>{t("nav.about")}</span>
                                </button>
                            </li>
                        </ul>

                        {/* Controles de Idioma y Tema */}
                        <div className="flex items-center gap-4">
                            {/* Selector de idioma premium responsivo */}
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-card border border-outline hover:border-primary/50 text-sm text-foreground transition-all duration-300 shadow-md cursor-pointer select-none font-medium active:scale-95"
                                >
                                    <span>{currentLang.flag}</span>
                                    <span className="hidden sm:inline">{currentLang.name}</span>
                                    <IconChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${isDropdownOpen ? "rotate-180 text-primary" : ""}`} />
                                </button>

                                <AnimatePresence>
                                    {isDropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            transition={{ duration: 0.15, ease: "easeOut" }}
                                            className="absolute right-0 mt-2 py-1.5 w-40 bg-card/95 backdrop-blur-md border border-outline rounded-xl shadow-2xl z-50 overflow-hidden"
                                        >
                                            <div className="max-h-60 overflow-y-auto">
                                                {languages.map((lang) => (
                                                    <button
                                                        key={lang.code}
                                                        onClick={() => {
                                                            setLanguage(lang.code);
                                                            setIsDropdownOpen(false);
                                                        }}
                                                        className={`flex items-center justify-between w-full px-4 py-2 text-sm text-left hover:bg-primary-darker/15 hover:text-primary transition-all duration-200 cursor-pointer ${language === lang.code ? "bg-primary-darker/10 text-primary font-semibold" : "text-foreground"
                                                            }`}
                                                    >
                                                        <div className="flex items-center gap-2.5">
                                                            <span>{lang.flag}</span>
                                                            <span>{lang.name}</span>
                                                        </div>
                                                        {language === lang.code && (
                                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                        )}
                                                    </button>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            {/* Switch de Tema Claro/Oscuro */}
                            <button
                                onClick={toggleTheme}
                                className={`w-14 h-8 rounded-full p-1 transition-colors duration-300 flex items-center cursor-pointer relative focus:outline-none select-none ${theme === 'dark'
                                        ? 'bg-[#18181b] border border-outline/40 justify-end'
                                        : 'bg-[#e4e4e7] border border-slate-300 justify-start'
                                    }`}
                                aria-label='Toggle theme'
                            >
                                <motion.div
                                    layout
                                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                    className='w-6 h-6 flex items-center justify-center rounded-full'
                                >
                                    {theme === 'dark' ? (
                                        <motion.svg
                                            key='moon'
                                            initial={{ scale: 0.6, opacity: 0, rotate: -45 }}
                                            animate={{ scale: 1, opacity: 1, rotate: 0 }}
                                            exit={{ scale: 0.6, opacity: 0, rotate: -45 }}
                                            transition={{ duration: 0.2 }}
                                            viewBox='0 0 24 24'
                                            className='w-5 h-5 select-none'
                                            style={{ filter: 'drop-shadow(0 0 3px rgba(147, 197, 253, 0.6))' }}
                                        >
                                            <defs>
                                                <linearGradient id='moonGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
                                                    <stop offset='0%' stopColor='#bae6fd' />
                                                    <stop offset='100%' stopColor='#3b82f6' />
                                                </linearGradient>
                                            </defs>
                                            <path
                                                d='M12 3a9 9 0 1 0 9 9 9.75 9.75 0 0 1-9-9Z'
                                                fill='url(#moonGradient)'
                                            />
                                        </motion.svg>
                                    ) : (
                                        <motion.div
                                            key='sun'
                                            initial={{ scale: 0.6, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0.6, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className='w-5 h-5 rounded-full'
                                            style={{
                                                background: 'linear-gradient(135deg, #f97316 0%, #ea580c 50%, #dc2626 100%)',
                                                boxShadow: '0 0 8px rgba(234, 88, 12, 0.6)'
                                            }}
                                        />
                                    )}
                                </motion.div>
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};
