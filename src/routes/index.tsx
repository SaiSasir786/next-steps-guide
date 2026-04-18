import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Brain,
  Cpu,
  Bot,
  Cog,
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  GraduationCap,
  Award,
  Radio,
} from "lucide-react";
import { Section } from "@/components/Section";
import { Starfield } from "@/components/Starfield";
import spaceHero from "@/assets/space-hero.jpg";
import blackhole from "@/assets/blackhole.jpg";
import projectChatbot from "@/assets/project-chatbot.jpg";
import projectAutovista from "@/assets/project-autovista.jpg";
import projectFire from "@/assets/firefighter.jpg";
import projectRov from "@/assets/rov.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const expertise = [
  {
    icon: Brain,
    code: "GEN-AI",
    title: "Generative AI & LLMs",
    desc: "Fine-tuning foundation models, building RAG pipelines, prompt engineering, and deploying multi-modal AI systems at scale.",
    tags: ["LLaMA", "GPT-4", "Claude API", "RAG", "LoRA / PEFT"],
  },
  {
    icon: Cpu,
    code: "ML-ENG",
    title: "ML Engineering",
    desc: "End-to-end ML pipelines — from data ingestion and model training to production serving, monitoring, and continuous retraining.",
    tags: ["PyTorch", "TensorFlow", "MLflow", "W&B", "CUDA"],
  },
  {
    icon: Bot,
    code: "AGENTS",
    title: "AI Agents & Systems",
    desc: "Designing autonomous agent architectures, multi-agent workflows, tool-integrated pipelines, and agentic reasoning systems.",
    tags: ["LangChain", "LlamaIndex", "AutoGen", "CrewAI", "Tool Use"],
  },
  {
    icon: Cog,
    code: "ROBO",
    title: "Robotics & Embodied AI",
    desc: "Intelligent robotic systems that perceive, reason, and act — bridging physical and digital intelligence through sensor fusion and CV.",
    tags: ["ROS", "OpenCV", "SLAM", "Computer Vision", "Sensor Fusion"],
  },
];

const projects = [
  {
    slug: "travel-bot",
    code: "LOG.001",
    title: "AI Travel Booking Assistant",
    desc: "NLP-powered conversational agent with Dialogflow + Telegram API and a live MySQL backend.",
    tag: "Gen-AI",
    image: projectChatbot,
    stack: ["Dialogflow", "PHP", "MySQL", "Telegram API"],
  },
  {
    slug: "maru",
    code: "LOG.002",
    title: "AutoVista — MERN Marketplace",
    desc: "Production-grade virtual car showroom built end-to-end with the MERN stack.",
    tag: "Web Dev",
    image: projectAutovista,
    stack: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    slug: "critter",
    code: "LOG.003",
    title: "Autonomous ROV",
    desc: "ML-assisted remote operated vehicle with real-time sensor feedback and Bluetooth control.",
    tag: "Robotics",
    image: projectRov,
    stack: ["Arduino", "OpenCV", "Bluetooth", "Python"],
  },
  {
    slug: "web",
    code: "LOG.004",
    title: "Fire Fighting Robot",
    desc: "Autonomous fire-detection robot with flame sensors, water pump actuation, and motor control.",
    tag: "Robotics",
    image: projectFire,
    stack: ["Arduino", "L298 Driver", "Sensors", "C++"],
  },
];

const stack = [
  {
    title: "Gen-AI & LLMs",
    items: ["Hugging Face", "LangChain", "LlamaIndex", "OpenAI API", "Claude API", "RAG", "LoRA / PEFT", "Fine-tuning"],
  },
  {
    title: "ML Frameworks",
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "FAISS", "ONNX", "CUDA", "TensorRT"],
  },
  {
    title: "MLOps & Infra",
    items: ["MLflow", "Weights & Biases", "Docker", "Kubernetes", "AWS SageMaker", "GCP Vertex AI", "FastAPI"],
  },
  {
    title: "Languages",
    items: ["Python", "C++", "Java", "JavaScript", "SQL", "Bash"],
  },
  {
    title: "Robotics & Vision",
    items: ["ROS", "OpenCV", "SLAM", "Arduino", "Raspberry Pi", "Sensor Fusion"],
  },
  {
    title: "Web & Data",
    items: ["React.js", "Node.js", "MongoDB", "PostgreSQL", "Apache Spark", "AWS", "Git"],
  },
];

