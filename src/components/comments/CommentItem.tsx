import classes from './CommentItem.module.css';

const CommentItem = ({text}:{text: string}) => {
  return (
    <li className={classes.item}>
      <p>{text}</p>
    </li>
  );
};

export default CommentItem;