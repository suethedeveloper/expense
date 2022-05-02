import { useReducer } from 'react';

type Action = {
    type: 'INPUT' | 'BLUR' | 'RESET';
    value?: string;
}
type State = {
    value: string;
    isTouched: boolean;
}

type Reducer<State, Action> = 
  (state: State, action: Action) => State;
  
const initialInputState = {
  value: '',
  isTouched: false,
};

const inputStateReducer = (state: State, action: Action) => {
  if (action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === 'BLUR') {
    return { isTouched: true, value: state.value };
  }
  if (action.type === 'RESET') {
    return { isTouched: false, value: '' };
  }
  return state;
};

const useInput = (validateValueFn: (value:string) => boolean) => {
  const [inputState, dispatch] = useReducer<any>(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValueFn(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'INPUT', value: event.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: 'BLUR' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;