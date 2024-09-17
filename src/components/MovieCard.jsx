import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card transition-transform transform hover:scale-105 duration-300 shadow-lg hover:shadow-2xl rounded-lg overflow-hidden">
      <Link to={`/movie/${movie.imdbID}`}>
        <img 
          src={movie.Poster} 
          alt={movie.Title} 
          className="w-full h-72 object-cover" 
        />
        <div className="movie-info p-4 bg-white">
          <h3 className="text-lg font-semibold text-gray-800">{movie.Title}</h3>
          <p className="text-sm text-gray-500">{movie.Year}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
