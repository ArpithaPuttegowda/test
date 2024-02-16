import React, { useEffect } from "react";
import { useState } from "react";

export const Unmounting2 = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      console.log("resize")
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>{isMobile ? <h1>It's mobile</h1> : <h1>It's not a mobile</h1>}</div>
  );
};
