// @ts-ignore
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { motion, AnimatePresence } from "framer-motion";
import "@splidejs/react-splide/css";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useState } from "react";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

const SlideItem = ({ image }: { image: string }) => {
  const [hovering, setHovering] = useState(false);
  const filename = image.split("/").pop() ?? "screenshot";

  return (
    <Dialog>
      <DialogTrigger
        className="relative w-full"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <Image
          src={image}
          alt={filename}
          width={1000}
          height={1000}
          className="w-full rounded-lg h-auto"
        />
        <AnimatePresence>
          {hovering && (
            <motion.div
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 text-white backdrop-blur-[1px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Click to zoom
            </motion.div>
          )}
        </AnimatePresence>
      </DialogTrigger>
      <DialogContent className="min-w-[90vw] h-[90vh] bg-transparent outline-none border-none p-0 m-0">
        <DialogHeader className="w-full">
          <VisuallyHidden.Root>
            <DialogTitle>{filename}</DialogTitle>
          </VisuallyHidden.Root>
          <DialogDescription>{filename}</DialogDescription>
        </DialogHeader>
        <Image
          src={image}
          alt={filename}
          width={1000}
          height={1000}
          className="w-full"
          style={{ objectFit: "contain", width: "100vw" }}
        />
      </DialogContent>
    </Dialog>
  );
};

const SlideShow = ({ images }: { images: string[] }) => {
  return (
    <Splide
      options={{
        autoplay: "true",
        perPage: 1,
        start: 0,
        rewind: true,
        padding: { left: "3rem", right: "3rem" },
        gap: "1rem",
      }}
      hasTrack={false}
    >
      <SplideTrack>
        {images.map((image, idx) => (
          <SplideSlide key={idx} className="flex items-center">
            <SlideItem image={image} />
          </SplideSlide>
        ))}
      </SplideTrack>
      <div className="splide__progress">
        <div className="splide__progress__bar"></div>
      </div>
    </Splide>
  );
};

export default SlideShow;