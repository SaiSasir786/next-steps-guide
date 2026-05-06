import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, ExternalLink, Github, Play } from "lucide-react";
import projectChatbot from "@/assets/project-chatbot.jpg";
import projectAutovista from "@/assets/project-autovista.jpg";
import projectFire from "@/assets/firefighter.jpg";
import projectRov from "@/assets/rov.jpg";

type Media =
  | { type: "image"; src: string; alt?: string; caption?: string; aspect?: string }
  | { type: "gif"; src: string; alt?: string; caption?: string; aspect?: string }
  | { type: "youtube"; id: string; title?: string; caption?: string };

type Section = {
  heading: string;
  body: string;
  media?: Media[]; // optional media displayed under this section
};

type Project = {
  slug: string;
  code: string;
  title: string;
  tag: string;
  year: string;
  summary: string;
  image: string; // hero
  stack: string[];
  role: string; // kept in data for reference, not rendered
  duration: string; // kept in data for reference, not rendered
  overview: string;
  overviewMedia?: Media[]; // media right under overview
  gallery?: Media[]; // end-of-page gallery
  sections: Section[];
  highlights: string[];
  links?: { label: string; href: string; icon?: "github" | "external" | "youtube" }[];
};

const PROJECTS: Record<string, Project> = {
  "travel-bot": {
    slug: "travel-bot",
    code: "01",
    title: "AI Travel Booking Assistant",
    tag: "Gen-AI · Conversational AI",
    year: "2024",
    role: "Solo developer — NLP, backend, integration",
    duration: "8 weeks",
    summary:
      "An end-to-end conversational booking system that handles natural-language travel requests on Telegram with a live database backend.",
    image: projectChatbot,
    stack: ["Dialogflow", "JavaScript", "PHP", "MySQL", "Telegram Bot API"],
    overview:
      "Travel-Bot is a conversational AI agent that automates the entire flight and hotel booking workflow inside Telegram. Users chat in natural language and the agent handles intent recognition, slot-filling, database lookups, and confirmation — without ever talking to a human.",
    sections: [
      {
        heading: "Problem",
        body: "Most online booking flows rely on rigid forms and multi-step UIs. The goal was to collapse this into a single conversational thread — where users could say 'book me a flight from Hyderabad to Delhi next Friday' and have the system do the rest.",
      },
      {
        heading: "Approach",
        body: "I built the NLU layer in Google Dialogflow, designing intents for booking, modification, cancellation, and FAQs. Each intent extracts entities (dates, cities, passenger counts) and posts them to a PHP REST API which validates against a normalized MySQL schema and returns booking confirmations.",
      },
      {
        heading: "Conversational Flow",
        body: "The bot supports multi-turn slot-filling — if a user provides a partial request, Dialogflow prompts them for missing fields. Context is preserved across turns, so users can correct, modify, or cancel a booking in-line. Confirmation messages are sent via the Telegram Bot API webhook.",
      },
      {
        heading: "Backend & Data",
        body: "PHP endpoints handle authentication, booking transactions, and seat-availability checks. The MySQL schema is normalized across users, bookings, flights, and payments — with foreign keys ensuring referential integrity. The webhook layer is stateless and horizontally scalable.",
      },
    ],
    highlights: [
      "Engineered intent recognition and entity extraction with Google Dialogflow.",
      "Designed a normalized MySQL schema with PHP REST APIs for booking management.",
      "Built a fully automated booking flow — discovery, selection, and confirmation.",
      "Integrated with the Telegram Bot API via webhook for real-time interactions.",
    ],
  },
  maru: {
    slug: "maru",
    code: "02",
    title: "AutoVista — Full-Stack Car Marketplace",
    tag: "Web Dev · MERN",
    year: "2023",
    role: "Full-stack developer — MERN, UI/UX, deployment",
    duration: "12 weeks",
    summary:
      "A production-grade virtual car showroom built end-to-end with MongoDB, Express, React, and Node.",
    image: projectAutovista,
    stack: ["React.js", "Node.js", "Express", "MongoDB", "Bootstrap"],
    overview:
      "AutoVista is a web application designed to enhance the car-buying experience by offering a digital showroom where users can explore various models. The platform provides detailed information, specifications, and images of vehicles — letting potential buyers research and compare cars conveniently online without visiting a physical showroom.",
    sections: [
      {
        heading: "Overview & Role",
        body: "I built AutoVista end-to-end as a solo project — designing the data model, building RESTful APIs in Express, the React frontend with state management, and deploying it live on Vercel with a CI/CD pipeline on GitHub.",
      },
      {
        heading: "Home Page that Invites Interaction",
        body: "The home page features a sleek dark design with a moving background of a car driving — creating a dynamic, engaging atmosphere. A prominent search bar lets users find car models by name or type, with quick filters for new, used, and electric vehicles. The top navigation gives instant access to categories, user profiles, and listings.",
      },
      {
        heading: "Latest Launches",
        body: "After researching the best methods for showcasing new car models, I built a 'Latest Launches' section that highlights the newest releases — like the 2024 Volvo S60 Recharge, Mitsubishi Eclipse Cross, and BMW X3 M. I used React's component model to render individual car pages dynamically, ensuring a streamlined and scalable system for adding inventory.",
      },
      {
        heading: "Browse by Brand",
        body: "To help users easily find their preferred vehicles, the 'Shop your favorite brand' section features a curated grid of popular brands — Audi, BMW, Lamborghini, Ford, Honda, Hyundai, Jaguar, Kia, Mercedes-Benz, Porsche, Toyota, and Volkswagen. The organized layout lets users navigate to a brand and explore available models in one click.",
      },
      {
        heading: "Why Choose AutoVista?",
        body: "Transparent pricing — no hidden fees or surprises. Time-saving filters and search to find the right car quickly. Flexible shopping at the user's own pace, from anywhere. Quick sign-up with personalized car recommendations and saved listings.",
      },
      {
        heading: "Tech & Deployment",
        body: "Frontend in React with Bootstrap for responsive layouts. Backend in Node.js + Express with MongoDB Atlas as the data store. JWT authentication and role-based access control for buyers, sellers, and admins. Deployed live on Vercel with automatic builds on every push to GitHub.",
      },
    ],
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
    code: "03",
    title: "Autonomous Remote Operated Vehicle",
    tag: "Robotics · Embedded",
    year: "2024",
    role: "Hardware + firmware — chassis, electronics, CV pipeline",
    duration: "10 weeks",
    summary:
      "An ML-assisted ROV with real-time sensor fusion, wireless control, and computer-vision feedback.",
    image: projectRov,
    stack: ["Arduino", "Bluetooth Module", "Python", "OpenCV", "RF"],
    overview:
      "A four-wheeled remote-operated vehicle controlled over Bluetooth, with onboard sensors providing telemetry and an ML-assisted obstacle awareness layer. Built around an Arduino UNO with a motor driver, custom chassis, and modular firmware.",
    sections: [
      {
        heading: "Problem",
        body: "The goal was to build a low-cost, modular ROV platform that could be controlled wirelessly and extended with ML-based perception — useful for inspection, prototyping, and learning.",
      },
      {
        heading: "Mechanical Design",
        body: "I designed and prototyped the chassis from scratch — a four-wheel-drive layout powered by 18650 lithium cells, with the motor driver and microcontroller mounted on a vibration-dampened deck. The chassis is rigid enough for off-road driving while remaining lightweight.",
      },
      {
        heading: "Control & Wireless Protocol",
        body: "Control is handled via a Bluetooth module paired with a mobile companion app. I designed a compact command protocol that maps directional inputs and speed adjustments to PWM signals on the L298 motor driver — supporting differential steering for tight turns.",
      },
      {
        heading: "Computer Vision Layer",
        body: "An OpenCV pipeline (running on a host machine, with a streaming camera onboard) detects obstacles and drivable paths in real-time. This gives the operator a 'second pair of eyes' and lays groundwork for autonomous navigation in future iterations.",
      },
    ],
    highlights: [
      "Designed and prototyped the chassis, wiring, and power-distribution.",
      "Implemented a Bluetooth control protocol with mobile companion commands.",
      "Integrated motor-driver control with PWM speed regulation.",
      "Added a CV pipeline for obstacle awareness using OpenCV.",
    ],
  },
  web: {
    slug: "web",
    code: "04",
    title: "Fire Fighting Robot",
    tag: "Robotics · Embedded",
    year: "2023",
    role: "Hardware + firmware — sensors, actuators, control loop",
    duration: "6 weeks",
    summary:
      "An autonomous fire-detection robot with flame sensing, water-pump actuation, and motor control.",
    image: projectFire,
    stack: ["Arduino", "L298 Motor Driver", "Flame Sensor", "Water Pump", "C++"],
    overview:
      "An Arduino-based autonomous robot that detects flames using IR flame sensors and actuates a pump-fed water nozzle to extinguish them. Designed for rapid prototyping and demonstrating real-world embedded control loops.",
    sections: [
      {
        heading: "Problem",
        body: "Early fire detection and suppression in confined spaces (server rooms, kitchens, labs) is critical. The aim was to prototype a low-cost autonomous unit that can patrol, detect a flame, navigate to it, and suppress it without human input.",
      },
      {
        heading: "Sensing & Detection",
        body: "An array of three IR flame sensors mounted at different angles provides directional flame detection. The firmware applies thresholding and angle estimation to compute a heading toward the flame source — giving the robot enough information to drive toward it accurately.",
      },
      {
        heading: "Drive & Suppression",
        body: "The robot uses an L298 motor driver controlled via PWM for differential steering on a 4-wheel drive chassis powered by 18650 cells. Once aligned with the flame, a relay-driven 5V water pump activates the suppression nozzle, which is aimed using a small servo for fine adjustment.",
      },
      {
        heading: "Control Loop",
        body: "The main loop runs at ~50 Hz on an Arduino UNO — sampling the sensor array, updating motor commands, and managing the pump activation state machine. The firmware is written in modular C++ for easy extension with additional sensors or actuators.",
      },
    ],
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
        <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
          404
        </p>
        <h1 className="text-3xl font-medium tracking-tight mb-4">
          Project not found
        </h1>
        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-2 text-sm text-foreground hover:text-stellar transition-colors link-underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>
      </div>
    </div>
  ),
  component: ProjectPage,
});

