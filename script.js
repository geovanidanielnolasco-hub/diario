// Estado global
let currentDayIndex = 0;
let totalDays = 0;

// Función para abrir el libro
function openBook() {
    const coverPage = document.getElementById('coverPage');
    const bookContainer = document.getElementById('bookContainer');

    coverPage.style.opacity = '0';
    coverPage.style.transform = 'scale(0.9)';

    setTimeout(() => {
        coverPage.style.display = 'none';
        bookContainer.style.display = 'flex';
        initializeDiary();
    }, 500);
}

// Función para cerrar el libro
function closebook() {
    const coverPage = document.getElementById('coverPage');
    const bookContainer = document.getElementById('bookContainer');

    bookContainer.style.opacity = '0';

    setTimeout(() => {
        bookContainer.style.display = 'none';
        coverPage.style.display = 'flex';
        coverPage.style.opacity = '0';
        coverPage.style.transform = 'scale(0.9)';

        setTimeout(() => {
            coverPage.style.opacity = '1';
            coverPage.style.transform = 'scale(1)';
        }, 50);
    }, 300);
}

// Toggle sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('calendarSidebar');
    sidebar.classList.toggle('hidden');
    sidebar.classList.toggle('active');
}

// Función para formatear fecha
function formatDate(dateString) {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    // Parsear la fecha manualmente para evitar problemas de zona horaria
    const [year, month, day] = dateString.split('-');
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString('es-ES', options);
}

// Función para formatear fecha corta (para calendario)
function formatShortDate(dateString) {
    // Parsear la fecha manualmente para evitar problemas de zona horaria
    const [year, month, day] = dateString.split('-');
    const monthNames = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const monthName = monthNames[parseInt(month) - 1];
    return `${parseInt(day)} ${monthName}`;
}

// Función para detectar si es una URL de YouTube
function isYouTubeUrl(url) {
    if (!url) return false;
    return url.includes('youtube.com') || url.includes('youtu.be');
}

// Función para convertir URL de YouTube a embed
function getYouTubeEmbedUrl(url) {
    let videoId = '';

    if (url.includes('youtube.com/watch?v=')) {
        videoId = url.split('v=')[1].split('&')[0];
    } else if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1].split('?')[0];
    }

    return `https://www.youtube.com/embed/${videoId}`;
}

// Función para detectar si es una URL externa
function isExternalUrl(path) {
    if (!path) return false;
    return path.startsWith('http://') || path.startsWith('https://');
}

// Función para cargar imagen/video con fallback
function loadImageWithFallback(imgElement, placeholder, dayNumber) {
    const extensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
    let currentExtensionIndex = 0;

    // Obtener el contenedor del photo-frame
    const photoFrame = imgElement.parentElement;

    function showPlaceholder() {
        placeholder.style.display = 'flex';
        imgElement.style.display = 'none';
        // Remover cualquier video si existe
        const existingVideo = photoFrame.querySelector('iframe');
        if (existingVideo) existingVideo.remove();
    }

    function showImage(src) {
        imgElement.src = src;
        imgElement.style.display = 'block';
        placeholder.style.display = 'none';
        // Remover cualquier video si existe
        const existingVideo = photoFrame.querySelector('iframe');
        if (existingVideo) existingVideo.remove();
    }

    function showVideo(embedUrl) {
        // Ocultar imagen y placeholder
        imgElement.style.display = 'none';
        placeholder.style.display = 'none';

        // Remover video anterior si existe
        const existingVideo = photoFrame.querySelector('iframe');
        if (existingVideo) existingVideo.remove();

        // Crear iframe para video
        const iframe = document.createElement('iframe');
        iframe.src = embedUrl;
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none';
        iframe.style.borderRadius = '3px';
        iframe.setAttribute('allowfullscreen', 'true');
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');

        photoFrame.appendChild(iframe);
    }

    function tryNextExtension() {
        if (currentExtensionIndex >= extensions.length) {
            showPlaceholder();
            return;
        }

        // Intentar primero en la carpeta images/
        const imagePath = `images/dia${dayNumber}.${extensions[currentExtensionIndex]}`;
        imgElement.src = imagePath;

        imgElement.onload = function() {
            showImage(imagePath);
        };

        imgElement.onerror = function() {
            // Si no se encuentra en images/, intentar en la raíz
            const rootPath = `dia${dayNumber}.${extensions[currentExtensionIndex]}`;
            imgElement.src = rootPath;

            imgElement.onload = function() {
                showImage(rootPath);
            };

            imgElement.onerror = function() {
                currentExtensionIndex++;
                tryNextExtension();
            };
        };
    }

    // Obtener datos del día
    const dayData = diaryEntries.find(entry => entry.day === dayNumber);

    if (dayData && dayData.photo) {
        // Buscar primero en el glosario de fotos
        let photoPath = dayData.photo;

        // Si existe fotosGlosario y la foto está en el glosario, usar el nombre real
        if (typeof fotosGlosario !== 'undefined' && fotosGlosario[dayData.photo]) {
            photoPath = fotosGlosario[dayData.photo];
        }

        // Si es null o vacío, mostrar placeholder
        if (!photoPath || photoPath === '' || photoPath === null) {
            showPlaceholder();
            return;
        }

        // Si es un video de YouTube
        if (isYouTubeUrl(photoPath)) {
            const embedUrl = getYouTubeEmbedUrl(photoPath);
            showVideo(embedUrl);
            return;
        }

        // Si es una URL externa
        if (isExternalUrl(photoPath)) {
            imgElement.src = photoPath;
            imgElement.onload = function() {
                showImage(photoPath);
            };
            imgElement.onerror = function() {
                showPlaceholder();
            };
            return;
        }

        // Si es una ruta local normal
        imgElement.src = photoPath;
        imgElement.onload = function() {
            showImage(photoPath);
        };
        imgElement.onerror = function() {
            // Si falla, intentar con extensiones comunes
            tryNextExtension();
        };
    } else {
        // Si no hay foto especificada, intentar con formato dia1.jpg, dia2.png, etc.
        tryNextExtension();
    }
}

