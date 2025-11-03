import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-white to-indigo-50 dark:from-black dark:to-indigo-950/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Let’s build something great</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-xl">
              I’m open to freelance projects, collaborations, or just friendly chats about web and product design.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-full bg-indigo-600 text-white px-5 py-3 font-medium shadow-sm hover:bg-indigo-500 transition">
                <Mail className="h-4 w-4" /> Email me
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 text-slate-800 dark:text-white px-5 py-3 font-medium hover:bg-white/90 dark:hover:bg-white/10 transition">
                <Github className="h-5 w-5" /> GitHub
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border:white/10 bg-white/70 dark:bg-white/5 text-slate-800 dark:text-white px-5 py-3 font-medium hover:bg-white/90 dark:hover:bg-white/10 transition">
                <Linkedin className="h-5 w-5" /> LinkedIn
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-6">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-200">Name</label>
                  <input id="name" type="text" required className="mt-1 w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/90 dark:bg-transparent px-3 py-2 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-200">Email</label>
                  <input id="email" type="email" required className="mt-1 w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/90 dark:bg-transparent px-3 py-2 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-200">Message</label>
                <textarea id="message" rows={5} required className="mt-1 w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/90 dark:bg-transparent px-3 py-2 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-indigo-600 text-white px-5 py-3 font-medium shadow-sm hover:bg-indigo-500 transition">
                Send message
              </button>
              <p className="text-xs text-slate-500 dark:text-slate-400">This demo form doesn’t submit anywhere. Use the email button to reach out directly.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
