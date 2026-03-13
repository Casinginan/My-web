import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { Button } from "../ui/button";
import { File } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { config } from "@/data/config";

// ── Medium Neuralink Ring ─────────────────────────────────────────────────────
const NeuralinkRing = ({ size }) => {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = size + 80;
    const H = size + 80;
    canvas.width = W;
    canvas.height = H;
    const cx = W / 2;
    const cy = H / 2;
    const ringR = size / 2 + 24;

    let angle = 0;
    const pulses = [];
    const nodes = Array.from({ length: 8 }, (_, i) => ({
      angle: (i / 8) * Math.PI * 2,
      size: i % 3 === 0 ? 3.5 : 2.2,
      glow: Math.random() * Math.PI * 2,
      glowSpeed: 0.025 + Math.random() * 0.015,
    }));

    const spawnPulse = () => {
      pulses.push({
        angle: Math.random() * Math.PI * 2,
        speed: 0.01 + Math.random() * 0.007,
        alpha: 0.65,
        size: 2.2 + Math.random() * 1.8,
        trail: [],
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Soft outer ambient glow
      const outerGlow = ctx.createRadialGradient(cx, cy, ringR - 12, cx, cy, ringR + 12);
      outerGlow.addColorStop(0, "rgba(139,92,246,0.0)");
      outerGlow.addColorStop(0.4, `rgba(139,92,246,${0.09 + 0.04 * Math.sin(angle * 2)})`);
      outerGlow.addColorStop(0.7, `rgba(96,165,250,${0.07 + 0.03 * Math.cos(angle)})`);
      outerGlow.addColorStop(1, "rgba(96,165,250,0.0)");
      ctx.beginPath();
      ctx.arc(cx, cy, ringR, 0, Math.PI * 2);
      ctx.strokeStyle = outerGlow;
      ctx.lineWidth = 14;
      ctx.stroke();

      // Main ring
      ctx.beginPath();
      ctx.arc(cx, cy, ringR, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(139,92,246,${0.22 + 0.07 * Math.sin(angle * 2)})`;
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // Dashed inner ring
      ctx.setLineDash([5, 10]);
      ctx.beginPath();
      ctx.arc(cx, cy, ringR - 7, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(96,165,250,${0.1 + 0.04 * Math.sin(angle)})`;
      ctx.lineWidth = 0.7;
      ctx.stroke();
      ctx.setLineDash([]);

      // Nodes
      nodes.forEach((node) => {
        node.glow += node.glowSpeed;
        const nx = cx + Math.cos(node.angle) * ringR;
        const ny = cy + Math.sin(node.angle) * ringR;
        const glowA = 0.3 + 0.35 * Math.sin(node.glow);

        // Soft halo
        const ng = ctx.createRadialGradient(nx, ny, 0, nx, ny, node.size * 2.5);
        ng.addColorStop(0, `rgba(220,200,255,${glowA * 0.7})`);
        ng.addColorStop(0.5, `rgba(139,92,246,${glowA * 0.3})`);
        ng.addColorStop(1, "rgba(139,92,246,0)");
        ctx.beginPath();
        ctx.arc(nx, ny, node.size * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = ng;
        ctx.fill();

        // Dot
        ctx.beginPath();
        ctx.arc(nx, ny, node.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${glowA * 0.9})`;
        ctx.fill();
      });

      // Travelling pulse
      if (Math.random() < 0.018) spawnPulse();
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.angle += p.speed;
        p.alpha -= 0.004;
        if (p.alpha <= 0) { pulses.splice(i, 1); continue; }

        p.trail.push({ angle: p.angle, alpha: p.alpha });
        if (p.trail.length > 10) p.trail.shift();

        p.trail.forEach((tp, ti) => {
          const tf = (ti / p.trail.length) * tp.alpha * 0.22;
          const tx = cx + Math.cos(tp.angle) * ringR;
          const ty = cy + Math.sin(tp.angle) * ringR;
          ctx.beginPath();
          ctx.arc(tx, ty, p.size * 0.7, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(139,92,246,${tf})`;
          ctx.fill();
        });

        const px = cx + Math.cos(p.angle) * ringR;
        const py = cy + Math.sin(p.angle) * ringR;
        const pg = ctx.createRadialGradient(px, py, 0, px, py, p.size * 1.8);
        pg.addColorStop(0, `rgba(255,255,255,${p.alpha * 0.65})`);
        pg.addColorStop(0.4, `rgba(96,165,250,${p.alpha * 0.45})`);
        pg.addColorStop(1, "rgba(96,165,250,0)");
        ctx.beginPath();
        ctx.arc(px, py, p.size * 1.8, 0, Math.PI * 2);
        ctx.fillStyle = pg;
        ctx.fill();
      }

      angle += 0.009;
      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, [size]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 3,
      }}
    />
  );
};

// ── Galaxy Circle ─────────────────────────────────────────────────────────────
const GalaxyCircle = ({ size, visible }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let angle = 0;
    canvas.width = size;
    canvas.height = size;
    const cx = size / 2, cy = size / 2, r = size / 2 - 4;

    const stars = Array.from({ length: 180 }, () => {
      const a = Math.random() * Math.PI * 2;
      const d = Math.random() * r * 0.92;
      return {
        x: cx + Math.cos(a) * d,
        y: cy + Math.sin(a) * d,
        radius: Math.random() * 1.4 + 0.2,
        alpha: Math.random() * 0.85 + 0.1,
        twinkle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.022 + 0.005,
        color: ["255,255,255","190,160,255","120,190,255","255,210,120"][
          Math.floor(Math.random() * 4)
        ],
      };
    });

    const draw = () => {
      ctx.clearRect(0, 0, size, size);
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.clip();

      const bg = ctx.createRadialGradient(cx, cy * 0.6, 0, cx, cy, r);
      bg.addColorStop(0, "#0e0622");
      bg.addColorStop(0.5, "#070419");
      bg.addColorStop(1, "#020109");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, size, size);

      [
        { r:80, g:30, b:180, a:0.2 },
        { r:30, g:80, b:200, a:0.15 },
        { r:140, g:40, b:200, a:0.13 },
      ].forEach((nc, i) => {
        const nx = cx + Math.cos(angle * 0.3 + i * 1.5) * r * 0.28;
        const ny = cy + Math.sin(angle * 0.2 + i * 1.2) * r * 0.22;
        const g = ctx.createRadialGradient(nx, ny, 0, nx, ny, r * 0.6);
        g.addColorStop(0, `rgba(${nc.r},${nc.g},${nc.b},${nc.a})`);
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, size, size);
      });

      stars.forEach((s) => {
        s.twinkle += s.speed;
        const a = s.alpha * (0.5 + 0.5 * Math.sin(s.twinkle));
        const g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.radius * 2.5);
        g.addColorStop(0, `rgba(${s.color},${a})`);
        g.addColorStop(1, `rgba(${s.color},0)`);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      });

      for (let arm = 0; arm < 3; arm++) {
        for (let i = 0; i < 60; i++) {
          const t = i / 60;
          const sa = angle * 0.08 + arm * ((Math.PI * 2) / 3) + t * Math.PI * 2.5;
          const sr = t * r * 0.8;
          ctx.beginPath();
          ctx.arc(
            cx + Math.cos(sa) * sr,
            cy + Math.sin(sa) * sr * 0.65,
            1.4, 0, Math.PI * 2
          );
          ctx.fillStyle = `rgba(160,130,255,${(1 - t) * 0.08})`;
          ctx.fill();
        }
      }
      ctx.restore();

      const rg = ctx.createRadialGradient(cx, cy, r - 8, cx, cy, r + 8);
      rg.addColorStop(0, "rgba(139,92,246,0)");
      rg.addColorStop(0.4, `rgba(139,92,246,${0.5 + 0.28 * Math.sin(angle * 2)})`);
      rg.addColorStop(0.7, `rgba(96,165,250,${0.35 + 0.18 * Math.cos(angle * 1.5)})`);
      rg.addColorStop(1, "rgba(96,165,250,0)");
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.strokeStyle = rg;
      ctx.lineWidth = 10;
      ctx.stroke();

      const da = angle * 1.2;
      const dg = ctx.createRadialGradient(
        cx + Math.cos(da) * r, cy + Math.sin(da) * r, 0,
        cx + Math.cos(da) * r, cy + Math.sin(da) * r, 10
      );
      dg.addColorStop(0, "rgba(255,255,255,0.9)");
      dg.addColorStop(0.3, "rgba(190,150,255,0.6)");
      dg.addColorStop(1, "rgba(96,165,250,0)");
      ctx.beginPath();
      ctx.arc(cx + Math.cos(da) * r, cy + Math.sin(da) * r, 10, 0, Math.PI * 2);
      ctx.fillStyle = dg;
      ctx.fill();

      angle += 0.007;
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animId);
  }, [size]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "50%",
        zIndex: 0,
        pointerEvents: "none",
        opacity: visible ? 1 : 0,
        transition: visible ? "opacity 1s ease" : "none",
      }}
    />
  );
};

