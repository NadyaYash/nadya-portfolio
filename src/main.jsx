import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import profilePhoto from "../1701113988652.jpeg";
import puzzleFreeWeb from "./assets/puzzlefree-web.jpg";
import puzzleFreeDaily from "./assets/puzzlefree-daily.jpg";
import puzzleFreeGrid from "./assets/puzzlefree-grid.jpg";
import puzzleFreeMobile from "./assets/puzzlefree-mobile.jpg";
import jigsawKidsPuzzles from "./assets/jigsaw-kids-puzzles.jpg";
import jigsawKidsPacks from "./assets/jigsaw-kids-packs.jpg";
import jigsawKidsPlay from "./assets/jigsaw-kids-play.jpg";
import jigsawKidsMobile from "./assets/jigsaw-kids-mobile.jpg";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "How I help", href: "#help" },
  { label: "Contact", href: "#contact" },
];

const helpAreas = [
  {
    title: "Turn messy input into a clear plan",
    text: "I sort through ideas, feedback, constraints, and business needs so the team knows what matters next.",
    icon: "compass",
  },
  {
    title: "Make priorities easier to defend",
    text: "I help separate urgent from important, reduce noise, and shape a roadmap people can actually act on.",
    icon: "map",
  },
  {
    title: "Keep delivery moving",
    text: "I keep scope, decisions, developers, QA, and timelines connected so work does not stall in the middle.",
    icon: "flow",
  },
  {
    title: "Prepare launches with less stress",
    text: "I bring structure to release details, edge cases, feedback loops, and last-mile decisions before they become blockers.",
    icon: "rocket",
  },
  {
    title: "Find practical improvements",
    text: "I look at what is already live and turn user signals, product gaps, and team observations into useful next steps.",
    icon: "pulse",
  },
  {
    title: "Connect product work to outcomes",
    text: "I keep usability, growth, retention, and team capacity in the same conversation so product work supports the business.",
    icon: "target",
  },
];

