// ========================================
// DATOS DEL DIARIO DE AMOR
// ========================================

// ========================================
// 📸 GLOSARIO DE FOTOS Y MULTIMEDIA
// ========================================
//
// Aquí defines tus fotos/videos UNA SOLA VEZ
// Luego solo usas foto1, foto2, etc. en tus entradas
//
// ¡OPCIONES DISPONIBLES!
//
// 1. FOTO LOCAL (en carpeta images/):
//    foto1: 'images/mi-foto.jpg'
//
// 2. URL DE IMAGEN EXTERNA:
//    foto2: 'https://i.imgur.com/abc123.jpg'
//
// 3. VIDEO DE YOUTUBE:
//    foto3: 'https://www.youtube.com/watch?v=abc123'
//    foto4: 'https://youtu.be/abc123'
//
// 4. SIN FOTO (solo placeholder):
//    foto5: null   o   foto5: ''
//
// 5. IMAGEN GENÉRICA (se repite en varios días):
//    foto6: 'images/imagen-generica-amor.png'
//
const fotosGlosario = {
    // Tus fotos reales (INVERTIDAS - ahora correctas)
    foto1: 'images/dia2.jpeg',  // Esta era la que estaba en dia2
    foto2: 'images/dia1.jpeg',  // Esta era la que estaba en dia1

    // Imagen para el día 3
    foto3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSgBEqKn2i6COeKNV6QUvx04MJJh1pkmavTQ&s',

    // Imagen de Coraline para el día 4
    coraline: 'https://play-lh.googleusercontent.com/1MVSxuCvyppMOAMToGiaAy_YHIzlzXe13VKpUzNAzOOY69KS8tulON2stN7_I6FczLzVeuND7PzKBlLK6Q=s1280-w1280-h720',

    // Agrega más fotos aquí según las necesites:
    // foto5: 'images/dia5.jpeg',
    // foto6: 'https://ejemplo.com/imagen.jpg',

    // También puedes usar videos de YouTube:
    // video1: 'https://www.youtube.com/watch?v=abc123',

    // Para días sin foto, usa: photo: null

    // ... y así sucesivamente
};

// ========================================
// 💕 ENTRADAS DEL DIARIO
// ========================================
//
// Formato de cada entrada:
// {
//     day: número del día (1, 2, 3, etc.),
//     date: fecha en formato 'YYYY-MM-DD',
//     caption: texto corto que aparece en el polaroid,
//     text: tu entrada de diario (puede ser tan larga como quieras),
//     photo: usa 'foto1', 'foto2', etc. del glosario de arriba
// }
//
// ========================================

