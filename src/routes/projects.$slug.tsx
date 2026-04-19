import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Starfield } from "@/components/Starfield";
import projectChatbot from "@/assets/project-chatbot.jpg";
import projectAutovista from "@/assets/project-autovista.jpg";
import projectFire from "@/assets/firefighter.jpg";
import projectRov from "@/assets/rov.jpg";

type Section = {
  heading: string;
  body: string;
};

type Project = {
  slug: string;
  code: string;
  title: string;
  tag: string;
  year: string;
  summary: string;
  image: string;
  stack: string[];
  role: string;
  duration: string;
  overview: string;
  sections: Section[];
  highlights: string[];
  links?: { label: string; href: string; icon?: "github" | "external" }[];
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
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-stellar mb-4">
          / 404
        </p>
        <h1 className="text-3xl font-bold mb-2">Project not found</h1>
        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-6 font-mono text-xs uppercase tracking-[0.2em] text-stellar hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to home
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
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <Starfield density={80} />
        <div className="absolute inset-0 grid-mission opacity-25" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground hover:text-stellar transition-colors mb-12"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> All Projects
        </Link>

        <div className="flex items-center gap-3 mb-6 flex-wrap">
          <span className="font-mono text-[10px] tracking-[0.25em] text-stellar bg-stellar/10 border border-stellar/30 px-2 py-1">
            / {project.code}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            {project.tag} · {project.year}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-glow-soft">
          {project.title}
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
          {project.summary}
        </p>

        {/* Meta strip */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-px bg-stellar/10 border border-stellar/20 max-w-2xl">
          <MetaCell label="Role" value={project.role} />
          <MetaCell label="Duration" value={project.duration} />
          <MetaCell label="Year" value={project.year} />
        </div>

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

        {/* Hero image — smaller, capped */}
        <div className="mt-12 border border-stellar/20 bg-deep overflow-hidden relative max-w-3xl mx-auto">
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-90"
            />
          </div>
          <div className="absolute inset-0 scanlines opacity-10 pointer-events-none" />
        </div>

        <div className="grid lg:grid-cols-3 gap-10 mt-16">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-stellar mb-4">
                / Overview
              </div>
              <p className="text-muted-foreground leading-relaxed text-base">
                {project.overview}
              </p>
            </div>

            {project.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-xl md:text-2xl font-semibold mb-3">
                  {s.heading}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {s.body}
                </p>
              </div>
            ))}

            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-stellar mb-4">
                / Key Contributions
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
            <div className="border border-border bg-background/60 p-5 sticky top-24">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-stellar mb-4 pb-3 border-b border-border">
                Tech Stack
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
            <ArrowLeft className="w-3.5 h-3.5" /> Back to home
          </Link>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-stellar px-5 py-2.5 text-xs font-mono uppercase tracking-[0.2em] text-background hover:bg-primary transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </article>
  );
}

function MetaCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-background/80 backdrop-blur-sm p-4">
      <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground mb-1.5">
        {label}
      </div>
      <div className="font-mono text-xs text-foreground/90 leading-snug">
        {value}
      </div>
    </div>
  );
}
