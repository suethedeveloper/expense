import classes from './Card.module.css';

interface CardProps {
  className: string; 
  children: JSX.Element | JSX.Element[]
}

const Card = (props: CardProps) => {
  return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};

export default Card;