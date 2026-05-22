import React, { useEffect, useMemo, useState } from "react";

const links = {
  github: "https://github.com/MIR39X",
  linkedin: "https://www.linkedin.com/in/arsalan-mir-24a62328a",
  email: "mailto:arsalanmir735@gmail.com",
};

const navItems = [
  { href: "#home", label: "home" },
  { href: "#projects", label: "works" },
  { href: "#skills", label: "skills" },
  { href: "#about", label: "about-me" },
  { href: "#contact", label: "contacts" },
];

const projects = [
  {
    title: "ClashGuard",
    description: "My strongest project so far: a full timetable conflict checker with class sync, filtered endpoints, and a student-first UI for catching schedule clashes before registration.",
    tech: ["Timetable", "API", "Sync", "React"],
    art: "clash-art",
    label: "CLASH GUARD",
    url: "https://github.com/MIR39X/ClashGuard",
    liveUrl: "https://clashguard.vercel.app/",
    highlight: "Best project so far",
    spotlight: true,
  },
  {
    title: "ElectionSphere",
    description: "Blockchain voting dApp for transparent campus elections with wallet voting, role-based permissions, voter registration, election phases, and live results tracking.",
    tech: ["React", "Solidity", "Hardhat", "Sepolia"],
    art: "election-art",
    label: "VOTING DAPP",
    url: "https://github.com/MIR39X/ElectionSphere",
    highlight: "Blockchain voting dApp",
  },
  {
    title: "Delivery Route Optimizer",
    description: "AI course project with a CustomTkinter grid UI that runs A* search, visualizes explored nodes, supports obstacles and weighted roads, and improves multi-stop delivery routes.",
    tech: ["Python", "A*", "CustomTkinter", "AI"],
    art: "route-art",
    label: "A* ROUTING",
    url: "https://github.com/MIR39X/-delivery-route-optimizer---AI-Course-Project",
    highlight: "AI course project",
  },
  {
    title: "Automotive Management System",
    description: "Full-stack dealership and workshop platform covering inventory, CRM, job cards, service catalog, POS, and supplier workflows.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JS"],
    art: "db-art",
    label: "DBMS PLATFORM",
    url: "https://github.com/MIR39X/Automotive-Management-System",
  },
  {
    title: "SmartFileJanitor",
    description: "Python automation utility that triages files, monitors folders in real time, prevents overwrite collisions, and includes a GUI dashboard.",
    tech: ["Python", "Watchdog", "Tkinter", "Automation"],
    art: "janitor-art",
    label: "FILE AUTOMATION",
    url: "https://github.com/MIR39X/SmartFileJanitor",
  },
  {
    title: "GestureShortcutControl",
    description: "Touchless webcam gesture control system using computer vision to map hand movements into keyboard shortcuts and mouse actions.",
    tech: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI"],
    art: "gesture-art",
    label: "GESTURE CONTROL",
    url: "https://github.com/MIR39X/GestureShortcutControl",
  },
  {
    title: "Library Book Borrowing System",
    description: "Operating Systems project that simulates the Reader-Writer problem with pthreads, mutexes, and semaphores for thread-safe library book record access.",
    tech: ["C", "pthreads", "Mutex", "Semaphore"],
    art: "library-art",
    label: "OS SYNC",
    url: "https://github.com/MIR39X/Library-System-OSProject",
  },
];

const skills = [
  { title: "Languages", items: ["JavaScript", "Python", "C", "C++"] },
  { title: "App Building", items: ["React", "Node", "APIs", "MongoDB"] },
  { title: "AI Workflows", items: ["Codex", "Claude", "OpenClaw", "n8n"] },
  { title: "DevSecOps", items: ["CI/CD", "Secure Pipelines", "Linux", "Automation"] },
  { title: "Security", items: ["Networking", "System Behavior", "Threat Thinking", "Hardening"] },
  { title: "Tools", items: ["Git", "GitHub", "VS Code", "Terminal"] },
];

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49v-1.88c-2.78.62-3.37-1.22-3.37-1.22-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.31 9.31 0 0 1 12 6.94c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.95.68 1.92v2.78c0 .27.18.59.69.49A10.12 10.12 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.94 8.98H3.75V20h3.19V8.98ZM7.2 5.57C7.2 4.55 6.38 3.75 5.36 3.75s-1.84.8-1.84 1.82.8 1.84 1.8 1.84h.02c1.04 0 1.86-.82 1.86-1.84ZM20.25 13.68c0-3.36-1.79-4.92-4.18-4.92-1.93 0-2.79 1.06-3.27 1.8V8.98H9.62c.04 1.03 0 11.02 0 11.02h3.18v-6.15c0-.33.02-.66.12-.89.26-.66.86-1.34 1.86-1.34 1.31 0 1.84 1.01 1.84 2.48V20h3.18l.45-6.32Z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.5 5h15A2.5 2.5 0 0 1 22 7.5v9A2.5 2.5 0 0 1 19.5 19h-15A2.5 2.5 0 0 1 2 16.5v-9A2.5 2.5 0 0 1 4.5 5Zm0 2 7.5 5.05L19.5 7h-15Zm15 10a.5.5 0 0 0 .5-.5V9.2l-7.44 5a1 1 0 0 1-1.12 0L4 9.2v7.3a.5.5 0 0 0 .5.5h15Z" />
    </svg>
  );
}

function useScrollExperience(setActiveSection) {
  useEffect(() => {
    document.body.classList.add("js-ready");

    const sections = [...document.querySelectorAll("main section[id]")];
    const activeSectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveSection(visible.target.id);
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0.1, 0.4, 0.7],
      },
    );

    sections.forEach((section) => activeSectionObserver.observe(section));

    const revealItems = [
      ...document.querySelectorAll(
        ".section, .project-card, .skill-blocks article, .contact-card, .hero-copy, .hero-visual",
      ),
    ];

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          window.setTimeout(() => {
            entry.target.style.transitionDelay = "";
          }, 700);
          revealObserver.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.12,
      },
    );

    revealItems.forEach((item, index) => {
      item.style.transitionDelay = `${Math.min(index % 6, 5) * 45}ms`;
      revealObserver.observe(item);
    });

    let ticking = false;

    function updateScrollEffects() {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollY = window.scrollY;
      const ratio = maxScroll > 0 ? scrollY / maxScroll : 0;

      document.documentElement.style.setProperty("--scroll-progress", String(ratio));
      document.documentElement.style.setProperty("--scroll-shift", String(scrollY));
      document.body.classList.toggle("scrolled", scrollY > 12);
      ticking = false;
    }

    function requestScrollUpdate() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateScrollEffects);
    }

    window.addEventListener("scroll", requestScrollUpdate, { passive: true });
    window.addEventListener("resize", requestScrollUpdate);
    updateScrollEffects();

    return () => {
      activeSectionObserver.disconnect();
      revealObserver.disconnect();
      window.removeEventListener("scroll", requestScrollUpdate);
      window.removeEventListener("resize", requestScrollUpdate);
      document.body.classList.remove("js-ready", "scrolled", "nav-open");
    };
  }, [setActiveSection]);
}

function Brand() {
  return (
    <a className="brand" href="#home" aria-label="Arsalan Mir home">
      <span className="brand-mark" aria-hidden="true">
        <img
          src="/profile-pixel.png"
          alt=""
          onError={(event) => {
            event.currentTarget.parentElement.classList.add("missing-image");
          }}
        />
      </span>
      <span>Arsalan Mir</span>
    </a>
  );
}

function SocialRail() {
  return (
    <aside className="social-rail" aria-label="Social links">
      <span className="rail-line"></span>
      <a href={links.github} aria-label="GitHub profile" target="_blank" rel="noreferrer">
        <GithubIcon />
      </a>
      <a href={links.linkedin} aria-label="LinkedIn profile" target="_blank" rel="noreferrer">
        <LinkedinIcon />
      </a>
      <a href={links.email} aria-label="Email Arsalan">
        <EmailIcon />
      </a>
    </aside>
  );
}