const diaryEntries = [
    {
        day: 1,
        date: '2026-01-09',
        caption: 'El inicio de nuestra historia',
        text: `Hola mi amor, hoy comenzamos esta historia de amor. Quiero decirte que estaba muy nervioso porque no sabía qué pasaría. Si te soy sincero, me súper emocioné por este día y disfruté mucho preparar todo.

La verdad me disculpo porque no estaba la cena lista a tiempo, pero la verdad me da gusto que te haya gustado. Por otro lado, te agradezco infinitamente por este día porque la verdad fue un día especial y de verdad amor, como te dije ese día, es una oportunidad que no pienso desperdiciar en nada.

Eres la persona más maravillosa del mundo y deseo con todo el corazón que estemos juntos siempre porque la verdad yo creo que el para siempre sí existe.`,
        photo: 'foto1'
    },
    {
        day: 2,
        date: '2026-01-10',
        caption: 'Nuestro segundo día',
        text: `Hola amor, la verdad este día comenzó súper temprano porque nos dormimos muy temprano jaja. Mi amor, este es el día dos, cenamos y vimos una peli la neta sí bien buena, luego nos acostamos y al siguiente día agarramos camino.

¿Te acuerdas que manejas muy bien? Me encanta mi amor. Llegamos y comimos rosquita y jaja ay cielo, diste más vueltas que una pirinola. Nunca te había visto batallar tanto para dormir.

En fin mi amor, este es el resumen del día. ¡Eres increíble!`,
        photo: 'foto2'
    },
    {
        day: 3,
        date: '2026-01-11',
        caption: 'Estableciendo nuestras bases',
        text: `Hola bebé, este día fue diría interesante, pero en resumen se establecieron las reglas para que todo esto funcione. De verdad tengo muchos deseos de que seamos felices juntos, deseo y anhelo que cada día que pase estemos juntos por siempre.

Gracias porque la verdad eres lo mejor del mundo y como te dije no te vas a arrepentir, yo deseo que estemos bien, cumplamos nuestros sueños, nuestras metas pero poder estar ahí para vértelas cumplir.

Eres 1 en 3 billones de personas. ¡Eres única!`,
        photo: 'foto3'
    },
    {
        day: 4,
        date: '2026-01-12',
        caption: 'Jugando juntos',
        text: `Amor, es 12 de enero, ya vamos por 4 días y la verdad sí pienso hacer esto diario o al menos cada tercer día para no olvidar. Es nuestro diario, en su momento lo pasaré a otro lugar más seguro pero mientras quiero que lo veamos aquí.

Hoy hablamos por llamada mucho y no sabes cómo amo estos momentos. Me encanta que hablemos como pequeños, me siento grande y chiquitito a la vez. De verdad que no hay nadie como tú que me haga sentirme así, me tienes loco.

En fin amor, me voy porque hoy toca jugar Coraline.`,
        photo: 'coraline'  // Imagen de Coraline
    },
    // ========================================
    // AGREGAR MÁS DÍAS AQUÍ
    // ========================================
    //
    // Copia y pega este formato para agregar más días:
    /*
    {
        day: 4,
        date: '2026-01-12',
        caption: 'Cuarto día mágico',
        text: `Tu texto aquí...

        Puedes escribir varias líneas
        y será muy bonito`,
        photo: 'foto4'  // Foto local del glosario
    },
    {
        day: 5,
        date: '2025-01-13',
        caption: 'Día sin foto',
        text: `Hoy no nos vimos pero pienso en ti...`,
        photo: null  // Sin foto = aparece corazón placeholder
    },
    {
        day: 6,
        date: '2025-01-14',
        caption: 'Video especial',
        text: `Mira este video que me recordó a nosotros...`,
        photo: 'foto5'  // Video de YouTube del glosario
    },
    {
        day: 7,
        date: '2025-01-15',
        caption: 'Imagen de internet',
        text: `Encontré esta imagen hermosa...`,
        photo: 'foto6'  // URL externa del glosario
    },
    */
    //
    // OPCIONES PARA "photo":
    // 1. 'foto1' = Foto del glosario (local, URL o video)
    // 2. null = Sin foto (muestra placeholder con corazón)
    // 3. '' = Sin foto (muestra placeholder con corazón)
    //
    // RECUERDA:
    // 1. Primero agrega la foto al glosario arriba (fotosGlosario)
    // 2. Luego usa 'foto4', 'foto5', etc. aquí
    // 3. Pon una coma (,) después de cada entrada excepto la última
    //
    // ========================================
];

