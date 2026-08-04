# Ruta de Aprendizaje CINTIA - Estrategia de Diseño

## Enfoque de Diseño Seleccionado: Educativo Moderno con Énfasis en Accesibilidad

### Design Movement
**Minimalismo Educativo con Toques de Dinamismo:** Un enfoque que combina la claridad y accesibilidad del diseño educativo con elementos modernos que reflejan la naturaleza digital de la plataforma CINTIA. Inspirado en interfaces de plataformas de aprendizaje líderes (Coursera, Udemy) pero adaptado al contexto institucional de la Universidad de Córdoba.

### Core Principles
1. **Claridad Jerárquica:** La información se presenta en niveles claros: módulos principales → contenidos específicos → actividades de aprendizaje.
2. **Navegación Intuitiva:** Los usuarios pueden acceder fácilmente a cualquier sección desde cualquier dispositivo sin fricción.
3. **Contexto Disciplinar:** Cada facultad tiene su propia identidad visual sutil, permitiendo a los docentes identificarse con su área.
4. **Progresión Visual:** El viaje del usuario a través de la ruta de aprendizaje es evidente y motivador.

### Color Philosophy
- **Primario:** Azul Institucional (#0066CC) - Representa la confianza, la educación y la tecnología. Alineado con la identidad de universidades modernas.
- **Secundario:** Verde Complementario (#10B981) - Representa el crecimiento y el aprendizaje progresivo.
- **Acentos por Facultad:** Cada facultad tendrá un color secundario distintivo:
  - Ingeniería: Naranja (#F97316)
  - Medicina Veterinaria: Púrpura (#A855F7)
  - Ciencias Agrícolas: Verde Tierra (#84CC16)
  - Ciencias Básicas: Cian (#06B6D4)
  - Educación y Ciencias Humanas: Rojo Coral (#EF4444)
- **Neutros:** Grises suaves para fondos y texto secundario, con blanco limpio para áreas de contenido.

### Layout Paradigm
- **Hero Section:** Encabezado atractivo con la propuesta de valor clara y CTA principal.
- **Módulos en Grid:** Vista de tarjetas para los 4 módulos comunes, cada una con ícono, título y descripción breve.
- **Sección de Contenidos Detallados:** Panel expandible/accordion que muestra los contenidos específicos de cada módulo.
- **Facultades en Carrusel/Grid:** Presentación de las 5 facultades con sus especializaciones.
- **Footer Informativo:** Enlaces a recursos, contacto y referencias.

### Signature Elements
1. **Tarjetas de Módulos Interactivas:** Cada módulo es una tarjeta que se expande para mostrar contenidos, con animación suave.
2. **Ícono de Progresión:** Visualización de la ruta de aprendizaje como un camino o escalera que el docente recorre.
3. **Badges de Facultad:** Pequeños distintivos visuales que identifican a qué facultad pertenece cada contenido especializado.

### Interaction Philosophy
- **Hover Effects:** Las tarjetas se elevan sutilmente al pasar el cursor, indicando interactividad.
- **Transiciones Suaves:** Todas las transiciones entre estados son fluidas (200-300ms).
- **Feedback Inmediato:** Al expandir/contraer secciones, hay retroalimentación visual clara.
- **Responsive Primero:** El diseño se adapta perfectamente a móvil, tablet y escritorio.

### Animation Guidelines
- **Entrada de Tarjetas:** Las tarjetas de módulos entran con un fade-in + slide-up suave (300ms ease-out).
- **Expansión de Contenidos:** Los accordions se expanden con una animación de altura suave (250ms ease-in-out).
- **Hover en Tarjetas:** Escala ligera (1.02) + sombra más profunda (200ms ease-out).
- **Scroll Reveal:** Los elementos se revelan sutilmente cuando entran en el viewport.

### Typography System
- **Display Font:** "Poppins" (bold, 700) para títulos principales y encabezados de módulos. Moderna, amigable y clara.
- **Body Font:** "Inter" (regular, 400) para contenido de texto. Altamente legible en pantalla.
- **Hierarchy:**
  - H1: 48px (Poppins 700) - Título principal
  - H2: 32px (Poppins 600) - Títulos de secciones
  - H3: 24px (Poppins 600) - Títulos de módulos
  - Body: 16px (Inter 400) - Texto general
  - Small: 14px (Inter 400) - Descripciones secundarias

### Brand Essence
**Posicionamiento:** "La plataforma de capacitación integral para docentes de la Universidad de Córdoba, que transforma la enseñanza virtual en una experiencia clara, accesible y transformadora."

**Personalidad:** Profesional, Accesible, Progresista, Confiable, Inspirador.

### Brand Voice
- **Tono:** Profesional pero amigable, motivador sin ser condescendiente.
- **Microcopy Ejemplos:**
  - CTA Principal: "Comienza tu Ruta de Aprendizaje"
  - Descripción de Módulo: "Domina los fundamentos de CINTIA en 4 módulos estructurados"
  - Botón de Expansión: "Ver Contenidos" / "Ocultar Contenidos"

### Wordmark & Logo
**Logo:** Un símbolo abstracto que combina:
- Una escalera/ruta ascendente (representando progresión)
- Una pantalla/dispositivo (representando lo digital)
- El verde y azul institucionales en un diseño moderno y limpio

**Wordmark:** "CINTIA" en Poppins Bold, con el logo a la izquierda.

### Signature Brand Color
**Azul Institucional (#0066CC):** Este es el color que identifica inmediatamente la marca. Se usa en botones principales, encabezados y elementos de navegación.

---

## Estructura del Sitio

### Páginas Principales
1. **Home:** Hero + Módulos + Facultades + CTA
2. **Módulos Comunes:** Detalle completo de los 4 módulos con contenidos expandibles
3. **Facultades:** Detalle de las 5 facultades y sus especializaciones
4. **Contenidos (Nueva Sección):** Vista completa y organizada de todos los contenidos que se aprenderán

### Componentes Clave
- Header con navegación
- Hero Section
- Tarjetas de Módulos
- Accordion de Contenidos
- Carrusel/Grid de Facultades
- Sección de Contenidos Detallados
- Footer

---

## Notas de Implementación
- Usar Tailwind CSS 4 con OKLCH para colores
- Implementar componentes de shadcn/ui para consistencia
- Asegurar accesibilidad WCAG AA
- Optimizar para móvil primero
- Usar Framer Motion para animaciones suaves
