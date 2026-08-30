'use client';

import { useEffect, useRef } from 'react';

/**
 * Recognizable Luxury Arrow Pointer with Firework Spark Lines & Scroll Dynamics
 *
 * Features:
 * 1. Instantly Recognizable Mouse Pointer Arrow with Glowing Spark Tip
 * 2. Scroll-Reactive Fireworks: Scrolling launches directional golden line streaks & sparks
 * 3. Particle Spark Trails: Moving leaves glowing ember trails from the arrow tip
 * 4. Click Explosion: Detonates a full 360-degree fireworks burst on click
 * 5. Interactive Hover & Tactile Press Animations
 * 6. High-Performance Hardware Accelerated Canvas (60-120 FPS)
 */
export default function CustomCursor() {
  const canvasRef = useRef(null);
  const pointerRef = useRef(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isFinePointer) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const canvas = canvasRef.current;
    const pointer = pointerRef.current;
    if (!canvas || !pointer) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    document.documentElement.classList.add('has-custom-cursor');

    // Canvas dimensions
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse tracking
    const mouse = { x: width / 2, y: height / 2 };
    let prevMouse = { x: mouse.x, y: mouse.y };
    let isVisible = false;
    let isHoveringInteractive = false;

    // Scroll tracking
    let lastScrollY = window.scrollY;

    // Particle pool
    const particles = [];
    const maxParticles = 180;

    // Luxury Firework Color Palette
    const fireColors = [
      '#fbbf24', // Bright Gold
      '#f59e0b', // Radiant Amber
      '#d97706', // Deep Gold
      '#ea580c', // Fiery Ember
      '#ffffff', // Spark White
      '#fef08a', // Light Lemon
    ];

    class SparkLine {
      constructor(x, y, vx, vy, color, size, maxLife, gravity = 0.05, isExplosion = false) {
        this.x = x;
        this.y = y;
        this.prevX = x;
        this.prevY = y;
        this.vx = vx;
        this.vy = vy;
        this.color = color;
        this.size = size;
        this.life = maxLife;
        this.maxLife = maxLife;
        this.gravity = gravity;
        this.friction = isExplosion ? 0.94 : 0.92;
        this.trailHistory = [];
        this.maxTrail = isExplosion ? 5 : 3;
      }

      update() {
        this.prevX = this.x;
        this.prevY = this.y;

        this.trailHistory.push({ x: this.x, y: this.y });
        if (this.trailHistory.length > this.maxTrail) {
          this.trailHistory.shift();
        }

        this.vx *= this.friction;
        this.vy *= this.friction;
        this.vy += this.gravity;

        this.x += this.vx;
        this.y += this.vy;

        this.life -= 1;
      }

      draw(context) {
        const progress = Math.max(0, this.life / this.maxLife);
        const alpha = Math.sin(progress * Math.PI * 0.5);

        if (this.trailHistory.length > 1) {
          context.save();
          context.beginPath();
          context.moveTo(this.trailHistory[0].x, this.trailHistory[0].y);

          for (let i = 1; i < this.trailHistory.length; i++) {
            context.lineTo(this.trailHistory[i].x, this.trailHistory[i].y);
          }
          context.lineTo(this.x, this.y);

          context.strokeStyle = this.color;
          context.globalAlpha = alpha * 0.85;
          context.lineWidth = Math.max(0.5, this.size * progress);
          context.lineCap = 'round';
          context.shadowBlur = 8;
          context.shadowColor = this.color;
          context.stroke();
          context.restore();
        }

        // Spark head dot
        context.save();
        context.beginPath();
        context.arc(this.x, this.y, Math.max(0.2, this.size * 0.6 * progress), 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.globalAlpha = alpha;
        context.shadowBlur = 10;
        context.shadowColor = this.color;
        context.fill();
        context.restore();
      }
    }

    // Spawn Fireworks Burst
    const spawnFireworkBurst = (x, y, count = 28, speedMult = 1) => {
      if (prefersReducedMotion) return;
      for (let i = 0; i < count; i++) {
        if (particles.length >= maxParticles) particles.shift();

        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
        const velocity = (Math.random() * 4.5 + 2.5) * speedMult;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        const color = fireColors[Math.floor(Math.random() * fireColors.length)];
        const size = Math.random() * 2.8 + 1.2;
        const life = Math.floor(Math.random() * 32) + 24;

        particles.push(new SparkLine(x, y, vx, vy, color, size, life, 0.08, true));
      }
    };

    // Spawn Scroll Firework Stream
    const spawnScrollFireworks = (x, y, scrollDir, intensity) => {
      if (prefersReducedMotion) return;
      const count = Math.min(8, Math.floor(intensity * 0.4) + 2);

      for (let i = 0; i < count; i++) {
        if (particles.length >= maxParticles) particles.shift();

        const angle = (scrollDir > 0 ? -Math.PI / 2 : Math.PI / 2) + (Math.random() - 0.5) * 1.2;
        const velocity = (Math.random() * 4 + 2) * Math.min(2.5, intensity * 0.15);
        const vx = Math.cos(angle) * velocity + (Math.random() - 0.5) * 2;
        const vy = Math.sin(angle) * velocity;
        const color = fireColors[Math.floor(Math.random() * fireColors.length)];
        const size = Math.random() * 2.5 + 1.2;
        const life = Math.floor(Math.random() * 28) + 18;

        particles.push(new SparkLine(x + (Math.random() - 0.5) * 15, y, vx, vy, color, size, life, 0.04));
      }
    };

    // Movement Spark Trail
    const spawnMoveTrail = (x, y, count = 1) => {
      if (prefersReducedMotion) return;
      for (let i = 0; i < count; i++) {
        if (particles.length >= maxParticles) particles.shift();

        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 1.8 + 0.5;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity - 0.4;
        const color = fireColors[Math.floor(Math.random() * fireColors.length)];
        const size = Math.random() * 2.2 + 1;
        const life = Math.floor(Math.random() * 20) + 15;

        particles.push(new SparkLine(x, y, vx, vy, color, size, life, 0.02));
      }
    };

    // =========================================================================
    // EVENT LISTENERS
    // =========================================================================
    const onMouseMove = (e) => {
      if (!isVisible) {
        isVisible = true;
        pointer.style.opacity = '1';
      }

      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Position the tip of the arrow pointer exactly at mouse coordinates
      pointer.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;

      const dx = mouse.x - prevMouse.x;
      const dy = mouse.y - prevMouse.y;
      const dist = Math.hypot(dx, dy);

      if (dist > 6) {
        const count = Math.min(3, Math.floor(dist / 10) + 1);
        spawnMoveTrail(mouse.x, mouse.y, count);
        prevMouse = { x: mouse.x, y: mouse.y };
      }

      const target = e.target;
      if (target && target instanceof Element) {
        const isInput = target.closest('input, textarea, select, [contenteditable="true"]');
        pointer.classList.toggle('is-text', !!isInput);

        const interactive = target.closest('a, button, [role="button"], .button, .btn, .product-card, .feature-card, .menu-toggle, .whatsapp-float');
        if (!!interactive !== isHoveringInteractive) {
          isHoveringInteractive = !!interactive;
          pointer.classList.toggle('is-hovered', isHoveringInteractive);
          if (isHoveringInteractive) {
            spawnFireworkBurst(mouse.x, mouse.y, 12, 0.65);
          }
        }
      }
    };

    const onMouseDown = (e) => {
      pointer.classList.add('is-clicked');
      spawnFireworkBurst(e.clientX, e.clientY, 32, 1.3);
    };

    const onMouseUp = () => {
      pointer.classList.remove('is-clicked');
    };

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      const absVelocity = Math.abs(deltaY);
      if (absVelocity > 3) {
        spawnScrollFireworks(mouse.x, mouse.y, Math.sign(deltaY), absVelocity);
      }
    };

    const onMouseLeave = () => {
      isVisible = false;
      pointer.style.opacity = '0';
    };

    const onMouseEnter = () => {
      isVisible = true;
      pointer.style.opacity = '1';
    };

    const onKeyDown = (e) => {
      if (e.key === 'Tab') {
        pointer.style.opacity = '0';
        document.documentElement.classList.remove('has-custom-cursor');
      }
    };

    const onMouseMoveAfterKey = () => {
      document.documentElement.classList.add('has-custom-cursor');
      if (isVisible) pointer.style.opacity = '1';
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('mousemove', onMouseMoveAfterKey, { passive: true });

    // =========================================================================
    // 60-120 FPS FIREWORKS CANVAS RENDER LOOP
    // =========================================================================
    let animationFrameId;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw(ctx);

        if (p.life <= 0) {
          particles.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('mousemove', onMouseMoveAfterKey);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Fullscreen Fireworks & Spark Lines Canvas */}
      <canvas
        ref={canvasRef}
        className="custom-cursor-firework-canvas"
        aria-hidden="true"
      />

      {/* Instantly Recognizable Luxury Mouse Pointer Arrow */}
      <div
        ref={pointerRef}
        className="custom-cursor-arrow-pointer"
        aria-hidden="true"
        style={{ opacity: 0 }}
      >
        <svg
          className="cursor-arrow-svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#f59e0b" floodOpacity="0.6" />
            </filter>
          </defs>

          {/* Classic Luxury Pointer Arrow Shape */}
          <path
            d="M 1 1 L 1 18.5 L 5.8 14.2 L 9.8 22.5 L 13.2 20.8 L 9.2 12.8 L 15.5 12.8 Z"
            fill="#090e1a"
            stroke="url(#goldGradient)"
            strokeWidth="1.6"
            strokeLinejoin="round"
            strokeLinecap="round"
            filter="url(#goldGlow)"
          />

          {/* Glowing Target Tip Spark */}
          <circle cx="1.5" cy="1.5" r="2.2" fill="#ffffff" />
        </svg>

        {/* Ambient Halo Pulse around Arrow Tip */}
        <span className="arrow-tip-spark" />
      </div>
    </>
  );
}
