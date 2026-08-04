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
}

export default function ModuleCard({
  icon,
  number,
  title,
  objective,
  contents,
  activities,
}: ModuleCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 overflow-hidden"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="text-primary text-3xl">{icon}</div>
            <div>
              <div className="text-sm font-semibold text-primary">
                Módulo {number}
              </div>
              <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            </div>
          </div>
        </div>

        <p className="text-gray-700 text-sm mb-4">{objective}</p>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary/80 transition-colors"
        >
          <span>{isExpanded ? "Ocultar" : "Ver"} Contenidos</span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
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
            transition={{ duration: 0.3 }}
            className="border-t border-gray-100"
          >
            <div className="p-6 bg-gray-50">
              <div className="space-y-6">
                {contents.map((section, idx) => (
                  <div key={idx}>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      {section.title}
                    </h4>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIdx) => (
                        <li
                          key={itemIdx}
                          className="flex items-start gap-3 text-sm text-gray-700"
                        >
                          <span className="text-primary font-bold mt-0.5">
                            •
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Actividades de Aprendizaje
                  </h4>
                  <ul className="space-y-2">
                    {activities.map((activity, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-gray-700"
                      >
                        <span className="text-accent font-bold mt-0.5">
                          ✓
                        </span>
                        <span>{activity}</span>
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
