import { useParams } from "react-router-dom";
import useSearch from "../../hooks/useSearch";
import MovieCard from "../home/MovieCardComponent";
import { Pinwheel } from "@uiball/loaders";

function ErrorMessage({ message }) {
    return (
      <div>
        <div className="text-red-600">{message}</div>
      </div>
    );
}



export default function SearchResult() {
  
    const {id}= useParams();
    const {searchResult, isLoading, error, moviesError}= useSearch(id);
    console.log (searchResult)

    if (error || moviesError)
    return (
      <div 
        style={{
         justifyContent: "center",
          width: "100%",
          display: "flex",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <ErrorMessage message="Unable to load movies. Please check your internet connection" />

      </div>
    );

    if (isLoading)
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

  return (
    <div className="flex flex-col justify-center items-center pt-[80px] my-10">
        <h1 className="pb-10 font-bold">Search Results</h1>
        <div className="font-rale grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-20 gap-y-24">

        {searchResult.map((data) => (
        <MovieCard key={data.id} data={data}/>
        ))}

        </div>
    </div>
  );
}
