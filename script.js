const materias = {
  "Calculo Diferencial e Integral": ["Algebra y Geometría Analítica"],
  "Microeconomía Básica": ["Cálculo Diferencial e Integral", "Fundamentos de Economía"],
  "Introducción a la Estadística": ["Cálculo Diferencial e Integral"],
  "Derecho de Contratos y Títulos Valores": ["Fundamentos de Derecho Civil y Comercial"],
  "Derecho Público": ["Fundamentos de Derecho Civil y Comercial"]
  "Macroeconomía Básica": ["Microeconomía Básica"]
"Sistemas Contables": ["Fundamentos de Contabilidad"]
};

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");

  for (const nombre in materias) {
    const div = document.createElement("div");
    div.classList.add("materia");
    div.textContent = nombre;
    div.dataset.nombre = nombre;

    grid.appendChild(div);
  }

  actualizarEstado();

  document.querySelectorAll(".materia").forEach(div => {
    div.addEventListener("click", () => {
      if (div.classList.contains("bloqueada")) return;

      div.classList.toggle("aprobada");
      actualizarEstado();
    });
  });
});

function actualizarEstado() {
  const materiasAprobadas = Array.from(document.querySelectorAll(".materia.aprobada"))
    .map(div => div.dataset.nombre);

  document.querySelectorAll(".materia").forEach(div => {
    const nombre = div.dataset.nombre;
    const requisitos = materias[nombre];

    if (requisitos.every(req => materiasAprobadas.includes(req))) {
      div.classList.remove("bloqueada");
    } else {
      div.classList.remove("aprobada"); // por si ya estaba marcada
      div.classList.add("bloqueada");
    }
  });
}
