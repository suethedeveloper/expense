import { useReducer } from "react";

interface State {
  isTouched: boolean;
  value: string;
}

type Action =
  | { type: "INPUT"; value: string }
  | { type: "BLUR" }
  | { type: "RESET" };

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state: State, action: Action): State => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return { isTouched: false, value: "" };
  }
  return state;
};

const useInput = (validateValue: (arg: string) => boolean) => {
  //Add useReducer
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );
  // inputState value가 있으면 valid, isTouched
  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  //Add dispatch functions instead of setFunctions
  const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    //value for inputState state
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;