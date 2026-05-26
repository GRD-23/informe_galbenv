import React from "react";

function Delitos() {
  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-serif text-primary mb-4">Delitos Informáticos – Ley 21.459</h1>
      <p className="text-secondary mb-4">
        El ataque de 2014 encaja en varios artículos de la Ley 21.459, que tipifica conductas específicas:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-secondary">
        <li><strong>Artículo 2 – Acceso ilícito</strong>: los atacantes vulneraron servidores internos sin autorización, obteniendo información confidencial.</li>
        <li><strong>Artículo 3 – Sabotaje informático</strong>: se destruyeron datos, se borraron archivos y se interrumpió la operación de la empresa.</li>
        <li><strong>Artículo 5 – Difusión de datos personales</strong>: se publicaron correos electrónicos, guiones inéditos y datos sensibles de empleados.</li>
        <li><strong>Artículo 7 – Interceptación de comunicaciones</strong>: se accedió a correos electrónicos privados, vulnerando la confidencialidad.</li>
      </ul>
      <p className="mt-4 text-secondary">
        Estos delitos reflejan la gravedad del ataque y la necesidad de aplicar sanciones penales severas.
      </p>
    </div>
  );
}

export default Delitos;
