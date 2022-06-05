import { useRef, useState } from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current?.value;
    const enteredPassword= passwordInputRef.current?.value;

    //Add validation if wanted

    setIsLoading(true);
    if (isLogin) {

    } else {
      const key = process.env.REACT_APP_FIREBASE_WEB_API_KEY as string;
      const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`;
      /** body data payload is from
       * https://firebase.google.com/docs/reference/rest/auth#section-create-email-password
       */

      //SignUp Request
      fetch(
        URL,
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true
          }),
          headers: {
            "Content-Type": "application/json"
          }
        }).then((res: any) => {
          setIsLoading(false);
          if (res.ok) {
            //...
          } else {
            return res.json().then((data: any) => {
              let errorMessage = "Authentication failed!";
              if (data?.error?.message) {
                errorMessage = data.error.message;
              }
              // we could show an error modal
              alert(errorMessage);
            })
          }
        });
    }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' ref={emailInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' ref={passwordInputRef} required />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button> }
          {isLoading && <p>Sending request...</p> }
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
