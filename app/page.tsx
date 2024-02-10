"use client";

import { createContext, useEffect, useState, useReducer } from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import Slider from "@/components/slider/Slider";
import Timer from "@/components/timer/Timer";
import Select from "@/components/select/Select";
import SelectedOptions from "@/components/selectedOptions/SelectedOptions";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";

export const PresetContext = createContext({} as any);

const initialObjectState = {
  id: "",
  name: "",
  time1: "",
  time2: "",
  time3: "",
};

const objectReducer = (state, action) => {
  switch (action.action.type) {
    case "UPDATE_NAME":
      return { ...state, name: action.action.payload };
    case "UPDATE_TIME1":
      return { ...state, time1: action.action.payload };
    case "UPDATE_TIME2":
      return { ...state, time2: action.action.payload };
    case "UPDATE_TIME3":
      return { ...state, time3: action.action.payload };
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
  // const [timerData, setTimerData] = useState({});
  // const [selectedData, setSelectedData] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialState);

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
      <PresetContext.Provider value={{ presetDispatch: dispatch }}>
        <>
          <Nav isScrolled={isScrolled} scrollToSection={scrollToSection} />

          <section id="home" className={styles.section}>
            <h1>Welcome to UMOYA</h1>

            <Link className={styles.block_link} href="/learn">
              Learn to Meditation
            </Link>
            <button
              className={styles.block_link}
              onClick={() => scrollToSection("start")}
            >
              Meditate
            </button>
          </section>

          <section id="start" className={styles.section}>
            <h2>Meditate</h2>
            <Select presets={state.data} />

            <button
              className={styles.block_link}
              onClick={() => scrollToSection("home")}
            >
              Cancel Meditation
            </button>
          </section>
          <Footer isSection={true} />
        </>
      </PresetContext.Provider>
    );
  }
};

export default App;
