import React, { useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../../src/Firebase/firebase";
import Swal from "sweetalert2";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        setUser(loggedInUser);
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: ' SuccessFully Login',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
    .then((result) => {
      setUser(null);
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: ' SuccessFully Logout ',
        showConfirmButton: false,
        timer: 1500
      })
    });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
    .then(result => {
      const loggedInUser = result.user;
      setUser(loggedInUser);
    })
  }
  return (
    <div className="text-center">
    {
        user? 
        <button onClick={handleSignOut} className="bg-slate-800 p-2 text-white">
        SignOut
      </button>
      : 
     <div>
         <button
        className="bg-slate-800 p-2 text-white"
        onClick={handleGoogleLogin}
      >
        Google Login
      </button>
      <button onClick={handleGithubSignIn} className="bg-slate-800 p-2 text-white">Github Login</button>
     </div>
    }
     
      {user && (
        <div>
          <h3>User: {user?.displayName}</h3>
          <h3>
            Photo: <img className="mx-auto" src={user?.photoURL} alt="" />
          </h3>
        </div>
      )}
    </div>
  );
};

export default Login;
