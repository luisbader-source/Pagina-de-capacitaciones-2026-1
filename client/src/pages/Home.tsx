import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, BarChart3, Zap } from "lucide-react";
import Header from "@/components/Header";
import ModuleCard from "@/components/ModuleCard";
import FacultyCard from "@/components/FacultyCard";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-green-50 py-16 md:py-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/imagefondo.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
          {/* Blue overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 to-green-50/90"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Domina el {" "}
                <span className="text-primary">CAMPUS VIRTUAL</span> y
                Transforma tu enseñanza con el apoyo de las TIC.
              </h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Una ruta de aprendizaje integral diseñada para docentes de la
                Universidad de Córdoba. Aprende desde los fundamentos hasta
                especializaciones disciplinares adaptadas a tu facultad.
              </p>
              <motion.button
                className="px-8 py-3 bg-primary text-white rounded-lg font-semibold flex items-center gap-2 hover:bg-primary/90 transition-colors"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                Comienza tu Ruta
                <ArrowRight size={20} />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="/CINTIA LEARNING.avif"
                alt="CINTIA Learning Platform"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Módulos Comunes Section */}
      <section id="modulos" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Módulos Comunes de Capacitación
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Una estructura pedagógica sólida que proporciona los fundamentos
              necesarios para todos los docentes, independientemente de su
              facultad.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <ModuleCard
                icon={<Zap />}
                number={1}
                title="Introducción a CINTIA"
                objective="Familiariza a los docentes con la interfaz de CINTIA y los principios clave de la educación virtual."
                contents={[
                  {
                    title: "Contenidos",
                    items: [
                      "Iniciar sesión y recuperación de contraseña",
                      "Vista inicial",
                      "Perfil de usuario",
                      "Área personal",
                      "Navegación por los bloques y Menús",
                      "Cambiar la contraseña de usuario",
                    ],
                  },
                ]}
                activities={[
                  "Exploración guiada de la plataforma",
                  "Participación en un foro de presentación",
                  "Configuración del perfil personal",
                  "Creación de un esquema básico de curso",
                ]}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <ModuleCard
                icon={<BookOpen />}
                number={2}
                title="Creación de Contenidos Digitales"
                objective="Capacita a los docentes en la elaboración y organización de recursos didácticos digitales."
                contents={[
                  {
                    title: "Contenidos",
                    items: [
                      "Estructura de curso",
                      "Participantes",
                      "Mensajería",
                      "Edición de curso",
                      "Edición de encabezado",
                      "Área de texto y medios",
                    ],
                  },
                ]}
                activities={[
                  "Subida y organización de diferentes tipos de archivos",
                  "Creación de una página con contenido multimedia",
                  "Diseño de un libro interactivo en CINTIA",
                ]}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <ModuleCard
                icon={<Users />}
                number={3}
                title="Actividades Interactivas"
                objective="Diseña e implementa actividades que promuevan la participación activa y colaborativa."
                contents={[
                  {
                    title: "Contenidos",
                    items: [
                      "Categorías",
                      "Opción múltiple",
                      "Verdadero o Falso",
                      "Respuestas cortas",
                      "Emparejamiento",
                      "Arrastrar y soltar sobre texto",
                      "Importar y Exportar",
                      "Configuración de cuestionarios",
                      "Agregando preguntas al cuestionario",
                    ],
                  },
                ]}
                activities={[
                  "Creación de un foro de debate con una consigna específica",
                  "Diseño de una tarea con rúbrica de evaluación",
                  "Participación en la construcción de un wiki o glosario",
                ]}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <ModuleCard
                icon={<BarChart3 />}
                number={4}
                title="Evaluación y Seguimiento"
                objective="Proporciona herramientas para evaluar el progreso y ofrecer retroalimentación efectiva."
                contents={[
                  {
                    title: "Contenidos",
                    items: [
                      "Libro de calificaciones",
                      "Registros",
                      "Actividad del curso",
                      "Restricción por fecha",
                      "Restricción por calificación",
                      "Restricción por finalización de actividad",
                      "Restricción por grupo",
                      "Restricción por perfil de usuario",
                    ],
                  },
                ]}
                activities={[
                  "Configuración de un libro de calificaciones básico",
                  "Calificación de una tarea con retroalimentación",
                  "Revisión de informes de actividad del curso",
                ]}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contenidos Detallados Section */}
      <section id="contenidos" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contenidos que Aprenderás
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Desglose completo de todos los temas, subtemas y habilidades que
              desarrollarás a través de esta ruta de aprendizaje.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Habilidades Técnicas
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold text-lg">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Gestión de Cursos
                    </h4>
                    <p className="text-sm text-gray-600">
                      Crear, organizar y administrar cursos en CINTIA
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold text-lg">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Recursos Multimedia
                    </h4>
                    <p className="text-sm text-gray-600">
                      Integrar videos, audios e imágenes en tus cursos
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold text-lg">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Evaluación Digital
                    </h4>
                    <p className="text-sm text-gray-600">
                      Crear cuestionarios, tareas y rúbricas de evaluación
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold text-lg">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Análisis de Datos
                    </h4>
                    <p className="text-sm text-gray-600">
                      Interpretar reportes y estadísticas de aprendizaje
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Competencias Pedagógicas
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold text-lg">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Diseño Instruccional
                    </h4>
                    <p className="text-sm text-gray-600">
                      Planificar experiencias de aprendizaje efectivas
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold text-lg">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Comunicación Virtual
                    </h4>
                    <p className="text-sm text-gray-600">
                      Fomentar interacción y colaboración en línea
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold text-lg">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Retroalimentación Efectiva
                    </h4>
                    <p className="text-sm text-gray-600">
                      Proporcionar comentarios constructivos y motivadores
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold text-lg">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Inclusión Digital
                    </h4>
                    <p className="text-sm text-gray-600">
                      Diseñar cursos accesibles para todos los estudiantes
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Facultades Section */}
      <section id="facultades" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Especializaciones por Facultad
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Adaptaciones específicas de la ruta de aprendizaje para cada
              disciplina, reflejando las metodologías y recursos propios de
              cada área.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <FacultyCard
                icon="⚙️"
                name="Facultad de Ingeniería"
                focus="Aplicación Técnica de CINTIA"
                color="text-orange-600"
                date="Lunes 17 de agosto a las 9:00 a.m."
                contents={[
                  "Módulo 1: Acceso al campus virtual para proyectos",
                  "Módulo 2: Estructura de cursos de ingeniería",
                  "Módulo 3: Cuestionarios técnicos y evaluaciones",
                  "Módulo 4: Seguimiento de proyectos en calificaciones",
                ]}
                examples={[
                  "Configuración de restricciones por grupos de laboratorio",
                  "Cuestionarios de opción múltiple para competencias técnicas",
                  "Libro de calificaciones con seguimiento de hitos",
                  "Foros de resolución de problemas de ingeniería",
                ]}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <FacultyCard
                icon="🏥"
                name="Medicina Veterinaria y Zootecnia"
                focus="Casos Clínicos y Evaluación Veterinaria"
                color="text-purple-600"
                date="Martes 18 de agosto a las 9:00 a.m."
                contents={[
                  "Módulo 1: Acceso al campus para casos clínicos",
                  "Módulo 2: Edición de cursos con contenido veterinario",
                  "Módulo 3: Cuestionarios de diagnóstico patológico",
                  "Módulo 4: Evaluación de casos en calificaciones",
                ]}
                examples={[
                  "Cuestionarios de emparejamiento para patologías",
                  "Arrastrar y soltar para identificación de especies",
                  "Restricciones por fecha para entregas de casos",
                  "Foros de diagnóstico y tratamiento colaborativo",
                ]}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <FacultyCard
                icon="🌾"
                name="Facultad de Ciencias Agrícolas"
                focus="Proyectos Agrícolas y Monitoreo"
                color="text-lime-600"
                date="Miércoles 19 de agosto a las 9:00 a.m."
                contents={[
                  "Módulo 1: Acceso al campus para proyectos agrícolas",
                  "Módulo 2: Estructura de cursos con contenido agrícola",
                  "Módulo 3: Cuestionarios de identificación de cultivos",
                  "Módulo 4: Seguimiento de proyectos en calificaciones",
                ]}
                examples={[
                  "Cuestionarios con imágenes de plagas y enfermedades",
                  "Respuestas cortas sobre técnicas de cultivo",
                  "Restricciones por grupo para diferentes parcelas",
                  "Foros de experiencias de campo y clima",
                ]}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <FacultyCard
                icon="🔬"
                name="Facultad de Ciencias Básicas"
                focus="Experimentación y Análisis Científico"
                color="text-cyan-600"
                date="Jueves 20 de agosto a las 9:00 a.m."
                contents={[
                  "Módulo 1: Acceso al campus para laboratorios virtuales",
                  "Módulo 2: Edición de cursos con contenido científico",
                  "Módulo 3: Cuestionarios de conceptos abstractos",
                  "Módulo 4: Evaluación de experimentos en calificaciones",
                ]}
                examples={[
                  "Cuestionarios de verdadero/falso para conceptos teóricos",
                  "Respuestas cortas para ecuaciones y fórmulas",
                  "Importar/exportar cuestionarios de laboratorio",
                  "Foros de discusión de resultados experimentales",
                ]}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <FacultyCard
                icon="📚"
                name="Educación y Ciencias Humanas"
                focus="Metodologías Pedagógicas Innovadoras"
                color="text-red-600"
                date="Viernes 21 de agosto a las 9:00 a.m."
                contents={[
                  "Módulo 1: Acceso al campus para portafolios digitales",
                  "Módulo 2: Edición de cursos con contenido pedagógico",
                  "Módulo 3: Cuestionarios de análisis pedagógico",
                  "Módulo 4: Evaluación de ensayos en calificaciones",
                ]}
                examples={[
                  "Cuestionarios de opción múltiple para teoría educativa",
                  "Foros de debate sobre tendencias pedagógicas",
                  "Restricciones por perfil de usuario para diferentes roles",
                  "Tareas de ensayos críticos con rúbricas",
                ]}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para Transformar tu Enseñanza Virtual?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Únete a docentes de la Universidad de Córdoba que ya están
              mejorando sus prácticas educativas con CINTIA.
            </p>
            <motion.button
              className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Acceder a la Ruta de Aprendizaje
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-white mb-4">CINTIA</h3>
              <p className="text-sm">
                Plataforma de capacitación para docentes de la Universidad de
                Córdoba
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Navegación</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#inicio" className="hover:text-white transition">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#modulos" className="hover:text-white transition">
                    Módulos
                  </a>
                </li>
                <li>
                  <a href="#contenidos" className="hover:text-white transition">
                    Contenidos
                  </a>
                </li>
                <li>
                  <a href="#facultades" className="hover:text-white transition">
                    Facultades
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Documentación
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Tutoriales
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Soporte
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contacto</h4>
              <p className="text-sm">
                Universidad de Córdoba
                <br />
                Montería, Córdoba, Colombia
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>
              &copy; 2026 Universidad de Córdoba. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
