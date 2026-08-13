import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

interface Testimonial {
  name: string;
  comment: string;
}

const testimonials: Testimonial[] = [
  { name: "Juan Sebastian Vega Trespalacio", comment: "Buena clase" },
  { name: "Andrea Carolina Martínez Hoyos", comment: "Buena capacitación" },
  { name: "Juan Guillermo Gomez Rocha", comment: "Muy útil la inducción" },
  { name: "María Angélica Valdez Hernández", comment: "Me pareció muy útil la capacitación" },
  { name: "Valeria Milagro Martinez Montes", comment: "Muy buena la auditoría aprendí nuevas cosas que me van a servir en mi proceso de formación" },
  { name: "Oscar David Causil Doria", comment: "Una capacitación muy completa, explica a profundidad el uso de la plataforma Cintia" },
  { name: "Jaiceth Otero Navarro", comment: "Excelente clase" },
  { name: "Adriana Lucía Espitia Tapia", comment: "Excelente capacitación" },
  { name: "Yaznilis Santos Alvarez", comment: "Muchas gracias por la capacitación y orientación acerca de la plataforma." },
  { name: "Luis Mario", comment: "Me pareció muy buena la clase" },
  { name: "Marlin Lucia Cavadias Sepúlveda", comment: "Muy buena clase" },
  { name: "Charis Daniela Castro Julio", comment: "Buena información, clara y consisa" },
  { name: "Isabella Sofía Flórez Solano", comment: "Muchas gracias por su capacitación" },
  { name: "Nataly Conde Estrada", comment: "Muy completa la inducción" },
  { name: "Dylan Andrés Quevedo Naranjo", comment: "Gracias!" },
  { name: "Joice Mariana Oviedo López", comment: "Muy buena clase gracias" },
  { name: "Nelymar Espitia Berrocal", comment: "Excelente inducción" },
  { name: "Maria Camila Escudero Nuñez", comment: "Las explicaciones me parecieron buenas, dentro de todo, la capacitación se sintió cómoda." },
  { name: "Saidith Paola Aguilar Díaz", comment: "Muy educativa y didáctica" },
  { name: "Myrleth Martínez Mejía", comment: "Gracias por la clase" },
  { name: "Camila Andrea Pérez Benavides", comment: "Buena clases" },
  { name: "Andres Felipe Martinez Naranjo", comment: "Buena clase, informativa" },
  { name: "Luis Gabriel Doria Morales", comment: "Super buena la capacitación" },
  { name: "Salomé López Ballesteros", comment: "Buena clase todo muy bien explicado" },
  { name: "Shtepanni Sofia Jaramillo Bedoya", comment: "10 de 10" },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lo que Dicen Nuestros Docentes
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experiencias reales de profesores que han transformado su enseñanza con CINTIA.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 relative"
          >
            <Quote className="text-primary/20 absolute top-6 left-6 md:top-8 md:left-8" size={64} />
            
            <div className="relative z-10">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8 font-medium">
                "{testimonials[currentIndex].comment}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-base md:text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm md:text-base text-gray-600">
                    Universidad de Córdoba
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="p-3 md:p-4 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-700"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-6 md:w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="p-3 md:p-4 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-700"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </motion.button>
          </div>

          <div className="text-center mt-6 text-gray-500 text-sm md:text-base">
            {currentIndex + 1} de {testimonials.length} testimonios
          </div>
        </div>
      </div>
    </section>
  );
}
