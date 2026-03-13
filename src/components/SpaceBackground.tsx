"use client";
import { useEffect, useRef } from "react";

const SpaceBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const resize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener("resize", resize);

    // ── Real constellation data (normalized 0-1 coordinates) ─────────────────
    const CONSTELLATIONS = [
      {
        name: "Orion",
        color: "180,210,255",
        stars: [
          { x: 0.12, y: 0.18, r: 2.2, name: "Betelgeuse" },   // shoulder
          { x: 0.16, y: 0.22, r: 1.6 },
          { x: 0.10, y: 0.28, r: 1.4 },
          { x: 0.14, y: 0.32, r: 2.0, name: "Bellatrix" },    // shoulder
          { x: 0.13, y: 0.38, r: 1.5, name: "Alnitak" },      // belt
          { x: 0.15, y: 0.37, r: 1.5, name: "Alnilam" },
          { x: 0.17, y: 0.36, r: 1.5, name: "Mintaka" },
          { x: 0.11, y: 0.44, r: 1.3 },
          { x: 0.18, y: 0.42, r: 1.3 },
          { x: 0.12, y: 0.50, r: 2.2, name: "Rigel" },        // foot
          { x: 0.19, y: 0.48, r: 1.6, name: "Saiph" },
        ],
        edges: [
          [0,1],[1,3],[0,2],[2,4],[3,7],
          [4,5],[5,6],[7,9],[8,10],[3,6],[6,8],
        ],
      },
      {
        name: "Ursa Major",
        color: "200,190,255",
        stars: [
          { x: 0.55, y: 0.08, r: 1.8 },
          { x: 0.60, y: 0.10, r: 1.6 },
          { x: 0.65, y: 0.09, r: 1.7 },
          { x: 0.70, y: 0.12, r: 1.5 },
          { x: 0.72, y: 0.17, r: 2.0, name: "Alioth" },
          { x: 0.77, y: 0.14, r: 1.8, name: "Mizar" },
          { x: 0.83, y: 0.11, r: 1.6, name: "Alkaid" },
        ],
        edges: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6]],
      },
      {
        name: "Cassiopeia",
        color: "210,200,255",
        stars: [
          { x: 0.72, y: 0.58, r: 1.8 },
          { x: 0.76, y: 0.54, r: 2.0, name: "Caph" },
          { x: 0.80, y: 0.57, r: 1.6 },
          { x: 0.84, y: 0.53, r: 2.2, name: "Schedar" },
          { x: 0.88, y: 0.56, r: 1.7 },
        ],
        edges: [[0,1],[1,2],[2,3],[3,4]],
      },
      {
        name: "Scorpius",
        color: "255,190,160",
        stars: [
          { x: 0.38, y: 0.55, r: 2.4, name: "Antares" },
          { x: 0.40, y: 0.52, r: 1.5 },
          { x: 0.42, y: 0.49, r: 1.4 },
          { x: 0.44, y: 0.53, r: 1.6 },
          { x: 0.35, y: 0.58, r: 1.5 },
          { x: 0.33, y: 0.62, r: 1.4 },
          { x: 0.36, y: 0.67, r: 1.6 },
          { x: 0.38, y: 0.72, r: 1.8, name: "Shaula" },
          { x: 0.40, y: 0.74, r: 1.5 },
        ],
        edges: [[0,1],[1,2],[2,3],[0,4],[4,5],[5,6],[6,7],[7,8]],
      },
      {
        name: "Leo",
        color: "255,230,160",
        stars: [
          { x: 0.30, y: 0.28, r: 2.2, name: "Regulus" },
          { x: 0.33, y: 0.24, r: 1.5 },
          { x: 0.36, y: 0.20, r: 1.6 },
          { x: 0.40, y: 0.22, r: 1.4 },
          { x: 0.42, y: 0.27, r: 1.8, name: "Denebola" },
          { x: 0.38, y: 0.30, r: 1.5 },
          { x: 0.34, y: 0.31, r: 1.4 },
        ],
        edges: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,0]],
      },
      {
        name: "Lyra",
        color: "200,230,255",
        stars: [
          { x: 0.62, y: 0.35, r: 2.6, name: "Vega" },
          { x: 0.64, y: 0.39, r: 1.4 },
          { x: 0.66, y: 0.37, r: 1.3 },
          { x: 0.65, y: 0.42, r: 1.4 },
          { x: 0.63, y: 0.43, r: 1.3 },
        ],
        edges: [[0,1],[0,2],[1,3],[2,4],[3,4]],
      },
      {
        name: "Cygnus",
        color: "180,220,255",
        stars: [
          { x: 0.75, y: 0.32, r: 2.4, name: "Deneb" },
          { x: 0.76, y: 0.37, r: 1.5 },
          { x: 0.77, y: 0.42, r: 1.6, name: "Sadr" },
          { x: 0.74, y: 0.42, r: 1.4 },
          { x: 0.80, y: 0.42, r: 1.4 },
          { x: 0.77, y: 0.48, r: 1.5 },
          { x: 0.77, y: 0.54, r: 1.8, name: "Albireo" },
        ],
        edges: [[0,1],[1,2],[2,3],[2,4],[2,5],[5,6]],
      },
    ];

    // ── Background stars ──────────────────────────────────────────────────────
    const BG_STARS = Array.from({ length: 320 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 0.9 + 0.1,
      alpha: Math.random() * 0.55 + 0.1,
      twinkle: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.007 + 0.002,
    }));

    // ── Neuralink neural nodes (overlay on constellation stars) ───────────────
    // Pick a few constellation stars to become "neural hubs"
    const neuralHubs: {
      x: number; y: number;
      vx: number; vy: number;
      r: number; pulse: number;
      pulseSpeed: number; color: string;
      constColor: string;
    }[] = [];

    CONSTELLATIONS.forEach((c) => {
      // Pick 1-2 brightest stars per constellation as neural hubs
      c.stars
        .filter((s) => s.r >= 2.0)
        .slice(0, 2)
        .forEach((s) => {
          neuralHubs.push({
            x: s.x * W,
            y: s.y * H,
            vx: (Math.random() - 0.5) * 0.06,
            vy: (Math.random() - 0.5) * 0.06,
            r: s.r,
            pulse: Math.random() * Math.PI * 2,
            pulseSpeed: Math.random() * 0.018 + 0.008,
            color: "96,165,250",
            constColor: c.color,
          });
        });
    });

    // ── Electric pulses between neural hubs ───────────────────────────────────
    const pulses: {
      fromIdx: number; toIdx: number;
      progress: number; speed: number;
      alpha: number;
      trail: { x: number; y: number }[];
    }[] = [];

    const spawnPulse = () => {
      for (let attempt = 0; attempt < 20; attempt++) {
        const i = Math.floor(Math.random() * neuralHubs.length);
        const j = Math.floor(Math.random() * neuralHubs.length);
        if (i === j) continue;
        const dx = neuralHubs[i].x - neuralHubs[j].x;
        const dy = neuralHubs[i].y - neuralHubs[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < W * 0.45 && dist > 80) {
          pulses.push({
            fromIdx: i, toIdx: j,
            progress: 0,
            speed: 0.006 + Math.random() * 0.008,
            alpha: 0.85,
            trail: [],
          });
          break;
        }
      }
    };

    // ── Scan rings ────────────────────────────────────────────────────────────
    const scanRings: {
      x: number; y: number;
      r: number; maxR: number; speed: number;
    }[] = [];

    const spawnRing = () => {
      const hub = neuralHubs[Math.floor(Math.random() * neuralHubs.length)];
      scanRings.push({
        x: hub.x, y: hub.y,
        r: 0,
        maxR: 60 + Math.random() * 50,
        speed: 0.4 + Math.random() * 0.25,
      });
    };

    let t = 0;
    let lastPulse = 0;
    let lastRing = 0;

    const draw = () => {
      // ── Starry night sky gradient base ────────────────────────────────────
      const sky = ctx.createLinearGradient(0, 0, 0, H);
      sky.addColorStop(0,   "#06091a");
      sky.addColorStop(0.3, "#080c20");
      sky.addColorStop(0.6, "#0a0e28");
      sky.addColorStop(1,   "#0d1230");
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, W, H);

      // ── Subtle Milky Way band ──────────────────────────────────────────────
      const mw = ctx.createLinearGradient(W * 0.3, 0, W * 0.7, H);
      mw.addColorStop(0,   "rgba(80,90,160,0)");
      mw.addColorStop(0.3, "rgba(80,90,160,0.04)");
      mw.addColorStop(0.5, "rgba(100,110,180,0.07)");
      mw.addColorStop(0.7, "rgba(80,90,160,0.04)");
      mw.addColorStop(1,   "rgba(80,90,160,0)");
      ctx.fillStyle = mw;
      ctx.fillRect(0, 0, W, H);

      // ── Background stars ───────────────────────────────────────────────────
      BG_STARS.forEach((s) => {
        s.twinkle += s.speed;
        const a = s.alpha * (0.4 + 0.6 * Math.sin(s.twinkle));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220,225,255,${a})`;
        ctx.fill();
      });

      // ── Constellations ─────────────────────────────────────────────────────
      CONSTELLATIONS.forEach((c) => {
        // Draw edges
        c.edges.forEach(([i, j]) => {
          const a = c.stars[i];
          const b = c.stars[j];
          const ax = a.x * W, ay = a.y * H;
          const bx = b.x * W, by = b.y * H;

          const lineAlpha = 0.12 + 0.04 * Math.sin(t * 0.4);
          const gLine = ctx.createLinearGradient(ax, ay, bx, by);
          gLine.addColorStop(0, `rgba(${c.color},${lineAlpha})`);
          gLine.addColorStop(0.5, `rgba(${c.color},${lineAlpha * 1.5})`);
          gLine.addColorStop(1, `rgba(${c.color},${lineAlpha})`);
          ctx.beginPath();
          ctx.moveTo(ax, ay);
          ctx.lineTo(bx, by);
          ctx.strokeStyle = gLine;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        });

        // Draw stars
        c.stars.forEach((s) => {
          const sx = s.x * W;
          const sy = s.y * H;
          const twinkle = 0.7 + 0.3 * Math.sin(t * 1.2 + sx * 0.01);

          // Outer glow for bright stars
          if (s.r >= 1.8) {
            const glow = ctx.createRadialGradient(sx, sy, 0, sx, sy, s.r * 6);
            glow.addColorStop(0, `rgba(${c.color},${0.3 * twinkle})`);
            glow.addColorStop(0.5, `rgba(${c.color},${0.08 * twinkle})`);
            glow.addColorStop(1, `rgba(${c.color},0)`);
            ctx.beginPath();
            ctx.arc(sx, sy, s.r * 6, 0, Math.PI * 2);
            ctx.fillStyle = glow;
            ctx.fill();

            // Cross diffraction spike for brightest stars
            if (s.r >= 2.0) {
              ctx.save();
              ctx.globalAlpha = 0.15 * twinkle;
              ctx.strokeStyle = `rgba(${c.color},1)`;
              ctx.lineWidth = 0.5;
              const spikeLen = s.r * 10;
              ctx.beginPath();
              ctx.moveTo(sx - spikeLen, sy);
              ctx.lineTo(sx + spikeLen, sy);
              ctx.stroke();
              ctx.beginPath();
              ctx.moveTo(sx, sy - spikeLen);
              ctx.lineTo(sx, sy + spikeLen);
              ctx.stroke();
              ctx.restore();
            }
          }

          // Star core
          ctx.beginPath();
          ctx.arc(sx, sy, s.r * 0.9, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${c.color},${0.85 * twinkle})`;
          ctx.fill();

          // White hot center
          ctx.beginPath();
          ctx.arc(sx, sy, s.r * 0.35, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${0.9 * twinkle})`;
          ctx.fill();
        });
      });

      // ── Neuralink pulse connections between hubs ───────────────────────────
      for (let i = 0; i < neuralHubs.length; i++) {
        for (let j = i + 1; j < neuralHubs.length; j++) {
          const dx = neuralHubs[i].x - neuralHubs[j].x;
          const dy = neuralHubs[i].y - neuralHubs[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < W * 0.38) {
            const fade = (1 - dist / (W * 0.38)) * 0.12;
            ctx.beginPath();
            ctx.moveTo(neuralHubs[i].x, neuralHubs[i].y);
            ctx.lineTo(neuralHubs[j].x, neuralHubs[j].y);
            ctx.strokeStyle = `rgba(96,165,250,${fade})`;
            ctx.lineWidth = 0.6;
            ctx.setLineDash([4, 8]);
            ctx.stroke();
            ctx.setLineDash([]);
          }
        }
      }

      // ── Neural hub glows ───────────────────────────────────────────────────
      neuralHubs.forEach((n) => {
        n.pulse += n.pulseSpeed;
        const pulse = 0.5 + 0.5 * Math.sin(n.pulse);

        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 9);
        g.addColorStop(0, `rgba(96,165,250,${0.35 * pulse})`);
        g.addColorStop(0.4, `rgba(139,92,246,${0.12 * pulse})`);
        g.addColorStop(1, "rgba(96,165,250,0)");
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 9, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();

        // Pulsing outer ring
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 4 + pulse * 3, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(96,165,250,${0.25 * pulse})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      });

      // ── Scan rings ─────────────────────────────────────────────────────────
      if (t - lastRing > 4.5) {
        spawnRing();
        lastRing = t;
      }
      for (let i = scanRings.length - 1; i >= 0; i--) {
        const ring = scanRings[i];
        ring.r += ring.speed;
        const fade = 1 - ring.r / ring.maxR;
        if (fade <= 0) { scanRings.splice(i, 1); continue; }
        ctx.beginPath();
        ctx.arc(ring.x, ring.y, ring.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(96,165,250,${0.2 * fade})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      // ── Electric pulses ────────────────────────────────────────────────────
      if (t - lastPulse > 1.8) {
        spawnPulse();
        lastPulse = t;
      }
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.progress += p.speed;
        p.alpha -= 0.004;
        if (p.progress >= 1 || p.alpha <= 0) { pulses.splice(i, 1); continue; }

        const from = neuralHubs[p.fromIdx];
        const to = neuralHubs[p.toIdx];
        const px = from.x + (to.x - from.x) * p.progress;
        const py = from.y + (to.y - from.y) * p.progress;

        p.trail.push({ x: px, y: py });
        if (p.trail.length > 14) p.trail.shift();

        // Trail
        p.trail.forEach((tp, ti) => {
          const tf = (ti / p.trail.length) * p.alpha * 0.35;
          ctx.beginPath();
          ctx.arc(tp.x, tp.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(139,92,246,${tf})`;
          ctx.fill();
        });

        // Pulse head
        const pg = ctx.createRadialGradient(px, py, 0, px, py, 6);
        pg.addColorStop(0, `rgba(255,255,255,${p.alpha})`);
        pg.addColorStop(0.4, `rgba(96,165,250,${p.alpha * 0.8})`);
        pg.addColorStop(1, "rgba(96,165,250,0)");
        ctx.beginPath();
        ctx.arc(px, py, 6, 0, Math.PI * 2);
        ctx.fillStyle = pg;
        ctx.fill();
      }

      t += 0.016;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ pointerEvents: "none" }}
    />
  );
};

export default SpaceBackground;