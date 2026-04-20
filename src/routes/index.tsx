import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  GraduationCap,
  Award,
  Briefcase,
  Download,
} from "lucide-react";
import { Section } from "@/components/Section";
import { Starfield } from "@/components/Starfield";
import { BootSequence } from "@/components/BootSequence";
import { StatCounter } from "@/components/StatCounter";
import portrait from "@/assets/portrait.jpg";
import projectChatbot from "@/assets/project-chatbot.jpg";
import projectAutovista from "@/assets/project-autovista.jpg";
import projectFire from "@/assets/firefighter.jpg";
import projectRov from "@/assets/rov.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const expertise = [
  {
    code: "01",
    title: "Generative AI & LLMs",
    desc: "Fine-tuning foundation models, building RAG pipelines, prompt engineering, and deploying multi-modal systems at production scale.",
    tags: ["LLaMA", "GPT-4", "Claude", "RAG", "LoRA / PEFT"],
  },
  {
    code: "02",
    title: "Machine Learning Engineering",
    desc: "End-to-end ML pipelines — from data ingestion and model training to production serving, monitoring, and continuous retraining.",
    tags: ["PyTorch", "TensorFlow", "MLflow", "W&B", "CUDA"],
  },
  {
    code: "03",
    title: "AI Agents & Autonomous Systems",
    desc: "Designing autonomous agent architectures, multi-agent workflows, tool-integrated pipelines, and agentic reasoning systems.",
    tags: ["LangChain", "LlamaIndex", "AutoGen", "CrewAI", "Tool Use"],
  },
  {
    code: "04",
    title: "Robotics & Embodied AI",
    desc: "Intelligent robotic systems that perceive, reason, and act — bridging physical and digital intelligence through CV and sensor fusion.",
    tags: ["ROS", "OpenCV", "SLAM", "Computer Vision", "Sensor Fusion"],
  },
];

const projects = [
  {
    slug: "travel-bot",
    code: "01",
    title: "AI Travel Booking Assistant",
    desc: "NLP-powered conversational agent built with Dialogflow + Telegram API, backed by a normalized MySQL data layer.",
    tag: "Generative AI",
    year: "2024",
    image: projectChatbot,
    stack: ["Dialogflow", "PHP", "MySQL", "Telegram API"],
  },
  {
    slug: "maru",
    code: "02",
    title: "AutoVista — Full-Stack Marketplace",
    desc: "Production-grade virtual car showroom built end-to-end with React, Node, Express and MongoDB.",
    tag: "Web Engineering",
    year: "2023",
    image: projectAutovista,
    stack: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    slug: "critter",
    code: "03",
    title: "Autonomous Remote-Operated Vehicle",
    desc: "ML-assisted ROV with real-time sensor feedback, custom control protocol, and OpenCV perception.",
    tag: "Robotics",
    year: "2024",
    image: projectRov,
    stack: ["Arduino", "OpenCV", "Bluetooth", "Python"],
  },
  {
    slug: "web",
    code: "04",
    title: "Autonomous Fire-Fighting Robot",
    desc: "Embedded fire-detection robot with flame-sensor array, water-pump actuation, and PID-style motor control.",
    tag: "Robotics",
    year: "2023",
    image: projectFire,
    stack: ["Arduino", "L298 Driver", "C++", "Sensors"],
  },
];

const stack = [
  {
    title: "Generative AI & LLMs",
    items: ["Hugging Face", "LangChain", "LlamaIndex", "OpenAI", "Anthropic", "RAG", "LoRA / PEFT", "Fine-tuning"],
  },
  {
    title: "ML Frameworks",
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "FAISS", "ONNX", "CUDA", "TensorRT"],
  },
  {
    title: "MLOps & Infrastructure",
    items: ["MLflow", "Weights & Biases", "Docker", "Kubernetes", "AWS SageMaker", "Vertex AI", "FastAPI"],
  },
  {
    title: "Languages",
    items: ["Python", "C++", "Java", "TypeScript", "SQL", "Bash"],
  },
  {
    title: "Robotics & Vision",
    items: ["ROS", "OpenCV", "SLAM", "Arduino", "Raspberry Pi", "Sensor Fusion"],
  },
  {
    title: "Web & Data",
    items: ["React", "Node.js", "MongoDB", "PostgreSQL", "Apache Spark", "AWS", "Git"],
  },
];

