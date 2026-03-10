// Lógica de Tabs
// 1. Selecciona botones y paneles
// 2. Al hacer click en un botón:
//    - Quita active de todos
//    - Pon active al clickeado
//    - Muestra el panel correspondiente (id en data-attribute)

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Seleccionar botones y paneles
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    // Función para activar una tab específica
    function activateTab(targetId) {
        // Quitar clase active de todos los botones
        tabButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Quitar clase active de todos los paneles
        tabPanes.forEach(pane => {
            pane.classList.remove('active');
        });
        
        // Activar el botón que tiene el data-target correspondiente
        const activeButton = document.querySelector(`[data-target="${targetId}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
        
        // Activar el panel con el ID correspondiente
        const activePane = document.getElementById(targetId);
        if (activePane) {
            activePane.classList.add('active');
        }
    }
    
    // 2. Añadir event listeners a cada botón
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Obtener el target del atributo data-target
            const targetId = this.getAttribute('data-target');
            
            // Activar la tab correspondiente
            activateTab(targetId);
            
            // Opcional: Añadir efecto de click
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });
    
    // 3. Inicializar: asegurar que la primera tab está activa
    // Si ninguna tab está activa, activar la primera
    const hasActive = Array.from(tabButtons).some(btn => btn.classList.contains('active'));
    
    if (!hasActive && tabButtons.length > 0) {
        const firstButton = tabButtons[0];
        const firstTarget = firstButton.getAttribute('data-target');
        activateTab(firstTarget);
    }
    
    // 4. Función adicional: cambiar tabs con teclas (accesibilidad)
    tabButtons.forEach((button, index) => {
        button.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                e.preventDefault();
                
                let nextIndex;
                if (e.key === 'ArrowRight') {
                    nextIndex = (index + 1) % tabButtons.length;
                } else {
                    nextIndex = (index - 1 + tabButtons.length) % tabButtons.length;
                }
                
                const nextButton = tabButtons[nextIndex];
                const nextTarget = nextButton.getAttribute('data-target');
                
                // Quitar focus de todos
                tabButtons.forEach(btn => btn.setAttribute('tabindex', '-1'));
                
                // Dar focus al siguiente
                nextButton.setAttribute('tabindex', '0');
                nextButton.focus();
                
                // Activar la tab
                activateTab(nextTarget);
            }
        });
        
        // Hacer los botones focusables
        button.setAttribute('tabindex', index === 0 ? '0' : '-1');
    });
    
    console.log('✅ Tabs inicializadas correctamente');
});