// ========================================
// NOTAS IMPORTANTES:
// ========================================
//
// 📸 OPCIONES PARA FOTOS/VIDEOS:
//
// ┌─────────────────────────────────────────────────────────┐
// │ 1. FOTO LOCAL (en carpeta images/)                     │
// ├─────────────────────────────────────────────────────────┤
// │   foto1: 'images/mi-foto.jpg',                          │
// │   photo: 'foto1'                                        │
// └─────────────────────────────────────────────────────────┘
//
// ┌─────────────────────────────────────────────────────────┐
// │ 2. URL DE IMAGEN EXTERNA (Imgur, Google Photos, etc.)  │
// ├─────────────────────────────────────────────────────────┤
// │   foto2: 'https://i.imgur.com/abc123.jpg',              │
// │   photo: 'foto2'                                        │
// │                                                         │
// │   Ejemplos de servicios:                                │
// │   • Imgur: https://i.imgur.com/abc123.jpg               │
// │   • Dropbox: https://dl.dropboxusercontent.com/...      │
// │   • Google Photos: (obtén link directo a imagen)        │
// └─────────────────────────────────────────────────────────┘
//
// ┌─────────────────────────────────────────────────────────┐
// │ 3. VIDEO DE YOUTUBE                                     │
// ├─────────────────────────────────────────────────────────┤
// │   foto3: 'https://www.youtube.com/watch?v=abc123',      │
// │   foto4: 'https://youtu.be/abc123',                     │
// │   photo: 'foto3'                                        │
// │                                                         │
// │   Ambos formatos funcionan:                             │
// │   • youtube.com/watch?v=...                             │
// │   • youtu.be/...                                        │
// └─────────────────────────────────────────────────────────┘
//
// ┌─────────────────────────────────────────────────────────┐
// │ 4. SIN FOTO (muestra placeholder con corazón)           │
// ├─────────────────────────────────────────────────────────┤
// │   photo: null                                           │
// │   photo: ''                                             │
// │                                                         │
// │   Ideal para días que no se vieron o sin foto          │
// └─────────────────────────────────────────────────────────┘
//
// ========================================
//
// 💡 VENTAJAS DEL SISTEMA:
//
// ✓ Fotos locales con nombres originales (NO renombrar)
// ✓ URLs de imágenes externas
// ✓ Videos de YouTube embebidos
// ✓ Placeholders automáticos cuando no hay foto
// ✓ Todo en un solo glosario fácil de mantener
// ✓ Cambiar contenido = editar solo el glosario
//
// ========================================
//
// 📋 EJEMPLOS COMPLETOS:
//
// ┌─────────────────────────────────────────────────────────┐
// │ EJEMPLO 1: Combinación de todo                         │
// └─────────────────────────────────────────────────────────┘
//
// const fotosGlosario = {
//     foto1: 'images/IMG_0001.jpg',                      // Local
//     foto2: 'https://i.imgur.com/abc123.jpg',           // URL
//     foto3: 'https://www.youtube.com/watch?v=abc123',   // Video
//     foto4: 'images/nuestra-cita.png',                  // Local
// };
//
// const diaryEntries = [
//     { day: 1, photo: 'foto1' },      // Muestra foto local
//     { day: 2, photo: 'foto2' },      // Muestra imagen de internet
//     { day: 3, photo: 'foto3' },      // Muestra video de YouTube
//     { day: 4, photo: null },         // Muestra placeholder
//     { day: 5, photo: 'foto4' },      // Muestra otra foto local
// ];
//
// ┌─────────────────────────────────────────────────────────┐
// │ EJEMPLO 2: Imagen genérica para varios días            │
// └─────────────────────────────────────────────────────────┘
//
// const fotosGlosario = {
//     fotoGenerica: 'images/corazon-generico.png',
//     foto1: 'images/dia-especial.jpg',
// };
//
// const diaryEntries = [
//     { day: 1, photo: 'foto1' },         // Foto especial
//     { day: 2, photo: 'fotoGenerica' },  // Genérica
//     { day: 3, photo: 'fotoGenerica' },  // Genérica
//     { day: 4, photo: null },            // Placeholder
// ];
//
// ========================================
//
// 📝 OTROS TIPS:
//
// • Formatos de imagen: .jpg, .jpeg, .png, .gif, .webp
// • Videos: Solo YouTube (por ahora)
// • URLs: Deben empezar con http:// o https://
//
// • Para el texto, usa saltos de línea:
//   text: `Primera línea
//   Segunda línea
//
//   Otra línea después de un espacio`
//
// • Formato de fecha: 'YYYY-MM-DD'
//   Ejemplo: '2025-01-15' para el 15 de enero de 2025
//
// • Para fotos locales, siempre usa 'images/' al inicio:
//   ✓ Correcto:   'images/mi-foto.jpg'
//   ✗ Incorrecto: 'mi-foto.jpg'
//
// ========================================
