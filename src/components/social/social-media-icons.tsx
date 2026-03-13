"use client";

import { useInView } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { SiGithub, SiInstagram, SiLinkedin, SiTwitter } from "react-icons/si";
import { config } from "@/data/config";
import Link from "next/link";

// Filter out buttons with undefined hrefs
const BUTTONS = [
  {
    name: "Github",
    href: config.social?.github,
    icon: <SiGithub size={"24"} color={"#fff"} />,
  },
  {
    name: "LinkedIn",
    href: config.social?.linkedin,
    icon: <SiLinkedin size={"24"} color={"#fff"} />,
  },
  {
    name: "Twitter",
    href: config.social?.twitter,
    icon: <SiTwitter size={"24"} color={"#fff"} />,
  },
  {
    name: "Instagram",
    href: config.social?.instagram,
    icon: <SiInstagram size={"24"} color={"#fff"} />,
  },
].filter(button => button.href); // Remove any buttons with undefined hrefs

const SocialMediaButtons = () => {
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const show = useInView(ref, { once: true });

  useEffect(() => {
    setMounted(true);
  }, []);

  // If no buttons have valid hrefs, don't render anything
  if (BUTTONS.length === 0) {
    return null;
  }

  // During SSR and initial client render, show all buttons to prevent hydration mismatch
  // Once mounted, we can use the in-view optimization
  return (
    <div ref={ref} className="z-10 flex gap-2">
      {(mounted ? show : true) && 
        BUTTONS.map((button) => (
          <Link href={button.href} key={button.name} target="_blank">
            <Button variant={"ghost"} className="p-2">
              {button.icon}
            </Button>
          </Link>
        ))
      }
    </div>
  );
};

export default SocialMediaButtons;