function MediaBlock({ media }: { media: Media }) {
  if (media.type === "youtube") {
    return (
      <figure className="rounded-xl border border-border bg-deep overflow-hidden">
        <div className="relative aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${media.id}`}
            title={media.title ?? "YouTube video"}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
        {media.caption && (
          <figcaption className="px-4 py-2.5 text-xs text-muted-foreground border-t border-border">
            {media.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure className="rounded-xl border border-border bg-deep overflow-hidden">
      <div className={`overflow-hidden ${media.aspect ?? "aspect-[16/9]"}`}>
        <img
          src={media.src}
          alt={media.alt ?? ""}
          loading="lazy"
          className="w-full h-full object-cover opacity-95"
        />
      </div>
      {media.caption && (
        <figcaption className="px-4 py-2.5 text-xs text-muted-foreground border-t border-border">
          {media.caption}
        </figcaption>
      )}
    </figure>
  );
}

function MediaGrid({ items }: { items: Media[] }) {
  if (!items.length) return null;
  return (
    <div
      className={`mt-6 grid gap-4 ${
        items.length === 1 ? "grid-cols-1" : "sm:grid-cols-2"
      }`}
    >
      {items.map((m, i) => (
        <MediaBlock key={i} media={m} />
      ))}
    </div>
  );
}

function ProjectPage() {
  const { project } = Route.useLoaderData() as { project: Project };

  return (
    <article className="relative pt-32 pb-24">
      <div className="absolute inset-0 ambient-top pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[12px] text-muted-foreground hover:text-foreground transition-colors mb-14"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> All projects
        </Link>

        <div className="flex items-center gap-3 mb-6 text-[11px] text-muted-foreground font-mono">
          <span className="tabular-nums">/ {project.code}</span>
          <span className="w-1 h-1 rounded-full bg-border-bright" />
          <span>{project.tag}</span>
          <span className="w-1 h-1 rounded-full bg-border-bright" />
          <span className="tabular-nums">{project.year}</span>
        </div>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-[-0.02em] leading-[1.05] text-foreground">
          {project.title}
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
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
                className="inline-flex items-center gap-2 rounded-full border border-border-bright px-5 py-2.5 text-sm text-foreground hover:bg-surface transition-colors"
              >
                {l.icon === "github" ? (
                  <Github className="w-4 h-4" />
                ) : l.icon === "youtube" ? (
                  <Play className="w-4 h-4" />
                ) : (
                  <ExternalLink className="w-4 h-4" />
                )}
                {l.label}
              </a>
            ))}
          </div>
        )}

        {/* Hero image */}
        <div className="mt-14 rounded-xl border border-border bg-deep overflow-hidden">
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-95"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mt-20">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Overview
              </p>
              <p className="text-foreground/90 leading-relaxed text-base md:text-lg">
                {project.overview}
              </p>
              {project.overviewMedia && <MediaGrid items={project.overviewMedia} />}
            </div>

            {project.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4 text-foreground">
                  {s.heading}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {s.body}
                </p>
                {s.media && <MediaGrid items={s.media} />}
              </div>
            ))}

            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-5">
                Key Contributions
              </p>
              <ul className="space-y-4">
                {project.highlights.map((h, i) => (
                  <li key={h} className="flex gap-5 text-foreground/90">
                    <span className="font-mono text-[11px] text-stellar tabular-nums mt-1.5 flex-shrink-0 w-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.gallery && project.gallery.length > 0 && (
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-5">
                  Gallery
                </p>
                <MediaGrid items={project.gallery} />
              </div>
            )}
          </div>

          <aside className="space-y-4">
            <div className="rounded-xl border border-border bg-surface/40 p-6 sticky top-24">
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-4 pb-3 border-b border-border">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2.5 py-1 rounded-md bg-surface border border-border text-foreground/85"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-24 pt-10 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
          >
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            Get in touch
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </article>
  );
}
