// Ejercicio 21: Manipulación del DOM

// 1. Selecciona la caja (id="miCaja")
const miCaja = document.getElementById('miCaja');

// 2. Selecciona los botones
const btnColor = document.getElementById('btnColor');
const btnTexto = document.getElementById('btnTexto');
const btnAgregar = document.getElementById('btnAgregar');

// 3. Agrega funcionalidad al botón de color (click)
btnColor.addEventListener('click', () => {
    // Cambia el color de fondo de la caja
    miCaja.style.backgroundColor = 'purple';
    
    // Bonus: También podrías hacer que cambie a un color aleatorio
    // const colores = ['red', 'blue', 'green', 'orange', 'purple'];
    // const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    // miCaja.style.backgroundColor = colorAleatorio;
});

// 4. Agrega funcionalidad al botón de texto (click)
btnTexto.addEventListener('click', () => {
    // Cambia el texto interno de la caja
    miCaja.innerText = 'Hola JS';
    
    // Bonus: También podrías usar textContent (similar a innerText)
    // miCaja.textContent = 'Hola JS';
});

// 5. Agrega funcionalidad al botón de agregar (click)
btnAgregar.addEventListener('click', () => {
    // Crea un nuevo elemento li
    const nuevoElemento = document.createElement('li');
    
    // Agrega contenido al nuevo elemento
    nuevoElemento.innerText = `Elemento ${document.querySelectorAll('#lista li').length + 1}`;
    
    // Agrégalo a la lista ul
    const lista = document.getElementById('lista');
    lista.appendChild(nuevoElemento);
    
    // Bonus: Animación sutil para el nuevo elemento
    nuevoElemento.style.opacity = '0';
    setTimeout(() => {
        nuevoElemento.style.opacity = '1';
        nuevoElemento.style.transition = 'opacity 0.5s';
    }, 10);
});

// Bonus extra: Agregar funcionalidad para eliminar elementos
btnAgregar.addEventListener('dblclick', () => {
    const lista = document.getElementById('lista');
    if (lista.children.length > 0) {
        lista.removeChild(lista.lastElementChild);
    }
});