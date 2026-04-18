import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import projectChatbot from "@/assets/project-chatbot.jpg";
import projectAutovista from "@/assets/project-autovista.jpg";
import projectFire from "@/assets/firefighter.jpg";
import projectRov from "@/assets/rov.jpg";

type Project = {
  slug: string;
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
    if (!p) return { meta: [{ title: "Project — Sai Sasir K" }] };
    const title = `${p.title} — Sai Sasir K`;
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
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4">
          404
        </p>
        <h1 className="text-3xl font-bold mb-2">Project not found</h1>
        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-6 text-primary hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back home
        </Link>
      </div>
    </div>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();

  return (
    <article className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> All projects
        </Link>

        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4">
          {project.tag} · {project.year}
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
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
                className="inline-flex items-center gap-2 rounded-full border border-border-bright px-5 py-2.5 text-sm font-medium hover:bg-surface transition-all"
              >
                {l.icon === "github" ? (
                  <Github className="w-4 h-4" />
                ) : (
                  <ExternalLink className="w-4 h-4" />
                )}
                {l.label}
              </a>
            ))}
          </div>
        )}

        <div className="mt-12 rounded-2xl overflow-hidden border border-border bg-muted">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-10 mt-16">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.overview}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
              <ul className="space-y-3">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-muted-foreground">
                    <span className="text-primary mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-4">
                Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[11px] px-2.5 py-1 rounded-md border border-border text-foreground/90"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-20 pt-10 border-t border-border flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all projects
          </Link>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-all"
          >
            Get in touch
          </a>
        </div>
      </div>
    </article>
  );
}
