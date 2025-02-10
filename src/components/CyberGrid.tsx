import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
}

interface MatrixSymbol {
  x: number;
  y: number;
  value: string;
  speed: number;
  opacity: number;
}

const CyberGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // High DPI support
    const dpr = window.devicePixelRatio || 1;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size with DPI consideration
    const setCanvasSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Animation properties
    let time = 0;
    const particles: Particle[] = [];
    const matrixSymbols: MatrixSymbol[] = [];
    const colors = [
      '#FF10F0',  // Neon Pink
      '#7928CA',  // Electric Purple
      '#0070F3',  // Bright Blue
      '#00DFD8',  // Cyan
    ];

    // Initialize particles
    const initParticles = () => {
      const particleCount = Math.floor(window.innerWidth * window.innerHeight / 10000);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: Math.random() * 0.5 + 0.5,
        });
      }
    };

    // Initialize matrix symbols
    const initMatrixSymbols = () => {
      const symbolCount = Math.floor(canvas.width / 20);
      for (let i = 0; i < symbolCount; i++) {
        matrixSymbols.push({
          x: i * 20,
          y: Math.random() * canvas.height,
          value: String.fromCharCode(0x30A0 + Math.random() * 96),
          speed: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
    };

    initParticles();
    initMatrixSymbols();

    // Draw connection lines between nearby particles
    const drawConnections = () => {
      const maxDistance = 150;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const alpha = (1 - distance / maxDistance) * 0.2;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    // Update and draw particles
    const updateParticles = () => {
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}${Math.floor(particle.alpha * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
      });
    };

    // Update and draw matrix symbols
    const updateMatrix = () => {
      matrixSymbols.forEach(symbol => {
        // Update position
        symbol.y += symbol.speed;
        if (symbol.y > canvas.height) {
          symbol.y = 0;
          symbol.value = String.fromCharCode(0x30A0 + Math.random() * 96);
        }

        // Draw symbol
        ctx.fillStyle = `rgba(0, 255, 170, ${symbol.opacity})`;
        ctx.font = '14px monospace';
        ctx.fillText(symbol.value, symbol.x, symbol.y);
      });
    };

    // Main animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      time += 0.01;

      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create a subtle glow effect
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width / 2
      );
      gradient.addColorStop(0, 'rgba(121, 40, 202, 0.03)');  // Purple
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw all elements
      updateMatrix();
      drawConnections();
      updateParticles();

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};

export default CyberGrid;