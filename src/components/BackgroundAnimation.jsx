import React, { useRef, useEffect } from "react";
import styles from "../styles/BackgroundAnimation.module.css";

const StarBackground = () => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const animationFrameId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;

    // Initialize canvas size
    canvas.width = width;
    canvas.height = height;

    // Create stars
    const createStars = () => {
      const stars = [];
      const numStars = 100;
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.5,
          speed: Math.random() * 0.2 + 0.05,
        });
      }
      return stars;
    };

    starsRef.current = createStars();

    // Draw stars with background fill
    const draw = () => {
      // Fill background with gradient manually inside canvas
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, "#0d0d2b");
      gradient.addColorStop(1, "#1c0033");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "white";
      starsRef.current.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        star.y += star.speed;
        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
        }
      });

      animationFrameId.current = requestAnimationFrame(draw);
    };

    draw();

    // Handle resize: update canvas size AND recreate stars to fit new size
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      starsRef.current = createStars();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} />;
};

export default StarBackground;
