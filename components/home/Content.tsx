import styles from "@/styles/styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import headshot from "@/public/images/creative.jpg";
import {
  creativeExploreLinks,
  creativeGoodiesData,
  creativeOthersLinks,
  creativeSocialsLinks,
} from "@/data";

function Content() {
  //* function to automatically update copyright date
  let date = new Date().getFullYear();

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
              👩🏽‍💻 Tech sis | Introvert 💭 | Weirdo 👻 <br />
              Trying to find the laughter in chaos
            </p>
          </div>

          <div className={styles.userSocials}>
            <Link
              className={styles.userSocialsLink}
              href="https://twitter.com/timonwa_"
              target="_blank"
              rel="noopener"
            >
              <Image
                className={styles.userSocialsIcon}
                src="/images/icons/twitter-creative.svg"
                alt="Twitter handle"
                width="25"
                height="25"
              />
            </Link>
            <Link
              className={styles.userSocialsLink}
              href="https://www.instagram.com/timonwa_"
              target="_blank"
              rel="noopener"
            >
              <Image
                className={styles.userSocialsIcon}
                src="/images/icons/instagram-creative.svg"
                alt="Instagram handle"
                width="25"
                height="25"
              />
            </Link>
            <Link
              className={styles.userSocialsLink}
              href="https://www.tiktok.com/@timonwa_"
              target="_blank"
              rel="noopener"
            >
              <Image
                className={styles.userSocialsIcon}
                src="/images/icons/tiktok-creative.svg"
                alt="TikTok handle"
                width="25"
                height="25"
              />
            </Link>
            <Link
              className={styles.userSocialsLink}
              href="https://youtube.com/@timonwa"
              target="_blank"
              rel="noopener"
            >
              <Image
                className={styles.userSocialsIcon}
                src="/images/icons/youtube-creative.svg"
                alt="YouTube handle"
                width="25"
                height="25"
              />
            </Link>
            <Link
              className={styles.userSocialsLink}
              href="mailto:creator@timonwa.com"
              target="_blank"
              rel="noopener"
            >
              <Image
                className={styles.userSocialsIcon}
                src="/images/icons/email-creative.svg"
                alt="Email address"
                width="25"
                height="25"
              />
            </Link>
          </div>
        </header>

        <main>
          <section className={styles.goodiesSection}>
            <h2 className={styles.sectionHeading}>Goodies</h2>

            <div className={styles.sectionLinks}>
              {creativeGoodiesData.map((goodies, index) => (
                <p className={styles.sectionLink} key={index}>
                  <Link href={goodies?.link} target="_blank" rel="noopener">
                    <Image
                      className={styles.sectionLinkImage}
                      src={goodies?.image}
                      alt={`${goodies?.name} logo`}
                      width={25}
                      height={25}
                      style={{
                        objectFit: "cover",
                      }}
                    />
                    <span className={styles.sectionLinkTitle}>
                      {goodies?.name}
                    </span>

                    <Image
                      className={styles.sectionLinkIcon}
                      src="/images/icons/external-link-creative.svg"
                      alt="link icon"
                      width={11.33}
                      height={12.9}
                    />
                  </Link>
                </p>
              ))}
            </div>
          </section>

          <section className={styles.socialSection}>
            <h2 className={styles.sectionHeading}>Social Handles</h2>

            <div className={styles.sectionLinks}>
              {creativeSocialsLinks.map((socials, index) => (
                <p className={styles.sectionLink} key={index}>
                  <Link href={socials?.link} target="_blank" rel="noopener">
                    <Image
                      className={styles.sectionLinkImage}
                      src={socials?.image}
                      alt={`${socials?.name} logo`}
                      width={25}
                      height={25}
                    />
                    <span className={styles.sectionLinkTitle}>
                      {socials?.name}
                    </span>
                    <Image
                      className={styles.sectionLinkIcon}
                      src="/images/icons/external-link-creative.svg"
                      alt="link icon"
                      width={11.33}
                      height={12.9}
                    />
                  </Link>
                </p>
              ))}
            </div>
          </section>

          <section className={styles.othersSection}>
            <h2 className={styles.sectionHeading}>More about Me</h2>

            <div className={styles.sectionLinks}>
              {creativeExploreLinks.map((explore, index) => (
                <p className={styles.sectionLink} key={index}>
                  <Link href={explore?.link} target="_blank" rel="noopener">
                    <Image
                      className={styles.sectionLinkImage}
                      src={explore?.image}
                      alt={explore?.name}
                      width={25}
                      height={25}
                    />
                    <span className={styles.sectionLinkTitle}>
                      {explore?.name}
                    </span>
                    <Image
                      className={styles.sectionLinkIcon}
                      src="/images/icons/external-link-creative.svg"
                      alt="link icon"
                      width={11.33}
                      height={12.9}
                    />
                  </Link>
                </p>
              ))}
            </div>
          </section>

          <section className={styles.othersSection}>
            <h2 className={styles.sectionHeading}>Other Links</h2>

            <div className={styles.sectionLinks}>
              {creativeOthersLinks.map((others, index) => (
                <p className={styles.sectionLink} key={index}>
                  <Link href={others?.link} target="_blank" rel="noopener">
                    <Image
                      className={styles.sectionLinkImage}
                      src={others?.image}
                      alt={others?.name}
                      width={25}
                      height={25}
                    />
                    <span className={styles.sectionLinkTitle}>
                      {others?.name}
                    </span>
                    <Image
                      className={styles.sectionLinkIcon}
                      src="/images/icons/external-link-creative.svg"
                      alt="link icon"
                      width={11.33}
                      height={12.9}
                    />
                  </Link>
                </p>
              ))}
            </div>
          </section>
        </main>

        <footer>
          <p>
            Built by&nbsp;
            <Link href="https://timonwa.com" target="_blank" rel="noopener">
              Timonwa
            </Link>
            &nbsp;
            <Image
              src="/images/icons/copy-creative.svg"
              className={styles.icon}
              alt="copyright"
              width={30}
              height={30}
            />
            &nbsp;
            {date}
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Content;
