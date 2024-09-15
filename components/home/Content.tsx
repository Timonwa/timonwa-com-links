import styles from "@/styles/styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import headshot from "@/public/images/creative.jpg";
import { sections, socialMediaLinks } from "@/data";

function Content() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.creative}>
      <div className={styles.wrapper}>
        <header>
          <div className={styles.userHeadshot}>
            <Image
              className={styles.userHeadshotImage}
              src={headshot}
              alt="Timonwa Akintokun"
              width={150}
              height={150}
              placeholder="blur"
            />
          </div>

          <div className={styles.userDescription}>
            <h1 className={styles.userDescriptionTitle}>Timonwa</h1>
            <p className={styles.userDescriptionBody}>
              <span aria-label="Tech sis">👩🏽‍💻 Tech sis</span> |{" "}
              <span aria-label="Introvert">💭 Introvert</span> |{" "}
              <span aria-label="Weirdo">👻 Weirdo</span> <br />
              Trying to find the laughter in chaos
            </p>
          </div>

          <nav aria-label="Social media links">
            <div className={styles.userSocials}>
              {socialMediaLinks.map((social, index) => (
                <Link
                  key={index}
                  className={styles.userSocialsLink}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.alt} profile`}
                >
                  <Image
                    className={styles.userSocialsIcon}
                    src={social.icon}
                    alt=""
                    width={25}
                    height={25}
                  />
                </Link>
              ))}
            </div>
          </nav>
        </header>

        <main>
          {sections.map((section, index) => (
            <section
              key={index}
              className={
                styles[
                  `${section.title.toLowerCase().replace(/\s+/g, "")}Section`
                ]
              }
            >
              <h2 className={styles.sectionHeading}>{section.title}</h2>
              <ul className={styles.sectionLinks}>
                {section.data.map((item, itemIndex) => (
                  <li className={styles.sectionLink} key={itemIndex}>
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        className={styles.sectionLinkImage}
                        src={item.image}
                        alt=""
                        width={25}
                        height={25}
                        style={{ objectFit: "cover" }}
                      />
                      <span className={styles.sectionLinkTitle}>
                        {item.name}
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
              href="https://timonwa.com"
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
