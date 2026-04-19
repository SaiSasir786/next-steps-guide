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
  Briefcase,
} from "lucide-react";
import { Section } from "@/components/Section";
import { Starfield } from "@/components/Starfield";
import spaceHero from "@/assets/space-hero.jpg";
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
    code: "01",
    title: "Generative AI & LLMs",
    desc: "Fine-tuning foundation models, building RAG pipelines, prompt engineering, and deploying multi-modal AI systems at scale.",
    tags: ["LLaMA", "GPT-4", "Claude API", "RAG", "LoRA / PEFT"],
  },
  {
    icon: Cpu,
    code: "02",
    title: "ML Engineering",
    desc: "End-to-end ML pipelines — from data ingestion and model training to production serving, monitoring, and continuous retraining.",
    tags: ["PyTorch", "TensorFlow", "MLflow", "W&B", "CUDA"],
  },
  {
    icon: Bot,
    code: "03",
    title: "AI Agents & Systems",
    desc: "Designing autonomous agent architectures, multi-agent workflows, tool-integrated pipelines, and agentic reasoning systems.",
    tags: ["LangChain", "LlamaIndex", "AutoGen", "CrewAI", "Tool Use"],
  },
  {
    icon: Cog,
    code: "04",
    title: "Robotics & Embodied AI",
    desc: "Intelligent robotic systems that perceive, reason, and act — bridging physical and digital intelligence through sensor fusion and CV.",
    tags: ["ROS", "OpenCV", "SLAM", "Computer Vision", "Sensor Fusion"],
  },
];

