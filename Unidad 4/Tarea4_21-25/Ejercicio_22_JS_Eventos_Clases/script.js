// Ejercicio 22: Eventos y Clases

// 1. Selecciona el botón del menú, el botón de cerrar y el menú lateral
const toggleMenu = document.getElementById('toggleMenu');
const closeMenu = document.getElementById('closeMenu');
const menuLateral = document.getElementById('menuLateral');

// 2. Define una función 'toggleMenu' que:
//    - Use classList.toggle('hidden') en el menú
function toggleMenuFunction() {
    menuLateral.classList.toggle('hidden');
    
    // Bonus: Cambiar el texto del botón según el estado del menú
    if (menuLateral.classList.contains('hidden')) {
        toggleMenu.textContent = 'Abrir Menú';
    } else {
        toggleMenu.textContent = 'Cerrar Menú';
    }
}

// 3. Agrega los Event Listeners a los botones para llamar a esa función
toggleMenu.addEventListener('click', toggleMenuFunction);
closeMenu.addEventListener('click', toggleMenuFunction);

// Bonus: Cerrar el menú haciendo clic fuera de él
document.addEventListener('click', (event) => {
    // Verifica si el clic NO fue en el menú y NO fue en el botón de abrir
    if (!menuLateral.contains(event.target) && !toggleMenu.contains(event.target)) {
        // Asegura que el menú esté oculto (si no lo está)
        if (!menuLateral.classList.contains('hidden')) {
            menuLateral.classList.add('hidden');
            toggleMenu.textContent = 'Abrir Menú';
        }
    }
});

// Bonus: Mejorar la accesibilidad con tecla Escape
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !menuLateral.classList.contains('hidden')) {
        menuLateral.classList.add('hidden');
        toggleMenu.textContent = 'Abrir Menú';
    }
});