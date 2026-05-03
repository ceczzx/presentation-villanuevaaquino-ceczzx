/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState } from "react";

export default function ProfilePhoto() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Anillos concéntricos animados */}
      <motion.div
        className="absolute -inset-4 rounded-full border-2 border-blue-500/30"
        animate={{
          scale: isHovered ? [1, 1.2, 1] : 1,
          rotate: isHovered ? 360 : 0,
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div
        className="absolute -inset-8 rounded-full border border-purple-500/20"
        animate={{
          scale: isHovered ? [1, 1.3, 1] : 1,
          rotate: isHovered ? -360 : 0,
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 0.5 }}
      />

      {/* Contenedor de la foto */}
      <div className="relative">
        <motion.div
          className="w-48 h-48 mx-auto rounded-2xl overflow-hidden border-4 border-white/20 backdrop-blur-lg"
          animate={{
            y: isHovered ? [-5, 5, -5] : 0,
            boxShadow: isHovered
              ? "0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(147, 51, 234, 0.3)"
              : "0 0 20px rgba(59, 130, 246, 0.3)",
          }}
          transition={{
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            boxShadow: { duration: 0.3 },
          }}
        >
          <img 
            src="/foto elegante.jpg" 
            alt="Geraldo Villanueva"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Efecto de brillo al pasar el mouse */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </div>

      {/* Texto debajo de la foto */}
      <motion.div
        className="mt-6 text-center"
        animate={{ y: isHovered ? 5 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Desarrollador Full Stack
        </h3>
        <p className="text-sm text-gray-400 mt-1">Apasionado por la innovación</p>
      </motion.div>
    </motion.div>
  );
}