const container = document.getElementById('resultado');

// Arrow function
const saludar = (nombre) => 'Hola ' + nombre;

// Datos
const usuarios = [
    { id: 1, nombre: 'Ana', rol: 'Admin' },
    { id: 2, nombre: 'Carlos', rol: 'User' },
    { id: 3, nombre: 'Bea', rol: 'Editor' }
];

// Todo en una expresión (filter + map + join)
container.innerHTML = `
    <h2>Administradores</h2>
    <ul>
        ${usuarios
            .filter(u => u.rol === 'Admin')
            .map(u => `<li>${u.nombre}</li>`)
            .join('')
        }
    </ul>
    <p>${saludar('JavaScript ES6')}</p>
`;