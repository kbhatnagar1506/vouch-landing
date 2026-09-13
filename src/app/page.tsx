import Link from "next/link";

const features = [
  {
    title: "Fast to set up",
    description: "Get up and running in minutes with a workflow that fits right into your existing tools.",
  },
  {
    title: "Built for teams",
    description: "Invite collaborators, share context, and keep everyone aligned without the busywork.",
  },
  {
    title: "Reliable by default",
    description: "Sensible defaults and clear feedback mean fewer surprises and less time firefighting.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="border-b border-black/[.08] dark:border-white/[.08]">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <span className="text-lg font-semibold tracking-tight">Vouch</span>
          <div className="hidden items-center gap-8 text-sm text-black/70 dark:text-white/70 sm:flex">
            <a href="#features" className="hover:text-black dark:hover:text-white">
              Features
            </a>
            <a href="#faq" className="hover:text-black dark:hover:text-white">
              FAQ
            </a>
          </div>
          <Link
            href="#get-started"
            className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/85"
          >
            Get started
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        <section className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 pt-24 pb-20 text-center sm:pt-32">
          <span className="rounded-full border border-black/[.08] px-3 py-1 text-xs font-medium text-black/60 dark:border-white/[.145] dark:text-white/60">
            Now in early access
          </span>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Ship your product with confidence
          </h1>
          <p className="max-w-2xl text-lg text-black/60 dark:text-white/60">
            Vouch gives you the tools to validate, launch, and grow — without
            the guesswork. Spend less time wiring things together and more
            time shipping.
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Link
              id="get-started"
              href="#"
              className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/85"
            >
              Get started for free
            </Link>
            <Link
              href="#features"
              className="rounded-full border border-black/[.08] px-6 py-3 text-sm font-medium transition hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-white/[.06]"
            >
              Learn more
            </Link>
          </div>
        </section>

        <section id="features" className="border-t border-black/[.08] dark:border-white/[.08]">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="mb-12 max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight">
                Everything you need, nothing you don&apos;t
              </h2>
              <p className="mt-3 text-black/60 dark:text-white/60">
                A focused set of tools that get out of your way.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-col gap-2">
                  <h3 className="font-medium">{feature.title}</h3>
                  <p className="text-sm text-black/60 dark:text-white/60">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-black/[.08] dark:border-white/[.08]">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 py-20 text-center">
            <h2 className="text-3xl font-semibold tracking-tight">
              Ready to get started?
            </h2>
            <p className="max-w-xl text-black/60 dark:text-white/60">
              Join the teams already using Vouch to move faster.
            </p>
            <Link
              href="#"
              className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/85"
            >
              Get started for free
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/[.08] px-6 py-8 dark:border-white/[.08]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-black/50 dark:text-white/50 sm:flex-row">
          <span>© {new Date().getFullYear()} Vouch. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-black dark:hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-black dark:hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
