import classes from './Button.module.css';

const Button = (props: {
  type?: "button" | "submit";
  onClick?: () => void;
  children: string 
}) => {
  return (
    <button
      className={classes.button}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;