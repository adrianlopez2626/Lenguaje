// Configurar Gulp para:
// 1. SASS -> CSS
// 2. JS -> dist/js
// 3. HTML -> dist/
// 4. Watch

const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Rutas de archivos
const paths = {
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js',
    html: 'src/*.html',
    dist: {
        css: 'dist/css',
        js: 'dist/js',
        html: 'dist'
    }
};

// 1. Tarea para compilar SASS a CSS
function compilarSass() {
    console.log('⚡ Compilando SASS...');
    return src('src/scss/main.scss')  // Archivo principal SASS
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(dest('dist/css'))        // Destino: dist/css/
        .on('end', () => console.log('✅ CSS compilado correctamente'));
}

// 2. Tarea para copiar JavaScript
function copiarJavaScript() {
    console.log('📦 Copiando JavaScript...');
    return src('src/js/**/*.js')
        .pipe(dest('dist/js'))
        .on('end', () => console.log('✅ JavaScript copiado correctamente'));
}

// 3. Tarea para copiar HTML
function copiarHTML() {
    console.log('📄 Copiando HTML...');
    return src('src/*.html')
        .pipe(dest('dist'))
        .on('end', () => console.log('✅ HTML copiado correctamente'));
}

// 4. Tarea para observar cambios
function watchFiles() {
    console.log('👀 Observando cambios en archivos...');
    
    // Vigilar cambios en SASS
    watch('src/scss/**/*.scss', compilarSass);
    
    // Vigilar cambios en JavaScript
    watch('src/js/**/*.js', copiarJavaScript);
    
    // Vigilar cambios en HTML
    watch('src/*.html', copiarHTML);
    
    console.log('📌 Presiona Ctrl+C para detener');
}

// Tarea para limpiar la carpeta dist
function limpiar(cb) {
    console.log('🧹 Limpiando carpeta dist...');
    const fs = require('fs');
    const path = require('path');
    
    if (fs.existsSync('dist')) {
        fs.rmSync('dist', { recursive: true, force: true });
    }
    fs.mkdirSync('dist');
    fs.mkdirSync('dist/css', { recursive: true });
    fs.mkdirSync('dist/js', { recursive: true });
    
    console.log('✅ Carpeta dist limpia');
    cb();
}

// Tarea para crear la estructura de carpetas inicial
function crearEstructura(cb) {
    console.log('📁 Creando estructura de carpetas...');
    const fs = require('fs');
    
    // Crear carpetas src si no existen
    fs.mkdirSync('src/scss', { recursive: true });
    fs.mkdirSync('src/js', { recursive: true });
    fs.mkdirSync('src/images', { recursive: true });
    
    console.log('✅ Estructura de carpetas creada');
    cb();
}

// Tarea por defecto (compila todo y observa)
exports.default = series(
    parallel(compilarSass, copiarJavaScript, copiarHTML),
    watchFiles
);

// Tareas individuales
exports.build = parallel(compilarSass, copiarJavaScript, copiarHTML);
exports.sass = compilarSass;
exports.js = copiarJavaScript;
exports.html = copiarHTML;
exports.watch = watchFiles;
exports.clean = limpiar;
exports.init = series(crearEstructura, exports.build);