// ── Hover Info Card ───────────────────────────────────────────────────────────
const HoverInfoCard = ({ visible }) => (
  <div
    style={{
      position: "absolute",
      top: "50%",
      right: "calc(100% + 18px)",
      transform: visible
        ? "translateY(-50%) scale(1)"
        : "translateY(-50%) scale(0.92)",
      opacity: visible ? 1 : 0,
      transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
      pointerEvents: "none",
      zIndex: 10,
      width: "210px",
    }}
  >
    <div style={{
      background: "rgba(8,6,24,0.82)",
      border: "1px solid rgba(139,92,246,0.3)",
      borderRadius: "14px",
      padding: "14px 16px",
      backdropFilter: "blur(16px)",
      boxShadow:
        "0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(96,165,250,0.08), inset 0 1px 0 rgba(255,255,255,0.06)",
    }}>
      <div style={{ marginBottom: "12px" }}>
        <p style={{
          fontSize: "9px",
          color: "rgba(139,92,246,0.8)",
          letterSpacing: "0.1em",
          marginBottom: "6px",
          fontFamily: "monospace",
        }}>
          WORK.EXP
        </p>
        <div style={{
          background: "rgba(139,92,246,0.08)",
          border: "1px solid rgba(139,92,246,0.15)",
          borderRadius: "8px",
          padding: "8px 10px",
        }}>
          <p style={{
            fontSize: "11px",
            color: "rgba(220,215,255,0.95)",
            fontWeight: 600,
            marginBottom: "2px",
          }}>
            Tech Analyst
          </p>
          <p style={{ fontSize: "10px", color: "rgba(150,140,200,0.8)" }}>
            Solar Energy Solutions
          </p>
        </div>
      </div>

      <div style={{
        height: "1px",
        background: "linear-gradient(to right, rgba(96,165,250,0.3), transparent)",
        marginBottom: "12px",
      }} />

      <div>
        <p style={{
          fontSize: "9px",
          color: "rgba(96,165,250,0.8)",
          letterSpacing: "0.1em",
          marginBottom: "6px",
          fontFamily: "monospace",
        }}>
          HOBBIES
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          {[
            { icon: "♪", label: "Musical instruments" },
            { icon: "◈", label: "Exploring AI & 3D tech" },
            { icon: "⬡", label: "Creating 3D" },
            { icon: "⌘", label: "Linux & cyber stuff" },
          ].map((h, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "7px" }}>
              <span style={{ fontSize: "11px", color: "rgba(96,165,250,0.7)" }}>
                {h.icon}
              </span>
              <span style={{ fontSize: "10px", color: "rgba(180,175,220,0.85)" }}>
                {h.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "12px", display: "flex", alignItems: "center", gap: "6px" }}>
        <div style={{
          flex: 1,
          height: "1px",
          background: "linear-gradient(to right, transparent, rgba(139,92,246,0.4))",
        }} />
        <div style={{
          width: "4px",
          height: "4px",
          borderRadius: "50%",
          background: "rgba(139,92,246,0.9)",
          boxShadow: "0 0 5px rgba(139,92,246,0.8)",
          animation: "neuralPulse 2s ease-in-out infinite",
        }} />
      </div>
    </div>

    <div style={{
      position: "absolute",
      top: "50%",
      right: "-6px",
      transform: "translateY(-50%)",
      width: 0,
      height: 0,
      borderTop: "6px solid transparent",
      borderBottom: "6px solid transparent",
      borderLeft: "6px solid rgba(139,92,246,0.3)",
    }} />
  </div>
);

