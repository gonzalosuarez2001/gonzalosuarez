# Rediseño del portfolio — guía de implementación

Esta carpeta contiene el diseño aprobado del nuevo portfolio y todo lo necesario para implementarlo.

- `screens/` — el código fuente de las 4 pantallas diseñadas (Inicio, Experiencia, Proyectos, Certificaciones).
  Son archivos `.dc.html` de una herramienta de diseño: **no se pueden abrir directo en el navegador** (dependen de un
  runtime que no está incluido). Usalos como **referencia exacta** de estructura, textos, estilos (inline y en `<style>`),
  estados e interacciones (la lógica está en el `<script type="text/x-dc">` de cada archivo, clase `Component`).
  - Sintaxis a tener en cuenta: `{{valor}}` = dato que sale de `renderVals()`; `<sc-for list="{{items}}" as="x">` = un `.map()`;
    `<sc-if value="{{cond}}">` = render condicional; `onClick="{{fn}}"` = handler.
  - Las imágenes aparecen como `/_blob/<id>`: ver la tabla de mapeo más abajo para saber a qué archivo del repo corresponde cada una.
- Este README — tokens, componentes, comportamiento y decisiones.

## Decisiones generales

- Sitio de **una sola página** con scroll; el menú lleva a cada sección por ancla (`#inicio`, `#experiencia`, `#proyectos`, `#certificaciones`). En el diseño están como pantallas separadas solo para poder revisarlas.
- Modo **claro** únicamente (se elimina el toggle de tema).
- Se mantiene **ES / EN** con i18next (todos los textos van a `src/locales/es.json` y `en.json`).
- Stack: React + Vite (existente), framer-motion (existente). **Quitar** Bootstrap, bootstrap-icons, Swiper, axios y los CSS actuales.
- **Quitar** el rastreo de IP con webhook de Discord de `App.jsx`.
- Responsive: todo tiene que funcionar a 375px de ancho (las grillas pasan a 1 columna, el menú se convierte en botón hamburguesa, los paneles lista/detalle se apilan).

## Tokens de diseño

| Token | Valor |
|---|---|
| Fondo de página | `#F5F5F3` |
| Superficie (tarjetas) | `#FFFFFF` |
| Borde de tarjeta | `#E6E6E2` (separadores internos `#F0F0EC`) |
| Borde de botón secundario | `#DCDCD7` |
| Texto principal | `#0E1116` |
| Texto de párrafo | `#4A505C` |
| Texto secundario | `#5B6270` |
| Acento | `#2F5BEA` (hover: `filter: brightness(.92)`) |
| Fondo de acento suave | `color-mix(in oklab, #2F5BEA 10%, #fff)` |
| Fondo de segmented control | `#EBEBE7` |
| Tipografía | **Geist** (Google Fonts o `@fontsource-variable/geist`), pesos 400–600 |
| Radios | botones 10px · ítems de lista 12px · tarjetas 16–18px · chips 8px |
| Ancho máximo de contenido | 1200px, padding lateral `clamp(20px, 4vw, 40px)` |
| Touch targets | mínimo 44px |

Tipografía: H1 de sección `clamp(34px, 3.6vw, 46px)` / 600 / letter-spacing -0.035em. H1 del hero `clamp(38px, 4.2vw, 56px)` / 600 / -0.038em. Párrafos 18px / line-height 1.6. Labels 13–14px en texto secundario. Números con `font-variant-numeric: tabular-nums`.

## Componentes

1. **Nav** — nombre a la izquierda; links (Inicio, Experiencia, Proyectos, Certificaciones, Contacto) en texto secundario, el activo en texto principal con una línea de 2px de acento debajo; botón "ES / EN" a la derecha. En mobile: botón hamburguesa.
2. **Button** — primario (fondo acento, texto blanco, ícono flecha que se desplaza 3px en hover) y secundario (fondo blanco, borde `#DCDCD7`, borde oscuro en hover). Alto 46px.
3. **Chip** — 13px, padding 6×10, fondo `#F5F5F3`, borde `#EAEAE6`, radio 8.
4. **SegmentedControl** — contenedor `#EBEBE7` radio 12 padding 4; opción activa con fondo blanco y sombra mínima. Se usa para filtros (Proyectos y Certificaciones).
5. **ListDetail** — tarjeta blanca dividida: lista de ítems a la izquierda (~300px) y detalle a la derecha. Ítem activo: fondo `#F5F5F3` + punto de 6px de acento. Accesible como `role="tablist"` / `role="tab"` / `aria-selected`. Se usa en Experiencia y Proyectos.
6. **StagesPanel** (hero) — tarjeta con 3 pestañas (Desarrollo / Integraciones IA / Deploy en la nube). Avanza sola cada 5s, con barra de progreso de 2px bajo la pestaña activa; se pausa con hover; click cambia de pestaña y reinicia el timer. Cada etapa: 1 línea de descripción, un área visual de 300px de alto (captura de Moviltrack / teléfono con Credencial / lista de pasos de un pipeline que se tildan en secuencia) y una línea de pie con proyecto + stack. **Nota:** más adelante esto se va a reemplazar por un video; dejarlo encapsulado en su propio componente.
7. **Footer** — línea superior `#E6E6E2`; "Desarrollado por Gonzalo Suarez" a la izquierda; íconos de GitHub y LinkedIn (44×44, separados por una línea vertical) a la derecha.

