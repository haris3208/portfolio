"use client"
import { useState, useEffect } from "react";

export const Header = () => {
    const [activeSection, setActiveSection] = useState("home");

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to section
            setActiveSection(id);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "projects", "about", "contact"];
            const offset = 100; // Adjust this based on your header height

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const top = element.getBoundingClientRect().top;
                    if (top >= 0 && top <= offset) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className={"flex justify-center items-center z-10 fixed w-full top-3"}>
            <nav
                className={
                    "flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur"
                }
            >
                <a
                    className={`nav-item ${activeSection === "home" ? "active " : ""}`}
                    onClick={() => handleScroll("home")}
                    href="#home"
                >
                    Home
                </a>
                <a
                    className={`nav-item ${activeSection === "projects" ? "active" : ""}`}
                    onClick={() => handleScroll("projects")}
                    href="#projects"
                >
                    Projects
                </a>
                <a
                    className={`nav-item ${activeSection === "about" ? "active" : ""}`}
                    onClick={() => handleScroll("about")}
                    href="#about"
                >
                    About
                </a>
                <a
                    className={`nav-item ${activeSection === "contact" ? "active" : ""} `}
                    onClick={() => handleScroll("contact")}
                    href="#contact"
                >
                    Contact
                </a>
            </nav>
        </div>
    );
};
