import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModuleContent {
  title: string;
  items: string[];
}

interface ModuleCardProps {
  icon: React.ReactNode;
  number: number;
  title: string;
  objective: string;
  contents: ModuleContent[];
  activities: string[];
  autoExpand?: boolean;
}

export default function ModuleCard({
  icon,
  number,
  title,
  objective,
  contents,
  activities,
  autoExpand = false,
}: ModuleCardProps) {
  const [isExpanded, setIsExpanded] = useState(autoExpand);

  return (
    <motion.div
      className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 overflow-hidden"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between mb-4 md:mb-6">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="text-primary text-3xl md:text-4xl bg-gradient-to-br from-blue-50 to-green-50 p-2 md:p-3 rounded-xl">
              {icon}
            </div>
            <div>
              <div className="text-xs md:text-sm font-bold text-primary mb-1">
                Módulo {number}
              </div>
              <h3 className="text-lg md:text-2xl font-bold text-gray-900">{title}</h3>
            </div>
          </div>
        </div>

        <p className="text-gray-700 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">{objective}</p>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-primary font-semibold text-sm md:text-base hover:text-primary/80 transition-colors group"
        >
          <span>{isExpanded ? "Ocultar" : "Ver"} Contenidos</span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="group-hover:translate-x-1 transition-transform"
          >
            <ChevronDown size={16} />
          </motion.div>
        </button>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="border-t border-gray-200"
          >
            <div className="p-6 md:p-8 bg-gradient-to-br from-gray-50 to-blue-50">
              <div className="space-y-4 md:space-y-6">
                {contents.map((section, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold text-gray-900 mb-3 md:mb-4 text-base md:text-lg">
                      {section.title}
                    </h4>
                    <ul className="space-y-2 md:space-y-3">
                      {section.items.map((item, itemIdx) => (
                        <li
                          key={itemIdx}
                          className="flex items-start gap-3 text-sm md:text-base text-gray-700"
                        >
                          <span className="text-primary font-bold mt-1 text-base md:text-lg">
                            •
                          </span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div>
                  <h4 className="font-bold text-gray-900 mb-3 md:mb-4 text-base md:text-lg">
                    Actividades de Aprendizaje
                  </h4>
                  <ul className="space-y-2 md:space-y-3">
                    {activities.map((activity, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm md:text-base text-gray-700"
                      >
                        <span className="text-accent font-bold mt-1 text-base md:text-lg">
                          ✓
                        </span>
                        <span className="leading-relaxed">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
