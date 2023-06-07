import React, { useEffect } from "react";
import Quora from "./component/Quora";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./component/auth/Login";
import { auth } from "./firebase";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Following from "./component/pages/following";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const router = createBrowserRouter([
    {
      path: "/",
      element: user ? <Quora /> : <Login />,
    },
    {
      path: "/following",
      element: <Following />,
    },
  ]);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            displayName: authUser.displayName,
            email: authUser.email,
          })
        );
        console.log(authUser);
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
