/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState } from "react";

const skills = [
  { name: "React", level: 90, color: "from-cyan-500 to-blue-500" },
  { name: "Node.js", level: 85, color: "from-green-500 to-emerald-500" },
  { name: "JavaScript", level: 88, color: "from-yellow-500 to-orange-500" },
  { name: "Python", level: 75, color: "from-blue-500 to-indigo-500" },
  { name: "Git", level: 80, color: "from-orange-500 to-red-500" },
  { name: "SQL", level: 82, color: "from-blue-400 to-cyan-400" },
  { name: "AWS", level: 70, color: "from-orange-400 to-yellow-500" },
  { name: "Tailwind", level: 92, color: "from-teal-400 to-cyan-500" },
  { name: "TypeScript", level: 78, color: "from-blue-600 to-indigo-600" },
  { name: "Docker", level: 72, color: "from-blue-400 to-cyan-500" },
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      {/* Título con efecto */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Habilidades
        </h2>
        <motion.div
          className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mt-2"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        />
      </motion.div>

      {/* Grid de habilidades */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              delay: i * 0.05,
              duration: 0.3,
              type: "spring",
              stiffness: 200
            }}
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.3 }
            }}
            onHoverStart={() => setHoveredSkill(i)}
            onHoverEnd={() => setHoveredSkill(null)}
            className="relative"
          >
            {/* Carta de habilidad */}
            <div className={`
              bg-white/5 backdrop-blur-lg border border-white/10
              rounded-2xl p-4 text-center cursor-pointer
              transition-all duration-300
              ${hoveredSkill === i ? 'shadow-2xl' : 'shadow-lg'}
            `}>
              {/* Nombre de la habilidad */}
              <motion.div
                animate={{ y: hoveredSkill === i ? -5 : 0 }}
                className="mb-3"
              >
                <span className="font-bold text-lg">{skill.name}</span>
              </motion.div>

              {/* Barra de progreso animada */}
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ delay: 0.3 + i * 0.03, duration: 0.5 }}
                  whileHover={{ width: "100%" }}
                />
              </div>

              {/* Porcentaje */}
              <motion.div
                className="mt-2 text-sm font-semibold"
                animate={{ 
                  scale: hoveredSkill === i ? 1.2 : 1,
                  color: hoveredSkill === i ? "#60A5FA" : "#9CA3AF"
                }}
              >
                {skill.level}%
              </motion.div>
            </div>

            {/* Efecto de brillo al hacer hover */}
            {hoveredSkill === i && (
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${skill.color} blur-xl opacity-30 -z-10`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                exit={{ opacity: 0 }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Nota adicional */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center text-gray-400 text-sm italic"
      >
        Siempre aprendiendo nuevas tecnologías 🚀
      </motion.p>
    </motion.div>
  );
}