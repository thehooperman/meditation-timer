"use client";

import { useEffect, useState, useReducer } from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import Slider from "@/components/slider/Slider";
import Timer from "@/components/timer/Timer";
import Select from "@/components/select/Select";
import SelectedOptions from "@/components/selectedOptions/SelectedOptions";

const initialObjectState = {
  id: "",
  name: "",
  time1: "",
  time2: "",
  time3: "",
};

const objectReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_NAME":
      return { ...state, name: action.payload };
    case "UPDATE_TIME1":
      return { ...state, time1: action.payload };
    case "UPDATE_TIME2":
      return { ...state, time2: action.payload };
    case "UPDATE_TIME3":
      return { ...state, time3: action.payload };
    default:
      return state;
  }
};

const initialState = {
  data: [],
  isLoading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        data: action.payload.map((item) => ({
          ...initialObjectState,
          ...item,
        })),
        isLoading: false,
        error: null,
      };
    case "FETCH_ERROR":
      return { ...state, isLoading: false, error: action.payload };
    case "UPDATE_ITEM":
      return {
        ...state,
        data: state.data.map((item) =>
          item.id === action.id ? objectReducer(item, action) : item
        ),
      };
    default:
      return state;
  }
};

const App: React.FC = () => {
  // const [data, setData] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // fetch("/api/preset")
    //   .then((response) => response.json())
    //   .then((data) => setData(data))
    //   .catch((error) => console.error("Error:", error));
    fetch("/api/preset")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "FETCH_SUCCESS", payload: data }))
      .catch((error) => dispatch({ type: "FETCH_ERROR", payload: error }));

    const onScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (state.isLoading) {
    return <div>Loading...</div>;
  } else if (state.error) {
    return <div>Error: {state.error.message}</div>;
  } else {
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
          {state.data ? (
            <>
              <Select presets={state.data} />
              {state.data.map((preset) => {
                return <SelectedOptions key={preset.id} preset={preset} />;
              })}
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

        <section id="test" className={styles.section}>
          <h2>Test things here</h2>
          <div>
            {/* <Slider />
            <Slider />
            <Slider /> */}
          </div>
          <div>
            <Timer />
          </div>
        </section>
      </div>
    );
  }
};

export default App;
