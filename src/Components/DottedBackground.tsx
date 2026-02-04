import React, { useEffect, useRef } from 'react';
import type { Dot } from '../types/type';

const DottedBackground = ({ children }:{children:React.ReactNode}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d', { alpha: false });
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeDots();
    };

    const DOT_SIZE = 2;
    const DOT_SPACING = 30;
    const DOT_COLOR = 'rgba(255, 255, 255, 0.15)';
    const SCATTER_RADIUS = 150;
    const SCATTER_SPEED = 8;
    const RETURN_SPEED = 0.05;

    const initializeDots = () => {
      dotsRef.current = [];
      const cols = Math.ceil(canvas.width / DOT_SPACING);
      const rows = Math.ceil(canvas.height / DOT_SPACING);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dotsRef.current.push({
            x: i * DOT_SPACING,
            y: j * DOT_SPACING,
            originalX: i * DOT_SPACING,
            originalY: j * DOT_SPACING,
            offsetX: 0,
            offsetY: 0,
            velocityX: 0,
            velocityY: 0,
          });
        }
      }
    };

    const handleInteraction = (e: MouseEvent | TouchEvent) => {
        const rect = canvas.getBoundingClientRect();
        let x: number | undefined;
        let y: number | undefined;
        if (e instanceof TouchEvent) { 
            x = e.touches[0]?.clientX; y = e.touches[0]?.clientY;
        }
        else {
            x = e.clientX;
            y = e.clientY;
        }
        if (x === undefined || y === undefined) return;
        const clickX = x - rect.left;
        const clickY = y - rect.top;

        dotsRef.current.forEach(dot => {
            const dx = dot.x + dot.offsetX - clickX;
            const dy = dot.y + dot.offsetY - clickY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < SCATTER_RADIUS) {
            const angle = Math.atan2(dy, dx);
            const force = (1 - distance / SCATTER_RADIUS) * SCATTER_SPEED;

            dot.velocityX += Math.cos(angle) * force;
            dot.velocityY += Math.sin(angle) * force;
            }
        });
    };

    const animate = () => {
        if (!context) return
        context.fillStyle = '#44423C';
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = DOT_COLOR;
        dotsRef.current.forEach(dot => {
        dot.offsetX += dot.velocityX;
        dot.offsetY += dot.velocityY;
        dot.offsetX -= dot.offsetX * RETURN_SPEED;
        dot.offsetY -= dot.offsetY * RETURN_SPEED;
        dot.velocityX *= 0.92;
        dot.velocityY *= 0.92;
        context.beginPath();
        context.arc( dot.x + dot.offsetX, dot.y + dot.offsetY, DOT_SIZE, 0, Math.PI * 2 );
        context.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('click', handleInteraction);
    canvas.addEventListener('touchstart', handleInteraction);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('click', handleInteraction);
      canvas.removeEventListener('touchstart', handleInteraction);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className='w-full pointer-events-auto flex h-full flex-col relative'>
      <canvas ref={canvasRef} className='fixed top-0 left-0 w-full h-full z-0'/>
      <div className='relative pointer-events-none' style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default DottedBackground;