const projects = [
  {
    slug: "travel-bot",
    code: "01",
    title: "AI Travel Booking Assistant",
    desc: "NLP-powered conversational agent with Dialogflow + Telegram API and a live MySQL backend.",
    tag: "Gen-AI",
    image: projectChatbot,
    stack: ["Dialogflow", "PHP", "MySQL", "Telegram API"],
  },
  {
    slug: "maru",
    code: "02",
    title: "AutoVista — MERN Marketplace",
    desc: "Production-grade virtual car showroom built end-to-end with the MERN stack.",
    tag: "Web Dev",
    image: projectAutovista,
    stack: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    slug: "critter",
    code: "03",
    title: "Autonomous ROV",
    desc: "ML-assisted remote operated vehicle with real-time sensor feedback and Bluetooth control.",
    tag: "Robotics",
    image: projectRov,
    stack: ["Arduino", "OpenCV", "Bluetooth", "Python"],
  },
  {
    slug: "web",
    code: "04",
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
      {/* ============ HERO ============ */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={spaceHero}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover opacity-50 animate-fade-in"
          />
          <Starfield density={160} />
          <div className="absolute inset-0 grid-mission opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background pointer-events-none" />
          <div className="absolute inset-0 vignette pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 mb-8 animate-fade-up">
              <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-stellar border border-stellar/30 px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-stellar animate-pulse-stellar" />
                Available for new opportunities
              </span>
            </div>

            <p
              className="font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Gen-AI & ML Engineer · Portfolio
            </p>

            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter animate-fade-up text-glow-soft"
              style={{ animationDelay: "0.2s" }}
            >
              Sai Sasir
              <br />
              <span className="text-gradient-stellar">Kosuri</span>
            </h1>

            <div
              className="mt-8 max-w-2xl animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <p className="text-lg md:text-xl text-foreground/85 leading-relaxed">
                I build production-grade AI systems —{" "}
                <span className="text-stellar">large language models</span>,{" "}
                <span className="text-stellar">RAG pipelines</span>, and{" "}
                <span className="text-stellar">autonomous agents</span> — with
                a foundation in robotics and full-stack engineering.
              </p>
            </div>

            <div
              className="mt-10 flex flex-wrap items-center gap-3 animate-fade-up"
              style={{ animationDelay: "0.55s" }}
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-sm bg-stellar px-7 py-3.5 text-xs font-mono uppercase tracking-[0.2em] text-background hover:bg-primary transition-all shadow-[0_0_40px_oklch(0.78_0.15_65/0.4)]"
              >
                View Projects
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="hud-corners inline-flex items-center gap-2 px-7 py-3.5 text-xs font-mono uppercase tracking-[0.2em] border border-stellar/30 hover:border-stellar hover:bg-stellar/5 transition-all"
              >
                Get in Touch
              </a>
            </div>

            {/* Stats strip */}
            <div
              className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-stellar/10 border border-stellar/20 animate-fade-up"
              style={{ animationDelay: "0.7s" }}
            >
              {[
                { num: "4+", label: "Major Projects" },
                { num: "AWS", label: "Certified" },
                { num: "8.20", label: "CGPA / 10" },
                { num: "B.Tech", label: "AI & Robotics" },
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

        <div className="absolute bottom-6 inset-x-0 px-6 lg:px-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground z-10">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 border border-stellar animate-pulse-stellar" />
            Scroll to explore
          </span>
          <span className="hidden md:inline">India · Remote-friendly</span>
        </div>
      </section>

      {/* ============ EXPERTISE ============ */}
      <Section
        id="expertise"
        index="01"
        eyebrow="What I Do"
        title="Areas of Expertise"
        description="Core domains where I architect, build, and ship production AI infrastructure — across the full ML and software stack."
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
                  / {code}
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
        eyebrow="Selected Work"
        title="Featured Projects"
        description="A selection of AI systems, full-stack platforms, and robotics builds — each shipped end-to-end from research to deployment."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="group relative border border-border hover:border-stellar/50 bg-background overflow-hidden transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden bg-deep relative max-h-56">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em]">
                  <span className="text-stellar bg-background/80 backdrop-blur px-2 py-1 border border-stellar/30">
                    / {p.code}
                  </span>
                  <span className="text-muted-foreground bg-background/80 backdrop-blur px-2 py-1">
                    {p.tag}
                  </span>
                </div>
              </div>
              <div className="p-6 lg:p-7 relative">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg font-semibold group-hover:text-stellar transition-colors">
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
        eyebrow="Tools & Technologies"
        title="Tech Stack"
        description="The frameworks, platforms, and languages I use to take AI systems from notebook to production."
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

      {/* ============ ABOUT ============ */}
      <Section
        id="about"
        index="04"
        eyebrow="About Me"
        title="Background"
      >
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-stellar mb-4">
              / Profile
            </div>
            <p className="text-base md:text-lg text-foreground/85 leading-relaxed">
              I'm a Gen-AI & ML Engineer specializing in large language models,
              generative AI, and intelligent automation. I architect and deploy
              AI solutions that bridge research and production reliability —
              with a focus on{" "}
              <span className="text-stellar">LLM fine-tuning</span>,{" "}
              <span className="text-stellar">RAG pipelines</span>, and{" "}
              <span className="text-stellar">autonomous agents</span>.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              My background in AI & Robotics gives me a unique perspective — I
              think about intelligence from both software and hardware angles.
              The most impactful AI isn't built in isolation; it comes from
              rigorous engineering, cross-functional collaboration, and a
              relentless focus on real-world outcomes.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Outside of model training runs, I explore the intersection of
              embodied AI and language models — chasing questions at the
              boundary of what machines can know.
            </p>
          </div>

          <div className="space-y-3">
            <DossierCard icon={GraduationCap} label="Education">
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
                <li>· AWS Cloud Practitioner</li>
                <li>· MERN Full-Stack — Ethnus</li>
                <li>· Database Mgmt — U. Colorado</li>
              </ul>
            </DossierCard>
            <DossierCard icon={Briefcase} label="Status">
              <div className="font-mono text-sm text-foreground flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-stellar animate-pulse-stellar" />
                Open to Opportunities
              </div>
              <div className="font-mono text-[10px] text-muted-foreground mt-2">
                India · Remote-friendly · Global
              </div>
            </DossierCard>
          </div>
        </div>
      </Section>

      {/* ============ CONTACT ============ */}
      <section
        id="contact"
        className="relative scroll-mt-20 py-24 lg:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <Starfield density={60} />
          <div className="absolute inset-0 grid-mission opacity-25" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="hud-corners border border-stellar/30 bg-background/60 backdrop-blur-sm p-10 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none scanlines opacity-10" />
            <div className="relative">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="w-12 h-px bg-stellar" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-stellar">
                  / Get in Touch · 05
                </span>
                <span className="w-12 h-px bg-stellar" />
              </div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-glow-soft">
                Let's build something
                <br />
                <span className="text-gradient-stellar">together</span>.
              </h2>
              <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
                LLM-powered products, ML infrastructure, or experimental
                agents — I'd love to hear about what you're working on.
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
