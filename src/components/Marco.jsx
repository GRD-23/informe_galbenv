import React from "react";

function Marco() {
  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-serif text-primary mb-4">Marco Normativo</h1>
      <p className="text-secondary mb-4">
        El ataque a Sony Pictures en 2014 se enmarca en diversas normativas nacionales e internacionales que regulan la protección de datos y sancionan delitos informáticos. Estas leyes permiten analizar responsabilidades y sanciones aplicables:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-secondary">
        <li><strong>Ley 19.628 (Chile)</strong>: regula el tratamiento de datos personales y establece derechos ARCO. En el caso Sony, la filtración de correos y datos médicos vulnera directamente esta ley.</li>
        <li><strong>Ley 21.459 (Chile)</strong>: tipifica delitos informáticos como acceso ilícito, sabotaje y difusión de datos. El ataque encaja en varios artículos.</li>
        <li><strong>Convenio de Budapest</strong>: tratado internacional que fomenta cooperación en la persecución de ciberdelitos, aplicable a ataques transnacionales como el de Sony.</li>
        <li><strong>GDPR (UE)</strong>: protege datos personales de empleados y clientes, con sanciones económicas severas. Aunque Sony no es europea, el estándar sirve como comparación.</li>
        <li><strong>ISO/IEC 27001</strong>: estándar internacional para gestión de seguridad de la información, que Sony no cumplió adecuadamente.</li>
      </ul>
      <p className="mt-4 text-secondary">
        Estas normas muestran que el ataque no solo fue un delito informático, sino también una vulneración de derechos fundamentales de privacidad y seguridad.
      </p>
    </div>
  );
}

export default Marco;
