import React, { useMemo } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export interface ShatterImageProps extends HTMLMotionProps<"div"> {
  src: string;
  alt?: string;
  gridRows?: number;
  gridCols?: number;
  duration?: number;
  delay?: number;
  scatterOffset?: number;
}

export const ShatterImage: React.FC<ShatterImageProps> = ({
  src,
  alt = "",
  className = "",
  gridRows = 6,
  gridCols = 6,
  duration = 1.4,
  delay = 0,
  scatterOffset = 300,
  ...rest
}) => {
  const pieces = useMemo(() => {
    const list = [];
    for (let r = 0; r < gridRows; r++) {
      for (let c = 0; c < gridCols; c++) {
        // Expand by 0.5% to create tiny overlap and eliminate anti-aliasing 1px seams
        const left = (c / gridCols) * 100 - 0.3;
        const top = (r / gridRows) * 100 - 0.3;
        const right = ((c + 1) / gridCols) * 100 + 0.3;
        const bottom = ((r + 1) / gridRows) * 100 + 0.3;
        
        list.push({
          id: `${r}-${c}`,
          clipPath: `polygon(${left}% ${top}%, ${right}% ${top}%, ${right}% ${bottom}%, ${left}% ${bottom}%)`,
          // Scatter attributes
          initX: (Math.random() - 0.5) * scatterOffset,
          initY: (Math.random() - 0.5) * scatterOffset,
          initRot: (Math.random() - 0.5) * 180,
          delayOffset: Math.random() * 0.5,
        });
      }
    }
    return list;
  }, [gridRows, gridCols, scatterOffset]);

  return (
    <motion.div 
      className={className.includes("absolute") ? className : `relative ${className}`}
      initial="hidden"
      animate="visible"
      {...rest}
    >
      {/* Invisible placeholder to establish the container's responsive dimensions based on the original image */}
      <img src={src} alt={alt} className="w-full h-auto opacity-0 pointer-events-none" />

      {/* Scattered pieces overlay */}
      <div className="absolute inset-0 z-10 w-full h-full">
        {pieces.map((piece) => (
          <motion.img
            key={piece.id}
            src={src}
            alt=""
            initial="hidden"
            animate="visible"
            className="absolute top-0 left-0 w-full h-full object-contain pointer-events-none"
            style={{
              clipPath: piece.clipPath,
              WebkitClipPath: piece.clipPath,
              transformOrigin: "center center",
            }}
            variants={{
              hidden: {
                opacity: 0,
                x: piece.initX,
                y: piece.initY,
                rotate: piece.initRot,
                scale: 0.1,
              },
              visible: {
                opacity: 1,
                x: 0,
                y: 0,
                rotate: 0,
                scale: 1,
                transition: {
                  duration: duration || 1.4,
                  ease: [0.16, 1, 0.3, 1], // Expo-out curve
                  delay: (delay || 0) + (piece.delayOffset || 0),
                }
              }
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ShatterImage;
