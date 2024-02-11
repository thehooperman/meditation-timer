"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import Slider from "@/components/slider/Slider";
import Select from "@/components/select/Select";

const App: React.FC = () => {
  const [data, setData] = useState(null);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    fetch("/api/preset")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));

    const onScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div>
      <nav className={`${styles.nav} ${isScrolled ? styles.show : ""}`}>
        <ul>
          <li onClick={() => scrollToSection("home")}>Home</li>
          <li onClick={() => scrollToSection("start")}>Select Meditating</li>
          <li onClick={() => scrollToSection("meditate")}> Meditation</li>
          <li onClick={() => scrollToSection("test")}> Test</li>
        </ul>
      </nav>

      <section id="home" className={styles.section}>
        <h1>Welcome to UMOYA</h1>

        <Link className={styles.block_link} href="/learn">
          Learn about Meditation
        </Link>
        <button
          className={styles.block_link}
          onClick={() => scrollToSection("start")}
        >
          Start Meditation
        </button>
      </section>

      <section id="start" className={styles.section}>
        <h2>Select Your Meditation</h2>
        {data ? (
          <>
            <div>{JSON.stringify(data)}</div>
            <Select presets={data} />
          </>
        ) : (
          <p>Loading...</p>
        )}

        <button
          className={styles.block_link}
          onClick={() => scrollToSection("meditate")}
        >
          Begin Meditation
        </button>
      </section>

      <section id="meditate" className={styles.section}>
        <h2>Your Meditation</h2>
        <p>Display your projects and their descriptions here.</p>
        <button
          className={styles.block_link}
          onClick={() => scrollToSection("home")}
        >
          Stop Meditation
        </button>
      </section>
    </div>
  );
};

export default App;
