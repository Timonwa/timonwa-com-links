import styles from "@/styles/styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  LinkHubIntro,
  IntroLinks,
  PortfolioLinks,
  BlogLinks,
  StoreLinks,
  ProjectLinks,
  TalksMediaLinks,
  OtherLinks,
  TippingLinks,
  SocialMediaLinks,
} from "@/data/creative";

function Content() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Add section IDs for scroll functionality
  const allSections = [
    { ...PortfolioLinks, id: "portfolio" },
    { ...BlogLinks, id: "blogs" },
    { ...StoreLinks, id: "store" },
    { ...TalksMediaLinks, id: "talks" },
    { ...TippingLinks, id: "support" },
    { ...OtherLinks, id: "other" },
    { ...SocialMediaLinks, id: "social" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className={styles.creative}>
      <div className={styles.wrapper}>
        {/* Add the floating menu button and dropdown */}
        <div className={styles.floatingMenu} ref={menuRef}>
          <button
            className={styles.menuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Navigation menu"
          >
            <Image
              src="/images/icons/menu-icon.svg"
              alt=""
              width={24}
              height={24}
            />
          </button>

          {isMenuOpen && (
            <div className={styles.dropdown}>
              {allSections.map((section) => (
                <button
                  key={section.id}
                  className={styles.dropdownItem}
                  onClick={() => scrollToSection(section.id)}
                >
                  {section.title}
                </button>
              ))}
            </div>
          )}
        </div>

        <header>
          <div className={styles.userHeadshot}>
            <Image
              className={styles.userHeadshotImage}
              src={LinkHubIntro.avatar}
              alt={LinkHubIntro.name}
              width={150}
              height={150}
            />
          </div>

          <div className={styles.userDescription}>
            <h1 className={styles.userDescriptionTitle}>{LinkHubIntro.name}</h1>
            <p className={styles.userDescriptionBody}>{LinkHubIntro.tagline}</p>
            <p className={styles.userDescriptionBio}>{LinkHubIntro.bio}</p>
          </div>

          <nav aria-label="Social media links">
            <div className={styles.userSocials}>
              {IntroLinks.links.map((link, index) => (
                <Link
                  key={index}
                  className={styles.userSocialsLink}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.name}
                >
                  {link.icon && (
                    <Image
                      className={styles.userSocialsIcon}
                      src={link.icon}
                      alt={link.name || ""}
                      title={link.name || ""}
                      width={25}
                      height={25}
                    />
                  )}
                </Link>
              ))}
            </div>
          </nav>
        </header>

        <main>
          {allSections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className={
                styles[
                  `${section.title
                    .toLowerCase()
                    .replace(/[^\w\s]/g, "")
                    .replace(/\s+/g, "")}Section`
                ]
              }
            >
              <h2 className={styles.sectionHeading}>{section.title}</h2>
              <p className={styles.sectionDescription}>{section.description}</p>
              <ul className={styles.sectionLinks}>
                {section.links.map((link, itemIndex) => (
                  <li className={styles.sectionLink} key={itemIndex}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.icon && (
                        <Image
                          className={styles.sectionLinkImage}
                          src={link.icon}
                          alt=""
                          width={25}
                          height={25}
                          style={{ objectFit: "cover" }}
                        />
                      )}
                      <span className={styles.sectionLinkTitle}>
                        {link.name}
                      </span>
                      <Image
                        className={styles.sectionLinkIcon}
                        src="/images/icons/ext-link-icon.svg"
                        alt="External link"
                        width={11.33}
                        height={12.9}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </main>

        <footer>
          <p>
            Built by{" "}
            <Link
              href="https://tech.timonwa.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Timonwa
            </Link>{" "}
            <Image
              src="/images/icons/copy-icon.svg"
              className={styles.icon}
              alt=""
              width={30}
              height={30}
              aria-hidden="true"
            />{" "}
            {currentYear}
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Content;
