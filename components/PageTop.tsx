import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

type Crumb = {
  label: string;
  href?: string;
};

export default function PageTop({
  title,
  description,
  crumbs,
}: {
  title: string;
  description?: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-mesh">
      {/* background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-56 sm:w-80 h-56 sm:h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-brand-300/20 rounded-full blur-3xl" />
      </div>

      {/* header spacer (because Header is fixed) */}
      <div className="pt-24 sm:pt-28" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 pb-10 sm:pb-14">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-white/80">
            <li className="flex items-center gap-2">
              <Home className="w-4 h-4 text-white/80" />
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>

            {crumbs.map((c, idx) => (
              <li key={`${c.label}-${idx}`} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-white/50" />
                {c.href ? (
                  <Link
                    href={c.href}
                    className="hover:text-white transition-colors"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
          {title}
        </h1>

        {description ? (
          <p className="mt-3 text-white/80 text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        ) : null}
      </div>

      {/* fade to white for content below */}
      <div className="h-10 sm:h-12 bg-gradient-to-b from-white/0 to-white" />
    </section>
  );
}
