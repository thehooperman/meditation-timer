"use client";

import { createContext, useEffect, useState, useReducer } from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import Slider from "@/components/slider/Slider";
import Timer from "@/components/timer/Timer";
import Select from "@/components/select/Select";
import SelectedOptions from "@/components/selectedOptions/SelectedOptions";

export const PresetContext = createContext({} as any);

const initialObjectState = {
  id: "",
  name: "",
  time1: "",
  time2: "",
  time3: "",
};

const objectReducer = (state, action) => {
  // console.log("objectReducer state", JSON.stringify(state));
  // console.log("objectReducer action", JSON.stringify(action));
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

  // TODO: Test only, remove later
  // useEffect(() => {
  //   console.log("##### state", state);
  // }, [state]);

  // TODO: Test only, remove later
  const handleChangeTest = (event) => {
    console.log("event.target.value", event.target.value);
    dispatch({
      type: "UPDATE_ITEM",
      id: "72dfaca2-2058-4d20-abe5-7b1968d76171",
      action: { type: "UPDATE_TIME3", payload: event.target.value },
    });
  };

  if (state.isLoading) {
    return <div>Loading...</div>;
  } else if (state.error) {
    return <div>Error: {state.error.message}</div>;
  } else {
    return (
      <PresetContext.Provider value={{ presetDispatch: dispatch }}>
        <>
          <nav className={`${styles.nav} ${isScrolled ? styles.show : ""}`}>
            <ul>
              <li onClick={() => scrollToSection("home")}>Home</li>
              <li onClick={() => scrollToSection("start")}>
                Select Meditating
              </li>
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
              <label htmlFor="time3">Test</label>
              <input
                type="range"
                id="time3"
                name="time3"
                min="0"
                max="10"
                // value={state.data[1].time3}
                onChange={handleChangeTest}
              />
            </div>
            <div>
              <Timer />
            </div>
          </section>
        </>
      </PresetContext.Provider>
    );
  }
};

export default App;
