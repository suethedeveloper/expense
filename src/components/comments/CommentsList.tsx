import CommentItem from './CommentItem';
import classes from './CommentsList.module.css';
import Comment from '../../types/Comment';

const CommentsList = ({comments}: {comments: Comment[]}) => {
  return (
    <ul className={classes.comments}>
      {comments.map((comment: Comment) => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default CommentsList;