import { Link } from "react-router-dom";

export default function MovieCardComponent({ data }) {
  
  return (
    
    <Link to={`/movies/${data.id}`}>
      <div data-testid='movie-card' className="h-[370px] w-[250px] relative">
        <div
          className="h-full w-full relative"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${data.poster_path})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          data-testid='movie-poster'
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
          <div className="absolute inset-0 flex flex-col items-left justify-end p-4">
            <h1
              className="text-white font-bold text-2xl mb-2"
              data-testid="movie-title"
            >
              {data.title}
            </h1>
            <h6 className="text-sm text-gray-300">Released on</h6>
            <p className="text-gray-50 text-base" data-testid='movie-release-date'>{data.release_date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
