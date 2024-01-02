import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import MoviesCollectionPage from "./pages/MoviesCollectionPage";
import MoviesSearchPage from "./pages/MoviesSearchPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <MoviesCollectionPage /> },
      { path: "/search", element: <MoviesSearchPage /> },
      { path: ":movieId/details", element: <MovieDetailsPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default router;
