"use client";

import { useEffect, useState } from "react";

// Kullanici isletim sisteminde "hareketi azalt"i actiysa true donuyor.
// Fare takibi / egilme gibi JS efektlerini komple kapatmak icin kullaniyorum,
// CSS tarafindakileri globals.css zaten kapatiyor.
export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduced;
}

// Dokunmatik cihazlarda fare efektlerini atlamak icin.
export function useFinePointer() {
  const [fine, setFine] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const update = () => setFine(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return fine;
}