// ── Neuralink Chip ────────────────────────────────────────────────────────────
const NeuralinkChip = ({ visible }) => {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = 240;
    canvas.height = 170;
    const pulses = [];
    let t = 0;

    const lines = [
      [60,85,8,45],[60,85,8,85],[60,85,8,125],
      [180,85,232,45],[180,85,232,85],[180,85,232,125],
      [120,58,120,8],[120,112,120,162],
    ];

    const spawnPulse = () => {
      const l = lines[Math.floor(Math.random() * lines.length)];
      pulses.push({
        x1: l[0], y1: l[1], x2: l[2], y2: l[3],
        progress: 0,
        speed: 0.022 + Math.random() * 0.018,
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, 240, 170);

      lines.forEach(([x1,y1,x2,y2]) => {
        ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2);
        ctx.strokeStyle = "rgba(96,165,250,0.3)";
        ctx.lineWidth = 1.5; ctx.stroke();
        const eg = ctx.createRadialGradient(x2,y2,0,x2,y2,6);
        eg.addColorStop(0, `rgba(139,92,246,${0.6+0.3*Math.sin(t+x2)})`);
        eg.addColorStop(1, "rgba(139,92,246,0)");
        ctx.beginPath(); ctx.arc(x2,y2,6,0,Math.PI*2);
        ctx.fillStyle = eg; ctx.fill();
        ctx.beginPath(); ctx.arc(x2,y2,2.5,0,Math.PI*2);
        ctx.fillStyle = "rgba(200,180,255,0.9)"; ctx.fill();
      });

      const cg = ctx.createLinearGradient(55,52,185,118);
      cg.addColorStop(0, "#1c1838");
      cg.addColorStop(0.5, "#28224e");
      cg.addColorStop(1, "#181530");
      ctx.beginPath(); ctx.roundRect(55,52,130,66,12);
      ctx.fillStyle = cg; ctx.fill();
      ctx.strokeStyle = `rgba(139,92,246,${0.55+0.35*Math.sin(t*2)})`;
      ctx.lineWidth = 2; ctx.stroke();

      const shine = ctx.createLinearGradient(55,52,185,90);
      shine.addColorStop(0, "rgba(255,255,255,0.07)");
      shine.addColorStop(1, "rgba(255,255,255,0)");
      ctx.beginPath(); ctx.roundRect(55,52,130,66,12);
      ctx.fillStyle = shine; ctx.fill();

      for (let gx = 0; gx < 5; gx++) {
        for (let gy = 0; gy < 3; gy++) {
          ctx.beginPath(); ctx.roundRect(63+gx*22, 60+gy*18, 17, 13, 3);
          ctx.fillStyle = `rgba(96,165,250,${0.07+0.05*Math.sin(t*2.5+gx+gy)})`;
          ctx.fill();
          ctx.strokeStyle = `rgba(96,165,250,${0.18+0.1*Math.sin(t*1.8+gx)})`;
          ctx.lineWidth = 0.5; ctx.stroke();
        }
      }

      const centg = ctx.createRadialGradient(120,85,0,120,85,35);
      centg.addColorStop(0, `rgba(160,100,255,${0.35+0.2*Math.sin(t*2.5)})`);
      centg.addColorStop(1, "rgba(139,92,246,0)");
      ctx.beginPath(); ctx.arc(120,85,35,0,Math.PI*2);
      ctx.fillStyle = centg; ctx.fill();

      ctx.font = `bold ${14+2*Math.sin(t)}px monospace`;
      ctx.fillStyle = `rgba(220,200,255,${0.75+0.25*Math.sin(t*1.5)})`;
      ctx.textAlign = "center"; ctx.fillText("Ν", 120, 90);

      if (Math.random() < 0.07) spawnPulse();
      for (let i = pulses.length-1; i >= 0; i--) {
        pulses[i].progress += pulses[i].speed;
        if (pulses[i].progress >= 1) { pulses.splice(i,1); continue; }
        const p = pulses[i];
        const px = p.x1+(p.x2-p.x1)*p.progress;
        const py = p.y1+(p.y2-p.y1)*p.progress;
        const fade = 1-p.progress;
        const pg = ctx.createRadialGradient(px,py,0,px,py,7);
        pg.addColorStop(0, `rgba(255,255,255,${fade})`);
        pg.addColorStop(0.4, `rgba(96,165,250,${fade*0.85})`);
        pg.addColorStop(1, "rgba(96,165,250,0)");
        ctx.beginPath(); ctx.arc(px,py,7,0,Math.PI*2);
        ctx.fillStyle = pg; ctx.fill();
      }

      t += 0.035;
      animRef.current = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <div style={{
      display: visible ? "block" : "none",
      opacity: visible ? 1 : 0,
      transform: visible
        ? "translateY(0px) scale(1)"
        : "translateY(40px) scale(0.8)",
      transition: visible
        ? "opacity 0.9s ease, transform 0.9s cubic-bezier(0.22,1,0.36,1)"
        : "none",
      pointerEvents: "none",
      marginTop: "6px",
      filter:
        "drop-shadow(0 0 20px rgba(139,92,246,0.8)) drop-shadow(0 0 50px rgba(96,165,250,0.4))",
    }}>
      <canvas ref={canvasRef} width={240} height={170} />
    </div>
  );
};

