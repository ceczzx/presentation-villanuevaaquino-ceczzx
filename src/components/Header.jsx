/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Header() {
  const letters = "GERALDO CESAR VILLANUEVA AQUINO".split("");

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      className="text-center space-y-50"
    >
      {/* Nombre con efecto de letras individuales */}
      <div className="flex flex-wrap justify-center gap-1">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: index * 0.03,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              y: -5,
              scale: 1.2,
              textShadow: "0 0 20px rgba(147, 51, 234, 0.8)",
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </div>

      {/* Subtítulo con animación de escritura */}
      <div className="h-16">
        <TypeAnimation
          sequence={[
            "Egresado de Tecsup",
            1000,
            "Diseño y Desarrollo de Software",
            1000,
            "Desarrollador Full Stack",
            1000,
            "Especialista en React & Node.js",
            1000,
          ]}
          wrapper="p"
          speed={50}
          repeat={Infinity}
          className="text-lg md:text-xl text-gray-300 font-medium"
        />
      </div>

      {/* Efecto de línea decorativa */}
      <motion.div
        className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-blue-500 to-transparent"
        initial={{ width: 0 }}
        animate={{ width: 128 }}
        transition={{ delay: 1, duration: 1 }}
      />
    </motion.div>
  );
}