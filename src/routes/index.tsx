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
  MapPin,
  GraduationCap,
  Award,
} from "lucide-react";
import { Section } from "@/components/Section";
import heroBg from "@/assets/hero-bg.jpg";
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
    title: "Generative AI & LLMs",
    desc: "Fine-tuning foundation models, building RAG pipelines, prompt engineering, and deploying multi-modal AI systems at scale.",
    tags: ["LLaMA", "GPT-4", "Claude API", "RAG", "LoRA / PEFT"],
  },
  {
    icon: Cpu,
    title: "ML Engineering",
    desc: "End-to-end ML pipelines — from data ingestion and model training to production serving, monitoring, and continuous retraining.",
    tags: ["PyTorch", "TensorFlow", "MLflow", "W&B", "CUDA"],
  },
  {
    icon: Bot,
    title: "AI Agents & Systems",
    desc: "Designing autonomous agent architectures, multi-agent workflows, tool-integrated pipelines, and agentic reasoning systems.",
    tags: ["LangChain", "LlamaIndex", "AutoGen", "CrewAI", "Tool Use"],
  },
  {
    icon: Cog,
    title: "Robotics & Embodied AI",
    desc: "Intelligent robotic systems that perceive, reason, and act — bridging physical and digital intelligence through sensor fusion and CV.",
    tags: ["ROS", "OpenCV", "SLAM", "Computer Vision", "Sensor Fusion"],
  },
];

const projects = [
  {
    slug: "travel-bot",
    title: "AI Travel Booking Assistant",
    desc: "NLP-powered conversational agent with Dialogflow + Telegram API and a live MySQL backend.",
    tag: "Gen-AI",
    image: projectChatbot,
    stack: ["Dialogflow", "PHP", "MySQL", "Telegram API"],
  },
  {
    slug: "maru",
    title: "AutoVista — MERN Marketplace",
    desc: "Production-grade virtual car showroom built end-to-end with the MERN stack.",
    tag: "Web Dev",
    image: projectAutovista,
    stack: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    slug: "critter",
    title: "Autonomous ROV",
    desc: "ML-assisted remote operated vehicle with real-time sensor feedback and Bluetooth control.",
    tag: "Robotics",
    image: projectRov,
    stack: ["Arduino", "OpenCV", "Bluetooth", "Python"],
  },
  {
    slug: "web",
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
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <img
          src={heroBg}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border-bright bg-surface px-4 py-1.5 mb-8 animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Available for Opportunities
              </span>
            </div>

            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Building intelligent
              <br />
              systems that{" "}
              <span className="text-gradient-accent">think</span>.
            </h1>

            <p
              className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up"
              style={{ animationDelay: "0.25s" }}
            >
              I'm <span className="text-foreground font-medium">Sai Sasir K</span> — a
              Gen-AI & ML Engineer specializing in large language models, RAG pipelines,
              and autonomous agent systems. I bridge cutting-edge research and
              production reliability.
            </p>

            <div
              className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-all shadow-[0_0_30px_oklch(0.78_0.16_210/0.4)]"
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border-bright px-6 py-3 text-sm font-semibold hover:bg-surface transition-all"
              >
                Get in Touch
              </a>
            </div>

            <div
              className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl animate-fade-up"
              style={{ animationDelay: "0.55s" }}
            >
              {[
                { num: "4+", label: "AI Projects" },
                { num: "AWS", label: "Certified" },
                { num: "8.2", label: "CGPA / 10" },
                { num: "VIT '25", label: "Graduate" },
              ].map((s) => (
                <div key={s.label} className="border-l border-border-bright pl-4">
                  <div className="font-display text-2xl font-bold text-gradient">
                    {s.num}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <Section
        id="expertise"
        eyebrow="01 — What I Do"
        title="Expertise"
        description="Core domains where I architect, build, and deploy intelligent systems."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {expertise.map(({ icon: Icon, title, desc, tags }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-border bg-surface p-8 hover:border-border-bright transition-all overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/5 to-accent/5 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-md border border-border text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section
        id="projects"
        eyebrow="02 — Selected Work"
        title="Projects"
        description="A selection of AI, full-stack, and robotics projects I've designed and built end-to-end."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="group relative rounded-2xl border border-border bg-surface overflow-hidden hover:border-border-bright transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden bg-muted relative">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.15em] px-2.5 py-1 rounded-full bg-background/80 backdrop-blur border border-border-bright">
                  {p.tag}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10px] text-muted-foreground"
                    >
                      {s}
                      {s !== p.stack[p.stack.length - 1] && (
                        <span className="mx-1.5 text-border-bright">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* STACK */}
      <Section
        id="stack"
        eyebrow="03 — Toolkit"
        title="Tech Stack"
        description="The AI/ML ecosystem I build with — from research to production."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {stack.map((cat) => (
            <div
              key={cat.title}
              className="rounded-2xl border border-border bg-surface p-6 hover:border-border-bright transition-all"
            >
              <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-primary mb-4">
                {cat.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 rounded-md bg-muted text-foreground/90"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ABOUT */}
      <Section
        id="about"
        eyebrow="04 — Background"
        title="About"
      >
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a Gen-AI & ML Engineer with deep specialization in large language
              models, generative AI systems, and intelligent automation. I architect and
              deploy AI solutions that bridge the gap between cutting-edge research and
              production reliability — with a focus on{" "}
              <span className="text-foreground">LLM fine-tuning</span>,{" "}
              <span className="text-foreground">RAG pipelines</span>, and{" "}
              <span className="text-foreground">autonomous agent systems</span>.
            </p>
            <p>
              My background in AI & Robotics gives me a unique perspective — I think
              about intelligence from both software and hardware angles. The most
              impactful AI isn't built in isolation, but through rigorous engineering,
              domain collaboration, and a relentless focus on real-world outcomes.
            </p>
            <p>
              When I'm not deep in model training runs, I'm exploring the intersection
              of embodied AI and language models.
            </p>
          </div>
          <div className="space-y-4">
            <InfoCard icon={GraduationCap} label="Education">
              <div className="text-foreground font-medium">Vellore Institute of Technology</div>
              <div className="text-sm text-muted-foreground">
                B.Tech, AI & Robotics · 2021–2025
              </div>
              <div className="font-mono text-xs text-primary mt-1">CGPA 8.20 / 10</div>
            </InfoCard>
            <InfoCard icon={Award} label="Certifications">
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>AWS Certified Cloud Practitioner</li>
                <li>MERN Full-Stack — Ethnus</li>
                <li>Database Mgmt — U. of Colorado</li>
              </ul>
            </InfoCard>
            <InfoCard icon={MapPin} label="Based in">
              <div className="text-foreground">India · Remote-friendly</div>
            </InfoCard>
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-20 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="rounded-3xl border border-border-bright bg-gradient-to-br from-surface to-background p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
            <div className="relative">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4">
                05 — Let's Talk
              </p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                Building something
                <br />
                with <span className="text-gradient-accent">AI</span>?
              </h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
                Whether it's an LLM-powered product, ML infrastructure, or an
                experimental agent — I'd love to hear about it.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
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
                  linkedin.com/in/saisasirkosuri
                </ContactLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoCard({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5">
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-4 h-4 text-primary" />
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
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
      className="group inline-flex items-center gap-3 rounded-full border border-border bg-background/60 backdrop-blur px-5 py-3 text-sm hover:border-primary hover:text-primary transition-all"
    >
      <Icon className="w-4 h-4" />
      <span className="font-mono">{children}</span>
    </a>
  );
}
