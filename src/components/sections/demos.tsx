import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const DemosSection = () => {
  return (
    <section id="demos" className="relative z-[50] max-w-7xl mx-auto md:h-[130vh] mt-20 md:mt-32">
      <Link href={"#demos"}>
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 mb-32"
          )}
        >
          Project Demo
        </h2>
      </Link>

      <div className="container mx-auto px-4 max-w-6xl">
        <DemoVideo />
      </div>
    </section>
  );
};

function DemoVideo() {
  const [loadError, setLoadError] = useState(false);
  return (
    <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl bg-black/20 relative">
      <video
        className="w-full h-auto"
        controls
        preload="metadata"
        playsInline
        onError={() => setLoadError(true)}
      >
        <source src="/assets/demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {loadError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60">
          <div className="text-center space-y-2">
            <p className="text-white font-semibold">Demo video not found</p>
            <p className="text-white/80 text-sm font-mono">Place file at <code>/public/assets/demo.mp4</code></p>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemosSection;