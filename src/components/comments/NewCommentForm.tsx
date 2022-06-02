import { FormEvent, useRef, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

import useHttp from '../../hooks/use-http';
import { addComment } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';

import classes from './NewCommentForm.module.css';

const NewCommentForm = ({onAddComment, quoteId}:{onAddComment: () => void; quoteId: string}) => {
  const commentTextRef = useRef<HTMLTextAreaElement>(null);
  // const params = useParams();

  const {sendRequest, status, error} = useHttp(addComment);

  useEffect(() => {
    if (status === 'completed' && !error) {
      onAddComment();
    }
  }, [status, error, onAddComment])

  const submitFormHandler = (event: FormEvent) => {
    event.preventDefault();

    const enteredText = commentTextRef.current!.value;

    sendRequest({commentData: {text: enteredText}, quoteId: quoteId});
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === 'pending' && (
        <div className='centered'>
          <LoadingSpinner />
        </div>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows={5} ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;