export default function Footer() {
  return (
    <footer className="bg-surface border-t border-primary/15 grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-6 md:px-12 py-16 text-sm tracking-wide">
      <div className="space-y-4">
        <div className="text-lg font-bold text-primary font-[family-name:var(--font-space-grotesk)]">
          SDLCFactory.ai
        </div>
        <p className="text-on-surface/50 leading-relaxed max-w-xs">
          &copy; 2024 SDLCFactory.ai. All rights reserved. Built for the
          Synthetic Architect.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-3">
          <a
            href="#"
            className="text-on-surface/50 hover:text-secondary transition-colors"
          >
            Documentation
          </a>
          <a
            href="#"
            className="text-on-surface/50 hover:text-secondary transition-colors"
          >
            Privacy Policy
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <a
            href="#"
            className="text-on-surface/50 hover:text-secondary transition-colors"
          >
            Terms of Service
          </a>
          <a
            href="#cta"
            className="text-on-surface/50 hover:text-secondary transition-colors"
          >
            Join Waitlist
          </a>
        </div>
      </div>

      <div className="md:text-right">
        <div className="inline-flex gap-4">
          {/* Terminal icon */}
          <div className="w-10 h-10 border border-outline-variant/20 flex items-center justify-center hover:border-primary transition-colors cursor-pointer">
            <svg className="w-5 h-5 text-on-surface" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          {/* Hub/GitHub icon */}
          <div className="w-10 h-10 border border-outline-variant/20 flex items-center justify-center hover:border-primary transition-colors cursor-pointer">
            <svg className="w-5 h-5 text-on-surface" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </div>
        </div>
        <div className="mt-6 font-mono text-[10px] text-primary/40">
          SYSTEM_NODE: US-EAST-1 // STATUS: NOMINAL
        </div>
      </div>
    </footer>
  );
}
