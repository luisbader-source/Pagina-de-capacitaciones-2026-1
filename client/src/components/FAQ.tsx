import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "¿Cuál es la duración total del programa de capacitación?",
    answer: "El programa completo tiene una duración de 4 semanas, con sesiones semanales de 2-3 horas. Cada módulo incluye tiempo para práctica individual y actividades de aplicación en el campus virtual."
  },
  {
    question: "¿La capacitación es sincrónica o asincrónica?",
    answer: "Es una modalidad mixta (blended learning). Las sesiones principales son sincrónicas a través de videoconferencias, complementadas con actividades asincrónicas que puedes realizar a tu propio ritmo en el campus virtual de CINTIA."
  },
  {
    question: "¿Cuáles son los requisitos previos para participar?",
    answer: "Necesitas tener acceso activo al campus virtual de CINTIA con tu cuenta institucional de la Universidad de Córdoba. También se recomienda tener conocimientos básicos de navegación web y disponer de un dispositivo con conexión a internet estable."
  },
  {
    question: "¿Se otorga certificación al completar el programa?",
    answer: "Sí, al completar satisfactoriamente todos los módulos y las actividades evaluativas, recibirás un certificado digital de la Universidad de Córdoba que acredita tu capacitación en el uso pedagógico de CINTIA."
  },
  {
    question: "¿Qué pasa si no puedo asistir a una sesión sincrónica?",
    answer: "Las sesiones sincrónicas se graban y estarán disponibles en el campus virtual. Sin embargo, se recomienda la asistencia en vivo para participar en las actividades interactivas y resolver dudas en tiempo real."
  },
  {
    question: "¿Necesito instalar algún software adicional?",
    answer: "No necesitas instalar software adicional. Todo el trabajo se realiza a través del navegador web en el campus virtual de CINTIA. Solo asegúrate de tener un navegador actualizado (Chrome, Firefox, Edge o Safari)."
  },
  {
    question: "¿Hay soporte técnico durante la capacitación?",
    answer: "Sí, contamos con soporte técnico disponible a través del campus virtual y canales de comunicación institucionales. También tendrás acceso a foros de ayuda donde podrás resolver dudas con otros docentes participantes."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Encuentra respuestas a las dudas más comunes sobre el programa de
            capacitación en CINTIA.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 md:px-8 md:py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-sm md:text-base pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={20} className="text-primary" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="border-t border-gray-200"
                  >
                    <div className="px-6 py-4 md:px-8 md:py-5 text-gray-700 text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
