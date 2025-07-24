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