const projects = [
  {
    name: "PuzzleFree.game",
    category: "Mobile app / web product",
    role: "Co-founder & Product Lead",
    summary:
      "End-to-end product ownership for a cross-platform puzzle product, from product direction and launch coordination to early growth and distribution setup.",
    scope: [
      "Product direction across web, iOS, and Android",
      "Roadmap, scope, and release coordination",
      "Early growth and distribution setup",
    ],
    workedOn: [
      "Product direction from concept to launch",
      "Roadmap, scope, and release coordination",
      "Cross-platform product (web, iOS, Android)",
      "Early growth setup: acquisition, app store presence, and content",
      "Aligning product, execution, and initial distribution",
    ],
    keyPoints: [
      "Co-founder ownership from concept to launch",
      "Product direction across web, iOS, and Android",
      "Roadmap, scope, and release coordination",
      "Early growth and distribution setup",
    ],
    impact: [
      "Clear path from concept to launch, with delivery and early growth aligned.",
    ],
    links: [
      {
        label: "Web",
        href: "https://puzzlefree.game/",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/jigsaw-puzzles-by-puzzlefree/id6751572041",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.enidev.puzzlefree",
      },
    ],
    backdropImages: [
      {
        src: puzzleFreeDaily,
        alt: "PuzzleFree daily puzzle grid",
      },
      {
        src: puzzleFreeGrid,
        alt: "PuzzleFree puzzle cards overview",
      },
    ],
    images: [
      {
        src: puzzleFreeWeb,
        alt: "PuzzleFree web product puzzle library",
      },
      {
        src: puzzleFreeMobile,
        alt: "PuzzleFree mobile product interface",
      },
    ],
    featured: true,
  },
  {
    name: "Jigsaw Kids Puzzles PuzzleFree",
    category: "Kids mobile product",
    role: "Co-founder & Product Lead",
    summary:
      "Product ownership for a kid-focused puzzle experience built from the PuzzleFree product foundation, with direction across child-friendly content, mobile UX, launch, and distribution.",
    scope: [
      "Product direction for a children-focused puzzle app",
      "Content structure, puzzle categories, and kid-safe experience",
      "Release coordination and store presentation",
    ],
    tags: ["Kids product", "Mobile UX", "Content", "Launch"],
    impact: [
      "Extended the PuzzleFree product line into a clearer child-friendly experience with focused content and mobile-first positioning.",
    ],
    links: [
      {
        label: "Web",
        href: "https://kids.puzzlefree.game/",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/jigsaw-kids-puzzles-puzzlefree/id6761406530",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.enidev.puzzlefreekids",
      },
    ],
    backdropImages: [
      {
        src: jigsawKidsPacks,
        alt: "Jigsaw Kids Puzzles pack library",
      },
      {
        src: jigsawKidsPlay,
        alt: "Jigsaw Kids Puzzles play screen",
      },
    ],
    images: [
      {
        src: jigsawKidsPuzzles,
        alt: "Jigsaw Kids Puzzles puzzle grid",
      },
      {
        src: jigsawKidsMobile,
        alt: "Jigsaw Kids Puzzles mobile category screen",
      },
    ],
    visualVariant: "kids",
  },
  {
    name: "WHMCS migration / optimization",
    category: "Platform migration / process optimization",
    role: "Project Lead (Platform & Integrations)",
    summary:
      "A migration and optimization project focused on moving from a custom panel to WHMCS while improving implementation flow and operational modules.",
    scope: [
      "Platform migration: custom panel to WHMCS",
      "Payment gateway integrations: Stripe, PayPal, and related flows",
      "Module and workflow optimization",
      "Developer coordination and delivery",
    ],
    tags: ["WHMCS", "Payments", "Integrations", "Operations"],
    workedOn: [
      "Translated business needs into delivery scope",
      "Kept developers and delivery aligned",
    ],
    impact: [
      "Stronger operating base for platform services, integrations, and future improvements.",
    ],
    systemSummary: {
      from: "Custom panel",
      to: "WHMCS",
      items: ["Payments", "Modules", "Workflows"],
    },
  },
];

const proofPoints = ["Mobile apps", "SaaS", "Web products", "Launch work", "Growth loops"];

const contactMethods = [
  {
    label: "Email",
    text: "Start the conversation",
    href: "mailto:nadyash.work@gmail.com",
    icon: "mail",
  },
  {
    label: "LinkedIn",
    text: "Connect professionally",
    href: "https://www.linkedin.com/in/nadya-yashchuk/",
    icon: "linkedin",
  },
  {
    label: "Contra",
    text: "View freelance profile",
    href: "https://contra.com/nadzeya_yashchuk_by5wcspl/work?r=nadzeya_yashchuk_by5wcspl",
    icon: "briefcase",
  },
];

const productSignals = [
  "Roadmap keeps changing",
  "Decisions do not stick",
  "Team is busy, but not progressing",
  "Too many opinions slow delivery",
  "Work happens, but nothing ships",
];

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.14,
      },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Help />
      <Contact />
      <Footer />
      <ScrollTopButton />
    </main>
  );
}

