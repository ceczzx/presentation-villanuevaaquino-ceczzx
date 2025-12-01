/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaHeart, FaCoffee, FaRocket } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-20 pt-8 border-t border-white/10"
    >
      <div className="text-center space-y-6">
        {/* Texto principal */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="space-y-2"
        >
          <p className="text-lg font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            ¡Construyendo el futuro, una línea de código a la vez!
          </p>
          <p className="text-sm text-gray-400">
            © {currentYear} - Tarjeta Profesional Digital - Villanueva Aquino
          </p>
        </motion.div>

        {/* Iconos animados */}
        <div className="flex justify-center items-center gap-6">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-red-500"
          >
            <FaHeart />
          </motion.div>
          
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-yellow-500"
          >
            <FaCoffee />
          </motion.div>
          
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="text-cyan-500"
          >
            <FaRocket />
          </motion.div>
        </div>

        {/* Efecto de partículas en el footer */}
        <div className="h-px relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Mensaje final */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-xs text-gray-500"
        >
          Hecho con pasión y mucho café ☕
        </motion.p>
      </div>
    </motion.footer>
  );
}