## Secciones

- **Inicio** (`screens/B2-Etapas.dc.html`): foto redonda 64px + nombre + "Software Developer en ABN · Cofundador de ADINI"; titular "Llevo ideas de cero a producción."; párrafo; botones Contactame (mailto) y Descargar CV (PDF según idioma, ya existen en `public/assets/pdf/`); links LinkedIn, GitHub y email. A la derecha, StagesPanel.
- **Experiencia** (`screens/B2-Experiencia.dc.html`): ListDetail con ABN (2026 — hoy, "Actual"), ADINI (2024 — hoy, "Actual") y UTN (2022 — 2026). UTN muestra sus 3 roles como pasos verticales con sus años. Solo años, sin meses.
- **Proyectos** (`screens/B2-Proyectos.dc.html`): filtros (Todos, Web, Móvil, Microservicios, IA); ListDetail con 4 destacados (Moviltrack, RIP Alive, Credencial UTN + IA, Difusiones) mostrando captura grande, descripción, desafíos con check y stack; abajo "Más proyectos" en grilla de tarjetas (Toon Guesser, Paso a Paso, Traducciones, Organizador); bloque final de contacto.
- **Certificaciones** (`screens/B2-Certificaciones.dc.html`): filtros (Todas, Desarrollo, Bases de datos, Infraestructura, Idiomas); grilla de tarjetas con imagen del certificado, título, institución, fecha y "Ver" que abre el PDF existente.

Sección **Stack / Tecnologías**: todavía no está diseñada; se puede omitir o resolver con el mismo lenguaje visual (chips agrupados por categoría).

## Animaciones (sobrias)

- Entrada de contenido: fade + translateY(10px), 0.8s, `cubic-bezier(.2,.7,.2,1)`, escalonado ~80ms.
- Cambio de pestaña / detalle: fade + translateY(6–10px), 0.45s.
- Hovers: elevación de tarjetas 2px, zoom de imagen 1.025–1.03 en 1–1.2s, flechas que se desplazan 3px.
- Todo desactivado con `prefers-reduced-motion: reduce` (incluido el auto-avance del StagesPanel).

## Mapeo de imágenes (`/_blob/<id>` → archivo del repo)

Todas están en `public/assets/images/`. Conviene exportarlas a `.webp` (máx. 1600px de ancho las capturas, 700px las de teléfono).

| id | archivo | nota |
|---|---|---|
| b02755033be502a9ae91a31e4f8b9c6c | me.png | foto de perfil |
| d2b4e4934fb47cf2797c329bc202f661 | movil1.png | Moviltrack |
| dfd66800845de6b7be1947b440bdc8a1 | difu1.png | Difusiones |
| 7dcf21cda8dced1f5666b41306a4bae5 | pap2.png | Paso a Paso |
| 3876bae0d98205b4cee6c9f589f8b774 | planner2.png | Organizador |
| b83f9c535d78abdc41b620650e1296d4 | traducciones1.png | Traducciones |
| 1a901d2091feb1c6ce8128468302165e | toon1.png | Toon Guesser |
| ef82559582421fa7ef0b9fa5d540f189 | rip1.png | **recortada sin el marco de teléfono** (crop aprox. x 196–884, y 205–1650) |
| 68261ee7669327e34e94cdb42a1ef6e8 | rip3.png | ídem recorte |
| 26da3e4b63b425110d4363ab41306dc3 | credencial1.jpeg | |
| 88859c2651200557e7ae45706077d6c7 | credencial4.jpeg | |
| 47963912153eb9c9d380106bfdacab98 | Ingles.webp | certificado |
| 4ed9e454cd27ac25086d85a468fb601a | DiplomaturaFullStack.webp | certificado |
| fd568f70020933f8309192f3b5295e9b | FundamentosDB.webp | certificado |
| 2d334d252eede18fa1156b4ce14cda81 | DiplomaturaDB.webp | certificado |
| 92096e4cb7c50095e8d5884551a341bc | DesarrolloReact.webp | certificado |
| c8419f551acbf7c53a6c2e2fe854cdfa | DesarrolloJS.webp | certificado |
| 8c48957af1e47bc6fcaf0edef84054b5 | DockerKubernetes.webp | certificado |
| 21e606990599b1b44ff5e6f9efb6c4f7 | BootcampUTN.webp | certificado |

No usar `credencial2.jpeg` (muestra DNI y legajo). Los certificados muestran el DNI: idealmente reemplazarlos por versiones con ese dato tapado.

## Bugs del sitio actual a no arrastrar

- `mobileProjects.js` referencia `credencial1.png` / `credencial2.png` pero los archivos son `.jpeg`.
- `webProjects.js` importa `u` de `framer-motion/client` sin usarlo.
