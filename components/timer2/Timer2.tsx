import {
  FC,
  useContext,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { PresetContext } from "@/app/page";

type Timer2Props = {
  presetId: string;
  isStarted: boolean;
  finished: boolean;
  setFinished: Dispatch<SetStateAction<boolean>>;
  currentTimer: number;
  setCurrentTimer: Dispatch<SetStateAction<number>>;
  handleStop: () => void;
};

const Timer2: FC<Timer2Props> = ({
  presetId,
  isStarted,
  finished,
  setFinished,
  currentTimer,
  setCurrentTimer,
  handleStop,
}) => {
  const { presetState, presetDispatch } = useContext(PresetContext);
  // const [presetData, setPresetData] = useState(presetState?.data || []);

  // const [timer1, setTimer1] = useState(preset.time1 * 60);
  const [timer1, setTimer1] = useState(
    presetState.data.find((item) => item.id === presetId).time1 * 60
  );
  const [timer2, setTimer2] = useState(
    presetState.data.find((item) => item.id === presetId).time2 * 60
  );
  const [timer3, setTimer3] = useState(
    presetState.data.find((item) => item.id === presetId).time3 * 60
  );

  const [isPaused, setIsPaused] = useState(false);
  // const [currentTimer, setCurrentTimer] = useState(1);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (!isPaused && isStarted) {
      interval = setInterval(() => {
        if (currentTimer === 1) {
          if (timer1 > 0) {
            setTimer1((prevTime) => prevTime - 1);
          } else {
            setCurrentTimer(2);
          }
        } else if (currentTimer === 2) {
          if (timer2 > 0) {
            setTimer2((prevTime) => prevTime - 1);
          } else {
            setCurrentTimer(3);
          }
        } else if (currentTimer === 3) {
          if (timer3 > 0) {
            setTimer3((prevTime) => prevTime - 1);
          } else {
            setCurrentTimer(0);
            setFinished(true);
          }
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [currentTimer, timer1, timer2, timer3, isPaused, isStarted]);

  useEffect(() => {
    if (!isStarted) {
      handleStop;
    }
  }, [isStarted, handleStop]);

  const handlePause = () => {
    setIsPaused((prevState) => !prevState);
  };

  // useEffect(() => {
  //   const preset = state?.data.find((item) => item.id === presetId);
  //   setPresetData(preset);
  // }, [presetId, state?.data]);

  return (
    <div>
      <h2>Timer2</h2>
      {/* <div>{presetId}</div> */}
      {/* <pre>{JSON.stringify(presetState, null, 2)}</pre> */}
      {/* <div>{timer1}</div>
      <div>{timer2}</div>
      <div>{timer3}</div> */}
      {currentTimer === 1 && <div>Timer 1: {timer1}</div>}
      {currentTimer === 2 && <div>Timer 2: {timer2}</div>}
      {currentTimer === 3 && <div>Timer 3: {timer3}</div>}
      {currentTimer === 0 && finished && <div>Finished</div>}
      <button onClick={handlePause}>{isPaused ? "Resume" : "Pause"}</button>
    </div>
  );
};
export default Timer2;
