import Movie from './Movie';
import classes from './MoviesList.module.css';
import { MovieType } from '../types/MovieType';

const MovieList = (props: {movies: MovieType[]}) => {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie: MovieType) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;
