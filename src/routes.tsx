import { createBrowserRouter } from "react-router-dom";
import FetchReq from "./new folder/FetchReq";
import PostReq from "./new folder/PostReq";
import PutReq from "./new folder/PutReq";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <FetchReq />,
  },

  {
    path: "/form",
    element: <PostReq />,
  },

  {
    path: "/update/:id",
    element: <PutReq />,
  },
  
]);