// ── Main HeroSection ──────────────────────────────────────────────────────────
const HeroSection = () => {
  const { isLoading } = usePreloader();
  const [mounted, setMounted] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [photoSize, setPhotoSize] = useState(260);
  const cardRef = useRef(null);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const measure = () => {
      if (cardRef.current) setPhotoSize(cardRef.current.offsetWidth);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [mounted]);

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    setTilt({ x: dy * -20, y: dx * 20 });
    setGlowPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  useEffect(() => {
    const onScroll = () =>
      setScrolled(window.scrollY > window.innerHeight * 0.25);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!mounted) {
    return (
      <section id="hero" className={cn("relative w-full h-screen")}>
        <div className="grid md:grid-cols-2">
          <div className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1 flex flex-col justify-start md:justify-center items-center md:items-start",
            "pt-28 sm:pt-0 sm:pb-32 md:p-24 lg:p-40 xl:p-48"
          )}>
            <div className="opacity-0">Loading...</div>
          </div>
          <div className="grid col-span-1" />
        </div>
        <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
          <ScrollDownIcon />
        </div>
      </section>
    );
  }

  return (
    <section id="hero" className={cn("relative w-full h-screen overflow-hidden")}>
      <style>{`
        @keyframes floatY {
          0%,100% { transform: translateY(0px) rotateZ(0.2deg); }
          50%      { transform: translateY(-14px) rotateZ(-0.2deg); }
        }
        @keyframes ambientGlow {
          0%,100% {
            box-shadow:
              0 0 0 2px rgba(139,92,246,0.25),
              0 0 40px 8px rgba(96,165,250,0.18),
              0 0 80px 16px rgba(139,92,246,0.1),
              0 30px 70px rgba(0,0,0,0.75);
          }
          50% {
            box-shadow:
              0 0 0 2px rgba(96,165,250,0.3),
              0 0 60px 14px rgba(139,92,246,0.28),
              0 0 120px 28px rgba(96,165,250,0.14),
              0 30px 70px rgba(0,0,0,0.75);
          }
        }
        @keyframes rimPulse {
          0%,100% { opacity:0.35; }
          50%      { opacity:0.95; }
        }
        @keyframes neuralPulse {
          0%,100% { opacity:0.4; transform: scale(1); }
          50%      { opacity:1; transform: scale(1.4); }
        }
        .photo-float {
          animation: floatY 5.5s ease-in-out infinite;
          transform-style: preserve-3d;
        }
        .photo-card {
          transform-style: preserve-3d;
          transition: transform 0.08s linear;
          border-radius: 50%;
          animation: ambientGlow 5s ease-in-out infinite;
          position: relative;
          overflow: hidden;
        }
        .photo-card img {
          display: block;
          border-radius: 50%;
          filter: contrast(1.1) brightness(1.07) saturate(1.2);
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center top;
          position: relative; z-index: 1;
        }
        .photo-gloss {
          position:absolute; inset:0; z-index:2; border-radius:50%; pointer-events:none;
          background: linear-gradient(130deg,
            rgba(255,255,255,0.22) 0%,
            rgba(255,255,255,0.06) 30%,
            transparent 52%);
        }
        .photo-specular {
          position:absolute; inset:0; z-index:3; border-radius:50%; pointer-events:none;
        }
        .rim-l {
          position:absolute; top:6%; left:-2px; width:3px; height:88%;
          border-radius:4px; z-index:4; pointer-events:none;
          background: linear-gradient(to bottom, transparent, rgba(96,165,250,0.8), rgba(139,92,246,0.6), transparent);
          animation: rimPulse 5s ease-in-out infinite;
        }
        .rim-r {
          position:absolute; top:6%; right:-2px; width:3px; height:88%;
          border-radius:4px; z-index:4; pointer-events:none;
          background: linear-gradient(to bottom, transparent, rgba(139,92,246,0.7), rgba(96,165,250,0.5), transparent);
          animation: rimPulse 5s ease-in-out infinite 2.5s;
        }
      `}</style>

      <div className="grid md:grid-cols-2 h-full items-center">

        {/* LEFT COLUMN */}
        <div className={cn(
          "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
          "col-span-1 flex flex-col justify-center items-center md:items-start",
          "pt-28 sm:pt-0 sm:pb-32 md:p-24 lg:p-40 xl:p-48"
        )}>
          {!isLoading && (
            <>
              <div>
                <BlurIn delay={0.7}>
                  <p className={cn(
                    "md:self-start mt-4 font-thin text-md text-slate-500 dark:text-zinc-400 ml-3",
                    "cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap"
                  )}>
                    Hi, I am
                  </p>
                </BlurIn>
                <BlurIn delay={1}>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <div className={cn(
                        "font-thin text-6xl text-transparent text-slate-800 ml-1 text-left",
                        "cursor-default text-edge-outline font-display sm:text-7xl md:text-9xl"
                      )}>
                        Je-r
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="dark:bg-white dark:text-black">
                      Cool eh? I know, Hope you like it! 😄
                    </TooltipContent>
                  </Tooltip>
                </BlurIn>
                <BlurIn delay={1.2}>
                  <p className={cn(
                    "md:self-start md:mt-4 font-thin text-md text-slate-500 dark:text-zinc-400 ml-3",
                    "cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap"
                  )}>
                    3D Enthusiast | Aspiring AI Engineer
                  </p>
                </BlurIn>
              </div>
              <div className="mt-8 md:ml-2 flex flex-col gap-3">
                <Link
                  href="https://drive.google.com/file/d/1MBfKhSBuYzKLOaXFwJHjPsp6XzACEKg7/view?usp=drive_link"
                  target="_blank" className="flex-1"
                >
                  <BoxReveal delay={2} width="100%">
                    <Button className="flex items-center gap-2 w-full">
                      <File size={24} /><p>Resume</p>
                    </Button>
                  </BoxReveal>
                </Link>
                <div className="md:self-start flex gap-3">
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link href="#contact">
                        <Button variant="outline" className="block w-full overflow-hidden">
                          Hire Me
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom"><p>pls pls🥹</p></TooltipContent>
                  </Tooltip>
                  <Link href={config.social.github} target="_blank">
                    <Button variant="outline"><SiGithub size={24} /></Button>
                  </Link>
                  <Link href={config.social.linkedin} target="_blank">
                    <Button variant="outline"><SiLinkedin size={24} /></Button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>

        {/* RIGHT COLUMN */}
        <div className="hidden md:flex col-span-1 items-center justify-center relative z-[2] overflow-visible">
          <div
            className="relative flex flex-col items-center justify-center"
            style={{ maxHeight: "calc(100vh - 8rem)" }}
          >
            {/* Photo + ring wrapper */}
            <div style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "clamp(260px, 26vw, 360px)",
              height: "clamp(260px, 26vw, 360px)",
            }}>
              {/* Hover info card */}
              <HoverInfoCard visible={isHovered} />

              {/* Galaxy — scroll reveals */}
              <GalaxyCircle size={photoSize + 60} visible={scrolled} />

              {/* Neuralink ring — medium, always visible */}
              <NeuralinkRing size={photoSize} />

              {/* 🚀 Astronaut — anchored top-right, behind photo */}

              {/* 3D Photo */}
              <div style={{ perspective: "1200px", position: "relative", zIndex: 2 }}>
                <div className="photo-float">
                  <div
                    ref={cardRef}
                    className="photo-card"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => {
                      setTilt({ x:0, y:0 });
                      setGlowPos({ x:50, y:50 });
                      setIsHovered(false);
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    style={{
                      transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isHovered ? 1.03 : 1})`,
                      width: "clamp(200px, 22vw, 300px)",
                      height: "clamp(200px, 22vw, 300px)",
                      cursor: "pointer",
                    }}
                  >
                    <img src="/assets/JEEEEEEEEE.jpg" alt="Je-r" />
                    <div className="photo-gloss" />
                    <div className="photo-specular" style={{
                      background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(255,255,255,0.15) 0%, transparent 58%)`,
                    }} />
                    <div className="rim-l" />
                    <div className="rim-r" />
                  </div>
                </div>
              </div>
            </div>

            {/* Neuralink chip — scroll reveals */}
            <NeuralinkChip visible={scrolled} />
          </div>
        </div>

      </div>

      <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
        <ScrollDownIcon />
      </div>
    </section>
  );
};

export default HeroSection;