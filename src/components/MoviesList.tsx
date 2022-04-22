import Movie from './Movie';
import classes from './MoviesList.module.css';

interface Movie {
  id?: number;
  title: string;
  releaseDate: string;
  openingText: string;
}

const MovieList = (props: {movies: Movie[]}) => {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie: Movie) => (
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
