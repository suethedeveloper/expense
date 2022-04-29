import { FormEvent } from 'react';
import useInput from '../hooks/use-input';

const BasicForm = () => {
  const isNotEmpty = (value:string) => value.length > 0; 
  const { 
    value: firstNameValue,
    isValid: isFirstnameValid,
    hasError: hasFirstnameError,
    valueChangeHandler: firstnameChangeHandler,
    inputBlurHandler: firstnameBlurHandler,
    reset: resetFirstname
  } = useInput(isNotEmpty);

  const { 
    value: lastNameValue,
    isValid: isLastnameValid,
    hasError: hasLastnameError,
    valueChangeHandler: lastnameChangeHandler,
    inputBlurHandler: lastnameBlurHandler,
    reset: resetLastname
  } = useInput(isNotEmpty);

  const { 
    value: emailValue,
    isValid: isEmailValid,
    hasError: hasEmailError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput(value => value.trim() !== '' && value.includes("@"));

  let formIsValid = false;
  if (isFirstnameValid && isLastnameValid && isEmailValid) {
    formIsValid = true;
  }

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    resetFirstname();
    resetLastname();
    resetEmail();
  }

  const firstNameCls = hasFirstnameError ? "form-control invalid" : "form-control";
  const lastNameCls = hasLastnameError ? "form-control invalid" : "form-control";
  const emailNameCls = hasEmailError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameCls}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name'
            value={firstNameValue}
            onChange={firstnameChangeHandler}
            onBlur={firstnameBlurHandler} />
            { hasFirstnameError && <p className='error-text'>Please enter a first name.</p>}
        </div>
        <div className={lastNameCls}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name'
            value={lastNameValue}
            onChange={lastnameChangeHandler}
            onBlur={lastnameBlurHandler} />
            { hasLastnameError && <p className='error-text'>Please enter a last name.</p>}
        </div>
      </div>
      <div className={emailNameCls}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name'
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler} />
          { hasEmailError && <p className='error-text'>Please enter an Email address.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
