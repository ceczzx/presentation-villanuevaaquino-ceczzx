/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaLinkedin, FaFilePdf, FaGithub, FaArrowRight } from "react-icons/fa";

export default function SocialLinks() {
  const links = [
    { 
      label: "LinkedIn", 
      url: "https://www.linkedin.com/in/geraldo-cesar-villanueva-aquino-9893a132a/?originalSubdomain=pe",
      icon: <FaLinkedin className="text-xl" />,
      color: "from-blue-600 to-blue-800"
    },
    { 
      label: "CV PDF", 
      url: "/¿CV_Geraldo_Villanueva.pdf",
      icon: <FaFilePdf className="text-xl" />,
      color: "from-red-500 to-red-700"
    },
    { 
      label: "GitHub", 
      url: "https://github.com/ceczzx",
      icon: <FaGithub className="text-xl" />,
      color: "from-gray-700 to-gray-900"
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        delay: 0.4,
        staggerChildren: 0.1
      }}
      className="grid grid-cols-1 gap-4"
    >
      {links.map((l, i) => (
        <motion.a
          key={i}
          href={l.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 + i * 0.1 }}
          whileHover={{ 
            scale: 1.05,
            x: 10,
            transition: { type: "spring", stiffness: 400 }
          }}
          whileTap={{ scale: 0.95 }}
          className={`
            relative group bg-gradient-to-r ${l.color}
            backdrop-blur-lg p-4 rounded-2xl text-center
            border border-white/20 overflow-hidden
            shadow-lg hover:shadow-2xl transition-all duration-300
          `}
        >
          {/* Efecto de fondo animado */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
          />
          
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="p-2 bg-white/10 rounded-lg"
              >
                {l.icon}
              </motion.div>
              <span className="font-semibold text-lg">{l.label}</span>
            </div>
            
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              whileHover={{ x: 0, opacity: 1 }}
              className="text-white/80"
            >
              <FaArrowRight />
            </motion.div>
          </div>

          {/* Efecto de brillo en hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.a>
      ))}
    </motion.div>
  );
}