import React from "react";

function Comparacion() {
  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-serif text-primary mb-4">Comparación de Marcos Normativos</h1>
      <p className="text-secondary mb-4">
        Se comparan tres marcos normativos relevantes en el caso Sony:
      </p>
      <table className="table-auto w-full border-collapse border border-gray-300 text-secondary">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Marco</th>
            <th className="border px-4 py-2">Protección de datos</th>
            <th className="border px-4 py-2">Sanciones</th>
            <th className="border px-4 py-2">Alcance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Ley 19.628 (Chile)</td>
            <td className="border px-4 py-2">Datos personales y sensibles</td>
            <td className="border px-4 py-2">Multas administrativas</td>
            <td className="border px-4 py-2">Nacional</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Ley 21.459 (Chile)</td>
            <td className="border px-4 py-2">Delitos informáticos</td>
            <td className="border px-4 py-2">Responsabilidad penal</td>
            <td className="border px-4 py-2">Nacional</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">GDPR (UE)</td>
            <td className="border px-4 py-2">Protección integral de datos</td>
            <td className="border px-4 py-2">Multas millonarias</td>
            <td className="border px-4 py-2">Internacional</td>
          </tr>
        </tbody>
      </table>
      <p className="mt-4 text-secondary">
        La comparación evidencia que mientras la legislación chilena se centra en tipificar delitos y sanciones penales, el GDPR enfatiza la protección preventiva y sanciones económicas. El Convenio de Budapest complementa ambos al facilitar cooperación internacional.
      </p>
    </div>
  );
}

export default Comparacion;
