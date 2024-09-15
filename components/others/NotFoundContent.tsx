import React from "react";
import styles from "@/styles/notFound.module.scss";
import Link from "next/link";

export default function NotFoundContent() {
  return (
    <div className={styles.notFound}>
      <main className={styles.wrapper}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.description}>This page does not exist.</p>

        <p className={styles.attribution}>
          <Link href="/">Go back home</Link>
        </p>
      </main>
    </div>
  );
}
