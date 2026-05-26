import React from "react";
import Resumen from "./components/Resumen";
import Marco from "./components/Marco";
import Delitos from "./components/Delitos";
import Comparacion from "./components/Comparacion";
import Responsabilidades from "./components/Responsabilidades";
import Datos from "./components/Datos";
import Conclusiones from "./components/Conclusiones";
import Prompts from "./components/Prompts";

function App() {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Menú de navegación */}
      <nav className="bg-primary text-white p-4 shadow-md">
        <ul className="flex flex-wrap gap-6 justify-center font-semibold">
          <li><a href="#resumen" className="hover:text-accent">Resumen</a></li>
          <li><a href="#marco" className="hover:text-accent">Marco Normativo</a></li>
          <li><a href="#delitos" className="hover:text-accent">Delitos</a></li>
          <li><a href="#comparacion" className="hover:text-accent">Comparación</a></li>
          <li><a href="#responsabilidades" className="hover:text-accent">Responsabilidades</a></li>
          <li><a href="#datos" className="hover:text-accent">Datos</a></li>
          <li><a href="#conclusiones" className="hover:text-accent">Conclusiones</a></li>
          <li><a href="#prompts" className="hover:text-accent">Prompts IA</a></li>
        </ul>
      </nav>

      {/* Secciones */}
      <main className="max-w-4xl mx-auto p-6 space-y-10">
        <section id="resumen"><Resumen /></section>
        <section id="marco"><Marco /></section>
        <section id="delitos"><Delitos /></section>
        <section id="comparacion"><Comparacion /></section>
        <section id="responsabilidades"><Responsabilidades /></section>
        <section id="datos"><Datos /></section>
        <section id="conclusiones"><Conclusiones /></section>
        <section id="prompts"><Prompts /></section>
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-white text-center p-4 mt-10">
        <p className="text-sm">Informe Sony Pictures 2014 — Evaluación TI3034</p>
        <p className="text-xs">Universidad Inacap · Mayo 2026</p>
      </footer>
    </div>
  );
}

export default App;
