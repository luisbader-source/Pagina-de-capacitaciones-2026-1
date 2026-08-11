import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "¿Cuál es la duración de la capacitación?",
    answer: "La capacitación comienza con una clase introductoria de 2 horas a nivel básico. Si deseas obtener la certificación completa, debes continuar el programa en el campus virtual de CINTIA, donde completarás los módulos adicionales y actividades evaluativas a tu propio ritmo."
  },
  {
    question: "¿La capacitación es sincrónica o asincrónica?",
    answer: "Es una modalidad mixta (blended learning). La sesión inicial de 2 horas es sincrónica a través de videoconferencia. El resto del programa para la certificación completa se realiza de forma asincrónica en el campus virtual, donde puedes avanzar a tu propio ritmo."
  },
  {
    question: "¿Cuáles son los requisitos previos para participar?",
    answer: "Necesitas tener acceso activo al campus virtual de CINTIA con tu cuenta institucional de la Universidad de Córdoba. También se recomienda tener conocimientos básicos de navegación web y disponer de un dispositivo con conexión a internet estable."
  },
  {
    question: "¿Cómo obtengo la certificación completa?",
    answer: "Para obtener la certificación, debes completar todos los módulos del programa en el campus virtual de CINTIA, incluyendo las actividades evaluativas y cuestionarios. La sesión inicial de 2 horas te introduce a los conceptos básicos, pero la certificación requiere completar el programa completo en línea."
  },
  {
    question: "¿Qué pasa si no puedo asistir a la sesión sincrónica inicial?",
    answer: "La sesión inicial de 2 horas se grabará y estará disponible en el campus virtual. Sin embargo, se recomienda la asistencia en vivo para participar en las actividades interactivas y resolver dudas en tiempo real con el instructor."
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
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Encuentra respuestas a las dudas más comunes sobre el programa de
            capacitación en CINTIA.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between text-left hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent transition-all duration-300 group"
              >
                <span className="font-semibold text-gray-900 text-base md:text-lg pr-6 group-hover:text-primary transition-colors">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 bg-gradient-to-br from-blue-100 to-green-100 p-2 rounded-full group-hover:from-blue-200 group-hover:to-green-200 transition-all duration-300"
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
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="border-t border-gray-200 bg-gradient-to-br from-blue-50/50 to-green-50/50"
                  >
                    <div className="px-6 py-5 md:px-8 md:py-6 text-gray-700 text-base md:text-lg leading-relaxed">
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
