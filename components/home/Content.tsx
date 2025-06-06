import styles from "@/styles/styles.module.scss";
import Image from "next/image";
import Link from "next/link";
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
  const currentYear = new Date().getFullYear();
  const allSections = [
    PortfolioLinks,
    BlogLinks,
    StoreLinks,
    // ProjectLinks,
    TalksMediaLinks,
    OtherLinks,
    TippingLinks,
    SocialMediaLinks,
  ];

  return (
    <div className={styles.creative}>
      <div className={styles.wrapper}>
        <header>
          <div className={styles.userHeadshot}>
            <Image
              className={styles.userHeadshotImage}
              src={LinkHubIntro.avatar}
              alt={LinkHubIntro.name}
              width={150}
              height={150}
              // placeholder="blur"
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
          {allSections.map((section, index) => (
            <section
              key={index}
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
                        src="/images/icons/external-link-creative.svg"
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
              src="/images/icons/copy-creative.svg"
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
