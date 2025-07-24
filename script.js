const malla = [
  {
    "nombre": "1° Semestre",
    "ramos": [
      { "nombre": "Biología celular", "codigo": "CBI111" },
      { "nombre": "Química", "codigo": "CQU110" },
      { "nombre": "Introducción a la MV", "codigo": "CVE121" },
      { "nombre": "Matemática general", "codigo": "MAT100" },
      { "nombre": "Taller de comunicación oral y escrita", "codigo": "EDU107" }
    ]
  },
  {
    "nombre": "2° Semestre",
    "ramos": [
      { "nombre": "Bioestadística", "codigo": "AES519", "prer": ["MAT100"] },
      { "nombre": "Bioquímica", "codigo": "CQU310", "prer": ["CQU110"] },
      { "nombre": "Histoembriología", "codigo": "CVE221" },
      { "nombre": "Anatomía del canino", "codigo": "CVE292" },
      { "nombre": "Inglés I", "codigo": "LCE001" }
    ]
  },
  {
    "nombre": "3° Semestre",
    "ramos": [
      { "nombre": "Zoología", "codigo": "CVE211", "prer": ["CBI111"] },
      { "nombre": "Práctica básica", "codigo": "CVE300", "prer": ["CVE121", "CVE292"] },
      { "nombre": "Anatomía comparada", "codigo": "CVE312", "prer": ["CVE292"] },
      { "nombre": "Inglés II", "codigo": "LCE002", "prer": ["LCE001"] },
      { "nombre": "Medio ambiente y gestión ambiental", "codigo": "CVE3317", "prer": ["CBI111"] }
    ]
  },
  {
    "nombre": "4° Semestre",
    "ramos": [
      { "nombre": "Emprendimiento y negocios", "codigo": "AEA240" },
      { "nombre": "Microbiología general y veterinaria", "codigo": "CBI329", "prer": ["CBI111"] },
      { "nombre": "Genética", "codigo": "CBI514", "prer": ["AES519"] },
      { "nombre": "Fisiología animal", "codigo": "CVE421", "prer": ["CVE292", "CQU310"] },
      { "nombre": "Enfermedades parasitarias", "codigo": "CVE425", "prer": ["CVE211"] }
    ]
  },
  {
    "nombre": "5° Semestre",
    "ramos": [
      { "nombre": "Etología y bienestar animal", "codigo": "CVE502", "prer": ["CVE211"] },
      { "nombre": "Inmunología", "codigo": "CVE523", "prer": ["CBI329"] },
      { "nombre": "Reproducción e inseminación artificial", "codigo": "CVE543", "prer": ["CVE421"] },
      { "nombre": "Nutrición y alimentación animal", "codigo": "CVE544", "prer": ["CQU310"] },
      { "nombre": "Tecnología de los alimentos", "codigo": "CVE551", "prer": ["CBI329"] },
      { "nombre": "Fisiopatología", "codigo": "CVE591", "prer": ["CVE421"] }
    ]
  },
  {
    "nombre": "6° Semestre",
    "ramos": [
      { "nombre": "Farmacología y toxicología", "codigo": "CVE631", "prer": ["CVE421"] },
      { "nombre": "Enfermedades infecciosas", "codigo": "CVE633", "prer": ["CVE523"] },
      { "nombre": "Producción avícola", "codigo": "CVE642", "prer": ["CVE544", "CVE502"] },
      { "nombre": "Control de calidad de los alimentos", "codigo": "CVE651", "prer": ["CVE425", "CVE551"] },
      { "nombre": "Patología de sistemas", "codigo": "CVE692", "prer": ["CVE591"] },
      { "nombre": "Obstetricia y ginecología", "codigo": "CVE833", "prer": ["CVE543"] }
    ]
  },
  {
    "nombre": "7° Semestre",
    "ramos": [
      { "nombre": "Práctica intermedia", "codigo": "CVE701", "prer": ["CVE631", "CVE633"] },
      { "nombre": "Semiología", "codigo": "CVE732", "prer": ["CVE631", "CVE591", "CVE312"] },
      { "nombre": "Producción de ovinos y caprinos", "codigo": "CVE742", "prer": ["CVE543", "CBI514"] },
      { "nombre": "Producción porcina", "codigo": "CVE744", "prer": ["CBI514", "CVE3317"] },
      { "nombre": "Epidemiología veterinaria", "codigo": "CVE752", "prer": ["CVE633"] },
      { "nombre": "Laboratorio clínico", "codigo": "CVE792", "prer": ["CVE692"] }
    ]
  },
  {
    "nombre": "8° Semestre",
    "ramos": [
      { "nombre": "Medicina de felinos y exóticos", "codigo": "CVE801", "prer": ["CVE792", "CVE732"] },
      { "nombre": "Medicina de animales mayores", "codigo": "CVE831", "prer": ["CVE792", "CVE732"] },
      { "nombre": "Diagnóstico por imágenes", "codigo": "CVE834", "prer": ["CVE692"] },
      { "nombre": "Cirugía general", "codigo": "CVE835", "prer": ["CVE732"] },
      { "nombre": "Medicina de caninos", "codigo": "CVE892", "prer": ["CVE792", "CVE732"] }
    ]
  },
  {
    "nombre": "9° Semestre",
    "ramos": [
      { "nombre": "Finanzas y evaluación de proyectos", "codigo": "AEA107", "prer": ["AEA240"] },
      { "nombre": "Producción acuícola", "codigo": "CVE042", "prer": ["CVE544"] },
      { "nombre": "Electivo de especialidad", "codigo": "CVE821", "prer": ["CVE591"] },
      { "nombre": "Práctica final", "codigo": "CVE911", "prer": ["CVE701", "CVE831", "CVE892", "CVE801"] },
      { "nombre": "Farmacología aplicada", "codigo": "CVE935", "prer": ["CVE831", "CVE835"] },
      { "nombre": "Patología quirúrgica", "codigo": "CVE936", "prer": ["CVE835", "CVE892"] },
      { "nombre": "Producción de bovinos carne y leche", "codigo": "CVE995", "prer": ["CVE833"] }
    ]
  },
  {
    "nombre": "10° Semestre",
    "ramos": [
      { "nombre": "Seminario de integración profesional", "codigo": "CVE033", "prer": ["CVE935"] },
      { "nombre": "Salud pública", "codigo": "CVE051", "prer": ["CVE651", "CVE752"] },
      { "nombre": "Trabajo de titulación", "codigo": "CVE090", "prer": ["CVE831", "CVE892", "CVE801"] },
      { "nombre": "Clínica de animales mayores", "codigo": "CVE933", "prer": ["CVE831", "CVE834"] },
      { "nombre": "Clínica de animales menores", "codigo": "CVE934", "prer": ["CVE834", "CVE892", "CVE801"] }
    ]
  }
];

