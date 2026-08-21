"use client";

import { useEffect, useState } from "react";

/**
 * Kullanıcı işletim sisteminde "hareketi azalt" tercihini açtıysa true döner.
 * Fare takibi / eğilme gibi JS tabanlı efektleri tamamen kapatmak için kullanılır
 * (CSS tabanlı olanları globals.css zaten devre dışı bırakıyor).
 */
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

/**
 * İnce işaretçisi olmayan cihazlarda (dokunmatik) fare efektlerini atlamak için.
 */
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
