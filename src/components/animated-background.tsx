"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Application, SPEObject, SplineEvent } from "@splinetool/runtime";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Spline = React.lazy(() => import("@splinetool/react-spline"));
import { Skill, SkillNames, SKILLS } from "@/data/constants";
import { sleep } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { usePreloader } from "./preloader";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const STATES = {
  hero: {
    desktop: {
      scale: { x: 0.25, y: 0.25, z: 0.25 },
      position: { x: 400, y: -200, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
    },
    mobile: {
      scale: { x: 0.15, y: 0.15, z: 0.15 },
      position: { x: 0, y: -200, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
    },
  },
  about: {
    desktop: {
      scale: { x: 0.4, y: 0.4, z: 0.4 },
      position: { x: 0, y: -40, z: 0 },
      rotation: { x: 0, y: Math.PI / 12, z: 0 },
    },
    mobile: {
      scale: { x: 0.2, y: 0.2, z: 0.2 },
      position: { x: 0, y: -40, z: 0 },
      rotation: { x: 0, y: Math.PI / 6, z: 0 },
    },
  },
  skills: {
    desktop: {
      scale: { x: 0.4, y: 0.4, z: 0.4 },
      position: { x: 0, y: -40, z: 0 },
      rotation: { x: 0, y: Math.PI / 12, z: 0 },
    },
    mobile: {
      scale: { x: 0.2, y: 0.2, z: 0.2 },
      position: { x: 0, y: -40, z: 0 },
      rotation: { x: 0, y: Math.PI / 6, z: 0 },
    },
  },
  projects: {
    desktop: {
      scale: { x: 0.3, y: 0.3, z: 0.3 },
      position: { x: 0, y: -40, z: 0 },
      rotation: { x: Math.PI, y: Math.PI / 3, z: Math.PI },
    },
    mobile: {
      scale: { x: 0.18, y: 0.18, z: 0.18 },
      position: { x: 0, y: 150, z: 0 },
      rotation: { x: Math.PI, y: Math.PI / 3, z: Math.PI },
    },
  },
  contact: {
    desktop: {
      scale: { x: 0.3, y: 0.3, z: 0.3 },
      position: { x: 500, y: -250, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
    },
    mobile: {
      scale: { x: 0.18, y: 0.18, z: 0.18 },
      position: { x: 0, y: 150, z: 0 },
      rotation: { x: Math.PI, y: Math.PI / 3, z: Math.PI },
    },
  },
};

type Section = "hero" | "about" | "skills" | "projects" | "contact";

const AnimatedBackground = () => {
  const { isLoading, bypassLoading } = usePreloader();
  const { theme } = useTheme();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const splineContainer = useRef<HTMLDivElement>(null);
  const [splineApp, setSplineApp] = useState<Application>();
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [activeSection, setActiveSection] = useState<Section>("hero");
  const activeSectionRef = useRef<Section>("hero");
  const bongoRef = useRef<{ start: () => void; stop: () => void }>();
  const keycapRef = useRef<{ start: () => void; stop: () => void }>();
  const router = useRouter();

  const keyboardStates = (section: Section) =>
    STATES[section][isMobile ? "mobile" : "desktop"];

  const setSection = (section: Section) => {
    activeSectionRef.current = section;
    setActiveSection(section);
    const hash = section === "hero" ? "#" : `#${section}`;
    router.push("/" + hash, { scroll: false });
  };

  // ── Mouse hover interaction ───────────────────────────────────────────────
  const handleMouseHover = (e: SplineEvent) => {
    if (!splineApp || selectedSkill?.name === e.target.name) return;
    if (e.target.name === "body" || e.target.name === "platform") {
      setSelectedSkill(null);
      splineApp.setVariable("heading", "");
      splineApp.setVariable("desc", "");
    } else {
      const skill = SKILLS[e.target.name as SkillNames];
      if (skill) setSelectedSkill(skill);
    }
  };

  // ── Sync selectedSkill to spline variables ────────────────────────────────
  useEffect(() => {
    if (!selectedSkill || !splineApp) return;
    splineApp.setVariable("heading", selectedSkill.label);
    splineApp.setVariable("desc", selectedSkill.shortDescription);
  }, [selectedSkill]);

  // ── Text visibility based on theme/section ────────────────────────────────
  useEffect(() => {
    if (!splineApp) return;
    const tDD = splineApp.findObjectByName("text-desktop-dark");
    const tDL = splineApp.findObjectByName("text-desktop");
    const tMD = splineApp.findObjectByName("text-mobile-dark");
    const tML = splineApp.findObjectByName("text-mobile");
    if (!tDD || !tDL || !tMD || !tML) return;

    if (activeSection !== "skills") {
      tDD.visible = tDL.visible = tMD.visible = tML.visible = false;
      return;
    }
    tDD.visible = theme === "light" && !isMobile;
    tDL.visible = theme === "dark" && !isMobile;
    tMD.visible = theme === "light" && isMobile;
    tML.visible = theme === "dark" && isMobile;
  }, [theme, splineApp, isMobile, activeSection]);

  // ── Reveal keycaps animation (instant, no sleep delays) ───────────────────
  const revealKeyCaps = (kbd: SPEObject) => {
    if (!splineApp) return;
    const section = activeSectionRef.current;
    if (section === "hero") { kbd.visible = false; return; }

    kbd.visible = true;
    gsap.fromTo(
      kbd.scale,
      { x: 0.01, y: 0.01, z: 0.01 },
      {
        x: keyboardStates(section).scale.x,
        y: keyboardStates(section).scale.y,
        z: keyboardStates(section).scale.z,
        duration: 1.2,
        ease: "elastic.out(1, 0.6)",
      }
    );

    const allObjects = splineApp.getAllObjects();
    const keycaps = allObjects.filter((o) => o.name === "keycap");
    const deviceKeycaps = allObjects.filter((o) =>
      o.name === (isMobile ? "keycap-mobile" : "keycap-desktop")
    );

    deviceKeycaps.forEach((k) => { k.visible = true; });
    keycaps.forEach((keycap, idx) => {
      keycap.visible = false;
      // stagger with requestAnimationFrame instead of sleep
      const delay = idx * 70;
      setTimeout(() => {
        keycap.visible = true;
        gsap.fromTo(
          keycap.position,
          { y: 200 },
          { y: 50, duration: 0.5, ease: "bounce.out" }
        );
      }, delay);
    });
  };

  // ── Hide keyboard instantly with shrink ───────────────────────────────────
  const hideKeyboard = (kbd: SPEObject) => {
    gsap.killTweensOf(kbd.scale);
    gsap.to(kbd.scale, {
      x: 0.01, y: 0.01, z: 0.01,
      duration: 0.4,
      ease: "back.in(2)",
      onComplete: () => { kbd.visible = false; },
    });
  };

  // ── Bongo cat animation ───────────────────────────────────────────────────
  const getBongoAnimation = (app: Application) => {
    const framesParent = app.findObjectByName("bongo-cat");
    const frame1 = app.findObjectByName("frame-1");
    const frame2 = app.findObjectByName("frame-2");
    if (!frame1 || !frame2 || !framesParent) return { start: () => {}, stop: () => {} };
    let interval: NodeJS.Timeout;
    const start = () => {
      let i = 0;
      framesParent.visible = true;
      interval = setInterval(() => {
        frame1.visible = !!(i % 2);
        frame2.visible = !(i % 2);
        i++;
      }, 100);
    };
    const stop = () => {
      clearInterval(interval);
      framesParent.visible = frame1.visible = frame2.visible = false;
    };
    return { start, stop };
  };

  // ── Keycap float animation ────────────────────────────────────────────────
  const getKeycapsAnimation = (app: Application) => {
    let tweens: gsap.core.Tween[] = [];
    const removePrev = () => { tweens.forEach((t) => t.kill()); tweens = []; };
    const start = () => {
      removePrev();
      Object.values(SKILLS)
        .sort(() => Math.random() - 0.5)
        .forEach((skill, idx) => {
          const keycap = app.findObjectByName(skill.name);
          if (!keycap) return;
          tweens.push(gsap.to(keycap.position, {
            y: Math.random() * 200 + 200,
            duration: Math.random() * 2 + 2,
            delay: idx * 0.6,
            repeat: -1,
            yoyo: true,
            ease: "elastic.out(1,0.3)",
          }));
        });
    };
    const stop = () => {
      removePrev();
      Object.values(SKILLS).forEach((skill) => {
        const keycap = app.findObjectByName(skill.name);
        if (!keycap) return;
        tweens.push(gsap.to(keycap.position, {
          y: 0, duration: 4, repeat: 1, ease: "elastic.out(1,0.8)",
        }));
      });
      setTimeout(removePrev, 4000);
    };
    return { start, stop };
  };

  // ── Main init when spline loads ───────────────────────────────────────────
  useEffect(() => {
    if (!splineApp) return;

    const kbd = splineApp.findObjectByName("keyboard");
    if (!kbd) return;

    // Store animation controllers
    bongoRef.current = getBongoAnimation(splineApp);
    keycapRef.current = getKeycapsAnimation(splineApp);

    // Spline event listeners
    splineApp.addEventListener("keyUp", () => {
      splineApp.setVariable("heading", "");
      splineApp.setVariable("desc", "");
    });
    splineApp.addEventListener("keyDown", (e) => {
      const skill = SKILLS[e.target.name as SkillNames];
      if (skill) {
        setSelectedSkill(skill);
        splineApp.setVariable("heading", skill.label);
        splineApp.setVariable("desc", skill.shortDescription);
      }
    });
    splineApp.addEventListener("mouseHover", handleMouseHover);

    // Init keyboard hidden
    kbd.visible = false;
    gsap.set(kbd.scale, { x: 0.01, y: 0.01, z: 0.01 });
    gsap.set(kbd.position, keyboardStates("hero").position);

    // ── ScrollTrigger: hero → skills ──────────────────────────────────────
    ScrollTrigger.create({
      trigger: "#skills",
      start: "top 50%",
      onEnter: () => {
        setSection("skills");
        splineApp.setVariable("heading", "");
        splineApp.setVariable("desc", "");
        bongoRef.current?.stop();
        keycapRef.current?.stop();
        revealKeyCaps(kbd);
        gsap.to(kbd.position, { ...keyboardStates("skills").position, duration: 0.8, ease: "power2.out" });
        gsap.to(kbd.rotation, { ...keyboardStates("skills").rotation, duration: 0.8, ease: "power2.out" });
      },
      onLeaveBack: () => {
        setSection("hero");
        splineApp.setVariable("heading", "");
        splineApp.setVariable("desc", "");
        bongoRef.current?.stop();
        keycapRef.current?.stop();
        hideKeyboard(kbd);
        gsap.to(kbd.position, { ...keyboardStates("hero").position, duration: 0.5, ease: "power2.in" });
        gsap.to(kbd.rotation, { ...keyboardStates("hero").rotation, duration: 0.5, ease: "power2.in" });
      },
    });

    // ── ScrollTrigger: skills → projects ─────────────────────────────────
    ScrollTrigger.create({
      trigger: "#projects",
      start: "top 70%",
      onEnter: () => {
        setSection("projects");
        splineApp.setVariable("heading", "");
        splineApp.setVariable("desc", "");
        keycapRef.current?.stop();
        kbd.visible = true;
        gsap.killTweensOf(kbd.scale);
        gsap.to(kbd.scale, { ...keyboardStates("projects").scale, duration: 0.8, ease: "power2.out" });
        gsap.to(kbd.position, { ...keyboardStates("projects").position, duration: 0.8, ease: "power2.out" });
        gsap.to(kbd.rotation, { ...keyboardStates("projects").rotation, duration: 0.8, ease: "power2.out" });
        setTimeout(() => bongoRef.current?.start(), 300);
      },
      onLeaveBack: () => {
        setSection("skills");
        splineApp.setVariable("heading", "");
        splineApp.setVariable("desc", "");
        bongoRef.current?.stop();
        kbd.visible = true;
        gsap.killTweensOf(kbd.scale);
        gsap.to(kbd.scale, { ...keyboardStates("skills").scale, duration: 0.8, ease: "power2.out" });
        gsap.to(kbd.position, { ...keyboardStates("skills").position, duration: 0.8, ease: "power2.out" });
        gsap.to(kbd.rotation, { ...keyboardStates("skills").rotation, duration: 0.8, ease: "power2.out" });
      },
    });

    // ── ScrollTrigger: projects → contact ────────────────────────────────
    ScrollTrigger.create({
      trigger: "#contact",
      start: "top 30%",
      onEnter: () => {
        setSection("contact");
        bongoRef.current?.stop();
        kbd.visible = true;
        gsap.killTweensOf(kbd.scale);
        gsap.to(kbd.scale, { ...keyboardStates("contact").scale, duration: 0.8, ease: "power2.out" });
        gsap.to(kbd.position, { ...keyboardStates("contact").position, duration: 0.8, ease: "power2.out" });
        gsap.to(kbd.rotation, { ...keyboardStates("contact").rotation, duration: 0.8, ease: "power2.out" });
        setTimeout(() => keycapRef.current?.start(), 600);
      },
      onLeaveBack: () => {
        setSection("projects");
        keycapRef.current?.stop();
        kbd.visible = true;
        gsap.killTweensOf(kbd.scale);
        gsap.to(kbd.scale, { ...keyboardStates("projects").scale, duration: 0.8, ease: "power2.out" });
        gsap.to(kbd.position, { ...keyboardStates("projects").position, duration: 0.8, ease: "power2.out" });
        gsap.to(kbd.rotation, { ...keyboardStates("projects").rotation, duration: 0.8, ease: "power2.out" });
        setTimeout(() => bongoRef.current?.start(), 300);
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [splineApp]);

  // ── Initial reveal after preloader ────────────────────────────────────────
  useEffect(() => {
    if (!splineApp || isLoading) return;
    const kbd = splineApp.findObjectByName("keyboard");
    if (!kbd) return;
    kbd.visible = false;
  }, [splineApp, isLoading]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div
        style={{
          opacity: activeSection === "hero" ? 0 : 1,
          pointerEvents: activeSection === "hero" ? "none" : "auto",
          transition: activeSection === "hero" ? "opacity 0.3s ease" : "opacity 0.6s ease",
        }}
      >
        <Spline
          ref={splineContainer}
          onLoad={(app: Application) => {
            setSplineApp(app);
            bypassLoading();
          }}
          scene="/assets/skills-keyboard.spline"
        />
      </div>
    </Suspense>
  );
};

export default AnimatedBackground;