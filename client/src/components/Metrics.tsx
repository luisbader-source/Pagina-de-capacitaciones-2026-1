import { motion } from "framer-motion";
import { Users, GraduationCap, Award, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

interface Metric {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
}

const metrics: Metric[] = [
  {
    icon: <Users size={32} />,
    value: 1000,
    label: "Profesores Impactados",
    suffix: "+",
  },
  {
    icon: <GraduationCap size={32} />,
    value: 17000,
    label: "Estudiantes Impactados",
    suffix: "+",
  },
  {
    icon: <Award size={32} />,
    value: 98,
    label: "Satisfacción Docente",
    suffix: "%",
  },
  {
    icon: <TrendingUp size={32} />,
    value: 85,
    label: "Mejora en Competencias Digitales",
    suffix: "%",
  },
];

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const incrementTime = duration / (value > 1000 ? 100 : end);
    const increment = value > 1000 ? Math.ceil(value / 100) : 1;
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="font-bold text-gray-900">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Metrics() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-accent">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestros Logros
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Más de 1,000 profesores y 17,000 estudiantes ya han sido impactados
            por CINTIA. Únete a la comunidad de docentes innovadores de la Universidad de Córdoba.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex justify-center mb-4 text-white">
                {metric.icon}
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              </div>
              <div className="text-sm md:text-base text-white/90 font-medium">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
