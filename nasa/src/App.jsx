import "./mars.css";

const services = [
  {
    title: "Space Travel",
    image: "/images/mars1%201.png",
    alt: "A rocket ready for departure on Mars",
    category: "THE JOURNEY",
    description: "A new route to the red planet starts here.",
  },
  {
    title: "Explore Mars",
    image: "/images/artwork%20(15).png",
    alt: "An astronaut exploring the surface of Mars",
    category: "DISCOVERY",
    description: "See the red planet through an explorer's eyes.",
  },
  {
    title: "Life on Mars",
    image:
      "/images/Leonardo_Diffusion_Astonaut_in_MARS_planet_mars_planet_Levera_0.png",
    alt: "A future settlement on the surface of Mars",
    category: "A NEW HOME",
    description: "Imagine what life could look like beyond Earth.",
  },
];

const travelViews = [
  {
    image: "/images/mars1%201.png",
    alt: "A rocket prepared for a journey to Mars",
  },
  {
    image: "/images/iss-cupola.jpg",
    alt: "Earth seen through windows on the International Space Station",
  },
  {
    image:
      "/images/Leonardo_Diffusion_Astonaut_in_MARS_planet_mars_planet_Levera_0.png",
    alt: "An artist concept of life in a future Mars settlement",
  },
];

const benefits = [
  [
    "cheap",
    "Cheap",
    "Experience the wonders of Mars with an affordable ticket.",
  ],
  [
    "health",
    "Health",
    "Rest assured with our around-the-clock medical facility.",
  ],
  [
    "secure",
    "Secure",
    "Uncompromising safety measures for an extraordinary journey.",
  ],
  ["quick", "Quick", "Effortlessly embark on your Mars adventure."],
];

