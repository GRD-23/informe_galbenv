import React from "react";

function Responsabilidades() {
  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-serif text-primary mb-4">Responsabilidades</h1>
      <p className="text-secondary mb-4">
        El caso Sony involucra distintos actores con responsabilidades legales y éticas:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-secondary">
        <li><strong>Empresa (Sony Pictures)</strong>: responsabilidad civil por daños a empleados, responsabilidad administrativa por protección insuficiente de datos y responsabilidad reputacional frente a clientes.</li>
        <li><strong>Atacantes (“Guardians of Peace”)</strong>: responsabilidad penal por delitos informáticos, responsabilidad internacional por ciberataques transnacionales y responsabilidad ética por vulnerar derechos humanos.</li>
        <li><strong>Empleados</strong>: responsabilidad ética y administrativa en el manejo de credenciales y seguridad interna, además de responsabilidad laboral en la protección de información sensible.</li>
      </ul>
      <p className="mt-4 text-secondary">
        Cada responsabilidad se fundamenta en normas específicas, como la Ley 21.459 para los atacantes y la Ley 19.628 para la empresa en relación con los datos personales.
      </p>
    </div>
  );
}

export default Responsabilidades;