function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative min-h-[94vh] flex items-center pt-32 pb-20 overflow-hidden cosmos-bg">
        {/* Layered backdrop: stars → grid → ambient glow */}
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_30%,black,transparent_85%)]">
          <Starfield density={160} />
        </div>
        <div className="absolute inset-0 grid-hairline opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent_75%)]" />
        <div className="absolute inset-0 ambient-top pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 w-full">
          {/* HUD strip — coordinates / role / status */}
          <div
            className="hidden md:flex items-center gap-5 mb-12 text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground animate-fade-up"
          >
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-stellar" />
              17.385° N · 78.486° E
            </span>
            <span className="h-px w-8 bg-border" />
            <span>Gen-AI · ML Engineer</span>
            <span className="h-px w-8 bg-border" />
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-beacon animate-pulse-soft" />
              Currently available
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-9">
              <div
                className="md:hidden inline-flex items-center gap-2.5 mb-8 animate-fade-up rounded-full border border-border bg-surface/40 backdrop-blur-sm pl-2 pr-4 py-1.5"
              >
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-stellar/15">
                  <span className="w-1.5 h-1.5 rounded-full bg-stellar animate-pulse-soft" />
                </span>
                <span className="text-[12px] text-foreground/80">
                  Available for Gen-AI &amp; ML roles
                </span>
              </div>

              <h1
                className="font-serif font-normal text-[44px] sm:text-6xl md:text-7xl lg:text-[92px] leading-[1.02] tracking-[-0.025em] text-foreground animate-fade-up"
                style={{ animationDelay: "0.05s" }}
              >
                Building intelligent
                <br />
                systems that <em className="italic font-serif text-stellar">think</em>,
                <br />
                reason, and ship.
              </h1>

              <div
                className="mt-10 max-w-2xl animate-fade-up"
                style={{ animationDelay: "0.15s" }}
              >
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  I’m{" "}
                  <span className="text-foreground">Sai Sasir Kosuri</span> — a
                  Generative AI &amp; Machine Learning Engineer. I design and
                  ship production AI: large language models, retrieval-augmented
                  systems, and autonomous agents — grounded in a background of
                  robotics and full-stack engineering.
                </p>
              </div>

              <div
                className="mt-12 flex flex-wrap items-center gap-3 animate-fade-up"
                style={{ animationDelay: "0.25s" }}
              >
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/90 transition-colors"
                >
                  View selected work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border-bright px-6 py-3 text-sm font-medium text-foreground hover:bg-surface transition-colors"
                >
                  Get in touch
                </a>
              </div>
            </div>

            <div className="lg:col-span-3 hidden lg:block animate-fade-up" style={{ animationDelay: "0.35s" }}>
              <div className="border-l border-border pl-6 space-y-7">
                <Stat label="Experience" value="3+ yrs" />
                <Stat label="Education" value="B.Tech" sub="AI &amp; Robotics, VIT" />
                <Stat label="Certified" value="AWS" sub="Cloud Practitioner" />
                <Stat label="Based in" value="India" sub="Open to remote" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WORK ============ */}
      <Section
        id="work"
        index="01 / 04"
        eyebrow="Selected Work"
        title="Recent projects across AI, full-stack, and robotics."
        description="A focused selection of systems I’ve designed and shipped end-to-end — from research prototype to production deployment."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="group relative rounded-xl border border-border bg-surface/40 hover:bg-surface hover:border-border-bright overflow-hidden lift"
            >
              <div className="aspect-[16/10] overflow-hidden bg-deep relative max-h-52">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
              </div>
              <div className="p-6 lg:p-7">
                <div className="flex items-center justify-between mb-4 text-[11px] text-muted-foreground font-mono">
                  <span>{p.tag}</span>
                  <span className="tabular-nums">{p.year}</span>
                </div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg lg:text-xl font-medium tracking-tight text-foreground group-hover:text-stellar transition-colors">
                    {p.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-stellar group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] px-2 py-0.5 rounded-full border border-border text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* ============ EXPERTISE ============ */}
      <Section
        id="expertise"
        index="02 / 04"
        eyebrow="Expertise"
        title="Where I focus."
        description="Core domains where I architect, build, and ship production AI infrastructure across the full ML and software stack."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {expertise.map(({ code, title, desc, tags }) => (
            <div
              key={title}
              className="group relative bg-background p-8 lg:p-10 hover:bg-surface/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[11px] text-muted-foreground tabular-nums">
                  / {code}
                </span>
                <span className="h-px flex-1 ml-6 bg-gradient-to-r from-border to-transparent" />
              </div>
              <h3 className="text-xl lg:text-2xl font-medium tracking-tight mb-3 text-foreground">
                {title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                {desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2 py-0.5 rounded-full border border-border text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ============ STACK ============ */}
      <Section
        id="stack"
        index="03 / 04"
        eyebrow="Tools"
        title="Technical stack."
        description="The frameworks, platforms, and languages I use to take AI systems from notebook to production."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {stack.map((cat) => (
            <div
              key={cat.title}
              className="bg-background p-7 lg:p-8 hover:bg-surface/40 transition-colors"
            >
              <h4 className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-5">
                {cat.title}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2.5 py-1 rounded-md bg-surface border border-border text-foreground/85"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ============ ABOUT ============ */}
      <Section
        id="about"
        index="04 / 04"
        eyebrow="About"
        title="Engineer at the intersection of AI, robotics, and product."
      >
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-6">
            <p className="text-lg md:text-xl text-foreground leading-relaxed font-serif italic">
              “The most impactful AI isn’t built in isolation — it comes from
              rigorous engineering, cross-functional collaboration, and a
              relentless focus on real-world outcomes.”
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              I’m a Generative AI &amp; ML Engineer specializing in large
              language models, generative AI, and intelligent automation. I
              architect and deploy AI solutions that bridge research and
              production reliability — with a focus on{" "}
              <span className="text-foreground">LLM fine-tuning</span>,{" "}
              <span className="text-foreground">retrieval-augmented generation</span>,
              and <span className="text-foreground">autonomous agents</span>.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              My background in AI &amp; Robotics gives me a unique perspective —
              I think about intelligence from both the software and the hardware
              side. Outside of model training runs, I explore the boundary
              between embodied AI and language models — chasing questions about
              what machines can know.
            </p>
          </div>

          <div className="lg:col-span-4 space-y-3">
            <DossierCard icon={GraduationCap} label="Education">
              <div className="text-foreground font-medium">
                Vellore Institute of Technology
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                B.Tech, AI &amp; Robotics · 2021–2025
              </div>
              <div className="text-[12px] text-stellar mt-2 font-mono tabular-nums">
                CGPA · 8.20 / 10
              </div>
            </DossierCard>
            <DossierCard icon={Award} label="Certifications">
              <ul className="text-sm text-muted-foreground space-y-1.5">
                <li>· AWS Certified Cloud Practitioner</li>
                <li>· MERN Full-Stack — Ethnus</li>
                <li>· Database Mgmt — U. of Colorado</li>
              </ul>
            </DossierCard>
            <DossierCard icon={Briefcase} label="Status">
              <div className="text-sm text-foreground flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stellar animate-pulse-soft" />
                Open to opportunities
              </div>
              <div className="text-[12px] text-muted-foreground mt-2">
                India · Remote-friendly · Global
              </div>
            </DossierCard>
          </div>
        </div>
      </Section>

      {/* ============ CONTACT ============ */}
      <section
        id="contact"
        className="relative scroll-mt-20 py-28 lg:py-36 overflow-hidden"
      >
        <div className="absolute inset-0 ambient-top pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-surface/40 backdrop-blur-sm p-10 md:p-16 lg:p-20 relative overflow-hidden noise">
            <div className="relative max-w-3xl">
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-6">
                Contact · 05
              </p>
              <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.02] tracking-[-0.025em] text-foreground">
                Let’s build something
                <br />
                <em className="italic text-stellar">together.</em>
              </h2>
              <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
                LLM-powered products, ML infrastructure, or experimental
                agents — I’d love to hear about what you’re working on.
              </p>

              <div className="mt-12 flex flex-wrap items-center gap-3">
                <ContactLink href="mailto:saisasir99@gmail.com" icon={Mail} primary>
                  saisasir99@gmail.com
                </ContactLink>
                <ContactLink href="https://github.com/saisasir" icon={Github} external>
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
        {label}
      </p>
      <p className="text-xl font-medium text-foreground tracking-tight">
        {value}
      </p>
      {sub && (
        <p
          className="text-[11px] text-muted-foreground mt-1"
          dangerouslySetInnerHTML={{ __html: sub }}
        />
      )}
    </div>
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
    <div className="rounded-xl border border-border bg-surface/40 p-5 hover:bg-surface transition-colors">
      <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border">
        <Icon className="w-3.5 h-3.5 text-stellar" />
        <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
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
  primary,
  children,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  external?: boolean;
  primary?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={
        primary
          ? "group inline-flex items-center gap-2.5 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:bg-foreground/90 transition-colors"
          : "group inline-flex items-center gap-2.5 rounded-full border border-border-bright px-5 py-3 text-sm text-foreground hover:bg-surface transition-colors"
      }
    >
      <Icon className="w-4 h-4" />
      <span>{children}</span>
    </a>
  );
}