// Función para renderizar el calendario
function renderCalendar() {
    const calendarGrid = document.getElementById('calendarGrid');
    const template = document.getElementById('calendarDayTemplate');

    calendarGrid.innerHTML = '';

    diaryEntries.forEach((entry, index) => {
        const dayElement = template.content.cloneNode(true);
        const button = dayElement.querySelector('.calendar-day');

        button.querySelector('.cal-day-num').textContent = entry.day;
        button.querySelector('.cal-day-date').textContent = formatShortDate(entry.date);

        // Configurar el onclick con el índice correcto
        button.setAttribute('onclick', `goToDay(${index})`);

        // Marcar como activo si es el día actual
        if (index === currentDayIndex) {
            button.classList.add('active');
        }

        calendarGrid.appendChild(dayElement);
    });
}

// Función para renderizar una página/día
function renderDay(index) {
    const pageContainer = document.getElementById('pageContainer');
    const template = document.getElementById('dayTemplate');

    if (index < 0 || index >= diaryEntries.length) {
        pageContainer.innerHTML = '<p>No hay más días disponibles.</p>';
        return;
    }

    const entry = diaryEntries[index];
    currentDayIndex = index;

    // Limpiar contenedor
    pageContainer.innerHTML = '';

    // Clonar template
    const dayElement = template.content.cloneNode(true);

    // Configurar número del día
    dayElement.querySelector('.day-number-large').textContent = entry.day;

    // Configurar fecha
    dayElement.querySelector('.diary-date').textContent = formatDate(entry.date);

    // Configurar caption del polaroid
    dayElement.querySelector('.polaroid-caption').textContent = entry.caption || '';

    // Configurar texto del diario
    dayElement.querySelector('.diary-text').textContent = entry.text;

    // Configurar sticker decorativo
    const stickers = ['✨', '💕', '🌸', '💖', '🌟', '💝', '🦋', '🌺', '💗', '🌷'];
    const stickerIndex = (entry.day - 1) % stickers.length;
    dayElement.querySelector('.sticker').textContent = stickers[stickerIndex];

    // Añadir al DOM primero
    pageContainer.appendChild(dayElement);

    // Configurar imagen después de añadir al DOM
    const imgElement = pageContainer.querySelector('.day-photo');
    const placeholder = pageContainer.querySelector('.photo-placeholder');

    setTimeout(() => {
        loadImageWithFallback(imgElement, placeholder, entry.day);
    }, 100);

    // Actualizar indicadores
    updateNavigationIndicators();

    // Actualizar calendario
    updateCalendarActiveState();

    // Actualizar botones de navegación
    updateNavigationButtons();

    // Scroll al top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Función para actualizar indicadores de navegación
function updateNavigationIndicators() {
    document.getElementById('currentDayNumber').textContent = diaryEntries[currentDayIndex].day;
    document.getElementById('daysTotal').textContent = totalDays;
}

// Función para actualizar estado activo en el calendario
function updateCalendarActiveState() {
    const calendarDays = document.querySelectorAll('.calendar-day');
    calendarDays.forEach((day, index) => {
        if (index === currentDayIndex) {
            day.classList.add('active');
        } else {
            day.classList.remove('active');
        }
    });
}

// Función para actualizar botones de navegación
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const bottomBtns = document.querySelectorAll('.bottom-nav-btn');

    // Botón anterior
    if (currentDayIndex === 0) {
        prevBtn.disabled = true;
        if (bottomBtns[0]) bottomBtns[0].disabled = true;
    } else {
        prevBtn.disabled = false;
        if (bottomBtns[0]) bottomBtns[0].disabled = false;
    }

    // Botón siguiente
    if (currentDayIndex === diaryEntries.length - 1) {
        nextBtn.disabled = true;
        if (bottomBtns[2]) bottomBtns[2].disabled = true;
    } else {
        nextBtn.disabled = false;
        if (bottomBtns[2]) bottomBtns[2].disabled = false;
    }
}

// Navegación - Día anterior
function previousDay() {
    if (currentDayIndex > 0) {
        renderDay(currentDayIndex - 1);
    }
}

// Navegación - Día siguiente
function nextDay() {
    if (currentDayIndex < diaryEntries.length - 1) {
        renderDay(currentDayIndex + 1);
    }
}

// Ir a un día específico
function goToDay(index) {
    renderDay(index);

    // Cerrar sidebar en móvil
    if (window.innerWidth <= 1024) {
        const sidebar = document.getElementById('calendarSidebar');
        sidebar.classList.add('hidden');
        sidebar.classList.remove('active');
    }
}

// Función para inicializar el diario
function initializeDiary() {
    totalDays = diaryEntries.length;

    // Actualizar contador total
    document.getElementById('totalDays').textContent = totalDays;

    // Renderizar calendario
    renderCalendar();

    // Mostrar el primer día
    renderDay(0);

    // En móvil/tablet, ocultar sidebar por defecto
    if (window.innerWidth <= 1024) {
        const sidebar = document.getElementById('calendarSidebar');
        sidebar.classList.add('hidden');
    }
}

// Atajos de teclado
document.addEventListener('keydown', function(e) {
    // Solo funcionar si el libro está abierto
    const bookContainer = document.getElementById('bookContainer');
    if (bookContainer.style.display === 'none') return;

    // Flecha izquierda - Día anterior
    if (e.key === 'ArrowLeft') {
        e.preventDefault();
        previousDay();
    }

    // Flecha derecha - Día siguiente
    if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextDay();
    }

    // Escape - Cerrar libro
    if (e.key === 'Escape') {
        closebook();
    }

    // C - Toggle calendario
    if (e.key === 'c' || e.key === 'C') {
        toggleSidebar();
    }
});

// Detectar swipe en móvil
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    const swipeThreshold = 50;

    if (touchEndX < touchStartX - swipeThreshold) {
        // Swipe izquierda - siguiente día
        nextDay();
    }

    if (touchEndX > touchStartX + swipeThreshold) {
        // Swipe derecha - día anterior
        previousDay();
    }
}

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Añadir transiciones suaves
    const coverPage = document.getElementById('coverPage');
    coverPage.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';

    const bookContainer = document.getElementById('bookContainer');
    bookContainer.style.transition = 'opacity 0.3s ease-out';

    // Precargar algunas imágenes
    diaryEntries.slice(0, 3).forEach(entry => {
        const img = new Image();
        const extensions = ['jpg', 'png', 'jpeg'];
        extensions.forEach(ext => {
            const imgPreload = new Image();
            imgPreload.src = `dia${entry.day}.${ext}`;
        });
    });
});

// Responsive - ajustar sidebar en resize
window.addEventListener('resize', function() {
    const sidebar = document.getElementById('calendarSidebar');

    if (window.innerWidth > 1024) {
        sidebar.classList.remove('hidden');
        sidebar.classList.remove('active');
    } else {
        sidebar.classList.add('hidden');
    }
});
