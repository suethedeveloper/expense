import classes from './Movie.module.css';
import { MovieType } from '../types/MovieType';

const Movie = (props: MovieType) => {
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
    </li>
  );
};

export default Movie;
