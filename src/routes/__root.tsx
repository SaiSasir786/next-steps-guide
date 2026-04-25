import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SideNav } from "@/components/SideNav";
import { Cursor } from "@/components/Cursor";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ssk" },
      {
        name: "description",
        content:
          "Sai Sasir K — Gen-AI & ML Engineer specializing in large language models, RAG pipelines, autonomous agents, and production ML systems.",
      },
      { name: "author", content: "Sai Sasir K" },
      { property: "og:title", content: "Ssk" },
      {
        property: "og:description",
        content:
          "Building intelligent systems that think — LLMs, RAG, agents, and production ML.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Ssk" },
      { name: "description", content: "A professional portfolio website showcasing expertise, projects, and skills for a Gen-AI & ML Engineer." },
      { property: "og:description", content: "A professional portfolio website showcasing expertise, projects, and skills for a Gen-AI & ML Engineer." },
      { name: "twitter:description", content: "A professional portfolio website showcasing expertise, projects, and skills for a Gen-AI & ML Engineer." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a12c37a3-c430-4aae-b2b1-9cf000eacc99/id-preview-f2076d8f--247c9959-5e97-4ccd-b766-f155a8ed7951.lovable.app-1776583796162.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a12c37a3-c430-4aae-b2b1-9cf000eacc99/id-preview-f2076d8f--247c9959-5e97-4ccd-b766-f155a8ed7951.lovable.app-1776583796162.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}var r=document.documentElement;r.classList.remove('dark','light');r.classList.add(t);r.style.colorScheme=t;}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Cursor />
      <SiteHeader />
      <SideNav />
      <main className="min-h-screen lg:pl-12">
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}
