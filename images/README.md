# 📸 Carpeta de Fotos

## ¿Qué va aquí?

Coloca **TODAS** tus fotos locales en esta carpeta.

## ¿Tengo que renombrarlas?

**¡NO!** Usa los nombres originales de tus fotos:
- `IMG_20250109_143522.jpg`
- `Screenshot_2025-01-11.png`
- `mi-foto-favorita.jpeg`
- Cualquier nombre que ya tengan

## ¿Cómo las uso?

1. Copia tus fotos aquí
2. Ve al archivo `datos.js`
3. Agrégalas al glosario:

```javascript
const fotosGlosario = {
    foto1: 'images/IMG_20250109.jpg',
    foto2: 'images/mi-foto-linda.png',
    foto3: 'images/Screenshot_001.jpg',
};
```

4. Úsalas en tus entradas con `photo: 'foto1'`

## Opciones Multimedia

Además de fotos locales, también puedes usar:

### 🌐 URLs de Internet
```javascript
foto4: 'https://i.imgur.com/abc123.jpg',
```

### 🎬 Videos de YouTube
```javascript
foto5: 'https://www.youtube.com/watch?v=abc123',
```

### 💕 Sin Foto
```javascript
photo: null  // Muestra placeholder con corazón
```

## Formatos Soportados

✓ .jpg / .jpeg
✓ .png
✓ .gif
✓ .webp

---

**Ver más opciones:** Lee el archivo `OPCIONES_MULTIMEDIA.txt` en la carpeta principal.