const footerLinks = [
  ["Flight", "Departure", "Arrival", "Duration", "Spaceship"],
  ["Company", "About us", "Consultation", "Our mission", "Safety standards"],
  ["Appointments", "Schedule", "Explore", "Accommodation", "Book"],
  ["Contact us", "Call us", "Email", "Address", "Social"],
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <path
        d="M4.167 10h11.666m0 0-5-5m5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BenefitIcon({ name }) {
  const paths = {
    cheap: (
      <>
        <path d="M12 3 4 7v5c0 5 8 9 8 9s8-4 8-9V7l-8-4Z" />
        <path d="m9 13 2 2 4-5" />
      </>
    ),
    health: (
      <>
        <path d="M20.8 8.6c0 5.2-8.8 10-8.8 10S3.2 13.8 3.2 8.6A4.6 4.6 0 0 1 12 6.4a4.6 4.6 0 0 1 8.8 2.2Z" />
        <path d="M4 12h4l2-3 3.5 6 2-3H20" />
      </>
    ),
    secure: (
      <>
        <path d="M12 3 4 7v5c0 5 8 9 8 9s8-4 8-9V7l-8-4Z" />
        <circle cx="12" cy="11" r="2" />
        <path d="M12 13v2" />
      </>
    ),
    quick: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  };
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="benefit-icon"
    >
      {paths[name]}
    </svg>
  );
}

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#11152f] font-['Poppins',system-ui,sans-serif] text-[#fff7ef]">
      <section id="home" className="hero relative isolate overflow-hidden">
        <div className="hero-sky absolute inset-0 -z-20" />
        <div className="hero-stars absolute inset-0 -z-10" />
        <div className="planet-stage" aria-label="A rotating planet Mars">
          <div className="planet-aura" />
          <div className="planet">
            <div className="planet-texture" />
            <div className="planet-highlight" />
          </div>
          <div className="planet-shadow" />
        </div>

        <nav className="relative z-10 mx-auto flex max-w-[1280px] items-center justify-between px-6 py-6 md:px-12">
          <a
            href="#home"
            className="flex items-center gap-3"
            aria-label="Stellae home"
          >
            <span className="brand-mark">S</span>
            <span className="font-['Unbounded'] text-xs font-bold tracking-[.2em]">
              STELLAE
            </span>
          </a>
          <div className="hidden items-center gap-9 rounded-full border border-white/10 bg-[#181932]/55 px-7 py-3 text-xs text-[#d2cada] backdrop-blur-md md:flex">
            <a className="nav-link" href="#services">
              Services
            </a>
            <a className="nav-link" href="#discover">
              Discover
            </a>
            <a className="nav-link" href="#reliability">
              Why us
            </a>
          </div>
          <a
            href="#services"
            className="rounded-full border border-white/20 px-5 py-2.5 text-xs transition hover:border-[#ffad79] hover:text-[#ffbd91]"
          >
            Explore Mars
          </a>
        </nav>

        <div className="relative z-[1] mx-auto flex max-w-[1280px] px-6 pt-16 md:px-12 md:pt-28">
          <div className="hero-copy max-w-[590px]">
            <p className="mb-3 text-xs font-medium uppercase tracking-[.42em] text-[#f4c098]">
              PLANET
            </p>
            <h1 className="font-['Unbounded'] text-[clamp(4.5rem,10vw,8rem)] font-extrabold leading-[.98] tracking-[.22em]">
              MARS
            </h1>
            <p className="mt-7 max-w-[430px] text-sm leading-7 text-[#ded5e3] md:text-base">
              Become a Martian
              <span className="mt-2 block text-xs text-[#b8b2c7]">
                A new world is waiting to be explored.
              </span>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#services" className="button-primary">
                Explore Mars <ArrowIcon />
              </a>
              <a href="#travel" className="button-quiet">
                Watch the journey
              </a>
            </div>
          </div>
        </div>

        <div className="hero-caption absolute bottom-28 right-[8%] z-[1] hidden max-w-48 text-xs leading-5 text-[#e8d9d4] lg:block">
          <span className="mb-2 block text-[10px] uppercase tracking-[.2em] text-[#ffbd91]">
            The red planet
          </span>
          A world of ancient valleys, endless skies, and new beginnings.
        </div>
      </section>

      <section id="services" className="services-wrap">
        <div className="services-panel">
          <h2 className="section-title text-center">Our Services</h2>
          <div className="service-grid mx-auto mt-8 grid max-w-[1080px] grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
            {services.map((service, index) => (
              <a
                href="#discover"
                className="service-card group"
                key={service.title}
              >
                <div className="service-image">
                  <img src={service.image} alt={service.alt} loading="lazy" />
                  <span className="service-number">
                    <span>0{index + 1}</span>
                    <span className="service-category">{service.category}</span>
                  </span>
                  <span className="service-arrow">
                    <ArrowIcon />
                  </span>
                </div>
                <div className="service-copy">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="agency-intro">
            <h3 className="mt-3 font-['Unbounded'] text-lg font-semibold md:text-xl">
              We are reliable Travel Agency
            </h3>
            <p className="mx-auto mt-3 max-w-[540px] text-xs leading-6 text-[#c2bbd2]">
              Our team of space travel specialists is dedicated to bringing you
              a safe and unforgettable journey to Mars.
            </p>
            <a href="#reliability" className="button-primary mt-5">
              Explore more <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section id="discover" className="mars-feature-section">
        <div className="mars-feature-layout">
          <div className="mars-feature-copy">
            <p className="eyebrow">Field notes · 01</p>
            <h2 className="section-title">
              Get to know <span>Mars</span>
            </h2>
            <p>
              From ancient rivers to rugged red valleys, discover what makes
              Mars our next great frontier.
            </p>
            <a href="#travel" className="button-quiet">
              Continue the journey <ArrowIcon />
            </a>
          </div>
          <div className="mars-feature-card">
            <img
              src="/images/fa1375e44a68e2cdf1de6cc111fda2a7%201.png"
              alt="Mars: a rover beneath the planet, with an overview of its surface and an exploration fact"
              loading="lazy"
              className="mars-feature-composite"
            />
          </div>
        </div>
      </section>

      <section id="travel" className="travel-section">
        <div className="travel-backdrop" />
        <div className="travel-content">
          <h2 className="section-title">Discover the thrill of space travel</h2>
          <div className="travel-gallery">
            {travelViews.map((view, index) => (
              <div
                className={`travel-view travel-view-${index + 1}`}
                key={view.alt}
              >
                <img src={view.image} alt={view.alt} loading="lazy" />
              </div>
            ))}
          </div>
          <p className="mx-auto mt-5 max-w-md text-xs leading-6 text-[#e0d8e6]">
            Panoramic views. Specially designed windows. A front-row seat to the
            wonders of space.
          </p>
          <a href="#landing" className="button-primary mt-5">
            Explore more <ArrowIcon />
          </a>
        </div>
      </section>

      <section id="landing" className="landing-map">
        <h2 className="sr-only">Mars landings</h2>

        <div style={{ textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/images/il_fullxfull.2980192095_a8nh (1) 1.png"
              alt="NASA"
              style={{
                width: "700px",
                maxWidth: "90%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </section>

      <section id="reliability" className="reliability-section">
        <p className="eyebrow text-center">Every step of the way</p>
        <h2 className="section-title mt-3 text-center">How reliable we are</h2>
        <div className="benefit-grid">
          {benefits.map(([icon, title, description]) => (
            <article className="benefit-card" key={title}>
              <BenefitIcon name={icon} />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <a href="#home" className="button-primary mt-8">
          Learn more <ArrowIcon />
        </a>
      </section>

      <footer className="site-footer">
        <div className="footer-shade" />
        <div className="footer-content">
          {footerLinks.map(([heading, ...links]) => (
            <div key={heading}>
              <h3>{heading}</h3>
              {links.map((link) => (
                <a href="#home" key={link}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="footer-brand">
          <a
            href="#home"
            className="flex items-center gap-3"
            aria-label="Stellae home"
          ></a>
        </div>
      </footer>
    </main>
  );
}