function Home() {
  return (
    <>
      {/* ============ HERO — DEEP SPACE ============ */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        {/* Layered cosmic background */}
        <div className="absolute inset-0">
          <img
            src={spaceHero}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover opacity-60 animate-fade-in"
          />
          <Starfield density={200} />
          <div className="absolute inset-0 grid-mission opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background pointer-events-none" />
          <div className="absolute inset-0 vignette pointer-events-none" />
        </div>

        {/* Floating black hole — far right */}
        <div className="absolute right-[-15%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] hidden lg:block opacity-70 pointer-events-none animate-drift">
          <img
            src={blackhole}
            alt=""
            aria-hidden
            className="w-full h-full object-contain animate-spin-slow"
          />
        </div>

        {/* HUD top-bar */}
        <div className="absolute top-20 inset-x-0 px-6 lg:px-10 hidden md:flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-stellar/60 z-10">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-stellar animate-pulse-stellar" />
              SECTOR · 04 / EARTH
            </span>
            <span className="text-muted-foreground">VEC 0.998c</span>
          </div>
          <div className="flex items-center gap-4">
            <span>SYS · NOMINAL</span>
            <span className="text-muted-foreground">REL ⏵ 2026.04</span>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full z-10">
          <div className="max-w-4xl">
            <div
              className="inline-flex items-center gap-3 mb-8 animate-fade-up"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-stellar">
                ⏵ TRANSMISSION RECEIVED
              </span>
              <span className="font-mono text-[10px] text-muted-foreground">
                ID · KS-9925
              </span>
            </div>

            <p
              className="font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Mission Log · Personnel
            </p>

            <h1
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold leading-[0.88] tracking-tighter animate-fade-up text-glow-soft"
              style={{ animationDelay: "0.2s" }}
            >
              SAI
              <br />
              <span className="text-gradient-stellar">SASIR</span>
              <span className="text-stellar/60"> · K</span>
            </h1>

            <div
              className="mt-10 max-w-2xl animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex items-start gap-3 font-mono text-sm text-muted-foreground leading-relaxed">
                <span className="text-stellar mt-1 shrink-0">⏵</span>
                <p>
                  <span className="text-foreground">
                    Gen-AI & ML Engineer.
                  </span>{" "}
                  Building intelligent systems on the edge of what's possible —
                  large language models, RAG pipelines, autonomous agents, and
                  embodied AI. Bridging research and production with the
                  precision of a mission-critical launch sequence.
                </p>
              </div>
            </div>

            <div
              className="mt-12 flex flex-wrap items-center gap-3 animate-fade-up"
              style={{ animationDelay: "0.55s" }}
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-sm bg-stellar px-7 py-3.5 text-xs font-mono uppercase tracking-[0.2em] text-background hover:bg-primary transition-all shadow-[0_0_40px_oklch(0.78_0.15_65/0.4)]"
              >
                Initiate Mission
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="hud-corners inline-flex items-center gap-2 px-7 py-3.5 text-xs font-mono uppercase tracking-[0.2em] border border-stellar/30 hover:border-stellar hover:bg-stellar/5 transition-all"
              >
                Open Comms
              </a>
            </div>

            {/* Telemetry strip */}
            <div
              className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-stellar/10 border border-stellar/20 animate-fade-up"
              style={{ animationDelay: "0.7s" }}
            >
              {[
                { num: "04+", label: "Missions" },
                { num: "AWS", label: "Certified" },
                { num: "8.20", label: "CGPA" },
                { num: "VIT '25", label: "Origin" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-background/80 backdrop-blur-sm p-5 hover:bg-stellar/5 transition-colors group"
                >
                  <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
                    {s.label}
                  </div>
                  <div className="font-display text-2xl font-bold text-stellar text-glow group-hover:scale-105 transition-transform origin-left inline-block">
                    {s.num}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom HUD */}
        <div className="absolute bottom-6 inset-x-0 px-6 lg:px-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground z-10">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 border border-stellar animate-pulse-stellar" />
            Scroll · Continue Transmission
          </span>
          <span className="hidden md:inline">⌁ 9925.04.18 ⌁</span>
        </div>
      </section>

      {/* ============ EXPERTISE ============ */}
      <Section
        id="expertise"
        index="01"
        eyebrow="Mission Capabilities"
        title="Operational Domains"
        description="Core systems where I architect, build, and deploy intelligent infrastructure — across the AI, ML, and robotics stack."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stellar/10 border border-stellar/20">
          {expertise.map(({ icon: Icon, code, title, desc, tags }) => (
            <div
              key={title}
              className="group relative bg-background p-8 lg:p-10 hover:bg-stellar/5 transition-all overflow-hidden"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 border border-stellar/30 flex items-center justify-center group-hover:border-stellar group-hover:bg-stellar/10 transition-all">
                  <Icon className="w-5 h-5 text-stellar" />
                </div>
                <span className="font-mono text-[10px] tracking-[0.2em] text-stellar/60">
                  ⏵ {code}
                </span>
              </div>
              <h3 className="text-2xl font-semibold mb-3">{title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                {desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 border border-border text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ============ PROJECTS ============ */}
      <Section
        id="projects"
        index="02"
        eyebrow="Mission Logs"
        title="Selected Operations"
        description="Field reports from completed missions — AI systems, full-stack platforms, and autonomous robotics."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="group relative border border-border hover:border-stellar/50 bg-background overflow-hidden transition-all"
            >
              <div className="aspect-[16/9] overflow-hidden bg-deep relative">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-0 scanlines opacity-20 pointer-events-none" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em]">
                  <span className="text-stellar bg-background/80 backdrop-blur px-2 py-1 border border-stellar/30">
                    ⏵ {p.code}
                  </span>
                  <span className="text-muted-foreground bg-background/80 backdrop-blur px-2 py-1">
                    {p.tag}
                  </span>
                </div>
              </div>
              <div className="p-6 lg:p-8 relative">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-semibold group-hover:text-stellar transition-colors">
                    {p.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-stellar group-hover:-translate-y-1 group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                    >
                      <span className="text-stellar/40 mr-1">·</span>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* ============ STACK ============ */}
      <Section
        id="stack"
        index="03"
        eyebrow="Spacecraft Systems"
        title="Tech Stack"
        description="Onboard instruments — the AI/ML ecosystem that powers every mission."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stellar/10 border border-stellar/20">
          {stack.map((cat, i) => (
            <div
              key={cat.title}
              className="bg-background p-6 lg:p-8 hover:bg-stellar/5 transition-all"
            >
              <div className="flex items-center justify-between mb-5">
                <h4 className="font-mono text-[11px] uppercase tracking-[0.25em] text-stellar">
                  {cat.title}
                </h4>
                <span className="font-mono text-[10px] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")} / {String(stack.length).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2.5 py-1 bg-muted/50 border border-border text-foreground/90 font-mono"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ============ ABOUT — CREW DOSSIER ============ */}
      <Section
        id="about"
        index="04"
        eyebrow="Crew Dossier"
        title="Personnel File"
      >
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-stellar mb-4">
              ⏵ ABSTRACT · CLEARANCE · ALPHA
            </div>
            <p className="text-base md:text-lg text-foreground/85 leading-relaxed">
              Gen-AI & ML Engineer with deep specialization in large language
              models, generative AI systems, and intelligent automation. I
              architect and deploy AI solutions that bridge cutting-edge
              research and production reliability — focused on{" "}
              <span className="text-stellar">LLM fine-tuning</span>,{" "}
              <span className="text-stellar">RAG pipelines</span>, and{" "}
              <span className="text-stellar">autonomous agents</span>.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Background in AI & Robotics gives me a unique perspective — I
              think about intelligence from both software and hardware angles.
              The most impactful AI isn't built in isolation, but through
              rigorous engineering, domain collaboration, and a relentless
              focus on real-world outcomes.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              When I'm not deep in model training runs, I'm exploring the
              intersection of embodied AI and language models — chasing
              questions at the boundary of what machines can know.
            </p>

            <blockquote className="border-l-2 border-stellar pl-6 mt-10 italic text-stellar/80 font-display text-lg">
              "We used to look up at the sky and wonder at our place in the
              stars. Now we just look down and worry about our place in the
              dirt."
              <footer className="mt-2 not-italic font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                — Cooper · Interstellar
              </footer>
            </blockquote>
          </div>

          <div className="space-y-3">
            <DossierCard icon={GraduationCap} label="Origin">
              <div className="font-display text-foreground font-semibold">
                Vellore Institute of Technology
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                B.Tech · AI & Robotics · 2021–2025
              </div>
              <div className="font-mono text-[11px] text-stellar mt-2">
                CGPA · 8.20 / 10
              </div>
            </DossierCard>
            <DossierCard icon={Award} label="Certifications">
              <ul className="text-sm text-muted-foreground space-y-1.5 font-mono">
                <li>⏵ AWS Cloud Practitioner</li>
                <li>⏵ MERN Full-Stack — Ethnus</li>
                <li>⏵ Database Mgmt — U. Colorado</li>
              </ul>
            </DossierCard>
            <DossierCard icon={Radio} label="Status">
              <div className="font-mono text-sm text-foreground flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-stellar animate-pulse-stellar" />
                AVAILABLE FOR MISSIONS
              </div>
              <div className="font-mono text-[10px] text-muted-foreground mt-2">
                India · Remote-friendly · Global ops
              </div>
            </DossierCard>
          </div>
        </div>
      </Section>

      {/* ============ CONTACT — COMMS ============ */}
      <section
        id="contact"
        className="relative scroll-mt-20 py-24 lg:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <Starfield density={80} />
          <div className="absolute inset-0 grid-mission opacity-30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="hud-corners border border-stellar/30 bg-background/60 backdrop-blur-sm p-10 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none scanlines opacity-10" />
            <div className="relative">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="w-12 h-px bg-stellar" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-stellar">
                  ⏵ Open Channel · 05
                </span>
                <span className="w-12 h-px bg-stellar" />
              </div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-glow-soft">
                Building something
                <br />
                at the <span className="text-gradient-stellar">edge</span>?
              </h2>
              <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
                LLM-powered products. ML infrastructure. Experimental agents.
                If you're working at the frontier — let's talk.
              </p>

              <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
                <ContactLink href="mailto:saisasir99@gmail.com" icon={Mail}>
                  saisasir99@gmail.com
                </ContactLink>
                <ContactLink
                  href="https://github.com/saisasir"
                  icon={Github}
                  external
                >
                  github.com/saisasir
                </ContactLink>
                <ContactLink
                  href="https://www.linkedin.com/in/saisasirkosuri/"
                  icon={Linkedin}
                  external
                >
                  linkedin/saisasirkosuri
                </ContactLink>
              </div>

              <div className="mt-12 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground flex items-center justify-center gap-2">
                <span className="animate-blink text-stellar">▋</span>
                Awaiting transmission
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function DossierCard({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-border bg-background/60 p-5 hover:border-stellar/40 transition-colors">
      <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border">
        <Icon className="w-3.5 h-3.5 text-stellar" />
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          {label}
        </span>
      </div>
      {children}
    </div>
  );
}

function ContactLink({
  href,
  icon: Icon,
  external,
  children,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group inline-flex items-center gap-3 border border-border bg-background/80 backdrop-blur px-5 py-3 text-xs hover:border-stellar hover:text-stellar transition-all font-mono"
    >
      <Icon className="w-3.5 h-3.5" />
      <span className="tracking-wider">{children}</span>
    </a>
  );
}
