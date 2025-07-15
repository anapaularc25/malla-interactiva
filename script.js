document.addEventListener("DOMContentLoaded", () => {
  const correlativas = {
    // 1er Año
    "Álgebra y Geometría Analítica": "Sin correlativas",
    "Fundamentos de Administración": "Sin correlativas",
    "Fundamentos de Contabilidad": "Sin correlativas",
    "Fundamentos de Economía": "Sin correlativas",
    "Cálculo Diferencial e Integral": "Correlativa: Álgebra y Geometría Analítica",
    "Fundamentos de Derecho Civil y Comercial": "Sin correlativas",
    "Metodología de las Ciencias Sociales": "Sin correlativas",

    // 2do Año
    "Microeconomía Básica": "Correlativas: Fundamentos de Economía + Cálculo Diferencial e Integral",
    "Introducción a la Estadística": "Correlativa: Cálculo Diferencial e Integral",
    "Derecho de Contratos y Títulos Valores": "Correlativa: Fundamentos de Derecho Civil y Comercial",
    "Macroeconomía Básica": "Correlativa: Microeconomía Básica",
    "Derecho Público": "Correlativa: Fundamentos de Derecho Civil y Comercial",
    "Informática Aplicada": "Sin correlativas",
    "Sistemas Contables": "Correlativa: Fundamentos de Contabilidad",

    // 3er Año
    "Medición Contable": "Correlativa: Sistemas Contables",
    "Derecho Societario y Concursal": "Correlativa: Derecho de Contratos y Títulos Valores",
    "Sistemas Administrativos": "Correlativas: Derecho de Contratos y Títulos Valores + Sistemas Contables",
    "Finanzas Públicas": "Correlativas: Derecho Público + Macroeconomía Básica",
    "Historia Económica": "Correlativa: Macroeconomía Básica",
    "Matemática Financiera": "Correlativa: Introducción a la Estadística",

    // 4to Año
    "Administración Financiera": "Correlativa: Matemática Financiera",
    "Derecho del Trabajo": "Sin correlativas (según plan)",
    "Exposición y Análisis de la Información Contable": "Correlativa: Medición Contable",
    "Optativa a Elección": "Correlativa: Todo 2do año aprobado",
    "Seminario a Elección": "Correlativa: Todo 2do año aprobado",
    "Teoría y Contabilidad de Costos": "Correlativa: Medición Contable",
    "Tributos Indirectos y Derecho Tributario": "Correlativa: Finanzas Públicas",

    // 5to Año
    "5to Año": "Correlativa: 3er año + Acreditación de Lengua Extranjera"
  };

  const materias = document.querySelectorAll(".materia");

  materias.forEach(materia => {
    materia.addEventListener("click", () => {
      const nombre = materia.textContent.trim();
      const info = correlativas[nombre] || "Correlativa no registrada.";
      alert(`${nombre}\n\n${info}`);
    });
  });
});
