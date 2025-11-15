import { useEffect } from "react";

export default function useParallax() {
  useEffect(() => {
    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;

      const blobs = document.querySelectorAll(".parallax-blob");

      blobs.forEach((blob, index) => {
        const speed = (index + 1) * 8; // each blob moves differently
        blob.style.transform = `translate(${x / speed}px, ${y / speed}px)`;
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);
}
