# 💕 Nuestro Diario de Amor

Un diario interactivo y romántico para documentar nuestra historia juntos.

## ✨ Características

- 📅 Calendario lateral para navegación rápida
- 📸 Soporte para fotos locales, URLs e imágenes de internet
- 🎬 Videos de YouTube embebidos
- 💕 Diseño aesthetic estilo Pinterest con polaroids
- 📱 Responsive - se ve perfecto en móvil y computadora
- ⌨️ Atajos de teclado para navegación
- 👆 Gestos táctiles (swipe) en móvil

## 🚀 Cómo Usar

1. Abre `index.html` en tu navegador
2. Click en "Abrir nuestro libro"
3. Navega entre días con los botones o el calendario

## 📸 Agregar Fotos

1. Coloca tus fotos en la carpeta `images/`
2. Edita `datos.js` y agrega al glosario:
   ```javascript
   const fotosGlosario = {
       foto1: 'images/tu-foto.jpg',
   };
   ```
3. Úsalas en tus días con `photo: 'foto1'`

## 📝 Agregar Días

Edita `datos.js` y agrega nuevas entradas:

```javascript
{
    day: 5,
    date: '2026-01-13',
    caption: 'Un día especial',
    text: `Tu historia aquí...`,
    photo: 'foto5'
}
```

## 📚 Documentación

- `INSTRUCCIONES.txt` - Guía completa
- `OPCIONES_MULTIMEDIA.txt` - Cómo usar fotos, videos y URLs
- `GUIA_RAPIDA_FOTOS.txt` - Guía rápida del sistema de fotos

## 💝 Creado con amor

Este diario fue creado para documentar nuestra historia de amor, día a día.

---

*Comenzó el 9 de enero, 2026*
