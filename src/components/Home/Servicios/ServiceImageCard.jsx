import React from "react";
import { motion } from "framer-motion";

const ServiceImageCard = ({
  imageSrc,
  imageAlt,
  title,
  className = "relative w-full h-[350px]",
  titleClassName = "w-[90%] py-3 text-sm md:text-base font-semibold",
  hover = false,
}) => {
  const content = (
    <>
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full h-full object-cover"
      />

      <button
        className={`
          absolute bottom-4 left-1/2 -translate-x-1/2
          text-[var(--p-blanco)] italic tracking-wider
          bg-[var(--botones-rojos)]
          shadow-lg
          ${titleClassName}
        `}
        style={{
          clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)",
        }}
      >
        {title}
      </button>
    </>
  );

  if (hover) {
    return (
      <motion.div
        className={className}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        {content}
      </motion.div>
    );
  }

  return <div className={className}>{content}</div>;
};

export default ServiceImageCard;
