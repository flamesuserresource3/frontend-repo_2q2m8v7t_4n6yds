import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-white to-indigo-50 dark:from-black dark:to-indigo-950/40">
      {/* Spline Scene */}
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" 
          style={{ width: '100%', height: '100%' }} 
        />
      </div>

      {/* Soft gradient overlay to improve text contrast; pointer events disabled so it doesn't block Spline interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/80 via-white/30 to-transparent dark:from-black/80 dark:via-black/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24 grid lg:grid-cols-2 items-center gap-12">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-slate-300 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Available for freelance work
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Building modern, playful, and interactive web experiences
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl">
            I craft performant frontends, robust backends, and immersive 3D touches. Let’s turn your ideas into delightful, production-ready products.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-indigo-600 text-white px-5 py-3 font-medium shadow-sm hover:bg-indigo-500 transition">View Projects</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 text-slate-800 dark:text-white px-5 py-3 font-medium hover:bg-white/90 dark:hover:bg-white/10 transition">Get in Touch</a>
          </div>
        </div>
        <div className="relative hidden lg:block" aria-hidden>
          {/* Empty column to keep text readable over the Spline canvas */}
        </div>
      </div>
    </section>
  );
}
