/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from "react-icons/fa";

const projects = [
  {
    name: "Monasterio Santa Teresa | Frontend",
    desc: "Aplicación moderna para la gestión de donaciones y ventas de productos del Monasterio Santa Teresa. Desarrollado con React, Tailwind y TypeScript.",
    url: "https://github.com/Santa-TeresaERP/ST-frontend",
    tech: ["React", "TypeScript", "Tailwind", "Vite"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "Monasterio Santa Teresa | Backend",
    desc: "Backend robusto y escalable con Node.js, Express y PostgreSQL. Incluye autenticación JWT, APIs RESTful y despliegue en AWS.",
    url: "https://github.com/Santa-TeresaERP/ST-backend",
    tech: ["Node.js", "Express", "PostgreSQL", "JWT", "AWS"],
    gradient: "from-purple-500 to-pink-500"
  },
];

export default function Projects() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      {/* Título */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Proyectos Destacados
        </h2>
        <p className="text-gray-400 mt-2">Explora mis últimos trabajos</p>
      </motion.div>

      {/* Lista de proyectos */}
      <div className="space-y-6">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.4 }}
            whileHover={{ 
              y: -10,
              transition: { type: "spring", stiffness: 300 }
            }}
            className={`
              block relative group overflow-hidden
              bg-gradient-to-br from-white/5 to-white/10
              backdrop-blur-lg border border-white/10
              rounded-3xl p-6 hover:border-white/30
              transition-all duration-500
            `}
          >
            {/* Efecto de fondo animado */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-r ${p.gradient} opacity-0 group-hover:opacity-10`}
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 1 }}
            />

            <div className="relative z-10">
              {/* Encabezado del proyecto */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="p-2 bg-white/10 rounded-lg"
                    >
                      <FaGithub className="text-xl" />
                    </motion.div>
                    <h3 className="text-xl font-bold">{p.name}</h3>
                  </div>
                  
                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {p.tech.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 + idx * 0.05, duration: 0.2 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Stats de GitHub */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex gap-4 mt-4 md:mt-0"
                >
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span className="text-sm">{p.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaCodeBranch className="text-blue-400" />
                    <span className="text-sm">{p.forks}</span>
                  </div>
                </motion.div>
              </div>

              {/* Descripción */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {p.desc}
              </p>

              {/* Botón de acción */}
              <motion.div
                className="flex items-center justify-between"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-white transition-colors">
                  <span>Ver en GitHub</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FaExternalLinkAlt />
                  </motion.div>
                </div>
                
                {/* Efecto de onda */}
                <motion.div
                  className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center"
                  whileHover={{ scale: 1.2 }}
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 animate-pulse" />
                </motion.div>
              </motion.div>
            </div>

            {/* Partículas flotantes para cada proyecto */}
            {[1, 2, 3].map((particle) => (
              <motion.div
                key={particle}
                className={`absolute w-${particle} h-${particle} rounded-full bg-gradient-to-r ${p.gradient}`}
                style={{
                  left: `${20 * particle}%`,
                  top: `${10 * particle}%`,
                  opacity: 0.3,
                }}
                animate={{
                  y: [0, -20, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: particle * 0.5,
                }}
              />
            ))}
          </motion.a>
        ))}
      </div>

      {/* CTA adicional */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-center pt-8"
      >
        <p className="text-gray-400">
          ¿Interesado en colaborar?{" "}
          <a
            href="https://github.com/ceczzx"
            className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
          >
            ¡Contáctame!
          </a>
        </p>
      </motion.div>
    </motion.div>
  );
}