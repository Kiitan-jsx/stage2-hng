
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import DetailsPage from "../pages/details";
import Structure from "../pages/structure";
import SearchResult from "../pages/searchresult";


export const HOME = "/";
export const DETAILS = "/movies/:id";
export const SEARCHRESULT = "/searchresult/:id";




export const router = createBrowserRouter([
  {
    path: HOME,
    element: <Structure />,
    children: [
      {
        path: HOME,
        element: <Home />,
      },
      {
        path: DETAILS,
        element: <DetailsPage />,
      },
      {
        path: SEARCHRESULT,
        element: <SearchResult />,
      }
    ]
  },
 
]);