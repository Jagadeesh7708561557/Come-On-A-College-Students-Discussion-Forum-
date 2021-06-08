import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import Comeon from './component/Comeon';
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import Login from "./component/auth/Login";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
            displayName: authUser.displayName,
            photo: authUser.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
      console.log(authUser);
    });
  }, [dispatch]);
  return <div className="App">{user ? <Comeon /> : <Login />}</div>;
}

export default App;