function Header() {
  const [activeHash, setActiveHash] = useState(() => window.location.hash);
  const [indicatorStyle, setIndicatorStyle] = useState({ opacity: 0 });
  const clickedHashRef = useRef(null);
  const clickedHashTimeoutRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const updateActiveHash = () => {
      if (clickedHashRef.current) {
        setActiveHash(clickedHashRef.current);
        return;
      }

      const scrollBottom = window.innerHeight + window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;

      if (documentHeight - scrollBottom < 8) {
        setActiveHash(navItems[navItems.length - 1].href);
        return;
      }

      const viewportHeight = window.innerHeight;
      const sectionVisibility = navItems
        .map((item) => {
          const section = document.querySelector(item.href);
          if (!section) {
            return null;
          }

          return {
            href: item.href,
            rect: section.getBoundingClientRect(),
          };
        })
        .filter(Boolean)
        .map(({ href, rect }) => {
          const visibleTop = Math.max(rect.top, 0);
          const visibleBottom = Math.min(rect.bottom, viewportHeight);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          const visibilityRatio = visibleHeight / Math.min(rect.height, viewportHeight);
          const distanceFromAnchor = Math.abs(rect.top - 120);

          return {
            href,
            score: visibilityRatio * 1000 - distanceFromAnchor,
          };
        });

      const activeSection = sectionVisibility.sort((a, b) => b.score - a.score)[0];

      if (activeSection) {
        setActiveHash(activeSection.href);
        return;
      }

      setActiveHash(window.location.hash || navItems[0].href);
    };

    updateActiveHash();
    window.addEventListener("scroll", updateActiveHash, { passive: true });
    window.addEventListener("hashchange", updateActiveHash);
    window.addEventListener("resize", updateActiveHash);

    return () => {
      window.removeEventListener("scroll", updateActiveHash);
      window.removeEventListener("hashchange", updateActiveHash);
      window.removeEventListener("resize", updateActiveHash);
      window.clearTimeout(clickedHashTimeoutRef.current);
    };
  }, []);

  const handleNavClick = (href) => {
    clickedHashRef.current = href;
    setActiveHash(href);
    window.clearTimeout(clickedHashTimeoutRef.current);
    clickedHashTimeoutRef.current = window.setTimeout(() => {
      clickedHashRef.current = null;
    }, 900);
  };

  useEffect(() => {
    const updateIndicator = () => {
      const activeLink = Array.from(navRef.current?.querySelectorAll("a") || []).find(
        (link) => link.getAttribute("href") === activeHash,
      );

      if (!activeLink) {
        setIndicatorStyle({ opacity: 0 });
        return;
      }

      setIndicatorStyle({
        opacity: 1,
        transform: `translateX(${activeLink.offsetLeft}px)`,
        width: `${activeLink.offsetWidth}px`,
      });
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);

    return () => {
      window.removeEventListener("resize", updateIndicator);
    };
  }, [activeHash]);

  return (
    <header className="site-header" aria-label="Primary navigation">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="Nadya Yashchuk home">
          <span>by</span>
          Nadya Yashchuk
        </a>
        <nav ref={navRef}>
          <span className="nav-indicator" style={indicatorStyle} aria-hidden="true" />
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={activeHash === item.href ? "page" : undefined}
              onClick={() => handleNavClick(item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href="#contact">
          Say hello
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="section-inner hero-inner">
        <div className="hero-content">
          <p className="template-kicker">Hello</p>
          <h1>
            <span>I&apos;m</span> Nadya Yashchuk
          </h1>
          <p className="role-line">Product & Project Lead based in Austria</p>
          <div className="hero-status" aria-label="Availability">
            <span aria-hidden="true" />
            Available for product & delivery clarity
          </div>
          <p className="hero-copy">
            I make product work feel calmer, clearer, and easier to move across
            mobile apps, SaaS, and web products.
          </p>
          <div className="hero-actions" aria-label="Portfolio actions">
            <a className="button primary" href="#projects">
              View work
              <IconArrow size={18} aria-hidden="true" />
            </a>
            <a className="button secondary" href="#contact">
              Contact me
            </a>
          </div>
          <div className="hero-proof-wrap">
            <span className="hero-proof-label">Usually involved in</span>
            <div className="hero-proof" aria-label="Product focus areas">
              {proofPoints.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
        <aside className="hero-panel" aria-label="Nadya Yashchuk portrait">
          <div className="hero-portrait">
            <img src={profilePhoto} alt="Nadya Yashchuk" decoding="async" fetchPriority="high" />
          </div>
        </aside>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="I help product work start stronger, scale cleaner, and get back on track when execution drifts."
      intro="Some products need direction from day one. Others need structure when priorities shift, scope grows, or delivery starts looping. I work across both moments."
    >
      <div className="about-grid">
        <div className="about-lead reveal">
          <p>
            I step in to reset direction, clarify ownership, structure the work,
            and move teams toward real release. Decisions start holding, delivery
            becomes steadier, and the work stops looping around the same open
            questions.
          </p>
          <p>
            Sometimes the work starts earlier — shaping product direction, team
            structure, and hiring so execution scales without chaos.
          </p>
          <p>
            This comes from hands-on product ownership across web, iOS, and
            Android — building products from idea to launch.
          </p>
          <a className="nav-cta" href="#contact">
            Say hello
          </a>
        </div>
        <div className="signal-card reveal reveal-delay-1">
          <span className="signal-kicker">If this sounds familiar</span>
          <h3>We should talk</h3>
          <ul>
            {productSignals.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected Projects"
      title="Product leadership from concept to release."
      intro="Real cases across mobile, web, launch, migration, and growth — shaped through product direction, delivery ownership, and hands-on execution."
    >
      <div className="project-stack">
        {projects.map((project, index) => (
          <article
            className={`project-card reveal ${project.featured ? "is-featured" : ""} ${
              project.images?.length || project.systemSummary ? "has-media" : "no-media"
            }`}
            key={project.name}
            style={{ "--reveal-delay": `${index * 80}ms` }}
          >
            <ProjectMedia project={project} />
            <div className="project-content">
              <div className="project-heading-row">
                <span className="project-label">{project.category}</span>
              </div>
              <h3>{project.name}</h3>
              {project.tags?.length ? (
                <div className="project-tags" aria-label={`${project.name} focus tags`}>
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              ) : null}
              <p>{project.summary}</p>

              <dl className="project-details">
                <div>
                  <dt>Role</dt>
                  <dd>{project.role}</dd>
                </div>
                {project.scope?.length ? (
                  <div className="project-scope-block">
                    <dt>Focus</dt>
                    <dd>
                      <ul>
                        {project.scope.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                ) : null}
                <div>
                  <dt>Impact</dt>
                  <dd>{project.impact[0]}</dd>
                </div>
                {project.links?.length ? (
                  <div>
                    <dt>Links</dt>
                    <dd className="project-links">
                      {project.links.map((link) => (
                        <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
                          {link.label}
                        </a>
                      ))}
                    </dd>
                  </div>
                ) : null}
              </dl>
            </div>
            <span className="project-index">0{index + 1}</span>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Help() {
  return (
    <Section
      id="help"
      eyebrow="What I help teams do"
      title="When product work gets messy, I help teams find the next right move."
      intro="I work best where priorities are overloaded, decisions are slow, or delivery needs someone steady enough to turn complexity into progress."
    >
      <div className="expertise-grid">
        {helpAreas.map((item, index) => (
          <article
            className="expertise-card"
            key={item.title}
          >
            <div className="expertise-card-inner reveal" style={{ "--reveal-delay": `${index * 70}ms` }}>
              <span className="service-icon" aria-hidden="true">
                <HelpIcon name={item.icon} size={22} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="section-inner">
        <div className="contact-inner reveal">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Need someone to bring order to the product work?</h2>
            <p>
              If your roadmap is messy, a launch is coming, or the team needs
              clearer priorities, send me a note.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button primary" href="mailto:nadyash.work@gmail.com">
              Email me
            </a>
            <a
              className="button secondary"
              href="https://www.linkedin.com/in/nadya-yashchuk/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="contact-card-grid reveal reveal-delay-1" aria-label="Contact links">
          {contactMethods.map((method) => (
            <a
              className="contact-card"
              href={method.href}
              key={method.label}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={method.href.startsWith("http") ? "noreferrer" : undefined}
            >
              <span className="contact-card-icon" aria-hidden="true">
                <ContactIcon name={method.icon} size={22} />
              </span>
              <span>
                <strong>{method.label}</strong>
                <small>{method.text}</small>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-inner">
        <p>
          © {new Date().getFullYear()} <strong>Nadya Yashchuk.</strong> Product work with clearer direction.
        </p>
      </div>
    </footer>
  );
}

function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 420);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`scroll-top ${isVisible ? "is-visible" : ""}`}
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <IconArrowUp size={20} aria-hidden="true" />
    </button>
  );
}

function Section({ id, eyebrow, title, intro, children }) {
  return (
    <section className="section" id={id}>
      <div className="section-inner">
        <div className="section-heading reveal">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{intro}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

function ProjectMedia({ project }) {
  if (project.systemSummary) {
    return (
      <div className="project-media project-media-summary" aria-label={`${project.name} system summary`}>
        <div className="summary-route" aria-hidden="true">
          <div className="summary-platform">{project.systemSummary.from}</div>
          <div className="summary-arrow" />
          <div className="summary-platform summary-platform-target">{project.systemSummary.to}</div>
        </div>
        <div className="summary-items" aria-hidden="true">
          {project.systemSummary.items.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    );
  }

  if (project.images?.length) {
    const visualVariant = project.visualVariant ? `project-media-${project.visualVariant}` : "";

    return (
      <div
        className={`project-media project-media-images ${visualVariant} ${
          project.images.length === 1 ? "is-single" : ""
        }`}
      >
        {project.backdropImages?.slice(0, 2).map((image, index) => (
          <figure className={`project-image-backdrop project-image-backdrop-${index + 1}`} key={image.src}>
            <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
          </figure>
        ))}
        {project.images.map((image, index) => (
          <figure
            className={index === 0 ? "project-image-main" : `project-image-side project-image-support-${index}`}
            key={image.src}
          >
            <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
          </figure>
        ))}
      </div>
    );
  }

  return null;
}

function IconBase({ children, size = 22, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </svg>
  );
}

function IconArrow(props) {
  return (
    <IconBase {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </IconBase>
  );
}

function IconCheck(props) {
  return (
    <IconBase {...props}>
      <path d="M20 6 9 17l-5-5" />
      <circle cx="12" cy="12" r="9" />
    </IconBase>
  );
}

function IconArrowUp(props) {
  return (
    <IconBase {...props}>
      <path d="m6 14 6-6 6 6" />
      <path d="M12 8v12" />
    </IconBase>
  );
}

function HelpIcon({ name, ...props }) {
  const icons = {
    compass: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m15 9-2 5-5 2 2-5 5-2Z" />
      </>
    ),
    map: (
      <>
        <path d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3Z" />
        <path d="M9 3v15" />
        <path d="M15 6v15" />
      </>
    ),
    flow: (
      <>
        <rect x="3" y="4" width="7" height="6" rx="1.5" />
        <rect x="14" y="14" width="7" height="6" rx="1.5" />
        <path d="M10 7h3a3 3 0 0 1 3 3v4" />
        <path d="m14 12 2 2 2-2" />
      </>
    ),
    rocket: (
      <>
        <path d="M14 4c3.2.7 5.3 2.8 6 6l-6.5 6.5-4-4L14 4Z" />
        <path d="M9.5 12.5 5 13l2-4 4.5.5" />
        <path d="M13.5 16.5 13 21l4-2 0.5-4.5" />
        <circle cx="15" cy="9" r="1.5" />
      </>
    ),
    pulse: (
      <>
        <path d="M4 13h4l2-7 4 12 2-5h4" />
        <path d="M4 19h16" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" />
      </>
    ),
  };

  return <IconBase {...props}>{icons[name] || icons.compass}</IconBase>;
}

function ContactIcon({ name, ...props }) {
  const icons = {
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    linkedin: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 11v5" />
        <path d="M8 8v.01" />
        <path d="M12 16v-5" />
        <path d="M12 13a2 2 0 0 1 4 0v3" />
      </>
    ),
    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M9 7V5h6v2" />
        <path d="M3 12h18" />
      </>
    ),
  };

  return <IconBase {...props}>{icons[name] || icons.mail}</IconBase>;
}

createRoot(document.getElementById("root")).render(<App />);