function Header({ activeSection, menuOpen, setMenuOpen }) {
  useEffect(() => {
    document.body.classList.toggle("nav-open", menuOpen);
    return () => document.body.classList.remove("nav-open");
  }, [menuOpen]);

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [setMenuOpen]);

  return (
    <header className="site-header">
      <Brand />
      <button
        className="menu-button"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="site-nav"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
      >
        <span></span>
        <span></span>
        <span className="sr-only">Toggle navigation</span>
      </button>
      <nav className="site-nav" id="site-nav" aria-label="Primary navigation">
        {navItems.map((item) => {
          const section = item.href.replace("#", "");
          return (
            <a
              key={item.href}
              href={item.href}
              className={activeSection === section ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              <span>#</span>
              {item.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}

function SectionHeading({ title, compact = false, action }) {
  return (
    <div className={`section-heading${compact ? " compact" : ""}`}>
      <h2>
        <span>#</span>
        {title}
      </h2>
      <div></div>
      {action}
    </div>
  );
}

function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-copy">
        <p className="eyebrow">FAST NUCES / Pakistan</p>
        <h1>
          Building <span>secure apps</span>, <span>AI workflows</span>, and <span>DevSecOps-ready systems</span>
        </h1>
        <ul className="hero-tags" aria-label="Core focus areas">
          <li>DevSecOps</li>
          <li>Secure Engineering</li>
          <li>AI Automation</li>
          <li>MERN + Python</li>
        </ul>
        <div className="hero-actions">
          <a className="button primary" href="#contact">
            Contact me
          </a>
          <a className="button secondary" href="#projects">
            View work
          </a>
        </div>
      </div>
      <div className="hero-visual" aria-label="Developer terminal illustration">
        <div className="orbit-square square-one"></div>
        <div className="orbit-square square-two"></div>
        <div className="terminal-card">
          <div className="terminal-top">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <pre>
            <code>{`> whoami
arsalan_mir

> mission --ship
devsecops_mindset
secure_web_apps
ai_workflows
automation_pipelines

> current_build
portfolio_v2
projects_featured
ready_for_opportunities`}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, featured }) {
  return (
    <article className={`project-card${featured ? " featured-card" : ""}${project.spotlight ? " spotlight-card" : ""}`}>
      {featured && <span className="featured-badge">{project.highlight}</span>}
      <div className={`project-art ${project.art}`}>
        <span>{project.label}</span>
      </div>
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="tech-list">
          {project.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="project-actions">
          <a className="mini-button" href={project.url} target="_blank" rel="noreferrer">
            Open repo &lt;~&gt;
          </a>
          {project.liveUrl && (
            <a className="mini-button live-button" href={project.liveUrl} target="_blank" rel="noreferrer">
              Live site &lt;~&gt;
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section className="section" id="projects">
      <SectionHeading
        title="projects"
        action={
          <a href={links.github} target="_blank" rel="noreferrer">
            View all ~~&gt;
          </a>
        }
      />
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} featured={Boolean(project.highlight)} />
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <SectionHeading title="skills" compact />
      <div className="skills-layout">
        <div className="skills-decor" aria-hidden="true">
          <div className="dots"></div>
          <span></span>
          <span></span>
          <div className="dots small"></div>
        </div>
        <div className="skill-blocks">
          {skills.map((skill) => (
            <article key={skill.title}>
              <h3>{skill.title}</h3>
              <ul>
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <SectionHeading title="about-me" compact />
      <div className="about-layout">
        <div className="about-copy">
          <p>
            Hello, I'm Arsalan, a cybersecurity student at FAST NUCES focused on DevSecOps, secure software engineering,
            and automation.
          </p>
          <p>
            I'm interested in how systems work beneath the surface, from development and deployment to security,
            reliability, and workflow optimization. My work sits at the intersection of cybersecurity fundamentals,
            DevSecOps practices, AI-assisted development, LLM workflows, and automation.
          </p>
          <p>
            I have hands-on experience with Python, Python libraries, OpenCV, MERN stack development, and practical
            automation workflows. I use AI-assisted engineering tools and automation platforms to research faster, plan
            better, debug efficiently, and build secure software with improved development speed.
          </p>
          <p>
            My goal is to grow as a security-focused engineer who can bridge the gap between development, operations, and
            cybersecurity by building practical, reliable, and secure systems.
          </p>
          <a className="button secondary" href="#contact">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <SectionHeading title="contacts" compact />
      <div className="contact-layout">
        <p>
          Open to internships, beginner DevSecOps or security-focused software work, automation projects, and practical
          engineering opportunities where I can build, learn, and contribute.
        </p>
        <div className="contact-card">
          <h3>Message me here</h3>
          <a href={links.email}>arsalanmir735@gmail.com</a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn / arsalan-mir
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <Brand />
        <p>Cybersecurity student and AI-native app builder</p>
      </div>
      <small>&copy; 2026. Built by Arsalan Mir.</small>
    </footer>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionComponents = useMemo(() => [<Hero key="hero" />, <Projects key="projects" />, <Skills key="skills" />, <About key="about" />, <Contact key="contact" />], []);

  useScrollExperience(setActiveSection);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true"></div>
      <div className="page-shell">
        <SocialRail />
        <Header activeSection={activeSection} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <main>{sectionComponents}</main>
        <Footer />
      </div>
    </>
  );
}
