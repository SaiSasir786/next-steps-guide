import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Starfield } from "@/components/Starfield";
import projectChatbot from "@/assets/project-chatbot.jpg";
import projectAutovista from "@/assets/project-autovista.jpg";
import projectFire from "@/assets/firefighter.jpg";
import projectRov from "@/assets/rov.jpg";

type Project = {
  slug: string;
  code: string;
  title: string;
  tag: string;
  year: string;
  summary: string;
  image: string;
  stack: string[];
  overview: string;
  highlights: string[];
  links?: { label: string; href: string; icon?: "github" | "external" }[];
};

const PROJECTS: Record<string, Project> = {
  "travel-bot": {
    slug: "travel-bot",
    code: "LOG.001",
    title: "AI Travel Booking Assistant",
    tag: "Gen-AI · Conversational AI",
    year: "2024",
    summary:
      "NLP-powered conversational agent automating end-to-end travel booking via Telegram.",
    image: projectChatbot,
    stack: ["Dialogflow", "JavaScript", "PHP", "MySQL", "Telegram Bot API"],
    overview:
      "An end-to-end conversational booking system that handles intent recognition, slot filling, and database transactions without human intervention. Users chat naturally on Telegram and the agent resolves their booking against a structured backend.",
    highlights: [
      "Engineered intent recognition and entity extraction with Google Dialogflow.",
      "Designed a normalized MySQL schema with PHP REST APIs for booking management.",
      "Achieved a fully automated booking flow — discovery, selection, payment confirmation.",
      "Deployed to Telegram with webhook integration for real-time interactions.",
    ],
  },
  maru: {
    slug: "maru",
    code: "LOG.002",
    title: "AutoVista — Full-Stack Car Marketplace",
    tag: "Web Dev · MERN",
    year: "2023",
    summary:
      "Production-grade virtual car showroom built end-to-end with MongoDB, Express, React, and Node.",
    image: projectAutovista,
    stack: ["React.js", "Node.js", "Express", "MongoDB", "Bootstrap"],
    overview:
      "A complete buy/sell/browse platform for cars with dynamic inventory, authentication, and a recommendation layer. Architected with RESTful APIs, a React frontend with state management, and MongoDB for flexible schema storage.",
    highlights: [
      "Designed RESTful APIs with Express.js and MongoDB Atlas.",
      "Built a responsive React frontend with cart, filters, and listing flows.",
      "Implemented JWT authentication and role-based access control.",
      "Deployed live on Vercel with CI/CD on GitHub.",
    ],
    links: [
      { label: "Live Site", href: "https://autovista.vercel.app/", icon: "external" },
      { label: "Source", href: "https://github.com/saisasir", icon: "github" },
    ],
  },
  critter: {
    slug: "critter",
    code: "LOG.003",
    title: "Autonomous Remote Operated Vehicle",
    tag: "Robotics · Embedded",
    year: "2024",
    summary:
      "ML-assisted ROV with real-time sensor fusion, wireless control, and computer-vision feedback.",
    image: projectRov,
    stack: ["Arduino", "Bluetooth Module", "Python", "OpenCV", "RF"],
    overview:
      "A four-wheeled remote-operated vehicle controlled over Bluetooth, with onboard sensors providing telemetry and an ML-assisted obstacle awareness layer. Built around an Arduino UNO with motor driver, custom chassis, and modular firmware.",
    highlights: [
      "Designed and prototyped the chassis, wiring, and power-distribution.",
      "Implemented a Bluetooth control protocol with mobile companion commands.",
      "Integrated motor-driver control with PWM speed regulation.",
      "Added a CV pipeline for obstacle awareness using OpenCV.",
    ],
  },
  web: {
    slug: "web",
    code: "LOG.004",
    title: "Fire Fighting Robot",
    tag: "Robotics · Embedded",
    year: "2023",
    summary:
      "Autonomous fire-detection robot with flame sensing, water-pump actuation, and motor control.",
    image: projectFire,
    stack: ["Arduino", "L298 Motor Driver", "Flame Sensor", "Water Pump", "C++"],
    overview:
      "An Arduino-based autonomous robot that detects flames using IR flame sensors and actuates a pump-fed water nozzle to extinguish them. Designed for rapid prototyping and demonstrating real-world embedded control loops.",
    highlights: [
      "Custom chassis with 4-wheel drive powered by 18650 cells.",
      "L298 motor driver controlled via PWM for differential steering.",
      "Flame sensor array with thresholded detection and angle estimation.",
      "Servo-aimed water pump with relay-driven activation.",
    ],
  },
};

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS[params.slug];
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Mission Log — Sai Sasir K" }] };
    const title = `${p.code} · ${p.title} — Sai Sasir K`;
    return {
      meta: [
        { title },
        { name: "description", content: p.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: p.summary },
        { property: "og:image", content: p.image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: p.image },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-stellar mb-4">
          ⏵ SIGNAL LOST · 404
        </p>
        <h1 className="text-3xl font-bold mb-2">Mission log not found</h1>
        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-6 font-mono text-xs uppercase tracking-[0.2em] text-stellar hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Return to base
        </Link>
      </div>
    </div>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData() as { project: Project };

  return (
    <article className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <Starfield density={100} />
        <div className="absolute inset-0 grid-mission opacity-30" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground hover:text-stellar transition-colors mb-12"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> All Mission Logs
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-[10px] tracking-[0.25em] text-stellar bg-stellar/10 border border-stellar/30 px-2 py-1">
            ⏵ {project.code}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            {project.tag} · {project.year}
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] text-glow-soft">
          {project.title}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
          {project.summary}
        </p>

        {project.links && (
          <div className="flex flex-wrap gap-3 mt-8">
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hud-corners inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono uppercase tracking-[0.2em] border border-stellar/30 hover:border-stellar hover:bg-stellar/5 transition-all"
              >
                {l.icon === "github" ? (
                  <Github className="w-3.5 h-3.5" />
                ) : (
                  <ExternalLink className="w-3.5 h-3.5" />
                )}
                {l.label}
              </a>
            ))}
          </div>
        )}

        <div className="mt-14 border border-stellar/20 bg-deep overflow-hidden relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover opacity-90"
          />
          <div className="absolute inset-0 scanlines opacity-15 pointer-events-none" />
          <div className="absolute top-3 left-3 right-3 flex justify-between font-mono text-[9px] uppercase tracking-[0.25em] text-stellar/70">
            <span>⏵ ARCHIVE · {project.code}</span>
            <span>{project.year}</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 mt-16">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-stellar mb-4">
                ⏵ Mission Brief
              </div>
              <p className="text-muted-foreground leading-relaxed text-base">
                {project.overview}
              </p>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-stellar mb-4">
                ⏵ Operational Highlights
              </div>
              <ul className="space-y-3">
                {project.highlights.map((h, i) => (
                  <li
                    key={h}
                    className="flex gap-4 text-muted-foreground border-l border-stellar/30 pl-5 py-1"
                  >
                    <span className="font-mono text-[10px] text-stellar/60 mt-1 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="border border-border bg-background/60 p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-stellar mb-4 pb-3 border-b border-border">
                Onboard Systems
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 border border-border text-foreground/90"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-20 pt-10 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground hover:text-stellar transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Return to base
          </Link>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-stellar px-5 py-2.5 text-xs font-mono uppercase tracking-[0.2em] text-background hover:bg-primary transition-all"
          >
            Open Comms
          </a>
        </div>
      </div>
    </article>
  );
}
