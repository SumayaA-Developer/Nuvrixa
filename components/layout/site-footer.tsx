import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Nuvrixa. AI automation for practical business improvement.</p>
        <div className="flex gap-5">
          <a href="mailto:hello@nuvrixa.com" className="transition hover:text-white">
            hello@nuvrixa.com
          </a>
          <a href="#top" className="transition hover:text-white">
            Back to top
          </a>
        </div>
      </Container>
    </footer>
  );
}
