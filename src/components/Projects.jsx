import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Landing Page',
    description: 'A performant marketing site with an embedded Spline scene and smooth scroll interactions.',
    stack: ['React', 'Spline', 'Tailwind'],
    href: '#',
  },
  {
    title: 'Realtime Chat App',
    description: 'Full-stack chat with authentication, websockets, and optimistic UI updates.',
    stack: ['React', 'FastAPI', 'WebSocket'],
    href: '#',
  },
  {
    title: 'E-commerce Starter',
    description: 'Headless storefront with product search, cart, and checkout integrations.',
    stack: ['React', 'FastAPI', 'MongoDB'],
    href: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Featured Projects</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl">A snapshot of things I loved building recently.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{p.title}</h3>
                <a href={p.href} aria-label={`Open ${p.title}`} className="shrink-0 text-slate-500 hover:text-slate-800 dark:hover:text-white transition">
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((tag) => (
                  <span key={tag} className="text-xs rounded-full border border-black/10 dark:border-white/10 bg-slate-50 dark:bg-white/10 px-2.5 py-1 text-slate-700 dark:text-slate-200">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
