import { useParams } from "react-router-dom";
import useMovie from "../../hooks/useMovie";
import { Pinwheel } from "@uiball/loaders";

function ErrorDisplay({ message }) {
  return (
    <div>
      <div className="text-red-600">{message}</div>
    </div>
  );
}

export default function DetailsPage() {
  const { id } = useParams();
  const { movie, isLoading: movieLoading, error } = useMovie(id);
  if (!movie) return null;

  if (error)
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ErrorDisplay message="Unable to load movies. Please check your internet connection" />
      </div>
    );

  if (movieLoading)
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pinwheel speed={1.75} />
      </div>
    );

  const featuredImg = movie?.backdrop_path
    ? `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`
    : "../../assets/altBg.png";

  return (
    <div className="font-rale">
      <section
        className="min-h-[600px] w-full px-[30px] lg:px-[50px] xl:px-[95px] relative"
        style={{
          backgroundImage: `url(${featuredImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        data-testid="movie-overview"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        <div className="py-40 w-full md:w-[60%] lg:w-[40%] xl:w-[404px] z-50 relative">
          <h1
            className="text-5xl text-white font-bold font-DMsans mb-4"
            data-testid="movie-title"
          >
            {movie?.title}
          </h1>

          <p className="font-medium text-white text-sm mb-8">
            {movie?.overview}
          </p>

          <div className="w-full flex items-center gap-10">
            <div>
              <h1 className="text-gray-200">Runtime</h1>
              <div className="flex items-center gap-1">
                <p className="text-white" data-testid="movie-runtime">
                  {movie.runtime}
                </p>
                <span className="text-white">minutes</span>
              </div>
            </div>

            <div>
              <h1 className="text-gray-200" data-testid="movie-release-date">
                Release Date
              </h1>
              <p className="text-white">{movie.release_date}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
