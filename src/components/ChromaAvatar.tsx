import React, { useEffect, useState } from "react";

interface ChromaAvatarProps {
  src: string;
  className?: string;
  tolerance?: number;
  feather?: number;
}

/**
 * A creative engineering component that loads an image containing a solid background,
 * runs a chroma-key canvas pixel scanning algorithm client-side, and outputs a transparent cutout.
 * Features edge feathering to ensure clean borders without pixelation.
 *
 * @param props - ChromaAvatarProps containing image source, styling, keying tolerance, and edge feather values.
 */
export const ChromaAvatar: React.FC<ChromaAvatarProps> = ({
  src,
  className = "",
  tolerance = 35,
  feather = 15
}) => {
  const [processedSrc, setProcessedSrc] = useState<string>("");

  useEffect(() => {
    const img = new Image();
    // Allow canvas reading for assets served locally
    img.crossOrigin = "anonymous";
    img.src = src;

    img.onload = () => {
      // Create canvas at the image's original dimensions
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      
      if (!ctx) {
        // Fallback to original image if 2d context is unavailable
        setProcessedSrc(src);
        return;
      }

      ctx.drawImage(img, 0, 0);
      
      try {
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;

        // Sample the background color from the top-left pixel (0, 0)
        const bgR = data[0];
        const bgG = data[1];
        const bgB = data[2];

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          // Calculate Euclidean color distance between pixel and sampled background
          const dist = Math.sqrt(
            Math.pow(r - bgR, 2) +
            Math.pow(g - bgG, 2) +
            Math.pow(b - bgB, 2)
          );

          if (dist < tolerance) {
            // Background match - fully transparent
            data[i + 3] = 0;
          } else if (dist < tolerance + feather) {
            // Feather edge - calculate smooth gradient transparency
            const ratio = (dist - tolerance) / feather;
            const currentAlpha = data[i + 3];
            data[i + 3] = Math.round(ratio * currentAlpha);
          }
          // Otherwise, pixel remains fully opaque
        }

        ctx.putImageData(imgData, 0, 0);
        setProcessedSrc(canvas.toDataURL());
      } catch (err) {
        // Fallback in case of CORS or canvas reading restrictions
        console.error("Canvas chroma-keying failed, displaying fallback image:", err);
        setProcessedSrc(src);
      }
    };

    img.onerror = () => {
      setProcessedSrc(src);
    };
  }, [src, tolerance, feather]);

  // Show a blank placeholder or standard image while canvas processes
  if (!processedSrc) {
    return (
      <div className={`${className} bg-white/5 animate-pulse`} />
    );
  }

  return (
    <img 
      src={processedSrc} 
      className={className} 
      alt="Santhosh M Avatar Cutout" 
      draggable="false"
    />
  );
};