function crearMalla() {
    const grid = document.getElementById('grid');
    malla.forEach(semestre => {
        const contenedor = document.createElement('div');
        contenedor.className = 'semestre';
        const titulo = document.createElement('h2');
        titulo.textContent = semestre.nombre;
        contenedor.appendChild(titulo);
        semestre.ramos.forEach(ramo => {
            const div = document.createElement('div');
            div.className = 'ramo';
            div.textContent = ramo.nombre;
            div.dataset.codigo = ramo.codigo;
            div.dataset.prer = JSON.stringify(ramo.prer || []);
            div.addEventListener('click', () => {
                if (div.classList.contains('bloqueado')) return;
                div.classList.toggle('aprobado');
                actualizarBloqueos();
            });
            contenedor.appendChild(div);
        });
        grid.appendChild(contenedor);
    });
    actualizarBloqueos();
}

function actualizarBloqueos() {
    const todos = document.querySelectorAll('.ramo');
    const aprobados = new Set([...todos].filter(e => e.classList.contains('aprobado')).map(e => e.dataset.codigo));
    todos.forEach(div => {
        const requisitos = JSON.parse(div.dataset.prer);
        const bloqueado = requisitos.length > 0 && !requisitos.every(r => aprobados.has(r));
        div.classList.toggle('bloqueado', bloqueado);
    });
}

window.onload = crearMalla;
