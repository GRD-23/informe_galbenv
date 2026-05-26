import React from "react";

function Datos() {
  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-serif text-primary mb-4">Datos Personales – Ley 19.628</h1>
      <p className="text-secondary mb-4">
        En el ataque se filtraron distintos tipos de datos, lo que vulnera la Ley 19.628:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-secondary">
        <li><strong>Datos personales</strong>: nombres, correos electrónicos, teléfonos.</li>
        <li><strong>Datos sensibles</strong>: información médica, opiniones políticas, datos financieros.</li>
        <li><strong>Datos laborales</strong>: contratos, sueldos, evaluaciones internas.</li>
      </ul>
      <p className="mt-4 text-secondary">
        Derechos ARCO aplicables: Acceso, Rectificación, Cancelación y Oposición. Estos derechos permiten a los afectados exigir transparencia y control sobre sus datos. La filtración vulneró directamente estos derechos, dejando a los empleados expuestos a riesgos de fraude y discriminación.
      </p>
    </div>
  );
}

export default Datos;
