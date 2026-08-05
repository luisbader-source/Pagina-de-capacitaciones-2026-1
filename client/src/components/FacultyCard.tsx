import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface FacultyCardProps {
  icon: React.ReactNode;
  name: string;
  focus: string;
  color: string;
  contents: string[];
  examples: string[];
  date?: string;
}

export default function FacultyCard({
  icon,
  name,
  focus,
  color,
  contents,
  examples,
  date,
}: FacultyCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all border border-gray-100 overflow-hidden group cursor-pointer"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
    >
      <div className={`h-1 ${color}`} />

      <div className="p-4 md:p-6">
        <div className="flex items-center justify-between mb-3 md:mb-4">
          <div className="text-3xl md:text-4xl">{icon}</div>
          <ChevronRight
            size={20}
            className={`text-gray-400 group-hover:text-${color} transition-colors`}
          />
        </div>

        <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 md:mb-2">{name}</h3>
        <p className={`text-xs md:text-sm font-semibold ${color} mb-3 md:mb-4`}>{focus}</p>
        {date && (
          <p className="text-xs md:text-sm font-bold text-primary mb-3 md:mb-4 bg-blue-50 px-2 md:px-3 py-1.5 md:py-2 rounded-md border border-blue-100">
            {date}
          </p>
        )}

        <div className="space-y-3 md:space-y-4">
          <div>
            <h4 className="text-[10px] md:text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1 md:mb-2">
              Contenidos Específicos
            </h4>
            <ul className="space-y-1">
              {contents.map((content, idx) => (
                <li key={idx} className="text-xs md:text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-primary mt-0.5 md:mt-1">▸</span>
                  <span>{content}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] md:text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1 md:mb-2">
              Ejemplos de Actividades
            </h4>
            <ul className="space-y-1">
              {examples.map((example, idx) => (
                <li key={idx} className="text-xs md:text-sm text-gray-600 flex items-start gap-2">
                  <span className="text-accent mt-0.5 md:mt-1">✓</span>
                  <span>{example}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
