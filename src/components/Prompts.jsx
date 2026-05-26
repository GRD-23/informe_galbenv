import React from "react";

function Prompts() {
  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-serif text-primary mb-4">Uso de IA y Prompts</h1>
      <p className="text-secondary mb-4">
        Durante el desarrollo de este informe se utilizaron herramientas de inteligencia artificial (Microsoft Copilot) para apoyar la redacción, estructuración y corrección técnica del proyecto. 
        Los prompts fueron diseñados para obtener explicaciones claras, ejemplos prácticos y soluciones a problemas de configuración.
      </p>
      <h2 className="text-xl font-bold text-accent mb-2">Ejemplos de Prompts Utilizados</h2>
      <ul className="list-disc pl-6 space-y-2 text-secondary">
        <li>“Explica la Ley 21.459 y cómo se aplica al caso Sony.”</li>
        <li>“Genera un componente React con Tailwind para mostrar conclusiones académicas.”</li>
        <li>“Corrige el error de PostCSS en Vite con type: module.”</li>
        <li>“Compara la Ley chilena con el GDPR en una tabla.”</li>
      </ul>
      <h2 className="text-xl font-bold text-accent mt-6 mb-2">Correcciones y Aprendizajes</h2>
      <p className="text-secondary mb-4">
        La IA permitió identificar errores técnicos (como el uso de `postcss.config.js` en modo ESM) y proponer soluciones rápidas. 
        Además, facilitó la generación de contenido académico estructurado, aunque siempre fue necesario revisar y complementar con análisis crítico propio.
      </p>
      <h2 className="text-xl font-bold text-accent mt-6 mb-2">Reflexión Final</h2>
      <p className="text-secondary">
        El uso de IA en procesos académicos es un apoyo valioso, pero requiere supervisión humana para garantizar rigor y cumplimiento de la rúbrica. 
        La experiencia demuestra que la colaboración entre estudiante e IA puede optimizar tiempos y mejorar la calidad del trabajo, siempre que se mantenga un enfoque crítico y ético.
      </p>
    </div>
  );
}

export default Prompts;
