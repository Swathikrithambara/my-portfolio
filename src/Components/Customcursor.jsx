import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler);
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[999] transition-transform duration-75 ease-out"
      style={{
        transform: `translate(${position.x - 40}px, ${position.y - 40}px)`,
      }}
    >
      <div className="w-20 h-20  bg-[radial-gradient(circle_at_center,rgba(202,197,49,0.3)_0%,rgba(202,197,49,0.05)_80%,rgba(0,0,0,0)_90%)]
"></div>
    </div>
  );
}
