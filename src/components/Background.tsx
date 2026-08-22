/**
 * Sayfanın arkasındaki dekoratif katman: ızgara dokusu + yavaşça sürüklenen
 * neon lekeler ("aurora"). Tamamen CSS ile animasyonlanır, JS maliyeti yoktur.
 */
export function Background() {
  return (
    <div
      aria-hidden="true"
      className="aurora-layer pointer-events-none fixed inset-0 -z-20 overflow-hidden"
    >
      {/* Izgara */}
      <div className="bg-grid mask-fade-b absolute inset-0 opacity-[0.32]" />

      {/* Sürüklenen ışık lekeleri */}
      <div className="animate-aurora-a absolute -top-40 -left-32 size-[36rem] rounded-full bg-accent/16 blur-[130px]" />
      <div
        className="animate-aurora-b absolute top-[26%] -right-40 size-[32rem] rounded-full bg-accent-2/14 blur-[130px]"
        style={{ animationDelay: "-8s" }}
      />
      <div
        className="animate-aurora-a absolute bottom-[-8%] left-[28%] size-[28rem] rounded-full bg-accent-3/10 blur-[140px]"
        style={{ animationDelay: "-14s" }}
      />

      {/* Alt kısmı koyulaştıran vinyet */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-950" />
    </div>
  );
}
