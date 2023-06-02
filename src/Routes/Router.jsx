
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import MainLayout from "../Layout/MainLayout";
import MovieDetails from "../Pages/MovieDetails/MovieDetails";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../Pages/Login/Login";
import BookingForm from "../Pages/BookingForm/BookingForm";
import Register from "../Pages/Register/Register";
const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element:<Home></Home>
        }
        
      ]
    },
    {
      path: "/login",
      element:<LoginLayout></LoginLayout>,
      children: [
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/login/register",
          element: <Register></Register>
        },
        {
          path: "movie/:id",
          element:<MovieDetails></MovieDetails>,
          loader:({params})=>fetch(`http://localhost:5000/movie/${params.id}`)
        },
        {
          path: 'booking/:id',
          element: <BookingForm></BookingForm>,
          loader:({params})=>fetch(`http://localhost:5000/movie/${params.id}`)
        }
      ]
    }
  ]);

export default router;