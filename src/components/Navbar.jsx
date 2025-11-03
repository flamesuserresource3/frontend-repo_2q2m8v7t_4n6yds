import { Rocket, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 dark:bg-black/40 border-b border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-100">
          <Rocket className="h-5 w-5 text-indigo-600" />
          <span>My Portfolio</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition">Projects</a>
          <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition">Contact</a>
          <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-full bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-500 transition">
            <Mail className="h-4 w-4" /> Say hello
          </a>
        </nav>
      </div>
    </header>
  );
}
