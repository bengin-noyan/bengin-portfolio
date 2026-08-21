"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/lib/motion";

/**
 * Daktilo etkisiyle sırayla yazılıp silinen ifade listesi.
 * Hareket azaltma açıksa animasyon yerine ilk ifade sabit gösterilir.
 */
export function RotatingText({
  items,
  className = "",
  typeSpeed = 55,
  deleteSpeed = 28,
  /** İfade tamamlandığında ekranda kalma süresi (ms). */
  holdTime = 1800,
}: {
  items: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  holdTime?: number;
}) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced || items.length === 0) return;

    const full = items[index % items.length];

    // Yazım tamamlandı → bekle, sonra silmeye geç
    if (!deleting && text === full) {
      const timer = window.setTimeout(() => setDeleting(true), holdTime);
      return () => window.clearTimeout(timer);
    }

    // Silme tamamlandı → sıradaki ifadeye geç
    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % items.length);
      return;
    }

    const timer = window.setTimeout(
      () => {
        setText((current) =>
          deleting ? full.slice(0, current.length - 1) : full.slice(0, current.length + 1),
        );
      },
      deleting ? deleteSpeed : typeSpeed,
    );

    return () => window.clearTimeout(timer);
  }, [text, deleting, index, items, reduced, typeSpeed, deleteSpeed, holdTime]);

  // Dil değişince yeniden başla
  useEffect(() => {
    setText("");
    setDeleting(false);
    setIndex(0);
  }, [items]);

  if (reduced) {
    return <span className={className}>{items[0]}</span>;
  }

  return (
    <span className={className}>
      {/* Ekran okuyucu daktilo gürültüsünü duymasın */}
      <span aria-hidden="true">{text}</span>
      <span className="caret ml-0.5 inline-block w-[2px] self-stretch bg-accent align-middle text-transparent">
        &nbsp;
      </span>
      <span className="sr-only">{items.join(", ")}</span>
    </span>
  );
}
